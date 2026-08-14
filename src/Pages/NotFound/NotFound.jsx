import { Helmet } from "react-helmet-async"

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 | Irene Alcaine</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <h1>404</h1>
        <p>Página no encontrada</p>
      </main>
    </>
  )
}

export default NotFoundPage
