import React from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import Categories from "../components/categories";
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
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
