# 🌱 AgriGrow Kenya 🇰🇪 - Grow Smarter, Sell Better!

Yego! 👋 Welcome, Agri-Adventurer, to the frontend codebase for **AgriGrow Kenya**! We're on a mission to sprinkle some digital magic onto the fertile lands of Kenyan agriculture, making life easier and more profitable for our amazing farmers.

Our goal? To help Kenyan farmers, from the maize fields of the Rift Valley to the tea gardens of Kericho, to:
*   💰 **Find the Best Prices:** No more guesswork! See real-time market rates.
*   🤝 **Connect Directly with Buyers:** Cut out the middlemen and get the value you deserve.
*   🧠 **Get Smart Farming Tips:** AI-powered advice to boost your harvest (thanks, AgriBot! ✨).
*   💬 **Join a Thriving Community:** Share knowledge and grow together in our (upcoming) forum.

This app is being built with a **mobile-first** heart, focusing on simplicity, trust, and super-smooth engagement, even if you're just dipping your toes into the digital shamba!

---

## ✨ Frontend Features (What's Already Sprouting!)

Our frontend is already blooming with some cool features:

*   👋 **Splash Screen:** A warm "Karibu!" with a vibrant Kenyan farm welcome.
*   🚀 **Onboarding:** A quick, friendly tour showing you the ropes.
*   🔐 **Sign-Up/Login:** Your personal gateway to smarter farming (mock OTP for now, real security coming soon!).
*   📊 **Home Dashboard (Market Connect):** Your command center!
    *   📈 **Crop Price Carousel:** Watch those prices move!
    *   🔔 **Buyer Match Alerts:** Potential deals delivered to you.
    *   💡 **Quick Tips Banner:** Daily wisdom for your shamba.
*   🛒 **Sell Produce Screen:** Easily list your crops and connect with interested buyers.
*   🧑‍🏫 **Smart Farming Hub:** Your digital agricultural advisor!
    *   📅 **Crop Planner:** What to plant and when (mock calendar).
    *   🐛 **Pest Alerts:** Stay one step ahead of those pesky critters.
    *   🎬 **Video Tutorials:** Learn new farming techniques (with offline access in mind).
*   🗣️ **Chat Screen:** Engage and learn!
    *   🤖 **AI Chatbot (Powered by Gemini!):** Got a farming question? AgriBot is here to help!
    *   🧑‍🤝‍🧑 **Forum (Mock):** A place to connect with other farmers (full functionality coming with the backend!).
    *   🏆 **Success Stories (Mock):** Get inspired by fellow AgriGrowers.
*   📱 **Responsive Navigation:**
    *   ↔️ **Collapsible Sidebar:** Smooth sailing on desktop.
    *   👇 **Bottom Navigation Bar:** Easy taps on mobile.
*   🌍 **Multi-Language Support:** We speak your language! (English, Swahili, Gikuyu, Dholuo - with more local translations always welcome!).
*   ⬅️ **Easy Back Navigation:** The header back button makes moving around a breeze.

---

## 💻 Frontend Tech Stack - The Tools in Our Digital Shed

We're tilling this digital land with some top-notch tools:

*   **React 19:** For building a snappy, modern, and interactive user interface.
*   **TypeScript:** To keep our code robust, healthy, and easier to manage as it grows.
*   **Tailwind CSS:** For utility-first styling that lets us design beautiful interfaces, fast!
*   **React Router DOM v7 (`HashRouter`):** For smooth client-side navigation.
*   **@google/genai:** The magic behind our intelligent AgriBot assistant.
*   **Context API:** For managing global state like user info and language preferences.
*   *( **Vite** is used for the development environment to handle TypeScript compilation, JSX, and provide a speedy dev server.)*

---

## 🚧 Backend Status: Planting the Seeds! 🚧

Hold your hoes, folks! Our **backend** for AgriGrow Kenya is currently **UNDER ACTIVE DEVELOPMENT!** 🌱⚙️

Our brilliant backend team is hard at work cultivating a robust system using:
*   **Node.js**
*   **Express.js**
*   **Supabase** (for the database, user authentication, file storage, and more!)

This backend will soon be the powerhouse driving all dynamic data, real user accounts, live marketplace listings, forum interactions, and secure communication with services like the Gemini API. For now, the frontend uses some mock data and services for demonstration and development purposes. Stay tuned for updates!

---

## 🚀 Getting Started (Frontend Development)

Eager to get your hands on the frontend code? Fantastic! Here's how:

1.  **Clone the Repository:**
    ```bash
    git clone https://your-github-repo-url-here/agrigrow-kenya.git
    cd agrigrow-kenya # Or whatever your frontend project folder is named
    ```

2.  **Install Dependencies:**
    Our `index.html` cleverly uses CDNs (via `esm.sh`) for some runtime libraries. However, for a proper development environment (especially for `.tsx` files, TypeScript, and build tools like Vite), you'll need Node.js and npm (or yarn/pnpm).
    ```bash
    npm install
    # OR
    # yarn install
    # OR
    # pnpm install
    ```
    This command reads the (yet to be fully configured for local dev) `package.json` and installs necessary development tools, TypeScript, and type definitions.

3.  **Run the Development Server:**
    Once you have a `package.json` with a dev script (e.g., `vite`), you can run:
    ```bash
    npm run dev
    ```
    This will typically start a local development server and open the app in your browser, with hot reloading for a great dev experience!

4.  **Directly Open `index.html` (Simpler, but with caveats):**
    Thanks to the `importmap` in `index.html`, you *can* open it directly in a modern browser. However, for development involving `.tsx` files, using a development server (like Vite) that handles TypeScript compilation is **highly recommended**.

---

## 🤝 Contributing

Have an idea that could help AgriGrow Kenya flourish? We'd love to hear it! Feel free to fork the repository, make your enhancements, and submit a pull request. Let's cultivate this project together!

---

Happy Farming & Happy Coding! 🌾💻
The AgriGrow Kenya Team
