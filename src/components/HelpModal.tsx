import React from 'react';
import { HelpCircle, Key, Clock, ShieldCheck } from 'lucide-react';
import { sound } from '../utils/sound';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl border-4 border-[#C7BFE8] max-w-xl w-full p-6 shadow-2xl animate-in zoom-in-95 max-h-[88vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4 border-b border-[#C7BFE8] pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#FEAEC9] flex items-center justify-center text-[#251B35]">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-[#251B35]">
                CARECOR Escape Room Rules
              </h3>
              <span className="text-xs text-[#251B35]/70">
                Official Guidelines & Escape Mechanics
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              sound.click();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4 text-xs text-[#251B35]/80">
          <div className="p-3 rounded-2xl bg-[#E8E0EE]/50 border border-[#C7BFE8]">
            <h4 className="font-extrabold text-[#251B35] text-sm mb-1 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-purple-700" />
              1. Automatic Game Start & Live Timer
            </h4>
            <p>
              Pushing the front entrance door begins the challenge and starts the master escape timer.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-[#9AD9EA]/20 border border-[#9AD9EA]">
            <h4 className="font-extrabold text-[#251B35] text-sm mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-700" />
              2. Single-Room Completion Rule
            </h4>
            <p>
              You can choose any room to start with. Once you enter a room, complete its objective and obtain its key before choosing another door.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-[#FEAEC9]/25 border border-[#FEAEC9]">
            <h4 className="font-extrabold text-[#251B35] text-sm mb-1 flex items-center gap-1.5">
              <Key className="w-4 h-4 text-rose-700" />
              3. The 8 Themed Escape Zones
            </h4>
            <ul className="list-disc pl-4 space-y-1 mt-1 text-[11px]">
              <li><strong>Living Area:</strong> Find hammer, scissors, water; collect 8 sticky notes & pin to spell CREDIBLE.</li>
              <li><strong>Pantry Room:</strong> Solve 10 attitude logic questions in appliances for Keys #1-#10.</li>
              <li><strong>Meeting Room:</strong> Solve 10 visual rebuses and declare employee responsibility.</li>
              <li><strong>CEO Office:</strong> Award excellence certificates to coworkers from the official roster.</li>
              <li><strong>Break Room:</strong> Scan QR code and capture the team cooperation photo pose.</li>
              <li><strong>Sleeping Room:</strong> Spot 10 hidden workstation differences.</li>
              <li><strong>Special Room:</strong> Share teammate gratitude with 20s timers to open the vault.</li>
              <li><strong>Main Door Exit:</strong> Enter the master passcode to escape!</li>
            </ul>
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-[#C7BFE8]">
          <button
            onClick={() => {
              sound.click();
              onClose();
            }}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#FEAEC9] via-[#C7BFE8] to-[#9AD9EA] text-[#251B35] font-black text-xs uppercase tracking-wider hover:opacity-95 shadow-md cursor-pointer"
          >
            Back to Escape Challenge
          </button>
        </div>
      </div>
    </div>
  );
};