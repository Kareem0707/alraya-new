const products = [
    // Lampshades
    {
        id: 101,
        category: "Lampshades",
        name: "Heritage Woven Shade",
        price: "Contact for Price",
        image: "assets/lampshades.webp",
        desc: "Handcrafted woven design providing warm, ambient lighting for any room.",
        warranty: "Lifetime"
    },
    {
        id: 504,
        category: "Lampshades",
        name: "Rattan Hanging Shade",
        price: "Contact for Price",
        image: "assets/551.webp",
        desc: "Natural rattan finish bringing a boho-chic aesthetic to your space.",
        warranty: "Lifetime"
    },
    {
        id: 505,
        category: "Lampshades",
        name: "Wicker Pendant Shade",
        price: "Contact for Price",
        image: "assets/552.webp",
        desc: "Durable wicker construction with an open weave for interesting light patterns.",
        warranty: "Lifetime"
    },
    {
        id: 506,
        category: "Lampshades",
        name: "Bamboo Light Shade",
        price: "Contact for Price",
        image: "assets/553.webp",
        desc: "Eco-friendly bamboo shade that adds a touch of nature and calm.",
        warranty: "Lifetime"
    },
    {
        id: 508,
        category: "Lampshades",
        name: "Woven Tower Floor Lamp",
        price: "Contact for Price",
        image: "assets/800.webp",
        desc: "Contemporary floor lamp with a unique woven design.",
        warranty: "Lifetime"
    },
    {
        id: 507,
        category: "Lampshades",
        name: "Nordic Wood Table Lamp",
        price: "Contact for Price",
        image: "assets/804.webp",
        desc: "Stylish table lamp with a wooden base and fabric shade.",
        warranty: "Lifetime"
    },

    // Pendant Lights
    // Woven / Boho Group
    {
        id: 602,
        category: "Pendant Lights",
        name: "Boho Breeze Woven Pendant",
        price: "Contact for Price",
        image: "assets/200.webp",
        desc: "Bohemian style woven pendant light for a natural touch.",
        warranty: "Lifetime"
    },
    {
        id: 603,
        category: "Pendant Lights",
        name: "Rattan Warmth Hanging Light",
        price: "Contact for Price",
        image: "assets/201.webp",
        desc: "Handcrafted rattan pendant lamp for warm ambient lighting.",
        warranty: "Lifetime"
    },
    {
        id: 6045,
        category: "Pendant Lights",
        name: "Zenith Woven Cylinder Pendant",
        price: "Contact for Price",
        image: "assets/202.webp",
        desc: "Elongated woven pendant creating intricate shadow patterns.",
        warranty: "Lifetime"
    },
    {
        id: 605,
        category: "Pendant Lights",
        name: "Dome Rattan Pendant",
        price: "Contact for Price",
        image: "assets/203.webp",
        desc: "Classic dome-shaped rattan pendant for cozy dining areas.",
        warranty: "Lifetime"
    },
    {
        id: 606,
        category: "Pendant Lights",
        name: "Basket Weave Hanging Lamp",
        price: "Contact for Price",
        image: "assets/204.webp",
        desc: "Textured basket weave pendant adding rustic charm to any room.",
        warranty: "Lifetime"
    },
    {
        id: 608,
        category: "Pendant Lights",
        name: "Lattice Globe Woven Pendant",
        price: "Contact for Price",
        image: "assets/205.webp",
        desc: "Spherical woven pendant casting stunning geometric shadows.",
        warranty: "Lifetime"
    },
    {
        id: 609,
        category: "Pendant Lights",
        name: "Tassel Fringe Boho Shade",
        price: "Contact for Price",
        image: "assets/206.webp",
        desc: "Bohemian-style pendant with delicate fringe details.",
        warranty: "Lifetime"
    },
    {
        id: 611,
        category: "Pendant Lights",
        name: "Pagoda Woven Lantern",
        price: "Contact for Price",
        image: "assets/208.webp",
        desc: "Structured woven pendant with a unique pagoda-inspired shape.",
        warranty: "Lifetime"
    },
    {
        id: 613,
        category: "Pendant Lights",
        name: "Artisan Bell Weave",
        price: "Contact for Price",
        image: "assets/210.webp",
        desc: "Handcrafted bell-shaped woven pendant for warm, ambient light.",
        warranty: "Lifetime"
    },
    {
        id: 614,
        category: "Pendant Lights",
        name: "Lumine Woven Drop",
        price: "Contact for Price",
        image: "assets/211.webp",
        desc: "Elegant teardrop woven shade creating a cozy atmosphere.",
        warranty: "Lifetime"
    },
    {
        id: 612,
        category: "Pendant Lights",
        name: "Cylindrical Mesh Pendant",
        price: "Contact for Price",
        image: "assets/209.webp",
        desc: "Tall cylindrical pendant with an airy mesh weave for a light, modern look.",
        warranty: "Lifetime"
    },
    {
        id: 615,
        category: "Pendant Lights",
        name: "Shadow Weave Pendant",
        price: "Contact for Price",
        image: "assets/803.webp",
        desc: "Dark woven pendant light casting intricate shadows for a dramatic effect.",
        warranty: "Lifetime"
    },
    // Fabric Group
    {
        id: 110,
        category: "Pendant Lights",
        name: "Cylindrical Textile Pendant",
        price: "Contact for Price",
        image: "assets/110.webp",
        desc: "Soft diffused light with a rich fabric texture, perfect for cozy atmospheres.",
        warranty: "Lifetime"
    },
    {
        id: 111,
        category: "Pendant Lights",
        name: "Conical Fabric Pendant",
        price: "Contact for Price",
        image: "assets/111.webp",
        desc: "Modern conical shape ideal for suspending over dining tables or counters.",
        warranty: "Lifetime"
    },
    {
        id: 610,
        category: "Pendant Lights",
        name: "Tiered Drum Linen Pendant",
        price: "Contact for Price",
        image: "assets/207.webp",
        desc: "Elegant tiered fabric shade for soft, diffused lighting.",
        warranty: "Lifetime"
    },
    // Modern / Metal Group
    {
        id: 102,
        category: "Pendant Lights",
        name: "Modern Dome Pendant",
        price: "Contact for Price",
        image: "assets/pendant.webp",
        desc: "Classic dome silhouette reimagined with a sleek, contemporary finish.",
        warranty: "Lifetime"
    },
    {
        id: 501,
        category: "Pendant Lights",
        name: "Minimalist Drop Light",
        price: "Contact for Price",
        image: "assets/345.webp",
        desc: "Simple and elegant single drop fixture for minimalist interiors.",
        warranty: "Lifetime"
    },
    {
        id: 502,
        category: "Pendant Lights",
        name: "Nordic Hanging Lamp",
        price: "Contact for Price",
        image: "assets/346.webp",
        desc: "Scandi-style design featuring clean lines and a functional form.",
        warranty: "Lifetime"
    },
    {
        id: 503,
        category: "Pendant Lights",
        name: "Art Deco Pendant",
        price: "Contact for Price",
        image: "assets/347.webp",
        desc: "Vintage-inspired design with a flair of Art Deco elegance.",
        warranty: "Lifetime"
    },
    {
        id: 601,
        category: "Pendant Lights",
        name: "Robust Chain Pendant",
        price: "Contact for Price",
        image: "assets/400.webp",
        desc: "Heavy-duty aesthetic with a strong chain suspension for a bold look.",
        warranty: "Lifetime"
    },
    {
        id: 303,
        category: "Pendant Lights",
        name: "Modern Pendant Light",
        price: "Contact for Price",
        image: "assets/303.webp",
        desc: "Elegant pendant light for modern interiors.",
        warranty: "Lifetime"
    },
    {
        id: 304,
        category: "Pendant Lights",
        name: "Stylish Hanging Lamp",
        price: "Contact for Price",
        image: "assets/304.webp",
        desc: "Contemporary hanging lamp design.",
        warranty: "Lifetime"
    },
    {
        id: 305,
        category: "Pendant Lights",
        name: "Chic Pendant Fixture",
        price: "Contact for Price",
        image: "assets/305.webp",
        desc: "Chic pendant fixture to enhance your space.",
        warranty: "Lifetime"
    },
    {
        id: 306,
        category: "Pendant Lights",
        name: "Elegant Drop Light",
        price: "Contact for Price",
        image: "assets/306.webp",
        desc: "Sophisticated drop light for a refined look.",
        warranty: "Lifetime"
    },
    {
        id: 404,
        category: "Pendant Lights",
        name: "Vintage Industrial Pendant",
        price: "Contact for Price",
        image: "assets/404.webp",
        desc: "Classic vintage design with an industrial touch.",
        warranty: "Lifetime"
    },
    {
        id: 405,
        category: "Pendant Lights",
        name: "Geometric Wire Pendant",
        price: "Contact for Price",
        image: "assets/405.webp",
        desc: "Modern open-frame geometric pendant light.",
        warranty: "Lifetime"
    },
    {
        id: 406,
        category: "Pendant Lights",
        name: "Minimalist Globe Pendant",
        price: "Contact for Price",
        image: "assets/406.webp",
        desc: "Simple and elegant glass globe pendant.",
        warranty: "Lifetime"
    },
    {
        id: 407,
        category: "Pendant Lights",
        name: "Luxury Crystal Drop",
        price: "Contact for Price",
        image: "assets/407.webp",
        desc: "Premium crystal pendant for a luxurious ambiance.",
        warranty: "Lifetime"
    },
    {
        id: 408,
        category: "Pendant Lights",
        name: "Rustic Farmhouse Light",
        price: "Contact for Price",
        image: "assets/408.webp",
        desc: "Charmingly rustic pendant perfect for farmhouse decor.",
        warranty: "Lifetime"
    },
    {
        id: 409,
        category: "Pendant Lights",
        name: "Contemporary Art Pendant",
        price: "Contact for Price",
        image: "assets/409.webp",
        desc: "Artistic lighting fixture that doubles as a centerpiece.",
        warranty: "Lifetime"
    },
    {
        id: 410,
        category: "Pendant Lights",
        name: "Sleek Cylinder Pendant",
        price: "Contact for Price",
        image: "assets/410.webp",
        desc: "Streamlined cylinder shape for directed lighting.",
        warranty: "Lifetime"
    },

    // Indoor Wall Sconces
    // Modern / Geometric
    {
        id: 401,
        category: "Wall Sconce",
        name: "Minimalist Cylinder Sconce",
        price: "Contact for Price",
        image: "assets/401.webp",
        desc: "Sleek cylindrical fixture for modern wall lighting.",
        type: "wattage",
        variants: [
            { label: "20W", price: "Contact for Price" }
        ],
        warranty: "Lifetime"
    },
    {
        id: 103,
        category: "Wall Sconce",
        name: "Essential Wall Sconce",
        price: "Contact for Price",
        image: "assets/indoor_wall.webp",
        desc: "A showcase of our versatile and stylish wall sconce designs.",
        warranty: "Lifetime"
    },
    {
        id: 201,
        category: "Wall Sconce",
        name: "Rectangular LED Sconce",
        price: "Contact for Price",
        image: "assets/1453.webp",
        desc: "Sharp lines and energy-efficient LED lighting for modern hallways.",
        type: "wattage",
        variants: [
            { label: "20W", price: "Contact for Price" }
        ],
        warranty: "Lifetime"
    },
    {
        id: 202,
        category: "Wall Sconce",
        name: "Curved Wall Light",
        price: "Contact for Price",
        image: "assets/145356.webp",
        desc: "Soft curves allowing for a gentle wash of light across the wall.",
        warranty: "Lifetime"
    },
    {
        id: 203,
        category: "Wall Sconce",
        name: "Up-Down Wall Washer",
        price: "Contact for Price",
        image: "assets/145398.webp",
        desc: "Illuminates both upwards and downwards for a dramatic spatial effect.",
        type: "wattage",
        variants: [
            { label: "12W", price: "Contact for Price" }
        ],
        warranty: "Lifetime"
    },
    {
        id: 204,
        category: "Wall Sconce",
        name: "Cube Wall Sconce",
        price: "Contact for Price",
        image: "assets/451.webp",
        desc: "Compact geometric design that fits perfectly in smaller spaces.",
        warranty: "Lifetime"
    },
    {
        id: 207,
        category: "Wall Sconce",
        name: "Minimalist Bar Sconce",
        price: "Contact for Price",
        image: "assets/631.webp",
        desc: "Ultra-thin vertical bar light for a sleek, barely-there look.",
        warranty: "Lifetime"
    },
    {
        id: 213,
        category: "Wall Sconce",
        name: "Linear Vanity Light",
        price: "Contact for Price",
        image: "assets/6874.webp",
        desc: "Long linear fixture, perfect for mounting above bathroom mirrors.",
        warranty: "Lifetime"
    },
    {
        id: 214,
        category: "Wall Sconce",
        name: "Vogue Geometric Sconce",
        price: "Contact for Price",
        image: "assets/402.webp",
        desc: "A sleek and modern wall sconce to enhance your interior.",
        type: "wattage",
        variants: [
            { label: "20W", price: "Contact for Price" }
        ],
        warranty: "Lifetime"
    },
    {
        id: 215,
        category: "Wall Sconce",
        name: "Urban Block Wall Light",
        price: "Contact for Price",
        image: "assets/403.webp",
        desc: "Elegant wall lighting fixture for a contemporary look.",
        type: "wattage",
        variants: [
            { label: "12W", price: "Contact for Price" }
        ],
        warranty: "Lifetime"
    },
    {
        id: 216,
        category: "Wall Sconce",
        name: "Abstract Form Sconce",
        price: "Contact for Price",
        image: "assets/500.webp",
        desc: "Distinctive wall light with a unique shape.",
        warranty: "Lifetime"
    },
    {
        id: 219,
        category: "Wall Sconce",
        name: "Solaris Gold Halo Sconce",
        price: "Contact for Price",
        image: "assets/801.webp",
        desc: "Modern circular LED wall sconce with a gold center.",
        warranty: "Lifetime"
    },
    {
        id: 220,
        category: "Wall Sconce",
        name: "Eclipse Dual Sconce",
        price: "Contact for Price",
        image: "assets/0001.webp",
        desc: "Modern rounded wall light available in black and white finishes.",
        type: "wattage",
        variants: [
            { label: "20W", price: "Contact for Price" }
        ],
        warranty: "Lifetime"
    },
    {
        id: 208,
        category: "Wall Sconce",
        name: "Circular Wall Lamp",
        price: "Contact for Price",
        image: "assets/634.webp",
        desc: "Simple halo design creating a warm circle of light.",
        warranty: "Lifetime"
    },
    // Decorative / Classic / Gold
    {
        id: 205,
        category: "Wall Sconce",
        name: "Crystal Wall Fixture",
        price: "Contact for Price",
        image: "assets/68.webp",
        desc: "Elegant fixture with crystal accents to add a touch of luxury.",
        warranty: "Lifetime"
    },
    {
        id: 206,
        category: "Wall Sconce",
        name: "Brass Arm Sconce",
        price: "Contact for Price",
        image: "assets/625.webp",
        desc: "Classic brass finish with an adjustable arm for reading or accent.",
        warranty: "Lifetime"
    },
    {
        id: 211,
        category: "Wall Sconce",
        name: "Gold Leaf Sconce",
        price: "Contact for Price",
        image: "assets/6589.webp",
        desc: "Luxurious gold finish that acts as a piece of wall art.",
        warranty: "Lifetime"
    },
    {
        id: 212,
        category: "Wall Sconce",
        name: "Traditional Lantern Sconce",
        price: "Contact for Price",
        image: "assets/674.webp",
        desc: "Classic lantern style adapted for elegant indoor corridors.",
        warranty: "Lifetime"
    },
    // Industrial / Retro
    {
        id: 210,
        category: "Wall Sconce",
        name: "Industrial Pipe Sconce",
        price: "Contact for Price",
        image: "assets/6314.webp",
        desc: "Rustic pipe design ideal for industrial or loft-style interiors.",
        warranty: "Lifetime"
    },
    {
        id: 217,
        category: "Wall Sconce",
        name: "Retro Mesh Industrial Wall Lamp",
        price: "Contact for Price",
        image: "assets/503.webp",
        desc: "Retro-industrial style wall lamp with metal mesh.",
        warranty: "Lifetime"
    },
    {
        id: 218,
        category: "Wall Sconce",
        name: "Cage Bulb Vintage Sconce",
        price: "Contact for Price",
        image: "assets/504.webp",
        desc: "Elegant black metal fixture with a decorative bulb cage.",
        warranty: "Lifetime"
    },
    {
        id: 221,
        category: "Wall Sconce",
        name: "Maritime Grid Wall Lamp",
        price: "Contact for Price",
        image: "assets/0000.webp",
        desc: "Durable oval bulkhead light with a protective grid design.",
        type: "wattage",
        variants: [
            { label: "20W", price: "Contact for Price" }
        ],
        warranty: "Lifetime"
    },
    // Glass
    {
        id: 209,
        category: "Wall Sconce",
        name: "Textured Glass Sconce",
        price: "Contact for Price",
        image: "assets/647.webp",
        desc: "Frosted or textured glass diffusing light for a soft glow.",
        warranty: "Lifetime"
    },

    // Spotlights
    // Recessed
    {
        id: 803,
        category: "Staircase Lighting",
        name: "Seamless Recessed Downlight",
        price: "Contact for Price",
        image: "assets/902.webp",
        desc: "Clean flush-mount look for a seamless ceiling integration.",
        warranty: "Lifetime"
    },
    {
        id: 804,
        category: "Spotlights",
        name: "Nova Sleek Recessed Spot",
        price: "Contact for Price",
        image: "assets/spotlight_new_1.webp",
        desc: "Sleek modern design improving the aesthetics of any room.",
        warranty: "Lifetime"
    },
    {
        id: 805,
        category: "Cover Frame",
        name: "Cover Frame",
        price: "Contact for Price",
        image: "assets/805.webp",
        desc: "Elegant cover frame for electrical switches.",
        warranty: "Lifetime"
    },
    {
        id: 807,
        category: "Cover Frame",
        name: "Cover Frame",
        price: "Contact for Price",
        image: "assets/807.webp",
        desc: "Elegant cover frame for electrical switches.",
        warranty: "Lifetime"
    },
    {
        id: 808,
        category: "Cover Frame",
        name: "Cover Frame",
        price: "Contact for Price",
        image: "assets/808.webp",
        desc: "Elegant cover frame for electrical switches.",
        warranty: "Lifetime"
    },
    {
        id: 809,
        category: "Cover Frame",
        name: "Cover Frame",
        price: "Contact for Price",
        image: "assets/809.webp",
        desc: "Elegant cover frame for electrical switches.",
        warranty: "Lifetime"
    },
    {
        id: 810,
        category: "Cover Frame",
        name: "Cover Frame",
        price: "Contact for Price",
        image: "assets/810.webp",
        desc: "Elegant cover frame for electrical switches.",
        warranty: "Lifetime"
    },
    {
        id: 813,
        category: "Spotlights",
        name: "Focus Efficient Spot",
        price: "Contact for Price",
        image: "assets/spotlight_new_10.webp",
        desc: "High-performance recessed spotlight for modern interiors.",
        warranty: "Lifetime"
    },
    {
        id: 814,
        category: "Spotlights",
        name: "Radiance High-Lumen Spot",
        price: "Contact for Price",
        image: "assets/spotlight_new_11.webp",
        desc: "Compact and powerful spotlight for versatile use.",
        warranty: "Lifetime"
    },
    {
        id: 815,
        category: "Spotlights",
        name: "Micro Beam Compact Spot",
        price: "Contact for Price",
        image: "assets/spotlight_new_12.webp",
        desc: "Square recessed light with a modern aesthetic.",
        warranty: "Lifetime"
    },
    {
        id: 818,
        category: "Spotlights",
        name: "Obsidian Dark Light Spot",
        price: "Contact for Price",
        image: "assets/spotlight_new_15.webp",
        desc: "Deep recessed spotlight for reduced glare and focused beam.",
        warranty: "Lifetime"
    },
    {
        id: 823,
        category: "Spotlights",
        name: "Copper Core Recessed Spot",
        price: "Contact for Price",
        image: "assets/spotlight_new_20.webp",
        desc: "Stylish recessed spotlight with copper reflector.",
        warranty: "Lifetime"
    },
    // Surface / Directional / Adjustable
    {
        id: 801,
        category: "Staircase Lighting",
        name: "Surface Mount Director",
        price: "Contact for Price",
        image: "assets/900.webp",
        desc: "Surface mounted ceiling directional light for general illumination.",
        warranty: "Lifetime"
    },
    {
        id: 802,
        category: "Staircase Lighting",
        name: "Precision Track Head Spot",
        price: "Contact for Price",
        image: "assets/901.webp",
        desc: "Flexible head allowing precise aiming of the light beam.",
        warranty: "Lifetime"
    },
    {
        id: 806,
        category: "Cover Frame",
        name: "Cover Frame",
        price: "Contact for Price",
        image: "assets/806.webp",
        desc: "Elegant cover frame for electrical switches.",
        warranty: "Lifetime"
    },
    {
        id: 817,
        category: "Spotlights",
        name: "Apex Architectural Spot",
        price: "Contact for Price",
        image: "assets/spotlight_new_14.webp",
        desc: "Precision-engineered spotlight for architectural lighting.",
        warranty: "Lifetime"
    },
    {
        id: 822,
        category: "Spotlights",
        name: "Angle Square Adjustable",
        price: "Contact for Price",
        image: "assets/spotlight_new_19.webp",
        desc: "Refined square spotlight with adjustable angle.",
        warranty: "Lifetime"
    },
    // Multi-Head
    {
        id: 816,
        category: "Spotlights",
        name: "Trinity Multi-Head Spot",
        price: "Contact for Price",
        image: "assets/spotlight_new_13.webp",
        desc: "Triple-head spotlight for maximum coverage.",
        warranty: "Lifetime"
    },
    {
        id: 819,
        category: "Spotlights",
        name: "Flexio Multi-Head System",
        price: "Contact for Price",
        image: "assets/spotlight_new_16.webp",
        desc: "Adjustable multi-head spotlight for flexible lighting.",
        warranty: "Lifetime"
    },
    // Cylinder Surface
    {
        id: 824,
        category: "Spotlights",
        name: "Pure White Cylinder Spot",
        price: "Contact for Price",
        image: "assets/spotlight_new_21.webp",
        desc: "Surface mounted cylindrical spotlight in white.",
        warranty: "Lifetime"
    },
    {
        id: 825,
        category: "Spotlights",
        name: "Midnight Black Cylinder Spot",
        price: "Contact for Price",
        image: "assets/spotlight_new_22.webp",
        desc: "Modern surface mounted spotlight in black finish.",
        warranty: "Lifetime"
    },
    // Dramatic / Contrast
    {
        id: 811,
        category: "Spotlights",
        name: "Eclipse Dual-Tone Spot",
        price: "Contact for Price",
        image: "assets/spotlight_new_8.webp",
        desc: "Dual-tone finish for a sophisticated look.",
        warranty: "Lifetime"
    },
    {
        id: 820,
        category: "Spotlights",
        name: "Drama High-Contrast Spot",
        price: "Contact for Price",
        image: "assets/spotlight_new_17.webp",
        desc: "High-contrast spotlight for dramatic effects.",
        warranty: "Lifetime"
    },
    {
        id: 821,
        category: "Spotlights",
        name: "Regal Black & Gold Spot",
        price: "Contact for Price",
        image: "assets/spotlight_new_18.webp",
        desc: "Sleek combination of black and gold for luxury interiors.",
        warranty: "Lifetime"
    },

    // Outdoor Pillar Lights
    {
        id: 105,
        category: "Outdoor Pillar Lights",
        name: "Estate Pillar Lantern",
        price: "Contact for Price",
        image: "assets/outdoor_pillar.webp",
        desc: "Timeless design for gate posts and garden entrances.",
        warranty: "Lifetime"
    },
    {
        id: 509,
        category: "Outdoor Pillar Lights",
        name: "Heritage Hanging Lantern",
        price: "Contact for Price",
        image: "assets/498.webp",
        desc: "Durable outdoor hanging fixture for porches and verandas.",
        type: "wattage",
        variants: [
            { label: "20W", price: "Contact for Price" },
            { label: "40W", price: "Contact for Price" }
        ],
        warranty: "Lifetime"
    },
    {
        id: 622,
        category: "Outdoor Pillar Lights",
        name: "Contemporary Bollard Post",
        price: "Contact for Price",
        image: "assets/459.webp",
        desc: "Sleek rectangular post light providing structural elegance outdoors.",
        type: "wattage",
        variants: [
            { label: "20W", price: "Contact for Price" },
            { label: "40W", price: "Contact for Price" }
        ],
        warranty: "Lifetime"
    },
    {
        id: 106,
        category: "Outdoor Pillar Lights",
        name: "Architectural Skyline Bollard",
        price: "Contact for Price",
        image: "assets/0002.webp",
        desc: "Sleek, modern bollard light with a unique open-frame design.",
        warranty: "Lifetime"
    },
    {
        id: 603,
        category: "Outdoor Pillar Lights",
        name: "Cylindrical Pathway Guard",
        price: "Contact for Price",
        image: "assets/485.webp",
        desc: "Cylindrical outdoor pathway light for safe and stylish navigation.",
        warranty: "Lifetime"
    },
    {
        id: 150,
        category: "Outdoor Pillar Lights",
        name: "Luminous Path T-Post",
        price: "Contact for Price",
        image: "assets/0003.webp",
        desc: "Modern T-shaped bollard light providing wide, downward illumination for pathways.",
        warranty: "Lifetime"
    },

    {
        id: 154,
        category: "Outdoor Pillar Lights",
        name: "Modern Slat Post",
        price: "Contact for Price",
        image: "assets/300.webp",
        desc: "Sleek modern post with horizontal slat design for directional path lighting.",
        type: "wattage",
        variants: [
            { label: "20W", price: "Contact for Price" },
            { label: "40W", price: "Contact for Price" }
        ],
        warranty: "Lifetime"
    },
    {
        id: 155,
        category: "Outdoor Pillar Lights",
        name: "Classic Garden Lantern",
        price: "Contact for Price",
        image: "assets/301.webp",
        desc: "Traditional lantern style adapted for garden paths and driveways.",
        warranty: "Lifetime"
    },
    {
        id: 156,
        category: "Outdoor Pillar Lights",
        name: "Contemporary Bollard",
        price: "Contact for Price",
        image: "assets/302.webp",
        desc: "Minimalist bollard light providing soft, 360-degree illumination.",
        type: "wattage",
        variants: [
            { label: "20W", price: "Contact for Price" },
            { label: "40W", price: "Contact for Price" }
        ],
        warranty: "Lifetime"
    },

    // Floor Lamps
    {
        id: 301,
        category: "Floor Lamp",
        name: "Grand Arch Floor Lamp",
        price: "Contact for Price",
        image: "assets/785.webp",
        desc: "Sweeping arc design providing overhead lighting for couches.",
        warranty: "Lifetime"
    },
    {
        id: 302,
        category: "Floor Lamp",
        name: "Nordic Tripod Floor Stand",
        price: "Contact for Price",
        image: "assets/794.webp",
        desc: "Stable and stylish tripod base with a modern shade.",
        warranty: "Lifetime"
    },
    {
        id: 786,
        category: "Floor Lamp",
        name: "Sleek Modern Floor Lamp",
        price: "Contact for Price",
        image: "assets/786.webp",
        desc: "Elegant floor lamp design suitable for modern living spaces.",
        warranty: "Lifetime"
    },
    {
        id: 787,
        category: "Floor Lamp",
        name: "Contemporary Standing Light",
        price: "Contact for Price",
        image: "assets/787.webp",
        desc: "Stylish floor lighting solution with a contemporary finish.",
        warranty: "Lifetime"
    },
    {
        id: 788,
        category: "Floor Lamp",
        name: "Minimalist Corner Lamp",
        price: "Contact for Price",
        image: "assets/788.webp",
        desc: "A perfect blend of minimalism and functionality for corner lighting.",
        warranty: "Lifetime"
    },

    // Garden Spike Lights
    {
        id: 8,
        category: "Garden Spike Lights",
        name: "Precision Garden Spike Spot",
        price: "Contact for Price",
        image: "assets/garden_spike.webp",
        desc: "Focused beam for illuminating trees, shrubs, and garden paths.",
        warranty: "2 Years"
    },
    {
        id: 9,
        category: "Garden Spike Lights",
        name: "Adjustable Garden Spotlight",
        price: "Contact for Price",
        image: "assets/garden_spike_2.webp",
        desc: "Versatile outdoor spike light with adjustable head for precise lighting.",
        warranty: "2 Years"
    },
    {
        id: 12,
        category: "Garden Spike Lights",
        name: "Focus Spot Spike",
        price: "Contact for Price",
        image: "assets/garden_spike_5.webp",
        desc: "High-intensity focused spike light for highlighting specific garden elements.",
        type: "wattage",
        variants: [
            { label: "7W", price: "Contact for Price" }
        ],
        warranty: "2 Years"
    },
    {
        id: 10,
        category: "Garden Spike Lights",
        name: "Compact Landscape Spike",
        price: "Contact for Price",
        image: "assets/garden_spike_3.webp",
        desc: "Compact and powerful spike light for discreet landscape illumination.",
        type: "wattage",
        variants: [
            { label: "7W", price: "$45" }
        ],
        warranty: "2 Years"
    },
    {
        id: 11,
        category: "Garden Spike Lights",
        name: "Wide Beam Garden Spike",
        price: "Contact for Price",
        image: "assets/garden_spike_4.webp",
        desc: "Broad beam spike light ideal for lighting up larger garden features.",
        warranty: "2 Years"
    },
    {
        id: 13,
        category: "Garden Spike Lights",
        name: "Pathlighter Pro Spike",
        price: "Contact for Price",
        image: "assets/garden_spike_6.webp",
        desc: "Professional-grade spike light designed for illuminating pathways clearly.<span style='display:inline-block; border:1px solid currentColor; padding:2px 6px; font-weight:bold; margin-left:8px; border-radius:3px;'>20W</span>",
        warranty: "2 Years"
    },

    // Track Lights

    {
        id: 402,
        category: "Track Lights",
        name: "360-Degree Gimbal Track Light",
        price: "Contact for Price",
        image: "assets/251.webp",
        desc: "Fully adjustable gimbal head for versatile lighting angles.",
        warranty: "Lifetime"
    },
    {
        id: 403,
        category: "Track Lights",
        name: "Linear Flood Track Module",
        price: "Contact for Price",
        image: "assets/252.webp",
        desc: "Wide beam linear module for general area lighting on tracks.",
        warranty: "Lifetime"
    },
    {
        id: 404,
        category: "Track Lights",
        name: "Linear Accent Track Module",
        price: "Contact for Price",
        image: "assets/253.webp",
        desc: "Slim profile linear light for subtle, integrated track lighting.",
        warranty: "Lifetime"
    },
    {
        id: 405,
        category: "Track Lights",
        name: "Multi-Dot Track Module",
        price: "Contact for Price",
        image: "assets/254.webp",
        desc: "Multi-point linear spot module for high-contrast lighting.",
        warranty: "Lifetime"
    },
    {
        id: 406,
        category: "Track Lights",
        name: "Ultra-Slim Magnetic System",
        price: "Contact for Price",
        image: "assets/255.webp",
        desc: "Modular magnetic track components for ultimate flexibility.",
        warranty: "Lifetime"
    },

    // Extension Cords
    {
        id: 1001,
        category: "Extension Cord",
        name: "iLOCK Extension Cord 3m",
        price: "Contact for Price",
        image: "assets/700.webp",
        desc: "High-quality 3m extension cord with safety lock to prevent accidental disconnection.",
        warranty: "Lifetime"
    },
    {
        id: 1002,
        category: "Extension Cord",
        name: "iLOCK Extension Cord 5m",
        price: "Contact for Price",
        image: "assets/701.webp",
        desc: "5m extension cord featuring secure iLOCK technology for safe and reliable power.",
        warranty: "Lifetime"
    },
    {
        id: 1003,
        category: "Extension Cord",
        name: "iLOCK Extension Cord 10m",
        price: "Contact for Price",
        image: "assets/702.webp",
        desc: "Heavy-duty 10m extension cord with patented locking mechanism. Ideal for workshops and gardens.",
        warranty: "Lifetime"
    },
    {
        id: 1004,
        category: "Extension Cord",
        name: "iLOCK Extension Cord 15m",
        price: "Contact for Price",
        image: "assets/703.webp",
        desc: "Long-reach 15m extension cord, perfect for outdoor tools and extensive power needs. Features iLOCK safety.",
        warranty: "Lifetime"
    },
    {
        id: 1005,
        category: "Extension Cord",
        name: "iLOCK Extension Cord 20m",
        price: "Contact for Price",
        image: "assets/704.webp",
        desc: "Extra-long 20m extension reel with safety lock. Maximum reach for professional and home use.",
        warranty: "Lifetime"
    },
    {
        id: 727,
        category: "Extension Cord",
        name: "Extension Cord",
        price: "Contact for Price",
        image: "assets/727.webp",
        desc: "High quality extension cord for reliable power connectivity.",
        warranty: "Lifetime"
    },
    {
        id: 728,
        category: "Extension Cord",
        name: "Extension Cord",
        price: "Contact for Price",
        image: "assets/728.webp",
        desc: "Durable and secure extension cord for indoor use.",
        warranty: "Lifetime"
    },
    {
        id: 729,
        category: "Extension Cord",
        name: "Extension Cord",
        price: "Contact for Price",
        image: "assets/729.webp",
        desc: "Flexible and long-lasting extension cord.",
        warranty: "Lifetime"
    },

    // Plugs
    {
        id: 1006,
        category: "Plugs",
        name: "iLOCK Secure Plug",
        price: "50 L.E",
        image: "assets/705.webp",
        desc: "High-quality plug with secure grip and durable construction.",
        warranty: "Lifetime"
    },
    {
        id: 1007,
        category: "Plugs",
        name: "iLOCK Power Socket",
        price: "25 L.E",
        image: "assets/706.webp",
        desc: "Reliable power socket designed for safety and longevity.",
        warranty: "Lifetime"
    },
    {
        id: 1008,
        category: "Plugs",
        name: "Standard Grounded Plug",
        price: "25 L.E",
        image: "assets/707.webp",
        desc: "Standard grounded plug suitable for a wide range of appliances.",
        warranty: "Lifetime"
    },
    {
        id: 1009,
        category: "Plugs",
        name: "Heavy-Duty Plug",
        price: "45 L.E",
        image: "assets/708.webp",
        desc: "Heavy-duty plug built to withstand demanding industrial environments.",
        warranty: "Lifetime"
    },

    // PVC Tape
    {
        id: 1010,
        category: "PVC Tape",
        name: "Premium PVC Insulation Tape",
        price: "20 L.E",
        image: "assets/709.webp",
        desc: "High-grade PVC tape with excellent elasticity and adhesion for wire insulation.",
        warranty: "Lifetime"
    },
    {
        id: 1011,
        category: "PVC Tape",
        name: "Professional Electrical Tape",
        price: "40 L.E",
        image: "assets/710.webp",
        desc: "Durable electrical tape providing strong protection against abrasion and moisture.",
        warranty: "Lifetime"
    },
    {
        id: 1012,
        category: "PVC Tape",
        name: "Color-Coded PVC Tape",
        price: "30 L.E",
        image: "assets/711.webp",
        desc: "Versatile PVC tape available for phase coding and general bundling.",
        warranty: "Lifetime"
    },

    // Power Strips (New Additions)
    {
        id: 714,
        category: "Power Strips",
        name: "Multi-Outlet Power Strip",
        price: "Contact for Price", // Base/Starting Price
        image: "assets/714.webp",
        desc: "Versatile power strip for home and office use.",
        type: "length",
        variants: [
            { label: "1.5m", price: "Contact for Price" },
            { label: "3m", price: "Contact for Price" }
        ],
        warranty: "Lifetime"
    },
    {
        id: 715,
        category: "Power Strips",
        name: "Compact Power Strip",
        price: "Contact for Price",
        image: "assets/715.webp",
        desc: "Space-saving design with multiple outlets.",
        type: "length",
        variants: [
            { label: "1.5m", price: "Contact for Price" },
            { label: "3m", price: "Contact for Price" }
        ],
        warranty: "Lifetime"
    },
    {
        id: 716,
        category: "Power Strips",
        name: "Universal Power Strip",
        price: "Contact for Price",
        image: "assets/716.webp",
        desc: "Universal socket power strip.",
        warranty: "Lifetime"
    },
    {
        id: 717,
        category: "Power Strips",
        name: "Extended Reach Power Strip",
        price: "Contact for Price",
        image: "assets/717.webp",
        desc: "Power strip with long cable for extended reach.",
        type: "length",
        variants: [
            { label: "5m", price: "Contact for Price" }
        ],
        warranty: "Lifetime"
    },
    {
        id: 718,
        category: "Power Strips",
        name: "Heavy Duty Power Strip",
        price: "Contact for Price",
        image: "assets/718.webp",
        desc: "Robust power strip designed for heavy usage.",
        type: "length",
        variants: [
            { label: "5m", price: "Contact for Price" }
        ],
        warranty: "Lifetime"
    },
    {
        id: 719,
        category: "Power Strips",
        name: "Essential Power Strip",
        price: "Contact for Price",
        image: "assets/719.webp",
        desc: "Reliable daily use power strip.",
        type: "length",
        variants: [
            { label: "2m", price: "Contact for Price" }
        ],
        warranty: "Lifetime"
    },
    {
        id: 720,
        category: "Power Strips",
        name: "Secure Power Strip",
        price: "Contact for Price",
        image: "assets/720.webp",
        desc: "Safe and secure power distribution unit.",
        type: "length",
        variants: [
            { label: "2m", price: "Contact for Price" }
        ],
        warranty: "Lifetime"
    },
    {
        id: 721,
        category: "Power Strips",
        name: "Standard Power Strip",
        price: "Contact for Price",
        image: "assets/721.webp",
        desc: "Standard multi-socket power strip.",
        warranty: "Lifetime"
    },
    {
        id: 722,
        category: "Power Strips",
        name: "Premium Power Strip",
        price: "Contact for Price",
        image: "assets/722.webp",
        desc: "High-quality premium finish power strip.",
        type: "length",
        variants: [
            { label: "1.5m", price: "Contact for Price" },
            { label: "3m", price: "Contact for Price" }
        ],
        warranty: "Lifetime"
    },
    {
        id: 725,
        category: "Power Strips",
        name: "Power Strip",
        price: "Contact for Price",
        image: "assets/725.webp",
        desc: "Durable and multi-socket power strip.",
        warranty: "Lifetime"
    },
    {
        id: 726,
        category: "Power Strips",
        name: "Power Strip",
        price: "Contact for Price",
        image: "assets/726.webp",
        desc: "Reliable power strip with essential protections.",
        warranty: "Lifetime"
    },

    // Power Supply Adapters
    {
        id: 724,
        category: "Power Supply Adapter",
        name: "Professional Power Supply",
        price: "Select Wattage",
        image: "assets/723.webp",
        desc: "High-efficiency power supply unit available in multiple wattages.",
        type: "wattage",
        variants: [
            { label: "60W", price: "Contact for Price" },
            { label: "100W", price: "Contact for Price" },
            { label: "150W", price: "Contact for Price" },
            { label: "200W", price: "Contact for Price" },
            { label: "300W", price: "Contact for Price" }
        ],
        warranty: "2 Years"
    },

    // Lamps
    {
        id: 28,
        category: "Lamps",
        name: "Premium LED Bulb",
        price: "Contact for Price",
        image: "assets/603.webp",
        desc: "High-efficiency LED bulb available in various wattages and color temperatures.",
        warranty: "2 Years",
        optionGroups: [
            { name: "Wattage", options: ["5w", "9w", "12w", "15w", "18w", "23w", "30w", "45w"] },
            { name: "Base", options: ["E14", "E27"] },
            { name: "Color Temperature", options: ["Warm", "Cool"] }
        ]
    },
    {
        id: 604,
        category: "Lamps",
        name: "LED Candle Bulb",
        price: "Contact for Price",
        image: "assets/604.webp",
        desc: "Energy-efficient LED bulb available in multiple wattages and color temperatures.",
        warranty: "2 Years",
        optionGroups: [
            { name: "Wattage", options: ["3.5W", "5W"] },
            { name: "Color Temperature", options: ["Warm", "Cool"] }
        ]
    },


    // Cable Rolls
    {
        id: 21,
        category: "Cable Roll",
        name: "Premium Cable Roll",
        price: "Contact for Price",
        image: "assets/021.webp",
        desc: "High-quality durable cable roll.",
        warranty: "2 Years"
    },
    {
        id: 22,
        category: "Cable Roll",
        name: "Premium Cable Roll",
        price: "Contact for Price",
        image: "assets/022.webp",
        desc: "High-quality durable cable roll.",
        warranty: "2 Years"
    },
    {
        id: 23,
        category: "Cable Roll",
        name: "Premium Cable Roll",
        price: "Contact for Price",
        image: "assets/023.webp",
        desc: "High-quality durable cable roll.",
        warranty: "2 Years"
    },
    {
        id: 24,
        category: "Cable Roll",
        name: "Premium Cable Roll",
        price: "Contact for Price",
        image: "assets/024.webp",
        desc: "High-quality durable cable roll.",
        warranty: "2 Years"
    },
    {
        id: 25,
        category: "Cable Roll",
        name: "Premium Cable Roll",
        price: "Contact for Price",
        image: "assets/025.webp",
        desc: "High-quality durable cable roll.",
        warranty: "2 Years"
    },

    // LED Strip Light
    {
        id: 26,
        category: "LED Strip Light",
        name: "LED Strip Light",
        price: "Contact for Price",
        image: "assets/026.webp",
        desc: "High-quality LED strip light for versatile lighting applications.",
        warranty: "2 Years"
    },
    {
        id: 27,
        category: "LED Strip Light",
        name: "LED Strip Light",
        price: "Contact for Price",
        image: "assets/027.webp",
        desc: "Premium LED strip light with vibrant illumination.",
        warranty: "2 Years"
    },

    // Panels
    {
        id: 739,
        category: "Panels",
        name: "LED Panel",
        price: "Contact for Price",
        image: "assets/739.webp",
        desc: "High-quality lighting panel for optimal illumination.",
        warranty: "2 Years",
        optionGroups: [
            { name: "Color Temperature", options: ["Warm", "Cool"] }
        ]
    },
    {
        id: 740,
        category: "Panels",
        name: "LED Panel",
        price: "Contact for Price",
        image: "assets/740.webp",
        desc: "High-quality lighting panel for optimal illumination.",
        warranty: "2 Years",
        optionGroups: [
            { name: "Color Temperature", options: ["Warm", "Cool"] },
            { name: "Color", options: ["White", "Gray", "Black"] }
        ]
    },
    {
        id: 741,
        category: "Panels",
        name: "LED Panel",
        price: "Contact for Price",
        image: "assets/741.webp",
        desc: "High-quality lighting panel for optimal illumination.",
        warranty: "2 Years",
        optionGroups: [
            { name: "Color Temperature", options: ["Warm", "Cool"] },
            { name: "Color", options: ["White", "Gray", "Black"] }
        ]
    },
    {
        id: 742,
        category: "Panels",
        name: "LED Panel",
        price: "Contact for Price",
        image: "assets/742.webp",
        desc: "High-quality lighting panel for optimal illumination.",
        warranty: "2 Years",
        optionGroups: [
            { name: "Color Temperature", options: ["Warm", "Cool"] }
        ]
    },
    {
        id: 743,
        category: "Panels",
        name: "LED Panel",
        price: "Contact for Price",
        image: "assets/743.webp",
        desc: "High-quality lighting panel for optimal illumination.",
        warranty: "2 Years",
        optionGroups: [
            { name: "Color Temperature", options: ["Warm", "Cool"] }
        ]
    },

    // Flashlight
    {
        id: 908,
        category: "Flashlight",
        name: "Flashlight",
        price: "Contact for Price",
        image: "assets/908.webp",
        desc: "High-quality 50W flashlight for optimal illumination.",
        type: "wattage",
        variants: [
            { label: "50W", price: "Contact for Price" }
        ],
        warranty: "2 Years"
    },
    {
        id: 910,
        category: "Flashlight",
        name: "Flashlight",
        price: "Contact for Price",
        image: "assets/910.webp",
        desc: "High-quality 100W flashlight for optimal illumination.",
        type: "wattage",
        variants: [
            { label: "100W", price: "Contact for Price" }
        ],
        warranty: "2 Years"
    },
    {
        id: 909,
        category: "Flashlight",
        name: "Flashlight",
        price: "Contact for Price",
        image: "assets/909.webp",
        desc: "High-quality 150W flashlight for optimal illumination.",
        type: "wattage",
        variants: [
            { label: "150W", price: "Contact for Price" }
        ],
        warranty: "2 Years"
    },
    {
        id: 907,
        category: "Flashlight",
        name: "Flashlight",
        price: "Contact for Price",
        image: "assets/907.webp",
        desc: "High-quality 200W flashlight for optimal illumination.",
        type: "wattage",
        variants: [
            { label: "200W", price: "Contact for Price" }
        ],
        warranty: "2 Years"
    },

    // Mobile Accessories (New Section)
    {
        id: 730,
        category: "Mobile Accessories",
        name: "Mobile Accessory",
        price: "Contact for Price",
        image: "assets/730.webp",
        desc: "High-quality mobile accessory for daily use.",
        warranty: "1 Year"
    },
    {
        id: 731,
        category: "Mobile Accessories",
        name: "Mobile Accessory",
        price: "Contact for Price",
        image: "assets/731.webp",
        desc: "Essential mobile accessory with durable build.",
        warranty: "1 Year"
    },
    {
        id: 732,
        category: "Mobile Accessories",
        name: "Mobile Accessory",
        price: "Contact for Price",
        image: "assets/732.webp",
        desc: "Premium mobile accessory.",
        warranty: "1 Year"
    },
    {
        id: 733,
        category: "Mobile Accessories",
        name: "Mobile Accessory",
        price: "Contact for Price",
        image: "assets/733.webp",
        desc: "Reliable mobile accessory.",
        warranty: "1 Year"
    },
    {
        id: 734,
        category: "Mobile Accessories",
        name: "Mobile Accessory",
        price: "Contact for Price",
        image: "assets/734.webp",
        desc: "Versatile mobile accessory.",
        warranty: "1 Year"
    },
    {
        id: 735,
        category: "Mobile Accessories",
        name: "Mobile Accessory",
        price: "Contact for Price",
        image: "assets/735.webp",
        desc: "Modern and sleek mobile accessory.",
        warranty: "1 Year"
    },

    // Led strip PVC
    {
        id: 736,
        category: "Led strip PVC",
        name: "IDO LED Strip PVC 100M 120LED Warm",
        price: "Contact for Price",
        image: "assets/736.webp",
        desc: "High quality IDO LED Strip 100M with 120 warm LEDs.",
        warranty: "1 Year"
    },
    {
        id: 737,
        category: "Led strip PVC",
        name: "IDO LED Strip PVC 100M 60LED Warm",
        price: "Contact for Price",
        image: "assets/737.webp",
        desc: "High quality IDO LED Strip 100M with 60 warm LEDs.",
        warranty: "1 Year"
    },
    {
        id: 906,
        category: "Flashlight",
        name: "Flashlight",
        price: "Contact for Price",
        image: "assets/906.webp",
        desc: "High-quality 100W flashlight for optimal illumination.",
        type: "wattage",
        variants: [
            { label: "100W", price: "Contact for Price" }
        ],
        warranty: "2 Years"
    },
    {
        id: 905,
        category: "Flashlight",
        name: "Flashlight",
        price: "Contact for Price",
        image: "assets/905.webp",
        desc: "High-quality 200W flashlight for optimal illumination.",
        type: "wattage",
        variants: [
            { label: "200W", price: "Contact for Price" }
        ],
        warranty: "2 Years"
    },
    // Profile Strip
    {
        id: "b01",
        category: "Profile Strip",
        name: "Surface Profile Strip",
        price: "Contact for Price",
        image: "assets/b01.webp",
        desc: "High-quality aluminum profile for LED strips.",
        type: "wattage",
        variants: [
            { label: "2m", price: "Contact for Price" },
            { label: "3m", price: "Contact for Price" }
        ],
        warranty: "2 Years"
    },
    {
        id: "b02",
        category: "Profile Strip",
        name: "Recessed Profile Strip",
        price: "Contact for Price",
        image: "assets/b02.webp",
        desc: "High-quality aluminum profile for LED strips.",
        type: "wattage",
        variants: [
            { label: "2m", price: "Contact for Price" },
            { label: "3m", price: "Contact for Price" }
        ],
        warranty: "2 Years"
    },
    // Staircase Lighting
    {
        id: "a00",
        category: "Staircase Lighting",
        name: "Staircase Lighting",
        price: "Contact for Price",
        image: "assets/a00.webp",
        desc: "Elegant and safe lighting for staircases.",
        warranty: "2 Years"
    },
    {
        id: "a01",
        category: "Staircase Lighting",
        name: "Staircase Lighting",
        price: "Contact for Price",
        image: "assets/a01.webp",
        desc: "Elegant and safe lighting for staircases.",
        warranty: "2 Years"
    },
    {
        id: "a02",
        category: "Staircase Lighting",
        name: "Staircase Lighting",
        price: "Contact for Price",
        image: "assets/a02.webp",
        desc: "Elegant and safe lighting for staircases.",
        warranty: "2 Years"
    },
    {
        id: "a03",
        category: "Staircase Lighting",
        name: "Staircase Lighting",
        price: "Contact for Price",
        image: "assets/a03.webp",
        desc: "Elegant and safe lighting for staircases.",
        warranty: "2 Years"
    },
    {
        id: "a04",
        category: "Staircase Lighting",
        name: "Staircase Lighting",
        price: "Contact for Price",
        image: "assets/a04.webp",
        desc: "Elegant and safe lighting for staircases.",
        warranty: "2 Years"
    }
];

// Apply Settings on Init
function getStoreSettings() {
    let defaults = {
        shippingFee: 0,
        payVisa: true,
        payInstapay: true,
        payVodafone: true,
        phone1: "01091732255",
        phone2: "01099449745",
        email: "alrayalightning@gmail.com",
        hours: "10AM - 10PM",
        waTemplate: "مرحباً أستاذ/ة، نتواصل معك من شركة الراية للإضاءة بخصوص طلبك الأخير (رقم {{orderId}}). "
    };
    try {
        let saved = JSON.parse(localStorage.getItem('alraya_settings'));
        return saved ? Object.assign(defaults, saved) : defaults;
    } catch (e) {
        return defaults;
    }
}

function getContactPhoneForWA() {
    let num = getStoreSettings().phone1.replace(/[^0-9]/g, '');
    return num.startsWith('01') ? '2' + num : num;
}

// Global subscriptions for real-time updates from Firebase
if (typeof subscribeToProductOverrides === 'function') {
    subscribeToProductOverrides((overrides) => {
        // The firebase-db.js file automatically saves this to localStorage.
        // We could trigger a re-render here if needed, but for now it's fine.
    });
}

if (typeof subscribeToSettings === 'function') {
    subscribeToSettings((settings) => {
        // The firebase-db.js file automatically saves this to localStorage.
    });
}

// Intro Animation
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Custom Analytics Tracker (if available)
    if (typeof initPresenceTracker === 'function') initPresenceTracker();

    // SVG Intro Animation
    const overlay = document.getElementById('intro-overlay');
    const app = document.getElementById('app');
    const cableLeft = document.getElementById('cable-path-left');
    const cableRight = document.getElementById('cable-path-right');
    const plugLeft = document.getElementById('plug-grp-left');
    const plugRight = document.getElementById('plug-grp-right');
    const spark = document.getElementById('intro-spark');

    // Fallback: If animation freezes, forcefully show content
    setTimeout(() => {
        if (overlay && overlay.style.display !== 'none') {
            app.classList.add('visible');
            overlay.style.transition = 'opacity 0.5s';
            overlay.style.opacity = '0';
            setTimeout(() => { overlay.style.display = 'none'; }, 500);
        }
    }, 3000);

    // Config
    const duration = 1000; // Faster (1 second)
    let startTime = null;

    function animateIntro(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        // Cubic Ease Out
        const ease = 1 - Math.pow(1 - progress, 3);

        const width = window.innerWidth;
        const height = window.innerHeight;

        const centerX = width / 2;
        const targetY = height * 0.4; // 40% height as requested

        const startY = -40; // Start just off screen

        // Current Y position
        const currentY = startY + (targetY - startY) * ease;

        // Horizontal positions
        // Start wide (20% and 80%)
        // End at center (minus/plus plug width offset)
        const gap = 30; // 30px from center. Plug width is 30.
        // Actually, plug is centered on its group origin?
        // Let's assume group origin is the connection point.
        // Left plug: x=0 is center? No, drawing rect x=-30. So right edge is at 0.
        // So left plug should end at centerX.

        // Left Plug Group: 
        // We defined Rect x=-30. So right edge is 0.
        // So simply translating to centerX will make it touch the center line from the left.

        // Right Plug Group:
        // We defined Rect x=0. So left edge is 0.
        // So translating to centerX will make it touch the center line from the right.

        const startXLeft = width * 0.2;
        const endXLeft = centerX;

        const startXRight = width * 0.8;
        const endXRight = centerX;

        // Interpolate X
        const currentXLeft = startXLeft + (endXLeft - startXLeft) * ease;
        const currentXRight = startXRight + (endXRight - startXRight) * ease;

        // Update Plug Groups
        if (plugLeft) plugLeft.setAttribute('transform', `translate(${currentXLeft}, ${currentY})`);
        if (plugRight) plugRight.setAttribute('transform', `translate(${currentXRight}, ${currentY})`);

        // Update Cables (Bezier Curve)
        // Start point: Fixed at top corners (20% width)
        // End point: Moving with plug (currentX, currentY)
        // Control point: To droop, X should be mostly constant or midway, Y should hang low.
        // A simple "J" curve: Control point X = StartX, Y = CurrentY.
        // This makes it go down then curve in.

        if (cableLeft) cableLeft.setAttribute('d', `M ${startXLeft} 0 Q ${startXLeft} ${currentY} ${currentXLeft} ${currentY}`);

        if (cableRight) cableRight.setAttribute('d', `M ${startXRight} 0 Q ${startXRight} ${currentY} ${currentXRight} ${currentY}`);

        if (progress < 1) {
            requestAnimationFrame(animateIntro);
        } else {
            triggerConnection();
        }
    }

    function triggerConnection() {
        if (!spark) return;
        // Spark Effect
        spark.setAttribute('r', '5'); // Visible
        spark.style.filter = 'drop-shadow(0 0 10px gold)';
        spark.style.transition = 'all 0.1s';

        setTimeout(() => {
            spark.setAttribute('r', '20');
            spark.style.opacity = '0';

            // Light up
            app.classList.add('visible');

            // Fade overlay
            overlay.style.transition = 'opacity 1s';
            overlay.style.opacity = '0';
            setTimeout(() => { overlay.style.display = 'none'; }, 1000);
        }, 100);
    }

    // Start
    requestAnimationFrame(animateIntro);
});

// App Logic
// Handle Browser History Navigation
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.view === 'product-category') {
        showProducts(event.state.category, false);
    } else {
        renderHome();
    }
});

// Inject SEO Data for Google Images and Search
function injectSEOData() {
    const seoData = {
        "@context": "https://schema.org/",
        "@type": "ItemList",
        "itemListElement": products.map((p, index) => {
            let priceVal = p.price && !isNaN(parseFloat(p.price)) ? parseFloat(p.price) : 0;
            return {
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                    "@type": "Product",
                    "url": `https://alraya-lighting.com/?product=${p.id}`,
                    "name": p.name,
                    "image": `https://alraya-lighting.com/${p.image}`,
                    "description": `${p.desc} - ${p.category} - نجف دلايات إضاءة ديكورية مصابيح`,
                    "brand": {
                        "@type": "Brand",
                        "name": "Alraya Lighting"
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.8",
                        "reviewCount": "24"
                    },
                    "offers": {
                        "@type": "Offer",
                        "priceCurrency": "EGP",
                        "price": priceVal,
                        "availability": "https://schema.org/InStock"
                    }
                }
            };
        })
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(seoData);
    document.head.appendChild(script);
}

// Initial State
window.addEventListener('DOMContentLoaded', () => {
    history.replaceState({ view: 'home' }, '', window.location.pathname);

    injectSEOData(); // Inject JSON-LD Schema for SEO

    // Deep Linking Check
    const urlParams = new URLSearchParams(window.location.search);
    const productParam = urlParams.get('product');
    if (productParam) {
        // Parse as Number if purely digits, else keep as string
        const productId = isNaN(Number(productParam)) ? productParam : Number(productParam);
        // Open product modal if ID is present
        openProduct(productId);
    }
});

function showFavorites() {
    const list = document.getElementById('product-grid');
    const gridSection = document.getElementById('products-section');
    const services = document.getElementById('services');
    const title = document.getElementById('category-title');
    const hero = document.querySelector('.hero');

    // Filter products
    const favProductsOriginal = products.filter(p => favorites.includes(p.id));

    // Apply Overrides
    const overrides = JSON.parse(localStorage.getItem('alraya_product_overrides')) || {};
    const favProducts = favProductsOriginal.map(p => overrides[p.id] ? { ...p, ...overrides[p.id] } : p);

    if (favProducts.length === 0) {
        list.innerHTML = `<div style="text-align: center; width: 100%; grid-column: 1 / -1; color: var(--text-muted); padding: 4rem;">
            <span class="material-icons-outlined" style="font-size: 4rem; margin-bottom: 1rem;">favorite_border</span>
            <h3>No favorites yet</h3>
            <p>Start adding products to your wishlist!</p>
        </div>`;
    } else {
        // Reuse render logic? Or just copy paste simplistic map
        list.innerHTML = favProducts.map(p => {
            const isFav = true;
            const heartIcon = 'favorite';
            const heartColor = 'var(--accent-gold)';

            let priceDisplay = p.price;
            if (!isNaN(parseFloat(p.price))) {
                priceDisplay = `${p.price} L.E`;
            } else if (p.price.includes("L.E")) {
                priceDisplay = p.price;
            }

            return `
    <div class="product-card" onclick="openProduct(${typeof p.id === 'string' ? "'" + p.id + "'" : p.id})" style="cursor: pointer; transition: transform 0.3s;">
        <div class="product-image" style="aspect-ratio: 1 / 1; width: 100%; position: relative; background-color: rgba(255,255,255,0.02); border-radius: 8px; margin-bottom: 1rem; border: 1px solid rgba(255,255,255,0.1); overflow: hidden;">
            <img src="${p.image}" alt="${p.name} - ${p.category} - نجف دلايات إضاءة ديكورية | Alraya Lighting" loading="lazy" style="width: 100%; height: 100%; object-fit: contain; position: absolute; top: 0; left: 0; z-index: 1;">
            
            <!-- Price Badge: Elegant Floating Pill, Bottom Right -->
            <div style="position: absolute; bottom: 0.8rem; right: 0.8rem; background: rgba(0, 0, 0, 0.7); backdrop-filter: blur(4px); color: var(--accent-gold); padding: 0.4rem 0.8rem; border-radius: 20px; border: 1px solid var(--accent-gold); font-weight: 600; font-size: 0.9rem; box-shadow: 0 2px 5px rgba(0,0,0,0.3); z-index: 2;">
                ${priceDisplay}
            </div>

            <!-- Action Buttons (Heart & Share) -->
            <div style="position: absolute; top: 1rem; right: 1rem; display: flex; flex-direction: column; gap: 0.8rem; z-index: 10;">
                 <button id="fav-btn-${p.id}" onclick="toggleFavorite(event, ${typeof p.id === 'string' ? "'" + p.id + "'" : p.id}); showFavorites();" style="background: rgba(0, 0, 0, 0.7); border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.3s;">
                     <span class="material-icons-outlined" style="color: ${heartColor}; font-size: 1.4rem;">
                        ${heartIcon}
                     </span>
                 </button>
                 <button onclick="shareProduct(event, ${typeof p.id === 'string' ? "'" + p.id + "'" : p.id})" style="background: rgba(0, 0, 0, 0.7); border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.3s;">
                     <span class="material-icons-outlined" style="color: #fff; font-size: 1.4rem;">share</span>
                 </button>
                 <button onclick="quickAddToCart(event, ${typeof p.id === 'string' ? "'" + p.id + "'" : p.id})" style="background: rgba(0, 0, 0, 0.7); border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.3s; color: var(--accent-gold);">
                     <span class="material-icons-outlined" style="font-size: 1.4rem;">add_shopping_cart</span>
                 </button>
            </div>

        </div>
        <h3 style="color: #fff; margin-bottom: 0.5rem;">${p.name}</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">${p.category}</p>
    </div>
  `}).join('');
    }

    // Update Title based on Language
    const isAr = currentLang === 'ar';
    title.innerText = isAr ? 'قائمة المفضلة' : 'My Favorites';

    // Switch views
    services.style.display = 'none';
    hero.style.display = 'none';
    const coverFrameSection = document.getElementById('cover-frame-section');
    if (coverFrameSection) coverFrameSection.style.display = 'none';
    gridSection.style.display = 'block';

    // Trigger animation
    setTimeout(() => {
        list.classList.add('active');
    }, 10);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

let currentCategoryProducts = [];

function getProductCardHTML(p) {
    const isFav = favorites.includes(p.id);
    const heartIcon = isFav ? 'favorite' : 'favorite_border';
    const heartColor = isFav ? 'var(--accent-gold)' : '#fff';

    let priceDisplay = p.price;
    if (!isNaN(parseFloat(p.price))) {
        priceDisplay = `${p.price} L.E`;
    } else if (p.price.includes("L.E")) {
        priceDisplay = p.price;
    }

    return `
    <div class="product-card" onclick="openProduct(${typeof p.id === 'string' ? "'" + p.id + "'" : p.id})" style="cursor: pointer; transition: transform 0.3s;">
        <div class="product-image" style="aspect-ratio: 1 / 1; width: 100%; position: relative; background-color: rgba(255,255,255,0.02); border-radius: 8px; margin-bottom: 1rem; border: 1px solid rgba(255,255,255,0.1); overflow: hidden;">
            <img src="${p.image}" alt="${p.name} - ${p.category} | Alraya Lighting" loading="lazy" style="width: 100%; height: 100%; object-fit: contain; position: absolute; top: 0; left: 0; z-index: 1;">
            
            <div style="position: absolute; bottom: 0.8rem; right: 0.8rem; background: rgba(0, 0, 0, 0.7); backdrop-filter: blur(4px); color: var(--accent-gold); padding: 0.4rem 0.8rem; border-radius: 20px; border: 1px solid var(--accent-gold); font-weight: 600; font-size: 0.9rem; box-shadow: 0 2px 5px rgba(0,0,0,0.3); z-index: 2;">
                ${priceDisplay}
            </div>

            <div style="position: absolute; top: 1rem; right: 1rem; display: flex; flex-direction: column; gap: 0.8rem; z-index: 10;">
                 <button id="fav-btn-${p.id}" onclick="toggleFavorite(event, ${typeof p.id === 'string' ? "'" + p.id + "'" : p.id})" style="background: rgba(0, 0, 0, 0.7); border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.3s;">
                     <span class="material-icons-outlined" style="color: ${heartColor}; font-size: 1.4rem;">${heartIcon}</span>
                 </button>
                 <button onclick="shareProduct(event, ${typeof p.id === 'string' ? "'" + p.id + "'" : p.id})" style="background: rgba(0, 0, 0, 0.7); border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.3s;">
                     <span class="material-icons-outlined" style="color: #fff; font-size: 1.4rem;">share</span>
                 </button>
                 <button onclick="quickAddToCart(event, ${typeof p.id === 'string' ? "'" + p.id + "'" : p.id})" style="background: rgba(0, 0, 0, 0.7); border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.3s; color: var(--accent-gold);">
                     <span class="material-icons-outlined" style="font-size: 1.4rem;">add_shopping_cart</span>
                 </button>
            </div>
        </div>
        <h3 style="color: #fff; margin-bottom: 0.5rem;" data-i18n="prod_${p.id}">${p.name}</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">${p.category}</p>
    </div>
  `;
}

function sortProducts() {
    const list = document.getElementById('product-grid');
    const sortVal = document.getElementById('product-sort').value;
    let sorted = [...currentCategoryProducts];

    if (sortVal === 'price-asc') {
        sorted.sort((a, b) => (parseFloat(a.price) || 999999) - (parseFloat(b.price) || 999999));
    } else if (sortVal === 'price-desc') {
        sorted.sort((a, b) => (parseFloat(b.price) || 0) - (parseFloat(a.price) || 0));
    } else if (sortVal === 'name-asc') {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    list.innerHTML = sorted.map(getProductCardHTML).join('');

    if (typeof setLanguage === 'function' && currentLang !== 'mixed') {
        setLanguage(currentLang);
    }
}

function showProducts(category, addToHistory = true) {
    const list = document.getElementById('product-grid');
    const gridSection = document.getElementById('products-section');
    const services = document.getElementById('services');
    const title = document.getElementById('category-title');
    const breadcrumbCat = document.getElementById('breadcrumb-cat');
    const hero = document.querySelector('.hero');
    const sortSelect = document.getElementById('product-sort');

    if (addToHistory) {
        history.pushState({ view: 'product-category', category: category }, '', `#${category.replace(/\s+/g, '-')}`);
    }

    const filteredOriginal = products.filter(p => p.category === category);
    const overrides = JSON.parse(localStorage.getItem('alraya_product_overrides')) || {};
    currentCategoryProducts = filteredOriginal.map(p => overrides[p.id] ? { ...p, ...overrides[p.id] } : p);

    // Reset sort to default
    if (sortSelect) sortSelect.value = 'default';

    // Set titles
    title.innerText = category;
    if (breadcrumbCat) breadcrumbCat.innerText = category;

    // Show skeletons first
    let skeletonHTML = '';
    for (let i = 0; i < 8; i++) {
        skeletonHTML += `<div class="product-card skeleton" style="height: 300px; border-radius: 8px; background: rgba(255,255,255,0.05); position: relative; overflow: hidden;">
            <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.02), transparent); animation: skeleton-shimmer 1.5s infinite;"></div>
        </div>`;
    }
    list.innerHTML = skeletonHTML;

    // Switch views
    services.style.display = 'none';
    hero.style.display = 'none';
    const coverFrameSection = document.getElementById('cover-frame-section');
    if (coverFrameSection) coverFrameSection.style.display = 'none';
    const checkoutSection = document.getElementById('checkout-section');
    if (checkoutSection) checkoutSection.style.display = 'none';
    gridSection.style.display = 'block';

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Render actua; products after 300ms simulation
    setTimeout(() => {
        list.innerHTML = currentCategoryProducts.map(getProductCardHTML).join('');
        list.classList.add('active');

        let targetLang = currentLang === 'mixed' ? (document.body.classList.contains('lang-ar') ? 'ar' : 'en') : currentLang;

        // Try getting translated category name for title/breadcrumb
        let transCatKey = `cat_${category.toLowerCase().replace(/ /g, '_')}`;
        let transCat = (translations[targetLang] && translations[targetLang][transCatKey]) || category;
        title.setAttribute('data-i18n', transCatKey);
        if (breadcrumbCat && translations[targetLang] && translations[targetLang][transCatKey]) {
            breadcrumbCat.setAttribute('data-i18n', transCatKey);
            breadcrumbCat.innerText = translations[targetLang][transCatKey];
        }

        if (typeof setLanguage === 'function' && currentLang !== 'mixed') {
            setLanguage(currentLang);
        }
    }, 400);
}

function hideProducts() {
    // This function is called by the "Back" button
    if (history.state && history.state.view === 'product-category') {
        history.back();
    } else {
        renderHome();
    }
}

function renderHome() {
    const gridSection = document.getElementById('products-section');
    const services = document.getElementById('services');
    const hero = document.querySelector('.hero');
    const checkoutSection = document.getElementById('checkout-section');

    if (checkoutSection) checkoutSection.style.display = 'none';
    gridSection.style.display = 'none';
    services.style.display = 'grid';
    hero.style.display = 'flex';
    document.getElementById('cover-frame-section').style.display = 'block'; // Show Cover Frames

    // Ensure scroll to services or top? User usually expects to return to where they were, 
    // but for simplicity, let's keep position or scroll to services top if needed.
    // existing behavior was just show/hide.
    // Let's scroll to top of services to be helpful? Or just top of page.
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openProduct(id) {
    let productBase = products.find(p => p.id === id);
    if (!productBase) return;

    // Apply Overrides
    const overrides = JSON.parse(localStorage.getItem('alraya_product_overrides')) || {};
    const product = overrides[id] ? { ...productBase, ...overrides[id] } : productBase;

    const modalImg = document.getElementById('modal-image');
    modalImg.style.backgroundImage = `url('${product.image}')`;

    // Reset any previous click handlers to avoid stacking or wrong context
    modalImg.onclick = null;
    modalImg.style.cursor = 'default';
    modalImg.title = "";

    // Check if Cover Frame to adjust display style and enable Zoom
    if (product.category === 'Cover Frame') {
        modalImg.style.backgroundSize = 'contain';
        modalImg.style.backgroundRepeat = 'no-repeat';
        modalImg.style.backgroundColor = 'rgba(0,0,0,0.5)';

        // Enable Zoom
        modalImg.style.cursor = 'zoom-in';
        modalImg.title = "Click to Zoom";
        modalImg.onclick = () => openImageViewer(product.image);

    } else {
        modalImg.style.backgroundSize = 'cover';
        modalImg.style.backgroundRepeat = 'no-repeat';
        modalImg.style.backgroundColor = 'transparent';
    }

    const modalTitle = document.getElementById('modal-title');
    modalTitle.setAttribute('data-i18n', `prod_${product.id}`);

    let langToUse = currentLang === 'mixed' ? 'en' : currentLang;
    if (document.body.classList.contains('lang-ar')) {
        langToUse = 'ar';
    }
    modalTitle.innerText = (translations[langToUse] && translations[langToUse][`prod_${product.id}`]) || product.name;

    document.getElementById('modal-desc').innerHTML = product.desc;

    // Determine price logic with overrides
    let displayPrice = product.price;
    if (!isNaN(parseFloat(product.price))) {
        displayPrice = `${product.price} L.E`;
    } else if (product.price && product.price.includes("L.E")) {
        displayPrice = product.price;
    }

    // Check oldPrice and calculate discount
    if (product.oldPrice && !isNaN(parseFloat(product.price)) && !isNaN(parseFloat(product.oldPrice))) {
        let currentP = parseFloat(product.price);
        let oldP = parseFloat(product.oldPrice);
        if (oldP > currentP) {
            let discountPercent = Math.round(((oldP - currentP) / oldP) * 100);
            displayPrice = `
                <div style="display: flex; flex-direction: column; align-items: center; gap: 4px; line-height: 1;">
                    <div style="color: rgba(255,255,255,0.6); text-decoration: line-through; font-size: 0.9rem;">${oldP} L.E</div>
                    <div style="font-size: 1.2rem; color: var(--accent-gold); font-weight: bold;">${currentP} L.E</div>
                    <div style="background: #ff005e; color: #fff; padding: 2px 5px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; margin-top: 2px;">
                        -${discountPercent}%
                    </div>
                </div>
            `;
        }
    }

    document.getElementById('modal-price').innerHTML = displayPrice;
    document.getElementById('modal-price').setAttribute('data-cart-price', product.price || '');
    document.getElementById('modal-warranty').innerText = product.warranty || '';


    // Initialize Modal State for Cart
    currentModalProduct = product;
    currentModalQuantity = 1;
    currentModalOptions = {}; // Reset
    document.getElementById('modal-quantity').innerText = "1";


    // Default price to show first variant price if generic message isn't desired for variants
    // But keeping "Select Wattage" etc. is fine.

    // Render Variants (if any)
    const variantsContainer = document.getElementById('modal-variants');
    if (variantsContainer) {
        variantsContainer.innerHTML = ''; // Clear previous
        if (product.variants && product.variants.length > 0) {
            const label = document.createElement('h4');
            // Determine label text based on type if possible, or default
            let typeLabel = "Options";
            if (product.type === 'length') typeLabel = "Available Lengths";
            if (product.type === 'wattage') typeLabel = "Available Power";

            label.innerText = typeLabel + ':';
            label.style.color = '#fff';
            label.style.marginBottom = '0.5rem';
            variantsContainer.appendChild(label);

            const container = document.createElement('div');
            container.style.display = 'flex';
            container.style.gap = '10px';
            container.style.flexWrap = 'wrap';

            // Create buttons for variants
            product.variants.forEach(variant => {
                const btn = document.createElement('button');
                btn.innerText = variant.label;
                btn.className = 'variant-btn'; // We can add CSS for this class
                // Inline styles for now to match previous look + interaction
                btn.style.padding = '8px 15px';
                btn.style.border = '1px solid var(--accent-gold)';
                btn.style.borderRadius = '5px';
                btn.style.color = '#fff'; // Default
                btn.style.background = 'transparent';
                btn.style.cursor = 'pointer';
                btn.style.fontSize = '0.9rem';
                btn.style.transition = 'all 0.3s ease';

                btn.onclick = () => {
                    // Update Price
                    const newPrice = variant.price;
                    document.getElementById('modal-price').innerText = newPrice;
                    document.getElementById('modal-price').setAttribute('data-cart-price', newPrice);

                    // Update State for Cart
                    currentModalOptions['variant'] = variant.label;

                    // Update Active State Visuals
                    // Reset all buttons
                    container.querySelectorAll('button').forEach(b => {
                        b.style.background = 'transparent';
                        b.style.color = '#fff';
                    });
                    // Set active
                    btn.style.background = 'var(--accent-gold)';
                    btn.style.color = '#000';

                    // Update WhatsApp Link with selected variant
                    const productUrl = `${window.location.origin}${window.location.pathname}?product=${product.id}`;
                    // Include variant info in message
                    const message = `Hello, I'm contacting you via the Alraya website.\nI'm interested in: ${product.name} (${variant.label})\nPrice: ${newPrice}\nLink: ${productUrl}`;
                    const waBtn = document.getElementById('modal-whatsapp');
                    if (waBtn) waBtn.href = `https://wa.me/${getContactPhoneForWA()}?text=${encodeURIComponent(message)}`;
                };

                container.appendChild(btn);
            });
            variantsContainer.appendChild(container);
            variantsContainer.style.display = 'block';
            variantsContainer.style.display = 'block';
        } else if (product.optionGroups && product.optionGroups.length > 0) {
            // New Option Groups Logic
            product.optionGroups.forEach(group => {
                const label = document.createElement('h4');
                label.innerText = group.name + ':';
                label.style.color = '#fff';
                label.style.marginTop = '1rem';
                label.style.marginBottom = '0.5rem';
                variantsContainer.appendChild(label);

                const container = document.createElement('div');
                container.style.display = 'flex';
                container.style.gap = '10px';
                container.style.flexWrap = 'wrap';

                group.options.forEach(option => {
                    const btn = document.createElement('button');
                    btn.innerText = option;
                    btn.style.padding = '8px 15px';
                    btn.style.border = '1px solid var(--accent-gold)';
                    btn.style.borderRadius = '5px';
                    btn.style.color = '#fff'; // Default
                    btn.style.background = 'transparent';
                    btn.style.cursor = 'pointer';
                    btn.style.fontSize = '0.9rem';
                    btn.style.transition = 'all 0.3s ease';

                    btn.onclick = () => {
                        // Toggle active state for THIS group
                        container.querySelectorAll('button').forEach(b => {
                            b.style.background = 'transparent';
                            b.style.color = '#fff';
                        });
                        btn.style.background = 'var(--accent-gold)';
                        btn.style.color = '#000';

                        // Update State for Cart
                        currentModalOptions[group.name] = btn.innerText;

                        // Update WhatsApp Link with ALL selected options
                        // We need to query ALL active buttons in variantsContainer
                        let selectedOptions = [];
                        variantsContainer.querySelectorAll('button').forEach(b => {
                            if (b.style.background === 'var(--accent-gold)' || b.style.background.includes('210, 168, 68')) { // checking color
                                selectedOptions.push(b.innerText);
                            }
                        });


                        const productUrl = `${window.location.origin}${window.location.pathname}?product=${product.id}`;
                        const message = `Hello, I'm contacting you via the Alraya website.\nI'm interested in: ${product.name}\nSelected Options: ${selectedOptions.join(', ')}\nLink: ${productUrl}`;
                        const waBtn = document.getElementById('modal-whatsapp');
                        if (waBtn) waBtn.href = `https://wa.me/${getContactPhoneForWA()}?text=${encodeURIComponent(message)}`;
                    };

                    container.appendChild(btn);
                });
                variantsContainer.appendChild(container);
            });
            variantsContainer.style.display = 'block';
        } else {
            variantsContainer.style.display = 'none';
        }
    }

    // Update Favorites Button in Modal
    const modalFavBtn = document.getElementById('modal-fav-btn');
    const isFav = favorites.includes(product.id);
    modalFavBtn.setAttribute('data-id', product.id);
    modalFavBtn.onclick = function (e) { toggleFavorite(e, product.id); };
    modalFavBtn.innerHTML = `<span class="material-icons-outlined" style="color: ${isFav ? 'var(--accent-gold)' : '#555'}; font-size: 1.5rem;">${isFav ? 'favorite' : 'favorite_border'}</span>`;

    // Update Share Button in Modal
    const modalShareBtn = document.getElementById('modal-share-btn');
    modalShareBtn.onclick = function (e) { shareProduct(e, product.id); };


    // Format WhatsApp Link
    // Format WhatsApp Link with Deep Link
    const productUrl = `${window.location.origin}${window.location.pathname}?product=${product.id}`;
    const message = `Hello, I'm contacting you via the Alraya website.\nI'm interested in: ${product.name}\nPrice: ${product.price}\nLink: ${productUrl}`;

    const waBtn = document.getElementById('modal-whatsapp');
    waBtn.href = `https://wa.me/${getContactPhoneForWA()}?text=${encodeURIComponent(message)}`;

    // Track click
    waBtn.onclick = function () {
        if (typeof logSiteEvent === 'function') logSiteEvent('WhatsApp Inquiry Click');
        notifyAdmin(`Product Inquiry: ${product.name}`);
    };

    renderRelatedProducts(product.id, product.category);

    document.getElementById('product-modal').classList.add('active');
    document.getElementById('product-modal').scrollTop = 0; // Reset scroll position
}

function renderRelatedProducts(currentId, category) {
    const relatedContainer = document.getElementById('modal-related-products');
    if (!relatedContainer) return;

    // Find up to 4 other items in the same category
    const related = products.filter(p => p.category === category && p.id !== currentId)
        .sort(() => 0.5 - Math.random()) // Randomize slightly
        .slice(0, 4);

    if (related.length === 0) {
        relatedContainer.style.display = 'none';
        return;
    }

    const isAr = document.body.classList.contains('lang-ar');
    const titleText = isAr ? 'منتجات قد تعجبك' : 'You May Also Like';

    const relatedHTML = related.map(p => {
        let displayPriceStr = p.price;
        if (!isNaN(parseFloat(p.price))) {
            displayPriceStr = `${p.price} L.E`;
        }
        return `
            <div style="min-width: 120px; flex: 0 0 auto; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; overflow: hidden; cursor: pointer;" onclick="openProduct(${typeof p.id === 'string' ? "'" + p.id + "'" : p.id})">
                <img src="${p.image}" alt="${p.name}" style="width: 100%; height: 100px; object-fit: contain; background: rgba(255,255,255,0.02); padding: 5px;">
                <div style="padding: 0.5rem;">
                    <h5 style="color: #fff; font-size: 0.8rem; margin: 0 0 0.3rem 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${p.name}</h5>
                    <p style="color: var(--accent-gold); font-size: 0.75rem; margin: 0;">${displayPriceStr}</p>
                </div>
            </div>
        `;
    }).join('');

    relatedContainer.innerHTML = `
        <h4 style="color: #fff; margin-bottom: 1rem; margin-top: 1rem;">${titleText}</h4>
        <div style="display: flex; gap: 1rem; overflow-x: auto; padding-bottom: 0.5rem; scrollbar-width: thin; scrollbar-color: var(--accent-gold) transparent;">
            ${relatedHTML}
        </div>
    `;
    relatedContainer.style.display = 'block';
}

function notifyAdmin(action) {
    console.log(`[Analytics] User clicked WhatsApp: ${action}`);

    // Check if EmailJS is loaded
    if (typeof emailjs === 'undefined') {
        console.warn("EmailJS SDK not loaded.");
        return;
    }

    // EmailJS Configuration
    const serviceID = "service_dvortoy";
    const templateID = "template_gv5evuh";

    const templateParams = {
        message: action,
        to_email: getStoreSettings().email,
        timestamp: new Date().toLocaleString()
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
            console.log('[EmailJS] Notification sent successfully!');
        }, (error) => {
            console.error('[EmailJS] Failed to send notification:', error);
        });
}

function closeModal() {
    document.getElementById('product-modal').classList.remove('active');
}

function closeReviewModal() {
    document.getElementById('review-modal').style.display = 'none';
}

function setRating(count) {
    document.getElementById('review-rating').value = count;
    const stars = document.querySelectorAll('#star-rating .star-icon');
    stars.forEach((star, index) => {
        if (index < count) {
            star.style.color = '#ffb400';
            star.textContent = 'star';
        } else {
            star.style.color = '#555';
            star.textContent = 'star_border';
        }
    });
}

async function submitReview(event) {
    event.preventDefault();
    const name = document.getElementById('reviewer-name').value;
    const text = document.getElementById('reviewer-text').value;
    const rating = document.getElementById('review-rating').value;

    if (rating == 0) {
        showToast(currentLang === 'ar' ? "يرجى اختيار التقييم أولاً" : "Please select a star rating first");
        return;
    }

    notifyAdmin(`New Customer Review:\nName: ${name}\nRating: ${rating} Stars\nReview: ${text}`);

    const newReview = { name, text, rating: parseInt(rating) };
    if (typeof addReviewToDB === 'function') {
        await addReviewToDB(newReview);
    } else {
        // Fallback save locally
        let savedReviews = JSON.parse(localStorage.getItem('alraya_reviews') || '[]');
        savedReviews.push({ ...newReview, date: new Date().toISOString(), id: 'rev_' + Date.now() });
        localStorage.setItem('alraya_reviews', JSON.stringify(savedReviews));
        if (typeof renderReviews === 'function') {
            renderReviews(savedReviews);
        }
    }

    showToast(currentLang === 'ar' ? "شكراً لك! تم إرسال تقييمك بنجاح." : "Thank you! Your review has been submitted.");
    closeReviewModal();
    event.target.reset();
    setRating(0);
}

// Render dynamic reviews
function renderReviews(reviewsList) {
    const container = document.getElementById('reviews-container');
    if (!container) return;

    if (!reviewsList || reviewsList.length === 0) {
        // Fallback default reviews if none found
        reviewsList = [
            { id: "default1", name: currentLang === 'ar' ? 'أ. حسن' : 'A. Hassan', text: currentLang === 'ar' ? "أفضل حلول الإضاءة في مصر. جودة ممتازة والنجف يبدو مذهلاً في غرفتي. خدمة العملاء أيضاً متعاونة جداً." : "Best lighting solutions in Egypt. Outstanding quality and the chandeliers look incredible in my living room. Customer service is also very helpful.", rating: 5 },
            { id: "default2", name: currentLang === 'ar' ? 'م. يوسف' : 'M. Youssef', text: currentLang === 'ar' ? "طلبت دلايات جميلة ووصلت في حالة ممتازة. أوصي بهم بشدة للتصميمات الفاخرة بأسعار رائعة!" : "I ordered beautiful pendant lights and they were delivered in perfect condition. Highly recommended for premium designs at great prices!", rating: 5 },
            { id: "default3", name: currentLang === 'ar' ? 'محمود عبد الرحمن' : 'Mahmoud A.', text: currentLang === 'ar' ? "بصراحة النجف اللي أخدته من عندكم غير شكل الريسبشن خالص، تسلم إيديكم بجد والأسعار كانت أحسن من أماكن كتير سألت فيها." : "Honestly, the chandeliers I bought completely changed the look of my reception area. Great prices too.", rating: 5 },
            { id: "default4", name: currentLang === 'ar' ? 'مروة علي' : 'Marwa Ali', text: currentLang === 'ar' ? "الخامات ممتازة والتعامل محترم جداً، طلبت أباليك للسلم وطلعت أحلى من الصور بكتير. أكيد هتعامل معاكم تاني." : "Excellent materials and very respectful service. The stair sconces look much better than the pictures.", rating: 5 },
            { id: "default5", name: currentLang === 'ar' ? 'أحمد مجدي' : 'Ahmed Magdy', text: currentLang === 'ar' ? "التوصيل كان سريع جداً والتغليف ممتاز، مفيش حاجة لمبة اتكسرت.. شكرا ليكم." : "Delivery was very fast and the packaging was excellent, nothing was broken. Thank you.", rating: 4 },
            { id: "default6", name: currentLang === 'ar' ? 'د. سارة' : 'Dr. Sarah', text: currentLang === 'ar' ? "شكرا جدا ليكم، الليد بروفايل اللي أخدته إضاءته تحفة ومريحة جدا للعين، والفني اللي ركبه شكر جدا في الخامات." : "Thank you so much! The LED profile provides beautiful, eye-comforting lighting.", rating: 5 },
            { id: "default7", name: currentLang === 'ar' ? 'م. كريم السعيد' : 'Eng. Kareem', text: currentLang === 'ar' ? "الترانسات والأسلاك جودتها عالية جدا، الكهربائي بتاعي قالي إني وفقت في الاختيار." : "The transformers and wires are of very high quality. Everything is perfect.", rating: 5 }
        ];
    } else {
        // Sort explicitly by date descending just in case
        reviewsList.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
    }

    const html = reviewsList.map(r => {
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= r.rating) starsHTML += '<span class="material-icons">star</span>';
            else starsHTML += '<span class="material-icons">star_border</span>';
        }

        return `
            <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 1.5rem; min-width: 300px; max-width: 400px; flex: 1; display: flex; flex-direction: column;">
                <div style="display: flex; gap: 0.5rem; color: #ffb400; font-size: 1.2rem; margin-bottom: 1rem;">
                    ${starsHTML}
                </div>
                <p dir="auto" style="color: var(--text-muted); font-style: italic; line-height: 1.6; flex-grow: 1; margin: 0;">"${r.text}"</p>
                <div style="margin-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1rem;">
                    <span style="color: #fff; font-weight: bold;">${r.name}</span>
                    <span style="color: var(--accent-gold); font-size: 0.8rem; display: block; margin-top: 4px;">Verified Buyer</span>
                </div>
            </div>
        `;
    }).join("");

    container.innerHTML = html;
}

// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burgerMenu = document.querySelector('.burger-menu');
    const icon = burgerMenu.querySelector('span');

    navLinks.classList.toggle('active');
    burgerMenu.classList.toggle('active');

    if (!navLinks.classList.contains('active')) {
        // Reset dropdowns when menu closes
        document.querySelectorAll('.dropdown.active').forEach(dd => {
            dd.classList.remove('active');
        });
    }

    if (burgerMenu.classList.contains('active')) {
        icon.innerText = 'close';
    } else {
        icon.innerText = 'menu';
    }
}

// Mobile Dropdown Toggle
window.addEventListener('DOMContentLoaded', () => {
    const dropBtns = document.querySelectorAll('.dropbtn');
    dropBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Strictly prevent navigation
            e.preventDefault();
            e.stopPropagation();

            // Toggle active class on the parent list item, but close others first
            const parent = btn.closest('.dropdown');
            const isActive = parent && parent.classList.contains('active');

            // Close all other dropdowns
            document.querySelectorAll('.dropdown').forEach(dd => {
                dd.classList.remove('active');
            });

            if (parent && !isActive) {
                parent.classList.add('active');
            }
        });
    });

    // Close menu when clicking a standard link
    const links = document.querySelectorAll('.nav-links a:not(.dropbtn)');
    links.forEach(link => {
        link.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            const burgerMenu = document.querySelector('.burger-menu');
            const icon = burgerMenu.querySelector('span');

            navLinks.classList.remove('active');
            if (burgerMenu) {
                burgerMenu.classList.remove('active');
                if (icon) icon.innerText = 'menu';
            }
        });
    });
});

// Scroll Reveal Logic
window.addEventListener('DOMContentLoaded', () => {
    // Select major sections and cards
    const revealElements = document.querySelectorAll('.services, .service-card, footer, .hero p, .hero a');

    // Add initial reveal class style (hidden state)
    revealElements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before bottom
    });

    revealElements.forEach(el => observer.observe(el));
});

// Language Switch Logic
const translations = {
    en: {
        nav_home: "Home",
        nav_fixtures: "Lighting Fixtures",
        cat_lampshades: "Lampshades",
        cat_pendant: "Pendant Lights",
        cat_wall: "Indoor Wall Sconce",
        cat_spot: "Spotlights",
        cat_floor: "Floor Lamp",
        cat_track: "Track Lights",
        cat_pillar: "Outdoor Pillar Lights",
        cat_spike: "Garden Spike Lights",
        cat_panels: "Panels",
        cat_flashlight: "Flashlight",
        cat_profile: "Profile Strip",
        cat_staircase: "Staircase Lighting",
        nav_electrical: "Electrical Supplies",
        section_electrical: "ELECTRICAL SUPPLIES",
        cat_power_strips: "Power Cables",
        cat_transformers: "Power Supply",
        cat_tape: "PVC Tape",
        cat_plugs: "Plugs",
        cat_lamps: "Lamps",
        cat_led_strip: "LED Strip Light",
        cat_extension: "Extension Cord",
        cat_cable_roll: "Cable Roll",
        cat_mobile_acc: "Mobile Accessories",
        cat_led_strip_pvc: "Led strip PVC",
        cat_cover_frame: "Cover Frame",
        nav_about: "About Us",
        nav_contact: "Contact Us",
        hero_slogan: "Elegance In Every Glow.",
        hero_cta: "Explore Collection",
        section_fixtures: "LIGHTING FIXTURES",
        back_to_cats: "Back to Categories",
        about_text: "Alraya Lighting Systems: A Journey of Light from Foundation to Beauty.<br><br>Since our inception in 2022, Alraya has specialized in crafting the integrated details of your home. We are with you from the beginning, providing the finest foundation and electrical supplies (from wires, switches, and transformers), leading up to the most exquisite decorative lighting units (chandeliers, magnetic profiles, and sconces).<br><br><strong>Why Choose Us</strong><br>Because we combine for you the strongest global brands and competitive prices, to ensure you a home that combines modern safety and visual luxury.<br><br>At Alraya, our mission is to make every corner of your home pulse with sophistication, under our permanent slogan:<br><br><span dir='ltr' style='display:inline-block;'>Elegance In Every Glow</span>",
        val_money: "Value for Money",
        after_sales: "After-sales Service",
        footer_address: getStoreSettings().address || "Al-Sheikh Zayed, Karma4 Mall behind Alahly Club",
        working_hours: `Working Hours: ${getStoreSettings().hours}`,
        partners_title: "Our Partners",
        nav_partners: "Our Partners",
        nav_favorites: "Favorites",
        favorites_title: "My Favorites",
        nav_slogan: "Everything you need<br>in one place",
        cart_title: "Shopping Cart",
        back_to_shop: "Back to Shop",
        checkout_whatsapp: "Order via WhatsApp",
        add_to_cart: "Add to Cart",
        status_open: "Open Now",
        status_closing: "Closing Soon",
        status_closed: "Closed Now",
        prod_b01: "Surface Profile Strip",
        prod_b02: "Recessed Profile Strip",
        proceed_checkout: "Proceed to Checkout",
        checkout_title: "Complete Order",
        choose_payment: "Choose Payment Method",
        pay_cash: "Cash on Delivery",
        pay_insta: "InstaPay",
        pay_voda: "Vodafone Cash",
        confirm_order: "Confirm Order",
        order_notes: "Order Notes (Optional)",
        order_summary: "Order Summary",
        order_total: "Total",
        customer_reviews: "What Our Customers Say",
        review_1_text: "\"Best lighting solutions in Egypt. Outstanding quality and the chandeliers look incredible in my living room. Customer service is also very helpful.\"",
        review_1_author: "A. Hassan",
        review_2_text: "\"I ordered beautiful pendant lights and they were delivered in perfect condition. Highly recommended for premium designs at great prices!\"",
        review_2_author: "M. Youssef",
        review_3_text: "\"Fantastic experience. The team helped me choose the perfect track lights for my office. Very professional.\"",
        review_3_author: "S. Ibrahim",
        write_review_btn: "Write a Review",
        write_review_title: "Write a Review",
        reviewer_name: "Your Name",
        reviewer_text: "Your Review",
        submit_review_btn: "Submit Review"
    },
    ar: {
        nav_home: "الرئيسية",
        nav_fixtures: "وحدات إضاءة",
        cat_lampshades: "أباجورات",
        cat_pendant: "دلايات",
        cat_wall: "أباليك",
        cat_spot: "سبوت لايت",
        cat_floor: "لمباديرات",
        cat_track: "تراك لايت",
        cat_pillar: "فوانيس سور, بولارد",
        cat_spike: "حربة",
        cat_panels: "بانلات",
        cat_flashlight: "كشافات",
        cat_profile: "اعواد البروفايل",
        cat_staircase: "درج سلم",
        nav_electrical: "مستلزمات كهربائية",
        section_electrical: "مستلزمات كهربائية",
        cat_power_strips: "مشتركات",
        cat_transformers: "ترانسات",
        cat_tape: "شريط لحام",
        cat_plugs: "فيش",
        cat_lamps: "لمبات",
        cat_led_strip: "ليد بروفايل",
        cat_extension: "وصلات كهربائية",
        cat_cable_roll: "لفة سلك",
        cat_mobile_acc: "إكسسوارات موبايل",
        cat_led_strip_pvc: "خرطوم ليد",
        cat_cover_frame: "وشوش مفاتيح",
        nav_about: "من نحن",
        nav_contact: "اتصل بنا",
        hero_slogan: "الرقي في كل إشراقة",
        hero_cta: "تصفح التشكيلة",
        section_fixtures: "وحدات إضاءة",
        back_to_cats: "الرجوع للأقسام",
        about_text: "الراية لأنظمة الأضاءة رحلة الضوء من التأسيس إلى الجمال<br><br>منذ انطلاقنا في 2022، تخصصت الراية في رسم تفاصيل منزلك المتكاملة. نحن معك من البداية، نوفر أجود مستلزمات تأسيس الكهرباء (من أسلاك ومفاتيح وترانسات)، وصولاً إلى أرقى وحدات الإضاءة الديكورية (من نجف، بروفايل ماجنيتيك، وأباليك).<br><br><strong>لماذا تختارنا</strong><br>لأننا نجمع لك بين أقوى الماركات العالمية والأسعار التنافسية، لنضمن لك بيتاً يجمع بين الأمان العصري والفخامة البصرية.<br><br>في الراية، مهمتنا أن نجعل كل زاوية في بيتك تنبض بالرقي، تحت شعارنا الدائم:<br><br><span dir='ltr' style='display:inline-block;'>Elegance In Every Glow</span>",
        val_money: "قيمة مقابل سعر",
        after_sales: "خدمة ما بعد البيع",
        footer_address: getStoreSettings().address || "الشيخ زايد، مول الكرمة 4 خلف النادي الأهلي",
        working_hours: `مواعيد العمل: ${getStoreSettings().hours}`,
        partners_title: "شركاؤنا",
        nav_partners: "شركاؤنا",
        nav_favorites: "المفضلة",
        favorites_title: "قائمة المفضلة",
        nav_slogan: "كل ما تحتاجه<br>في مكان واحد",
        cart_title: "عربة التسوق",
        back_to_shop: "الرجوع للمتجر",
        checkout_whatsapp: "اطلب عبر الواتساب",
        add_to_cart: "إضافة للعربة",
        status_open: "مفتوح الآن",
        status_closing: "يغلق قريباً",
        status_closed: "مغلق الآن",
        prod_b01: "عود بروفايل خارج",
        prod_b02: "عود بروفايل داخل",
        proceed_checkout: "متابعة الطلب",
        checkout_title: "إتمام الطلب",
        choose_payment: "اختر طريقة الدفع",
        pay_cash: "Visa",
        pay_insta: "انستا باي",
        pay_voda: "فودافون كاش",
        confirm_order: "تأكيد الطلب",
        order_notes: "ملاحظات الطلب (اختياري)",
        order_summary: "ملخص الطلب",
        order_total: "الإجمالي",
        customer_reviews: "آراء عملائنا",
        review_1_text: "\"أفضل حلول الإضاءة في مصر. جودة ممتازة والنجف يبدو مذهلاً في غرفتي. خدمة العملاء أيضاً متعاونة جداً.\"",
        review_1_author: "أ. حسن",
        review_2_text: "\"طلبت دلايات جميلة ووصلت في حالة ممتازة. أوصي بهم بشدة للتصميمات الفاخرة بأسعار رائعة!\"",
        review_2_author: "م. يوسف",
        review_3_text: "\"تجربة رائعة. ساعدني الفريق في اختيار إضاءة المسار المناسبة لمكتبي. احترافية عالية.\"",
        review_3_author: "س. إبراهيم",
        write_review_btn: "اكتب تقييمك",
        write_review_title: "اكتب تقييمك",
        reviewer_name: "الاسم",
        reviewer_text: "رأيك في المنتجات",
        submit_review_btn: "إرسال التقييم"
    }
};

let currentLang = 'mixed'; // 'mixed', 'en', 'ar'

function toggleLanguage() {
    const switchContainer = document.getElementById('lang-switch');
    // If mixed, assumes starting at EN visual state, so click goes to AR.
    // Visual state: no 'active' class = EN (Left). 'active' class = AR (Right).

    if (switchContainer.classList.contains('active')) {
        // Was AR, switch to EN
        switchContainer.classList.remove('active');
        setLanguage('en');
    } else {
        // Was EN (or mixed/start), switch to AR
        switchContainer.classList.add('active');
        setLanguage('ar');
    }
}

function setLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Handle Direction - Add/remove 'lang-ar' class for RTL styling
    if (lang === 'ar') {
        document.body.classList.add('lang-ar');
        document.body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

        // Dynamic SEO Tags for Arabic
        document.getElementById('page-title').innerText = "Alraya Lighting | الراية للإضاءة - نجف ودلايات";
        document.getElementById('meta-desc').setAttribute("content", "الراية لأنظمة الإضاءة: أرقى تشكيلة من النجف والدلايات ووحدات الإضاءة الديكورية ومستلزمات التأسيس في مصر. تسوق الآن عبر الإنترنت بأفضل الأسعار.");
        document.getElementById('meta-og-title').setAttribute("content", "Alraya Lighting | الراية للإضاءة - نجف، دلايات، ديكور");
        document.getElementById('meta-og-desc').setAttribute("content", "الراية لأنظمة الإضاءة: أرقى تشكيلة من النجف والدلايات ووحدات الإضاءة الديكورية.");
    } else {
        document.body.classList.remove('lang-ar');
        document.body.style.fontFamily = "'Outfit', sans-serif";

        // Dynamic SEO Tags for English
        document.getElementById('page-title').innerText = "Alraya Lighting | Elegance In Every Glow";
        document.getElementById('meta-desc').setAttribute("content", "Alraya Lighting Systems: Find the finest decorative lighting, chandeliers, pendants, and electrical supplies in Egypt. Elegance in every glow.");
        document.getElementById('meta-og-title').setAttribute("content", "Alraya Lighting | Elegance In Every Glow");
        document.getElementById('meta-og-desc').setAttribute("content", "Alraya Lighting Systems: Find the finest decorative lighting, chandeliers, pendants, and electrical supplies in Egypt.");
    }

    // Update dynamic elements that depend on translations
    if (typeof updateStoreStatus === 'function') {
        updateStoreStatus();
    }
}

// --- Favorites & Sharing Logic ---
let favorites = JSON.parse(localStorage.getItem('alraya_favorites')) || [];

function toggleFavorite(e, id) {
    if (e) e.stopPropagation();
    const index = favorites.indexOf(id);
    if (index === -1) {
        favorites.push(id);
    } else {
        favorites.splice(index, 1);
    }
    localStorage.setItem('alraya_favorites', JSON.stringify(favorites));

    // Update Button UI if visible
    const btn = document.getElementById(`fav-btn-${id}`);
    if (btn) {
        const isFav = favorites.includes(id);
        const color = isFav ? 'var(--accent-gold)' : '#fff';
        const icon = isFav ? 'favorite' : 'favorite_border';
        btn.innerHTML = `<span class="material-icons-outlined" style="color: ${color}; font-size: 1.4rem;">${icon}</span>`;
    }

    // Update Modal Button if it matches the current product
    const modalBtn = document.getElementById('modal-fav-btn');
    if (modalBtn && String(modalBtn.getAttribute('data-id')) === String(id)) {
        const isFav = favorites.includes(id);
        const color = isFav ? 'var(--accent-gold)' : '#555';
        const icon = isFav ? 'favorite' : 'favorite_border';
        modalBtn.innerHTML = `<span class="material-icons-outlined" style="color: ${color}; font-size: 1.5rem;">${icon}</span>`;
    }
}

function shareProduct(e, id) {
    if (e) e.stopPropagation();
    const product = products.find(p => p.id === id);
    if (!product) return;

    // Construct URL
    const url = `${window.location.origin}${window.location.pathname}?product=${product.id}`;

    if (navigator.share) {
        navigator.share({
            title: product.name,
            text: `Check out ${product.name} on Alraya Lighting!`,
            url: url
        }).catch(err => console.log('Share canceled or failed', err));
    } else {
        // Fallback
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
            // Fallback prompt
            prompt('Copy this link to share:', url);
        });
    }
}

function toggleElectricalView() {
    // Select all hidden cards. These are cards that have the 'hidden-card' class.
    // We are toggling their inline display style.
    const hiddenCards = document.querySelectorAll('.electrical-grid .hidden-card');
    const button = document.getElementById('view-more-electrical');

    // We check the first one to decide state (all move together)
    // Note: 'hidden-card' class has display: none !important in CSS.
    // To override, we need to set display: flex !important, or remove the class?
    // Safer to toggle the class or use inline style with priority.

    // Actually, simpler approach: Toggle a class on the grid container or the cards.
    // Let's toggle the class 'expanded' on the grid, and CSS handles it.

    // BUT, I already wrote CSS that says .hidden-card { display: none !important; }
    // So to show them, I should remove that class or override it.
    // Let's go with inline style override.

    let isExpanding = false;
    if (button.innerText.toUpperCase() === 'VIEW MORE') {
        isExpanding = true;
    }

    hiddenCards.forEach(card => {
        if (isExpanding) {
            card.style.setProperty('display', 'flex', 'important');
        } else {
            card.style.display = 'none'; // Fallback to class rule
            card.style.removeProperty('display');
        }
    });

    button.innerText = isExpanding ? 'View Less' : 'View More';
}


// Initialize Cover Frames
let coverFrameInterval;
let isAnimating = false;

window.addEventListener('DOMContentLoaded', () => {
    renderCoverFrames();
    setupCarousel();
});

function renderCoverFrames() {
    const container = document.getElementById('cover-frame-grid');
    if (!container) return;

    const targetIds = [805, 806, 810, 807, 808, 809];
    const frameProducts = targetIds.map(id => products.find(p => p.id === id)).filter(p => p);

    // Initial render
    container.innerHTML = frameProducts.map(p => `
        <div class="cover-frame-item" onclick="openProduct(${typeof p.id === 'string' ? "'" + p.id + "'" : p.id})">
            <img src="${p.image}" alt="${p.name}">
        </div>
    `).join('');
}

function setupCarousel() {
    // Start AutoPlay
    startAutoPlay();

    const container = document.getElementById('cover-frame-grid');
    if (container) {
        container.addEventListener('mouseenter', stopAutoPlay);
        container.addEventListener('mouseleave', startAutoPlay);
    }
}

function startAutoPlay() {
    clearInterval(coverFrameInterval);
    coverFrameInterval = setInterval(() => {
        scrollCoverFrames(1);
    }, 2500); // Change every 2.5 seconds
}

function stopAutoPlay() {
    clearInterval(coverFrameInterval);
}

function scrollCoverFrames(direction) {
    if (isAnimating) return;
    const container = document.getElementById('cover-frame-grid');
    if (!container) return;

    const items = container.children;
    if (items.length === 0) return;

    const itemWidth = items[0].getBoundingClientRect().width;
    const gap = 0; // consistent with CSS

    isAnimating = true;

    if (direction === 1) {
        // Next: Animate left, then move first to last
        container.style.transition = 'transform 0.8s ease-in-out';
        container.style.transform = `translateX(-${itemWidth}px)`;

        setTimeout(() => {
            container.style.transition = 'none';
            container.appendChild(items[0]);
            container.style.transform = 'translateX(0)';
            isAnimating = false;
        }, 800);

    } else {
        // Prev: Move last to first, set offset, then animate to 0
        container.style.transition = 'none';
        container.prepend(items[items.length - 1]);
        container.style.transform = `translateX(-${itemWidth}px)`;

        // Force Reflow
        void container.offsetWidth;

        container.style.transition = 'transform 0.8s ease-in-out';
        container.style.transform = 'translateX(0)';

        setTimeout(() => {
            isAnimating = false;
        }, 800);
    }
}


// Image Viewer Logic
function openImageViewer(src) {
    const viewer = document.getElementById("full-image-viewer");
    const img = document.getElementById("full-image-content");

    img.src = src;
    img.classList.remove("zoomed"); // Reset zoom

    viewer.style.display = "flex";
}

function closeImageViewer() {
    document.getElementById("full-image-viewer").style.display = "none";
}

// Zoom Toggle
const imgContent = document.getElementById("full-image-content");
if (imgContent) {
    imgContent.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent closing if we had a background click listener
        this.classList.toggle("zoomed");
    });
}

// Close on background click
const viewerContent = document.getElementById("full-image-viewer");
if (viewerContent) {
    viewerContent.addEventListener("click", function (e) {
        if (e.target === this) {
            closeImageViewer();
        }
    });
}



// --- Shopping Cart Logic ---
// Moved to cart_logic.js



function quickAddToCart(e, id) {
    if (e) e.stopPropagation();
    if (typeof logSiteEvent === 'function') logSiteEvent('Add to Cart (Quick)');
    const productBase = products.find(p => p.id === id);
    if (!productBase) return;

    const overrides = JSON.parse(localStorage.getItem('alraya_product_overrides')) || {};
    const product = overrides[id] ? { ...productBase, ...overrides[id] } : productBase;

    // Check if Needs Options
    if ((product.variants && product.variants.length > 0) || (product.optionGroups && product.optionGroups.length > 0)) {
        // Must open modal to select
        openProduct(id);
        // We could alert user, but opening modal is intuitive enough for "select options"
        return;
    }

    // Add single item
    const existingItemIndex = cart.findIndex(item => item.id === product.id && (!item.options || Object.keys(item.options).length === 0));

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
            options: {}
        });
    }

    saveCart();
    saveCart();
    updateCartBadge();

    // Toast Notification logic
    showToast(currentLang === 'ar' ? "تمت الإضافة بنجاح!" : "Product added to cart!");
}

function showToast(message) {
    const toast = document.getElementById('toast-notification');
    const msg = document.getElementById('toast-message');

    if (toast && msg) {
        msg.innerText = message;
        toast.className = "toast-notification show"; // Add show class

        // Hide after 3 seconds
        setTimeout(() => {
            toast.className = toast.className.replace("show", "");
        }, 3000);
    }
}

// Store Status Logic
function updateStoreStatus() {
    const statusElement = document.getElementById('store-status');
    if (!statusElement) return;

    const settings = getStoreSettings();

    // Use Cairo time to avoid local user timezone issues
    const now = new Date();
    const cairoTimeString = now.toLocaleString("en-US", { timeZone: "Africa/Cairo" });
    const cairoTime = new Date(cairoTimeString);

    const hour = cairoTime.getHours();
    const day = cairoTime.getDay(); // 0 = Sunday, 1 = Monday, ... 5 = Friday, 6 = Saturday

    let key = '';

    // Parse working hours from settings (e.g., "10AM - 10PM")
    const [openTimeStr, closeTimeStr] = settings.hours.split(' - ');
    const parseTime = (timeStr) => {
        const [time, ampm] = timeStr.match(/(\d+)(AM|PM)/i).slice(1);
        let h = parseInt(time);
        if (ampm.toUpperCase() === 'PM' && h < 12) h += 12;
        if (ampm.toUpperCase() === 'AM' && h === 12) h = 0; // Midnight
        return h;
    };

    const openHour = parseTime(openTimeStr);
    const closeHour = parseTime(closeTimeStr); // This is the hour the store closes, so it's open UP TO this hour.

    // If it's Friday (5), it's closed all day
    if (day === 5) {
        key = 'status_closed';
        statusElement.style.backgroundColor = '#dc3545'; // Red
        statusElement.style.color = '#fff';
    } else {
        // Open during working hours
        if (hour >= openHour && hour < closeHour) {
            key = 'status_open';
            statusElement.style.backgroundColor = '#28a745'; // Green
            statusElement.style.color = '#fff';
        }
        // Closing soon (e.g., last hour before closing)
        else if (hour === closeHour - 1) { // One hour before closing
            key = 'status_closing';
            statusElement.style.backgroundColor = '#ffc107'; // Yellow
            statusElement.style.color = '#000';
        }
        // All other times - Closed
        else {
            key = 'status_closed';
            statusElement.style.backgroundColor = '#dc3545'; // Red
            statusElement.style.color = '#fff';
        }
    }

    statusElement.setAttribute('data-i18n', key);

    let langToUse = currentLang === 'mixed' ? 'en' : currentLang;
    if (document.body.classList.contains('lang-ar')) {
        langToUse = 'ar';
    }

    if (translations[langToUse] && translations[langToUse][key]) {
        statusElement.innerHTML = translations[langToUse][key];
    }
}

// Initial setup
window.addEventListener('load', () => {
    updateStoreStatus();
    setInterval(updateStoreStatus, 60000); // Check every minute
});

// Checkout Flow with EmailJS
function openCheckoutPage() {
    if (!cart || cart.length === 0) {
        showToast(currentLang === 'ar' ? "عربة التسوق فارغة" : "Your cart is empty!");
        return;
    }

    const settings = getStoreSettings();

    // Render Order Summary Items
    const summaryContainer = document.getElementById('checkout-order-summary-items');
    if (summaryContainer) {
        summaryContainer.innerHTML = cart.map((item) => {
            let optionsDisplay = '';
            if (item.options && Object.keys(item.options).length > 0) {
                optionsDisplay = Object.values(item.options).join(', ');
            }
            return `
            <div style="display: flex; gap: 1rem; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">
                <div style="width: 50px; height: 50px; background: url('${item.image}') center/cover; border-radius: 5px; flex-shrink: 0;"></div>
                <div style="flex-grow: 1; color: #fff;">
                    <div style="font-weight: bold; font-size: 0.95rem;">${item.name}</div>
                    <div style="color: var(--text-muted); font-size: 0.8rem;">${optionsDisplay}</div>
                    <div style="color: var(--text-muted); font-size: 0.85rem;">Qty: ${item.quantity}</div>
                </div>
                <div style="color: var(--accent-gold); font-weight: bold; white-space: nowrap;">
                    ${item.price}
                </div>
            </div>`;
        }).join('');
    }

    // Calculate Total Price
    let subtotal = 0;
    cart.forEach(item => {
        let cleanPrice = item.price.toString().replace(/[^\d.]/g, '');
        let val = parseFloat(cleanPrice);
        if (!isNaN(val)) subtotal += val * item.quantity;
    });

    let shipping = parseFloat(settings.shippingFee) || 0;
    let totalPrice = subtotal + shipping;

    const checkoutTotal = document.getElementById('checkout-total-price');
    if (checkoutTotal) {
        checkoutTotal.innerText = totalPrice.toLocaleString() + " L.E";
    }

    // Update payment gateway visibility
    document.getElementById('pay-cash-option').style.display = 'flex';
    document.getElementById('pay-insta-option').style.display = 'flex';
    document.getElementById('pay-voda-option').style.display = 'flex';

    // If only one option is visible, select it by default
    const visiblePaymentOptions = document.querySelectorAll('.payment-option[style*="display: flex"]');
    if (visiblePaymentOptions.length === 1) {
        visiblePaymentOptions[0].querySelector('input[type="radio"]').checked = true;
    }


    // Switch Display
    if (typeof hideCart === 'function') hideCart();

    const mainSections = ['.hero', '#services', '#cover-frame-section', '#products-section', '#about', '#reviews', '#partners-ui'];
    mainSections.forEach(selector => {
        const el = document.querySelector(selector);
        if (el) el.style.display = 'none';
    });

    const checkoutSection = document.getElementById('checkout-section');
    if (checkoutSection) {
        checkoutSection.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function submitOrder(e) {
    e.preventDefault();
    if (cart.length === 0) return;

    const nameInput = document.getElementById('cust-name');
    const phoneInput = document.getElementById('cust-phone');
    const addressInput = document.getElementById('cust-address');

    const nameError = document.getElementById('name-error');
    const phoneError = document.getElementById('phone-error');
    const addressError = document.getElementById('address-error');

    const custName = nameInput.value.trim();
    const custPhone = phoneInput.value.trim();
    const custAddress = addressInput.value.trim();
    const paymentInput = document.querySelector('input[name="cust-payment"]:checked');
    const custPayment = paymentInput ? paymentInput.value : '';
    const custNotes = document.getElementById('cust-notes') ? document.getElementById('cust-notes').value.trim() : '';

    const paymentError = document.getElementById('payment-error');

    // Reset previous errors
    [nameInput, phoneInput, addressInput].forEach(el => el.style.border = '1px solid rgba(255,255,255,0.2)');
    [nameError, phoneError, addressError, paymentError].forEach(el => {
        if (el) el.style.display = 'none';
    });

    let isValid = true;

    // 1. Name Validation: Minimum 2 words
    const nameWords = custName.split(/\s+/);
    if (nameWords.length < 2) {
        isValid = false;
        nameInput.style.border = '1px solid #ff5555';
        nameError.innerText = currentLang === 'ar' ? "يرجى كتابة الاسم ثنائي أو أكثر" : "Please enter your full name (min 2 words)";
        nameError.style.display = 'block';
    }

    // 2. Phone Validation: Egyptian number (11 digits, starts with 01)
    const phoneRegex = /^01[0125][0-9]{8}$/;
    if (!phoneRegex.test(custPhone)) {
        isValid = false;
        phoneInput.style.border = '1px solid #ff5555';
        phoneError.innerText = currentLang === 'ar' ? "رقم غير صحيح، يجب أن يتكون من 11 رقم ويبدأ بـ 01" : "Invalid phone, must be 11 digits starting with 01";
        phoneError.style.display = 'block';
    }

    // 3. Address Validation: Detailed enough (at least 15 characters)
    if (custAddress.length < 15) {
        isValid = false;
        addressInput.style.border = '1px solid #ff5555';
        addressError.innerText = currentLang === 'ar' ? "يرجى كتابة تفاصيل العنوان: المحافظة، المدينة، المنطقة، واسم الشارع" : "Address too short, please include City, Region & Street";
        addressError.style.display = 'block';
    }

    if (!isValid) return;

    // 4. Payment method validation
    if (!custPayment) {
        if (paymentError) {
            paymentError.innerText = currentLang === 'ar' ? "يرجى اختيار طريقة الدفع" : "Please select a payment method";
            paymentError.style.display = 'block';
        }
        return;
    }

    const btn = document.getElementById('submit-order-btn');
    const originalText = btn.innerText;
    btn.innerText = currentLang === 'ar' ? "جاري الإرسال..." : "Sending...";
    btn.disabled = true;

    // Build the order details for EmailJS (HTML format)
    let orderItemsHtml = `<table style="width:100%; border-collapse: collapse; font-family: sans-serif; text-align: left;">
        <tr style="background-color: #f8f9fa; border-bottom: 2px solid #dee2e6;">
            <th style="padding: 12px; text-align: left;">Image</th>
            <th style="padding: 12px; text-align: left;">Product</th>
            <th style="padding: 12px; text-align: left;">Qty</th>
            <th style="padding: 12px; text-align: left;">Price</th>
            <th style="padding: 12px; text-align: left;">Total</th>
        </tr>`;

    let subtotal = 0;
    cart.forEach(item => {
        let opts = '';
        if (item.options && Object.keys(item.options).length > 0) {
            opts = `<br><small style="color:#6c757d;">${Object.values(item.options).join(', ')}</small>`;
        }

        let cleanPrice = item.price.toString().replace(/,/g, '');
        let val = parseFloat(cleanPrice);
        let itemTotal = 0;
        if (!isNaN(val)) {
            itemTotal = val * item.quantity;
            subtotal += itemTotal;
        }

        // Ensure image URL is absolute for email viewing
        let baseOrigin = (window.location.origin && window.location.origin.startsWith('http'))
            ? window.location.origin
            : 'https://alrayalighting.com';

        // Some images might not start with a slash, let's fix pathing
        let imgPath = item.image.startsWith('/') ? item.image : '/' + item.image;
        let imgUrl = item.image.startsWith('http') ? item.image : baseOrigin + imgPath;

        orderItemsHtml += `
        <tr style="border-bottom: 1px solid #dee2e6;">
            <td style="padding: 12px;"><img src="${imgUrl}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;"></td>
            <td style="padding: 12px;"><strong>${item.name}</strong>${opts}</td>
            <td style="padding: 12px;">${item.quantity}</td>
            <td style="padding: 12px; white-space: nowrap;">${item.price}</td>
            <td style="padding: 12px; white-space: nowrap; font-weight: bold; color: #1A1F71;">${itemTotal.toLocaleString()} L.E</td>
        </tr>`;
    });

    const settings = getStoreSettings();
    const shipping = parseFloat(settings.shippingFee) || 0;
    const totalPrice = subtotal + shipping;

    orderItemsHtml += `
        <tr style="border-top: 2px solid #dee2e6; background-color: #f8f9fa;">
            <td colspan="4" style="padding: 12px; text-align: right; font-weight: bold;">Subtotal:</td>
            <td style="padding: 12px; white-space: nowrap; font-weight: bold;">${subtotal.toLocaleString()} L.E</td>
        </tr>`;
    if (shipping > 0) {
        orderItemsHtml += `
        <tr style="background-color: #f8f9fa;">
            <td colspan="4" style="padding: 12px; text-align: right; font-weight: bold;">Shipping Fee:</td>
            <td style="padding: 12px; white-space: nowrap; font-weight: bold;">${shipping.toLocaleString()} L.E</td>
        </tr>`;
    }
    orderItemsHtml += `
        <tr style="background-color: #f8f9fa;">
            <td colspan="4" style="padding: 12px; text-align: right; font-weight: bold;">Total:</td>
            <td style="padding: 12px; white-space: nowrap; font-weight: bold; color: #1A1F71;">${totalPrice.toLocaleString()} L.E</td>
        </tr>
    </table>`;

    // Values already validated and extracted above
    // const custName = ...

    // Generate unique Order ID
    const newOrderId = "ORD-" + Math.floor(100000 + Math.random() * 900000);

    const templateParams = {
        // Use EmailJS routing or define to_email if your template is mapped up correctly
        to_email: settings.email,
        order_id: newOrderId, // Explicit variable for EmailJS template
        customer_name: custName || "N/A",
        customer_phone: custPhone || "N/A",
        customer_address: custAddress || "N/A",
        customer_notes: (custNotes ? custNotes + `\n(Order ID: ${newOrderId})` : `Order ID: ${newOrderId}`), // Fallback inside notes
        payment_method: custPayment,
        total_price: totalPrice.toLocaleString() + " L.E",
        order_details: orderItemsHtml
    };

    // NOTE: You must create an Email Service and an Email Template in the EmailJS dashboard.
    // Replace 'YOUR_SERVICE_ID' with your real Service ID and 'YOUR_TEMPLATE_ID' with your real Template ID.
    // The template should use the variables defined above (e.g. {{{order_details}}}).
    emailjs.send("service_dvortoy", "template_spkwwip", templateParams)
        .then(() => {
            let successMessageAr = "تم إرسال الطلب بنجاح! سنتواصل معك قريباً.";
            let successMessageEn = "Order sent successfully! We will contact you soon.";

            showToast(currentLang === 'ar' ? successMessageAr : successMessageEn);

            // Save Tracking info
            const trackingData = {
                id: newOrderId,
                name: custName,
                phone: custPhone,
                address: custAddress,
                payment: custPayment,
                total: totalPrice.toLocaleString() + " L.E",
                status: currentLang === 'ar' ? 'جاري المراجعة وتأكيد التوفر' : 'Pending Review for Item Availability',
                eta: currentLang === 'ar' ? 'التجهيز: 1-2 يوم عمل | التوصيل: سيتم تأكيده' : 'Preparation: 1-2 Working Days | Delivery: TBA',
                date: new Date().toISOString(),
                items: [...cart]
            };

            // 🔥 Use Firebase / Local Wrapper to Save Order dynamically
            if (typeof saveOrderToDB === 'function') {
                saveOrderToDB(trackingData);
            } else {
                localStorage.setItem('alraya_latest_order', JSON.stringify(trackingData));
                let allOrders = JSON.parse(localStorage.getItem('alraya_orders')) || [];
                allOrders.unshift(trackingData); // Add new to top
                localStorage.setItem('alraya_orders', JSON.stringify(allOrders));
            }

            cart = [];
            saveCart();
            updateCartBadge();
            const checkoutSection = document.getElementById('checkout-section');
            if (checkoutSection) checkoutSection.style.display = 'none';

            if (custPayment === "InstaPay" || custPayment === "Vodafone Cash") {
                // Show Payment Upload Section
                document.getElementById('payment-upload-amount').innerText = trackingData.total;

                const instapayAction = document.getElementById('instapay-action');
                if (custPayment === "InstaPay") {
                    instapayAction.innerHTML = `
                        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1rem;">Click below to open InstaPay App with the amount ready:</p>
                        <a href="instapay://pay?pa=01091732255@instapay&pn=Alraya&mc=0000&tid=&tr=&tn=Order&am=${totalPrice}&cu=EGP" style="display: inline-block; background: #FF005E; color: #fff; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: bold; text-decoration: none; transition: 0.3s; box-shadow: 0 4px 15px rgba(255,0,94,0.3);">Open InstaPay</a>
                    `;
                } else {
                    instapayAction.innerHTML = `
                        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1rem;">${currentLang === 'ar' ? 'افتح تطبيق أنا فودافون للتحويل، أو استخدم لوحة الاتصال المباشرة:' : 'Open Ana Vodafone app to transfer, or use the direct dialer:'}</p>
                        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                            <a href="intent://#Intent;package=com.emeint.android.myservices;end" style="display: flex; align-items: center; background: #E60000; color: #fff; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: bold; text-decoration: none; transition: 0.3s; box-shadow: 0 4px 15px rgba(230,0,0,0.3);">
                                <span class="material-icons-outlined" style="margin-right: 5px;">phone_android</span> Ana Vodafone
                            </a>
                            <a href="tel:*9*7*01091732255*${totalPrice}%23" style="display: flex; align-items: center; background: #333; color: #fff; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: bold; text-decoration: none; transition: 0.3s;">
                                <span class="material-icons-outlined" style="margin-right: 5px;">dialpad</span> Auto Dialer
                            </a>
                        </div>
                    `;
                }

                document.getElementById('payment-upload-section').style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                renderHome();
                // Auto open the tracker so they see the big status message
                setTimeout(() => { showOrderTracker(); }, 500);
            }
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);
            showToast(currentLang === 'ar' ? "حدث خطأ، يرجى ضبط إعدادات EmailJS في الكود" : "Error sending order. Please define your EmailJS configuration.");
        })
        .finally(() => {
            btn.innerText = originalText;
            btn.disabled = false;
        });
}

// Payment Upload Logic
let currentReceiptBase64 = null;

function handleReceiptSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const img = new Image();
        img.onload = function () {
            // Compress Image to avoid huge payloads in Firestore
            const canvas = document.createElement('canvas');
            const MAX_WIDTH = 800;
            const MAX_HEIGHT = 800;
            let width = img.width;
            let height = img.height;

            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            } else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);

            currentReceiptBase64 = canvas.toDataURL('image/jpeg', 0.7);

            document.getElementById('receipt-upload-label').innerText = file.name;
            document.getElementById('receipt-preview').src = currentReceiptBase64;
            document.getElementById('receipt-preview-container').style.display = 'block';
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function clearReceipt() {
    currentReceiptBase64 = null;
    document.getElementById('receipt-upload').value = '';
    document.getElementById('receipt-upload-label').innerText = currentLang === 'ar' ? 'اختر صورة الإيصال' : 'Select Image Receipt';
    document.getElementById('receipt-preview-container').style.display = 'none';
}

function finishPaymentUpload() {
    if (!currentReceiptBase64) {
        showToast(currentLang === 'ar' ? 'يرجى رفع صورة الإيصال أولاً أو التخطي' : 'Please upload the receipt image or skip.');
        return;
    }

    const finishBtn = document.getElementById('finish-payment-btn');
    const origText = finishBtn.innerText;
    finishBtn.innerText = currentLang === 'ar' ? 'جاري الرفع...' : 'Uploading...';
    finishBtn.disabled = true;

    const savedOrderStr = localStorage.getItem('alraya_latest_order');
    if (savedOrderStr) {
        let order = JSON.parse(savedOrderStr);
        order.receiptBase64 = currentReceiptBase64;

        // Update local arrays
        let allOrders = JSON.parse(localStorage.getItem('alraya_orders')) || [];
        const idx = allOrders.findIndex(o => o.id === order.id);
        if (idx !== -1) {
            allOrders[idx].receiptBase64 = currentReceiptBase64;
            localStorage.setItem('alraya_orders', JSON.stringify(allOrders));
        }
        localStorage.setItem('alraya_latest_order', JSON.stringify(order));

        // Let the DB handle saving it 
        if (typeof saveOrderToDB === 'function') {
            saveOrderToDB(order).then(() => {
                showToast(currentLang === 'ar' ? 'تم رفع الإيصال بنجاح. شكراً لك!' : 'Receipt uploaded successfully. Thank you!');
                finishBtn.innerText = origText;
                finishBtn.disabled = false;
                closePaymentUpload();
            }).catch(e => {
                finishBtn.innerText = origText;
                finishBtn.disabled = false;
                closePaymentUpload(); // still close
            });
            return;
        }
    }

    finishBtn.innerText = origText;
    finishBtn.disabled = false;
    showToast(currentLang === 'ar' ? 'تم إرفاق الإيصال بنجاح.' : 'Receipt attached locally.');
    closePaymentUpload();
}

function skipReceiptUpload() {
    closePaymentUpload();
}

function closePaymentUpload() {
    document.getElementById('payment-upload-section').style.display = 'none';
    clearReceipt();
    renderHome();
    setTimeout(() => { showOrderTracker(); }, 500);
}

// Order Tracker Logic
async function showOrderTracker() {
    const modal = document.getElementById('tracker-modal');
    const content = document.getElementById('tracker-content');

    const savedOrderStr = localStorage.getItem('alraya_latest_order');
    if (!savedOrderStr) {
        content.innerHTML = `<div style="text-align:center; padding: 2rem;">
            ${currentLang === 'ar' ? 'لا توجد طلبات سابقة مسجلة على هذا الجهاز.' : 'No recent orders found on this device.'}
        </div>`;
        modal.style.display = 'flex';
        return;
    }

    let order = JSON.parse(savedOrderStr);

    // Show Loading
    content.innerHTML = `<div style="text-align:center; padding: 2rem;">
        <span class="material-icons-outlined" style="animation: spin 1s linear infinite;">autorenew</span>
        <div style="margin-top:10px;">${currentLang === 'ar' ? 'جاري تحديث البيانات...' : 'Fetching data...'}</div>
    </div>`;
    modal.style.display = 'flex';

    // Fetch latest fresh data from Firebase if available
    if (typeof fetchOrderByIdFromDB === 'function') {
        const freshOrder = await fetchOrderByIdFromDB(order.id);
        if (freshOrder) {
            order = freshOrder;
            localStorage.setItem('alraya_latest_order', JSON.stringify(order));
        }
    }

    // Build items UI
    let itemsHTML = '';
    order.items.forEach(item => {
        let opts = '';
        if (item.options && Object.keys(item.options).length > 0) {
            opts = `<br><small style="color:var(--text-muted);">${Object.values(item.options).join(', ')}</small>`;
        }
        itemsHTML += `
        <div style="display: flex; gap: 1rem; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
            <div style="width: 40px; height: 40px; background: url('${item.image}') center/cover; border-radius: 5px; flex-shrink: 0;"></div>
            <div style="flex-grow: 1;">
                <div style="font-weight: bold; font-size: 0.9rem;">${item.name}</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Qty: ${item.quantity} x ${item.price}</div>
            </div>
            <div style="font-weight: bold; color: var(--accent-gold); white-space: nowrap;">${(parseFloat(item.price.replace(/,/g, '')) * item.quantity).toLocaleString()} L.E</div>
        </div>
        `;
    });

    let adminMsgHtml = '';
    if (order.adminMessage && order.adminMessage.trim() !== '') {
        adminMsgHtml = `
        <div style="background: rgba(210, 168, 68, 0.15); border: 1px solid var(--accent-gold); padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem;">
            <div style="display:flex; align-items:center; gap: 8px; color: var(--accent-gold); font-weight:bold; margin-bottom: 0.5rem;">
                <span class="material-icons-outlined" style="font-size: 1.2rem;">info</span>
                ${currentLang === 'ar' ? 'رسالة من الإدارة:' : 'Message from Admin:'}
            </div>
            <div style="color: #fff; font-size: 0.95rem; line-height: 1.6;">${order.adminMessage}</div>
        </div>
        `;
    }

    let paymentMsgHtml = '';
    if (order.payment === "InstaPay" || order.payment === "Vodafone Cash") {
        const currentStatus = (order.status || '').toLowerCase().trim();
        const isProcessing = currentStatus.includes('التحضير') ||
            currentStatus.includes('تحضير') ||
            currentStatus.includes('جاري التنفيذ') ||
            currentStatus.includes('التنفيذ') ||
            currentStatus.includes('تنفيذ') ||
            currentStatus.includes('جاري') ||
            currentStatus.includes('processing') ||
            currentStatus.includes('prepared') ||
            currentStatus.includes('preparing');

        if (isProcessing) {
            paymentMsgHtml = `
            <div style="background: rgba(40, 167, 69, 0.15); border: 2px solid #28a745; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem; text-align: center; box-shadow: 0 0 15px rgba(40, 167, 69, 0.2);">
                <div style="display:flex; justify-content:center; align-items:center; gap: 8px; color: #28a745; font-weight:bold; font-size: 1.3rem; margin-bottom: 0.5rem;">
                    <span class="material-icons-outlined" style="font-size: 1.8rem;">check_circle</span>
                    Payment Confirmed | تم تأكيد الدفع
                </div>
                <div style="color: #fff; font-size: 1.15rem; line-height: 1.6; font-weight: bold; padding-bottom: 0.5rem; border-bottom: 1px solid rgba(40,167,69,0.3); margin-bottom: 0.5rem;">
                    Payment received. Your order is currently being prepared as fast as possible.
                </div>
                <div style="color: #fff; font-size: 1.15rem; line-height: 1.6; font-weight: bold;" dir="rtl">
                    تم تأكيد استلام المبلغ، وجاري تحضير الأوردر الخاص بك في أسرع وقت.
                </div>
            </div>
            `;
        } else {
            paymentMsgHtml = `
            <div style="background: rgba(255, 0, 94, 0.15); border: 2px solid #FF005E; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem; text-align: center; box-shadow: 0 0 15px rgba(255, 0, 94, 0.2);">
                <div style="display:flex; justify-content:center; align-items:center; gap: 8px; color: #FF005E; font-weight:bold; font-size: 1.3rem; margin-bottom: 0.5rem;">
                    <span class="material-icons-outlined" style="font-size: 1.8rem;">warning</span>
                    Very Important | تنبيه هام جداً
                </div>
                <div style="color: #fff; font-size: 1.15rem; line-height: 1.6; font-weight: bold; padding-bottom: 0.5rem; border-bottom: 1px solid rgba(255,0,94,0.3); margin-bottom: 0.5rem;">
                    Order preparation will start upon confirming the transfer (to 01091732255) and submitting the receipt via WhatsApp.
                </div>
                <div style="color: #fff; font-size: 1.15rem; line-height: 1.6; font-weight: bold;" dir="rtl">
                    سيتم بدأ تحضير الأوردر فور تأكيد تحويل المبلغ (على رقم 01091732255) وإرسال الإيصال عبر الواتساب.
                </div>
            </div>
            `;
        }
    }

    content.innerHTML = `
        <div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; border-left: 4px solid var(--accent-gold);">
            <div style="margin-bottom: 0.5rem; font-size: 1.1rem;"><strong style="color: var(--accent-gold);">${currentLang === 'ar' ? 'رقم الطلب:' : 'Order ID:'}</strong> <span style="font-weight:bold; color: #fff;">${order.id || '#N/A'}</span></div>
            <div style="margin-bottom: 0.5rem;"><strong style="color: var(--accent-gold);">${currentLang === 'ar' ? 'حالة الطلب:' : 'Order Status:'}</strong> <span style="font-weight:bold;">${order.status}</span></div>
            <div><strong style="color: var(--accent-gold);">${currentLang === 'ar' ? 'الوقت المتوقع:' : 'ETA:'}</strong> <span style="font-size: 0.95rem;">${order.eta}</span></div>
        </div>

        ${paymentMsgHtml}
        ${adminMsgHtml}

        <h4 style="color: var(--accent-gold); margin-bottom: 1rem;">${currentLang === 'ar' ? 'المنتجات المطلوبة:' : 'Requested Items:'}</h4>
        <div style="margin-bottom: 1.5rem; max-height: 200px; overflow-y: auto;">
            ${itemsHTML}
        </div>

        <div style="margin-bottom: 1.5rem; font-size: 0.95rem; line-height: 1.8;">
            <div><strong style="color: var(--text-muted);">${currentLang === 'ar' ? 'الاسم:' : 'Name:'}</strong> ${order.name}</div>
            <div><strong style="color: var(--text-muted);">${currentLang === 'ar' ? 'الهاتف:' : 'Phone:'}</strong> ${order.phone}</div>
            <div><strong style="color: var(--text-muted);">${currentLang === 'ar' ? 'العنوان:' : 'Address:'}</strong> ${order.address}</div>
            <div><strong style="color: var(--text-muted);">${currentLang === 'ar' ? 'وسيلة الدفع:' : 'Payment:'}</strong> ${order.payment}</div>
            <div style="margin-top: 0.5rem; font-size: 1.1rem;"><strong style="color: var(--text-muted);">${currentLang === 'ar' ? 'الإجمالي:' : 'Total:'}</strong> <span style="color: var(--accent-gold); font-weight:bold;">${order.total}</span></div>
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 1rem; width: 100%;">
            <button id="contact-pdf-btn" onclick="shareOrderPDF(true)" style="flex: 1 1 135px; width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 16px; border-radius: 50px; background: #25D366; color: #fff; font-weight: bold; border: none; cursor: pointer; font-size: 15px; box-sizing: border-box; transition: 0.3s;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink: 0;">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span style="white-space: nowrap; text-align: center;">${currentLang === 'ar' ? 'تواصل معنا' : 'Contact Us'}</span>
            </button>
            <button id="share-pdf-btn" onclick="shareOrderPDF(false)" style="flex: 1 1 135px; width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 16px; border-radius: 50px; background: #E50914; color: #fff; font-weight: bold; border: none; cursor: pointer; font-size: 15px; box-sizing: border-box; transition: 0.3s;">
                <span class="material-icons-outlined" style="font-size: 20px; flex-shrink: 0;">picture_as_pdf</span>
                <span style="white-space: nowrap; text-align: center;">${currentLang === 'ar' ? 'مشاركة الفاتورة' : 'Share PDF'}</span>
            </button>
        </div>
    `;

    modal.style.display = 'flex';
}

function closeOrderTracker() {
    document.getElementById('tracker-modal').style.display = 'none';
}

function shareOrderPDF(forceWhatsApp = false) {
    if (typeof html2pdf === 'undefined') {
        showToast(currentLang === 'ar' ? 'أداة الإخراج غير متاحة حالياً.' : 'PDF Generation library not loaded.');
        return;
    }

    const savedOrder = localStorage.getItem('alraya_latest_order');
    if (!savedOrder) return;
    const order = JSON.parse(savedOrder);
    const settings = getStoreSettings();

    const shareBtn = document.getElementById('share-pdf-btn');
    const contactBtn = document.getElementById('contact-pdf-btn');
    const clickedBtn = forceWhatsApp ? contactBtn : shareBtn;
    const originalBtnHTML = clickedBtn ? clickedBtn.innerHTML : '';

    if (clickedBtn) {
        clickedBtn.innerHTML = `<span class="material-icons-outlined" style="animation: spin 1s linear infinite;">autorenew</span> <span>${currentLang === 'ar' ? 'جاري التحميل...' : 'Loading...'}</span>`;
    }
    if (shareBtn) shareBtn.disabled = true;
    if (contactBtn) contactBtn.disabled = true;

    const elementToPrint = document.querySelector('#tracker-modal > div');
    const actionContainer = shareBtn ? shareBtn.parentElement : null;
    const closeBtn = document.querySelector('#tracker-modal button[onclick="closeOrderTracker()"]');

    // Hide interactive elements before screenshot
    if (actionContainer) actionContainer.style.display = 'none';
    if (closeBtn) closeBtn.style.display = 'none';

    // Store original background to force dark mode rendering perfectly
    const origBg = elementToPrint.style.background;
    elementToPrint.style.background = '#141414'; // Force solid dark background

    // FIX FOR "Tainted Canvas" error on local file:/// protocol:
    // Temporarily remove local image backgrounds so html2canvas doesn't crash throwing CORS issues
    const imageDivs = elementToPrint.querySelectorAll('div[style*="url("]');
    imageDivs.forEach(div => {
        div.dataset.origBgImage = div.style.backgroundImage || div.style.background;
        div.style.background = 'transparent';
    });

    const opt = {
        margin: 0,
        filename: `Alraya_Order_${order.phone}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: window.devicePixelRatio || 2, useCORS: true, allowTaint: false, backgroundColor: '#141414' },
        jsPDF: { unit: 'px', format: [elementToPrint.offsetWidth, elementToPrint.offsetHeight + 10], orientation: 'portrait' }
    };

    html2pdf().set(opt).from(elementToPrint).toPdf().get('pdf').then(function (pdfObj) {
        const pdfBlob = pdfObj.output('blob');
        const file = new File([pdfBlob], opt.filename, { type: 'application/pdf' });

        let canShareFile = false;
        if (navigator.canShare) {
            canShareFile = navigator.canShare({ files: [file] });
        }

        if (forceWhatsApp) {
            // Force WhatsApp Behavior for all devices: Download explicitly & Redirect directly to wa.me with prefilled text.
            // Due to web limitations, passing a file directly into a specific wa.me intent is blocked by WhatsApp.
            // The file is downloaded, so the user only has to click the attach button in the opened chat.
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(pdfBlob);
            link.download = opt.filename;
            link.click();
            showToast(currentLang === 'ar' ? 'تم تنزيل الفاتورة. جاري فتح المحادثة للواتساب...' : 'Downloaded. Opening WhatsApp...');

            const orderIdText = order.id ? ` ${order.id} ` : ' ';
            const message = settings.waTemplate.replace('{{orderId}}', orderIdText);
            const url = `https://wa.me/${getContactPhoneForWA()}?text=${encodeURIComponent(message)}`;

            // Open the WhatsApp chat directly with the target number
            setTimeout(() => window.open(url, '_blank'), 1500);
        } else {
            if (navigator.share && canShareFile) {
                navigator.share({
                    title: 'تفاصيل الأوردر من الراية',
                    text: 'مرفق تفاصيل الطلب',
                    files: [file]
                }).catch((err) => {
                    console.log('Share error', err);
                });
            } else {
                // Fallback
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(pdfBlob);
                link.download = opt.filename;
                link.click();
                showToast(currentLang === 'ar' ? 'تم تحميل الفاتورة بنجاح. أرسلها عبر الواتساب.' : 'PDF downloaded successfully. Please share it.');
            }
        }
    }).catch(err => {
        console.error("PDF generation error:", err);
        showToast("Error generating PDF: " + (err.message || err));
    }).finally(() => {
        // Restore UI
        if (actionContainer) actionContainer.style.display = 'flex';
        if (closeBtn) closeBtn.style.display = 'block';
        elementToPrint.style.background = origBg;

        // Restore local images
        imageDivs.forEach(div => {
            if (div.dataset.origBgImage) {
                div.style.background = div.dataset.origBgImage;
            }
        });

        if (clickedBtn) clickedBtn.innerHTML = originalBtnHTML;
        if (shareBtn) shareBtn.disabled = false;
        if (contactBtn) contactBtn.disabled = false;
    });
}
// Order Tracking URL Decoder
window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const trackingData = urlParams.get('track_order');

    if (trackingData) {
        try {
            const decodedStr = decodeURIComponent(atob(trackingData));
            // Validate JSON
            JSON.parse(decodedStr);
            // Save to local storage
            localStorage.setItem('alraya_latest_order', decodedStr);

            // Show tracker modal after a slight delay for better UX
            setTimeout(() => {
                showOrderTracker();
            }, 500);

            // Clean URL
            window.history.replaceState({}, document.title, window.location.pathname);
        } catch (e) {
            console.error("Invalid tracking URL parameters", e);
        }
    }
});

// Admin Dashboard Integration
window.addEventListener('DOMContentLoaded', () => {
    // Check persistent visibility based on successful login from Dashboard.html
    if (localStorage.getItem('isAdmin') === 'true') {
        const adminBtn = document.getElementById('admin-panel-link');
        if (adminBtn) {
            adminBtn.style.display = 'flex'; // override display: none
            adminBtn.href = 'Dashboard-Panel.html'; // Set link straight to dashboard

            // Function to update the red alert pulse state
            const updateAlertState = (orders) => {
                let hasPending = false;
                let hasProcessing = false;

                orders.forEach(o => {
                    let s = o.status || 'Pending';
                    if (s.includes('جاري المراجعة') || s.includes('Pending')) {
                        hasPending = true;
                    } else if (!s.includes('مكتمل') && !s.includes('Completed') && !s.includes('إلغـاء') && !s.includes('Cancelled') && !s.includes('ملغي')) {
                        hasProcessing = true;
                    }
                });

                if (hasPending) {
                    adminBtn.classList.add('admin-alert-active');
                    adminBtn.classList.remove('admin-alert-processing');
                    adminBtn.title = 'Admin Dashboard (New Orders!)';
                } else if (hasProcessing) {
                    adminBtn.classList.remove('admin-alert-active');
                    adminBtn.classList.add('admin-alert-processing');
                    adminBtn.title = 'Admin Dashboard (Active Orders)';
                } else {
                    adminBtn.classList.remove('admin-alert-active');
                    adminBtn.classList.remove('admin-alert-processing');
                    adminBtn.title = 'Admin Dashboard';
                }
            };

            // Real-time listener for pending orders
            if (typeof subscribeToOrders === 'function') {
                subscribeToOrders(updateAlertState);
            } else {
                let orders = JSON.parse(localStorage.getItem('alraya_orders')) || [];
                updateAlertState(orders);
            }
        }
    }

    // Subscribe to Reviews for the storefront
    if (document.getElementById('reviews-container')) {
        if (typeof subscribeToReviews === 'function') {
            subscribeToReviews(renderReviews);
        } else {
            let reviews = JSON.parse(localStorage.getItem('alraya_reviews')) || [];
            renderReviews(reviews);
        }
    }
});
// Smart Search Logic
window.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('smart-search-input');
    const resultsContainer = document.getElementById('smart-search-results');

    if (searchInput) {
        searchInput.addEventListener('input', function (e) {
            const query = e.target.value.toLowerCase().trim();

            if (query.length < 2) {
                resultsContainer.style.display = 'none';
                return;
            }

            const matched = products.filter(p => {
                let currentName = p.name ? p.name.toLowerCase() : "";
                let transName = (translations['ar'] && translations['ar'][`prod_${p.id}`]) ? translations['ar'][`prod_${p.id}`] : "";
                let transCat = (translations['ar'] && translations['ar'][`cat_${p.category.toLowerCase().replace(/ /g, '_')}`]) || "";
                return currentName.includes(query) || p.category.toLowerCase().includes(query) || transName.includes(query) || transCat.includes(query);
            }).slice(0, 6);

            if (matched.length > 0) {
                resultsContainer.innerHTML = matched.map(p => {
                    let displayPrice = p.price;
                    if (!isNaN(parseFloat(p.price))) displayPrice += " L.E";

                    let translatedName = (currentLang === 'ar' || document.body.classList.contains('lang-ar')) && translations['ar'][`prod_${p.id}`] ? translations['ar'][`prod_${p.id}`] : p.name;

                    return `
                        <div class="search-result-item" onclick="openProduct(${typeof p.id === 'string' ? "'" + p.id + "'" : p.id}); document.getElementById('smart-search-results').style.display='none'; document.getElementById('smart-search-input').value='';">
                            <img src="${p.image}" alt="${p.name}">
                            <div class="search-result-info">
                                <span class="search-result-name">${translatedName}</span>
                                <span class="search-result-cat">${displayPrice}</span>
                            </div>
                        </div>
                    `;
                }).join('');
                resultsContainer.style.display = 'block';
            } else {
                resultsContainer.innerHTML = `<div style="padding: 10px; color: var(--text-muted); text-align: center; font-size: 0.9rem;">${currentLang === 'ar' ? 'لا توجد منتجات' : 'No products found'}</div>`;
                resultsContainer.style.display = 'block';
            }
        });

        document.addEventListener('click', function (e) {
            if (!e.target.closest('.smart-search-container')) {
                resultsContainer.style.display = 'none';
            }
        });
    }
});
