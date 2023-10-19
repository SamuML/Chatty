import React, { useRef } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import logo from './chatty_logo.png';
import Header from './Header';
import SlaAccordion from './Accordion';
import { css } from '@emotion/react';

function App() {
  const aboutUsRef = useRef(null);
  const functionsRef = useRef(null);

  const scrollToAboutUs = () => {
    aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFunctions = () => {
    functionsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header scrollToAboutUs={scrollToAboutUs} scrollToFunctions={scrollToFunctions} />

      <div className="content">
        <div className="scroll">
          <section style={{paddingTop: "25%"}} className='section section-text'>
            <h1>chatty.</h1>
            <h3>Der Chatbot, der Ihre Kunden versteht!</h3>
            <p className="p">Verstehen Sie Ihre Kunden besser mit chatty. Unser AI Chatbot nutzt künstliche Intelligenz, um die Bedürfnisse, Vorlieben
            und Emotionen Ihrer Kunden zu verstehen. Mit personalisierten Empfehlungen und ansprechenden Gesprächen hilft chatty Ihnen dabei, Ihre Umsätze 
            und Konversionen zu steigern. Probieren Sie es jetzt aus!</p>

            <div><Button variant='contained' sx={{ color: 'black', bgcolor: 'white'}}>Teste chatty</Button></div>
          </section>
          <section ref={aboutUsRef} id="about-us" className='section section-text'>
            <h2>Über uns</h2>

            <div className="layout-container">
              {/* Placeholder logo on the left side */}
              <div className="logo-container">
                <img src={logo} className="placeholder-logo" alt="placeholder" />
              </div>

              {/* Key points on the right side */}
              <div className="key-points-container">
                <div className="key-point">
                  <h3>Unternehmensgeschichte:</h3>
                  <p>Chatty ist ein Startup-Unternehmen mit Sitz in Olpe, Deutschland. Wir haben die Idee, künstliche Intelligenz für jeden zugänglich zu machen. </p>
                </div>
                <div className="key-point">
                  <h3>Das Team:</h3>
                  <p>CEO: Frederik Göckler</p>
                  <p>Frederik macht irgendwas damit es läuft.</p>
                  <br></br>
                  <p>CTO: Samuel Ikier</p>
                  <p>Samuel ist das Genie hinter der künstlichen Intelligenz.</p>
                  <br></br>
                  <p>CMO: Stella Clemens</p>
                  <p>Stella dreht euch das Ding hier an.</p>
                  <br></br>
                  <p>COO: Kenneth Clemens</p>
                  <p>Ich hab den Bums hier gemacht.</p>
                </div>
                <div className="key-point">
                  <h3>Werte:</h3>
                  <p>-Berate den Kunden aufgrund seiner Wünsche</p>
                  <p>-Bringe den technischen Stand voran</p>
                </div>
              </div>
            </div>
          </section>
          <section ref={functionsRef} id="functions" className='section section-text'>
            <h2>Funktionen</h2>
            <div>hier folgt Text</div>
          </section>
          <section ref={functionsRef} id="pricing" className='section section-text'>
            <h2>Preise</h2>
              <SlaAccordion></SlaAccordion>


            {/* <div>
              <h4>Stufe 1: Basis-Support (Standard SLA):</h4>
              Reaktionszeit: Der Softwareanbieter verpflichtet sich, auf Supportanfragen innerhalb von 4 Stunden nach Eingang zu reagieren.<br />
              Verfügbarkeitsgarantie: Die Softwareplattform wird mit einer garantierten Verfügbarkeit von 99,5% während der Geschäftszeiten (Montag bis Freitag, 8:00 bis 18:00 Uhr) betrieben.<br />
              Fehlerbehebungszeit: Bei auftretenden Fehlern oder Störungen in der Software wird eine Lösung innerhalb von 48 Stunden nach Eingang des Berichts angestrebt.<br />
              Preis für Stufe 1: $1,000 pro Monat<br />
            </div>
            <br></br>
            <div>
              <h4>Stufe 2: Erweiterter Support (Erweitertes SLA):</h4>
              Reaktionszeit: Der Softwareanbieter verpflichtet sich, auf Supportanfragen innerhalb von 2 Stunden nach Eingang zu reagieren.<br />
              Verfügbarkeitsgarantie: Die Softwareplattform wird mit einer garantierten Verfügbarkeit von 99,9% rund um die Uhr betrieben.<br />
              Fehlerbehebungszeit: Bei auftretenden Fehlern oder Störungen in der Software wird eine Lösung innerhalb von 24 Stunden nach Eingang des Berichts angestrebt.<br />
              Preis für Stufe 2: $2,500 pro Monat<br />
            </div>
            <br></br>
            <div>
              <h4>Stufe 3: Premium-Support (Hochprioritäts-SLA):</h4>
              Reaktionszeit: Der Softwareanbieter verpflichtet sich, auf Supportanfragen innerhalb von 1 Stunde nach Eingang zu reagieren.<br />
              Verfügbarkeitsgarantie: Die Softwareplattform wird mit einer garantierten Verfügbarkeit von 99,99% rund um die Uhr betrieben.<br />
              Fehlerbehebungszeit: Bei auftretenden Fehlern oder Störungen in der Software wird eine Lösung innerhalb von 4 Stunden nach Eingang des Berichts angestrebt.<br />
              Dedizierter Account Manager: Der Kunde erhält einen dedizierten Account Manager, der rund um die Uhr erreichbar ist und bei Supportanfragen und strategischen Anliegen unterstützt.<br />
              Preis für Stufe 3: $5,000 pro Monat<br />
              
            </div> */}

            
            <div><h5>Bei jeder Stufe kommen die Kosten für Lizenzen pro Anzahl Benutzer hinzu.</h5></div>
          </section>
          <section ref={functionsRef} id="contact" className='section section-text'>
            <h2>Kontakt</h2>
            <div className='impressum-container'>
              <img src={logo} className="placeholder-logo" alt="placeholder" />

              <div className='impressum-container details'>
                <h2>Impressum</h2>

                <div>
                  Artificial Tech Gbr <br></br>
                  Erzbergerstraße 4a<br></br>
                  57462 Olpe<br></br>
                  <br></br>
                  Telefon: 02761 123456<br></br>
                  E-Mail: test@mail.com<br></br>
                  Internet: www.artificial-tech.com<br></br>
                  <br></br>
                  Geschäftsführer:<br></br>
                  Frederik Göckler<br></br>
                  Samuel Ikier<br></br>
                  Stella Clemens<br></br>
                  Kenny Clemens<br></br>

                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
