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
        image: "assets/lampshade_new_2.webp",
        desc: "Contemporary floor lamp with a unique woven design.",
        warranty: "Lifetime"
    },
    {
        id: 507,
        category: "Lampshades",
        name: "Nordic Wood Table Lamp",
        price: "Contact for Price",
        image: "assets/lampshade_new_1.webp",
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
        image: "assets/pendant_new_1.webp",
        desc: "Bohemian style woven pendant light for a natural touch.",
        warranty: "Lifetime"
    },
    {
        id: 603,
        category: "Pendant Lights",
        name: "Rattan Warmth Hanging Light",
        price: "Contact for Price",
        image: "assets/pendant_new_2.webp",
        desc: "Handcrafted rattan pendant lamp for warm ambient lighting.",
        warranty: "Lifetime"
    },
    {
        id: 604,
        category: "Pendant Lights",
        name: "Zenith Woven Cylinder Pendant",
        price: "Contact for Price",
        image: "assets/pendant_new_3.webp",
        desc: "Elongated woven pendant creating intricate shadow patterns.",
        warranty: "Lifetime"
    },
    {
        id: 605,
        category: "Pendant Lights",
        name: "Dome Rattan Pendant",
        price: "Contact for Price",
        image: "assets/pendant_new_4.webp",
        desc: "Classic dome-shaped rattan pendant for cozy dining areas.",
        warranty: "Lifetime"
    },
    {
        id: 606,
        category: "Pendant Lights",
        name: "Basket Weave Hanging Lamp",
        price: "Contact for Price",
        image: "assets/pendant_new_5.webp",
        desc: "Textured basket weave pendant adding rustic charm to any room.",
        warranty: "Lifetime"
    },
    {
        id: 608,
        category: "Pendant Lights",
        name: "Lattice Globe Woven Pendant",
        price: "Contact for Price",
        image: "assets/pendant_new_7.webp",
        desc: "Spherical woven pendant casting stunning geometric shadows.",
        warranty: "Lifetime"
    },
    {
        id: 609,
        category: "Pendant Lights",
        name: "Tassel Fringe Boho Shade",
        price: "Contact for Price",
        image: "assets/pendant_new_8.webp",
        desc: "Bohemian-style pendant with delicate fringe details.",
        warranty: "Lifetime"
    },
    {
        id: 611,
        category: "Pendant Lights",
        name: "Pagoda Woven Lantern",
        price: "Contact for Price",
        image: "assets/pendant_new_10.webp",
        desc: "Structured woven pendant with a unique pagoda-inspired shape.",
        warranty: "Lifetime"
    },
    {
        id: 613,
        category: "Pendant Lights",
        name: "Artisan Bell Weave",
        price: "Contact for Price",
        image: "assets/pendant_new_12.webp",
        desc: "Handcrafted bell-shaped woven pendant for warm, ambient light.",
        warranty: "Lifetime"
    },
    {
        id: 614,
        category: "Pendant Lights",
        name: "Lumine Woven Drop",
        price: "Contact for Price",
        image: "assets/pendant_new_13.webp",
        desc: "Elegant teardrop woven shade creating a cozy atmosphere.",
        warranty: "Lifetime"
    },
    {
        id: 612,
        category: "Pendant Lights",
        name: "Cylindrical Mesh Pendant",
        price: "Contact for Price",
        image: "assets/pendant_new_11.webp",
        desc: "Tall cylindrical pendant with an airy mesh weave for a light, modern look.",
        warranty: "Lifetime"
    },
    {
        id: 615,
        category: "Pendant Lights",
        name: "Shadow Weave Pendant",
        price: "Contact for Price",
        image: "assets/pendant_new_14.webp",
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
        image: "assets/pendant_new_9.webp",
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

    // Indoor Wall Sconces
    // Modern / Geometric
    {
        id: 401,
        category: "Wall Sconce",
        name: "Minimalist Cylinder Sconce",
        price: "Contact for Price",
        image: "assets/401.webp",
        desc: "Sleek cylindrical fixture for modern wall lighting.",
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
        image: "assets/wall_new_1.webp",
        desc: "A sleek and modern wall sconce to enhance your interior.",
        warranty: "Lifetime"
    },
    {
        id: 215,
        category: "Wall Sconce",
        name: "Urban Block Wall Light",
        price: "Contact for Price",
        image: "assets/wall_new_2.webp",
        desc: "Elegant wall lighting fixture for a contemporary look.",
        warranty: "Lifetime"
    },
    {
        id: 216,
        category: "Wall Sconce",
        name: "Abstract Form Sconce",
        price: "Contact for Price",
        image: "assets/wall_new_3.webp",
        desc: "Distinctive wall light with a unique shape.",
        warranty: "Lifetime"
    },
    {
        id: 219,
        category: "Wall Sconce",
        name: "Solaris Gold Halo Sconce",
        price: "Contact for Price",
        image: "assets/wall_new_6.webp",
        desc: "Modern circular LED wall sconce with a gold center.",
        warranty: "Lifetime"
    },
    {
        id: 220,
        category: "Wall Sconce",
        name: "Eclipse Dual Sconce",
        price: "Contact for Price",
        image: "assets/wall_new_7.webp",
        desc: "Modern rounded wall light available in black and white finishes.",
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
        image: "assets/wall_new_4.webp",
        desc: "Retro-industrial style wall lamp with metal mesh.",
        warranty: "Lifetime"
    },
    {
        id: 218,
        category: "Wall Sconce",
        name: "Cage Bulb Vintage Sconce",
        price: "Contact for Price",
        image: "assets/wall_new_5.webp",
        desc: "Elegant black metal fixture with a decorative bulb cage.",
        warranty: "Lifetime"
    },
    {
        id: 221,
        category: "Wall Sconce",
        name: "Maritime Grid Wall Lamp",
        price: "Contact for Price",
        image: "assets/wall_new_8.webp",
        desc: "Durable oval bulkhead light with a protective grid design.",
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
        category: "Spotlights",
        name: "Lumina Deep Anti-Glare",
        price: "Contact for Price",
        image: "assets/spotlight_new_2.webp",
        desc: "High-quality recessed spotlight providing excellent illumination.",
        warranty: "Lifetime"
    },
    {
        id: 807,
        category: "Spotlights",
        name: "Halo Round Baffle Spot",
        price: "Contact for Price",
        image: "assets/spotlight_new_4.webp",
        desc: "Round modern spotlight with deep baffle for glare control.",
        warranty: "Lifetime"
    },
    {
        id: 808,
        category: "Spotlights",
        name: "Gemini Twin Recessed Spot",
        price: "Contact for Price",
        image: "assets/spotlight_new_5.webp",
        desc: "Dual head recessed spotlight for powerful accent lighting.",
        warranty: "Lifetime"
    },
    {
        id: 809,
        category: "Spotlights",
        name: "Vantage Square Frame",
        price: "Contact for Price",
        image: "assets/spotlight_new_6.webp",
        desc: "Elegant and modern frame for recessed lighting.",
        warranty: "Lifetime"
    },
    {
        id: 810,
        category: "Spotlights",
        name: "Cubio Minimalist Spot",
        price: "Contact for Price",
        image: "assets/spotlight_new_7.webp",
        desc: "Minimalist square design for contemporary spaces.",
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
        category: "Spotlights",
        name: "Quadra Adjustable Spot",
        price: "Contact for Price",
        image: "assets/spotlight_new_3.webp",
        desc: "Square adjustable spotlight for versatile lighting.",
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
        warranty: "Lifetime"
    },
    {
        id: 602,
        category: "Outdoor Pillar Lights",
        name: "Contemporary Bollard Post",
        price: "Contact for Price",
        image: "assets/459.webp",
        desc: "Sleek rectangular post light providing structural elegance outdoors.",
        warranty: "Lifetime"
    },
    {
        id: 106,
        category: "Outdoor Pillar Lights",
        name: "Architectural Skyline Bollard",
        price: "Contact for Price",
        image: "assets/outdoor_pillar_new_1.webp",
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

    // Garden Spike Lights
    {
        id: 8,
        category: "Garden Spike Lights",
        name: "Precision Garden Spike Spot",
        price: "$45",
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
        warranty: "2 Years"
    },
    {
        id: 10,
        category: "Garden Spike Lights",
        name: "Compact Landscape Spike",
        price: "Contact for Price",
        image: "assets/garden_spike_3.webp",
        desc: "Compact and powerful spike light for discreet landscape illumination.",
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
        desc: "Professional-grade spike light designed for illuminating pathways clearly.",
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
        name: "Extension Cord 727",
        price: "Contact for Price",
        image: "assets/727.webp",
        desc: "High quality extension cord for reliable power connectivity.",
        warranty: "Lifetime"
    },
    {
        id: 728,
        category: "Extension Cord",
        name: "Extension Cord 728",
        price: "Contact for Price",
        image: "assets/728.webp",
        desc: "Durable and secure extension cord for indoor use.",
        warranty: "Lifetime"
    },
    {
        id: 729,
        category: "Extension Cord",
        name: "Extension Cord 729",
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
        price: "Contact for Price",
        image: "assets/705.webp",
        desc: "High-quality plug with secure grip and durable construction.",
        warranty: "Lifetime"
    },
    {
        id: 1007,
        category: "Plugs",
        name: "iLOCK Power Socket",
        price: "Contact for Price",
        image: "assets/706.webp",
        desc: "Reliable power socket designed for safety and longevity.",
        warranty: "Lifetime"
    },
    {
        id: 1008,
        category: "Plugs",
        name: "Standard Grounded Plug",
        price: "Contact for Price",
        image: "assets/707.webp",
        desc: "Standard grounded plug suitable for a wide range of appliances.",
        warranty: "Lifetime"
    },
    {
        id: 1009,
        category: "Plugs",
        name: "Heavy-Duty Plug",
        price: "Contact for Price",
        image: "assets/708.webp",
        desc: "Heavy-duty plug built to withstand demanding industrial environments.",
        warranty: "Lifetime"
    },

    // PVC Tape
    {
        id: 1010,
        category: "PVC Tape",
        name: "Premium PVC Insulation Tape",
        price: "Contact for Price",
        image: "assets/709.webp",
        desc: "High-grade PVC tape with excellent elasticity and adhesion for wire insulation.",
        warranty: "Lifetime"
    },
    {
        id: 1011,
        category: "PVC Tape",
        name: "Professional Electrical Tape",
        price: "Contact for Price",
        image: "assets/710.webp",
        desc: "Durable electrical tape providing strong protection against abrasion and moisture.",
        warranty: "Lifetime"
    },
    {
        id: 1012,
        category: "PVC Tape",
        name: "Color-Coded PVC Tape",
        price: "Contact for Price",
        image: "assets/711.webp",
        desc: "Versatile PVC tape available for phase coding and general bundling.",
        warranty: "Lifetime"
    },

    // Power Strips (New Additions)
    {
        id: 714,
        category: "Power Strips",
        name: "Multi-Outlet Power Strip",
        price: "Contact for Price",
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
        name: "Power Strip 725",
        price: "Contact for Price",
        image: "assets/725.webp",
        desc: "Durable and multi-socket power strip.",
        warranty: "Lifetime"
    },
    {
        id: 726,
        category: "Power Strips",
        name: "Power Strip 726",
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

    // Mobile Accessories (New Section)
    {
        id: 730,
        category: "Mobile Accessories",
        name: "Mobile Accessory 730",
        price: "Contact for Price",
        image: "assets/730.webp",
        desc: "High-quality mobile accessory for daily use.",
        warranty: "1 Year"
    },
    {
        id: 731,
        category: "Mobile Accessories",
        name: "Mobile Accessory 731",
        price: "Contact for Price",
        image: "assets/731.webp",
        desc: "Essential mobile accessory with durable build.",
        warranty: "1 Year"
    },
    {
        id: 732,
        category: "Mobile Accessories",
        name: "Mobile Accessory 732",
        price: "Contact for Price",
        image: "assets/732.webp",
        desc: "Premium mobile accessory.",
        warranty: "1 Year"
    },
    {
        id: 733,
        category: "Mobile Accessories",
        name: "Mobile Accessory 733",
        price: "Contact for Price",
        image: "assets/733.webp",
        desc: "Reliable mobile accessory.",
        warranty: "1 Year"
    },
    {
        id: 734,
        category: "Mobile Accessories",
        name: "Mobile Accessory 734",
        price: "Contact for Price",
        image: "assets/734.webp",
        desc: "Versatile mobile accessory.",
        warranty: "1 Year"
    },
    {
        id: 735,
        category: "Mobile Accessories",
        name: "Mobile Accessory 735",
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
    }
];

