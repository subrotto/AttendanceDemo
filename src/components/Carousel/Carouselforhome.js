import React, { useEffect, useRef } from 'react';

const Carouselforhome = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    let currentSlide = 1;
    const slides = carouselRef.current.children;
    const totalSlides = slides.length;

    const interval = setInterval(() => {
      const nextSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;
      slides[currentSlide - 1].classList.remove('opacity-100');
      slides[currentSlide - 1].classList.add('opacity-0');
      slides[nextSlide - 1].classList.remove('opacity-0');
      slides[nextSlide - 1].classList.add('opacity-100');
      currentSlide = nextSlide;
    }, 5000); // Adjust the time interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel w-full" ref={carouselRef}>
      <div id="slide1" className="carousel-item relative w-full opacity-100">
        <img src="https://hstu.ac.bd/img/home/slider/hstu_main_gate.jpg" className="w-full" />
       
      </div>
      <div className="carousel w-full" ref={carouselRef}>
      <div id="slide1" className="carousel-item relative w-full opacity-100">
        <img src="https://hstu.ac.bd/img/home/slider/hstu_main_gate.jpg" className="w-full" />
       
      </div>
    </div>
    </div>
  );
};

export default Carouselforhome;
