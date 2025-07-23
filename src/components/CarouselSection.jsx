import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './HalamanUtama.css';

const CarouselSection = () => {
  return (
    <Container fluid className="carousel-wrapper px-0">
      <Carousel
        indicators={true}
        controls={true}
        interval={5000}
        pause={false}
        wrap={true}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="images/Tumbnail/Tumbnail1.png"
            alt="Jadwal Misa Gereja St. Martinus"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="images/Tumbnail/Tumbnail2.png"
            alt="Jadwal Misa Lainnya"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="images/Tumbnail/Tumbnail3.png"
            alt="Paroki St. Martinus Balai Berkuak"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="images/Tumbnail/Tumbnail4.png"
            alt="Paroki St. Martinus Balai Berkuak"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="images/Tumbnail/Tumbnail5.png"
            alt="Paroki St. Martinus Balai Berkuak"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default CarouselSection;