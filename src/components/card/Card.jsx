import "./Card.css";
import { useTheme } from '../../components/ThemeContext'

export default function Card({ 
  title, 
  description, 
  image, 
  children,
  techs = [],
}) {
  const { theme } = useTheme()
  return (
    <div className={`card ${theme}`}>

      <div className="card-body">
        {title && <h2 className="card-title">{title}</h2>}

        {image && (
          <div className="card-image">
            <img src={image} alt={title} />
          </div>
        )}
        
        {description && (
          <p className="card-description">{description}</p>
        )}

        <div className="tech-list">
          {techs.map((t, i) => (
            <span key={i} className="tech-tag">{t}</span>
          ))}
        </div>

        {children && (
          <div className="card-actions">
            {children}
          </div>
        )}

        
      </div>

    </div>
  );
}
