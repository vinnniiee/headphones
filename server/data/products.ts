const products = [
  {
    name: 'Sony WH-1000XM4 Wireless Noise-Cancelling Headphones',
    image: '/images/sony-wh1000xm4.jpg',
    description:
      'Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo. Up to 30-hour battery life with quick charging (10 min charge for 5 hours of playback)',
    brand: 'Sony',
    category: 'Noise-Canceling Headphones',
    price: 25990,  // Approximate conversion
    countInStock: 15,
    rating: 4.8,
    numReviews: 25,
  },
  {
    name: 'Bose QuietComfort 35 II Wireless Bluetooth Headphones',
    image: '/images/bose-qc35-ii.jpg',
    description:
      'Three levels of world-class noise cancellation for better listening experience in any environment. Alexa-enabled for voice access to music, information, and more. Noise-rejecting dual-microphone system for clear sound and voice pick-up',
    brand: 'Bose',
    category: 'Noise-Canceling Headphones',
    price: 22990,  // Approximate conversion
    countInStock: 10,
    rating: 4.7,
    numReviews: 18,
  },
  {
    name: 'Beats Solo3 Wireless On-Ear Headphones',
    image: '/images/beats-solo3.jpg',
    description:
      'With up to 40 hours of battery life, Beats Solo3 wireless is your perfect everyday headphone. Premium playback and fine-tuned acoustics maximize clarity, breadth, and balance. Adjustable fit with comfort-cushioned ear cups made for everyday use',
    brand: 'Beats',
    category: 'On-Ear Headphones',
    price: 14990,  // Approximate conversion
    countInStock: 20,
    rating: 4.3,
    numReviews: 30,
  },
  {
    name: 'Sennheiser HD 450BT Wireless Bluetooth Headphones',
    image: '/images/sennheiser-hd450bt.jpg',
    description:
      'Active noise cancellation for uninterrupted listening pleasure. Great wireless sound with deep dynamic bass and high-quality codec support including AAC and AptX™ Low Latency. 30-hour battery life',
    brand: 'Sennheiser',
    category: 'Over-Ear Headphones',
    price: 11290,  // Approximate conversion
    countInStock: 12,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Jaybird X4 Wireless Bluetooth Headphones',
    image: '/images/jaybird-x4.jpg',
    description:
      'Built for adventure, the Jaybird X4 wireless headphones are sweat and waterproof (IPX7 rating) and offer up to 8 hours of playtime. Customizable sound with the Jaybird app',
    brand: 'Jaybird',
    category: 'Sports Headphones',
    price: 9790,  // Approximate conversion
    countInStock: 8,
    rating: 4.2,
    numReviews: 15,
  },
  {
    name: 'Apple AirPods Pro',
    image: '/images/apple-airpods-pro.jpg',
    description:
      'Active noise cancellation for immersive sound. Transparency mode for hearing and connecting with the world around you. Three sizes of soft, tapered silicone tips for a customizable fit',
    brand: 'Apple',
    category: 'In-Ear Headphones',
    price: 18900,  // Approximate conversion
    countInStock: 25,
    rating: 4.6,
    numReviews: 40,
  },
  {
    name: 'HyperX Cloud II Gaming Headset',
    image: '/images/hyperx-cloud-ii.jpg',
    description:
      'The HyperX Cloud II features a redesigned USB sound card audio control box that amplifies audio and voice for an optimal Hi-Fi gaming experience. Comfortable memory foam ear cushions and padded leatherette headband',
    brand: 'HyperX',
    category: 'Gaming Headphones',
    price: 7590,  // Approximate conversion
    countInStock: 18,
    rating: 4.4,
    numReviews: 50,
  },
  {
    name: 'Audio-Technica ATH-M50x Professional Studio Monitor Headphones',
    image: '/images/audio-technica-ath-m50x.jpg',
    description:
      'Critically acclaimed sonic performance praised by top audio engineers and pro audio reviewers. Proprietary 45mm large-aperture drivers with rare earth magnets and copper-clad aluminum wire voice coils',
    brand: 'Audio-Technica',
    category: 'Studio Headphones',
    price: 11290,  // Approximate conversion
    countInStock: 15,
    rating: 4.7,
    numReviews: 60,
  },
  {
    name: 'JBL Live 650BTNC Wireless Over-Ear Noise-Cancelling Headphones',
    image: '/images/jbl-live-650btnc.jpg',
    description:
      'Incorporating JBL signature sound, these headphones deliver powerful sound while blocking out ambient noise. Up to 30 hours of battery life with ANC off, 20 hours with ANC on. Comfortable fabric headband and soft ear cushions',
    brand: 'JBL',
    category: 'Noise-Canceling Headphones',
    price: 14990,  // Approximate conversion
    countInStock: 14,
    rating: 4.4,
    numReviews: 28,
  },
  {
    name: 'Skullcandy Crusher Wireless Over-Ear Headphones',
    image: '/images/skullcandy-crusher.jpg',
    description:
      'Adjustable sensory bass, noise isolating fit, and up to 40 hours of battery life. Built-in microphone, call, track, and volume control. Designed for bass lovers',
    brand: 'Skullcandy',
    category: 'Over-Ear Headphones',
    price: 11290,  // Approximate conversion
    countInStock: 22,
    rating: 4.3,
    numReviews: 35,
  },
  {
    name: 'Beyerdynamic DT 770 Pro 80 Ohm Over-Ear Studio Headphones',
    image: '/images/beyerdynamic-dt770.jpg',
    description:
      'Closed over-ear headphones for professional sound in the studio and on mobile devices. Innovative bass reflex system and soft, replaceable ear pads for long sessions',
    brand: 'Beyerdynamic',
    category: 'Studio Headphones',
    price: 11900,  // Approximate conversion
    countInStock: 9,
    rating: 4.6,
    numReviews: 45,
  },
  {
    name: 'Plantronics BackBeat FIT 6100 Wireless Bluetooth Headphones',
    image: '/images/plantronics-backbeat-fit6100.jpg',
    description:
      'Sport-fit headband, IPX5-rated water-resistant and sweatproof design. Up to 24 hours of power on a single charge, and a 15-minute quick charge provides up to 6 hours of power. Rich, powerful sound for sports and workouts',
    brand: 'Plantronics',
    category: 'Sports Headphones',
    price: 13490,  // Approximate conversion
    countInStock: 7,
    rating: 4.3,
    numReviews: 20,
  },
  {
    name: 'Sennheiser Momentum 3 Wireless Noise-Canceling Headphones',
    image: '/images/sennheiser-momentum3.jpg',
    description:
      'Active noise cancellation and transparent hearing. Auto On/Off and Smart Pause never miss a beat. Three-button interface for easy operation',
    brand: 'Sennheiser',
    category: 'Noise-Canceling Headphones',
    price: 29990,  // Approximate conversion
    countInStock: 5,
    rating: 4.6,
    numReviews: 12,
  },
  {
    name: 'Sony WF-1000XM4 True Wireless Noise-Canceling In-Ear Headphones',
    image: '/images/sony-wf1000xm4.jpg',
    description:
      'Industry-leading noise cancellation and cutting-edge audio technology. Up to 8 hours of battery life with noise cancellation on, up to 24 hours with charging case. IPX4 water resistance',
    brand: 'Sony',
    category: 'In-Ear Headphones',
    price: 19990,  // Approximate conversion
    countInStock: 15,
    rating: 4.7,
    numReviews: 18,
  },
  {
    name: 'Bose SoundSport Wireless In-Ear Headphones',
    image: '/images/bose-soundsport.jpg',
    description:
      'Engineered for active lifestyles, these headphones are sweat and weather-resistant. StayHear+ tips stay comfortably in place during rigorous workouts. Up to 6 hours of battery life per charge',
    brand: 'Bose',
    category: 'Sports Headphones',
    price: 13490,  // Approximate conversion
    countInStock: 10,
    rating: 4.5,
    numReviews: 25,
  },
  {
    name: 'AKG N700NC M2 Over-Ear Foldable Wireless Headphones',
    image: '/images/akg-n700nc.jpg',
    description:
      'Adaptive noise canceling technology for an immersive listening experience. Up to 23 hours of battery life with Bluetooth and ANC on. Lightweight and comfortable for long listening sessions',
    brand: 'AKG',
    category: 'Noise-Canceling Headphones',
    price: 19990,  // Approximate conversion
    countInStock: 12,
    rating: 4.4,
    numReviews: 20,
  },
  {
    name: 'Marshall Major III On-Ear Bluetooth Headphones',
    image: '/images/marshall-major-iii.jpg',
    description:
      'Iconic design with signature Marshall sound. Up to 30 hours of wireless playtime. 40 mm dynamic drivers for enhanced bass, smooth mids, and clear highs',
    brand: 'Marshall',
    category: 'On-Ear Headphones',
    price: 8990,  // Approximate conversion
    countInStock: 18,
    rating: 4.3,
    numReviews: 22,
  },
  {
    name: 'Jabra Elite 85h Wireless Noise-Canceling Headphones',
    image: '/images/jabra-elite85h.jpg',
    description:
      'SmartSound audio technology automatically adapts to your surroundings. Up to 36 hours of battery life with ANC on, 41 hours without. Water and dust resistant',
    brand: 'Jabra',
    category: 'Noise-Canceling Headphones',
    price: 24990,  // Approximate conversion
    countInStock: 11,
    rating: 4.5,
    numReviews: 30,
  },
  {
    name: 'Grado SR80e Prestige Series Open-Back Stereo Headphones',
    image: '/images/grado-sr80e.jpg',
    description:
      'Open-back design for realistic and full-bodied sound. Lightweight and comfortable, ideal for long listening sessions. Built on the same features as the legendary SR60s',
    brand: 'Grado',
    category: 'Over-Ear Headphones',
    price: 7990,  // Approximate conversion
    countInStock: 15,
    rating: 4.6,
    numReviews: 40,
  },
  {
    name: 'Philips SHP9500 HiFi Precision Stereo Over-Ear Headphones',
    image: '/images/philips-shp9500.jpg',
    description:
      '50mm neodymium drivers deliver full-spectrum sound. Breathable ear cushion and lightweight headband for long listening comfort. Open-back design for an immersive listening experience',
    brand: 'Philips',
    category: 'Over-Ear Headphones',
    price: 8990,  // Approximate conversion
    countInStock: 20,
    rating: 4.4,
    numReviews: 35,
  },
];

export default products;
