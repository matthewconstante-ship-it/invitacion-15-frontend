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

const GoldStarSvg = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={starGold}>
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5Z" />
  </svg>
);

const VipPassSvg = ({ size = 20, stroke = markerBlack }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#roughMarker)">
    <rect x="3" y="7" width="18" height="10" rx="1.5" />
    <path d="M7 12h.01M17 12h.01M12 7v10" />
  </svg>
);

const LockSvg = ({ size = 18, stroke = markerBlack }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#roughMarker)">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const JerseySvg = ({ size = 24, fill = 'none', stroke = markerBlack }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" filter="url(#roughMarker)">
    <path d="M15 3h-6l-4 5v1h3v12h8V9h3V8l-4-5z" />
    <path d="M9 3v2a3 3 0 0 0 6 0V3" />
  </svg>
);

const StampApprovedSvg = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" filter="url(#roughMarker)">
    <circle cx="50" cy="50" r="46" stroke={pink15} strokeWidth="3" strokeDasharray="8 6" />
    <circle cx="50" cy="50" r="38" stroke={pink15} strokeWidth="2" />
    <path d="M25 50 L40 65 L75 35" stroke={pink15} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const sketchyBox = {
  border: `3px solid ${markerBlack}`,
  borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
  boxShadow: `5px 5px 0px ${markerBlack}`,
  position: 'relative',
};

const Rsvp = () => {
  const [code, setCode] = useState('');
  const [groupData, setGroupData] = useState(null);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!code.trim() || loading) return;
    setError('');
    setLoading(true);
    const cleanCode = code.trim().toUpperCase();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/invitaciones/${cleanCode}/`);
      if (response.ok) {
        const data = await response.json();
        setTimeout(() => {
          setGroupData(data);
          setLoading(false);
        }, 600);
      } else {
        setError('Código VIP no encontrado. Verifica tu pase.');
        setLoading(false);
      }
    } catch (err) {
      console.error("Error al buscar la invitación:", err);
      setError('Error de conexión con la central.');
      setLoading(false);
    }
  };

  const handleCheckboxChange = (index) => {
    const updated = { ...groupData };
    updated.invitados[index].confirmado = !updated.invitados[index].confirmado;
    setGroupData(updated);
  };

  const handleConfirm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/invitaciones/${groupData.codigo}/`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ asistira: true, invitados: groupData.invitados })
      });
      if (response.ok) {
        setTimeout(() => { setSubmitted(true); setLoading(false); }, 500);
      } else {
        setLoading(false);
        alert('Error al procesar la confirmación.');
      }
    } catch (err) {
      console.error("Error:", err);
      setLoading(false);
      alert('Error de conexión con el servidor.');
    }
  };

  return (
    <>
      <SvgFilters />
      <GlobalStyles styles={{ 
        '@keyframes slideUpFade': { from: { opacity: 0, transform: 'translateY(20px) rotate(-1deg)' }, to: { opacity: 1, transform: 'translateY(0) rotate(-1deg)' } }, 
        '@keyframes stampHit': { '0%': { opacity: 0, transform: 'scale(2.5) rotate(15deg)' }, '60%': { opacity: 1, transform: 'scale(0.9) rotate(-5deg)' }, '100%': { opacity: 1, transform: 'scale(1) rotate(-3deg)' } },
        '@keyframes floatGentle': { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-4px)' } } 
      }} />
      
      <Box sx={{ width: '100%', backgroundColor: bgPurple, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
        
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 1 }}><StripesBackgroundSvg /></Box>
        <Box sx={{ position: 'absolute', inset: 0, opacity: 0.15, mixBlendMode: 'overlay', pointerEvents: 'none', zIndex: 2, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        <Box sx={{ position: 'absolute', top: '15%', left: '8%', zIndex: 3, animation: 'floatGentle 4s ease-in-out infinite' }}><GoldStarSvg size={30} /></Box>
        <Box sx={{ position: 'absolute', bottom: '25%', right: '5%', zIndex: 3, animation: 'floatGentle 3s ease-in-out infinite reverse' }}><StarSolidSvg size={18} fill={pink15} /></Box>

        <Box sx={{ zIndex: 10, px: 2, pt: 4, display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ ...sketchyBox, width: '100%', maxWidth: '480px', display: 'flex', p: 0, overflow: 'hidden', backgroundColor: paperCream, transform: 'rotate(0.5deg)' }}>
            <Box sx={{ flex: 1, py: 1.5, px: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <VipPassSvg size={22} stroke={markerBlack} />
              <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.8rem', color: markerBlack, textTransform: 'uppercase', letterSpacing: '2px' }}>
                Guest List • RSVP
              </Typography>
            </Box>
            <Box sx={{ width: '60px', borderLeft: `3px solid ${markerBlack}`, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: pink15 }}>
              <StarSolidSvg size={18} fill={paperCream} />
            </Box>
          </Box>
        </Box>

        <Box sx={{ position: 'relative', pt: { xs: 5, sm: 6 }, pb: 8, px: { xs: 2.5, sm: 5 }, overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <Box sx={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '480px' }}>
            <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: { xs: '3.6rem', sm: '5rem' }, color: paperCream, lineHeight: 0.85, textTransform: 'uppercase', textShadow: `2px 2px 0px ${markerBlack}` }}>
              CONVOCATORIA
            </Typography>
            <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: { xs: '3.6rem', sm: '5rem' }, color: pink15, lineHeight: 0.85, textTransform: 'uppercase', mb: 2, textShadow: `2px 2px 0px ${markerBlack}` }}>
              OFICIAL
            </Typography>
            
            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.85rem', color: markerBlack, backgroundColor: paperCream, border: `2px solid ${markerBlack}`, display: 'inline-block', px: 2, py: 0.8, textTransform: 'uppercase', letterSpacing: '1px', mb: 5, transform: 'rotate(-2deg)' }}>
              Cierre de lista VIP: 10 de Octubre
            </Typography>

            {!groupData && !submitted && (
              <Box component="form" onSubmit={handleLogin} sx={{ ...sketchyBox, display: 'flex', flexDirection: 'column', gap: 3, backgroundColor: paperCream, p: { xs: 3, sm: 4 }, transform: 'rotate(-1deg)', animation: 'slideUpFade 0.6s ease-out forwards' }}>
                <Box>
                  <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.8rem', mb: 1, textTransform: 'uppercase', letterSpacing: '1px', color: markerBlack }}>01. Ingresa tu código VIP *</Typography>
                  <TextField required fullWidth value={code} onChange={(e) => setCode(e.target.value)} placeholder="EJ. ANY-001" variant="outlined" disabled={loading} sx={{ backgroundColor: '#fff', '& .MuiOutlinedInput-root': { borderRadius: '5px', fontFamily: '"Inter", sans-serif', fontWeight: 800, fontSize: '1.1rem', textTransform: 'uppercase', '& fieldset': { border: `2px solid ${markerBlack}`, filter: 'url(#roughMarker)' }, '&:hover fieldset': { border: `2px solid ${markerBlack}` }, '&.Mui-focused fieldset': { border: `2.5px solid ${pink15}` } } }} />
                </Box>
                {error && <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 800, color: pink15, fontSize: '0.85rem' }}>{error}</Typography>}
                
                <Box sx={{ p: '2px', backgroundColor: markerBlack, display: 'inline-flex', alignSelf: 'flex-start', border: `3px solid ${markerBlack}`, transform: 'rotate(1.5deg)' }}>
                  <Button type="submit" disabled={loading} sx={{ backgroundColor: pink15, color: paperCream, fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '1rem', letterSpacing: '2px', borderRadius: 0, py: 1.5, px: 3, border: `2px dashed ${paperCream}`, transition: 'all 0.15s ease-out', display: 'flex', alignItems: 'center', gap: 1.5, '&:hover': { backgroundColor: markerBlack, color: paperCream, border: `2px dashed ${markerBlack}`, transform: 'translate(2px, 2px)' } }}>
                    <LockSvg size={20} stroke={paperCream} /> {loading ? 'VERIFICANDO...' : 'VALIDAR ACCESO'}
                  </Button>
                </Box>
              </Box>
            )}

            {groupData && !submitted && (
              <Box component="form" onSubmit={handleConfirm} sx={{ ...sketchyBox, backgroundColor: paperCream, p: { xs: 3, sm: 4 }, transform: 'rotate(-1deg)', animation: 'slideUpFade 0.5s ease-out forwards' }}>
                <Box sx={{ borderBottom: `2px dashed ${markerBlack}`, pb: 2, mb: 3 }}>
                  <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.75rem', color: pink15, letterSpacing: '1.5px', textTransform: 'uppercase' }}>ZONA VIP ASIGNADA:</Typography>
                  <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: '2.2rem', color: markerBlack, textTransform: 'uppercase', lineHeight: 1 }}>{groupData.nombre_grupo}</Typography>
                </Box>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: '0.9rem', color: '#444', mb: 3 }}>
                  Selecciona a los invitados que asistirán a la fiesta:
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 4 }}>
                  {groupData.invitados.map((invitado, index) => {
                    const isChecked = invitado.confirmado;
                    return (
                      <Box key={invitado.id} onClick={() => handleCheckboxChange(index)} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: `2px solid ${isChecked ? pink15 : markerBlack}`, backgroundColor: isChecked ? pink15 : '#FFF', color: isChecked ? paperCream : markerBlack, p: 1.5, cursor: 'pointer', transition: 'all 0.15s ease', filter: 'url(#roughMarker)' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <JerseySvg size={24} fill={isChecked ? 'rgba(255,255,255,0.2)' : 'none'} stroke={isChecked ? paperCream : markerBlack} />
                          <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '1rem', textTransform: 'uppercase' }}>{invitado.nombre_completo}</Typography>
                        </Box>
                        
                        <Box sx={{ width: '24px', height: '24px', border: `2.5px solid ${isChecked ? paperCream : markerBlack}`, backgroundColor: isChecked ? pink15 : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {isChecked && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={paperCream} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>}
                        </Box>
                      </Box>
                    );
                  })}
                </Box>

                <Box sx={{ p: '2px', backgroundColor: markerBlack, display: 'flex', border: `3px solid ${markerBlack}`, transform: 'rotate(1deg)' }}>
                  <Button type="submit" fullWidth disabled={loading} sx={{ backgroundColor: markerBlack, color: paperCream, fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '1rem', letterSpacing: '2.5px', borderRadius: 0, py: 2, border: `2px dashed ${paperCream}`, transition: 'all 0.15s ease-out', '&:hover': { backgroundColor: pink15, border: `2px dashed ${markerBlack}`, transform: 'translate(2px, 2px)' } }}>
                    {loading ? 'PROCESANDO...' : 'CONFIRMAR ASISTENCIA'}
                  </Button>
                </Box>
              </Box>
            )}

            {submitted && (
              <Box sx={{ ...sketchyBox, backgroundColor: paperCream, color: markerBlack, p: { xs: 4, sm: 5 }, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'rotate(-1deg)', animation: 'slideUpFade 0.5s ease-out forwards' }}>
                <Box sx={{ animation: 'stampHit 0.6s cubic-bezier(0.2, 1.4, 0.4, 1) forwards', mb: 2 }}>
                  <StampApprovedSvg size={100} />
                </Box>
                <Typography sx={{ fontFamily: '"Anton", sans-serif', fontSize: '2.8rem', lineHeight: 1, mb: 1, textTransform: 'uppercase', color: markerBlack }}>¡CONFIRMACIÓN LISTA!</Typography>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: '0.95rem', color: '#444', mb: 4, lineHeight: 1.5 }}>
                  Hemos guardado tu respuesta. Tus invitados están confirmados para brillar en la cancha y celebrar.
                </Typography>
                <Button onClick={() => { setSubmitted(false); setGroupData(null); setCode(''); }} sx={{ backgroundColor: bgPurple, color: paperCream, fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: '0.75rem', borderRadius: 0, py: 1.5, px: 3, border: `2px solid ${markerBlack}`, transition: 'all 0.15s ease-out', '&:hover': { backgroundColor: markerBlack, color: paperCream, transform: 'translate(2px, 2px)', boxShadow: `4px 4px 0px ${pink15}` } }}>
                  GESTIONAR OTRA INVITACIÓN
                </Button>
              </Box>
            )}

          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Rsvp;