import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Features } from './components/Features/Features';
import { Extension } from './components/Extension/Extension';
import { Faq } from './components/Faq/Faq';
import { Newsletter } from './components/Newsletter/Newsletter';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Extension />
        <Faq />
        <Newsletter />
        <Footer />
        {/* kolejne sekcje */}
      </main>
    </>
  );
}

export default App;
