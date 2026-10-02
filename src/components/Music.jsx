import { useState } from 'react';
import { Box, Typography, TextField, Button, GlobalStyles } from '@mui/material';

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

const HeadphonesSvg = ({ size = 20, stroke = markerBlack }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#roughMarker)">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    <path d="M 8.5 20 Q 12 18, 15.5 20" strokeWidth="1.5" strokeDasharray="2 2"/>
    <path d="M 19 6 Q 20 5, 21 6 L 20 7 Z" fill={pink15} stroke="none"/>
  </svg>
);

const SketchySoccerBallSvg = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke={markerBlack} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" filter="url(#roughMarker)">
    <circle cx="50" cy="50" r="46" fill={paperCream}/>
    <polygon points="50,28 69,42 62,65 38,65 31,42" fill={markerBlack} />
    <line x1="50" y1="28" x2="50" y2="4" />
    <line x1="69" y1="42" x2="93" y2="34" />
    <line x1="62" y1="65" x2="78" y2="88" />
    <line x1="38" y1="65" x2="22" y2="88" />
    <line x1="31" y1="42" x2="7" y2="34" />
    <path d="M 50 15 Q 52 13, 54 15 L 52 17 Z" fill={pink15} stroke="none"/>
  </svg>
);

const SketchyVinylSvg = ({ size = 110 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="spinning-vinyl" filter="url(#roughMarker)">
    <circle cx="50" cy="50" r="48" fill={markerBlack} stroke={pink15} strokeWidth="2" />
    <circle cx="50" cy="50" r="40" stroke="rgba(243,241,236,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <circle cx="50" cy="50" r="32" stroke="rgba(243,241,236,0.15)" strokeWidth="1" strokeDasharray="6 2" />
    <circle cx="50" cy="50" r="24" stroke="rgba(243,241,236,0.15)" strokeWidth="1" strokeDasharray="3 5"/>
    <circle cx="50" cy="50" r="16" fill={pink15} stroke={paperCream} strokeWidth="1.5" />
    <path d="M 50 47 Q 52 45, 54 47 L 52 49 Z" fill={paperCream} stroke="none"/>
    <text x="50" y="58" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="14" fill={paperCream}>15</text>
    <circle cx="50" cy="50" r="3.5" fill={paperCream} />
  </svg>
);

const AnimatedEqualizerSvg = () => (
  <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '32px' }}>
    {[ { anim: 'eqWave1', dur: '0.8s' }, { anim: 'eqWave2', dur: '1.1s' }, { anim: 'eqWave3', dur: '0.7s' }, { anim: 'eqWave4', dur: '0.9s' }, { anim: 'eqWave2', dur: '1.2s' }, { anim: 'eqWave1', dur: '0.75s' }, { anim: 'eqWave3', dur: '1.0s' } ].map((bar, i) => (
      <Box key={i} sx={{ width: '4px', backgroundColor: pink15, animation: `${bar.anim} ${bar.dur} ease-in-out infinite alternate` }} />
    ))}
  </Box>
);

const sketchyBox = {
  border: `3px solid ${markerBlack}`,
  borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
  boxShadow: `4px 4px 0px ${markerBlack}`,
  position: 'relative',
};

const tacticalBox = {
  border: `2px solid ${markerBlack}`,
  backgroundColor: '#FFF',
  boxShadow: `4px 4px 0px ${markerBlack}`,
  p: 1.5,
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.15s ease-out, box-shadow 0.15s ease-out',
  transform: 'rotate(1deg)',
  '&:hover': {
    transform: 'translate(-2px, -3px) rotate(-1deg)',
    boxShadow: `6px 6px 0px ${markerBlack}`,
  }
};

const Music = () => {
  const [song, setSong] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!song.trim() || loading) return;
    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/canciones/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo_o_enlace: song }),
      });
      if (response.ok) setSubmitted(true);
      else setError('No se pudo guardar la canción. Intenta de nuevo.');
    } catch (err) {
      console.error("Error al enviar canción: ", err);
      setError('Error de conexión con el servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SvgFilters />
      <GlobalStyles styles={{ '@keyframes spinVinyl': { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } }, '@keyframes eqWave1': { '0%': { height: '6px' }, '100%': { height: '28px' } }, '@keyframes eqWave2': { '0%': { height: '22px' }, '100%': { height: '8px' } }, '@keyframes eqWave3': { '0%': { height: '12px' }, '100%': { height: '30px' } }, '@keyframes eqWave4': { '0%': { height: '26px' }, '100%': { height: '14px' } } }} />
      <Box sx={{ width: '100%', backgroundColor: bgPurple, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', py: { xs: 6, sm: 8 } }}>
        
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 1 }}><StripesBackgroundSvg /></Box>
        <Box sx={{ position: 'absolute', inset: 0, opacity: 0.15, mixBlendMode: 'overlay', pointerEvents: 'none', zIndex: 2, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        <Box sx={{ position: 'absolute', top: '10%', left: '10%', zIndex: 3, animation: 'eqWave4 4s ease-in-out infinite alternate' }}><StarSolidSvg size={24} fill={pink15} /></Box>
        <Box sx={{ position: 'absolute', bottom: '15%', right: '8%', zIndex: 3 }}><StarSolidSvg size={18} fill={starGold} /></Box>

        <Box sx={{ zIndex: 10, px: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          
          <Box sx={{ ...sketchyBox, width: '100%', maxWidth: '440px', display: 'flex', p: 0, overflow: 'hidden', backgroundColor: paperCream, transform: 'rotate(-1deg)' }}>
            <Box sx={{ flex: 1, py: 1.5, px: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <HeadphonesSvg size={22} stroke={markerBlack} />
              <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.8rem', color: markerBlack, textTransform: 'uppercase', letterSpacing: '2px' }}>
                Playlist DJ • Soundtrack
              </Typography>
            </Box>
            <Box sx={{ width: '60px', borderLeft: `3px solid ${markerBlack}`, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: pink15 }}>
              <StarSolidSvg size={18} fill={paperCream} />
            </Box>
          </Box>

          <Box sx={{ width: '100%', maxWidth: '440px', position: 'relative' }}>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2, position: 'relative', zIndex: 2 }}>
              <Box>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: { xs: '3.8rem', sm: '5.2rem' }, color: paperCream, lineHeight: 0.85, textTransform: 'uppercase', textShadow: `2px 2px 0px ${markerBlack}` }}>PLAYLIST</Typography>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: { xs: '3.8rem', sm: '5.2rem' }, color: pink15, lineHeight: 0.85, textTransform: 'uppercase', textShadow: `2px 2px 0px ${markerBlack}` }}>OFICIAL</Typography>
              </Box>
              <Box sx={{ display: { xs: 'none', sm: 'block' }, position: 'relative', zIndex: 3, '& .spinning-vinyl': { animation: 'spinVinyl 8s linear infinite' }, transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.1) rotate(5deg)' } }}>
                <SketchyVinylSvg size={105} />
              </Box>
            </Box>

            <Box sx={{ ...sketchyBox, display: 'inline-flex', alignItems: 'center', gap: 2, backgroundColor: '#FFF', px: 2, py: 1.5, mb: 5, transform: 'rotate(1.5deg)' }}>
              <AnimatedEqualizerSvg />
              <Box>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase', color: markerBlack, lineHeight: 1.1 }}>Sistema de Audio Mis 15</Typography>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.5px', color: pink15 }}>¿Qué tema debe sonar sí o sí en la fiesta?</Typography>
              </Box>
            </Box>

            {!submitted ? (
              <Box component="form" onSubmit={handleSubmit} sx={{ ...sketchyBox, display: 'flex', flexDirection: 'column', gap: 2.5, backgroundColor: paperCream, p: { xs: 3, sm: 4 }, transform: 'rotate(-0.5deg)', '& fieldset': { transition: 'border-color 0.1s ease', } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `2px dashed ${markerBlack}`, pb: 1.5 }}>
                  <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.7rem', color: markerBlack, letterSpacing: '1.5px', textTransform: 'uppercase' }}>PETICIÓN DE TEMA</Typography>
                  <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 800, fontSize: '0.7rem', color: pink15 }}>CABINA DEL DJ</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.8rem', mb: 1, textTransform: 'uppercase', letterSpacing: '0.5px', color: markerBlack }}>Título de Canción / Artista *</Typography>
                  <TextField required fullWidth value={song} onChange={(e) => setSong(e.target.value)} placeholder="EJ. KAROL G, BAD BUNNY..." variant="outlined" sx={{ backgroundColor: '#FFF', '& .MuiOutlinedInput-root': { borderRadius: '5px', fontFamily: '"Inter", sans-serif', fontWeight: 700, fontSize: '0.95rem', color: markerBlack, '& fieldset': { border: `2px solid ${markerBlack}`, filter: 'url(#roughMarker)' }, '&:hover fieldset': { border: `2px solid ${markerBlack}` }, '&.Mui-focused fieldset': { border: `2.5px solid ${pink15}` } } }} />
                </Box>
                {error && <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 800, color: pink15, fontSize: '0.8rem' }}>{error}</Typography>}
                
                <Box sx={{ p: '2px', backgroundColor: markerBlack, display: 'inline-flex', alignSelf: 'center', border: `3px solid ${markerBlack}`, transform: 'rotate(2deg)', mt: 1 }}>
                  <Button type="submit" disabled={loading} sx={{ backgroundColor: pink15, color: paperCream, fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '1rem', letterSpacing: '2px', borderRadius: 0, py: 1.5, px: 3, border: `2px dashed ${paperCream}`, transition: 'all 0.15s ease-out', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, '&:hover': { backgroundColor: markerBlack, color: paperCream, border: `2px dashed ${markerBlack}`, transform: 'translate(2px, 2px)' } }}>
                    <SketchySoccerBallSvg size={18} /> {loading ? 'ENVIANDO...' : 'ENVIAR A LA PLAYLIST'}
                  </Button>
                </Box>
              </Box>
            ) : (
              <Box sx={{ ...sketchyBox, backgroundColor: paperCream, p: { xs: 4, sm: 5 }, textAlign: 'center', transform: 'rotate(1deg)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <Box sx={{ width: '48px', height: '48px', border: `2px solid ${markerBlack}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF' }}><StarSolidSvg size={24} fill={pink15} /></Box>
                <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: '2.4rem', lineHeight: 1, textTransform: 'uppercase', color: markerBlack }}>¡TEMA CONFIRMADO!</Typography>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: '0.95rem', color: '#444', lineHeight: 1.5, borderTop: `1px Dashed ${markerBlack}`, pt: 2 }}>Tu propuesta ya ingresó a la lista del DJ para prender la noche de Anahy.</Typography>
                
                <Box sx={{ ...tacticalBox, alignSelf: 'center', mt: 3, transform: 'rotate(-2deg)' }}>
                  <Button onClick={() => { setSubmitted(false); setSong(''); }} sx={{ color: markerBlack, fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase', p: 0, '&:hover': { color: pink15 } }}>
                    SUGERIR OTRO TEMA
                  </Button>
                </Box>
              </Box>
            )}

          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Music;