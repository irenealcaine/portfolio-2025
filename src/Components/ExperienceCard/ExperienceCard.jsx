import "./ExperienceCard.css";

const ExperienceCard = ({ index, id, title, company, ubication, date, description }) => {
    return (
        <li key={id} className={`timeline-item timeline-block-${index % 2 !== 0 ? "left" : "right"
            }`}>
            <div className="marker"></div>
            <div className="timeline-content">
                <h3>{title}</h3>
                <p className="ubication-date">{company} | {ubication}</p>
                <ul className="job-description">
                    {description.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
                <p className="ubication-date">{date}</p>
            </div>
        </li>
    );
};

export default ExperienceCard;