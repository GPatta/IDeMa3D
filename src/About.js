import Header from './components/Header'
import Footer from './components/Footer'
import idemaLogo from './graphics/logo.png'
import instagramLogo from './graphics/instagram_logo.png'
import cultsLogo from './graphics/cults3d_logo.png'
import mmfLogo from './graphics/myminifactory_logo.jpg'

function About() {
  return (
    <div>

        <Header title="Hello" />
        <div className='about'>
          <h2>About IDeMa 3D</h2>
          <img src={idemaLogo} alt="IDeMa 3D logo" />
          <p>
            Welcome to the official website of IDeMa 3D, a brand that creates beautiful and unique 3D designs meant for 3D printing;
            you can check out the official IDeMa 3D pages on Instagram, Cults 3D and MyMiniFactory through the links below
          </p>
          <div className="links">
            <a rel="noreferrer" href="https://www.instagram.com/idema_3d/" target="_blank"><img src={instagramLogo} alt="Instagram logo" /></a>
            <a rel="noreferrer" href="https://cults3d.com/en/users/IDeMa_3D/creations" target="_blank"><img src={cultsLogo} alt="Cults 3D logo" /></a>
            <a rel="noreferrer" href="https://www.myminifactory.com/users/IDeMa%203D" target="_blank"><img src={mmfLogo} alt="MyMiniFactory logo" /></a>
          </div>
        </div>
        <Footer year={2021} copyright='IDeMa_3D' />

    </div>
  );
}

export default About;