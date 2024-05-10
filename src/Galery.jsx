import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Galery.module.css'
import australia from './img/fotos/australia.svg';
import into from './img/fotos/into.svg';
import cargo from './img/fotos/cargo.svg';
import ambu from './img/fotos/ambu.svg';
import replay from './img/fotos/replay.svg';
import snct from './img/fotos/snct.svg';

function Galery() {
    return (
      <div className={styles.galery}>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
              className = "d-block"
              src={australia}
              alt="Image 1"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className = "d-block"
              src={into}
              alt="Image 2"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className = "d-block"
              src={cargo}
              alt="Image 3"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className = "d-block"
              src={ambu}
              alt="Image 4"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className = "d-block"
              src={replay}
              alt="Image 5"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className = "d-block"
              src={snct}
              alt="Image 6"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }

export default Galery