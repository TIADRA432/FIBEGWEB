import React, { useState, useEffect } from 'react';

const CountDown: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-12-19T00:00:00") - +new Date();
    let timeLeft = {
      jours: 0,
      heures: 0,
      minutes: 0,
      secondes: 0
    };

    if (difference > 0) {
      timeLeft = {
        jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
        heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        secondes: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 my-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-fibeg-red border-4 border-black shadow-comic flex items-center justify-center transform rotate-2">
            <span className="text-3xl md:text-4xl font-comic-header text-white">{value}</span>
          </div>
          <span className="mt-2 font-comic-header text-xl uppercase tracking-widest bg-white px-2 border-2 border-black -rotate-2">{unit}</span>
        </div>
      ))}
    </div>
  );
};

export default CountDown;