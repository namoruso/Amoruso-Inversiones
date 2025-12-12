import { motion as Motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import './TeamCard.css';

const TeamCard = ({ member, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <Motion.div
      ref={ref}
      className="team-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <div className="team-img-container">
        <img 
          src={member.image} 
          alt={member.name} 
          className="team-img"
        />
        <div className="team-overlay">
          <div className="team-social">
            <a 
              href={member.social.facebook} 
              className="team-social-icon"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a 
              href={member.social.instagram} 
              className="team-social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a 
              href={member.social.linkedin} 
              className="team-social-icon"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="team-info">
        <h4 className="team-name">{member.name}</h4>
        <p className="team-position">{member.position}</p>
      </div>
    </Motion.div>
  );
};

TeamCard.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    social: PropTypes.shape({
      facebook: PropTypes.string,
      instagram: PropTypes.string,
      linkedin: PropTypes.string
    }).isRequired
  }).isRequired,
  delay: PropTypes.number
};

export default TeamCard;
