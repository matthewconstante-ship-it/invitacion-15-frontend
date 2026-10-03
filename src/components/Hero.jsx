import { useMemo } from 'react';
import { Box, Typography, GlobalStyles } from '@mui/material';

// --- PALETA DE COLORES ---
const bgPurple = '#381460';
const stripeLight = '#825CA6';
const stripeMed = '#5C348B';
const paperCream = '#FDF6E9';
const markerBlack = '#1A1A1A';
const pink15 = '#E46B9C';
const starGold = '#D4A346';
const cakeBase = '#F4B0C1';
const cakeFrosting = '#FFF2E8';

// --- FILTROS SVG ---
const SvgFilters = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
    <defs>
      <filter id="roughMarker" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.15" numOctaves="2" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <filter id="stickerEdge" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
  </svg>
);

const StripesBackgroundSvg = () => (
  <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" style={{ opacity: 0.8 }}>
    <rect x="4" y="-10" width="3" height="120" fill={stripeLight} filter="url(#roughMarker)" />
    <rect x="9" y="-10" width="8" height="120" fill={stripeMed} filter="url(#roughMarker)" />
    <rect x="19" y="-10" width="1.5" height="120" fill={stripeLight} filter="url(#roughMarker)" />
    <rect x="78" y="-10" width="9" height="120" fill={stripeMed} filter="url(#roughMarker)" />
    <rect x="90" y="-10" width="2" height="120" fill={stripeLight} filter="url(#roughMarker)" />
    <rect x="94" y="-10" width="4" height="120" fill={stripeLight} filter="url(#roughMarker)" />
  </svg>
);

const SpecklesOverlay = () => {
  // Corrección del error usando useMemo para calcular los puntos una sola vez
  const dots = useMemo(() => {
    return Array.from({ length: 60 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      r: Math.random() * 0.3 + 0.1,
      color: Math.random() > 0.6 ? '#FFF' : '#000',
      opacity: Math.random() * 0.4 + 0.1
    }));
  }, []);

  return (
    <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
      {dots.map((d, i) => (
        <circle key={i} cx={`${d.x}%`} cy={`${d.y}%`} r={`${d.r}%`} fill={d.color} opacity={d.opacity} />
      ))}
    </svg>
  );
};

const WavyPaperBg = () => (
  <svg preserveAspectRatio="none" viewBox="0 0 400 580" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: -1, filter: 'drop-shadow(8px 15px 20px rgba(0,0,0,0.5))' }}>
    <path d="M 40,40
             C 100,0 200,10 300,30
             C 380,50 390,150 370,250
             C 350,350 400,450 360,530
             C 320,580 220,590 150,570
             C 50,550 10,480 30,380
             C 50,300 0,180 40,40 Z" 
          fill={paperCream} />
  </svg>
);

const Pink15Svg = () => (
  <svg viewBox="0 0 160 120" width="100%" height="100%" filter="url(#roughMarker)">
    <path d="M 35 35 L 55 25 L 65 25 L 65 95 L 45 95 L 45 45 L 35 55 Z" fill={pink15} />
    <path d="M 85 25 L 125 20 L 125 40 L 100 42 L 100 55 C 115 52, 135 60, 135 75 C 135 95, 115 102, 95 100 C 80 98, 75 88, 75 80 L 95 78 C 95 85, 105 85, 115 82 C 120 78, 115 68, 105 68 C 95 68, 80 72, 80 60 Z" fill={pink15} />
  </svg>
);

const HandDrawnAnySvg = () => (
  <svg viewBox="0 0 180 50" width="100%" height="100%" stroke={markerBlack} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#roughMarker)">
    <path d="M 15 45 L 35 10 L 55 45 M 22 32 L 48 32" />
    <path d="M 75 45 L 75 10 L 105 45 L 105 10" />
    <path d="M 125 10 L 145 28 L 165 10 M 145 28 L 145 45" />
  </svg>
);

const ColorfulCakeSvg = () => (
  <svg viewBox="0 0 120 120" width="100%" height="100%" filter="url(#roughMarker)">
    <path d="M 20 70 C 20 58, 100 58, 100 70 L 100 95 C 100 108, 20 108, 20 95 Z" fill={cakeBase} stroke={markerBlack} strokeWidth="2.5" />
    <path d="M 20 78 C 20 90, 100 90, 100 78" fill="none" stroke={markerBlack} strokeWidth="2.5" />
    <path d="M 20 86 C 20 98, 100 98, 100 86" fill="none" stroke={markerBlack} strokeWidth="2.5" />
    <path d="M 18 65 C 30 60, 38 75, 48 65 C 58 75, 66 60, 76 70 C 86 60, 96 75, 102 65 L 102 72 C 96 82, 86 68, 76 78 C 66 68, 58 82, 48 72 C 38 82, 30 68, 18 72 Z" fill={cakeFrosting} stroke={markerBlack} strokeWidth="2.5" strokeLinejoin="round"/>
    <ellipse cx="60" cy="63" rx="40" ry="12" fill={cakeFrosting} stroke={markerBlack} strokeWidth="2.5" />
    {[35, 47, 60, 73, 85].map((x, i) => (
      <g key={i}>
        <rect x={x - 2} y="38" width="4" height="20" fill="#FFF" stroke={markerBlack} strokeWidth="1.5"/>
        <path d="M 33 42 L 37 45" stroke={markerBlack} strokeWidth="1" />
        <path d={`M ${x} 28 Q ${x - 4} 34, ${x} 36 Q ${x + 4} 34, ${x} 28 Z`} fill={starGold} stroke={markerBlack} strokeWidth="1.5"/>
      </g>
    ))}
  </svg>
);

const HandDrawnCrownSvg = () => (
  <svg viewBox="0 0 100 60" width="100%" height="100%" filter="url(#roughMarker)">
    <path d="M 10 45 L 18 10 L 35 28 L 50 5 L 65 28 L 82 10 L 90 45 Z" stroke={markerBlack} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <ellipse cx="50" cy="45" rx="40" ry="5" stroke={markerBlack} strokeWidth="4" fill="none" />
  </svg>
);

const StarOutlineSvg = ({ size = 60 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" stroke={markerBlack} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#roughMarker)">
    <path d="M 50 10 L 62 38 L 92 38 L 68 58 L 78 88 L 50 70 L 22 88 L 32 58 L 8 38 L 38 38 Z" />
  </svg>
);

const StarSolidSvg = ({ size = 50 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill={markerBlack} stroke={markerBlack} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" filter="url(#roughMarker)">
    <path d="M 50 10 L 62 38 L 92 35 L 65 55 L 78 88 L 50 68 L 22 88 L 32 55 L 8 38 L 38 35 Z" />
  </svg>
);

const GoldStarSvg = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={starGold}>
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5Z" />
  </svg>
);

const sketchyBox = {
  border: `3px solid ${markerBlack}`,
  borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
  boxShadow: `4px 4px 0px ${markerBlack}`,
  position: 'relative',
};

const goldStars = [
  { top: '6%', left: '12%', size: 32, dur: '4s' },
  { top: '10%', left: '22%', size: 18, dur: '3s' },
  { top: '15%', left: '8%', size: 14, dur: '5s' },
  { top: '4%', right: '15%', size: 24, dur: '3.5s' },
  { top: '18%', right: '8%', size: 16, dur: '4.5s' },
  { bottom: '10%', right: '10%', size: 35, dur: '4s' },
  { bottom: '5%', right: '25%', size: 18, dur: '5s' },
  { bottom: '18%', right: '5%', size: 14, dur: '3.5s' },
  { bottom: '8%', left: '15%', size: 20, dur: '4.2s' },
  { bottom: '25%', left: '6%', size: 12, dur: '3s' },
];

const Hero = () => {
  return (
    <>
      {/* ANIMACIONES GLOBALES */}
      <GlobalStyles styles={{ 
        '@keyframes floatGentle': { '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' }, '50%': { transform: 'translateY(-10px) rotate(5deg)' } },
        '@keyframes floatCrown': { '0%, 100%': { transform: 'translateX(-50%) translateY(0px) rotate(2deg)' }, '50%': { transform: 'translateX(-50%) translateY(-6px) rotate(-3deg)' } },
        '@keyframes spinSlow': { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } }
      }} />

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
          backgroundColor: bgPurple,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          py: { xs: 4, sm: 6 },
        }}
      >
        <SvgFilters />

        {/* Texturas de fondo */}
        <Box sx={{ position: 'absolute', inset: 0, opacity: 0.15, mixBlendMode: 'overlay', pointerEvents: 'none', zIndex: 5, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 1 }}><StripesBackgroundSvg /></Box>
        <SpecklesOverlay />

        {/* Estrellas doradas animadas */}
        {goldStars.map((s, i) => (
          <Box key={i} sx={{ position: 'absolute', zIndex: 2, animation: `floatGentle ${s.dur} ease-in-out infinite`, ...(s.top ? { top: s.top } : {}), ...(s.bottom ? { bottom: s.bottom } : {}), ...(s.left ? { left: s.left } : {}), ...(s.right ? { right: s.right } : {}) }}>
            <Box sx={{ animation: 'spinSlow 15s linear infinite' }}>
              <GoldStarSvg size={s.size} />
            </Box>
          </Box>
        ))}

        {/* ========================================== */}
        {/* CONTENEDOR CENTRAL DEL PAPEL                 */}
        {/* ========================================== */}
        <Box
          sx={{
            position: 'relative',
            width: '90%',
            maxWidth: '400px',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            pt: 7,
            pb: 8,
            px: 3,
            animation: 'floatGentle 8s ease-in-out infinite', // Movimiento sutil de todo el papel
          }}
        >
          <WavyPaperBg />

          {/* ---------------- 15 Y ESTRELLAS SUPERIORES ---------------- */}
          <Box sx={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', mb: -3, zIndex: 5 }}>
            <Box sx={{ width: '270px', height: '190px', zIndex: 5 }}>
              <Pink15Svg />
            </Box>
            
            <Box sx={{ position: 'absolute', top: '25px', left: '-15px', transform: 'rotate(-15deg)', animation: 'floatGentle 4s infinite reverse' }}>
              <StarOutlineSvg size={120} />
            </Box>
            <Box sx={{ position: 'absolute', top: '-15px', left: '20px' }}>
              <StarSolidSvg size={20} />
            </Box>
            <Box sx={{ position: 'absolute', top: '-10px', right: '40px' }}>
              <StarOutlineSvg size={30} />
            </Box>

            {/* Pegatina estrella negra derecha */}
            <Box sx={{ position: 'absolute', top: '70px', right: '-10px', transform: 'rotate(10deg)', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1) rotate(15deg)' } }}>
              <svg style={{ position: 'absolute', inset: -15, width: '120px', height: '120px', zIndex: -1 }}>
                <path d="M 20 20 L 80 15 L 95 80 L 15 90 Z" fill={paperCream} filter="url(#stickerEdge)" />
              </svg>
              <StarSolidSvg size={95} />
            </Box>
          </Box>

          {/* ---------------- FOTO DE LA NIÑA & CORONA ---------------- */}
          <Box sx={{ position: 'relative', zIndex: 10, mt: -4 }}>
            {/* Corona Animada */}
            <Box sx={{ position: 'absolute', top: '-35px', left: '50%', width: '85px', height: '55px', zIndex: 15, animation: 'floatCrown 3s ease-in-out infinite' }}>
              <HandDrawnCrownSvg />
            </Box>
            <Box
              component="img"
              src="/any.png"
              alt="Cumpleañera"
              sx={{
                width: '100%',
                maxWidth: '180px',
                height: 'auto',
                display: 'block',
                margin: '0 auto',
                filter: 'drop-shadow(4px 6px 8px rgba(0,0,0,0.35))',
                zIndex: 10,
              }}
            />
          </Box>

          {/* ---------------- PASTEL MÁS GRANDE ---------------- */}
          <Box sx={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', mt: -13, zIndex: 12 }}>
            <Box sx={{ width: '210px', height: '210px' }}>
              <ColorfulCakeSvg />
            </Box>
            <Box sx={{ position: 'absolute', left: '0px', bottom: '40px', transform: 'rotate(-25deg)', animation: 'floatGentle 3.5s infinite' }}>
              <StarSolidSvg size={35} />
            </Box>
            <Box sx={{ position: 'absolute', right: '-5px', top: '90px', transform: 'rotate(15deg)' }}>
              <StarOutlineSvg size={45} />
            </Box>
          </Box>

          {/* ---------------- NOMBRE ANY ---------------- */}
          <Box sx={{ position: 'relative', width: '140px', height: '40px', mt: 3, mb: 4, zIndex: 10 }}>
            <HandDrawnAnySvg />
            <Box sx={{ position: 'absolute', bottom: '-25px', right: '-45px', transform: 'rotate(15deg)' }}><StarSolidSvg size={24} /></Box>
            <Box sx={{ position: 'absolute', bottom: '-40px', right: '-15px' }}><StarSolidSvg size={14} /></Box>
            <Box sx={{ position: 'absolute', top: '-10px', left: '-30px', transform: 'rotate(-10deg)' }}><StarSolidSvg size={16} /></Box>
          </Box>

          {/* ---------------- DATOS DEL EVENTO (Estilo Sketchy) ---------------- */}
          <Box sx={{ ...sketchyBox, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 4, zIndex: 10, backgroundColor: 'rgba(255,255,255,0.6)', p: 1.5, px: 3, transform: 'rotate(-1deg)' }}>
            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '1.1rem', color: markerBlack }}>
              DOM.
            </Typography>
            <Box sx={{ width: '3px', height: '32px', backgroundColor: pink15, filter: 'url(#roughMarker)' }} />
            
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: -0.5 }}>
              <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: '2.2rem', color: markerBlack, lineHeight: 1 }}>
                25
              </Typography>
              <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.7rem', color: pink15, letterSpacing: '2px' }}>
                OCT
              </Typography>
            </Box>
            
            <Box sx={{ width: '3px', height: '32px', backgroundColor: pink15, filter: 'url(#roughMarker)' }} />
            
            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '1.1rem', color: markerBlack }}>
              14:00 HS
            </Typography>
          </Box>

          {/* ---------------- FOOTER (Estilo Sketchy) ---------------- */}
          <Box sx={{ ...sketchyBox, textAlign: 'center', zIndex: 10, backgroundColor: pink15, p: 1.5, px: 3, transform: 'rotate(1.5deg)' }}>
            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.75rem', color: paperCream, letterSpacing: '1px' }}>
              TE ESPERAMOS
            </Typography>
            
            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontStyle: 'italic', fontWeight: 700, fontSize: '0.65rem', color: markerBlack, mt: 0.5 }}>
              Por favor, confirma tu asistencia
            </Typography>
          </Box>

        </Box>
      </Box>
    </>
  );
};

export default Hero;