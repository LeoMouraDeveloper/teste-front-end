import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./products.module.sass";
import { Navigation } from "swiper/modules";
import LeftArrow from "../../assets/images/arrow-left.svg";
import RightArrow from "../../assets/images/arrow-right.svg";
import { useRef, useEffect, useState } from "react";
import type { Swiper as SwiperType } from "swiper"; 

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface SliderProps {
  products: Product[];
  onBuyClick: (product: Product) => void;
}

export default function Slider({ products, onBuyClick }: SliderProps) {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (
      swiperInstance &&
      swiperInstance.params.navigation &&
      prevRef.current &&
      nextRef.current
    ) {
      if (typeof swiperInstance.params.navigation === "object") {
        swiperInstance.params.navigation.prevEl = prevRef.current;
        swiperInstance.params.navigation.nextEl = nextRef.current;
      }
  
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className={styles.sliderWrapper}>
      <div ref={prevRef} className={styles.swiperButtonPrev}>
        <img src={LeftArrow} width={40} height={40} alt="Arrow Left" />
      </div>

      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={4}
          onSwiper={setSwiperInstance} 
          breakpoints={{
            1280: { slidesPerView: 4, spaceBetween: 10 },
            1000: { slidesPerView: 3, spaceBetween: 20 },
            600: { slidesPerView: 2, spaceBetween: 20 },
            480: { slidesPerView: 1, spaceBetween: 15 },
            320: { slidesPerView: 1, spaceBetween: 10 },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className={styles.productCard}>
                <img src={product.photo} alt={product.productName} className={styles.productImage} />
                <p className={styles.productName}>{product.productName}</p>
                <p className={styles.oldPrice}>R$ {(product.price * 1.2).toFixed(2)}</p>
                <p className={styles.newPrice}>R$ {product.price.toFixed(2)}</p>
                <p className={styles.installments}>
                  ou 2x de R$ {(product.price / 2).toFixed(2)} sem juros
                </p>
                <p className={styles.freeShipping}>Frete grátis</p>
                <button className={styles.buyButton} onClick={() => onBuyClick(product)}>
                  Comprar
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div ref={nextRef} className={styles.swiperButtonNext}>
        <img src={RightArrow} width={40} height={40} alt="Arrow Right" />
      </div>
    </div>
  );
}
