import React, { useState } from 'react';
import certificadoFundamentos from '../images/fundamentosCertificado.jpg';
import certificadoFront from '../images/FrontCertificado.jpg';
import html from '../images/fundamentos/html.svg';
import css from '../images/fundamentos/css.svg';
import git from '../images/fundamentos/git.svg';
import javascript from '../images/fundamentos/javascript.svg';
import jsES6 from '../images/fundamentos/jsES6.svg';
import flexbox from '../images/fundamentos/flexbox.svg';
import bootstrap from '../images/fundamentos/Bootstrap.svg';
import react from '../images/front/react.svg';
import redux from '../images/front/Redux.svg';
import hooks from '../images/front/hooks.svg';
import metodolgias from '../images/front/Metodologias.svg';
import RTestLibrary from '../images/front/RTestLibrary.svg';
import contextApi from '../images/front/contextApi.svg';

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
            className="custom-tag"
            tag="div"
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
        >
            <img src={item.src} alt={item.altText} width="600px" />
        </CarouselItem>
    );
  });

  return (
    <main className='back'>
        <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
        >
        <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
           
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
        />
        <CarouselControl
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