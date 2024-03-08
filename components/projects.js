import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './swiperStyles.module.css';


const ProjectSwiper = () => {
    return (
        <Swiper
            style={{ '--swiper-theme-color': '#007aff' }}
            className={styles.swiperContainer}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <img src="static/projects/project1.webp" alt="Project 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="static/projects/project2.webp" alt="Project 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="static/projects/project3.webp" alt="Project 3" />
            </SwiperSlide>
            {/* Add more SwiperSlide components if you have more projects */}
        </Swiper>
    );
};

export default ProjectSwiper;
