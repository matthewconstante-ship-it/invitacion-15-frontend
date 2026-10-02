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

  return (
    <>
      <GlobalStyles styles={{ body: { backgroundColor: black, margin: 0, padding: 0 } }} />
      <Box
        sx={{
          minHeight: '100vh',
          width: '100vw',
          backgroundColor: black, // Fondo global oscuro para PC
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
            maxWidth: '480px', // Ancho perfecto para simular pantalla de celular
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            backgroundColor: bgCream,
            boxShadow: { xs: 'none', sm: '0px 0px 50px rgba(0,0,0,0.6)' }, // Sombra en PC
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
        </Box>
      </Box>
    </>
  );
}

export default App;