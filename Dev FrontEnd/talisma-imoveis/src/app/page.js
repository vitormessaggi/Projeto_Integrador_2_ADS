"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import ImageBanner from '../assets/images/image-banner.svg';
import ImagemFamily from '../assets/images/familia.png';

export default function HomePage() {
  const [tabAtiva, setTabAtiva] = useState("comprar");

  const carouselTrackRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselTrackRef.current) {
      const scrollAmount =
        (carouselTrackRef.current.clientWidth / 2) * direction;
      carouselTrackRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.pageContainer}>
      <section className={styles.sectionSearch}>
        <Image
          className={styles.imageBanner}
          src={ImageBanner}
          alt="Mulher com celular"
          width={700}
          height={575}
          priority
        />
        <div className={styles.bannerContainer}>
          <div className={styles.searchBox}>
            <h2>O imóvel que você procura está aqui!</h2>

            <div className={styles.tabOptions}>
              <button
                type="button"
                className={`${styles.tabButton} ${
                  tabAtiva === "comprar" ? styles.active : ""
                }`}
                onClick={() => setTabAtiva("comprar")}
              >
                COMPRAR
              </button>
              <button
                type="button"
                className={`${styles.tabButton} ${
                  tabAtiva === "alugar" ? styles.active : ""
                }`}
                onClick={() => setTabAtiva("alugar")}
              >
                ALUGAR
              </button>
            </div>

            <hr className={styles.tabDivider} />

            <form id="searchForm" className={styles.searchForm}>
              <div className={styles.formGroup}>
                <label htmlFor="tipo-imovel">Tipo de Imóvel</label>
                <select id="tipo-imovel" name="tipo-imovel" disabled>
                  <option value="">Selecione</option>
                  <option value="casa">Casa</option>
                  <option value="apartamento">Apartamento</option>
                  <option value="terreno">Terreno</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="localizacao">Onde Deseja Morar?</label>
                <select id="localizacao" name="localizacao" disabled>
                  <option value="">Selecione</option>
                  <option value="sp">São Paulo</option>
                  <option value="rj">Rio de Janeiro</option>
                  <option value="bh">Belo Horizonte</option>
                </select>
              </div>

              <button type="submit" className={styles.btnBuscar}>
                BUSCAR
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className={styles.sectionFeatured}>
        <div className={styles.featuredContainer}>
          <h2>Imóveis em Destaque</h2>
          <div className={styles.carouselContainer}>
            <button
              className={`${styles.carouselBtn} ${styles.left}`}
              onClick={() => scrollCarousel(-1)}
            >
              ‹
            </button>
            <div className={styles.carouselTrack} ref={carouselTrackRef}>
              <Link href="/detalhes/1" className={styles.cardLink}>
                <div className={styles.card}>
                  <Image
                    src="/assets/images/casa1-1.png"
                    alt="Casa em São Paulo"
                    className={styles.imageCard}
                    width={280}
                    height={100}
                  />
                  <div className={styles.contentCard}>
                    <h3 className={styles.titleCard}>Casa em São Paulo</h3>
                    <p className={styles.locationCard}>São Paulo, São Paulo</p>
                    <p className={styles.priceCard}>R$ 3.500.000</p>
                  </div>
                </div>
              </Link>

              <Link href="/detalhes/2" className={styles.cardLink}>
                <div className={styles.card}>
                  <Image
                    src="/assets/images/casa4-1.png"
                    alt="Casa no Praia"
                    className={styles.imageCard}
                    width={280}
                    height={100}
                  />
                  <div className={styles.contentCard}>
                    <h3 className={styles.titleCard}>Apartamento no Centro</h3>
                    <p className={styles.locationCard}>São Paulo, Centro</p>
                    <p className={styles.priceCard}>R$ 850.000</p>
                  </div>
                </div>
              </Link>

              <Link href="/detalhes/3" className={styles.cardLink}>
                <div className={styles.card}>
                  <Image
                    src="/assets/images/casa2-1.png"
                    alt="Casa no Praia"
                    className={styles.imageCard}
                    width={280}
                    height={100}
                  />
                  <div className={styles.contentCard}>
                    <h3 className={styles.titleCard}>
                      Casa com Vista para o Mar
                    </h3>
                    <p className={styles.locationCard}>
                      Rio de Janeiro, Copacabana
                    </p>
                    <p className={styles.priceCard}>R$ 5.500.000</p>
                  </div>
                </div>
              </Link>
            </div>
            <button
              className={`${styles.carouselBtn} ${styles.right}`}
              onClick={() => scrollCarousel(1)}
            >
              ›
            </button>
          </div>
        </div>
      </section>

      <section className={styles.sectionAbout}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutContent}>
            <h2>Sobre a Empresa</h2>
            <p className={styles.aboutSlogan}>
              Realizando seu sonho de forma sólida, confiável e duradoura
            </p>
            <p className={styles.aboutDescription}>
              Ética profissional e transparência são imprescindíveis ao mercado
              imobiliário. A TALISMÃ IMÓVEIS oferece aos seus clientes um
              atendimento personalizado, o que resulta em segurança em todos os
              negócios realizados, satisfazendo as nossas clientes.
            </p>
            <Link href="/sobre" className={styles.linkAbout}>
              <button className={styles.aboutButton}>
                VEJA MAIS <span>&gt;</span>
              </button>
            </Link>
          </div>
          <div className={styles.aboutMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.491546262497!2d-46.47528112378647!3d-23.622561363845158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce692c973ba0ed%3A0x62475205499d26d2!2zVGFsaXNtw6MgSW3Ds3ZlaXM!5e0!3m2!1spt-BR!2sbr!4v1748297486880!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section className={styles.clientTestimonial}>
        <div className={styles.testimonialContainer}>
          <div className={styles.testimonialContent}>
            <div className={styles.clientPhotoContainer}>
              <Image
                src={ImagemFamily}
                alt="Foto do cliente"
                className={styles.clientPhoto}
                width={400}
                height={400}
              />
            </div>
            <div className={styles.testimonialText}>
              <p className={styles.quote}>
                "Depoimento do cliente. Ética profissional e transparência são
                imprescindíveis no mercado imobiliário. A TALISMÃ IMÓVEIS"
              </p>
              <p className={styles.clientName}>Maria Oliveira</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
