import React, { useState } from 'react';
import '../styles/ClientsCarousel.css';

import imgGlobo from '../assets/clientes/TV_Globo.png';
import imgSBT from '../assets/clientes/Logotipo_do_SBT.webp';
import imgRecord from '../assets/clientes/record.png';
import imgClaro from '../assets/clientes/Claro.svg';
import imgTVIntegracao from '../assets/clientes/TV_Integracao.webp';
import imgBombeiros from '../assets/clientes/corpo-de-bombeiros-mg.png';
import imgBand from '../assets/clientes/Rede_Bandeirantes_logo_2011.svg';
import imgSporTV from '../assets/clientes/SporTV.png';
import imgAeroclube from '../assets/clientes/aeroclub-uberlandia.png';
import imgHelinews from '../assets/clientes/HELINEWS_LOGOTIPO-07.png';
import imgInpaer from '../assets/clientes/inpaer.jpg';
import imgTVCultura from '../assets/clientes/tvcultura.svg';
import imgTVSenado from '../assets/clientes/tv-senado.png';
import imgTVAparecida from '../assets/clientes/Logotipo_da_TV_Aparecida.png';

const clientsList = [
  { name: "Globo", img: imgGlobo },
  { name: "SBT", img: imgSBT },
  { name: "Record", img: imgRecord },
  { name: "Claro", img: imgClaro },
  { name: "TV Integração", img: imgTVIntegracao },
  { name: "Corpo de Bombeiros MG", img: imgBombeiros },
  { name: "Band", img: imgBand },
  { name: "SporTV", img: imgSporTV },
  { name: "Aeroclube de Uberlândia", img: imgAeroclube },
  { name: "Helinews", img: imgHelinews },
  { name: "Inpaer", img: imgInpaer },
  { name: "TV Cultura", img: imgTVCultura },
  { name: "TV Senado", img: imgTVSenado },
  { name: "TV Aparecida", img: imgTVAparecida }
];

const ClientLogo = ({ client }) => {
  if (client.textFallback) {
    return <div className="client-logo-text">{client.name}</div>;
  }

  return (
    <img 
      src={client.img} 
      alt={client.name}
      className="client-logo-img"
    />
  );
};

const ClientsCarousel = ({ t }) => {
  return (
    <section className="clients-section" id="clients">
      <div className="clients-container">
        
        {/* Central Circle */}
        <div className="clients-circle">
          <h2>{t.clients.title}</h2>
        </div>

        {/* Scrolling Tracks */}
        <div className="clients-track-wrapper">
          <div className="clients-track track-left">
            {[...clientsList, ...clientsList, ...clientsList].map((client, idx) => (
              <div className="client-logo-placeholder" key={`top-${idx}`}>
                <ClientLogo client={client} />
              </div>
            ))}
          </div>
          
          <div className="clients-track track-right">
            {[...clientsList].reverse().concat([...clientsList].reverse(), [...clientsList].reverse()).map((client, idx) => (
              <div className="client-logo-placeholder" key={`bottom-${idx}`}>
                <ClientLogo client={client} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
