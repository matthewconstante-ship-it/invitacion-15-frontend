import { useState, useRef } from 'react';
import { Box, GlobalStyles } from '@mui/material';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Countdown from './components/Countdown';
import Location from './components/Location';
import DressCode from './components/DressCode';
import Details from './components/Details'; 
import Itinerary from './components/Itinerary';
import Rsvp from './components/Rsvp';
import Music from './components/Music';
import PhotoUpload from './components/PhotoUpload';

// Frases personalizadas para cada cinta separadora (Ticker)
const tickerPhrases = {
  heroToCountdown: [
    "PRETEMPORADA ACTIVADA", "ANAHY'S 15TH", "EL PARTIDO DEL AÑO", "MAGIA EN LOS BOTINES", "PITAZO INICIAL PRONTO"
  ],
  countdownToLocation: [
    "TIC TAC TIC TAC", "TIEMPO DE DESCUENTO", "PREPARANDO LA CANCHA", "LA HORA SE ACERCA", "CALENTANDO MOTORES"
  ],
  locationToDressCode: [
    "RUMBO AL ESTADIO", "NUESTRA CASA ESTA NOCHE", "COORDENADAS VIP", "NOS VEMOS EN LA CANCHA", "LOCALIDAD EXCLUSIVA"
  ],
  dressCodeToDetails: [
    "LOOKS DE PRIMERA", "ESTILO BLOKE CORE", "OUTFITS DE GALA", "PASARELA Y CANCHA", "CERO CAMISETAS DEL MADRID"
  ],
  detailsToItinerary: [
    "EL MEJOR REGALO ERES TÚ", "LLUVIA DE SOBRES", "ENTRADA VIP", "RECUERDO INOLVIDABLE", "PASE DIRECTO"
  ],
  itineraryToRsvp: [
    "MINUTO A MINUTO", "90 MINUTOS NO BASTAN", "TERCER TIEMPO ÉPICO", "TÁCTICAS DE FIESTA", "LA CELEBRACIÓN NO PARA"
  ],
  rsvpToMusic: [
    "CONFIRMA TU PASE VIP", "EL MEJOR EQUIPO", "TITULARES CONFIRMADOS", "CONVOCATORIA OFICIAL", "CERRANDO ALINEACIÓN"
  ],
  musicToPhoto: [
    "SUBE EL VOLUMEN", "HIMNOS DE CANCHA", "RITMO DE CAMPEONES", "PLAYLIST ACTIVA", "A BAILAR HASTA EL FINAL"
  ],
  photoToFooter: [
    "EL OJO TÁCTICO", "ÁLBUM EN VIVO", "REPORTERO EN CANCHA", "MEJORES JUGADAS EN FOTO", "ARCHIVO HISTÓRICO"
  ]
};

function App() {
  const black = '#1A1A1A';
  const bgCream = '#F3F1EC';

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <GlobalStyles styles={{ body: { backgroundColor: black, margin: 0, padding: 0 } }} />
      <Box
        sx={{
          minHeight: '100vh',
          width: '100vw',
          backgroundColor: black, 
          display: 'flex',
          justifyContent: 'center',
          overflowX: 'hidden',
          fontFamily: '"Inter", sans-serif',
        }}
      >
        {/* Contenedor tipo "App Móvil" */}
        <Box
          sx={{
            width: '100%',
            maxWidth: '480px', 
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            backgroundColor: bgCream,
            boxShadow: { xs: 'none', sm: '0px 0px 50px rgba(0,0,0,0.6)' }, 
            overflow: 'hidden'
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 10 }}>
            
            <Hero />
            <Ticker customPhrases={tickerPhrases.heroToCountdown} />
            
            <Countdown />
            <Ticker customPhrases={tickerPhrases.countdownToLocation} />
            
            <Location />
            <Ticker customPhrases={tickerPhrases.locationToDressCode} />
            
            <DressCode />
            <Ticker customPhrases={tickerPhrases.dressCodeToDetails} />
            
            <Details />
            <Ticker customPhrases={tickerPhrases.detailsToItinerary} />
            
            <Itinerary />
            <Ticker customPhrases={tickerPhrases.itineraryToRsvp} />
            
            <Rsvp />
            <Ticker customPhrases={tickerPhrases.rsvpToMusic} />
            
            <Music />
            <Ticker customPhrases={tickerPhrases.musicToPhoto} />
            
            <PhotoUpload />
            <Ticker customPhrases={tickerPhrases.photoToFooter} />

          </Box>

          {/* CAJA FANTASMA PARA MANTENER EL BOTÓN DENTRO DE LOS 480PX */}
          <Box
            sx={{
              position: 'fixed',
              bottom: 0,
              width: '100%',
              maxWidth: '480px',
              height: '100px',
              pointerEvents: 'none', // Permite hacer scroll a través de la caja invisible
              zIndex: 9999,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              padding: '0 25px 25px 0'
            }}
          >
            <button
              onClick={togglePlay}
              style={{
                pointerEvents: 'auto', // Reactiva los clics solo para el botón
                background: 'rgba(26, 26, 26, 0.75)', // Tono oscuro (#1A1A1A) translúcido
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(243, 241, 236, 0.2)', // Borde sutil color bgCream
                borderRadius: '50%',
                width: '55px',
                height: '55px',
                color: '#F3F1EC',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '22px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.2s ease-in-out',
              }}
              onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.9)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {isPlaying ? '⏸️' : '🎵'}
            </button>
          </Box>

          <audio ref={audioRef} src="/anahy.mp3" loop />
        </Box>
      </Box>
    </>
  );
}

export default App;