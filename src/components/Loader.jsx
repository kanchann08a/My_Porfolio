import { useState, useEffect } from 'react';

export default function Loader({ show }) {
  const [visible, setVisible] = useState(show);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!show) {
      setFading(true);
      const t = setTimeout(() => setVisible(false), 500);
      return () => clearTimeout(t);
    } else {
      setVisible(true);
      setFading(false);
    }
  }, [show]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-500"
      style={{
        background: 'linear-gradient(135deg, #FAFAF7 0%, #f0faf9 40%, #fdf8ec 100%)',
        opacity: fading ? 0 : 1,
      }}
    >
      <div className="flex flex-col items-center gap-6 animate-scale-in">
        {/* Ring */}
        <div className="relative w-20 h-20">
          <div
            className="absolute inset-0 rounded-full border-4"
            style={{ borderColor: 'rgba(15,118,110,0.15)' }}
          />
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent animate-spin"
            style={{
              borderTopColor: '#0F766E',
              borderRightColor: '#D4A017',
              animationDuration: '0.9s',
            }}
          />
          {/* Center */}
          <div
            className="absolute inset-2 rounded-full flex items-center justify-center shadow-lg text-white font-black text-lg"
            style={{ background: 'linear-gradient(135deg, #0F766E, #0c6259)' }}
          >
            KN
          </div>
        </div>

        <div className="text-center">
          <p className="text-slate-800 font-bold text-lg">Kanchan Nishad</p>
          <p className="text-slate-400 text-sm font-medium mt-1">Loading portfolio...</p>
        </div>

        {/* Progress bar */}
        <div
          className="w-48 h-1 rounded-full overflow-hidden"
          style={{ background: 'rgba(15,118,110,0.12)' }}
        >
          <div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #0F766E, #D4A017)',
              animation: 'shimmer-progress 1.4s ease-in-out forwards',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes shimmer-progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
