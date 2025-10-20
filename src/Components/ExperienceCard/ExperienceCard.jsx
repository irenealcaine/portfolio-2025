import "./ExperienceCard.css";

const ExperienceCard = ({ index, id, title, company, ubication, date, description, color }) => {
    return (
        <li key={id} className={`timeline-item timeline-block-${index % 2 !== 0 ? "left" : "right"
            } ${color}`}>
            <div className="marker"></div>
            <div className="timeline-content">
                <h3>{title}</h3>
                <p className="company-ubication"><span>{company}</span> | {ubication}</p>
                <ul className="job-description">
                    {description.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
                <p className="date">{date}</p>
            </div>
        </li>
    );
};

export default ExperienceCard;