
import { CropPrice, BuyerAlert, QuickTip, PestAlertData, VideoTutorialData, FarmListing } from '../types';
// Fix: Import ROUTES from constants
import { COUNTIES, CROPS, TESTIMONIALS, ROUTES } from '../constants';

export const getMockCropPrices = (): CropPrice[] => [
  { id: '1', name: 'Tea', icon: '🍵', price: 'Ksh 250/kg', trend: 'up' },
  { id: '2', name: 'Avocados', icon: '🥑', price: 'Ksh 50/kg', trend: 'stable' },
  { id: '3', name: 'Maize', icon: '🌽', price: 'Ksh 35/kg', trend: 'down' },
  { id: '4', name: 'Coffee', icon: '☕', price: 'Ksh 300/kg', trend: 'up' },
  { id: '5', name: 'Beans', icon: '🫘', price: 'Ksh 100/kg', trend: 'stable' },
  { id: '6', name: 'Potatoes', icon: '🥔', price: 'Ksh 40/kg', trend: 'up' },
  { id: '7', name: 'Tomatoes', icon: '🍅', price: 'Ksh 60/kg', trend: 'down' },
];

export const getMockBuyerAlerts = (): BuyerAlert[] => [
  { id: '1', message: `Nairobi buyer needs 100kg avocados at Ksh 55/kg. ${TESTIMONIALS.onboarding1}`, buyerName: 'Nairobi Wholesalers Ltd.', isVerified: true },
  { id: '2', message: `Mombasa Exporters want 500kg tea at Ksh 260/kg. ${TESTIMONIALS.onboarding2}`, buyerName: 'Coast Exporters', isVerified: true },
  { id: '3', message: `Local hotel requires 20kg fresh beans daily. ${TESTIMONIALS.onboarding3}`, buyerName: 'Safari Hotel Group', isVerified: false },
];

export const getMockQuickTips = (): QuickTip[] => [
  // Fix: Use ROUTES constant for detailsLink
  { id: '1', text: 'Uza chai sasa kupata bei nzuri!', detailsLink: ROUTES.SMART_FARMING }, 
  // Fix: Use ROUTES constant for detailsLink
  { id: '2', text: 'Plant drought-resistant maize varieties before short rains.', detailsLink: ROUTES.SMART_FARMING }, 
  // Fix: Use ROUTES constant for detailsLink
  { id: '3', text: 'Angalia soko la parachichi; bei zinapanda!', detailsLink: ROUTES.SMART_FARMING }, 
];

export const getMockPestAlerts = (): PestAlertData[] => [
    { id: 'pa1', title: 'Fall Armyworm Alert', location: 'Nakuru County', details: 'Increased Fall Armyworm activity reported in maize fields in Nakuru. Monitor your crops closely and consider using recommended pesticides if infestation is observed.' },
    { id: 'pa2', title: 'Aphid Infestation Risk', location: 'Kiambu County', details: 'Weather conditions favorable for aphid multiplication on kales and cabbages. Check undersides of leaves regularly.' },
    { id: 'pa3', title: 'Fruit Fly Warning', location: 'Machakos County', details: 'Mango season is approaching. Set up fruit fly traps to protect your mango harvest from damage.' },
];

export const getMockVideoTutorials = (): VideoTutorialData[] => [
    { id: 'vt1', title: 'Jinsi ya Kutengeneza Mbolea', description: 'Jifunze kutengeneza mbolea ya asili shambani kwako.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnailUrl: 'https://picsum.photos/seed/thumb1/300/200' },
    { id: 'vt2', title: 'Drip Irrigation Setup', description: 'Step-by-step guide to installing a simple drip irrigation system.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnailUrl: 'https://picsum.photos/seed/thumb2/300/200' },
    { id: 'vt3', title: 'Kukabiliana na Ukame', description: 'Mbinu za kilimo bora wakati wa ukame.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnailUrl: 'https://picsum.photos/seed/thumb3/300/200' },
];

export const submitFarmListing = async (listing: FarmListing): Promise<{success: boolean; messageKey: string; listingId?: string}> => {
    console.log('Submitting farm listing:', listing);
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (listing.quantity > 0) {
        return { success: true, messageKey: 'listingSuccessfulMessage', listingId: Date.now().toString() };
    } else {
        return { success: false, messageKey: 'listingFailedError' };
    }
};

export const getMockInterestedBuyers = (listingId: string): BuyerAlert[] => {
    if (!listingId) return [];
    return [
        { id: 'b1-' + listingId, message: `Needs ${CROPS[0]} from your area. Offer: Ksh 52/kg.`, buyerName: 'Nakuru Feeds Ltd.', isVerified: true },
        { id: 'b2-' + listingId, message: `Interested in bulk ${CROPS[1]}. Can collect.`, buyerName: 'AgriConnect Buyers', isVerified: false },
    ];
};