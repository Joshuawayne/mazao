
export enum Language {
  EN = 'en',
  SW = 'sw',
  KI = 'ki', // Kikuyu
  LU = 'lu', // Luo
}

export interface User {
  id: string;
  name: string;
  phone: string;
  county: string;
  primaryCrop: string;
  isLoggedIn: boolean;
}

export interface CropPrice {
  id: string;
  name: string;
  icon: string; // emoji or path to SVG
  price: string; // e.g., "Ksh 50/kg"
  trend: 'up' | 'down' | 'stable';
}

export interface BuyerAlert {
  id: string;
  message: string; // e.g., "Nairobi buyer needs 100kg avocados at Ksh 55/kg"
  buyerName: string;
  isVerified: boolean;
}

export interface QuickTip {
  id: string;
  text: string; // Can be in Swahili or English based on context
  detailsLink?: string; // Route to Smart Farming Hub
}

export interface OnboardingSlideContent {
  id: number;
  titleKey: string; // key for translation
  image: string; // URL or path
  textKey: string; // key for translation
  testimonialKey?: string; // key for translation
}

export interface FarmListing {
  cropType: string;
  quantity: number; // in kg
  askingPrice?: number; // Ksh
  pickupLocation: string;
}

export interface PestAlertData {
  id: string;
  title: string;
  location: string;
  details: string;
}

export interface VideoTutorialData {
  id: string;
  title: string;
  description: string;
  videoUrl: string; // typically a URL, but can be placeholder
  thumbnailUrl: string;
}

export interface ChatMessageItem {
  id: string;
  sender: 'user' | 'bot' | 'farmer';
  text: string;
  timestamp: Date;
  avatar?: string; // URL to avatar image
}
