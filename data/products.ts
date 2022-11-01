import Product from "../core/types/business/product";
import { ProductTemplates } from "../core/types/itemplate";

export default [
  {
    id: "1",
    name: "Amazon Echo",
    description:
      "Amazon Echo is a hands-free speaker you control with your voice. Echo connects to the Alexa Voice Service to play music, provide information, news, sports scores, weather, and more—instantly.",
    price: 99.99,
    image: "https://laknabil.me/nabil.png",
    website: "1",
    template: ProductTemplates.popup,
  },
  {
    id: "2",
    name: "Amazon Echo Dot",
    description:
      "Echo Dot is a hands-free, voice-controlled device with a small built-in speaker—it can also connect to your speakers or headphones over Bluetooth or through a 3.5 mm audio cable to deliver stereo sound to the speakers you choose.",
    price: 49.99,
    image: "https://laknabil.me/nabil.png",
    website: "1",
    template: ProductTemplates.WithSuggestions,
  },
  {
    id: "3",
    name: "Amazon Echo Show",
    description:
      "Echo Show brings you everything you love about Alexa, and now she can show you things. Watch video flash briefings and YouTube, see music lyrics, security cameras, photos, weather forecasts, to-do and shopping lists, browse and listen to Audible audiobooks, and more. All hands-free—just ask.",
    price: 229.99,
    image: "https://laknabil.me/nabil.png",
    website: "1",
    template: ProductTemplates.WithSuggestions,
  },
  {
    id: "4",
    name: "Amazon Echo Spot",
    description:
      "Echo Spot brings you everything you love about Alexa, in an all-new stylish and compact design that can show you things. Watch video flash briefings and YouTube, see music lyrics, security cameras, photos, weather forecasts, to-do and shopping lists, browse and listen to Audible audiobooks, and more. All hands-free—just ask.",
    price: 129.99,
    image: "https://laknabil.me/nabil.png",
    website: "2",
    template: ProductTemplates.WithSuggestions,
  },
] as Product[];
