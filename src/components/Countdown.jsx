import { useState, useEffect, useRef } from 'react';
import { Box, Typography, GlobalStyles } from '@mui/material';

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
    <rect x="15" y="-10" width="4" height="120" fill={stripeLight} filter="url(#roughMarker)" />
    <rect x="25" y="-10" width="8" height="120" fill={stripeMed} filter="url(#roughMarker)" />
    <rect x="75" y="-10" width="6" height="120" fill={stripeMed} filter="url(#roughMarker)" />
    <rect x="85" y="-10" width="3" height="120" fill={stripeLight} filter="url(#roughMarker)" />
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

const SketchyCircle = () => (
  <svg viewBox="0 0 140 140" fill="none" style={{ width: '100%', height: '100%' }}>
    <path d="M70 12 C105 10, 132 35, 128 72 C124 110, 95 132, 60 128 C25 124, 8 95, 12 58 C16 22, 45 10, 78 14" stroke={pink15} strokeWidth="5" strokeLinecap="round" strokeDasharray="400" strokeDashoffset="400" className="circle-draw-path" filter="url(#roughMarker)" />
    <path d="M65 18 C95 14, 120 38, 118 68 C115 98, 88 120, 58 118" stroke={markerBlack} strokeWidth="2" strokeLinecap="round" strokeDasharray="300" strokeDashoffset="300" opacity="0.4" className="circle-draw-path-sub" filter="url(#roughMarker)" />
  </svg>
);

const targetDate = new Date('2026-10-25T20:00:00');

const calculateTimeLeft = () => {
  const difference = +targetDate - +new Date();
  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const sketchyBox = {
  border: `3px solid ${markerBlack}`,
  borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
  boxShadow: `4px 4px 0px ${markerBlack}`,
  backgroundColor: paperCream,
  position: 'relative',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
};

export default function Countdown() {
  const dateRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const [animTrigger, setAnimTrigger] = useState(0);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsAnimated(true);
        setAnimTrigger((prev) => prev + 1);
      } else setIsAnimated(false);
    }, { threshold: 0.35 });

    if (dateRef.current) observer.observe(dateRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <SvgFilters />
      <GlobalStyles styles={{ 
        '@keyframes drawCircle': { to: { strokeDashoffset: 0 } }, 
        '@keyframes pulseGlow': { '0%, 100%': { transform: 'scale(1) rotate(0deg)' }, '50%': { transform: 'scale(1.15) rotate(-8deg)' } }, 
        '@keyframes blinkColon': { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0.2 } },
        '@keyframes float': { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-5px)' } }
      }} />
      
      <Box ref={dateRef} sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: bgPurple, position: 'relative', overflow: 'hidden', py: { xs: 6, sm: 8 }, px: 2 }}>
        
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 1 }}><StripesBackgroundSvg /></Box>
        <Box sx={{ position: 'absolute', inset: 0, opacity: 0.15, mixBlendMode: 'overlay', pointerEvents: 'none', zIndex: 2, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        <Box sx={{ position: 'absolute', top: '10%', left: '10%', zIndex: 3, animation: 'float 3s ease-in-out infinite' }}><GoldStarSvg size={30} /></Box>
        <Box sx={{ position: 'absolute', bottom: '15%', right: '8%', zIndex: 3, animation: 'float 4s ease-in-out infinite reverse' }}><StarSolidSvg size={24} fill={starGold} /></Box>
        <Box sx={{ position: 'absolute', top: '25%', right: '15%', zIndex: 3, transform: 'rotate(15deg)' }}><StarSolidSvg size={15} fill={pink15} /></Box>

        <Box sx={{ width: '100%', maxWidth: '600px', zIndex: 10, display: 'flex', flexDirection: 'column', gap: 4 }}>
          
          <Box sx={{ ...sketchyBox, display: 'flex', p: 0, overflow: 'hidden', transform: 'rotate(-1deg)' }}>
            <Box sx={{ flex: 1, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <StarSolidSvg size={20} fill={starGold} />
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: markerBlack }}>
                  Faltan pocos días
                </Typography>
              </Box>
            </Box>
            <Box sx={{ width: '120px', backgroundColor: pink15, borderLeft: `3px solid ${markerBlack}`, color: paperCream, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>MIS 15</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', width: '100%', gap: { xs: 1.5, sm: 2 } }}>
            <Box sx={{ ...sketchyBox, flex: 1, p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', opacity: 0.6, transform: 'rotate(-2deg)' }}>
              <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.75rem', color: markerBlack }}>SÁB</Typography>
              <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: { xs: '2.5rem', sm: '3rem' }, color: markerBlack, lineHeight: 1 }}>24</Typography>
              <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 800, fontSize: '0.65rem', textTransform: 'uppercase', color: markerBlack }}>Previo</Typography>
            </Box>

            <Box key={animTrigger} className={isAnimated ? 'active-view' : ''} sx={{ ...sketchyBox, flex: 2.2, p: 2, minHeight: '190px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', transform: 'scale(1.05) rotate(1deg)', '&:hover': { transform: 'scale(1.08) rotate(1deg)', boxShadow: `6px 6px 0px ${markerBlack}` }, '&:hover .circle-draw-path, &.active-view .circle-draw-path': { animation: 'drawCircle 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards' }, '&:hover .star-burst, &.active-view .star-burst': { animation: 'pulseGlow 1.5s ease-in-out infinite' } }}>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 3 }}>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.85rem', color: markerBlack, letterSpacing: '1px' }}>DOM • EL GRAN DÍA</Typography>
                <Box className="star-burst"><StarSolidSvg size={18} fill={pink15} /></Box>
              </Box>
              
              <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', my: 'auto' }}>
                <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: { xs: '6rem', sm: '7rem' }, lineHeight: 0.85, color: markerBlack, zIndex: 2 }}>25</Typography>
                <Box sx={{ position: 'absolute', width: { xs: '120px', sm: '140px' }, height: { xs: '120px', sm: '140px' }, top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-5deg)', pointerEvents: 'none', zIndex: 1, '& .circle-draw-path': { animation: isAnimated ? 'drawCircle 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards' : 'none' } }}>
                  <SketchyCircle />
                </Box>
              </Box>
              
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 3, borderTop: `2px dashed ${markerBlack}`, pt: 1 }}>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontStyle: 'italic', fontWeight: 900, fontSize: '0.85rem', color: markerBlack, textTransform: 'uppercase', letterSpacing: '1px' }}>¡Empieza la fiesta!</Typography>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.85rem', color: markerBlack }}>14:00 HS</Typography>
              </Box>
            </Box>

            <Box sx={{ ...sketchyBox, flex: 1, p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', opacity: 0.6, transform: 'rotate(2deg)' }}>
              <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.75rem', color: markerBlack }}>LUN</Typography>
              <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: { xs: '2.5rem', sm: '3rem' }, color: markerBlack, lineHeight: 1 }}>26</Typography>
              <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 800, fontSize: '0.65rem', textTransform: 'uppercase', color: markerBlack }}>Post</Typography>
            </Box>
          </Box>

          <Box sx={{ ...sketchyBox, backgroundColor: pink15, p: { xs: 2, sm: 3 }, display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'rotate(-0.5deg)' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3, zIndex: 2 }}>
              <StarSolidSvg size={14} fill={paperCream} />
              <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', color: paperCream }}>
                Tiempo Restante
              </Typography>
              <StarSolidSvg size={14} fill={paperCream} />
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: { xs: 1, sm: 2 }, width: '100%' }}>
              {[
                { val: timeLeft.days, label: 'DÍAS' },
                { val: String(timeLeft.hours).padStart(2, '0'), label: 'HORAS' },
                { val: String(timeLeft.minutes).padStart(2, '0'), label: 'MIN' },
                { val: String(timeLeft.seconds).padStart(2, '0'), label: 'SEG' },
              ].map((item, index) => (
                <Box key={item.label} sx={{ ...sketchyBox, borderRadius: '8px', p: { xs: 1.5, sm: 2 }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', '&:hover': { transform: 'translate(-2px, -3px)', boxShadow: `5px 5px 0px ${markerBlack}` } }}>
                  <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: { xs: '2rem', sm: '3rem' }, lineHeight: 0.9, color: index === 3 ? pink15 : markerBlack }}>{item.val || '00'}</Typography>
                  <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.65rem', letterSpacing: '1px', color: index === 3 ? pink15 : markerBlack, mt: 1 }}>{item.label}</Typography>
                </Box>
              ))}
            </Box>
            
            <Box sx={{ mt: 3, display: 'inline-flex', alignItems: 'center', gap: 1, border: `2px solid ${paperCream}`, borderRadius: '20px', px: 2, py: 0.5, borderStyle: 'dashed' }}>
              <Box sx={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: paperCream, animation: 'blinkColon 1.2s infinite' }} />
              <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 800, fontSize: '0.7rem', letterSpacing: '1.5px', textTransform: 'uppercase', color: paperCream }}>
                Estado: Preparando detalles
              </Typography>
            </Box>
          </Box>

        </Box>
      </Box>
    </>
  );
}