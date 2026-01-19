// lib/airports.config.ts

// 1. NEW TYPES FOR FAQ
export type FaqItem = { question: string; answer: string };
export type FaqCollection = Record<string, FaqItem[]>;

export type AirportKey =
  | "JMK"
  | "PAS"
  | "JNX"
  | "ZTH"
  | "BJV"
  | "KGS"
  | "CFU"
  | "EFL"
  | "MLO"
  | "ATH"
  | "RHO"
  | "HER"
  | "JTR"
  | "SKG";

export interface AirportConfig {
  key: AirportKey;
  name: string;
  domain: string;
  city: string;
  country: string;
  iata: string;
  icao?: string;
  googleVerificationId?: string;

  // WIDGET ENDPOINTS
  flightWidgets: {
    arrivals: string;
    departures: string;
  };

  // 2. OPTIONAL FIELD: FAQ DATA
  faqs?: FaqCollection;
}

export const AIRPORTS: AirportConfig[] = [
  {
    key: "JMK",
    name: "Mykonos International Airport",
    domain: "mykonosairport-jmk.com",
    googleVerificationId: "U7c9VLtBvOOo2HM1_YN3sKI7WQ3Ucjwni_WbyHK6V6s",
    city: "Mykonos",
    country: "Greece",
    iata: "JMK",
    flightWidgets: {
      arrivals: "https://YOUR-WIDGET-PROVIDER.COM/jmk/arrivals",
      departures: "https://YOUR-WIDGET-PROVIDER.COM/jmk/departures",
    },
    // 3. REAL WORLD DATA FOR MYKONOS (JMK)
    faqs: {
      "car-park": [
        {
          question: "Is there parking available at Mykonos Airport?",
          answer:
            "Yes, there is a designated public parking area located directly opposite the terminal building. It is open 24/7.",
        },
        {
          question: "How much does parking cost?",
          answer:
            "Parking at Mykonos Airport is currently free of charge for all passengers and visitors. However, spaces are limited and operate on a first-come, first-served basis.",
        },
        {
          question: "Can I book a parking spot in advance?",
          answer:
            "No, since the parking is free and public, pre-booking is not available. Finding a spot can be challenging during peak summer months (July-August).",
        },
      ],
      about: [
        {
          question: "How far is the airport from Mykonos Town?",
          answer:
            "The airport is located approximately 4km (2.5 miles) from Mykonos Town (Chora). The drive typically takes about 10-15 minutes depending on traffic.",
        },
        {
          question: "Is there public transport to the city?",
          answer:
            "Yes, the KTEL bus service connects the airport to the 'Fabrika' central bus station in Mykonos Town. Tickets cost approx €2.50. Buses run frequently in summer but are limited in winter.",
        },
        {
          question: "Where can I find a taxi?",
          answer:
            "The taxi rank is located just outside the Arrivals exit. Please note there are only about 30 taxis servicing the entire island, so wait times can be long in high season.",
        },
      ],
      facilities: [
        {
          question: "Is there free WiFi?",
          answer:
            "Yes, the airport offers free unlimited WiFi. Connect to the network named 'Fraport-Free' and launch your browser to log in.",
        },
        {
          question: "Are there ATMs?",
          answer:
            "Yes, ATMs from Euronet and major Greek banks are available in both the Arrivals and Departures areas.",
        },
      ],
      "flight-status": [
        {
          question: "When should I arrive at the airport?",
          answer:
            "For domestic flights, arriving 90 minutes before departure is usually sufficient. For international charter flights during summer, we strongly recommend arriving at least 2 to 2.5 hours prior to departure due to potential queues.",
        },
        {
          question: "Where can I check live flight times?",
          answer:
            "Live arrivals and departures are displayed on screens throughout the terminal. You can also check real-time status on this website via the 'Flights' tab.",
        },
      ],
      "carry-on": [
        {
          question: "What are the rules for liquids in carry-on?",
          answer:
            "Standard EU rules apply: Liquids, aerosols, and gels must be in containers of 100ml or less, placed inside a single, transparent, re-sealable plastic bag (max capacity 1 liter per passenger).",
        },
        {
          question: "Can I bring food through security?",
          answer:
            "Solid food (sandwiches, fruit, snacks) is generally allowed. Semi-liquid foods like yogurt, honey, or soft cheese count as liquids and must follow the 100ml rule.",
        },
      ],
      customs: [
        {
          question: "What are the limits for alcohol and tobacco?",
          answer:
            "If traveling from another EU country, there are no limits for personal use. If arriving from outside the EU, limits apply (e.g., 200 cigarettes, 4L of wine, 16L of beer).",
        },
        {
          question: "Do I need to declare cash?",
          answer:
            "If you are entering or leaving the EU with €10,000 or more in cash (or equivalent), you must declare it to Customs authorities.",
        },
      ],
      assistance: [
        {
          question: "How do I request special assistance (PRM)?",
          answer:
            "You must notify your airline or travel agent at least 48 hours before your flight departure. This ensures staff are ready to assist you upon arrival.",
        },
        {
          question: "Where is the meeting point for assistance?",
          answer:
            "There are designated PRM (Persons with Reduced Mobility) call points located at the terminal entrance and inside the check-in area. Look for the wheelchair symbol.",
        },
      ],
      baggage: [
        {
          question: "Who do I contact for lost luggage?",
          answer:
            "For items left on the plane, contact your airline. For items lost within the terminal, contact the Airport Lost & Found at +30 22890 79000.",
        },
      ],
      security: [
        {
          question: "Do I need to remove my laptop?",
          answer:
            "Yes, large electronic devices (laptops, tablets) and your bag of liquids must be removed from your hand luggage and placed in a separate tray for screening.",
        },
      ],
    },
  },
  // ... Other airports (PAS, JNX, etc.) remain here unchanged
  {
    key: "PAS",
    name: "Paros National Airport",
    domain: "airportparos.com",
    googleVerificationId: "2c6tdED5tsrCLUvtan61h_stssd6URboLIU3hUojrc4",
    city: "Paros",
    country: "Greece",
    iata: "PAS",
    flightWidgets: {
      arrivals: "https://YOUR-WIDGET-PROVIDER.COM/pas/arrivals",
      departures: "https://YOUR-WIDGET-PROVIDER.COM/pas/departures",
    },
    // REAL WORLD DATA FOR PAROS (PAS)
    faqs: {
      "car-park": [
        {
          question: "Is there parking available at Paros Airport?",
          answer:
            "Yes, there is a designated public parking area located directly in front of the terminal building.",
        },
        {
          question: "How much does parking cost?",
          answer:
            "Official parking at Paros Airport is currently free of charge. However, the lot is relatively small (approx. 70 spaces) and fills up quickly during the summer season.",
        },
        {
          question: "Can I pre-book a parking spot?",
          answer:
            "No, the official airport parking operates on a first-come, first-served basis. There are private parking lots nearby that may offer shuttle services if the main lot is full.",
        },
      ],
      about: [
        {
          question: "How far is the airport from Parikia and Naoussa?",
          answer:
            "The airport is 10km (15-20 min) from the main port of Parikia and approximately 20km (30-40 min) from Naoussa.",
        },
        {
          question: "Is there a direct bus to Naoussa?",
          answer:
            "No, there is no direct bus from the airport to Naoussa. You must take the KTEL bus to Parikia main station and transfer to a Naoussa-bound bus. Tickets cost around €1.80 - €3.00.",
        },
        {
          question: "Are taxis easily available?",
          answer:
            "There are very limited taxis on the island (only about 30-35 in total). During July and August, waiting times can exceed an hour. We strongly recommend pre-booking a private transfer or renting a car.",
        },
      ],
      facilities: [
        {
          question: "Is there free WiFi?",
          answer:
            "Yes, free public WiFi is available inside the terminal building for all passengers.",
        },
        {
          question: "Are there ATMs at the airport?",
          answer:
            "Yes, there is an ATM located in the Arrivals hall, available for cash withdrawals 24/7.",
        },
      ],
      "flight-status": [
        {
          question: "When should I arrive for my flight?",
          answer:
            "For domestic flights to Athens/Thessaloniki, arriving 90 minutes before departure is recommended. The terminal is small but can get very crowded during peak summer waves.",
        },
      ],
      "carry-on": [
        {
          question: "What are the carry-on liquid rules?",
          answer:
            "Standard EU security rules apply. Liquids must be in containers of 100ml or less, all fitting comfortably into one transparent, re-sealable 1-liter plastic bag.",
        },
      ],
      customs: [
        {
          question: "Are there customs checks?",
          answer:
            "Most flights from Paros are domestic (to Athens/Thessaloniki), so you will not pass through customs. If you are connecting internationally in Athens, customs will be handled there or at your final destination.",
        },
      ],
      assistance: [
        {
          question: "I need wheelchair assistance. What should I do?",
          answer:
            "Paros Airport is fully accessible. You must request assistance through your airline at least 48 hours before your trip. Staff will assist you from the check-in counter to the aircraft.",
        },
      ],
      baggage: [
        {
          question: "Who do I contact for lost luggage?",
          answer:
            "For items left on the aircraft, contact your airline (Aegean/Olympic/Sky Express). For items lost inside the terminal, you can contact the Airport Authority at +30 22840 90500.",
        },
      ],
      security: [
        {
          question: "Is there a fast-track lane?",
          answer:
            "No, Paros Airport is a small regional airport and does not currently offer a separate Fast Track security lane.",
        },
      ],
    },
  },
  {
    key: "JNX",
    name: "Naxos Island National Airport",
    domain: "naxosairport.com",
    googleVerificationId: "64yhwJpovJwws-UfKguQAfblQu6vjs8rPtdcFb9s3Ds",
    city: "Naxos",
    country: "Greece",
    iata: "JNX",
    flightWidgets: {
      arrivals: "https://YOUR-WIDGET-PROVIDER.COM/jmk/arrivals",
      departures: "https://YOUR-WIDGET-PROVIDER.COM/jmk/departures",
    },
    // REAL WORLD DATA FOR NAXOS (JNX)
    faqs: {
      "car-park": [
        {
          question: "Is there parking at Naxos Airport?",
          answer:
            "Yes, there is a small public parking area immediately in front of the terminal building.",
        },
        {
          question: "How much does parking cost?",
          answer:
            "Parking is currently free of charge. However, spaces are very limited. During peak summer months, travelers often have to park on the roadside leading up to the airport.",
        },
        {
          question: "Can I book a parking spot?",
          answer:
            "No, parking operates strictly on a first-come, first-served basis and cannot be pre-booked.",
        },
      ],
      about: [
        {
          question: "How far is the airport from Naxos Town (Chora)?",
          answer:
            "The airport is very close to the city, only about 3-4km away. It typically takes 10 minutes by car or taxi to reach the port/town center.",
        },
        {
          question: "Is there a bus to the town?",
          answer:
            "Yes, the KTEL Naxos bus stops just outside the airport gate. It runs to Naxos Town (Chora) / Port. Tickets cost around €2.00 and can be purchased from the driver (cash only).",
        },
        {
          question: "How easy is it to get a taxi?",
          answer:
            "Taxis are available at the rank outside arrivals, but availability is low compared to demand in July and August. Pre-booking a private transfer or hotel shuttle is highly recommended.",
        },
      ],
      facilities: [
        {
          question: "Is there free WiFi?",
          answer:
            "Yes, there is free public WiFi available within the terminal building.",
        },
        {
          question: "Is there a shop or cafe?",
          answer:
            "There is a very small snack bar selling coffee and sandwiches, and a small kiosk for newspapers/magazines. Do not expect extensive duty-free shopping options.",
        },
      ],
      "flight-status": [
        {
          question: "How early should I arrive?",
          answer:
            "Due to the small size of the terminal, it gets very crowded very quickly. We recommend arriving 90 minutes to 2 hours before your flight, especially if you have checked baggage.",
        },
      ],
      "carry-on": [
        {
          question: "What are the rules for hand luggage?",
          answer:
            "Standard EU rules apply (100ml liquids). However, Naxos flights are typically operated by smaller aircraft (ATR/Dash-8), so cabin baggage size limits may be stricter than international flights. Check with Sky Express or Olympic/Aegean.",
        },
      ],
      customs: [
        {
          question: "Do I go through customs at Naxos?",
          answer:
            "Naxos primarily serves domestic flights from Athens. You will generally not pass through customs or passport control upon arrival unless you are on a rare direct international charter.",
        },
      ],
      assistance: [
        {
          question: "Is the airport accessible for wheelchairs?",
          answer:
            "Yes, despite its small size, the airport is on a single level and is accessible. Please notify your airline 48 hours in advance so staff can assist you from check-in to the aircraft steps.",
        },
      ],
      baggage: [
        {
          question: "Who do I contact for lost luggage?",
          answer:
            "Please visit the airline desk immediately upon arrival if your bag is missing. Since the airport is small, bags are usually delivered to the single conveyor belt very quickly.",
        },
      ],
      security: [
        {
          question: "Is security fast?",
          answer:
            "There is typically only one or two security scanning lanes. During peak departure windows (usually mornings and early evenings), queues can build up outside the building.",
        },
      ],
    },
  },
  {
    key: "ZTH",
    name: "Zakynthos International Airport",
    domain: "zanteairport.com",
    googleVerificationId: "CxbLEBp4Zi5JaTHJo5VQJTJFyEcnGYVSWg6F0JB8DKo",
    city: "Zakynthos",
    country: "Greece",
    iata: "ZTH",
    flightWidgets: {
      arrivals: "https://YOUR-WIDGET-PROVIDER.COM/jmk/arrivals",
      departures: "https://YOUR-WIDGET-PROVIDER.COM/jmk/departures",
    },
    // REAL WORLD DATA FOR ZAKYNTHOS (ZTH)
    faqs: {
      "car-park": [
        {
          question: "Is there parking at Zakynthos Airport?",
          answer:
            "Yes, there is a designated parking area directly in front of the terminal building.",
        },
        {
          question: "How much does parking cost?",
          answer:
            "Parking at Zakynthos Airport is currently free of charge for all travelers. However, spaces are limited and operate on a first-come, first-served basis.",
        },
        {
          question: "Can I book a parking spot?",
          answer:
            "No, pre-booking is not available. During peak summer months (July-August), the lot fills up very quickly.",
        },
      ],
      about: [
        {
          question: "How far is the airport from Zakynthos Town?",
          answer:
            "The airport is located about 4km (2.5 miles) from Zakynthos Town (Zante). The drive typically takes 10-15 minutes.",
        },
        {
          question: "Is there a bus to Laganas or Tsilivi?",
          answer:
            "No direct bus. The KTEL bus only runs between the Airport and Zakynthos Town station. From there, you must transfer to another bus to reach Laganas, Tsilivi, or Kalamaki.",
        },
        {
          question: "How often does the bus run?",
          answer:
            "The bus service is sparse, running only about 4-5 times a day. Tickets cost approx €1.80. Due to the infrequent schedule, most travelers prefer taxis or transfers.",
        },
      ],
      facilities: [
        {
          question: "Is there free WiFi?",
          answer:
            "Yes, unlimited free WiFi is available. Connect to the network 'Fraport-Free' and launch your browser to log in.",
        },
        {
          question: "What shops and restaurants are available?",
          answer:
            "The airport features a Hellenic Duty Free Shop, a 'Pret A Manger', 'The Barrels GastroPub', and several other cafes like 'Panopolis' and 'Gregory’s'.",
        },
      ],
      "flight-status": [
        {
          question: "How early should I arrive?",
          answer:
            "For international charter flights, we recommend arriving 2 to 2.5 hours before departure. For domestic flights to Athens, 90 minutes is usually sufficient.",
        },
      ],
      "carry-on": [
        {
          question: "Are there liquid restrictions?",
          answer:
            "Yes, standard EU rules apply. Liquids, gels, and aerosols must be in containers of 100ml or less, fitting into one transparent 1-liter plastic bag.",
        },
      ],
      customs: [
        {
          question: "Do I need to declare cash?",
          answer:
            "If traveling from outside the EU with €10,000 or more in cash (or equivalent), you must declare it to Customs.",
        },
      ],
      assistance: [
        {
          question: "How do I request PRM assistance?",
          answer:
            "You must notify your airline at least 48 hours prior to departure. Assistance call points are located at the terminal entrance and check-in area.",
        },
      ],
      baggage: [
        {
          question: "Who do I contact for items lost in the terminal?",
          answer:
            "Items lost within the terminal are handled by the Airport Police. You can contact them at +30 26950 24487 (office hours). For bags lost on the plane, contact your airline.",
        },
      ],
      security: [
        {
          question: "Is there a Fast Track lane?",
          answer:
            "Yes, Zakynthos Airport generally offers a Fast Track lane for security, which may be included with certain business class tickets or purchased separately.",
        },
      ],
    },
  },
  {
    key: "BJV",
    name: "Bodrum Airport",
    domain: "bodrum-airport.org",
    googleVerificationId: "YxZTdR6F_Gqidw-3K_zKMPzRTri7qrOZkapGAl_-NIo",
    city: "Bodrum",
    country: "Turkey",
    iata: "BJV",
    flightWidgets: {
      arrivals: "https://YOUR-WIDGET-PROVIDER.COM/jmk/arrivals",
      departures: "https://YOUR-WIDGET-PROVIDER.COM/jmk/departures",
    },
    // REAL WORLD DATA FOR BODRUM (BJV)
    faqs: {
      "car-park": [
        {
          question: "Is there parking available at Bodrum Airport?",
          answer:
            "Yes, there is a large open car park located opposite the Domestic and International terminals with a capacity of over 2,000 vehicles.",
        },
        {
          question: "How much does parking cost?",
          answer:
            "Parking fees start at approximately 50-90 TL for the first hour and around 175-270 TL for a full day (prices subject to change). Subscription cards are available for frequent flyers.",
        },
        {
          question: "Can I book a parking spot?",
          answer:
            "Official pre-booking is generally not required due to the large capacity. Payment is made at the toll booths upon exit or via automatic payment machines inside the terminals.",
        },
      ],
      about: [
        {
          question: "How far is the airport from Bodrum city center?",
          answer:
            "The airport is located 36km (22 miles) northeast of Bodrum city center. The drive typically takes 40-45 minutes depending on traffic.",
        },
        {
          question: "Is there an airport shuttle bus?",
          answer:
            "Yes, two companies operate shuttle buses: HAVAŞ and MUTTAŞ. They depart from the airport to Bodrum Bus Terminal (Otogar) after flight arrivals. The journey takes about 45 minutes.",
        },
        {
          question: "How much is a taxi to Bodrum?",
          answer:
            "Taxis are available 24/7 from the ranks outside Arrivals. All taxis use a taximeter. A trip to Bodrum city center generally costs between €25-€40 (paid in Turkish Lira), depending on your exact destination.",
        },
      ],
      facilities: [
        {
          question: "Is there free WiFi?",
          answer:
            "Yes, TAV Airports provides free WiFi. Connect to the 'TAV-FREE-WIFI' network. You will need to receive an SMS code to your mobile phone or scan your passport at a kiosk to log in.",
        },
        {
          question: "Are there duty-free shops?",
          answer:
            "Yes, Bodrum has extensive Duty Free areas operated by ATU Duty Free in both Arrivals and Departures, selling international brands, alcohol, tobacco, and cosmetics.",
        },
      ],
      "flight-status": [
        {
          question: "How early should I arrive?",
          answer:
            "For international flights, it is strongly recommended to arrive 3 hours before departure due to multiple security checks (one at the airport entrance and one at the gate). For domestic flights, 2 hours is sufficient.",
        },
      ],
      "carry-on": [
        {
          question: "What are the liquid restrictions?",
          answer:
            "Standard international rules apply (100ml containers in a clear 1L bag). However, be aware that there is often an initial security scan immediately upon entering the terminal building.",
        },
      ],
      customs: [
        {
          question: "What is the duty-free alcohol allowance?",
          answer:
            "Travelers entering Turkey can bring 1 liter of alcohol (>22% ABV) OR 2 liters of alcohol (<22% ABV).",
        },
        {
          question: "What is the tobacco allowance?",
          answer:
            "Turkey has generous tobacco allowances for arrivals: up to 600 cigarettes (3 cartons), 100 cigarillos, or 50 cigars per passenger over 18.",
        },
      ],
      assistance: [
        {
          question: "Is there PRM assistance?",
          answer:
            "Yes, TAV offers 'AssistME' services for passengers with reduced mobility. Please notify your airline at least 48 hours in advance. Dedicated meeting points are located at the terminal entrances.",
        },
      ],
      baggage: [
        {
          question: "Who do I contact for lost luggage?",
          answer:
            "For items lost on the plane, contact your airline's handling agent (Havaş, Çelebi, or TGS). For items lost inside the terminal, visit the Airport Information Desk or the Lost & Found office in the Arrivals hall.",
        },
      ],
      security: [
        {
          question: "How many security checks are there?",
          answer:
            "In Turkey, you typically undergo two security checks: one immediately upon entering the airport building (before check-in) and the standard one after passport control.",
        },
      ],
    },
  },
  {
    key: "KGS",
    name: "Kos Island Hippocrates Airport",
    domain: "kosairport-kgs.com",
    googleVerificationId: "OiIoJzHWCoLpKN1FoygmBQbZg3DD6YdIzZCRtjPYM2s",
    city: "Kos",
    country: "Greece",
    iata: "KGS",
    flightWidgets: {
      arrivals: "https://YOUR-WIDGET-PROVIDER.COM/jmk/arrivals",
      departures: "https://YOUR-WIDGET-PROVIDER.COM/jmk/departures",
    },
    // REAL WORLD DATA FOR KOS (KGS)
    faqs: {
      "car-park": [
        {
          question: "Is there parking available at Kos Airport?",
          answer:
            "Yes, there is a designated parking area located within a short walking distance from the terminal building.",
        },
        {
          question: "How much does parking cost?",
          answer:
            "Parking fees apply. The cost is approximately €2.00 for the first hour. Short-term and long-term options are available.",
        },
        {
          question: "Can I drop off passengers for free?",
          answer:
            "Yes, there is a designated drop-off zone directly outside the Departures area where you can stop briefly to unload passengers and luggage.",
        },
      ],
      about: [
        {
          question: "How far is the airport from Kos Town?",
          answer:
            "The airport is located near the village of Antimachia, approximately 24km (15 miles) from Kos Town. The drive typically takes 30-40 minutes.",
        },
        {
          question: "Is there a bus to the city center?",
          answer:
            "Yes, the KTEL Kos bus connects the airport to Kos Town, Mastichari, and Kardamena. The bus stop is located outside the terminal. Tickets to Kos Town cost approx €3.50 and the journey takes about 45 minutes.",
        },
        {
          question: "How much is a taxi to Kos Town?",
          answer:
            "Taxis are available at the rank outside Arrivals. A ride to Kos Town generally costs between €40-€50. During peak season (July-August), queues can be long, so pre-booking a transfer is recommended.",
        },
      ],
      facilities: [
        {
          question: "Is there free WiFi?",
          answer:
            "Yes, Kos Airport offers free unlimited WiFi for all passengers. Select the network 'Fraport-Free' on your device and launch your browser to connect.",
        },
        {
          question: "Are there ATMs?",
          answer:
            "Yes, ATMs (including Eurobank and Euronet) are available in the airport terminal for cash withdrawals.",
        },
      ],
      "flight-status": [
        {
          question: "How early should I arrive?",
          answer:
            "For domestic flights, arriving 90 minutes before departure is sufficient. For international charter flights, especially during summer, we recommend arriving at least 2 to 2.5 hours early due to potential queues at check-in and security.",
        },
      ],
      "carry-on": [
        {
          question: "What are the liquid restrictions?",
          answer:
            "Standard EU rules apply: Liquids, aerosols, and gels must be in containers of 100ml or less, placed inside a single, transparent, re-sealable plastic bag (max capacity 1 liter).",
        },
      ],
      customs: [
        {
          question: "Do I need to declare cash?",
          answer:
            "If you are traveling from a non-EU country with €10,000 or more in cash (or equivalent), you must declare it to Customs authorities upon arrival.",
        },
      ],
      assistance: [
        {
          question: "How do I request PRM assistance?",
          answer:
            "You must request special assistance through your airline or travel agent at least 48 hours before your flight. Upon arrival, present yourself at the check-in counter or the designated PRM assistance point.",
        },
      ],
      baggage: [
        {
          question: "Who do I contact for lost luggage?",
          answer:
            "For bags lost on the flight, contact your airline directly. For items lost inside the terminal building, contact the Kos Airport Lost & Found at +30 22420 56000.",
        },
      ],
      security: [
        {
          question: "Is there a Fast Track lane?",
          answer:
            "Yes, Kos Airport offers a 'Fast Lane' service for security checks. Access may be included with your ticket (Business/Flex) or purchased separately if available.",
        },
      ],
    },
  },
  {
    key: "CFU",
    name: "Corfu Ioannis Kapodistrias Airport",
    domain: "corfuairport-cfu.com",
    googleVerificationId: "fq-uuqzpjkoo9QtGil_je3YBtmCmTRw9CTAk2Jw925I",
    city: "Corfu",
    country: "Greece",
    iata: "CFU",
    flightWidgets: {
      arrivals: "https://YOUR-WIDGET-PROVIDER.COM/jmk/arrivals",
      departures: "https://YOUR-WIDGET-PROVIDER.COM/jmk/departures",
    },
    // REAL WORLD DATA FOR CORFU (CFU)
    faqs: {
      "car-park": [
        {
          question: "Is there parking available at Corfu Airport?",
          answer:
            "Yes, there is a large official parking area (P1) located directly opposite the terminal building, just a 2-minute walk away.",
        },
        {
          question: "How much does parking cost?",
          answer:
            "The first 20 minutes are free for drop-offs. After that, rates start at approximately €6.00 for the first hour and €12.00 for up to 24 hours. Long-term options are available.",
        },
        {
          question: "Can I book a parking spot?",
          answer:
            "Pre-booking is not mandatory but is recommended during the peak summer season (July-August) when demand is highest.",
        },
      ],
      about: [
        {
          question: "How far is the airport from Corfu Town?",
          answer:
            "The airport is located just 3km (1.8 miles) south of Corfu Town. The drive typically takes only 10-15 minutes depending on traffic.",
        },
        {
          question: "Is there a bus to the city center?",
          answer:
            "Yes, the Corfu City Blue Bus No. 15 connects the airport to Corfu Town (San Rocco Square) and the Port. The bus stop is directly outside the terminal. Tickets cost around €1.20 (kiosk) or €1.70 (on board).",
        },
        {
          question: "How much is a taxi to Corfu Town?",
          answer:
            "Taxis are available 24/7 at the rank outside Arrivals. A ride to Corfu Town usually costs between €15-€25. During summer, queues can be long, so pre-booking a transfer is advised.",
        },
      ],
      facilities: [
        {
          question: "Is there free WiFi?",
          answer:
            "Yes, Corfu Airport offers free unlimited WiFi. Connect to the network 'Fraport-Free' and launch your browser to log in.",
        },
        {
          question: "Are there ATMs and currency exchange?",
          answer:
            "Yes, ATMs from major Greek banks (Piraeus, Alpha, Euronet) and a OneXchange currency exchange booth are located in the Arrivals area.",
        },
      ],
      "flight-status": [
        {
          question: "How early should I arrive?",
          answer:
            "For international flights, especially to the UK or Germany during summer, we strongly recommend arriving at least 2.5 hours before departure. For domestic flights to Athens, 90 minutes is sufficient.",
        },
      ],
      "carry-on": [
        {
          question: "What are the liquid restrictions?",
          answer:
            "Standard EU rules apply: Liquids must be in containers of 100ml or less, placed in a single, transparent, re-sealable 1-liter plastic bag.",
        },
      ],
      customs: [
        {
          question: "Do I need to declare cash?",
          answer:
            "If traveling from outside the EU with €10,000 or more in cash (or equivalent), you must declare it to Customs authorities upon arrival.",
        },
      ],
      assistance: [
        {
          question: "How do I request PRM assistance?",
          answer:
            "You must notify your airline at least 48 hours before your flight. Upon arrival, proceed to the check-in counter or the dedicated PRM assistance point at the terminal entrance.",
        },
      ],
      baggage: [
        {
          question: "Who do I contact for lost luggage?",
          answer:
            "For items lost on the plane, contact your airline's ground handler (Goldair, Skyserv, or Swissport). For items lost inside the terminal, contact the Airport Information Desk at +30 26610 89600.",
        },
      ],
      security: [
        {
          question: "Is there a Fast Track lane?",
          answer:
            "Yes, Corfu Airport offers a 'Fast Lane' service to bypass security queues. You can purchase access online or it may be included with certain flexible/business class tickets.",
        },
      ],
    },
  },
  {
    key: "EFL",
    name: "Kefalonia Anna Pollatou Airport",
    domain: "kefaloniaairport.com",
    googleVerificationId: "BoSCpjZlPg9jBwid569XRlKOA55YOt8-eAIuXVAQqD4",
    city: "Kefalonia",
    country: "Greece",
    iata: "EFL",
    flightWidgets: {
      arrivals: "https://YOUR-WIDGET-PROVIDER.COM/jmk/arrivals",
      departures: "https://YOUR-WIDGET-PROVIDER.COM/jmk/departures",
    },
    // REAL WORLD DATA FOR KEFALONIA (EFL)
    faqs: {
      "car-park": [
        {
          question: "Is there parking available at Kefalonia Airport?",
          answer:
            "Yes, there is an official parking lot located immediately opposite the terminal building, operating 24/7.",
        },
        {
          question: "How much does parking cost?",
          answer:
            "Parking fees start at approximately €3.50 for the first hour. A full day (up to 24 hours) costs around €12.00. Payment can be made via automatic machines before exiting.",
        },
        {
          question: "Can I just drop someone off?",
          answer:
            "Yes, there is a designated drop-off area in front of the terminal where you can stop briefly for free to unload passengers and luggage.",
        },
      ],
      about: [
        {
          question: "How far is the airport from Argostoli?",
          answer:
            "The airport is located about 8km (5 miles) south of Argostoli, the island's capital. The drive usually takes 15-20 minutes.",
        },
        {
          question: "Is there a bus to the main towns?",
          answer:
            "Yes, the KTEL bus runs between the airport and Argostoli bus station. From there, you can transfer to other towns like Sami or Skala. The ticket costs approx €2.00. Note that the service is less frequent outside of summer months.",
        },
        {
          question: "How much is a taxi to Argostoli or Skala?",
          answer:
            "Taxis are available at the rank outside Arrivals. A trip to Argostoli costs around €20-€25. A trip to Skala is longer (approx. 50-60 mins) and can cost upwards of €55-€65.",
        },
      ],
      facilities: [
        {
          question: "Is there free WiFi?",
          answer:
            "Yes, unlimited free WiFi is available throughout the terminal. Connect to the 'Fraport-Free' network and launch your browser to log in.",
        },
        {
          question: "Are there ATMs and currency exchange?",
          answer:
            "Yes, ATMs (including Euronet and Eurobank) are available in the terminal. There is also a currency exchange desk in the Arrivals area.",
        },
      ],
      "flight-status": [
        {
          question: "How early should I arrive?",
          answer:
            "The terminal can get very busy during peak summer charter waves. We recommend arriving 2 hours before your flight to ensure sufficient time for check-in and security.",
        },
      ],
      "carry-on": [
        {
          question: "What are the liquid restrictions?",
          answer:
            "Standard EU rules apply: Liquids must be in containers of 100ml or less, placed in a single, transparent, re-sealable 1-liter plastic bag.",
        },
      ],
      customs: [
        {
          question: "What are the limits for bringing cash?",
          answer:
            "Travelers arriving from outside the EU must declare cash amounts of €10,000 or more (or equivalent) to Customs.",
        },
      ],
      assistance: [
        {
          question: "How do I request PRM assistance?",
          answer:
            "You must request assistance through your airline at least 48 hours before departure. Upon arrival at EFL, look for the designated assistance points or report to your check-in counter.",
        },
      ],
      baggage: [
        {
          question: "Who do I contact for lost luggage?",
          answer:
            "For bags missing from the carousel, contact your airline's ground handling agent immediately. For items lost inside the terminal (like phones or keys), contact the Airport Lost & Found at +30 26710 41511.",
        },
      ],
      security: [
        {
          question: "Is there a Fast Track lane?",
          answer:
            "Yes, Kefalonia Airport offers a 'Fast Lane' service to skip security queues. It costs approximately €5.00 and can be purchased online or at the airport.",
        },
      ],
    },
  },
  {
    key: "MLO",
    name: "Milos Island National Airport",
    domain: "milosairport-mlo.com",
    googleVerificationId: "VSKeDFiTf0Qmzs57cnSPwzzjfJPcVzzRhoQQHXOEFrw",
    city: "Milos",
    country: "Greece",
    iata: "MLO",
    flightWidgets: {
      arrivals: "https://YOUR-WIDGET-PROVIDER.COM/jmk/arrivals",
      departures: "https://YOUR-WIDGET-PROVIDER.COM/jmk/departures",
    },
    // REAL WORLD DATA FOR MILOS (MLO)
    faqs: {
      "car-park": [
        {
          question: "Is there parking available at Milos Airport?",
          answer:
            "Yes, there is a small public parking lot located just a few meters from the terminal entrance.",
        },
        {
          question: "How much does parking cost?",
          answer:
            "Parking at Milos Airport is currently free of charge. However, the lot is very small (only about 28 spaces), so finding a spot in July and August can be extremely difficult.",
        },
        {
          question: "Can I pre-book a parking spot?",
          answer:
            "No, the parking operates on a strict first-come, first-served basis. Pre-booking is not available.",
        },
      ],
      about: [
        {
          question: "How far is the airport from Adamas (Port)?",
          answer:
            "The airport is located 5km (3 miles) southeast of Adamas, the island's main port. The drive takes about 10-15 minutes.",
        },
        {
          question: "Is there a bus to Adamas?",
          answer:
            "Yes, the local KTEL bus stops just outside the airport gate. It connects the airport to Adamas (Port). Tickets cost €2.00 and are purchased from the driver (cash only). Frequencies vary significantly by season.",
        },
        {
          question: "How much is a taxi to Plaka or Pollonia?",
          answer:
            "Taxis are available but limited. A ride to Adamas costs around €20, to Plaka ~€25-30, and to Pollonia ~€35. We recommend pre-booking as queues can be long.",
        },
      ],
      facilities: [
        {
          question: "Is there free WiFi?",
          answer:
            "Yes, free public WiFi is available inside the terminal area.",
        },
        {
          question: "Is there an ATM at the airport?",
          answer:
            "No, there is currently no ATM inside the terminal building. We strongly recommend withdrawing cash in Adamas or Plaka before heading to the airport.",
        },
        {
          question: "Are there shops or cafes?",
          answer:
            "There is a small snack bar selling coffee, water, and light snacks. There are no duty-free shops as most flights are domestic connections.",
        },
      ],
      "flight-status": [
        {
          question: "How early should I arrive?",
          answer:
            "Since the terminal is very small and handles domestic flights (mostly ATR/Dash-8 aircraft), arriving 60-90 minutes before your departure is usually sufficient.",
        },
      ],
      "carry-on": [
        {
          question: "What are the rules for liquids?",
          answer:
            "Standard EU rules apply (100ml containers in a clear plastic bag). Note that cabin baggage space on smaller island aircraft is very limited, so larger carry-ons may need to be checked in.",
        },
      ],
      customs: [
        {
          question: "Do I go through customs?",
          answer:
            "No, flights from Milos are domestic (usually to Athens). You will not pass through customs or passport control unless you are on a private international charter.",
        },
      ],
      assistance: [
        {
          question: "Is the airport accessible?",
          answer:
            "Yes, the terminal is on a single level and is accessible. Please notify your airline 48 hours in advance if you require wheelchair assistance from check-in to the aircraft.",
        },
      ],
      baggage: [
        {
          question: "Who do I contact for lost luggage?",
          answer:
            "For bags lost on the flight, speak to the airline ground staff immediately upon arrival. For items lost in the terminal, you can contact the airport information desk at +30 22870 23615.",
        },
      ],
      security: [
        {
          question: "Is there a Fast Track lane?",
          answer:
            "No, Milos Airport is a small regional airport with a single security checkpoint, so there is no separate Fast Track lane.",
        },
      ],
    },
  },
  {
    key: "ATH",
    name: "Athens International Airport",
    domain: "athensairport-ath.com",
    googleVerificationId: "E1jE8KXdQwdlNJfvHWwZ7dS_bDo9FVmKvj4hz5NFnhk",
    city: "Athens",
    country: "Greece",
    iata: "ATH",
    flightWidgets: {
      arrivals: "https://YOUR-WIDGET-PROVIDER.COM/jmk/arrivals",
      departures: "https://YOUR-WIDGET-PROVIDER.COM/jmk/departures",
    },
    // REAL WORLD DATA FOR ATHENS (ATH)
    faqs: {
      "car-park": [
        {
          question: "Is there parking available at Athens Airport?",
          answer:
            "Yes, there are two main options: Short Term Parking (P1 & P2) located just across from the arrivals/departures curbs, and Long Term Parking (P3) which is cheaper and connected by a shuttle bus (or a 10-minute walk).",
        },
        {
          question: "How much does parking cost?",
          answer:
            "In Short Term (P1/P2), the first 20 minutes are free for drop-offs. After that, it costs roughly €6.00 for the first hour. Long Term (P3) starts at around €13.00 per day, but you can get significant discounts by booking online in advance (e.g., €5/day for Economy spots).",
        },
        {
          question: "Is there Valet Parking?",
          answer:
            "Yes, Executive Valet Parking is available at the Departures level (Entrance 3). You hand over your keys and walk straight to check-in.",
        },
      ],
      about: [
        {
          question: "How far is the airport from Athens city center?",
          answer:
            "The airport is located 33km (20 miles) southeast of Athens city center (Syntagma). The drive typically takes 35-45 minutes depending on traffic.",
        },
        {
          question: "How do I get to the city by Metro?",
          answer:
            "Take Metro Line 3 (Blue Line) directly from the airport station. It runs every 36 minutes. The trip to Syntagma Square takes about 40 minutes. A one-way ticket costs €9.00.",
        },
        {
          question: "Are there buses to the center or port?",
          answer:
            "Yes, there are 24/7 Express Buses. The X95 goes to Syntagma Square (City Center) and the X96 goes to Piraeus Port. Tickets cost €5.50 and can be bought at the kiosk outside Arrivals.",
        },
        {
          question: "How much is a taxi to Athens?",
          answer:
            "Taxis have a flat rate to the city center ring: €40 during the day (05:00–23:59) and €55 at night (00:00–05:00). The queue is located at Exit 3 of Arrivals.",
        },
      ],
      facilities: [
        {
          question: "Is there free WiFi?",
          answer:
            "Yes, select the network 'ATH Free Wi-Fi'. It offers free, unlimited access in 60-minute sessions. After 60 minutes, you simply need to log in again.",
        },
        {
          question: "Are there ATMs and banks?",
          answer:
            "Yes, the airport has a full-service Alpha Bank branch (Arrivals) and numerous ATMs from Piraeus, Eurobank, National Bank, and Euronet located throughout both Arrivals and Departures.",
        },
        {
          question: "Is there a pharmacy?",
          answer:
            "Yes, there is a pharmacy located on the Arrivals level (free access area), open daily from 06:00 to 24:00.",
        },
      ],
      "flight-status": [
        {
          question: "How early should I arrive?",
          answer:
            "For domestic flights, arrive 2 hours before departure. For international/non-Schengen flights, we recommend arriving 2.5 to 3 hours early, especially during peak summer season, to clear passport control and security.",
        },
      ],
      "carry-on": [
        {
          question: "What are the liquid restrictions?",
          answer:
            "Standard EU rules apply: Liquids must be in containers of 100ml or less, placed in a single, transparent, re-sealable 1-liter plastic bag. However, some newer security lanes at ATH use advanced scanners that may allow liquids to remain in bags—follow staff instructions.",
        },
      ],
      customs: [
        {
          question: "Do I need to declare cash?",
          answer:
            "If you are entering or leaving the EU with €10,000 or more in cash (or equivalent), you must declare it to Customs authorities.",
        },
      ],
      assistance: [
        {
          question: "How do I request PRM assistance?",
          answer:
            "Notify your airline at least 48 hours before your flight. Upon arrival at ATH, use the designated call points located at all terminal entrances or proceed to your airline's check-in counter.",
        },
      ],
      baggage: [
        {
          question: "Who do I contact for lost luggage?",
          answer:
            "If your bag didn't arrive, contact your airline's handling agent (Goldair, Skyserv, or Swissport) in the baggage hall. For items lost in the terminal, contact the Police Lost & Found office at +30 210 3530515 (Arrivals level).",
        },
        {
          question: "Is there luggage storage?",
          answer:
            "Yes, 'Care4Bag' offers luggage storage services located on the Arrivals level (Exit 1).",
        },
      ],
      security: [
        {
          question: "Is there a Fast Track lane?",
          answer:
            "Yes, ATH offers a 'Fast Lane' to bypass security queues. It costs around €6-10 depending on the vendor or may be complimentary with Business/Gold status. You can buy it online or at automatic kiosks in the terminal.",
        },
      ],
    },
  },
  {
    key: "RHO",
    name: "Rhodes Diagoras Airport",
    domain: "rhodesairport-rho.com",
    googleVerificationId: "dnCYq6E8ZOkbfVHuYXJ_NoyK0un79ZaiCugRI5AN9Us",
    city: "Rhodes",
    country: "Greece",
    iata: "RHO",
    flightWidgets: {
      arrivals: "https://YOUR-WIDGET-PROVIDER.COM/jmk/arrivals",
      departures: "https://YOUR-WIDGET-PROVIDER.COM/jmk/departures",
    },
    // REAL WORLD DATA FOR RHODES (RHO)
    faqs: {
      "car-park": [
        {
          question: "Is there parking available at Rhodes Airport?",
          answer:
            "Yes, there is an official parking lot located directly opposite the terminal building. It operates 24/7 and is within short walking distance.",
        },
        {
          question: "How much does parking cost?",
          answer:
            "The first 20 minutes are free for passenger drop-off/pick-up. After that, rates start at approximately €3.00 for the first hour. Long-term parking is also available.",
        },
        {
          question: "Can I pre-book a parking spot?",
          answer:
            "Pre-booking is not generally required as there is decent capacity, but during peak August weeks, it is advisable to arrive early or use alternative transport.",
        },
      ],
      about: [
        {
          question: "How far is the airport from Rhodes Town?",
          answer:
            "The airport is located 14km (9 miles) southwest of Rhodes Town. The drive typically takes 20-30 minutes depending on traffic.",
        },
        {
          question: "Is there a bus to the city center?",
          answer:
            "Yes, the public bus (DES RODA) runs frequently between the airport and Rhodes Town. The bus stop is located between the old and new terminals. Tickets cost roughly €2.50.",
        },
        {
          question: "How much is a taxi to Rhodes Town or Lindos?",
          answer:
            "Taxis are available at the rank outside Arrivals. A trip to Rhodes Town costs around €30-€35. A trip to Lindos is much further and costs approximately €75-€85.",
        },
      ],
      facilities: [
        {
          question: "Is there free WiFi?",
          answer:
            "Yes, unlimited free WiFi is available throughout the terminal. Connect to the 'Fraport-Free' network and launch your browser to log in.",
        },
        {
          question: "Are there ATMs and currency exchange?",
          answer:
            "Yes, ATMs from major banks (Euronet, Eurobank) are located in the terminal. A OneXchange currency booth is also available in the Arrivals area.",
        },
      ],
      "flight-status": [
        {
          question: "How early should I arrive?",
          answer:
            "Rhodes is a very busy summer destination. For international charter flights, we strongly recommend arriving at least 2.5 to 3 hours before departure. For domestic flights, 2 hours is recommended.",
        },
      ],
      "carry-on": [
        {
          question: "What are the liquid restrictions?",
          answer:
            "Standard EU rules apply: Liquids must be in containers of 100ml or less, placed in a single, transparent, re-sealable 1-liter plastic bag.",
        },
      ],
      customs: [
        {
          question: "Do I need to declare cash?",
          answer:
            "If traveling from outside the EU with €10,000 or more in cash (or equivalent), you must declare it to Customs authorities upon arrival.",
        },
      ],
      assistance: [
        {
          question: "How do I request PRM assistance?",
          answer:
            "You must notify your airline at least 48 hours before your flight. Upon arrival at RHO, use the designated call points at the terminal entrance or proceed to your check-in counter.",
        },
      ],
      baggage: [
        {
          question: "Who do I contact for lost luggage?",
          answer:
            "For bags lost on the plane, contact your airline's ground handler (Skyserv, Swissport, or Goldair). For items lost inside the terminal, contact the Airport Information Desk at +30 22410 83222.",
        },
      ],
      security: [
        {
          question: "Is there a Fast Track lane?",
          answer:
            "Yes, Rhodes Airport offers a 'Fast Lane' service to bypass security queues. You can purchase it (approx. €6) via airlines like Aegean or at the airport if available.",
        },
      ],
    },
  },
  {
    key: "HER",
    name: "Heraklion Nikos Kazantzakis Airport",
    domain: "heraklionairport-her.com",
    googleVerificationId: "f9SsQMD_ZnJl4__tid4SQ_u7AkNxeyIfLrHwMRne9Gs",
    city: "Heraklion",
    country: "Greece",
    iata: "HER",
    flightWidgets: {
      arrivals: "https://YOUR-WIDGET-PROVIDER.COM/jmk/arrivals",
      departures: "https://YOUR-WIDGET-PROVIDER.COM/jmk/departures",
    },
    // REAL WORLD DATA FOR HERAKLION (HER)
    faqs: {
      "car-park": [
        {
          question: "Is there parking available at Heraklion Airport?",
          answer:
            "Yes, there is a designated municipal parking area located directly opposite the terminal building. It is open 24/7.",
        },
        {
          question: "How much does parking cost?",
          answer:
            "Parking rates are quite affordable. The first 30 minutes cost roughly €1.50. A full day costs approximately €11.00. Payment is made at the automated machines before exiting.",
        },
        {
          question: "Can I drop off passengers for free?",
          answer:
            "Yes, there is a drop-off lane directly in front of the Departures hall where you can stop briefly to unload luggage. Vehicles must not be left unattended.",
        },
      ],
      about: [
        {
          question: "How far is the airport from Heraklion city center?",
          answer:
            "The airport is located just 4km (2.5 miles) east of the city center. The drive typically takes 10-15 minutes.",
        },
        {
          question: "Is there a bus to the city?",
          answer:
            "Yes, the Blue City Bus (lines 6, 11, 12) connects the airport to Eleftherias Square (City Center). The bus stop is just outside the terminal. Tickets cost roughly €1.20-€2.00.",
        },
        {
          question: "How much is a taxi to the city center?",
          answer:
            "Taxis are available at the rank outside Arrivals. A trip to Heraklion city center typically costs between €15-€20 depending on traffic and luggage.",
        },
      ],
      facilities: [
        {
          question: "Is there free WiFi?",
          answer:
            "Yes, free WiFi is available throughout the terminal. Look for the network named 'Airport Wifi Hotspot' or similar and follow the login instructions.",
        },
        {
          question: "Are there ATMs?",
          answer:
            "Yes, ATMs from Piraeus Bank, National Bank of Greece, and Euronet are located in the Arrivals area.",
        },
      ],
      "flight-status": [
        {
          question: "How early should I arrive?",
          answer:
            "Heraklion is one of the busiest airports in Greece during summer. We strongly recommend arriving at least 2.5 hours before your flight to clear check-in and security.",
        },
      ],
      "carry-on": [
        {
          question: "What are the liquid restrictions?",
          answer:
            "Standard EU rules apply: Liquids must be in containers of 100ml or less, placed inside a single, transparent, re-sealable 1-liter plastic bag.",
        },
      ],
      customs: [
        {
          question: "Do I need to declare cash?",
          answer:
            "If you are entering or leaving the EU with €10,000 or more in cash (or equivalent), you must declare it to Customs authorities.",
        },
      ],
      assistance: [
        {
          question: "How do I request PRM assistance?",
          answer:
            "You must notify your airline at least 48 hours before your flight. Upon arrival at HER, you can report to the dedicated PRM assistance point or your check-in counter.",
        },
      ],
      baggage: [
        {
          question: "Who do I contact for lost luggage?",
          answer:
            "For bags missing from the flight, contact your airline's handling agent. For items lost inside the terminal building, contact the Airport Information Desk at +30 2810 397129.",
        },
      ],
      security: [
        {
          question: "Is there a Fast Track lane?",
          answer:
            "Yes, Heraklion Airport offers a 'Fast Lane' service for security checks. Access can often be purchased as an add-on with airlines like Sky Express or bought separately.",
        },
      ],
    },
  },
  {
    key: "JTR",
    name: "Santorini Thira Airport",
    domain: "santoriniairport-jtr.com",
    googleVerificationId: "V52iuoITJxGUdgzhWJH9M2GBjoHqd8WpSC71qZO7dzQ",
    city: "Santorini",
    country: "Greece",
    iata: "JTR",
    flightWidgets: {
      arrivals: "https://YOUR-WIDGET-PROVIDER.COM/jmk/arrivals",
      departures: "https://YOUR-WIDGET-PROVIDER.COM/jmk/departures",
    },
    // REAL WORLD DATA FOR SANTORINI (JTR)
    faqs: {
      "car-park": [
        {
          question: "Is there parking available at Santorini Airport?",
          answer:
            "Yes, there is a designated public parking area located directly opposite the terminal building.",
        },
        {
          question: "How much does parking cost?",
          answer:
            "Parking at Santorini Airport is currently free of charge. However, spaces are extremely limited and finding a spot during the summer season is very difficult.",
        },
        {
          question: "Can I pre-book a parking spot?",
          answer:
            "No, the parking operates on a strict first-come, first-served basis. Due to high demand, we recommend using a transfer service instead of renting a car for airport pickup.",
        },
      ],
      about: [
        {
          question: "How far is the airport from Fira (Thira)?",
          answer:
            "The airport is located approximately 6km (4 miles) southeast of Fira, the island's capital. The drive takes 10-15 minutes, but traffic can be heavy in summer.",
        },
        {
          question: "Is there a bus to Fira or Oia?",
          answer:
            "Yes, the KTEL bus runs from the airport to the main bus station in Fira. To go to Oia, Kamari, or Perissa, you must take the bus to Fira first and then transfer to a different bus. Tickets cost roughly €1.80 (cash only).",
        },
        {
          question: "How easy is it to get a taxi?",
          answer:
            "Taxis are available outside Arrivals, but there are only about 40 taxis serving the entire island. In peak season, queues can last over an hour. We strongly recommend pre-booking a private transfer or hotel shuttle.",
        },
      ],
      facilities: [
        {
          question: "Is there free WiFi?",
          answer:
            "Yes, unlimited free WiFi is available throughout the terminal. Connect to the 'Fraport-Free' network and launch your browser to log in.",
        },
        {
          question: "Are there ATMs and currency exchange?",
          answer:
            "Yes, ATMs (Euronet, Eurobank) and a OneXchange currency exchange booth are available in the Arrivals hall and Airside area.",
        },
      ],
      "flight-status": [
        {
          question: "How early should I arrive?",
          answer:
            "Santorini is one of the busiest airports in Greece. For international flights, arrive at least 2.5 hours before departure. For domestic flights to Athens, 90 minutes is recommended. Expect queues outside the terminal during August.",
        },
      ],
      "carry-on": [
        {
          question: "What are the liquid restrictions?",
          answer:
            "Standard EU rules apply: Liquids must be in containers of 100ml or less, placed in a single, transparent, re-sealable 1-liter plastic bag.",
        },
      ],
      customs: [
        {
          question: "Do I need to declare cash?",
          answer:
            "If you are arriving from a non-EU country with €10,000 or more in cash (or equivalent), you must declare it to Customs authorities.",
        },
      ],
      assistance: [
        {
          question: "How do I request PRM assistance?",
          answer:
            "You must notify your airline at least 48 hours before your flight. Upon arrival at JTR, proceed to the designated PRM assistance point in the check-in area.",
        },
      ],
      baggage: [
        {
          question: "Who do I contact for lost luggage?",
          answer:
            "For bags missing from the flight, contact your airline's ground handler (Swissport, Skyserv, or Goldair). For items lost inside the terminal, contact the Airport Lost & Found at +30 22864 40060.",
        },
      ],
      security: [
        {
          question: "Is there a Fast Track lane?",
          answer:
            "Yes, Santorini Airport offers a 'Fast Lane' service to bypass security queues. It can be purchased online or at the information desk and is highly recommended during peak summer months.",
        },
      ],
    },
  },
  {
    key: "SKG",
    name: "Thessaloniki Makedonia Airport",
    domain: "thessalonikiairport-skg.com",
    googleVerificationId: "X3iehM4-47Z5n6ydBpInORPj-EiunkiEjMflPAlei8o",
    city: "Thessaloniki",
    country: "Greece",
    iata: "SKG",
    flightWidgets: {
      arrivals: "https://YOUR-WIDGET-PROVIDER.COM/jmk/arrivals",
      departures: "https://YOUR-WIDGET-PROVIDER.COM/jmk/departures",
    },
    // REAL WORLD DATA FOR THESSALONIKI (SKG)
    faqs: {
      "car-park": [
        {
          question: "Is there parking available at Thessaloniki Airport?",
          answer:
            "Yes, there are four official parking lots. P4 is Short Term (closest to terminal). P6, P7, and P8 are Long Term and slightly cheaper.",
        },
        {
          question: "How much does parking cost?",
          answer:
            "Parking starts at €4.00 for the first hour in P4. For long-term parking (P6, P7, P8), rates are approximately €25 for the first day and get cheaper for longer stays (e.g., ~€50 for a week).",
        },
        {
          question: "Is there free parking for drop-offs?",
          answer:
            "No, unlike some other airports, there is no free drop-off period in the main P4 lot. You will be charged the 1-hour rate (€4.00) even for a short stay. It is recommended to drop passengers quickly at the Departures curb if permitted.",
        },
      ],
      about: [
        {
          question: "How far is the airport from the city center?",
          answer:
            "The airport is located 15km (9 miles) southeast of the city center (Aristotelous Square). The drive typically takes 30 minutes in light traffic, but up to 60 minutes during rush hour.",
        },
        {
          question: "Is there a bus to the city center?",
          answer:
            "Yes, the OASTH bus 01X (Day) and 01N (Night) connects the airport to the city center and the Intercity Bus Station (KTEL). Buses run 24/7 every 20-25 minutes. Tickets cost €1.80 and can be bought at the kiosk or on board (exact change only).",
        },
        {
          question: "How much is a taxi to the city center?",
          answer:
            "Taxis have a regulated flat fare to the city center: €25.00 during the day (05:00–00:00) and €35.00 at night (00:00–05:00).",
        },
      ],
      facilities: [
        {
          question: "Is there free WiFi?",
          answer:
            "Yes, unlimited free WiFi is available throughout the terminal. Connect to the 'Fraport-Free' network and launch your browser to log in.",
        },
        {
          question: "Are there ATMs and banks?",
          answer:
            "Yes, ATMs from all major Greek banks (Piraeus, Alpha, Eurobank, National Bank) are located in the Arrivals area.",
        },
        {
          question: "Is there luggage storage?",
          answer:
            "Yes, luggage storage lockers are available 24/7, located near the international arrivals area. Prices vary by locker size and duration.",
        },
      ],
      "flight-status": [
        {
          question: "How early should I arrive?",
          answer:
            "We recommend arriving 2 hours before domestic flights and at least 2.5 to 3 hours before international flights, especially during the summer peak season when security queues can be long.",
        },
      ],
      "carry-on": [
        {
          question: "What are the liquid restrictions?",
          answer:
            "Standard EU rules apply: Liquids must be in containers of 100ml or less, placed in a single, transparent, re-sealable 1-liter plastic bag.",
        },
      ],
      customs: [
        {
          question: "Do I need to declare cash?",
          answer:
            "If you are entering or leaving the EU with €10,000 or more in cash (or equivalent), you must declare it to Customs authorities.",
        },
      ],
      assistance: [
        {
          question: "How do I request PRM (Disabled) assistance?",
          answer:
            "You must notify your airline at least 48 hours before your flight. Upon arrival, present yourself at the check-in counter or the designated PRM assistance point located at the terminal entrance.",
        },
      ],
      baggage: [
        {
          question: "Who do I contact for lost luggage?",
          answer:
            "For bags missing from the carousel, contact your airline's ground handler (Goldair, Skyserv, or Swissport). For items lost inside the terminal, contact the Airport Information Desk at +30 2310 985000.",
        },
      ],
      security: [
        {
          question: "Is there a Fast Track lane?",
          answer:
            "Yes, Thessaloniki Airport offers a 'Fast Lane' service to skip security queues. It costs approximately €6.00 and can be purchased online or at the automatic kiosks in the terminal.",
        },
      ],
    },
  },
];

// Lookup by domain
export function getAirportByDomain(host: string | null): AirportConfig | null {
  if (!host) return null;

  // Strip port and www
  const withoutPort = host.toLowerCase().split(":")[0];
  const normalized = withoutPort.replace(/^www\./, "");

  // 1) Match production domains
  const byDomain = AIRPORTS.find((airport) => airport.domain === normalized);
  if (byDomain) return byDomain;

  // 2) Match local dev hosts like jmk.local, pas.local, etc.
  const byDevHost = AIRPORTS.find(
    (airport) => `${airport.key.toLowerCase()}.local` === normalized
  );
  if (byDevHost) return byDevHost;

  return null;
}

// Lookup by airport key
export const airportByKey: Record<string, AirportConfig> = AIRPORTS.reduce(
  (map, airport) => {
    map[airport.key] = airport;
    return map;
  },
  {} as Record<string, AirportConfig>
);
