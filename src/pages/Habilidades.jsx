import React, { useState } from 'react';
import certificadoFundamentos from '../images/certificado/fundamentosCertificado.jpg';
import certificadoFront from '../images/certificado/FrontCertificado.jpg';
import certificadoBack from '../images/certificado/backCertificado.jpg'
import html from '../images/fundamentos/Html.svg';
import css from '../images/fundamentos/Css.svg';
import git from '../images/fundamentos/Git.svg';
import javascript from '../images/fundamentos/JavaS.svg';
import jsES6 from '../images/fundamentos/ES6.svg';
import flexbox from '../images/fundamentos/FlexBox.svg';
import bootstrap from '../images/fundamentos/Bootstrap.svg';
import react from '../images/front/React.svg';
import redux from '../images/front/Redux.svg';
import hooks from '../images/front/ReactHooks.svg';
import metodolgias from '../images/front/Metodologias.svg';
import RTestLibrary from '../images/front/RTL.svg';
import contextApi from '../images/front/ContextAPI.svg';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const items = [
  {
    src: certificadoFundamentos,
    altText: 'Certificado Fundamentos',
    caption: 'Certificado Fundamentos',
    key: 1,
  },
  {
    src: certificadoFront,
    altText: 'Certificado Front',
    caption: 'Certificado Front',
    key: 2,
  },
  {
    src: certificadoBack,
    altText: 'Certificado Back',
    caption: 'Certificado Back',
    key: 2,
  },
];

function Habilidades(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
        <CarouselItem
            tag="div"
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
        >
          <img className='certificado' src={item.src} alt={item.altText} width="500px" />
        </CarouselItem>
    );
  });

  return (
    <main className='back'>
        <Carousel
        className='carousel position-relative '
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
        >
        <CarouselIndicators
            className='slide bg-dark'
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
            className='indicadores'
            direction="prev"
            directionText="Previous"
            onClickHandler={previous} 
        />   
        <CarouselControl
         className=' indicadores'
            direction="next"
            directionText="Next"
            onClickHandler={next}
        />
        </Carousel>
        <div className='listSelos'>
            
            <img className='selos' src={ html } alt='selo html'/>
            <img className='selos' src={ css } alt='selo css'/>
            <img className='selos' src={ git } alt='selo git'/>
            <img className='selos' src={ javascript } alt='selo javascript'/>
            <img className='selos' src={ jsES6 } alt='selo jsES6'/>
            <img className='selos' src={ flexbox } alt='selo flexbox'/>
            <img className='selos' src={ bootstrap } alt='selo bootstrap'/>
            <img className='selos' src={ react } alt='selo html'/>
            <img className='selos' src={ redux } alt='selo html'/>
            <img className='selos' src={ hooks } alt='selo html'/>
            <img className='selos' src={ metodolgias } alt='selo html'/>
            <img className='selos' src={ RTestLibrary } alt='selo html'/>
            <img className='selos' src={ contextApi } alt='selo html'/>
            
        </div>

    </main>
  );
}

export default Habilidades;