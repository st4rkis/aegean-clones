// --- SHARED CONSTANTS FOR REUSABLE AIRLINE DATA ---
// We define these once to keep URLs consistent and SEO-safe across all lists.

const AEGEAN = {
  name: "Aegean Airlines test",
  code: "A3",
  website: "en.aegeanair.com", // SEO SAFE
  logoUrl:
    "https://upload.wikimedia.org/wikipedia/commons/0/0f/Aegean_Airlines_Logo_2020.svg",
};

const OLYMPIC = {
  name: "Olympic Air",
  code: "OA",
  website: "https://www.olympicair.com/",
  logoUrl:
    "https://upload.wikimedia.org/wikipedia/commons/e/e1/Olympic_Air_logo.png",
};

const SKY_EXPRESS = {
  name: "Sky Express",
  code: "GQ",
  website: "skyexpress.gr",
  logoUrl:
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/Sky_Express_%28Greece%29_logo.svg",
};

const RYANAIR = {
  name: "Ryanair",
  code: "FR",
  website: "ryanair.com",
  logoUrl:
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Ryanair_logo.svg",
};

const EASYJET = {
  name: "easyJet",
  code: "U2",
  website: "https://www.easyjet.com/en", // SEO SAFE
  logoUrl:
    "https://upload.wikimedia.org/wikipedia/commons/1/1b/EasyJet_logo.svg",
};

const TRANSAVIA = {
  name: "Transavia",
  code: "HV",
  website: "transavia.com",
  logoUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Transavia_logo.svg/330px-Transavia_logo.svg.png",
};

const VOLOTEA = {
  name: "Volotea",
  code: "V7",
  website: "volotea.com",
  logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/98/Volotea.svg",
};

const BRITISH_AIRWAYS = {
  name: "British Airways",
  code: "BA",
  website: "britishairways.com",
  logoUrl:
    "https://upload.wikimedia.org/wikipedia/commons/0/06/BRITISH_AIRWAYS_logo.svg",
};

const LUFTHANSA = {
  name: "Lufthansa",
  code: "LH",
  website: "lufthansa.com",
  logoUrl:
    "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lufthansa_Logo_2018.svg",
};

const AIR_FRANCE = {
  name: "Air France",
  code: "AF",
  website: "https://www.airfrance.fr/en", // SEO SAFE
  logoUrl:
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Air_France_Logo.svg",
};

const SWISS = {
  name: "Swiss Int. Air Lines",
  code: "LX",
  website: "swiss.com",
  logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Swiss_new.svg",
};

const AUSTRIAN = {
  name: "Austrian Airlines",
  code: "OS",
  website: "austrian.com",
  logoUrl:
    "https://upload.wikimedia.org/wikipedia/commons/0/06/Austrian_Airlines_Logo_neu.svg",
};

const ARKIA = {
  name: "Arkia",
  code: "IZ",
  website: "https://www.arkia.co.il/", // SEO SAFE
  logoUrl:
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Arkia_Israeli_logo.svg",
};

const WIZZ = {
  name: "Wizz Air",
  code: "W6",
  website: "https://www.wizzair.com/en-gb",
  logoUrl:
    "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wizz_Air_logo.svg",
};

// --- EXPORTED DATA STRUCTURE ---

export const AIRLINES = [
  { id: 1, ...AEGEAN },
  { id: 2, ...SKY_EXPRESS },
  { id: 3, ...OLYMPIC },
  { id: 4, ...BRITISH_AIRWAYS },
  { id: 5, ...EASYJET },
  { id: 6, ...TRANSAVIA },
  { id: 7, ...VOLOTEA },
  {
    id: 8,
    name: "Vueling",
    code: "VY",
    website: "https://www.vueling.com/en",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b8/Logo_Vueling.svg",
  },
  { id: 9, ...LUFTHANSA },
  { id: 10, ...SWISS },
  { id: 11, ...AUSTRIAN },
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
  { id: 17, ...AIR_FRANCE },
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
  { id: 20, ...ARKIA },
  {
    id: 21,
    name: "Bluebird Airways",
    code: "BZ",
    website: "bluebirdair.com",
    logoUrl: "https://storage.aerocrs.com/305/system/Bluebird.png",
  },
  { id: 22, ...WIZZ },
  { id: 23, ...RYANAIR },
];

// --- AIRPORT SPECIFIC LISTS ---

export const AIRPORT_AIRLINES: Record<string, any[]> = {
  // 2. PAROS (PAS)
  PAS: [
    { id: 1, ...OLYMPIC },
    { id: 2, ...SKY_EXPRESS },
    { id: 3, ...AEGEAN },
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
    { id: 1, ...OLYMPIC },
    { id: 2, ...SKY_EXPRESS },
    { id: 3, ...AEGEAN },
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
    { id: 3, ...EASYJET },
    { id: 4, ...RYANAIR },
    { id: 5, ...WIZZ },
    { id: 6, ...SKY_EXPRESS },
    { id: 7, ...OLYMPIC },
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
    { id: 10, ...VOLOTEA },
    { id: 11, ...TRANSAVIA },
    {
      id: 12,
      name: "Smartwings",
      code: "QS",
      website: "smartwings.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Smartwings_logo.svg",
    },
    { id: 13, ...BRITISH_AIRWAYS },
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
    { id: 8, ...EASYJET },
    { id: 9, ...BRITISH_AIRWAYS },
    { id: 10, ...LUFTHANSA },
    {
      id: 11,
      name: "Freebird Airlines",
      code: "FH",
      website: "freebirdairlines.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/9b/Freebird_Airlines_Logo_%282021%29.svg",
    },
    { id: 12, ...TRANSAVIA },
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
    { id: 1, ...AEGEAN },
    { id: 2, ...SKY_EXPRESS },
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
    { id: 5, ...EASYJET },
    { id: 6, ...RYANAIR },
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
    { id: 9, ...TRANSAVIA },
    { id: 10, ...BRITISH_AIRWAYS },
    { id: 11, ...LUFTHANSA },
    { id: 12, ...SWISS },
    { id: 13, ...AUSTRIAN },
    {
      id: 14,
      name: "Smartwings",
      code: "QS",
      website: "smartwings.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Smartwings_logo.svg",
    },
    { id: 15, ...VOLOTEA },
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
    { id: 1, ...RYANAIR },
    { id: 2, ...EASYJET },
    {
      id: 3,
      name: "Jet2.com",
      code: "LS",
      website: "jet2.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d6/Jet2Logo.svg",
    },
    { id: 4, ...WIZZ },
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
    { id: 8, ...BRITISH_AIRWAYS },
    { id: 9, ...LUFTHANSA },
    { id: 10, ...SWISS },
    { id: 11, ...AEGEAN },
    { id: 12, ...SKY_EXPRESS },
    { id: 13, ...TRANSAVIA },
    { id: 14, ...VOLOTEA },
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
    { id: 19, ...AIR_FRANCE },
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
    { id: 1, ...OLYMPIC },
    { id: 2, ...SKY_EXPRESS },
    { id: 3, ...AEGEAN },
  ],

  // 9. ATHENS (ATH)
  ATH: [
    { id: 1, ...AEGEAN },
    { id: 2, ...SKY_EXPRESS },
    { id: 3, ...OLYMPIC },
    { id: 4, ...RYANAIR },
    { id: 5, ...VOLOTEA },
    { id: 6, ...LUFTHANSA },
    { id: 7, ...BRITISH_AIRWAYS },
    { id: 8, ...AIR_FRANCE },
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
    { id: 16, ...SWISS },
    { id: 17, ...AUSTRIAN },
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
    { id: 26, ...ARKIA },
    {
      id: 27,
      name: "Bluebird Airways",
      code: "BZ",
      website: "bluebirdair.com",
      logoUrl: "https://storage.aerocrs.com/305/system/Bluebird.png",
    },
    { id: 28, ...WIZZ },
    { id: 29, ...EASYJET },
    { id: 30, ...TRANSAVIA },
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
    { id: 3, ...RYANAIR },
    { id: 4, ...EASYJET },
    { id: 5, ...AEGEAN },
    { id: 6, ...SKY_EXPRESS },
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
    { id: 10, ...TRANSAVIA },
    { id: 11, ...BRITISH_AIRWAYS },
    { id: 12, ...LUFTHANSA },
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
    { id: 15, ...ARKIA },
    { id: 16, ...WIZZ },
    { id: 17, ...VOLOTEA },
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
    { id: 3, ...AEGEAN },
    { id: 4, ...SKY_EXPRESS },
    { id: 5, ...EASYJET },
    { id: 6, ...RYANAIR },
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
    { id: 10, ...TRANSAVIA },
    { id: 11, ...LUFTHANSA },
    { id: 12, ...VOLOTEA },
    { id: 13, ...WIZZ },
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
    { id: 16, ...SWISS },
    { id: 17, ...AUSTRIAN },
    { id: 18, ...BRITISH_AIRWAYS },
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
    { id: 1, ...AEGEAN },
    { id: 2, ...SKY_EXPRESS },
    { id: 3, ...VOLOTEA },
    { id: 4, ...EASYJET },
    { id: 5, ...RYANAIR },
    { id: 6, ...TRANSAVIA },
    { id: 7, ...BRITISH_AIRWAYS },
    { id: 8, ...LUFTHANSA },
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
    { id: 11, ...AUSTRIAN },
    { id: 12, ...SWISS },
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
    { id: 17, ...WIZZ },
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
    { id: 21, ...AIR_FRANCE },
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
    { id: 1, ...AEGEAN },
    { id: 2, ...RYANAIR },
    { id: 3, ...OLYMPIC },
    { id: 4, ...SKY_EXPRESS },
    { id: 5, ...LUFTHANSA },
    { id: 6, ...SWISS },
    { id: 7, ...AUSTRIAN },
    { id: 8, ...TRANSAVIA },
    { id: 9, ...EASYJET },
    { id: 10, ...WIZZ },
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
    { id: 14, ...BRITISH_AIRWAYS },
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
    { id: 3, ...EASYJET },
    { id: 4, ...RYANAIR },
    { id: 5, ...AEGEAN },
    { id: 6, ...SKY_EXPRESS },
    { id: 7, ...OLYMPIC },
    { id: 8, ...BRITISH_AIRWAYS },
    { id: 9, ...VOLOTEA },
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
    { id: 14, ...TRANSAVIA },
  ],
};
