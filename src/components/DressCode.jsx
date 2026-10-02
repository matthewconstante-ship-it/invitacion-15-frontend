import { Box, Typography, Button, GlobalStyles } from '@mui/material';

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
    <rect x="8" y="-10" width="5" height="120" fill={stripeMed} filter="url(#roughMarker)" />
    <rect x="18" y="-10" width="2" height="120" fill={stripeLight} filter="url(#roughMarker)" />
    <rect x="82" y="-10" width="8" height="120" fill={stripeMed} filter="url(#roughMarker)" />
    <rect x="94" y="-10" width="3" height="120" fill={stripeLight} filter="url(#roughMarker)" />
  </svg>
);

const HangerSvg = ({ size = 24, stroke = markerBlack }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#roughMarker)">
    <path d="M12 2a3 3 0 0 0-3 3c0 1.3.8 2.4 2 2.8V9L2.5 17A2 2 0 0 0 4 20h16a2 2 0 0 0 1.5-3L13 9V7.8c1.2-.4 2-1.5 2-2.8a3 3 0 0 0-3-3z" />
  </svg>
);

const SketchySoccerBallSvg = ({ size = 40, stroke = pink15 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" filter="url(#roughMarker)">
    <circle cx="50" cy="50" r="44" />
    <polygon points="50,28 69,42 62,65 38,65 31,42" fill={stroke} opacity="0.2" />
    <polygon points="50,28 69,42 62,65 38,65 31,42" />
    <line x1="50" y1="28" x2="50" y2="6" />
    <line x1="69" y1="42" x2="90" y2="34" />
    <line x1="62" y1="65" x2="78" y2="86" />
    <line x1="38" y1="65" x2="22" y2="86" />
    <line x1="31" y1="42" x2="10" y2="34" />
  </svg>
);

const PinkCardSvg = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 28" fill="none" filter="url(#roughMarker)">
    <rect x="2" y="2" width="20" height="24" rx="3" fill={pink15} stroke={markerBlack} strokeWidth="2.5" />
    <line x1="7" y1="8" x2="17" y2="8" stroke={paperCream} strokeWidth="2" strokeLinecap="round" />
    <line x1="7" y1="13" x2="13" y2="13" stroke={paperCream} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const WhistleSvg = ({ size = 24, stroke = markerBlack }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#roughMarker)">
    <path d="M11 5a6 6 0 1 0 0 12h2a6 6 0 0 0 6-6V7a2 2 0 0 0-2-2h-6z" />
    <circle cx="11" cy="11" r="2" fill={pink15} stroke="none" />
    <path d="M17 7v4" />
    <path d="M21 7h-2" />
  </svg>
);

const LockerLouversSvg = () => (
  <svg width="34" height="12" viewBox="0 0 40 14" fill="none" filter="url(#roughMarker)">
    <rect x="0" y="1" width="40" height="3" rx="1" fill={markerBlack} opacity="0.4" />
    <rect x="0" y="6" width="40" height="3" rx="1" fill={markerBlack} opacity="0.4" />
    <rect x="0" y="11" width="40" height="3" rx="1" fill={markerBlack} opacity="0.4" />
  </svg>
);

const StarSolidSvg = ({ size = 20, fill = markerBlack }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill={fill} stroke={markerBlack} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" filter="url(#roughMarker)">
    <path d="M 50 10 L 62 38 L 92 35 L 65 55 L 78 88 L 50 68 L 22 88 L 32 55 L 8 38 L 38 35 Z" />
  </svg>
);

const HandDrawnCrownSvg = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" filter="url(#roughMarker)">
    <path d="M 10 45 L 18 10 L 35 28 L 50 5 L 65 28 L 82 10 L 90 45 Z" stroke={markerBlack} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const sketchyBox = {
  border: `3px solid ${markerBlack}`,
  borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
  boxShadow: `5px 5px 0px ${markerBlack}`,
  position: 'relative',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
};

const polaroidBox = {
  border: `2px solid ${markerBlack}`,
  backgroundColor: '#FFF',
  boxShadow: `4px 4px 0px ${markerBlack}`,
  transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease',
  '&:hover': {
    transform: 'scale(1.05) rotate(2deg)',
    boxShadow: `8px 8px 0px ${pink15}`,
    zIndex: 5,
  }
};

const DressCode = () => {
  const moodboardItems = [
    { src: "/289899f542c0a0cb1cdb9e159ae71e7d-removebg-preview.png", label: "JERSEY RETRO", tag: "LOCKER 01" },
    { src: "/e28f110853c7bafdce159e6d5653158d-removebg-preview.png", label: "LDU QUITO KIT", tag: "LOCKER 02" },
    { src: "/pinzas.png", label: "PANTALÓN DE PINZAS", tag: "LOCKER 03" },
    { src: "/d5ec822e1d645ab36d968beee014e7f0-removebg-preview.png", label: "WIDE LEG TAILORED", tag: "LOCKER 04" },
    { src: "/bf72bda00d55920e3c46790d25af1e6b-removebg-preview.png", label: "FALDA DE TABLAS", tag: "LOCKER 05" },
    { src: "/15a8808e6cff1b6025b05a6cb26aabcc-removebg-preview.png", label: "MAXI FALDA CHIC", tag: "LOCKER 06" },
    { src: "/645514d305619f90ae3ae832671a979f-removebg-preview.png", label: "SAMBA SNEAKERS", tag: "LOCKER 07" },
    { src: "/2a3a27cd6e10b980f52f40de05d1f2ae-removebg-preview.png", label: "MOCASINES CHUNKY", tag: "LOCKER 08" },
    { src: "/27be74afe33b239550addc5e835f82e0-removebg-preview.png", label: "GAFAS URBAN 90s", tag: "LOCKER 09" },
    { src: "/de7519a91bf6dc7eddedcad60fc95c2e-removebg-preview.png", label: "CASIO VINTAGE", tag: "LOCKER 10" },
  ];

  return (
    <>
      <SvgFilters />
      <GlobalStyles styles={{ 
        '@keyframes tapeWiggle': { '0%, 100%': { transform: 'rotate(-2deg)' }, '50%': { transform: 'rotate(2deg)' } },
        '@keyframes floatGentle': { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-6px)' } }
      }} />
      
      <Box sx={{ width: '100%', backgroundColor: bgPurple, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', pb: 8 }}>
        
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 1 }}><StripesBackgroundSvg /></Box>
        <Box sx={{ position: 'absolute', inset: 0, opacity: 0.15, mixBlendMode: 'overlay', pointerEvents: 'none', zIndex: 2, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        <Box sx={{ position: 'absolute', top: '18%', left: '5%', zIndex: 3, transform: 'rotate(-15deg)', animation: 'floatGentle 4s ease-in-out infinite' }}><SketchySoccerBallSvg size={45} stroke={pink15} /></Box>
        <Box sx={{ position: 'absolute', top: '45%', right: '4%', zIndex: 3, animation: 'floatGentle 3s ease-in-out infinite reverse' }}><StarSolidSvg size={20} fill={starGold} /></Box>

        <Box sx={{ zIndex: 10, px: 2, pt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <Box sx={{ ...sketchyBox, width: '100%', maxWidth: '440px', display: 'flex', p: 0, overflow: 'hidden', backgroundColor: paperCream, transform: 'rotate(-1deg)' }}>
            <Box sx={{ flex: 1, py: 1.5, px: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <HangerSvg size={22} stroke={markerBlack} />
              <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.8rem', color: markerBlack, textTransform: 'uppercase', letterSpacing: '2px' }}>
                Backstage • Dress Code
              </Typography>
            </Box>
            <Box sx={{ width: '60px', borderLeft: `3px solid ${markerBlack}`, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: pink15 }}>
              <HandDrawnCrownSvg size={20} />
            </Box>
          </Box>

          <Box sx={{ pt: { xs: 5, sm: 6 }, pb: 4, width: '100%', maxWidth: '440px', position: 'relative' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2, position: 'relative' }}>
              <Box>
                <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: { xs: '3.8rem', sm: '4.8rem' }, color: paperCream, lineHeight: 0.85, textTransform: 'uppercase', textShadow: `2px 2px 0px ${markerBlack}` }}>BLOKE CORE</Typography>
                <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: { xs: '3.8rem', sm: '4.8rem' }, color: pink15, lineHeight: 0.85, textTransform: 'uppercase', textShadow: `2px 2px 0px ${markerBlack}` }}>DE GALA</Typography>
              </Box>
              <Box sx={{ position: 'absolute', top: '-10px', right: '-10px', transform: 'rotate(15deg)' }}>
                <StarSolidSvg size={35} fill={paperCream} />
              </Box>
            </Box>

            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: '0.95rem', color: paperCream, mb: 5, lineHeight: 1.6, textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
              La fusión perfecta entre la cultura futbolera y la elegancia coquette. Tu camiseta favorita combinada con piezas sastreras para celebrar los 15 con muchísimo estilo.
            </Typography>

            <Box sx={{ ...sketchyBox, mb: 6, backgroundColor: paperCream, transform: 'rotate(1deg)' }}>
              <Box sx={{ backgroundColor: markerBlack, color: paperCream, py: 1.5, px: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '15px 15px 0 0', borderBottom: `3px dashed ${markerBlack}` }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <WhistleSvg size={22} stroke={paperCream} />
                  <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Tácticas de Etiqueta</Typography>
                </Box>
                <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: '1.1rem', color: pink15 }}>CÓDIGO CHIC</Typography>
              </Box>

              <Box sx={{ p: { xs: 3, sm: 4 }, display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'flex-start' }}>
                  <Box sx={{ minWidth: '36px', height: '36px', border: `2px solid ${markerBlack}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: pink15, filter: 'url(#roughMarker)' }}>
                    <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: '1.3rem', color: paperCream, lineHeight: 1 }}>01</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.95rem', color: markerBlack, textTransform: 'uppercase', letterSpacing: '0.5px' }}>DRESS CODE • ELEGANTE Y CHIC</Typography>
                    <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#444', mt: 0.5, lineHeight: 1.4 }}>Queremos verte espectacular. Pantalones de vestir de pinzas, prendas sastreras, faldas de tablas o maxi faldas. !QUEREMOS CERO JEANS!</Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'flex-start' }}>
                  <Box sx={{ minWidth: '36px', display: 'flex', justifyContent: 'center', pt: 0.5 }}>
                    <PinkCardSvg size={28} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.95rem', color: pink15, textTransform: 'uppercase', letterSpacing: '0.5px' }}>TARJETA ROSA: CAMISETA PROHIBIDA</Typography>
                    <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#444', mt: 0.5, lineHeight: 1.4 }}>Expulsión directa. Permitida cualquier camiseta de clubes nacionales o internacionales, o retro. la unìca que se queda en casa es al del REAL MADRID</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'flex-start' }}>
                  <Box sx={{ minWidth: '36px', height: '36px', border: `2px solid ${markerBlack}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: paperCream, filter: 'url(#roughMarker)' }}>
                    <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: '1.3rem', color: markerBlack, lineHeight: 1 }}>03</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.95rem', color: markerBlack, textTransform: 'uppercase', letterSpacing: '0.5px' }}>CALZADO • CHIC Y COMODIDAD</Typography>
                    <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#444', mt: 0.5, lineHeight: 1.4 }}>Lo mas importante es sentirse comodo. Trae tenis planos (estilo Samba, Gazelle) o mocasines, o unos mas formales si prefieres, chic y comodo es la consigna</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box sx={{ mb: 5 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 2.5 }}>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.85rem', color: markerBlack, backgroundColor: paperCream, px: 2, py: 0.8, border: `2px solid ${markerBlack}`, transform: 'rotate(-2deg)', textTransform: 'uppercase', letterSpacing: '2px' }}>
                  Lookbook de Inspiración
                </Typography>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 800, fontSize: '0.75rem', color: pink15, textShadow: '1px 1px 0px rgba(0,0,0,0.3)' }}>
                  10 PIEZAS TOP
                </Typography>
              </Box>
              
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2.5 }}>
                {moodboardItems.map((item, idx) => (
                  <Box key={idx} sx={{ ...polaroidBox, p: 1.5, display: 'flex', flexDirection: 'column', position: 'relative' }}>
                    <Box sx={{ position: 'absolute', top: '-8px', left: '50%', transform: 'translateX(-50%) rotate(-3deg)', width: '40px', height: '15px', backgroundColor: 'rgba(255, 246, 233, 0.7)', border: `1px solid ${markerBlack}`, opacity: 0.8, zIndex: 2 }} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `2px dashed ${markerBlack}`, pb: 0.8, mb: 1, pt: 1 }}>
                      <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.55rem', color: pink15, letterSpacing: '1px' }}>{item.tag}</Typography>
                      <LockerLouversSvg />
                    </Box>
                    <Box sx={{ height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center', p: 1, backgroundColor: '#F9F9F9', border: `1px solid rgba(0,0,0,0.1)` }}>
                      <Box component="img" src={item.src} alt={item.label} sx={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                    </Box>
                    <Box sx={{ mt: 'auto', pt: 1 }}>
                      <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.65rem', color: markerBlack, textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{item.label}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            <Button 
              variant="contained" 
              href="https://pin.it/jyYsXQGXb" 
              target="_blank" 
              rel="noopener noreferrer" 
              fullWidth 
              sx={{ 
                ...sketchyBox,
                backgroundColor: pink15, 
                color: paperCream, 
                fontFamily: '"Inter", sans-serif', 
                fontWeight: 900, 
                fontSize: '1rem', 
                letterSpacing: '2px', 
                py: 2.5,
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: 1.5, 
                '&:hover': { 
                  backgroundColor: markerBlack, 
                  color: paperCream, 
                  boxShadow: `7px 7px 0px ${pink15}`, 
                  transform: 'translate(-2px, -2px) rotate(1deg)' 
                }, 
                '&:active': { 
                  boxShadow: `0px 0px 0px transparent`, 
                  transform: 'translate(4px, 4px)' 
                } 
              }}
            >
              <HangerSvg size={20} stroke={paperCream} /> VER LOOKBOOK EN PINTEREST
            </Button>

          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DressCode;