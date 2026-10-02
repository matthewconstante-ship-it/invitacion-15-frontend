import { Box, Typography, GlobalStyles } from '@mui/material';

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

const StarSolidSvg = ({ size = 22, fill = paperCream, stroke = markerBlack }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill={fill} stroke={stroke} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" filter="url(#roughMarker)">
    <path d="M 50 10 L 62 38 L 92 35 L 65 55 L 78 88 L 50 68 L 22 88 L 32 55 L 8 38 L 38 35 Z" />
  </svg>
);

const SketchySoccerBallSvg = ({ size = 24, fill = paperCream, stroke = markerBlack }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" filter="url(#roughMarker)">
    <circle cx="50" cy="50" r="46" fill={fill} />
    <polygon points="50,28 69,42 62,65 38,65 31,42" fill={stroke} />
    <line x1="50" y1="28" x2="50" y2="4" />
    <line x1="69" y1="42" x2="93" y2="34" />
    <line x1="62" y1="65" x2="78" y2="88" />
    <line x1="38" y1="65" x2="22" y2="88" />
    <line x1="31" y1="42" x2="7" y2="34" />
  </svg>
);

const TickerBlock = ({ phrases }) => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    {phrases.map((phrase, index) => (
      <Box key={index} sx={{ display: 'flex', alignItems: 'center', mx: { xs: 2, sm: 3 } }}>
        <Typography 
          sx={{ 
            fontFamily: '"Anton", sans-serif', 
            fontSize: { xs: '1.4rem', sm: '1.8rem' }, 
            color: markerBlack, 
            textTransform: 'uppercase', 
            letterSpacing: '2px', 
            mr: { xs: 2, sm: 3 },
            textShadow: `1.5px 1.5px 0px ${paperCream}`,
            lineHeight: 1
          }}
        >
          {phrase}
        </Typography>
        {index % 2 === 0 ? <StarSolidSvg /> : <SketchySoccerBallSvg />}
      </Box>
    ))}
  </Box>
);

const Ticker = ({ customPhrases }) => {
  const fallbackPhrases = [
    "ANAHY'S 15TH", "BLOKE CORE EDITION", "MATCHDAY OFICIAL", "VIP ACCESS ONLY"
  ];
  
  const phrasesToUse = customPhrases || fallbackPhrases;

  return (
    <>
      <SvgFilters />
      <GlobalStyles styles={{ '@keyframes scrollTicker': { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } } }} />
      
      <Box sx={{ width: '100%', backgroundColor: pink15, borderBottom: `4px solid ${markerBlack}`, borderTop: `4px solid ${markerBlack}`, overflow: 'hidden', display: 'flex', alignItems: 'center', py: 1.5, position: 'relative', zIndex: 10, boxShadow: `0px 4px 0px rgba(26,26,26,0.3)` }}>
        <Box sx={{ display: 'flex', whiteSpace: 'nowrap', width: 'fit-content', animation: 'scrollTicker 25s linear infinite', '&:hover': { animationPlayState: 'paused' } }}>
          <TickerBlock phrases={phrasesToUse} />
          <TickerBlock phrases={phrasesToUse} />
        </Box>
      </Box>
    </>
  );
};

export default Ticker;