import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe os estilos do Bootstrap
import Carousel from 'react-bootstrap/Carousel';
import UserExperience from '../assets/UserExperience.png';
import OtimizacaoSeo from '../OtimizacaoSeo.png';
import gestaoTrafego from '../gestaoTrafego.png';
import resultado from '../resultado.png';
import resultadoDosSonhos from '../resultadoDosSonhos.png';
import styles from './SecondSection.module.css';
const Mob = () => {
  const items = [
    {
      imageSrc: UserExperience,
      title: 'Site moderno',
      content: 'muito bem elaborado e personalizado para sua marca',
    },
    {
      imageSrc: OtimizacaoSeo,
      title: '(tráfego orgânico)',
      content: 'Otimizações para rankeamento nos resultados de busca',
    },
    {
      imageSrc: gestaoTrafego,
      title: '(tráfego pago)',
      content: 'Anúncios patrocinados para te colocar à frente da concorrência',
    },
    {
      imageSrc: resultado,
      title: 'Primeiros retornos sobre investimento',
      content: 'e ajustes para melhorar cada vez mais a performance',
    },
    {
      imageSrc: resultadoDosSonhos,
      title: 'crescimento exponencial',
      content: 'da sua empresa',
    },
  ];

  const renderCarouselItems = () => {
    const carouselItems = [];
    for (let i = 0; i < items.length; i += 2) {
      const item1 = items[i];
      const item2 = items[i + 1] || items[0]; // Se não houver o segundo item, retorna o primeiro item novamente
      carouselItems.push(
        <Carousel.Item key={`carousel-item-${i}`}>
          <div className="d-flex">
            <div style={{ height: '282px', border:'1px solid black', borderRadius: '16px', margin: '10px' }} className="w-50 pr-2">
              <img
                className="d-block w-100"
                src={item1.imageSrc}
                alt={item1.title}
                style={{ objectFit: 'cover' }}
              />
              <p className={styles.text}>
          <span>{item1.title}</span> {item1.content}
        </p>
             
            </div>
            <div style={{ height: '282px', border:'1px solid black', borderRadius: '16px', margin: '10px' }} className="w-50 pl-2">
              <img
                className="d-block w-100"
                src={item2.imageSrc}
                alt={item2.title}
                style={{ objectFit: 'cover' }}
              />
              <p className={styles.text}>
          <span>{item2.title}</span> {item2.content}
        </p>
             
            </div>
          </div>
        </Carousel.Item>
      );
    }
    return carouselItems;
  };

  return (
    <Carousel interval={null} indicators={false} wrap={true}>
      {renderCarouselItems()}
    </Carousel>
  );
};

export default Mob;
