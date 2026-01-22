import { db } from "../config/firebaseConfig.js";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";

/**
 * Obtiene los 3 últimos posts de Firestore
 * @returns {Promise<Array>} Array con los slugs de los últimos 3 posts
 */
export const getLastThreePostsSlugs = async () => {
  try {
    const postsRef = collection(db, "posts");
    console.log("📚 Buscando posts en la colección 'posts'...");
    
    // Ordena por fecha descendente y obtiene solo 3
    const q = query(postsRef, orderBy("date", "desc"), limit(3));
    const snapshot = await getDocs(q);
    
    console.log(`📊 Se encontraron ${snapshot.docs.length} posts`);
    
    if (snapshot.empty) {
      console.warn("⚠️ No hay posts en la colección. Asegúrate de que:");
      console.warn("  - La colección 'posts' existe");
      console.warn("  - Hay documentos en la colección");
      console.warn("  - Los documentos tienen los campos: slug, date");
      return [];
    }
    
    const slugs = snapshot.docs.map((doc) => ({
      slug: doc.data().slug,
      id: doc.id,
      ...doc.data(),
    }));

    console.log("✅ Posts obtenidos exitosamente:", slugs);
    return slugs;
  } catch (error) {
    console.error("❌ Error al obtener los posts de Firebase:", error);
    console.error("Detalles del error:", error.message);
    return [];
  }
};

/**
 * Obtiene todos los posts de Firestore (sin ordenar, para debugging)
 * @returns {Promise<Array>} Array con todos los posts sin filtrar
 */
export const getAllPostsRaw = async () => {
  try {
    const postsRef = collection(db, "posts");
    const snapshot = await getDocs(postsRef);
    
    console.log(`📋 Total de documentos en 'posts': ${snapshot.docs.length}`);
    snapshot.docs.forEach((doc) => {
      console.log("Documento:", doc.id, doc.data());
    });

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("❌ Error al obtener posts sin filtrar:", error);
    return [];
  }
};

/**
 * Obtiene un post específico por su slug
 * @param {string} slug - El slug del post
 * @returns {Promise<Object|null>} El post o null si no existe
 */
export const getPostBySlug = async (slug) => {
  try {
    const postsRef = collection(db, "posts");
    const q = query(postsRef, orderBy("date", "desc"));
    const snapshot = await getDocs(q);
    
    const post = snapshot.docs.find((doc) => doc.data().slug === slug);
    return post ? { id: post.id, ...post.data() } : null;
  } catch (error) {
    console.error("Error al obtener el post:", error);
    return null;
  }
};
