import { useState, useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import { designCardArray } from './designs/DesignsList';

const ObjectPage = ({location}) => {

  const [title, setTitle] = useState('');
  const [cover, setCover] = useState('');
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  const [description, setDescription] = useState('');
  const [cultsLink, setCultsLink] = useState('');
  const [mmfLink, setMmfLink] = useState('');

  function printDescription(d)
  {
    d = d.split("\n");

    for (let i = 0; i < d.length; i++) {
      d[i] = d[i] + "<br>";
    }

    d = d.join("");

    return d;
  }

  useEffect(() => {

    window.scrollTo(0, 0);

    const params = new URLSearchParams(location.search);
    const n = params.get("n");
    //setName(n ? n : 'void');
    
    designCardArray.filter((designCard) => {
      if (designCard.name === n)
      {
        return designCard;
      }
      else
      {
        return 0;
      }
    }).map(designCard => {
      setTitle(designCard.title);
      setCover(designCard.cover);
      setImage1(designCard.image1);
      setImage2(designCard.image2);
      setImage3(designCard.image3);
      setDescription(printDescription(designCard.description));
      setCultsLink(designCard.cultsLink);
      setMmfLink(designCard.mmfLink);
    }) 
    
  }, []);

  function setMainClass(id)
  {
    document.getElementsByClassName("mainImg")[0].classList.add("secImg");
    document.getElementsByClassName("mainImg")[0].classList.remove("mainImg");
    document.getElementById(id).classList.remove("secImg");
    document.getElementById(id).classList.add("mainImg");
    console.log(id);
  }

  return (
    <div>

        <Header />
        <div className="container">
          <div className="objectPage">
            <h1 key={title}>{title}</h1>

            <div className="horizontalOP">
              <div className="carousel">
                <img src={cover} id="carouselCover" className="mainImg" onClick={() => setMainClass("carouselCover")} alt={title}>

                </img>
                <img src={image1} id="carouselFirst" className="secImg" onClick={() => setMainClass("carouselFirst")} alt={title}></img>
                <img src={image2} id="carouselSecond" className="secImg" onClick={() => setMainClass("carouselSecond")} alt={title}></img>
                <img src={image3} id="carouselThird" className="secImg" onClick={() => setMainClass("carouselThird")} alt={title}></img>
              </div>
              <div className="verticalOP">
                <div className="btnContainer">
                  <button className="cultsBtn" onClick={() => window.open(cultsLink)} >Download on Cults3D</button>
                  <button className="mmfBtn" onClick={() => window.open(mmfLink)} >Download on MyMiniFactory</button>
                </div>
                <h3>Description</h3>
                <p>{description}</p>
              </div>
            </div>

          </div>
        </div>
        <Footer year={2021} copyright='IDeMa_3D' />

    </div>
  );
}

export default ObjectPage;