
import { CropPrice } from '../types';
import { getMockCropPrices } from './mockApiService'; // Using mock data for now

const API_BASE_URL = '/api/v1'; // Example base URL for your backend

/**
 * Simulates fetching crop prices from a RESTful backend.
 * In a real scenario, this would make an HTTP GET request.
 */
export const fetchCropPrices = async (): Promise<CropPrice[]> => {
  console.log('Attempting to fetch crop prices from API...');
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  try {
    // const response = await fetch(`${API_BASE_URL}/market/crop-prices`);
    // if (!response.ok) {
    //   // Log detailed error information if available from the response
    //   const errorBody = await response.text();
    //   console.error(`API Error ${response.status}: ${response.statusText}`, errorBody);
    //   throw new Error(`Network response was not ok: ${response.status} - ${response.statusText}`);
    // }
    // const data: CropPrice[] = await response.json();
    // console.log('Successfully fetched crop prices:', data);
    // return data;

    // Using mock data for now as per instructions
    const mockData = getMockCropPrices();
    console.log('Successfully fetched MOCK crop prices:', mockData);
    return mockData;

  } catch (error) {
    console.error('Failed to fetch crop prices:', error);
    // Re-throw the error so the component can handle it (e.g., display an error message)
    throw error; 
  }
};

// Example of another API function for user authentication (POST request)
// export const loginUser = async (credentials: { phone: string, otp: string }) => {
//   const response = await fetch(`${API_BASE_URL}/auth/login`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(credentials),
//   });
//   if (!response.ok) {
//     const errorData = await response.json().catch(() => ({ message: 'Login failed' }));
//     throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
//   }
//   return response.json(); // Returns user data and token, for example
// };

// Add other API functions here as needed:
// - fetchBuyerAlerts
// - submitProduceListing
// - fetchPestAlerts
// - fetchVideoTutorials
// etc.
