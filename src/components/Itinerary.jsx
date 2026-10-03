import { useState } from 'react';
import { Box, Typography, Collapse, GlobalStyles } from '@mui/material';

const bgPurple = '#381460';
const stripeLight = '#825CA6';
const stripeMed = '#5C348B';
const paperCream = '#FDF6E9';
const markerBlack = '#1A1A1A';
const pink15 = '#E46B9C';
const starGold = '#D4A346';

const SvgFilters = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
    <defs>
      <filter id="roughMarker" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.15" numOctaves="2" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
  </svg>
);

const StripesBackgroundSvg = () => (
  <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" style={{ opacity: 0.8 }}>
    <rect x="5" y="-10" width="3" height="120" fill={stripeLight} filter="url(#roughMarker)" />
    <rect x="15" y="-10" width="6" height="120" fill={stripeMed} filter="url(#roughMarker)" />
    <rect x="75" y="-10" width="8" height="120" fill={stripeMed} filter="url(#roughMarker)" />
    <rect x="86" y="-10" width="2" height="120" fill={stripeLight} filter="url(#roughMarker)" />
  </svg>
);

const MatchTimerSvg = ({ size = 22, stroke = markerBlack }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#roughMarker)">
    <circle cx="12" cy="14" r="8" />
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="10" y1="2" x2="14" y2="2" />
    <polyline points="12 10 12 14 15 14" />
  </svg>
);

const StarSolidSvg = ({ size = 18, fill = markerBlack }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill={fill} stroke={markerBlack} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" filter="url(#roughMarker)">
    <path d="M 50 10 L 62 38 L 92 35 L 65 55 L 78 88 L 50 68 L 22 88 L 32 55 L 8 38 L 38 35 Z" />
  </svg>
);

const GoldStarSvg = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={starGold}>
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5Z" />
  </svg>
);

const SketchySoccerBallSvg = ({ size = 18, stroke = paperCream }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke={stroke} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" filter="url(#roughMarker)">
    <circle cx="50" cy="50" r="44" />
    <polygon points="50,28 69,42 62,65 38,65 31,42" fill={stroke} opacity="0.3" />
    <polygon points="50,28 69,42 62,65 38,65 31,42" />
    <line x1="50" y1="28" x2="50" y2="6" />
    <line x1="69" y1="42" x2="90" y2="34" />
    <line x1="62" y1="65" x2="78" y2="86" />
    <line x1="38" y1="65" x2="22" y2="86" />
    <line x1="31" y1="42" x2="10" y2="34" />
  </svg>
);

const sketchyBox = {
  border: `3px solid ${markerBlack}`,
  borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
  boxShadow: `4px 4px 0px ${markerBlack}`,
  position: 'relative',
};

const Itinerary = () => {
  const [expanded, setExpanded] = useState('panel2');

  const handleToggle = (panel) => {
    setExpanded(expanded === panel ? false : panel);
  };

  const scheduleData = [
    {
      id: 'panel1', 
      time: 'LA PREVIA', 
      title: 'Calentamiento y Entrada',
      subtitle: 'Apertura de puertas. Es momento de ingresar, buscar tu lugar en la tribuna asignada y prepararte para el gran encuentro.',
    },
    {
      id: 'panel2', 
      time: 'PRIMER TIEMPO', 
      title: 'El Silbatazo Inicial y Protocolo Oficial ⚽',
      subtitle: '¡Arranca el partido! Damos inicio formal con la gran entrada de la capitana, su corte de honor y los momentos más emotivos de la ceremonia.',
    },
    {
      id: 'panel3', 
      time: 'SEGUNDO TIEMPO', 
      title: 'Juego Limpio y Cambio de Camiseta 👟',
      subtitle: '¡A dejarlo todo en la cancha! Salimos al campo de juego a divertirnos. Trae ropa cómoda y zapatillas para sumarte a los desafíos.',
    },
    {
      id: 'panel4', 
      time: 'TIEMPO EXTRA', 
      title: 'Definición por Penales y Festejo Final 🏆',
      subtitle: 'Los minutos decisivos. Cerramos con broche de oro soplando las velas de la torta y cantando el feliz cumpleaños para celebrar el gran triunfo.',
      isLast: true,
    },
  ];

  return (
    <>
      <SvgFilters />
      <GlobalStyles styles={{ 
        '@keyframes popIn': { '0%': { transform: 'scale(0.95)', opacity: 0 }, '100%': { transform: 'scale(1)', opacity: 1 } },
        '@keyframes floatGentle': { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-4px)' } }
      }} />

      <Box sx={{ width: '100%', backgroundColor: bgPurple, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', pb: 6 }}>
        
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 1 }}><StripesBackgroundSvg /></Box>
        <Box sx={{ position: 'absolute', inset: 0, opacity: 0.15, mixBlendMode: 'overlay', pointerEvents: 'none', zIndex: 2, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        <Box sx={{ position: 'absolute', top: '15%', left: '8%', zIndex: 3, animation: 'floatGentle 4s ease-in-out infinite' }}><GoldStarSvg size={24} /></Box>
        <Box sx={{ position: 'absolute', bottom: '10%', right: '5%', zIndex: 3, animation: 'floatGentle 3s ease-in-out infinite reverse' }}><StarSolidSvg size={18} fill={pink15} /></Box>

        <Box sx={{ zIndex: 10, px: 2, pt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <Box sx={{ ...sketchyBox, width: '100%', maxWidth: '500px', display: 'flex', p: 0, overflow: 'hidden', backgroundColor: paperCream, transform: 'rotate(0.5deg)' }}>
            <Box sx={{ flex: 1, py: 1.5, px: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <MatchTimerSvg size={22} stroke={markerBlack} />
              <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.8rem', color: markerBlack, textTransform: 'uppercase', letterSpacing: '2px' }}>
                Minuto a Minuto • Cronograma
              </Typography>
            </Box>
            <Box sx={{ width: '60px', borderLeft: `3px solid ${markerBlack}`, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: pink15 }}>
              <StarSolidSvg size={18} fill={paperCream} />
            </Box>
          </Box>

          <Box sx={{ pt: { xs: 5, sm: 6 }, pb: 4, width: '100%', maxWidth: '500px', position: 'relative' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1, position: 'relative' }}>
              <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: { xs: '3.5rem', sm: '4.5rem' }, color: paperCream, lineHeight: 0.85, textTransform: 'uppercase', textShadow: `2px 2px 0px ${markerBlack}` }}>TIEMPO DE</Typography>
              <Box sx={{ border: `2px solid ${markerBlack}`, p: 0.8, px: 1.2, backgroundColor: paperCream, boxShadow: `3px 3px 0px ${markerBlack}`, transform: 'rotate(3deg)' }}>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.65rem', color: pink15, letterSpacing: '1px' }}>MATCHDAY PLAN</Typography>
              </Box>
            </Box>
            
            <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: { xs: '3.5rem', sm: '4.5rem' }, color: pink15, lineHeight: 0.85, textTransform: 'uppercase', mb: 2, textShadow: `2px 2px 0px ${markerBlack}` }}>JUEGO</Typography>
            
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, backgroundColor: markerBlack, color: paperCream, px: 2, py: 0.8, border: `2px solid ${paperCream}`, boxShadow: `4px 4px 0px ${pink15}`, transform: 'rotate(-1deg)' }}>
              <SketchySoccerBallSvg size={18} stroke={paperCream} />
              <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.75rem', letterSpacing: '1.5px', textTransform: 'uppercase' }}>4 Fases Confirmadas</Typography>
            </Box>
          </Box>

          <Box sx={{ ...sketchyBox, width: '100%', maxWidth: '500px', backgroundColor: paperCream, p: 0, overflow: 'hidden', transform: 'rotate(-0.5deg)' }}>
            {scheduleData.map((item) => {
              const isOpen = expanded === item.id;
              return (
                <Box key={item.id} onClick={() => handleToggle(item.id)} sx={{ display: 'flex', flexDirection: 'column', borderBottom: item.isLast ? 'none' : `2px dashed ${markerBlack}`, backgroundColor: isOpen ? pink15 : 'transparent', color: isOpen ? paperCream : markerBlack, cursor: 'pointer', transition: 'all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)' }}>
                  
                  <Box sx={{ display: 'flex', width: '100%', minHeight: { xs: '76px', sm: '86px' } }}>
                    {/* El tamaño de la fuente fue ajustado para textos más largos en vez de horas */}
                    <Box sx={{ width: { xs: '36%', sm: '30%' }, p: { xs: 2, sm: 2.5 }, borderRight: `2px solid ${markerBlack}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 0.3 }}>
                      <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: { xs: '1.5rem', sm: '1.8rem' }, color: isOpen ? paperCream : markerBlack, lineHeight: 1.1, letterSpacing: '0px', textAlign: 'center' }}>
                        {item.time}
                      </Typography>
                      {item.phase && (
                        <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.6rem', letterSpacing: '1px', textTransform: 'uppercase', color: isOpen ? '#FFF' : pink15, textAlign: 'center' }}>
                          {item.phase}
                        </Typography>
                      )}
                    </Box>

                    <Box sx={{ flex: 1, p: { xs: 2, sm: 3 }, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1.5 }}>
                      <Box>
                        <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: { xs: '1rem', sm: '1.2rem' }, textTransform: 'uppercase', lineHeight: 1.1, letterSpacing: '0.5px' }}>
                          {item.title}
                        </Typography>
                      </Box>
                      <Box sx={{ width: '30px', height: '30px', border: `2px solid ${markerBlack}`, borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)', flexShrink: 0, backgroundColor: isOpen ? paperCream : 'transparent' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={markerBlack} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'url(#roughMarker)' }}>
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </Box>
                    </Box>
                  </Box>

                  <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <Box sx={{ px: { xs: 2.5, sm: 4 }, pb: 3, pt: 1, backgroundColor: isOpen ? pink15 : 'transparent' }}>
                      <Box sx={{ borderTop: `2px dashed ${paperCream}`, pt: 2, display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                        <StarSolidSvg size={15} fill={paperCream} />
                        <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: { xs: '0.85rem', sm: '0.95rem' }, lineHeight: 1.5, color: paperCream }}>
                          {item.subtitle}
                        </Typography>
                      </Box>
                    </Box>
                  </Collapse>
                  
                </Box>
              );
            })}
          </Box>

        </Box>
      </Box>
    </>
  );
};

export default Itinerary;