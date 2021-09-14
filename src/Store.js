import Header from './components/Header'
import Footer from './components/Footer'
import {Link} from 'react-router-dom';

import workInProgressImg from './graphics/work_in_progress.png'

function Store() {
  return (
    <div>

        <Header title="Hello" />
        <div className='container'>
          <Link className="storeLink" to="/">
            <div className='store'>
                <h2>STORE</h2>
                <img src={workInProgressImg} alt="Web page is a work in progress" ></img>
                <p>Work in progress</p>
              </div>
          </Link>
        </div>
        <Footer year={2021} copyright='IDeMa_3D' />

    </div>
  );
}

export default Store;