import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion as Motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './TestimonialCarousel.css';

const TestimonialCarousel = ({ testimonials }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <Motion.div
      ref={ref}
      className="testimonial-carousel"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        navigation={true}
        breakpoints={{
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          }
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, index) => (
                  <i 
                    key={index} 
                    className={`fas fa-star ${index < testimonial.rating ? 'star-filled' : 'star-empty'}`}
                  ></i>
                ))}
              </div>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="testimonial-img"
                />
                <div className="testimonial-info">
                  <h5 className="testimonial-name">{testimonial.name}</h5>
                  <p className="testimonial-position">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Motion.div>
  );
};

TestimonialCarousel.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      quote: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TestimonialCarousel;
