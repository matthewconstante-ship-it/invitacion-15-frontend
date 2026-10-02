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
    <rect x="5" y="-10" width="3" height="120" fill={stripeLight} filter="url(#roughMarker)" />
    <rect x="15" y="-10" width="6" height="120" fill={stripeMed} filter="url(#roughMarker)" />
    <rect x="75" y="-10" width="8" height="120" fill={stripeMed} filter="url(#roughMarker)" />
    <rect x="86" y="-10" width="2" height="120" fill={stripeLight} filter="url(#roughMarker)" />
  </svg>
);

const StarSolidSvg = ({ size = 20, fill = markerBlack }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill={fill} stroke={markerBlack} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" filter="url(#roughMarker)">
    <path d="M 50 10 L 62 38 L 92 35 L 65 55 L 78 88 L 50 68 L 22 88 L 32 55 L 8 38 L 38 35 Z" />
  </svg>
);

const GoldStarSvg = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={starGold}>
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5Z" />
  </svg>
);

const SketchyCameraLensSvg = ({ size = 22, stroke = markerBlack }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#roughMarker)">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
    <circle cx="12" cy="13" r="1.5" fill={stroke} />
  </svg>
);

const SketchyBatterySvg = ({ size = 18, stroke = paperCream }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" filter="url(#roughMarker)">
    <rect x="3" y="7" width="16" height="10" rx="1.5" />
    <line x1="22" y1="10" x2="22" y2="14" strokeWidth="2.5" />
    <rect x="5" y="9.5" width="3" height="5" fill={stroke} style={{ animation: 'batteryPulse 1.5s infinite 0s' }} />
    <rect x="9" y="9.5" width="3" height="5" fill={stroke} style={{ animation: 'batteryPulse 1.5s infinite 0.2s' }} />
    <rect x="13" y="9.5" width="3" height="5" fill={stroke} style={{ animation: 'batteryPulse 1.5s infinite 0.4s' }} />
  </svg>
);

const sketchyBox = {
  border: `3px solid ${markerBlack}`,
  borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
  boxShadow: `4px 4px 0px ${markerBlack}`,
  position: 'relative',
};

const PhotoUpload = () => {
  
  // Función para redirigir instantáneamente a la galería
  const handleUpload = () => {
    window.location.href = "https://photos.app.goo.gl/i6sESeJm6xWvrjCJ9";
  };

  return (
    <>
      <SvgFilters />
      <GlobalStyles styles={{ 
        '@keyframes blinkRec': { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0.1 } }, 
        '@keyframes focusPulse': { '0%, 100%': { transform: 'scale(1)', borderColor: 'rgba(26,26,26,0.2)' }, '50%': { transform: 'scale(1.03)', borderColor: 'rgba(228, 107, 156, 0.9)' } },
        '@keyframes floatGentle': { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-5px)' } },
        '@keyframes batteryPulse': { '0%, 100%': { opacity: 0.3 }, '50%': { opacity: 1 } }
      }} />

      <Box sx={{ width: '100%', backgroundColor: bgPurple, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>

        <Box sx={{ position: 'absolute', inset: 0, zIndex: 1 }}><StripesBackgroundSvg /></Box>
        <Box sx={{ position: 'absolute', inset: 0, opacity: 0.15, mixBlendMode: 'overlay', pointerEvents: 'none', zIndex: 2, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        
        <Box sx={{ position: 'absolute', top: '15%', left: '8%', zIndex: 3, animation: 'floatGentle 4s ease-in-out infinite' }}><GoldStarSvg size={24} /></Box>
        <Box sx={{ position: 'absolute', bottom: '25%', right: '8%', zIndex: 3, animation: 'floatGentle 3s ease-in-out infinite reverse' }}><StarSolidSvg size={16} fill={pink15} /></Box>

        <Box sx={{ zIndex: 10, px: 2, pt: 4, display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ ...sketchyBox, width: '100%', maxWidth: '440px', display: 'flex', p: 0, overflow: 'hidden', backgroundColor: paperCream, transform: 'rotate(1deg)' }}>
            <Box sx={{ flex: 1, py: 1.5, px: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <SketchyCameraLensSvg size={22} stroke={markerBlack} />
              <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.8rem', color: markerBlack, textTransform: 'uppercase', letterSpacing: '2px' }}>
                Cámara Glam • En Vivo
              </Typography>
            </Box>
            <Box sx={{ width: '60px', borderLeft: `3px solid ${markerBlack}`, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: pink15 }}>
              <StarSolidSvg size={18} fill={paperCream} />
            </Box>
          </Box>
        </Box>

        <Box sx={{ pt: { xs: 5, sm: 6 }, pb: 8, px: { xs: 3, sm: 5 }, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <Box sx={{ position: 'absolute', inset: { xs: 20, sm: 30 }, border: `3px dashed rgba(26,26,26,0.3)`, pointerEvents: 'none', zIndex: 1, animation: 'focusPulse 4s ease-in-out infinite', filter: 'url(#roughMarker)' }}>
            <Box sx={{ position: 'absolute', top: -3, left: -3, width: 30, height: 30, borderTop: `5px solid ${markerBlack}`, borderLeft: `5px solid ${markerBlack}` }} />
            <Box sx={{ position: 'absolute', top: -3, right: -3, width: 30, height: 30, borderTop: `5px solid ${markerBlack}`, borderRight: `5px solid ${markerBlack}` }} />
            <Box sx={{ position: 'absolute', bottom: -3, left: -3, width: 30, height: 30, borderBottom: `5px solid ${markerBlack}`, borderLeft: `5px solid ${markerBlack}` }} />
            <Box sx={{ position: 'absolute', bottom: -3, right: -3, width: 30, height: 30, borderBottom: `5px solid ${markerBlack}`, borderRight: `5px solid ${markerBlack}` }} />
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.2 }}>
              <Box sx={{ width: '40px', height: '2px', backgroundColor: markerBlack, position: 'absolute' }} />
              <Box sx={{ width: '2px', height: '40px', backgroundColor: markerBlack, position: 'absolute' }} />
            </Box>
          </Box>

          <Box sx={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '440px' }}>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: 'rgba(255,255,255,0.7)', px: 1.5, py: 0.5, borderRadius: '20px', border: `2px solid ${markerBlack}` }}>
                <Box sx={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: pink15, animation: 'blinkRec 1.5s infinite' }} />
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.8rem', color: markerBlack, letterSpacing: '2px' }}>REC</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.75rem', color: paperCream, letterSpacing: '1px' }}>100%</Typography>
                <SketchyBatterySvg size={18} stroke={paperCream} />
              </Box>
            </Box>

            <Box sx={{ textAlign: 'center', mb: 5 }}>
              <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: { xs: '3.6rem', sm: '5rem' }, color: paperCream, lineHeight: 0.9, textTransform: 'uppercase', textShadow: `2px 2px 0px ${markerBlack}` }}>
                REPORTERO
              </Typography>
              <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: { xs: '3.6rem', sm: '5rem' }, color: pink15, lineHeight: 0.9, textTransform: 'uppercase', mb: 2, textShadow: `2px 2px 0px ${markerBlack}` }}>
                EN CANCHA
              </Typography>
              <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.8rem', color: markerBlack, backgroundColor: paperCream, border: `2px solid ${markerBlack}`, display: 'inline-block', px: 2, py: 0.8, textTransform: 'uppercase', letterSpacing: '1px', mb: 3, transform: 'rotate(-2deg)' }}>
                El álbum en vivo de la fiesta
              </Typography>
              <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: '0.95rem', color: paperCream, lineHeight: 1.5, maxWidth: '380px', mx: 'auto', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                Conviértete en la cámara táctica de la noche. Sube aquí tus mejores fotos y videos para el archivo oficial de los 15 de Anahy.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ p: '2px', backgroundColor: markerBlack, display: 'inline-flex', alignSelf: 'center', border: `3px solid ${markerBlack}`, transform: 'rotate(1deg)' }}>
                <Button onClick={handleUpload} fullWidth sx={{ backgroundColor: pink15, color: paperCream, fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '1rem', letterSpacing: '2px', borderRadius: 0, py: 2, px: 3, border: `2px dashed ${paperCream}`, transition: 'all 0.15s ease-out', display: 'flex', alignItems: 'center', gap: 1.5, '&:hover': { backgroundColor: markerBlack, color: paperCream, border: `2px dashed ${markerBlack}`, transform: 'translate(2px, 2px)' } }}>
                  <SketchyCameraLensSvg size={22} stroke={paperCream} /> ABRIR LENTE / SUBIR
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PhotoUpload;