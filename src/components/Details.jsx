import { useState, useEffect, useRef } from 'react';
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
    <rect x="12" y="-10" width="8" height="120" fill={stripeMed} filter="url(#roughMarker)" />
    <rect x="80" y="-10" width="7" height="120" fill={stripeMed} filter="url(#roughMarker)" />
    <rect x="92" y="-10" width="2" height="120" fill={stripeLight} filter="url(#roughMarker)" />
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

const HandDrawnCrownSvg = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" filter="url(#roughMarker)">
    <path d="M 10 45 L 18 10 L 35 28 L 50 5 L 65 28 L 82 10 L 90 45 Z" stroke={markerBlack} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <ellipse cx="50" cy="45" rx="40" ry="5" stroke={markerBlack} strokeWidth="6" fill="none" />
  </svg>
);

const EnvelopeGiftSvg = ({ size = 38, stroke = markerBlack, fill = 'none' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" filter="url(#roughMarker)">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 6L12 13L2 6" />
    <path d="M2 18L10 11" />
    <path d="M22 18L14 11" />
    <circle cx="12" cy="13" r="2.5" fill={pink15} stroke={pink15} />
  </svg>
);

const PinterestLogoSvg = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" filter="url(#roughMarker)">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.182 0 7.437 2.981 7.437 6.953 0 4.159-2.618 7.502-6.257 7.502-1.222 0-2.373-.635-2.766-1.385l-.754 2.871c-.274 1.055-1.02 2.37-1.523 3.176 1.185.367 2.441.565 3.74.565 6.621 0 11.988-5.367 11.988-11.987C24.005 5.367 18.638 0 12.017 0z"/>
  </svg>
);

const OfficialStampSvg = ({ size = 100 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" filter="url(#roughMarker)">
    <circle cx="60" cy="60" r="54" stroke={pink15} strokeWidth="3" strokeDasharray="6 4" />
    <circle cx="60" cy="60" r="46" stroke={pink15} strokeWidth="2" />
    <path id="curveTop" d="M 24 60 A 36 36 0 0 1 96 60" fill="none" />
    <text fontSize="8.5" fontFamily="'Inter', sans-serif" fontWeight="900" fill={pink15} letterSpacing="2">
      <textPath href="#curveTop" startOffset="50%" textAnchor="middle">RECUERDO INOLVIDABLE</textPath>
    </text>
    <text x="60" y="58" textAnchor="middle" fontFamily="'Anton', sans-serif" fontSize="28" fill={pink15} letterSpacing="1">15</text>
    <text x="60" y="74" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="7.5" fill={pink15} letterSpacing="1.5">AÑOS • QUITO</text>
    <circle cx="60" cy="82" r="2.5" fill={pink15} />
  </svg>
);

const BarcodeSvg = () => (
  <svg viewBox="0 0 200 40" style={{ width: '100%', height: '32px' }} filter="url(#roughMarker)">
    <g fill={markerBlack}>
      <rect x="0" y="0" width="3" height="40" />
      <rect x="5" y="0" width="2" height="40" />
      <rect x="10" y="0" width="5" height="40" />
      <rect x="18" y="0" width="2" height="40" />
      <rect x="23" y="0" width="4" height="40" />
      <rect x="30" y="0" width="2" height="40" />
      <rect x="36" y="0" width="6" height="40" />
      <rect x="46" y="0" width="2" height="40" />
      <rect x="52" y="0" width="3" height="40" />
      <rect x="58" y="0" width="7" height="40" />
      <rect x="68" y="0" width="2" height="40" />
      <rect x="74" y="0" width="4" height="40" />
      <rect x="82" y="0" width="6" height="40" />
      <rect x="91" y="0" width="2" height="40" />
      <rect x="96" y="0" width="3" height="40" />
      <rect x="102" y="0" width="5" height="40" />
      <rect x="110" y="0" width="2" height="40" />
      <rect x="115" y="0" width="6" height="40" />
      <rect x="124" y="0" width="3" height="40" />
      <rect x="130" y="0" width="4" height="40" />
      <rect x="138" y="0" width="2" height="40" />
      <rect x="144" y="0" width="5" height="40" />
      <rect x="152" y="0" width="2" height="40" />
      <rect x="157" y="0" width="6" height="40" />
      <rect x="166" y="0" width="3" height="40" />
      <rect x="172" y="0" width="4" height="40" />
      <rect x="180" y="0" width="2" height="40" />
      <rect x="185" y="0" width="5" height="40" />
      <rect x="194" y="0" width="6" height="40" />
    </g>
  </svg>
);

const sketchyBox = {
  border: `3px solid ${markerBlack}`,
  borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
  boxShadow: `4px 4px 0px ${markerBlack}`,
  position: 'relative',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
};

const Details = () => {
  const detailsRef = useRef(null);
  const [animTrigger, setAnimTrigger] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setAnimTrigger((prev) => prev + 1);
    }, { threshold: 0.25 });
    if (detailsRef.current) observer.observe(detailsRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("2216394111");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <SvgFilters />
      <GlobalStyles styles={{ 
        '@keyframes stampSlam': { '0%': { transform: 'scale(2.2) rotate(35deg)', opacity: 0 }, '70%': { transform: 'scale(0.95) rotate(-14deg)', opacity: 1 }, '100%': { transform: 'scale(1) rotate(-12deg)', opacity: 0.9 } }, 
        '@keyframes ticketSlide': { '0%': { transform: 'translateY(40px)', opacity: 0 }, '100%': { transform: 'translateY(0)', opacity: 1 } },
        '@keyframes floatFast': { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-8px)' } }
      }} />
      
      <Box ref={detailsRef} sx={{ width: '100%', backgroundColor: bgPurple, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
        
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 1 }}><StripesBackgroundSvg /></Box>
        <Box sx={{ position: 'absolute', inset: 0, opacity: 0.15, mixBlendMode: 'overlay', pointerEvents: 'none', zIndex: 2, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        <Box sx={{ position: 'absolute', top: '20%', left: '5%', zIndex: 3, animation: 'floatFast 3s ease-in-out infinite' }}><StarSolidSvg size={24} fill={pink15} /></Box>
        <Box sx={{ position: 'absolute', bottom: '15%', right: '10%', zIndex: 3, animation: 'floatFast 2.5s ease-in-out infinite reverse' }}><GoldStarSvg size={35} /></Box>

        <Box sx={{ zIndex: 10, px: 2, pt: 4, display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ ...sketchyBox, width: '100%', maxWidth: '440px', display: 'flex', p: 0, overflow: 'hidden', backgroundColor: paperCream, transform: 'rotate(1deg)' }}>
            <Box sx={{ flex: 1, py: 1.5, px: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <HandDrawnCrownSvg size={22} />
              <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.8rem', color: markerBlack, textTransform: 'uppercase', letterSpacing: '2px' }}>
                Detalles • Regalos
              </Typography>
            </Box>
            <Box sx={{ width: '60px', borderLeft: `3px solid ${markerBlack}`, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: pink15 }}>
              <StarSolidSvg size={18} fill={paperCream} />
            </Box>
          </Box>
        </Box>

        <Box key={animTrigger} sx={{ py: { xs: 5, sm: 6 }, px: { xs: 2.5, sm: 4 }, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 10, animation: 'ticketSlide 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards' }}>
          <Box sx={{ ...sketchyBox, backgroundColor: paperCream, color: markerBlack, maxWidth: '440px', width: '100%', display: 'flex', flexDirection: 'column', '&:hover': { transform: 'translate(-3px, -3px) rotate(-1deg)', boxShadow: `10px 10px 0px ${markerBlack}` } }}>
            
            <Box sx={{ p: 2.5, pb: 2, borderBottom: `2px dashed ${markerBlack}`, display: 'flex', flexDirection: 'column', gap: 1, backgroundColor: 'rgba(255,255,255,0.4)', borderRadius: '15px 15px 0 0' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.65rem', letterSpacing: '1.5px', textTransform: 'uppercase', color: pink15 }}>TICKET VIP N° 0015</Typography>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 700, fontSize: '0.65rem', letterSpacing: '1px', color: '#666' }}>SERIE: ANY-2026-XV</Typography>
              </Box>
              <BarcodeSvg />
            </Box>

            <Box sx={{ p: { xs: 3.5, sm: 4.5 }, textAlign: 'center', position: 'relative' }}>
              <Box sx={{ position: 'absolute', top: '5%', right: '2%', pointerEvents: 'none', zIndex: 15, animation: 'stampSlam 0.5s cubic-bezier(0.2, 1.4, 0.4, 1) 0.35s forwards', opacity: 0 }}>
                <OfficialStampSvg size={85} />
              </Box>

              <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: { xs: '2.4rem', sm: '3rem' }, color: markerBlack, lineHeight: 0.95, textTransform: 'uppercase', letterSpacing: '-1px', position: 'relative', zIndex: 5 }}>
                EL MEJOR REGALO
              </Typography>
              <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: { xs: '2.4rem', sm: '3rem' }, color: pink15, lineHeight: 0.95, textTransform: 'uppercase', letterSpacing: '-1px', mb: 2.5, position: 'relative', zIndex: 5 }}>
                ES TU PRESENCIA
              </Typography>

              <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: '0.9rem', color: '#333', lineHeight: 1.5, mb: 4, px: { xs: 1, sm: 2 }, position: 'relative', zIndex: 5 }}>
                Tu asistencia es lo más importante para mí. Pero si nace de ti tener un detalle, aquí te dejo dos opciones geniales:
              </Typography>

              {/* OPCIÓN 1: DATOS BANCARIOS */}
              <Box sx={{ ...sketchyBox, backgroundColor: '#FFF', p: 2.5, mb: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, transform: 'rotate(1.5deg)' }}>
                <Box sx={{ width: '48px', height: '4px', backgroundColor: markerBlack, borderRadius: '2px', mb: 0.5, filter: 'url(#roughMarker)' }} />
                <EnvelopeGiftSvg size={35} stroke={markerBlack} />
                <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: '1.8rem', letterSpacing: '2px', color: markerBlack, textTransform: 'uppercase', lineHeight: 1, mt: 0.5 }}>
                  LLUVIA DE SOBRES
                </Typography>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.5px', textTransform: 'uppercase', color: pink15, mb: 1 }}>
                  O TRansferencia Directa
                </Typography>
                
                <Box sx={{ backgroundColor: 'rgba(26,26,26,0.05)', p: 1.5, width: '100%', borderRadius: '5px', textAlign: 'left', border: `1px dashed ${markerBlack}` }}>
                  <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 800, fontSize: '0.75rem', color: markerBlack }}>Banco Pichincha</Typography>
                  <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: '0.75rem', color: '#444' }}>Cuenta de ahorro</Typography>
                  <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 800, fontSize: '0.75rem', color: markerBlack }}>A nombre de</Typography>
                  <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: '0.75rem', color: '#444' }}>Saibeth Anahy Armas Landeta</Typography>
                  <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 800, fontSize: '0.75rem', color: markerBlack, mt: 1 }}>Número: <span style={{ color: pink15 }}>2216394111</span></Typography>
                  <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 800, fontSize: '0.75rem', color: markerBlack }}>CI: <span style={{ color: pink15 }}>1752278570</span></Typography>
                </Box>
                
                <Button 
                  onClick={handleCopy}
                  sx={{ mt: 1, backgroundColor: copied ? pink15 : markerBlack, color: paperCream, fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.7rem', letterSpacing: '1px', borderRadius: 0, py: 1, px: 2, border: `2px solid ${markerBlack}`, transition: 'all 0.2s', '&:hover': { backgroundColor: pink15, transform: 'scale(1.05)' } }}
                >
                  {copied ? '¡NÚMERO COPIADO!' : 'COPIAR NÚMERO DE CUENTA'}
                </Button>
              </Box>

              {/* OPCIÓN 2: PINTEREST */}
              <Box sx={{ ...sketchyBox, backgroundColor: pink15, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'rotate(-1deg)' }}>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.8rem', color: paperCream, textTransform: 'uppercase', mb: 1.5, letterSpacing: '1px' }}>
                  ¿Prefieres un regalo físico?
                </Typography>
                <Button 
                  variant="contained" 
                  href="https://pin.it/4cftM8aeb" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  fullWidth 
                  sx={{ backgroundColor: paperCream, color: markerBlack, fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '1px', borderRadius: 0, py: 1.5, border: `2px solid ${markerBlack}`, boxShadow: `3px 3px 0px ${markerBlack}`, display: 'flex', alignItems: 'center', gap: 1, transition: 'all 0.15s ease-out', '&:hover': { backgroundColor: markerBlack, color: paperCream, transform: 'translate(-2px, -2px)', boxShadow: `5px 5px 0px ${markerBlack}` }, '&:active': { transform: 'translate(2px, 2px)', boxShadow: `0px 0px 0px ${markerBlack}` } }}
                >
                  <PinterestLogoSvg size={20} /> VER IDEAS EN PINTEREST
                </Button>
              </Box>

            </Box>

            <Box sx={{ borderTop: `2px dashed ${markerBlack}`, p: 1.8, px: 3, backgroundColor: 'rgba(255,255,255,0.4)', borderRadius: '0 0 15px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.7rem', color: markerBlack, letterSpacing: '1px', textTransform: 'uppercase' }}>
                ADMITE: 1 INVITADO VIP
              </Typography>
              <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: '1.1rem', color: pink15 }}>
                ★ XV ★
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Details;