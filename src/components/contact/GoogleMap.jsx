import { CONTACT_INFO } from '../../utils/constants';
import './GoogleMap.css';

const GoogleMap = () => {
  return (
    <div className="google-map-container">
      <iframe 
        src={CONTACT_INFO.map}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen="" 
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación Amoruso Inversiones C.A."
      ></iframe>
    </div>
  );
};

export default GoogleMap;
