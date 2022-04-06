import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import adidas from '../adidas.png';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [mouseEnter, setMouseEnter] = useState(false);

  useEffect(() => {
    const container = document.getElementById('container');
    const card = document.getElementById('card');
    const sneakerImage = document.getElementById('sneaker-image');
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const sizes = document.getElementById('sizes');
    const purchaseBtn = document.getElementById('purchase-btn');

    container?.addEventListener('mousemove', (e) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 15;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 15;
      card!.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    container?.addEventListener('mouseenter', () => setMouseEnter(true));
    container?.addEventListener('mouseleave', () => setMouseEnter(false));
  }, []);

  return (
    <>
      <main className={styles.main}>
        <div id="container" className={styles.container}>
          <div
            id="card"
            className={`${styles.card} ${
              mouseEnter ? styles['mouse-enter'] : styles['mouse-leave']
            }`}
          >
            <div className={styles.circle}></div>
            <div className={styles.sneaker}>
              <Image
                className={styles['sneaker-image']}
                src={adidas}
                alt="Adidas Show"
                width={280}
                height={280}
                objectFit={'contain'}
              />
            </div>
            <div className={styles.info}>
              <h1 id="title" className={styles.title}>
                Adidas ZX
              </h1>
              <h3 id="description" className={styles.description}>
                FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION COMFORT.{' '}
              </h3>
              <div id="sizes" className={styles.sizes}>
                <button>39</button>
                <button className={styles.active}>40</button>
                <button>42</button>
                <button>44</button>
              </div>
              <div className={styles.purchase}>
                <button id="purchase-btn">Purchase</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>Developed by M.K.Nadim</span>
      </footer>
    </>
  );
};

export default Home;
