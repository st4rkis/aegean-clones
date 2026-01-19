"use client";

import AirlineDirectory, { Airline } from "@/components/AirlineDirectory";
import { useAirport } from "@/context/AirportContext";

// --- REAL WORLD DATA WITH VERIFIED STATIC IMAGES ---
const ALL_AIRLINES: Record<string, Airline[]> = {
  // 1. MYKONOS (JMK)
  JMK: [
    {
      id: 1,
      name: "Aegean Airlines",
      code: "A3",
      website: "aegeanair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/Aegean_Airlines_Logo_2020.svg",
    },
    {
      id: 2,
      name: "Sky Express",
      code: "GQ",
      website: "skyexpress.gr",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/Sky_Express_%28Greece%29_logo.svg",
    },
    {
      id: 3,
      name: "Olympic Air",
      code: "OA",
      website: "https://www.olympicair.com/",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/e/e1/Olympic_Air_logo.png",
    },
    {
      id: 4,
      name: "British Airways",
      code: "BA",
      website: "britishairways.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/BRITISH_AIRWAYS_logo.svg",
    },
    {
      id: 5,
      name: "easyJet",
      code: "U2",
      website: "https://www.easyjet.com/en",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/EasyJet_logo.svg",
    },
    {
      id: 6,
      name: "Transavia",
      code: "HV",
      website: "transavia.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Transavia_logo.svg/330px-Transavia_logo.svg.png",
    },
    {
      id: 7,
      name: "Volotea",
      code: "V7",
      website: "volotea.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/98/Volotea.svg",
    },
    {
      id: 8,
      name: "Vueling",
      code: "VY",
      website: "https://www.vueling.com/en",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/Logo_Vueling.svg",
    },
    {
      id: 9,
      name: "Lufthansa",
      code: "LH",
      website: "lufthansa.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lufthansa_Logo_2018.svg",
    },
    {
      id: 10,
      name: "Swiss Int. Air Lines",
      code: "LX",
      website: "swiss.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/1d/Swiss_new.svg",
    },
    {
      id: 11,
      name: "Austrian Airlines",
      code: "OS",
      website: "austrian.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Austrian_Airlines_Logo_neu.svg",
    },
    {
      id: 12,
      name: "Qatar Airways",
      code: "QR",
      website: "https://www.qatarairways.com/en/homepage.html",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/320px-Qatar_Airways_Logo.svg.png",
    },
    {
      id: 13,
      name: "flydubai",
      code: "FZ",
      website: "https://www.flydubai.com/en-gr/",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/79/Fly_Dubai_logo_2010_03.svg",
    },
    {
      id: 14,
      name: "Eurowings",
      code: "EW",
      website: "eurowings.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b4/Eurowings_Logo.svg",
    },
    {
      id: 15,
      name: "Edelweiss Air",
      code: "WK",
      website: "flyedelweiss.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/f/f3/Edelweiss_Air_wordmark.svg",
    },
    {
      id: 16,
      name: "Discover Airlines",
      code: "4Y",
      website: "discover-airlines.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/88/Logo_Discover_Airlines.svg",
    },
    {
      id: 17,
      name: "Air France",
      code: "AF",
      website: "airfrance.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Air_France_Logo.svg",
    },
    {
      id: 18,
      name: "Iberia",
      code: "IB",
      website: "https://www.iberia.com/es/?language=en",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/2/23/Logotipo_de_Iberia.svg",
    },
    {
      id: 19,
      name: "Neos",
      code: "NO",
      website: "https://www.neosair.com/en",
      logoUrl:
        "https://static.neosair.com/dam/jcr:f128399c-e626-4399-acf3-b85d8700f109/logo-neos.svg",
    },
    {
      id: 20,
      name: "Arkia",
      code: "IZ",
      website: "arkia.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/9b/Arkia_Israeli_logo.svg",
    },
    {
      id: 21,
      name: "Bluebird Airways",
      code: "BZ",
      website: "bluebirdair.com",
      logoUrl: "https://storage.aerocrs.com/305/system/Bluebird.png",
    },
    {
      id: 22,
      name: "Wizz Air",
      code: "W6",
      website: "https://www.wizzair.com/en-gb",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wizz_Air_logo.svg",
    },
    {
      id: 23,
      name: "Ryanair",
      code: "FR",
      website: "ryanair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Ryanair_logo.svg",
    },
  ],

  // 2. PAROS (PAS)
  PAS: [
    {
      id: 1,
      name: "Olympic Air",
      code: "OA",
      website: "https://www.olympicair.com/",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/e/e1/Olympic_Air_logo.png",
    },
    {
      id: 2,
      name: "Sky Express",
      code: "GQ",
      website: "skyexpress.gr",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/Sky_Express_%28Greece%29_logo.svg",
    },
    {
      id: 3,
      name: "Aegean Airlines",
      code: "A3",
      website: "aegeanair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/Aegean_Airlines_Logo_2020.svg",
    },
    {
      id: 4,
      name: "Avanti Air",
      code: "ATV",
      website: "avantiair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/c2/Avanti_Air_logo.svg",
    },
    {
      id: 5,
      name: "Smartwings",
      code: "QS",
      website: "smartwings.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Smartwings_logo.svg",
    },
  ],

  // 3. NAXOS (JNX)
  JNX: [
    {
      id: 1,
      name: "Olympic Air",
      code: "OA",
      website: "https://www.olympicair.com/",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/e/e1/Olympic_Air_logo.png",
    },
    {
      id: 2,
      name: "Sky Express",
      code: "GQ",
      website: "skyexpress.gr",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/Sky_Express_%28Greece%29_logo.svg",
    },
    {
      id: 3,
      name: "Aegean Airlines",
      code: "A3",
      website: "aegeanair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/Aegean_Airlines_Logo_2020.svg",
    },
  ],

  // 4. ZAKYNTHOS (ZTH)
  ZTH: [
    {
      id: 1,
      name: "Jet2.com",
      code: "LS",
      website: "jet2.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d6/Jet2Logo.svg",
    },
    {
      id: 2,
      name: "TUI Airways",
      code: "BY",
      website: "tui.co.uk",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/6f/TUI_Logo_2016.svg",
    },
    {
      id: 3,
      name: "easyJet",
      code: "U2",
      website: "https://www.easyjet.com/en",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/EasyJet_logo.svg",
    },
    {
      id: 4,
      name: "Ryanair",
      code: "FR",
      website: "ryanair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Ryanair_logo.svg",
    },
    {
      id: 5,
      name: "Wizz Air",
      code: "W6",
      website: "https://www.wizzair.com/en-gb",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wizz_Air_logo.svg",
    },
    {
      id: 6,
      name: "Sky Express",
      code: "GQ",
      website: "skyexpress.gr",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/Sky_Express_%28Greece%29_logo.svg",
    },
    {
      id: 7,
      name: "Olympic Air",
      code: "OA",
      website: "https://www.olympicair.com/",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/e/e1/Olympic_Air_logo.png",
    },
    {
      id: 8,
      name: "Condor",
      code: "DE",
      website: "condor.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/75/Condor_logo.svg",
    },
    {
      id: 9,
      name: "Eurowings",
      code: "EW",
      website: "eurowings.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b4/Eurowings_Logo.svg",
    },
    {
      id: 10,
      name: "Volotea",
      code: "V7",
      website: "volotea.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/98/Volotea.svg",
    },
    {
      id: 11,
      name: "Transavia",
      code: "HV",
      website: "transavia.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Transavia_logo.svg/330px-Transavia_logo.svg.png",
    },
    {
      id: 12,
      name: "Smartwings",
      code: "QS",
      website: "smartwings.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Smartwings_logo.svg",
    },
    {
      id: 13,
      name: "British Airways",
      code: "BA",
      website: "britishairways.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/BRITISH_AIRWAYS_logo.svg",
    },
    {
      id: 14,
      name: "Brussels Airlines",
      code: "SN",
      website: "brusselsairlines.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/Brussels_airlines_logo_2021.svg",
    },
    {
      id: 15,
      name: "Finnair",
      code: "AY",
      website: "finnair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/Finnair_Logo.svg",
    },
    {
      id: 16,
      name: "Air Serbia",
      code: "JU",
      website: "airserbia.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/f/f7/Air_Serbia_logo.svg",
    },
  ],

  // 5. BODRUM (BJV)
  BJV: [
    {
      id: 1,
      name: "Pegasus Airlines",
      code: "PC",
      website: "flypgs.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pegasus_Airlines_logo.svg",
    },
    {
      id: 2,
      name: "Turkish Airlines",
      code: "TK",
      website: "turkishairlines.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/e/ef/Turkish_Airlines_logo_2012.svg",
    },
    {
      id: 3,
      name: "SunExpress",
      code: "XQ",
      website: "sunexpress.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/SunExpress_Logo.svg",
    },
    {
      id: 4,
      name: "AJet",
      code: "VF",
      website: "ajet.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/38/AJet_logo.svg",
    },
    {
      id: 5,
      name: "Corendon Airlines",
      code: "XC",
      website: "corendonairlines.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/4a/Corendon_Dutch_Airlines_logo.svg",
    },
    {
      id: 6,
      name: "Jet2.com",
      code: "LS",
      website: "jet2.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d6/Jet2Logo.svg",
    },
    {
      id: 7,
      name: "TUI Airways",
      code: "BY",
      website: "tui.co.uk",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/6f/TUI_Logo_2016.svg",
    },
    {
      id: 8,
      name: "easyJet",
      code: "U2",
      website: "https://www.easyjet.com/en",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/EasyJet_logo.svg",
    },
    {
      id: 9,
      name: "British Airways",
      code: "BA",
      website: "britishairways.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/BRITISH_AIRWAYS_logo.svg",
    },
    {
      id: 10,
      name: "Lufthansa",
      code: "LH",
      website: "lufthansa.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lufthansa_Logo_2018.svg",
    },
    {
      id: 11,
      name: "Freebird Airlines",
      code: "FH",
      website: "freebirdairlines.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/9b/Freebird_Airlines_Logo_%282021%29.svg",
    },
    {
      id: 12,
      name: "Transavia",
      code: "HV",
      website: "transavia.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Transavia_logo.svg/330px-Transavia_logo.svg.png",
    },
    {
      id: 13,
      name: "Edelweiss Air",
      code: "WK",
      website: "flyedelweiss.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/f/f3/Edelweiss_Air_wordmark.svg",
    },
    {
      id: 14,
      name: "Discover Airlines",
      code: "4Y",
      website: "discover-airlines.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/88/Logo_Discover_Airlines.svg",
    },
    {
      id: 15,
      name: "Qatar Airways",
      code: "QR",
      website: "https://www.qatarairways.com/en/homepage.html",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/320px-Qatar_Airways_Logo.svg.png",
    },
    {
      id: 16,
      name: "flydubai",
      code: "FZ",
      website: "https://www.flydubai.com/en-gr/",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/79/Fly_Dubai_logo_2010_03.svg",
    },
    {
      id: 17,
      name: "Smartwings",
      code: "QS",
      website: "smartwings.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Smartwings_logo.svg",
    },
    {
      id: 18,
      name: "Azerbaijan Airlines",
      code: "J2",
      website: "azal.az",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/4d/Azerbaijan_Airlines_logo.svg",
    },
  ],

  // 6. KOS (KGS)
  KGS: [
    {
      id: 1,
      name: "Aegean Airlines",
      code: "A3",
      website: "aegeanair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/Aegean_Airlines_Logo_2020.svg",
    },
    {
      id: 2,
      name: "Sky Express",
      code: "GQ",
      website: "skyexpress.gr",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/Sky_Express_%28Greece%29_logo.svg",
    },
    {
      id: 3,
      name: "TUI Airways",
      code: "BY",
      website: "tui.co.uk",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/6f/TUI_Logo_2016.svg",
    },
    {
      id: 4,
      name: "Jet2.com",
      code: "LS",
      website: "jet2.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d6/Jet2Logo.svg",
    },
    {
      id: 5,
      name: "easyJet",
      code: "U2",
      website: "https://www.easyjet.com/en",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/EasyJet_logo.svg",
    },
    {
      id: 6,
      name: "Ryanair",
      code: "FR",
      website: "ryanair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Ryanair_logo.svg",
    },
    {
      id: 7,
      name: "Condor",
      code: "DE",
      website: "condor.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/75/Condor_logo.svg",
    },
    {
      id: 8,
      name: "Eurowings",
      code: "EW",
      website: "eurowings.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b4/Eurowings_Logo.svg",
    },
    {
      id: 9,
      name: "Transavia",
      code: "HV",
      website: "transavia.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Transavia_logo.svg/330px-Transavia_logo.svg.png",
    },
    {
      id: 10,
      name: "British Airways",
      code: "BA",
      website: "britishairways.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/BRITISH_AIRWAYS_logo.svg",
    },
    {
      id: 11,
      name: "Lufthansa",
      code: "LH",
      website: "lufthansa.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lufthansa_Logo_2018.svg",
    },
    {
      id: 12,
      name: "Swiss Int. Air Lines",
      code: "LX",
      website: "swiss.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/1d/Swiss_new.svg",
    },
    {
      id: 13,
      name: "Austrian Airlines",
      code: "OS",
      website: "austrian.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Austrian_Airlines_Logo_neu.svg",
    },
    {
      id: 14,
      name: "Smartwings",
      code: "QS",
      website: "smartwings.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Smartwings_logo.svg",
    },
    {
      id: 15,
      name: "Volotea",
      code: "V7",
      website: "volotea.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/98/Volotea.svg",
    },
    {
      id: 16,
      name: "Brussels Airlines",
      code: "SN",
      website: "brusselsairlines.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/Brussels_airlines_logo_2021.svg",
    },
    {
      id: 17,
      name: "Edelweiss Air",
      code: "WK",
      website: "flyedelweiss.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/f/f3/Edelweiss_Air_wordmark.svg",
    },
    {
      id: 18,
      name: "Corendon Airlines",
      code: "XC",
      website: "corendonairlines.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/4a/Corendon_Dutch_Airlines_logo.svg",
    },
    {
      id: 19,
      name: "Discover Airlines",
      code: "4Y",
      website: "discover-airlines.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/88/Logo_Discover_Airlines.svg",
    },
    {
      id: 20,
      name: "Bluebird Airways",
      code: "BZ",
      website: "bluebirdair.com",
      logoUrl: "https://storage.aerocrs.com/305/system/Bluebird.png",
    },
  ],

  // 7. CORFU (CFU)
  CFU: [
    {
      id: 1,
      name: "Ryanair",
      code: "FR",
      website: "ryanair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Ryanair_logo.svg",
    },
    {
      id: 2,
      name: "easyJet",
      code: "U2",
      website: "https://www.easyjet.com/en",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/EasyJet_logo.svg",
    },
    {
      id: 3,
      name: "Jet2.com",
      code: "LS",
      website: "jet2.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d6/Jet2Logo.svg",
    },
    {
      id: 4,
      name: "Wizz Air",
      code: "W6",
      website: "https://www.wizzair.com/en-gb",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wizz_Air_logo.svg",
    },
    {
      id: 5,
      name: "TUI Airways",
      code: "BY",
      website: "tui.co.uk",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/6f/TUI_Logo_2016.svg",
    },
    {
      id: 6,
      name: "Eurowings",
      code: "EW",
      website: "eurowings.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b4/Eurowings_Logo.svg",
    },
    {
      id: 7,
      name: "Condor",
      code: "DE",
      website: "condor.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/75/Condor_logo.svg",
    },
    {
      id: 8,
      name: "British Airways",
      code: "BA",
      website: "britishairways.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/BRITISH_AIRWAYS_logo.svg",
    },
    {
      id: 9,
      name: "Lufthansa",
      code: "LH",
      website: "lufthansa.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lufthansa_Logo_2018.svg",
    },
    {
      id: 10,
      name: "Swiss Int. Air Lines",
      code: "LX",
      website: "swiss.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/1d/Swiss_new.svg",
    },
    {
      id: 11,
      name: "Aegean Airlines",
      code: "A3",
      website: "aegeanair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/Aegean_Airlines_Logo_2020.svg",
    },
    {
      id: 12,
      name: "Sky Express",
      code: "GQ",
      website: "skyexpress.gr",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/Sky_Express_%28Greece%29_logo.svg",
    },
    {
      id: 13,
      name: "Transavia",
      code: "HV",
      website: "transavia.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Transavia_logo.svg/330px-Transavia_logo.svg.png",
    },
    {
      id: 14,
      name: "Volotea",
      code: "V7",
      website: "volotea.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/98/Volotea.svg",
    },
    {
      id: 15,
      name: "ITA Airways",
      code: "AZ",
      website: "ita-airways.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/75/ITA_Airways_Logo.svg",
    },
    {
      id: 16,
      name: "Norwegian Air Shuttle",
      code: "DY",
      website: "norwegian.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b6/Norwegian_Logo_2024.svg",
    },
    {
      id: 17,
      name: "Air Baltic",
      code: "BT",
      website: "airbaltic.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a8/AirBaltic_logo.png",
    },
    {
      id: 18,
      name: "Luxair",
      code: "LG",
      website: "luxair.lu",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/31/Luxair_Logo_2007.svg",
    },
    {
      id: 19,
      name: "Air France",
      code: "AF",
      website: "airfrance.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Air_France_Logo.svg",
    },
    {
      id: 20,
      name: "Smartwings",
      code: "QS",
      website: "smartwings.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Smartwings_logo.svg",
    },
  ],

  // 8. MILOS (MLO)
  MLO: [
    {
      id: 1,
      name: "Olympic Air",
      code: "OA",
      website: "https://www.olympicair.com/",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/e/e1/Olympic_Air_logo.png",
    },
    {
      id: 2,
      name: "Sky Express",
      code: "GQ",
      website: "skyexpress.gr",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/Sky_Express_%28Greece%29_logo.svg",
    },
    {
      id: 3,
      name: "Aegean Airlines",
      code: "A3",
      website: "aegeanair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/Aegean_Airlines_Logo_2020.svg",
    },
  ],

  // 9. ATHENS (ATH) - The Big One
  ATH: [
    {
      id: 1,
      name: "Aegean Airlines",
      code: "A3",
      website: "aegeanair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/Aegean_Airlines_Logo_2020.svg",
    },
    {
      id: 2,
      name: "Sky Express",
      code: "GQ",
      website: "skyexpress.gr",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/Sky_Express_%28Greece%29_logo.svg",
    },
    {
      id: 3,
      name: "Olympic Air",
      code: "OA",
      website: "https://www.olympicair.com/",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/e/e1/Olympic_Air_logo.png",
    },
    {
      id: 4,
      name: "Ryanair",
      code: "FR",
      website: "ryanair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Ryanair_logo.svg",
    },
    {
      id: 5,
      name: "Volotea",
      code: "V7",
      website: "volotea.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/98/Volotea.svg",
    },
    {
      id: 6,
      name: "Lufthansa",
      code: "LH",
      website: "lufthansa.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lufthansa_Logo_2018.svg",
    },
    {
      id: 7,
      name: "British Airways",
      code: "BA",
      website: "britishairways.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/BRITISH_AIRWAYS_logo.svg",
    },
    {
      id: 8,
      name: "Air France",
      code: "AF",
      website: "airfrance.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Air_France_Logo.svg",
    },
    {
      id: 9,
      name: "KLM",
      code: "KL",
      website: "klm.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/KLM_logo.svg",
    },
    {
      id: 10,
      name: "Emirates",
      code: "EK",
      website: "emirates.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg",
    },
    {
      id: 11,
      name: "Qatar Airways",
      code: "QR",
      website: "https://www.qatarairways.com/en/homepage.html",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/320px-Qatar_Airways_Logo.svg.png",
    },
    {
      id: 12,
      name: "Etihad Airways",
      code: "EY",
      website: "etihad.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/0e/Etihad-airways-logo.svg",
    },
    {
      id: 13,
      name: "Turkish Airlines",
      code: "TK",
      website: "turkishairlines.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/e/ef/Turkish_Airlines_logo_2012.svg",
    },
    {
      id: 14,
      name: "Pegasus Airlines",
      code: "PC",
      website: "flypgs.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pegasus_Airlines_logo.svg",
    },
    {
      id: 15,
      name: "ITA Airways",
      code: "AZ",
      website: "ita-airways.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/75/ITA_Airways_Logo.svg",
    },
    {
      id: 16,
      name: "Swiss Int. Air Lines",
      code: "LX",
      website: "swiss.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/1d/Swiss_new.svg",
    },
    {
      id: 17,
      name: "Austrian Airlines",
      code: "OS",
      website: "austrian.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Austrian_Airlines_Logo_neu.svg",
    },
    {
      id: 18,
      name: "Iberia",
      code: "IB",
      website: "https://www.iberia.com/es/?language=en",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/2/23/Logotipo_de_Iberia.svg",
    },
    {
      id: 19,
      name: "Delta Air Lines",
      code: "DL",
      website: "delta.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d1/Delta_logo.svg",
    },
    {
      id: 20,
      name: "United Airlines",
      code: "UA",
      website: "united.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/United_Airlines_logo_%281973_-_2010%29.svg",
    },
    {
      id: 21,
      name: "American Airlines",
      code: "AA",
      website: "aa.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b1/Logo_text_American_Airlines_%281967-2013%29.png",
    },
    {
      id: 22,
      name: "Air Canada",
      code: "AC",
      website: "aircanada.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/Air_Canada_logo.svg",
    },
    {
      id: 23,
      name: "Scoot",
      code: "TR",
      website: "flyscoot.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/ba/Scoot_logo.svg",
    },
    {
      id: 24,
      name: "EgyptAir",
      code: "MS",
      website: "egyptair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/c2/Egyptair-Logo-2010.svg",
    },
    {
      id: 25,
      name: "El Al",
      code: "LY",
      website: "elal.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/ELAL2023Logo.svg",
    },
    {
      id: 26,
      name: "Arkia",
      code: "IZ",
      website: "arkia.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/9b/Arkia_Israeli_logo.svg",
    },
    {
      id: 27,
      name: "Bluebird Airways",
      code: "BZ",
      website: "bluebirdair.com",
      logoUrl: "https://storage.aerocrs.com/305/system/Bluebird.png",
    },
    {
      id: 28,
      name: "Wizz Air",
      code: "W6",
      website: "https://www.wizzair.com/en-gb",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wizz_Air_logo.svg",
    },
    {
      id: 29,
      name: "easyJet",
      code: "U2",
      website: "https://www.easyjet.com/en",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/EasyJet_logo.svg",
    },
    {
      id: 30,
      name: "Transavia",
      code: "HV",
      website: "transavia.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Transavia_logo.svg/330px-Transavia_logo.svg.png",
    },
    {
      id: 31,
      name: "Vueling",
      code: "VY",
      website: "https://www.vueling.com/en",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/Logo_Vueling.svg",
    },
    {
      id: 32,
      name: "Eurowings",
      code: "EW",
      website: "eurowings.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b4/Eurowings_Logo.svg",
    },
    {
      id: 33,
      name: "Norwegian Air Shuttle",
      code: "DY",
      website: "norwegian.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b6/Norwegian_Logo_2024.svg",
    },
    {
      id: 34,
      name: "SAS",
      code: "SK",
      website: "flysas.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/33/Scandinavian_Airlines_logo.svg",
    },
    {
      id: 35,
      name: "Finnair",
      code: "AY",
      website: "finnair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/Finnair_Logo.svg",
    },
    {
      id: 36,
      name: "Air Baltic",
      code: "BT",
      website: "airbaltic.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a8/AirBaltic_logo.png",
    },
    {
      id: 37,
      name: "Air Serbia",
      code: "JU",
      website: "airserbia.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/f/f7/Air_Serbia_logo.svg",
    },
    {
      id: 38,
      name: "Brussels Airlines",
      code: "SN",
      website: "brusselsairlines.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/Brussels_airlines_logo_2021.svg",
    },
    {
      id: 39,
      name: "TAROM",
      code: "RO",
      website: "tarom.ro",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/en/e/e4/TAROM_Logo_%28blue%29.svg",
    },
    {
      id: 40,
      name: "Bulgaria Air",
      code: "FB",
      website: "air.bg",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Bulgaria_Air_logo.svg",
    },
    {
      id: 41,
      name: "Cyprus Airways",
      code: "CY",
      website: "cyprusairways.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/93/Cyprus_Airways_%28logo%2C_2017%29.svg",
    },
  ],

  // 10. RHODES (RHO)
  RHO: [
    {
      id: 1,
      name: "TUI Airways",
      code: "BY",
      website: "tui.co.uk",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/6f/TUI_Logo_2016.svg",
    },
    {
      id: 2,
      name: "Jet2.com",
      code: "LS",
      website: "jet2.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d6/Jet2Logo.svg",
    },
    {
      id: 3,
      name: "Ryanair",
      code: "FR",
      website: "ryanair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Ryanair_logo.svg",
    },
    {
      id: 4,
      name: "easyJet",
      code: "U2",
      website: "https://www.easyjet.com/en",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/EasyJet_logo.svg",
    },
    {
      id: 5,
      name: "Aegean Airlines",
      code: "A3",
      website: "aegeanair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/Aegean_Airlines_Logo_2020.svg",
    },
    {
      id: 6,
      name: "Sky Express",
      code: "GQ",
      website: "skyexpress.gr",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/Sky_Express_%28Greece%29_logo.svg",
    },
    {
      id: 7,
      name: "Corendon Airlines",
      code: "XC",
      website: "corendonairlines.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/4a/Corendon_Dutch_Airlines_logo.svg",
    },
    {
      id: 8,
      name: "Condor",
      code: "DE",
      website: "condor.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/75/Condor_logo.svg",
    },
    {
      id: 9,
      name: "Eurowings",
      code: "EW",
      website: "eurowings.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b4/Eurowings_Logo.svg",
    },
    {
      id: 10,
      name: "Transavia",
      code: "HV",
      website: "transavia.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Transavia_logo.svg/330px-Transavia_logo.svg.png",
    },
    {
      id: 11,
      name: "British Airways",
      code: "BA",
      website: "britishairways.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/BRITISH_AIRWAYS_logo.svg",
    },
    {
      id: 12,
      name: "Lufthansa",
      code: "LH",
      website: "lufthansa.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lufthansa_Logo_2018.svg",
    },
    {
      id: 13,
      name: "Edelweiss Air",
      code: "WK",
      website: "flyedelweiss.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/f/f3/Edelweiss_Air_wordmark.svg",
    },
    {
      id: 14,
      name: "Smartwings",
      code: "QS",
      website: "smartwings.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Smartwings_logo.svg",
    },
    {
      id: 15,
      name: "Arkia",
      code: "IZ",
      website: "arkia.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/9b/Arkia_Israeli_logo.svg",
    },
    {
      id: 16,
      name: "Wizz Air",
      code: "W6",
      website: "https://www.wizzair.com/en-gb",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wizz_Air_logo.svg",
    },
    {
      id: 17,
      name: "Volotea",
      code: "V7",
      website: "volotea.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/98/Volotea.svg",
    },
    {
      id: 18,
      name: "Finnair",
      code: "AY",
      website: "finnair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/Finnair_Logo.svg",
    },
    {
      id: 19,
      name: "Norwegian Air Shuttle",
      code: "DY",
      website: "norwegian.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b6/Norwegian_Logo_2024.svg",
    },
    {
      id: 20,
      name: "ITA Airways",
      code: "AZ",
      website: "ita-airways.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/75/ITA_Airways_Logo.svg",
    },
  ],

  // 11. HERAKLION (HER)
  HER: [
    {
      id: 1,
      name: "TUI Airways",
      code: "BY",
      website: "tui.co.uk",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/6f/TUI_Logo_2016.svg",
    },
    {
      id: 2,
      name: "Jet2.com",
      code: "LS",
      website: "jet2.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d6/Jet2Logo.svg",
    },
    {
      id: 3,
      name: "Aegean Airlines",
      code: "A3",
      website: "aegeanair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/Aegean_Airlines_Logo_2020.svg",
    },
    {
      id: 4,
      name: "Sky Express",
      code: "GQ",
      website: "skyexpress.gr",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/Sky_Express_%28Greece%29_logo.svg",
    },
    {
      id: 5,
      name: "easyJet",
      code: "U2",
      website: "https://www.easyjet.com/en",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/EasyJet_logo.svg",
    },
    {
      id: 6,
      name: "Ryanair",
      code: "FR",
      website: "ryanair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Ryanair_logo.svg",
    },
    {
      id: 7,
      name: "Condor",
      code: "DE",
      website: "condor.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/75/Condor_logo.svg",
    },
    {
      id: 8,
      name: "Corendon Airlines",
      code: "XC",
      website: "corendonairlines.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/4a/Corendon_Dutch_Airlines_logo.svg",
    },
    {
      id: 9,
      name: "Eurowings",
      code: "EW",
      website: "eurowings.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b4/Eurowings_Logo.svg",
    },
    {
      id: 10,
      name: "Transavia",
      code: "HV",
      website: "transavia.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Transavia_logo.svg/330px-Transavia_logo.svg.png",
    },
    {
      id: 11,
      name: "Lufthansa",
      code: "LH",
      website: "lufthansa.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lufthansa_Logo_2018.svg",
    },
    {
      id: 12,
      name: "Volotea",
      code: "V7",
      website: "volotea.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/98/Volotea.svg",
    },
    {
      id: 13,
      name: "Wizz Air",
      code: "W6",
      website: "https://www.wizzair.com/en-gb",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wizz_Air_logo.svg",
    },
    {
      id: 14,
      name: "Discover Airlines",
      code: "4Y",
      website: "discover-airlines.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/88/Logo_Discover_Airlines.svg",
    },
    {
      id: 15,
      name: "Edelweiss Air",
      code: "WK",
      website: "flyedelweiss.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/f/f3/Edelweiss_Air_wordmark.svg",
    },
    {
      id: 16,
      name: "Swiss Int. Air Lines",
      code: "LX",
      website: "swiss.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/1d/Swiss_new.svg",
    },
    {
      id: 17,
      name: "Austrian Airlines",
      code: "OS",
      website: "austrian.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Austrian_Airlines_Logo_neu.svg",
    },
    {
      id: 18,
      name: "British Airways",
      code: "BA",
      website: "britishairways.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/BRITISH_AIRWAYS_logo.svg",
    },
    {
      id: 19,
      name: "Brussels Airlines",
      code: "SN",
      website: "brusselsairlines.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/Brussels_airlines_logo_2021.svg",
    },
    {
      id: 20,
      name: "Smartwings",
      code: "QS",
      website: "smartwings.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Smartwings_logo.svg",
    },
  ],

  // 12. SANTORINI (JTR)
  JTR: [
    {
      id: 1,
      name: "Aegean Airlines",
      code: "A3",
      website: "aegeanair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/Aegean_Airlines_Logo_2020.svg",
    },
    {
      id: 2,
      name: "Sky Express",
      code: "GQ",
      website: "skyexpress.gr",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/Sky_Express_%28Greece%29_logo.svg",
    },
    {
      id: 3,
      name: "Volotea",
      code: "V7",
      website: "volotea.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/98/Volotea.svg",
    },
    {
      id: 4,
      name: "easyJet",
      code: "U2",
      website: "https://www.easyjet.com/en",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/EasyJet_logo.svg",
    },
    {
      id: 5,
      name: "Ryanair",
      code: "FR",
      website: "ryanair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Ryanair_logo.svg",
    },
    {
      id: 6,
      name: "Transavia",
      code: "HV",
      website: "transavia.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Transavia_logo.svg/330px-Transavia_logo.svg.png",
    },
    {
      id: 7,
      name: "British Airways",
      code: "BA",
      website: "britishairways.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/BRITISH_AIRWAYS_logo.svg",
    },
    {
      id: 8,
      name: "Lufthansa",
      code: "LH",
      website: "lufthansa.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lufthansa_Logo_2018.svg",
    },
    {
      id: 9,
      name: "Eurowings",
      code: "EW",
      website: "eurowings.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b4/Eurowings_Logo.svg",
    },
    {
      id: 10,
      name: "Discover Airlines",
      code: "4Y",
      website: "discover-airlines.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/88/Logo_Discover_Airlines.svg",
    },
    {
      id: 11,
      name: "Austrian Airlines",
      code: "OS",
      website: "austrian.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Austrian_Airlines_Logo_neu.svg",
    },
    {
      id: 12,
      name: "Swiss Int. Air Lines",
      code: "LX",
      website: "swiss.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/1d/Swiss_new.svg",
    },
    {
      id: 13,
      name: "Edelweiss Air",
      code: "WK",
      website: "flyedelweiss.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/f/f3/Edelweiss_Air_wordmark.svg",
    },
    {
      id: 14,
      name: "Jet2.com",
      code: "LS",
      website: "jet2.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d6/Jet2Logo.svg",
    },
    {
      id: 15,
      name: "TUI Airways",
      code: "BY",
      website: "tui.co.uk",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/6f/TUI_Logo_2016.svg",
    },
    {
      id: 16,
      name: "Vueling",
      code: "VY",
      website: "https://www.vueling.com/en",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/Logo_Vueling.svg",
    },
    {
      id: 17,
      name: "Wizz Air",
      code: "W6",
      website: "https://www.wizzair.com/en-gb",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wizz_Air_logo.svg",
    },
    {
      id: 18,
      name: "flydubai",
      code: "FZ",
      website: "https://www.flydubai.com/en-gr/",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/79/Fly_Dubai_logo_2010_03.svg",
    },
    {
      id: 19,
      name: "Qatar Airways",
      code: "QR",
      website: "https://www.qatarairways.com/en/homepage.html",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/320px-Qatar_Airways_Logo.svg.png",
    },
    {
      id: 20,
      name: "Etihad Airways",
      code: "EY",
      website: "etihad.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/0e/Etihad-airways-logo.svg",
    },
    {
      id: 21,
      name: "Air France",
      code: "AF",
      website: "airfrance.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Air_France_Logo.svg",
    },
    {
      id: 22,
      name: "Norwegian Air Shuttle",
      code: "DY",
      website: "norwegian.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b6/Norwegian_Logo_2024.svg",
    },
    {
      id: 23,
      name: "Finnair",
      code: "AY",
      website: "finnair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/Finnair_Logo.svg",
    },
    {
      id: 24,
      name: "SAS",
      code: "SK",
      website: "flysas.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/33/Scandinavian_Airlines_logo.svg",
    },
    {
      id: 25,
      name: "Smartwings",
      code: "QS",
      website: "smartwings.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Smartwings_logo.svg",
    },
    {
      id: 26,
      name: "Luxair",
      code: "LG",
      website: "luxair.lu",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/31/Luxair_Logo_2007.svg",
    },
    {
      id: 27,
      name: "Iberia",
      code: "IB",
      website: "https://www.iberia.com/es/?language=en",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/2/23/Logotipo_de_Iberia.svg",
    },
  ],

  // 13. THESSALONIKI (SKG)
  SKG: [
    {
      id: 1,
      name: "Aegean Airlines",
      code: "A3",
      website: "aegeanair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/Aegean_Airlines_Logo_2020.svg",
    },
    {
      id: 2,
      name: "Ryanair",
      code: "FR",
      website: "ryanair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Ryanair_logo.svg",
    },
    {
      id: 3,
      name: "Olympic Air",
      code: "OA",
      website: "https://www.olympicair.com/",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/e/e1/Olympic_Air_logo.png",
    },
    {
      id: 4,
      name: "Sky Express",
      code: "GQ",
      website: "skyexpress.gr",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/Sky_Express_%28Greece%29_logo.svg",
    },
    {
      id: 5,
      name: "Lufthansa",
      code: "LH",
      website: "lufthansa.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lufthansa_Logo_2018.svg",
    },
    {
      id: 6,
      name: "Swiss Int. Air Lines",
      code: "LX",
      website: "swiss.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/1d/Swiss_new.svg",
    },
    {
      id: 7,
      name: "Austrian Airlines",
      code: "OS",
      website: "austrian.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Austrian_Airlines_Logo_neu.svg",
    },
    {
      id: 8,
      name: "Transavia",
      code: "HV",
      website: "transavia.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Transavia_logo.svg/330px-Transavia_logo.svg.png",
    },
    {
      id: 9,
      name: "easyJet",
      code: "U2",
      website: "https://www.easyjet.com/en",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/EasyJet_logo.svg",
    },
    {
      id: 10,
      name: "Wizz Air",
      code: "W6",
      website: "https://www.wizzair.com/en-gb",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wizz_Air_logo.svg",
    },
    {
      id: 11,
      name: "Turkish Airlines",
      code: "TK",
      website: "turkishairlines.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/e/ef/Turkish_Airlines_logo_2012.svg",
    },
    {
      id: 12,
      name: "Air Serbia",
      code: "JU",
      website: "airserbia.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/f/f7/Air_Serbia_logo.svg",
    },
    {
      id: 13,
      name: "Tarom",
      code: "RO",
      website: "tarom.ro",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/en/e/e4/TAROM_Logo_%28blue%29.svg",
    },
    {
      id: 14,
      name: "British Airways",
      code: "BA",
      website: "britishairways.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/BRITISH_AIRWAYS_logo.svg",
    },
    {
      id: 15,
      name: "Eurowings",
      code: "EW",
      website: "eurowings.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b4/Eurowings_Logo.svg",
    },
    {
      id: 16,
      name: "Norwegian Air Shuttle",
      code: "DY",
      website: "norwegian.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b6/Norwegian_Logo_2024.svg",
    },
    {
      id: 17,
      name: "SAS",
      code: "SK",
      website: "flysas.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/33/Scandinavian_Airlines_logo.svg",
    },
    {
      id: 18,
      name: "Air Baltic",
      code: "BT",
      website: "airbaltic.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a8/AirBaltic_logo.png",
    },
    {
      id: 19,
      name: "Luxair",
      code: "LG",
      website: "luxair.lu",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/31/Luxair_Logo_2007.svg",
    },
    {
      id: 20,
      name: "Cyprus Airways",
      code: "CY",
      website: "cyprusairways.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/93/Cyprus_Airways_%28logo%2C_2017%29.svg",
    },
  ],

  // 14. KEFALONIA (EFL)
  EFL: [
    {
      id: 1,
      name: "Jet2.com",
      code: "LS",
      website: "jet2.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d6/Jet2Logo.svg",
    },
    {
      id: 2,
      name: "TUI Airways",
      code: "BY",
      website: "tui.co.uk",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/6f/TUI_Logo_2016.svg",
    },
    {
      id: 3,
      name: "easyJet",
      code: "U2",
      website: "https://www.easyjet.com/en",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/EasyJet_logo.svg",
    },
    {
      id: 4,
      name: "Ryanair",
      code: "FR",
      website: "ryanair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Ryanair_logo.svg",
    },
    {
      id: 5,
      name: "Aegean Airlines",
      code: "A3",
      website: "aegeanair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/Aegean_Airlines_Logo_2020.svg",
    },
    {
      id: 6,
      name: "Sky Express",
      code: "GQ",
      website: "skyexpress.gr",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/Sky_Express_%28Greece%29_logo.svg",
    },
    {
      id: 7,
      name: "Olympic Air",
      code: "OA",
      website: "https://www.olympicair.com/",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/e/e1/Olympic_Air_logo.png",
    },
    {
      id: 8,
      name: "British Airways",
      code: "BA",
      website: "britishairways.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/BRITISH_AIRWAYS_logo.svg",
    },
    {
      id: 9,
      name: "Volotea",
      code: "V7",
      website: "volotea.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/98/Volotea.svg",
    },
    {
      id: 10,
      name: "Condor",
      code: "DE",
      website: "condor.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/75/Condor_logo.svg",
    },
    {
      id: 11,
      name: "Norwegian Air Shuttle",
      code: "DY",
      website: "norwegian.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b6/Norwegian_Logo_2024.svg",
    },
    {
      id: 12,
      name: "ITA Airways",
      code: "AZ",
      website: "ita-airways.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/75/ITA_Airways_Logo.svg",
    },
    {
      id: 13,
      name: "Smartwings",
      code: "QS",
      website: "smartwings.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Smartwings_logo.svg",
    },
    {
      id: 14,
      name: "Transavia",
      code: "HV",
      website: "transavia.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Transavia_logo.svg/330px-Transavia_logo.svg.png",
    },
  ],

  // 15. DEFAULT FALLBACK
  DEFAULT: [
    {
      id: 1,
      name: "Aegean Airlines",
      code: "A3",
      website: "aegeanair.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/Aegean_Airlines_Logo_2020.svg",
    },
  ],
};

export default function AirlinesClient() {
  const airport = useAirport();
  const key = airport?.key || "DEFAULT";
  // Assuming ALL_AIRLINES is available in your scope
  const data = ALL_AIRLINES[key] || ALL_AIRLINES["DEFAULT"];

  // SEO FIX:
  // 1. "Airlines Serving" (16 chars) is longer than "Airlines at" (11 chars).
  // 2. "Full Airline Directory" (22 chars) is longer than "Airline directory" (17 chars).
  // This adds length for the SEO bot without breaking your layout.
  const tenantName = airport?.name
    ? `Airlines Serving ${airport.name}`
    : "Full Airline Directory";

  return (
    <main>
      <AirlineDirectory data={data} tenantName={tenantName} />
    </main>
  );
}
