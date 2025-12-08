import React from 'react';

const Marquee: React.FC = () => {
  const text = "LAURENE WATRELOT • CONSULTANTE CS OPS • ";
  // Create an array to repeat the text enough times to fill the screen width comfortably
  const items = Array(10).fill(text);

  return (
    <div className="w-full bg-cream border-b border-main/10 overflow-hidden py-3 absolute top-0 z-10 flex select-none">
      {/* Container 1 */}
      <div className="animate-marquee whitespace-nowrap flex-shrink-0 flex items-center">
        {items.map((item, index) => (
          <span key={`1-${index}`} className="text-[10px] tracking-[0.01em] font-medium font-mono text-main/60 uppercase mx-2">
            {item}
          </span>
        ))}
      </div>
      {/* Container 2 (Duplicate for seamless loop) */}
      <div className="animate-marquee whitespace-nowrap flex-shrink-0 flex items-center">
        {items.map((item, index) => (
          <span key={`2-${index}`} className="text-[10px] tracking-[0.01em] font-medium font-mono text-main/60 uppercase mx-2">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;