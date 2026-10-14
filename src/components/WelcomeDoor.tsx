import React, { useState } from 'react';
import { DoorClosed, Sparkles, Clock, ShieldCheck, Users } from 'lucide-react';
import { sound } from '../utils/sound';

interface WelcomeDoorProps {
  onEnter: () => void;
}

export const WelcomeDoor: React.FC<WelcomeDoorProps> = ({ onEnter }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleDoorClick = () => {
    sound.click();
    sound.doorOpen();
    setIsOpening(true);
    setTimeout(() => {
      onEnter();
    }, 700);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8E0EE] via-[#C7BFE8]/30 to-[#9AD9EA]/30 flex flex-col items-center justify-center p-4 sm:p-6 select-none relative overflow-hidden">
      <div className="relative z-10 max-w-2xl w-full text-center">
        <div
          onClick={handleDoorClick}
          className={`cursor-pointer group relative bg-white/95 backdrop-blur-xl border-4 border-[#C7BFE8] rounded-3xl p-6 sm:p-8 shadow-2xl transition-all duration-700 hover:shadow-[#FEAEC9]/50 hover:border-[#FEAEC9] ${
            isOpening ? 'scale-105 opacity-90' : 'hover:-translate-y-1'
          }`}
        >
          <div className="border-b-2 border-dashed border-[#C7BFE8] pb-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEAEC9]/30 text-xs font-extrabold text-[#251B35] mb-2 border border-[#FEAEC9]">
              <Sparkles className="w-3.5 h-3.5 text-purple-700" />
              <span>OFFICIAL TEAM BUILDING CHALLENGE</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-wider text-[#251B35] uppercase">
              Welcome to
            </h1>
            <div className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-[#FEAEC9] via-[#C7BFE8] to-[#9AD9EA] bg-clip-text text-transparent mt-1">
              CARECOR OFFICE
            </div>
            <p className="text-xs sm:text-sm font-medium text-[#251B35]/70 mt-2 max-w-md mx-auto">
              Crack riddles, find sticky notes, honor coworkers, and escape the office together!
            </p>
          </div>

          <div className="relative h-44 sm:h-48 w-full max-w-md mx-auto bg-gradient-to-b from-[#E8E0EE] to-[#C7BFE8]/40 rounded-2xl border-2 border-[#C7BFE8] overflow-hidden flex shadow-inner">
            <div
              className={`w-1/2 h-full bg-[#E8E0EE] border-r-2 border-[#C7BFE8] flex flex-col justify-between p-3 transition-transform duration-700 origin-left relative ${
                isOpening ? '-rotate-y-90 opacity-40' : ''
              }`}
            >
              <div className="w-full h-20 rounded-lg bg-white/70 border border-[#C7BFE8] flex items-center justify-center">
                <span className="text-xs font-bold tracking-widest text-[#251B35]/50 uppercase">
                  CARE
                </span>
              </div>
              <div className="self-end w-3 h-10 rounded-full bg-[#FEAEC9] shadow-md border border-white"></div>
            </div>

            <div
              className={`w-1/2 h-full bg-[#E8E0EE] flex flex-col justify-between p-3 transition-transform duration-700 origin-right relative ${
                isOpening ? 'rotate-y-90 opacity-40' : ''
              }`}
            >
              <div className="w-full h-20 rounded-lg bg-white/70 border border-[#C7BFE8] flex items-center justify-center">
                <span className="text-xs font-bold tracking-widest text-[#251B35]/50 uppercase">
                  COR
                </span>
              </div>
              <div className="self-start w-3 h-10 rounded-full bg-[#9AD9EA] shadow-md border border-white"></div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 border-2 border-[#FEAEC9] px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 group-hover:scale-110 transition-transform">
              <DoorClosed className="w-5 h-5 text-[#FEAEC9]" />
              <span className="text-xs font-black tracking-wide text-[#251B35]">
                {isOpening ? 'ENTERING...' : 'PUSH TO ENTER'}
              </span>
            </div>
          </div>

          <div className="mt-5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDoorClick();
              }}
              className="w-full py-3.5 px-6 rounded-xl font-black text-sm tracking-wide uppercase transition-all shadow-md bg-gradient-to-r from-[#FEAEC9] via-[#C7BFE8] to-[#9AD9EA] text-[#251B35] hover:opacity-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Step Inside & Start Escape Game</span>
            </button>
            <p className="text-[11px] text-[#251B35]/60 mt-1.5 font-medium">
              Timer starts automatically the moment you push the door!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="bg-white/75 p-2.5 rounded-xl border border-[#C7BFE8] flex flex-col items-center">
            <Clock className="w-4 h-4 text-[#9AD9EA] mb-0.5" />
            <span className="text-xs font-bold text-[#251B35]">Live Timer</span>
            <span className="text-[10px] text-[#251B35]/60">Track escape pace</span>
          </div>
          <div className="bg-white/75 p-2.5 rounded-xl border border-[#C7BFE8] flex flex-col items-center">
            <ShieldCheck className="w-4 h-4 text-[#C7BFE8] mb-0.5" />
            <span className="text-xs font-bold text-[#251B35]">8 Themed Zones</span>
            <span className="text-[10px] text-[#251B35]/60">Puzzles & keys</span>
          </div>
          <div className="bg-white/75 p-2.5 rounded-xl border border-[#C7BFE8] flex flex-col items-center">
            <Users className="w-4 h-4 text-[#FEAEC9] mb-0.5" />
            <span className="text-xs font-bold text-[#251B35]">Team Synergy</span>
            <span className="text-[10px] text-[#251B35]/60">Awards & gratitude</span>
          </div>
        </div>
      </div>
    </div>
  );
};