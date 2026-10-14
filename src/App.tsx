// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { WelcomeDoor } from './components/WelcomeDoor';
import { Header } from './components/Header';
import { OfficeHub } from './components/OfficeHub';
import { InventoryBar } from './components/InventoryBar';
import { HelpModal } from './components/HelpModal';
import { LivingArea } from './components/rooms/LivingArea';
import { PantryRoom } from './components/rooms/PantryRoom';
import { MeetingRoom } from './components/rooms/MeetingRoom';
import { CeoOffice } from './components/rooms/CeoOffice';
import { BreakRoom } from './components/rooms/BreakRoom';
import { SleepingRoom } from './components/rooms/SleepingRoom';
import { SpecialRoom } from './components/rooms/SpecialRoom';
import { MainDoorExit } from './components/rooms/MainDoorExit';
import { RoomId, InventoryItem } from './types/game';
import { sound } from './utils/sound';
import { CheckCircle2, Clock, Key, RotateCcw, Trophy } from 'lucide-react';
export default App;