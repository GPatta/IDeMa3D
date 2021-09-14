import Header from './components/Header'
import SearchBox from './components/SearchBox'
import PageCard from './components/PageCard'
import Footer from './components/Footer'
import designsImg from './designs.png'
import storeImg from './store.png'
import aboutImg from './about.png'

function Home() {
  return (
    <div>

        <Header />
        <div className="container">
          <SearchBox />
          <div className='pages'>
            <PageCard name="Designs" image={designsImg} link="/designs" />
            <PageCard name="Store" image={storeImg} link="/store" />
            <PageCard name="About" image={aboutImg} link="/about" />
          </div>
        </div>
        <Footer year={2021} copyright='IDeMa_3D' />

    </div>
  );
}

export default Home;