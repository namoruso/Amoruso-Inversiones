import { motion as Motion } from 'framer-motion';

import { WHY_CHOOSE_US } from '../../utils/constants';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-grid">
      {WHY_CHOOSE_US.map((item, index) => (
        <Motion.div
          key={item.id}
          className="why-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className="why-icon">
            <i className={`fas ${item.icon}`}></i>
          </div>
          <h4 className="why-title">{item.title}</h4>
          <p className="why-description">{item.description}</p>
        </Motion.div>
      ))}
    </div>
  );
};

export default WhyChooseUs;
