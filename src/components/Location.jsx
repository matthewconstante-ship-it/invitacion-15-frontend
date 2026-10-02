import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button, GlobalStyles } from '@mui/material';

const bgPurple = '#381460';
const stripeLight = '#825CA6';
const stripeMed = '#5C348B';
const paperCream = '#FDF6E9';
const markerBlack = '#1A1A1A';
const pink15 = '#E46B9C';

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

const StadiumPinSvg = ({ size = 20, stroke = markerBlack }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#roughMarker)">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3.5" fill={pink15} stroke={pink15} />
  </svg>
);

const StarSolidSvg = ({ size = 18, fill = markerBlack }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill={fill} stroke={markerBlack} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" filter="url(#roughMarker)">
    <path d="M 50 10 L 62 38 L 92 35 L 65 55 L 78 88 L 50 68 L 22 88 L 32 55 L 8 38 L 38 35 Z" />
  </svg>
);

const SketchySoccerBallSvg = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke={markerBlack} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" filter="url(#roughMarker)">
    <circle cx="50" cy="50" r="46" fill={paperCream} />
    <polygon points="50,28 69,42 62,65 38,65 31,42" fill={markerBlack} />
    <line x1="50" y1="28" x2="50" y2="4" />
    <line x1="69" y1="42" x2="93" y2="34" />
    <line x1="62" y1="65" x2="78" y2="88" />
    <line x1="38" y1="65" x2="22" y2="88" />
    <line x1="31" y1="42" x2="7" y2="34" />
  </svg>
);

const SketchyCompassSvg = () => (
  <svg viewBox="0 0 200 200" fill="none" style={{ width: '100%', height: '100%' }} filter="url(#roughMarker)">
    <circle cx="100" cy="100" r="95" stroke={pink15} strokeWidth="2" strokeDasharray="8 8" opacity="0.4" />
    <circle cx="100" cy="100" r="70" stroke={markerBlack} strokeWidth="1.5" opacity="0.15" />
    <line x1="100" y1="0" x2="100" y2="200" stroke={markerBlack} strokeWidth="1.5" opacity="0.15" />
    <line x1="0" y1="100" x2="200" y2="100" stroke={markerBlack} strokeWidth="1.5" opacity="0.15" />
    <polygon points="100,20 108,92 100,85 92,92" fill={pink15} opacity="0.7" />
    <polygon points="100,180 108,108 100,115 92,108" fill={markerBlack} opacity="0.2" />
    <polygon points="20,100 92,108 85,100 92,92" fill={markerBlack} opacity="0.2" />
    <polygon points="180,100 108,108 115,100 108,92" fill={markerBlack} opacity="0.2" />
  </svg>
);

const sketchyBox = {
  border: `3px solid ${markerBlack}`,
  borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
  boxShadow: `5px 5px 0px ${markerBlack}`,
  position: 'relative',
};

const Location = () => {
  const locationRef = useRef(null);
  const [isRolling, setIsRolling] = useState(false);
  const [animTrigger, setAnimTrigger] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsRolling(true);
        setAnimTrigger((prev) => prev + 1);
      } else setIsRolling(false);
    }, { threshold: 0.3 });
    if (locationRef.current) observer.observe(locationRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SvgFilters />
      <GlobalStyles styles={{ 
        '@keyframes compassSlowSpin': { from: { transform: 'translate(-50%, -50%) rotate(0deg)' }, to: { transform: 'translate(-50%, -50%) rotate(360deg)' } }, 
        '@keyframes passMarch': { to: { strokeDashoffset: -40 } }, 
        '@keyframes goalPulse': { '0%, 100%': { transform: 'scale(1)' }, '50%': { transform: 'scale(1.15)' } } 
      }} />
      
      <Box ref={locationRef} sx={{ width: '100%', backgroundColor: bgPurple, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
        
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 1 }}><StripesBackgroundSvg /></Box>
        <Box sx={{ position: 'absolute', inset: 0, opacity: 0.15, mixBlendMode: 'overlay', pointerEvents: 'none', zIndex: 2, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        <Box sx={{ zIndex: 10, px: 2, pt: 4, display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ ...sketchyBox, width: '100%', maxWidth: '500px', display: 'flex', p: 0, overflow: 'hidden', backgroundColor: paperCream, transform: 'rotate(1deg)' }}>
            <Box sx={{ flex: 1, py: 1.5, px: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <StadiumPinSvg size={22} stroke={markerBlack} />
              <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.8rem', color: markerBlack, textTransform: 'uppercase', letterSpacing: '2px' }}>
                TE INVITO A CELEBRAR CONMIGO
              </Typography>
            </Box>
            <Box sx={{ width: '60px', borderLeft: `3px solid ${markerBlack}`, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: pink15 }}>
              <StarSolidSvg size={18} fill={paperCream} />
            </Box>
          </Box>
        </Box>

        <Box sx={{ position: 'relative', p: { xs: 4, sm: 6 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{ position: 'absolute', top: '50%', right: { xs: '-80px', sm: '-40px' }, width: { xs: '320px', sm: '420px' }, height: { xs: '320px', sm: '420px' }, pointerEvents: 'none', zIndex: 0, animation: 'compassSlowSpin 50s linear infinite' }}>
            <SketchyCompassSvg />
          </Box>
          <Box sx={{ position: 'absolute', top: 0, left: '50%', width: '2px', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.1)', transform: 'translateX(-50%)', pointerEvents: 'none', zIndex: 0, filter: 'url(#roughMarker)' }} />

          <Box sx={{ position: 'relative', zIndex: 2, mb: 1, width: '100%', maxWidth: '420px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: { xs: '1.2rem', sm: '1.6rem' }, color: paperCream, lineHeight: 1.3, textTransform: 'uppercase', textShadow: `2px 2px 0px ${markerBlack}` }}>Hay momentos en la vida que son espectaculares por sí solos pero al compartirlos con quienes más queremos,</Typography>
              <Box sx={{ border: `2px solid ${markerBlack}`, px: 1.2, py: 0.5, backgroundColor: paperCream, boxShadow: `3px 3px 0px ${markerBlack}`, display: { xs: 'none', sm: 'block' }, transform: 'rotate(4deg)' }}>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.65rem', color: pink15, letterSpacing: '1px' }}>MATCH VENUE</Typography>
              </Box>
            </Box>
            <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: { xs: '1.2rem', sm: '2.3rem' }, color: pink15, lineHeight: 1.3, textTransform: 'uppercase', mb: 2.5, textShadow: `2px 2px 0px ${markerBlack}` }}> se vuelven inolvidables</Typography>
          </Box>

          <Box key={animTrigger} sx={{ position: 'relative', zIndex: 2, my: 3, width: '100%', maxWidth: '420px' }}>
            <Box sx={{ ...sketchyBox, height: '60px', display: 'flex', alignItems: 'center', backgroundColor: paperCream, px: 1.5, gap: 1, transform: 'rotate(-1deg)' }}>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6, flexShrink: 0, zIndex: 3 }}>
                <Box sx={{ width: '8px', height: '8px', backgroundColor: markerBlack, borderRadius: '50%', filter: 'url(#roughMarker)' }} />
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.72rem', color: markerBlack, letterSpacing: '1px' }}>SEDE OFICIAL </Typography>
              </Box>

              <Box sx={{ flex: 1, position: 'relative', height: '100%', display: 'flex', alignItems: 'center', overflow: 'visible', mx: 1 }}>
                <Box sx={{ width: '100%', height: '14px', display: 'flex', alignItems: 'center' }}>
                  <svg width="100%" height="100%" viewBox="0 0 200 14" preserveAspectRatio="none">
                    <line x1="0" y1="7" x2="200" y2="7" stroke={pink15} strokeWidth="3" strokeDasharray="8 6" style={{ animation: 'passMarch 1.2s linear infinite' }} filter="url(#roughMarker)" />
                  </svg>
                </Box>
                <Box sx={{ position: 'absolute', top: '50%', left: isRolling ? 'calc(100% - 32px)' : '0px', transform: 'translateY(-50%)', transition: 'left 1.3s cubic-bezier(0.34, 1.56, 0.64, 1)', zIndex: 5 }}>
                  <Box sx={{ transform: isRolling ? 'rotate(540deg)' : 'rotate(0deg)', transition: 'transform 1.3s cubic-bezier(0.34, 1.56, 0.64, 1)', filter: 'drop-shadow(3px 3px 0px rgba(0,0,0,0.2))' }}>
                    <SketchySoccerBallSvg size={36} />
                  </Box>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: pink15, color: paperCream, px: 1.2, py: 0.6, border: `2px solid ${markerBlack}`, flexShrink: 0, zIndex: 3, animation: isRolling ? 'goalPulse 0.4s ease-out 1.3s' : 'none' }}>
                <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: '0.95rem', letterSpacing: '1px', lineHeight: 1 }}>CANCHA</Typography>
              </Box>
            </Box>
          </Box>g

          <Box sx={{ ...sketchyBox, backgroundColor: paperCream, p: 3, mb: 4, width: '100%', maxWidth: '420px', position: 'relative', zIndex: 2, transform: 'rotate(1deg)' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `2px dashed ${markerBlack}`, pb: 1, mb: 2 }}>
              <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.7rem', color: markerBlack, letterSpacing: '1.5px', textTransform: 'uppercase' }}>UBICACIÓN OFICIAL</Typography>
              <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 800, fontSize: '0.7rem', color: pink15 }}>QUITO, ECUADOR</Typography>
            </Box>
            <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: '1.5rem', color: markerBlack, textTransform: 'uppercase', lineHeight: 1.1, mb: 1.5 }}>¡TE ESPERO PARA CELEBRAR JUNTOS!</Typography>
            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: '0.9rem', color: '#444', lineHeight: 1.5 }}>
              Abre el mapa para conocer la ruta directa a la celebración. Llega puntual para no perderte el pitazo inicial de esta gran noche.
            </Typography>
          </Box>

          <Button 
            variant="contained" 
            href="https://maps.app.goo.gl/yEkRH5ZLua4YbTDQ6" 
            target="_blank" 
            rel="noopener noreferrer" 
            fullWidth
            sx={{ 
              ...sketchyBox,
              maxWidth: '420px',
              backgroundColor: pink15, 
              color: paperCream, 
              fontFamily: '"Inter", sans-serif', 
              fontWeight: 900, 
              fontSize: '1rem', 
              letterSpacing: '2px', 
              py: 2.5, 
              px: 4, 
              zIndex: 2, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              gap: 1.5, 
              '&:hover': { 
                backgroundColor: markerBlack, 
                color: paperCream, 
                boxShadow: `7px 7px 0px ${pink15}`, 
                transform: 'translate(-2px, -2px) rotate(-1deg)' 
              }, 
              '&:active': { 
                boxShadow: '0px 0px 0px transparent', 
                transform: 'translate(4px, 4px)' 
              } 
            }}
          >
            <StadiumPinSvg size={22} stroke={paperCream} /> ABRIR UBICACIÓN GPS
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Location;