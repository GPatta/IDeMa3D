import Header from './components/Header';
import DesignCard from './components/DesignCard';
import Footer from './components/Footer';

import {IoSearch} from 'react-icons/io5';

import {useState} from 'react';

import {designCardArray} from './designs/DesignsList';

function Designs() {

  const[searchTerm, setSearchTerm] = useState('')

  return (
    <div>

        <Header title="Hello" />
        <div className="container">
          
          <div className='searchBox'>
              <input 
                  type="text" 
                  placeholder="Cerca..." 
                  onChange={event => {setSearchTerm(event.target.value)}}
              ></input>
              <IoSearch className='searchIcon' />
          </div>

          <div className='designs'>
            {
              designCardArray.filter((designCard) => {
                if (searchTerm === "")
                {
                  return designCard;
                } else if (designCard.title.toLowerCase().includes(searchTerm.toLowerCase()))
                {
                  return designCard;
                } else
                {
                  return 0;
                }
              }).map(designCard => {
                return (<DesignCard name={designCard.title} image={designCard.cover} link={designCard.link} onClk={designCard.onClk} />);
              })
            }

          </div>
        </div>
        <Footer year={2021} copyright='IDeMa_3D' />

    </div>
  );
}

export default Designs;