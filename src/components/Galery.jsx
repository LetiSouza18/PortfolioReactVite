import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Galery.module.css'
import australia from '../img/photos/australia.svg';
import into from '../img/photos/into.svg';
import cargo from '../img/photos/cargo.svg';
import ambu from '../img/photos/ambu.svg';
import replay from '../img/photos/replay.svg';
import snct from '../img/photos/snct.svg';

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