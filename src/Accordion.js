import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function SlaAccordion() {
  return (
    <div>
        <div className='accordion-container'>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>Stufe 1: Basis-Support (Standard SLA):</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Reaktionszeit: Der Softwareanbieter verpflichtet sich, auf Supportanfragen innerhalb von 4 Stunden nach Eingang zu reagieren.<br />
                Verfügbarkeitsgarantie: Die Softwareplattform wird mit einer garantierten Verfügbarkeit von 99,5% während der Geschäftszeiten (Montag bis Freitag, 8:00 bis 18:00 Uhr) betrieben.<br />
                Fehlerbehebungszeit: Bei auftretenden Fehlern oder Störungen in der Software wird eine Lösung innerhalb von 48 Stunden nach Eingang des Berichts angestrebt.<br />
                Preis für Stufe 1: $1,000 pro Monat<br />
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
        <div className='accordion-container'>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>Stufe 2: Erweiterter Support (Erweitertes SLA):</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Reaktionszeit: Der Softwareanbieter verpflichtet sich, auf Supportanfragen innerhalb von 2 Stunden nach Eingang zu reagieren.<br />
                Verfügbarkeitsgarantie: Die Softwareplattform wird mit einer garantierten Verfügbarkeit von 99,9% rund um die Uhr betrieben.<br />
                Fehlerbehebungszeit: Bei auftretenden Fehlern oder Störungen in der Software wird eine Lösung innerhalb von 24 Stunden nach Eingang des Berichts angestrebt.<br />
                Preis für Stufe 2: $2,500 pro Monat<br />
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
        <div className='accordion-container'>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>Stufe 3: Premium-Support (Hochprioritäts-SLA):</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Reaktionszeit: Der Softwareanbieter verpflichtet sich, auf Supportanfragen innerhalb von 1 Stunde nach Eingang zu reagieren.<br />
                Verfügbarkeitsgarantie: Die Softwareplattform wird mit einer garantierten Verfügbarkeit von 99,99% rund um die Uhr betrieben.<br />
                Fehlerbehebungszeit: Bei auftretenden Fehlern oder Störungen in der Software wird eine Lösung innerhalb von 4 Stunden nach Eingang des Berichts angestrebt.<br />
                Dedizierter Account Manager: Der Kunde erhält einen dedizierten Account Manager, der rund um die Uhr erreichbar ist und bei Supportanfragen und strategischen Anliegen unterstützt.<br />
                Preis für Stufe 3: $5,000 pro Monat<br />
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    </div>
  );
}

export default SlaAccordion;
