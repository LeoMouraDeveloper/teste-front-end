import React from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import Categories from "../components/categories";
import SectionTitle from "../components/title";
import ProductSlider from "../components/products";
import Partners from "../components/partners";
import Brands from "../components/brands";
import Footer from "../components/footer";


const HomePage: React.FC = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
      <section aria-label="Banner Banner">
          <Banner />
        </section>
        <section aria-label="Categorias">
          <Categories />
        </section>
        <section aria-label="Produtos relacionados">
          <SectionTitle>Produtos relacionados</SectionTitle>
          <ProductSlider showCategories={true} />
        </section>
        <section aria-label="Parceiros">
          <Partners />
        </section>
        <section aria-label="Produtos relacionados">
          <SectionTitle viewAllText="Ver todos">
            Produtos relacionados
          </SectionTitle>
          <ProductSlider showCategories={false} />
        </section>
        <section aria-label="Parceiros">
          <Partners />
          <SectionTitle>Navegue por marcas</SectionTitle>
          <Brands />
        </section>
        <section aria-label="Produtos relacionados">
          <SectionTitle viewAllText="Ver todos">
            Produtos relacionados
          </SectionTitle>
          <ProductSlider showCategories={false} />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
