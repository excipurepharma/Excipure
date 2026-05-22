// 1. INITIALIZE ICONS
lucide.createIcons();

// 2. PRODUCT DATABASE
const products = [
    // --- EXCIPIENTS ---
    { 
        id: 1, name: "Calcium Carbonate", cat: "Excipients", stock: "25 Kg Bag", func: "Diluent", 
        apps: "Calcium Supplement, Tablet Diluent, Antacid Formulations", grade: "IP / BP / USP / Food Grade", 
        mol: "CaCO₃", purity: ">99%", desc: "A fine white, odorless crystalline powder, Calcium Carbonate is widely used as a diluent and calcium supplement. It provides bulk to formulations and is also used as an antacid.", 
        img: "images/products/excipients/calcium-carbonate.jpg",
        features: "Excellent stability, High calcium content, Good compressibility", appearance: "White powder or granules", weight: "100.09 g/mol", density: "2.71 g/cm³", melting: "825°C", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 2, name: "Carbomer (Carbopol)", cat: "Excipients", stock: "25 Kg Bag", func: "Thickener / Gelling Agent", 
        apps: "Gels, Creams, Lotions, Topical Formulations", grade: "Pharma Grade / USP", 
        mol: "Crosslinked Polyacrylic Acid", purity: ">99%", desc: "A white fluffy hygroscopic powder widely used as a thickening, suspending, and gelling agent in pharmaceutical and cosmetic formulations.", 
        img: "images/products/excipients/carbomer.jpg",
        features: "High viscosity, Excellent stability, Efficient suspending properties", appearance: "White fluffy powder", weight: "Varies", density: "0.20 g/cm³", melting: "Decomposes", origin: "India", moq: "20 Kg", pkgType: "Bag / Drum"
    },
    { 
        id: 4, name: "Calcium Stearate", cat: "Excipients", stock: "25 Kg Bag", func: "Lubricant / Stabilizer", 
        apps: "Tablets, Capsules", grade: "Pharma Grade / USP", 
        mol: "C₃₆H₇₀CaO₄", purity: ">98%", desc: "A fine white, slightly greasy powder, Calcium Stearate acts as a lubricant and anti-adherent in tablet manufacturing. It prevents sticking to machinery and improves powder flow.", 
        img: "images/products/excipients/calcium-stearate.jpg",
        features: "Water repellent, Improves flow properties", appearance: "Fine white powder", weight: "607.02 g/mol", density: "1.08 g/cm³", melting: "150°C", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 5, name: "Chitosan", cat: "Excipients", stock: "25 Kg Bag", func: "Binder / Film Forming Agent", 
        apps: "Drug Delivery Systems, Tablets, Wound Dressings", grade: "Pharma Grade", 
        mol: "(C₆H₁₁NO₄)n", purity: ">90%", desc: "A natural biopolymer derived from chitin, widely used in pharmaceutical and biomedical applications for its biocompatibility and film-forming properties.", 
        img: "images/products/excipients/chitosan.jpg",
        features: "Biodegradable, Biocompatible, Excellent film forming ability", appearance: "Off-white to light cream powder", weight: "Varies", density: "0.75 g/cm³", melting: "Decomposes", origin: "India", moq: "25 Kg", pkgType: "Bag / Drum"
    },
    { 
        id: 6, name: "Citric Acid", cat: "Excipients", stock: "25 Kg Bag", func: "Acidulant / Buffering Agent", 
        apps: "Effervescent Tablets, Syrups, Food formulations", grade: "IP / BP / USP", 
        mol: "C₆H₈O₇", purity: ">99%", desc: "A white crystalline organic acid widely used as an acidulant, preservative, and buffering agent in pharmaceutical and food formulations.", 
        img: "images/products/excipients/citric-acid.jpg",
        features: "Excellent solubility, pH control, Enhances flavor stability", appearance: "White crystalline powder", weight: "192.12 g/mol", density: "1.66 g/cm³", melting: "153°C", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 7, name: "CMC (Carboxy Methyl Cellulose)", cat: "Excipients", stock: "25 Kg Bag", func: "Thickener / Stabilizer", 
        apps: "Suspensions, Syrups, Tablets", grade: "Pharma Grade / USP / IP", 
        mol: "C₈H₁₅NaO₈", purity: ">99%", desc: "A white to cream-colored powder used as a thickener, stabilizer, and binder in pharmaceutical formulations. Known for high viscosity and water solubility.", 
        img: "images/products/excipients/cmc.jpg",
        features: "High viscosity, Excellent water solubility", appearance: "White to cream powder", weight: "242.20 g/mol", density: "1.59 g/cm³", melting: "Decomposes", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 8, name: "Croscarmellose Sodium", cat: "Excipients", stock: "25 Kg Bag", func: "Super Disintegrant", 
        apps: "Tablets, Fast Dissolving Tablets", grade: "Pharma Grade / USP / IP", 
        mol: "C₈H₁₆NaO₈", purity: ">99%", desc: "A white powder used as a super disintegrant in tablet formulations for rapid drug release through rapid swelling properties.", 
        img: "images/products/excipients/croscarmellose.jpg",
        features: "Rapid swelling, Improves tablet disintegration", appearance: "White powder", weight: "262.19 g/mol", density: "1.60 g/cm³", melting: "Decomposes", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 9, name: "Crospovidone", cat: "Excipients", stock: "25 Kg Bag", func: "Super Disintegrant", 
        apps: "Tablets, Fast Dissolving Tablets, Capsules", grade: "Pharma Grade / USP / IP", 
        mol: "(C₆H₉NO)n", purity: ">98%", desc: "Cross-linked Polyvinylpyrrolidone used to ensure rapid disintegration, faster dissolution, and improved drug release in solid oral dosage forms.", 
        img: "images/products/excipients/crospovidone.jpg",
        features: "Rapid disintegration, High swelling capacity", appearance: "White powder", weight: "Varies", density: "1.22 g/cm³", melting: "150°C", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 10, name: "Dicalcium Phosphate (DCP)", cat: "Excipients", stock: "25 Kg Bag", func: "Diluent / Calcium Supplement", 
        apps: "Tablets, Capsules", grade: "Pharma Grade / USP / IP", 
        mol: "CaHPO₄", purity: ">98%", desc: "A white, odorless crystalline powder that serves as a filler/diluent, providing bulk and enhancing tablet hardness and stability.", 
        img: "images/products/excipients/dcp.jpg",
        features: "Good flowability, Excellent compressibility", appearance: "White powder", weight: "136.06 g/mol", density: "2.89 g/cm³", melting: "109°C", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 11, name: "Gelatin", cat: "Excipients", stock: "25 Kg Bag", func: "Gelling Agent / Capsule Material", 
        apps: "Hard Capsules, Softgel Capsules", grade: "Pharma Grade / USP / IP", 
        mol: "Protein derivative", purity: ">98%", desc: "A protein-based excipient used as a gelling and capsule-forming agent. Known for excellent film forming and biocompatibility.", 
        img: "images/products/excipients/gelatin.jpg",
        features: "Excellent film forming, Biocompatible", appearance: "Yellowish granules or powder", weight: "Varies", density: "1.30 g/cm³", melting: "35°C", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 13, name: "HPMC", cat: "Excipients", stock: "25 Kg Bag", func: "Binder / Coating Agent", 
        apps: "Tablets, Capsules, Film Coating", grade: "Pharma Grade / IP / USP", 
        mol: "C₅₆H₁₀₈O₃₀", purity: ">98%", desc: "A semi-synthetic polymer derived from cellulose, widely used for binding, film coating, and controlled drug release.", 
        img: "images/products/excipients/hpmc.jpg",
        features: "Excellent film forming, Controlled drug release", appearance: "White to off-white powder", weight: "Varies", density: "1.39 g/cm³", melting: "190°C", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 14, name: "Lactose", cat: "Excipients", stock: "25 Kg Bag", func: "Diluent / Filler", 
        apps: "Tablets, Capsules", grade: "Pharma Grade / USP / IP", 
        mol: "C₁₂H₂₂O₁₁", purity: ">99%", desc: "A white crystalline powder used as a primary diluent and filler. Offers excellent compressibility and a mild sweet taste.", 
        img: "images/products/excipients/lactose.jpg",
        features: "Excellent compressibility, Good taste", appearance: "White crystalline powder", weight: "342.30 g/mol", density: "1.53 g/cm³", melting: "202°C", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 15, name: "Magnesium Stearate", cat: "Excipients", stock: "25 Kg Bag", func: "Lubricant", 
        apps: "Lubricant, Flow Enhancer", grade: "Pharma Grade / IP / BP / USP", 
        mol: "C₃₆H₇₀MgO₄", purity: ">98%", desc: "A magnesium salt of stearic acid used as a lubricant in tablet and capsule manufacturing to prevent sticking and improve powder flow.", 
        img: "images/products/excipients/magnesium-stearate.jpg",
        features: "Reduces sticking, Improves flow properties", appearance: "Fine white powder", weight: "591.24 g/mol", density: "1.03 g/cm³", melting: "88°C", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 16, name: "MCC (Microcrystalline Cellulose)", cat: "Excipients", stock: "25 Kg Bag", func: "Binder / Diluent", 
        apps: "Direct Compression Tablets", grade: "Pharma Grade / USP / IP", 
        mol: "(C₆H₁₀O₅)n", purity: ">98%", desc: "A purified, partially depolymerized cellulose widely used in tablet formulations for its exceptional compressibility and binding properties.", 
        img: "images/products/excipients/mcc.jpg",
        features: "Excellent compressibility, Good flow properties", appearance: "White powder", weight: "Varies", density: "1.50 g/cm³", melting: "Decomposes", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 17, name: "Poloxamer", cat: "Excipients", stock: "25 Kg Bag", func: "Surfactant / Solubilizer", 
        apps: "Creams, Gels, Liquid Formulations", grade: "Pharma Grade / USP", 
        mol: "Copolymer", purity: ">98%", desc: "A non-ionic surfactant used to improve the solubility and stability of drugs in various pharmaceutical and cosmetic delivery systems.", 
        img: "images/products/excipients/poloxamer.jpg",
        features: "Excellent emulsification, Improves solubility", appearance: "White waxy powder", weight: "Varies", density: "1.05 g/cm³", melting: "52°C", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 19, name: "PVP K30", cat: "Excipients", stock: "25 Kg Bag", func: "Binder / Solubilizer", 
        apps: "Wet Granulation, Tablets, Capsules", grade: "Pharma Grade / USP", 
        mol: "(C₆H₉NO)n", purity: ">99%", desc: "A synthetic polymer widely used as a high-performance binder in wet granulation and as a solubilizer to enhance drug dissolution.", 
        img: "images/products/excipients/pvp-k30.jpg",
        features: "Excellent binding properties, Water soluble", appearance: "White hygroscopic powder", weight: "Varies", density: "1.20 g/cm³", melting: "150°C", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 20, name: "Sodium Lauryl Sulfate (SLS)", cat: "Excipients", stock: "25 Kg Bag", func: "Surfactant", 
        apps: "Wetting Agent, Emulsifier, Foaming Agent", grade: "Pharma Grade / IP / BP / USP", 
        mol: "C₁₂H₂₅NaO₄S", purity: ">95%", desc: "An anionic surfactant widely used as a wetting, emulsifying, and foaming agent in pharmaceutical and personal care formulations.", 
        img: "images/products/excipients/sls.jpg",
        features: "Excellent foaming, Effective wetting action", appearance: "White to pale yellow powder/flakes", weight: "288.38 g/mol", density: "1.01 g/cm³", melting: "204°C", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 21, name: "SSG (Sodium Starch Glycolate)", cat: "Excipients", stock: "25 Kg Bag", func: "Super Disintegrant", 
        apps: "Tablets, Capsules", grade: "Pharma Grade / USP / IP", 
        mol: "C₂₄H₃₅NaO₁₈", purity: ">95%", desc: "A free-flowing powder derived from modified starch. Acts as a superdisintegrant by rapidly swelling in contact with water to enable quick drug release.", 
        img: "images/products/excipients/ssg.jpg",
        features: "Fast swelling, Excellent disintegration", appearance: "White powder", weight: "594.52 g/mol", density: "0.75 g/cm³", melting: "Decomposes", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 22, name: "Sorbitol", cat: "Excipients", stock: "25 Kg Bag / Drum", func: "Sweetener / Humectant", 
        apps: "Syrups, Oral Solutions, Chewables", grade: "Pharma Grade / USP / IP", 
        mol: "C₆H₁₄O₆", purity: ">98%", desc: "A sweet-tasting polyol used as a non-cariogenic sweetener and humectant in various liquid and solid pharmaceutical formulations.", 
        img: "images/products/excipients/sorbitol.jpg",
        features: "Non-cariogenic, Moisture retaining", appearance: "Clear liquid or white powder", weight: "182.17 g/mol", density: "1.49 g/cm³", melting: "95°C", origin: "India", moq: "25 Kg", pkgType: "Drum / Bag"
    },
    { 
        id: 23, name: "Starch", cat: "Excipients", stock: "25 Kg Bag", func: "Binder / Disintegrant", 
        apps: "Tablets, Capsules", grade: "Pharma Grade / IP / USP", 
        mol: "(C₆H₁₀O₅)n", purity: ">98%", desc: "A natural polysaccharide used to aid in both tablet binding and disintegration. Essential for solid dosage form construction.", 
        img: "images/products/excipients/starch.jpg",
        features: "Excellent swelling property, Good compressibility", appearance: "Fine white powder", weight: "Varies", density: "1.50 g/cm³", melting: "Decomposes", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 24, name: "Stearic Acid", cat: "Excipients", stock: "25 Kg Bag", func: "Lubricant / Emulsifier", 
        apps: "Tablets, Capsules, Creams", grade: "Pharma Grade / USP", 
        mol: "C₁₈H₃₆O₂", purity: ">98%", desc: "A fatty acid used as a lubricant and binder. It enhances tablet compression and is also used as an emulsifier in creams.", 
        img: "images/products/excipients/stearic-acid.jpg",
        features: "Improves flowability, Excellent stability", appearance: "White waxy powder", weight: "284.48 g/mol", density: "0.94 g/cm³", melting: "69°C", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 25, name: "Sucrose", cat: "Excipients", stock: "25 Kg Bag", func: "Sweetening Agent", 
        apps: "Syrups, Chewable Tablets", grade: "Pharma Grade / IP / USP", 
        mol: "C₁₂H₂₂O₁₁", purity: ">99%", desc: "A white crystalline powder with a sweet taste. Acts as a primary sweetening and bulking agent for oral liquid and solid forms.", 
        img: "images/products/excipients/sucrose.jpg",
        features: "Pleasant taste, Good solubility", appearance: "White crystalline powder", weight: "342.30 g/mol", density: "1.59 g/cm³", melting: "186°C", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 26, name: "Talc", cat: "Excipients", stock: "25 Kg Bag", func: "Glidant / Anti-caking Agent", 
        apps: "Tablets, Capsules, Powder Formulations", grade: "Pharma Grade / IP / USP", 
        mol: "Mg₃Si₄O₁₀(OH)₂", purity: ">98%", desc: "A fine magnesium silicate mineral powder used as a lubricant and flow enhancer. Prevents sticking and improves powder flow during manufacturing.", 
        img: "images/products/excipients/talc.jpg",
        features: "Improves powder flow, Reduces sticking", appearance: "Fine white powder", weight: "379.27 g/mol", density: "2.70 g/cm³", melting: "1500°C", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 27, name: "Titanium Dioxide", cat: "Excipients", stock: "25 Kg Bag", func: "Opacifier / Colouring Agent", 
        apps: "Tablet Coating, Capsule Coating, Whiteness Provider", grade: "Pharma Grade / IP / BP / USP", 
        mol: "TiO₂", purity: ">99%", desc: "A fine white inorganic pigment widely used as an opacifier and whitening agent. Provides high brightness and UV protection to sensitive drugs.", 
        img: "images/products/excipients/titanium-dioxide.jpg",
        features: "Excellent opacity, High brightness, UV protection", appearance: "Fine white powder", weight: "79.87 g/mol", density: "4.23 g/cm³", melting: "1843°C", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 28, name: "Xanthan Gum", cat: "Excipients", stock: "25 Kg Bag", func: "Thickener / Stabilizer", 
        apps: "Suspensions, Syrups, Oral Liquids", grade: "Pharma Grade / USP", 
        mol: "(C₃₅H₄₉O₂₉)n", purity: ">98%", desc: "A natural polysaccharide produced by fermentation. Used to thicken and stabilize liquid formulations across a wide pH range.", 
        img: "images/products/excipients/xanthan-gum.jpg",
        features: "Viscosity control, Stable pH range, Good suspension", appearance: "Cream to off-white powder", weight: "Varies", density: "1.50 g/cm³", melting: "Decomposes", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 29, name: "Colloidal Silicon Dioxide", cat: "Excipients", stock: "25 Kg Bag", func: "Glidant / Anti-caking Agent", 
        apps: "Flow Enhancer, Moisture Control", grade: "Pharma Grade / USP / IP", 
        mol: "SiO₂", purity: ">99%", desc: "A very fine white powder used as a glidant to improve powder flow and as an anti-caking agent due to its high adsorption capacity.", 
        img: "images/products/excipients/colloidal-silicon-dioxide.jpg",
        features: "Improves powder flow, High adsorption", appearance: "Fine white powder", weight: "60.08 g/mol", density: "2.20 g/cm³", melting: "1600°C", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 31, name: "Ethyl Cellulose", cat: "Excipients", stock: "25 Kg Bag", func: "Coating Agent / Binder", 
        apps: "Sustained Release Tablets, Film Coating", grade: "Pharma Grade / IP / USP", 
        mol: "C₂₀H₃₈O₁₁", purity: ">98%", desc: "A white free-flowing powder used for sustained drug release and barrier coating. Known for its water-insolubility and film strength.", 
        img: "images/products/excipients/ethyl-cellulose.jpg",
        features: "Water-insoluble, Film strength, Sustained release", appearance: "White granular powder", weight: "Varies", density: "1.14 g/cm³", melting: "240°C", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 32, name: "Mannitol", cat: "Excipients", stock: "25 Kg Bag", func: "Diluent / Sweetener", 
        apps: "Chewable Tablets, Capsules", grade: "Pharma Grade / USP / IP", 
        mol: "C₆H₁₄O₆", purity: ">98%", desc: "A white crystalline powder with a sweet, cooling taste. Used as a non-hygroscopic diluent, ideal for moisture-sensitive formulations.", 
        img: "images/products/excipients/mannitol.jpg",
        features: "Cooling effect, Non-hygroscopic", appearance: "White crystalline powder", weight: "182.17 g/mol", density: "1.49 g/cm³", melting: "167°C", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 33, name: "Methyl Paraben", cat: "Excipients", stock: "25 Kg Bag", func: "Preservative", 
        apps: "Syrups, Creams, Lotions", grade: "Pharma Grade / USP", 
        mol: "C₈H₈O₃", purity: ">99%", desc: "A widely used antimicrobial preservative effective against a broad spectrum of bacteria and fungi in liquid and semi-solid forms.", 
        img: "images/products/excipients/methyl-paraben.jpg",
        features: "Antimicrobial, Stable compound", appearance: "White crystalline powder", weight: "152.15 g/mol", density: "1.35 g/cm³", melting: "125°C", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 34, name: "Propyl Paraben", cat: "Excipients", stock: "25 Kg Bag", func: "Preservative", 
        apps: "Liquid & Topical Formulations", grade: "Pharma Grade / USP", 
        mol: "C₁₀H₁₂O₃", purity: ">99%", desc: "An antimicrobial preservative often used with Methyl Paraben for synergistic protection against microbial growth.", 
        img: "images/products/excipients/propyl-paraben.jpg",
        features: "Antimicrobial activity, Good stability", appearance: "White crystalline powder", weight: "180.20 g/mol", density: "1.06 g/cm³", melting: "96°C", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 35, name: "Sodium Benzoate", cat: "Excipients", stock: "25 Kg Bag", func: "Preservative", 
        apps: "Syrups, Liquid Formulations", grade: "Pharma Grade / USP / IP", 
        mol: "C₇H₅NaO₂", purity: ">99%", desc: "A white crystalline powder used to prevent microbial growth and ensure the shelf-life stability of pharmaceutical and food products.", 
        img: "images/products/excipients/sodium-benzoate.jpg",
        features: "Microbial protection, Good stability", appearance: "White crystalline powder", weight: "144.11 g/mol", density: "1.44 g/cm³", melting: "300°C", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    
    // --- COLOURS ---
    { id: 101, name: "Allura Red E129", cat: "Colours", stock: "25 Kg", func: "Synthetic Colour", apps: "Tablets, Capsules, Syrups", grade: "IP/USP/Food Grade", mol: "C₁₈H₁₄N₂Na₂O₈S₂", purity: ">85%", desc: "A vibrant red colour offering uniformity and stability across various dosage forms.", img: "images/products/colours/allura-red-e129.jpg", ci: "CI 16035", type: "Synthetic Azo Dye", solubility: "Water Soluble", weight: "496.42 g/mol", density: "0.70 g/cm³", appearance: "Dark red Powder", features: "Bright red shade, excellent uniformity" },
    { id: 102, name: "Allura Red Lake", cat: "Colours", stock: "25 Kg", func: "Aluminium Lake", apps: "Tablet Coating, Capsule Coating, Food & Nutraceuticals", grade: "IP/USP/Food Grade", mol: "Complex Aluminium Lake", purity: ">40% Dye Content", desc: "A stable pigment for strong, uniform red coloration in tablets and capsules.", img: "images/products/colours/allura-red-lake.jpg", type: "Aluminium Lake Pigment", solubility: "Insoluble / Oil Dispersible", density: "0.70 g/cm³", appearance: "Red Fine Powder", features: "Bright colour shade, good heat stability" },
    { id: 103, name: "Black Iron Oxide", cat: "Colours", stock: "25 Kg Bag", func: "Inorganic Pigment", apps: "Capsules, Coatings", grade: "IP/USP", mol: "Fe₃O₄", purity: ">95%", desc: "Used for grey to black shades, often blended for customized colour variations.", img: "images/products/colours/black-iron-oxide.jpg", ci: "CI 77499", type: "Inorganic Pigment", solubility: "Insoluble", weight: "231.53 g/mol", density: "5.17 g/cm³", appearance: "Black Fine Powder", features: "Deep black shade, high covering power" },
    { id: 104, name: "Brilliant Blue E133", cat: "Colours", stock: "25 Kg", func: "Synthetic Colour", apps: "Tablets, Capsules, Oral liquids", grade: "IP/USP/Food Grade", mol: "C₃₇H₃₄N₂Na₂O₉S₃", purity: ">85%", desc: "A bright blue colour used for clear, consistent, and visually appealing formulations.", img: "images/products/colours/brilliant-blue-e133.jpg", ci: "CI 42090", type: "Synthetic Dye", solubility: "Water Soluble", weight: "792.84 g/mol", density: "0.80 g/cm³", appearance: "Blue Powder/Granules", features: "Bright blue shade, excellent stability" },
    { id: 105, name: "Brilliant Blue Lake", cat: "Colours", stock: "25 Kg", func: "Aluminium Lake", apps: "Tablet Coating, Capsule Coating, Cosmetic", grade: "IP/USP/Food Grade", mol: "Complex Aluminium Lake", purity: ">35% Dye Content", desc: "Stable blue coloration in tablet coatings and nutraceutical formulations.", img: "images/products/colours/brilliant-blue-lake.jpg", type: "Aluminium Lake Pigment", solubility: "Insoluble", weight: "N/A", density: "0.70 g/cm³", appearance: "Blue Fine Powder", features: "High tinting strength, thermal stability" },
    { id: 106, name: "Carmosine E122", cat: "Colours", stock: "25 Kg", func: "Synthetic Colour", apps: "Oral liquids, Tablets", grade: "IP/USP/Food Grade", mol: "C₂₀H₁₂N₂Na₂O₇S₂", purity: ">85%", desc: "A deep red shade commonly used for strong visual identity.", img: "images/products/colours/carmosine-e122.jpg", ci: "CI 14720", type: "Synthetic Azo Dye", solubility: "Water Soluble", weight: "502.43 g/mol", density: "0.80 g/cm³", appearance: "Red to maroon Powder", features: "Pink to red shade, good solubility" },
    { id: 107, name: "Carmosine Lake", cat: "Colours", stock: "25 Kg", func: "Aluminium Lake", apps: "Pharmaceutical Coating, Syrup & Nutraceuticals", grade: "IP/USP/Food Grade", mol: "Complex Aluminium Lake", purity: ">35% Dye Content", desc: "Insoluble pigment form of Carmoisine used in coatings.", img: "images/products/colours/carmosine-lake.jpg", type: "Aluminium Lake Pigment", solubility: "Insoluble", density: "0.70 g/cm³", appearance: "Dark red Fine Powder", features: "Uniform distribution, light stability" },
    { id: 108, name: "D and C Red 30", cat: "Colours", stock: "25 Kg", func: "Colour Pigment", apps: "Cosmetic, Pharmaceutical & Personal Care", grade: "IP/USP", mol: "C₂₆H₂₂ N₄O₂", purity: ">90%", desc: "Synthetic organic pigment for stable red coloration.", img: "images/products/colours/d-and-c-red-30.jpg", type: "Organic Pigment", solubility: "Insoluble", weight: "422.48 g/mol", density: "1.30 g/cm³", appearance: "Red Fine Powder", features: "Bright shade, good dispersion" },
    { id: 109, name: "D and C Red 34", cat: "Colours", stock: "25 Kg", func: "Colour Pigment", apps: "Pharmaceutical Coating, Cosmetic & Personal Care", grade: "IP/USP", mol: "C₁₈H₁₃N₃NaO₈S", purity: ">90%", desc: "Specialty organic red pigment for coating applications.", img: "images/products/colours/d-and-c-red-34.jpg", type: "Organic Pigment", solubility: "Insoluble", weight: "454.36 g/mol", density: "1.20 g/cm³", appearance: "Red-violet Fine Powder", features: "High tinting strength, consistent performance" },
    { id: 110, name: "D and C Red 36", cat: "Colours", stock: "25 Kg", func: "Colour Pigment", apps: "Tablet Coating, Cosmetic & Pharmaceutical", grade: "IP/USP", mol: "C₂₀H₁₂N₂O₇S₂Na₂", purity: ">90%", desc: "High-performance organic pigment for deep red shades.", img: "images/products/colours/d-and-c-red-36.jpg", type: "Organic Pigment", solubility: "Insoluble", weight: "502.43 g/mol", density: "1.25 g/cm³", appearance: "Bluish-red Fine Powder", features: "Excellent uniformity, high stability" },
    { id: 111, name: "Fast Green E143", cat: "Colours", stock: "25 Kg", func: "Synthetic Colour", apps: "Tablets, Capsules, Syrups", grade: "IP/USP/Food Grade", mol: "C₃₇H₃₄N₂Na₂O₁₀S₃", purity: ">85%", desc: "A sea-green colour used for recognizable product differentiation.", img: "images/products/colours/fast-green-e143.jpg", ci: "CI 42053", type: "Synthetic Dye", solubility: "Water Soluble", weight: "808.85 g/mol", density: "0.90 g/cm³", appearance: "Green Powder/Granules", features: "Bluish-green shade, stable" },
    { id: 112, name: "Fast Green Lake", cat: "Colours", stock: "25 Kg", func: "Aluminium Lake", apps: "Pharmaceutical Coating, Food & Nutraceuticals", grade: "IP/USP/Food Grade", mol: "Complex Aluminium Lake", purity: ">35% Dye Content", desc: "Stable insoluble green pigment for coated products.", img: "images/products/colours/fast-green-lake.jpg", type: "Aluminium Lake Pigment", solubility: "Insoluble", weight: "N/A", density: "0.75 g/cm³", appearance: "Green Fine Powder", features: "Consistent shade, stable performance" },
    { id: 113, name: "Indigo Carmine E132", cat: "Colours", stock: "25 Kg", func: "Synthetic Colour", apps: "Tablets, Diagnostics, Capsules", grade: "IP/USP/Food Grade", mol: "C₁₆H₈N₂Na₂O₈S₂", purity: ">85%", desc: "A darker blue shade for specialized pharmaceutical apps.", img: "images/products/colours/indigo-caramine-e132.jpg", ci: "CI 73015", type: "Synthetic Dye", solubility: "Water Soluble", weight: "466.35 g/mol", density: "1.80 g/cm³", appearance: "Dark blue Powder", features: "Deep blue shade, pH stability" },
    { id: 114, name: "Iron Red Oxide", cat: "Colours", stock: "25 Kg Bag", func: "Inorganic Pigment", apps: "Tablet Coating, Capsules", grade: "IP/USP", mol: "Fe₂O₃", purity: ">95%", desc: "Highly stable inorganic red pigment for coatings.", img: "images/products/colours/iron-red-oxide.jpg", ci: "CI 77491", type: "Inorganic Pigment", solubility: "Insoluble", weight: "159.69 g/mol", density: "5.24 g/cm³", appearance: "Red-brown Fine Powder", features: "Excellent opacity, high stability" },
    { id: 115, name: "Ponceau 4R E124", cat: "Colours", stock: "25 Kg", func: "Synthetic Colour", apps: "Tablets, Syrups, Capsules", grade: "IP/USP/Food Grade", mol: "C₂₀H₁₁N₂Na₃O₁₀S₃", purity: ">80%", desc: "Rich red colour providing stable and attractive oral forms.", img: "images/products/colours/ponceau-4r-e124.jpg", ci: "CI 16255", type: "Synthetic Azo Dye", solubility: "Water Soluble", weight: "604.47 g/mol", density: "0.90 g/cm³", appearance: "Red Powder/Granules", features: "Strong red shade, good dispersion" },
    { id: 116, name: "Ponceau 4R Lake", cat: "Colours", stock: "25 Kg", func: "Aluminium Lake", apps: "Film Coating, Tablet Coating, Pharma", grade: "IP/USP/Food Grade", mol: "Complex Aluminium Lake", purity: ">40% Dye Content", desc: "Lake pigment used in tablets and nutraceutical coatings.", img: "images/products/colours/ponceau-4r-lake.jpg", type: "Aluminium Lake Pigment", solubility: "Insoluble", weight: "N/A", density: "0.72 g/cm³", appearance: "Red Fine Powder", features: "Strong colouring, excellent dispersion" },
    { id: 117, name: "Quinoline Yellow E104", cat: "Colours", stock: "25 Kg", func: "Synthetic Dye", apps: "Tablets, Coatings, Cosmetics", grade: "IP/USP/Food Grade", mol: "C₁₈H₉NO₈S₂Na₂", purity: ">70%", desc: "Greenish-yellow colour used in coatings for identification.", img: "images/products/colours/quinoline-yellow-e104.jpg", ci: "CI 47005", type: "Synthetic Dye", solubility: "Water Soluble", weight: "477.38 g/mol", density: "0.70 g/cm³", appearance: "Greenish-yellow Powder", features: "High light stability, distinct hue" },
    { id: 118, name: "Quinoline Yellow Lake", cat: "Colours", stock: "25 Kg", func: "Aluminium Lake", apps: "Film Coating, Tablet Coating, Nutraceuticals", grade: "IP/USP/Food Grade", mol: "Complex Aluminium Lake", purity: ">40% Dye Content", desc: "Insoluble pigment form for stable coatings.", img: "images/products/colours/quinoloine-yellow-lake.jpg", type: "Aluminium Lake Pigment", solubility: "Insoluble", density: "0.65 g/cm³", appearance: "Yellow Fine Powder", features: "Colour stability, uniform dispersion" },
    { id: 119, name: "Sunset Yellow E110", cat: "Colours", stock: "25 Kg", func: "Synthetic Colour", apps: "Tablets, Capsules, Syrups, Nutraceuticals", grade: "IP/USP/Food Grade", mol: "C₁₆H₁₀N₂Na₂O₇S₂", purity: ">85%", desc: "Orange-yellow shade enhancing product appeal.", img: "images/products/colours/sunset-yellow-e110.jpg", ci: "CI 15985", type: "Synthetic Azo Dye", solubility: "Water Soluble", weight: "452.37 g/mol", density: "0.80 g/cm³", appearance: "Orange-red Powder", features: "Good heat stability, vibrant shade" },
    { id: 120, name: "Sunset Yellow Lake", cat: "Colours", stock: "25 Kg", func: "Aluminium Lake", apps: "Film Coating, Oil-based systems", grade: "IP/USP/Food Grade", mol: "Complex Aluminium Lake", purity: ">40% Dye Content", desc: "Enhanced opacity and consistent colour in blends.", img: "images/products/colours/sunset-yellow-lake.jpg", type: "Aluminium Lake Pigment", solubility: "Insoluble", density: "0.60 g/cm³", appearance: "Orange Fine Powder", features: "Stable in oil systems, uniform opacity" },
    { id: 121, name: "Tartrazine E102", cat: "Colours", stock: "25 Kg", func: "Synthetic Colour", apps: "Tablets, Capsules, Syrups, Oral liquids", grade: "IP/USP/Food Grade", mol: "C₁₆H₉N₄Na₃O₉S₂", purity: ">85%", desc: "Bright lemon-yellow colour for appealing pharmaceutical appearance.", img: "images/products/colours/tartrazine-e102.jpg", ci: "CI 19140", type: "Synthetic Azo Dye", solubility: "Water Soluble", weight: "534.36 g/mol", density: "0.52 g/cm³", appearance: "Orange-yellow powder", features: "High stability, cost-effective" },
    { id: 122, name: "Tartrazine Lake", cat: "Colours", stock: "25 Kg", func: "Aluminium Lake", apps: "Tablet Coating, Capsules", grade: "IP/USP/Food Grade", mol: "Complex Aluminium Lake", purity: ">40% Dye Content", desc: "Insoluble pigment form for improved dispersion in solids.", img: "images/products/colours/tartrazine-lake.jpg", type: "Aluminium Lake Pigment", solubility: "Oil Dispersible", density: "0.60 g/cm³", appearance: "Yellow-orange Fine Powder", features: "Improved opacity, uniform coating" },
    { id: 123, name: "Yellow Iron Oxide", cat: "Colours", stock: "25 Kg Bag", func: "Inorganic Pigment", apps: "Tablet Coating, Light Resistant Apps", grade: "IP/USP", mol: "FeO(OH)", purity: ">95%", desc: "Provides natural yellow tones with excellent light resistance.", img: "images/products/colours/yellow-iron-oxide.jpg", ci: "CI 77492", type: "Inorganic Pigment", solubility: "Insoluble", weight: "88.85 g/mol", density: "4.26 g/cm³", appearance: "Yellow Fine Powder", features: "Natural shade, light resistant" },

    // --- VITAMINS ---
    { id: 201, name: "Ascorbic Acid (Vitamin C)", cat: "Vitamins", stock: "25 Kg Carton", func: "Vitamin / Antioxidant", apps: "Tablets, Capsules, Fortification", grade: "IP/BP/USP/FCC", mol: "C₆H₈O₆", purity: ">99%", desc: "Vital nutrient used to boost immunity and as a preservative.", img: "images/products/vitamins/ascorbic-acid.jpg" },
    { id: 202, name: "Ascorbyl Palmitate", cat: "Vitamins", stock: "10/25 Kg", func: "Fat-Soluble Vit C", apps: "Oil-based formulations, Softgels", grade: "NF/FCC/USP", mol: "C₂₂H₃₈O₇", purity: "98-100%", desc: "Effective antioxidant in fats and oils.", img: "images/products/vitamins/ascorbyl-palmitate.jpg" },
    { id: 203, name: "Tocopherol (Vitamin E)", cat: "Vitamins", stock: "Drum", func: "Antioxidant / Nutritive", apps: "Softgels, Topicals, Syrups", grade: "USP/FCC", mol: "C₂₉H₅₀O₂", purity: "Various Strengths", desc: "Derived from natural sources; protects cell membranes.", img: "images/products/vitamins/tocopherol.jpg" },
    { id: 204, name: "Tocopheryl Acetate", cat: "Vitamins", stock: "Drum", func: "Vitamin E Supplement", apps: "Multi-vitamins, Cosmetics, Softgels", grade: "USP/IP/EP", mol: "C₃₁H₅₂O₃", purity: ">98%", desc: "Stable ester of Vitamin E for dietary supplements.", img: "images/products/vitamins/tocopheryl-acetate.jpg" },

    // -----SOLVENTS -----
    { 
        id: 3, name: "Propylene Glycol", cat: "Solvents", stock: "215 Kg Drum", func: "Solvent / Humectant", 
        apps: "Syrups, Oral Solutions, Topical Formulations", grade: "Pharma Grade / USP / IP", 
        mol: "C₃H₈O₂", purity: ">99%", desc: "A clear, colorless, viscous liquid with hygroscopic properties, Propylene Glycol is widely used as a solvent and humectant.", 
        img: "images/products/excipients/propylene-glycol.jpg",
        features: "Excellent solvent properties, Moisture retaining, Good stability", appearance: "Clear colorless viscous liquid", weight: "76.09 g/mol", density: "1.04 g/cm³", melting: "-59°C", origin: "India", moq: "215 Kg", pkgType: "Drum"
    },
    { 
        id: 12, name: "Glycerin", cat: "Solvents", stock: "250 Kg Drum", func: "Humectant / Solvent", 
        apps: "Syrups, Creams, Oral Solutions", grade: "Pharma Grade / USP / IP", 
        mol: "C₃H₈O₃", purity: ">99%", desc: "A clear viscous liquid used as a humectant, sweetener, and solvent. Highly effective at moisture retention with a pleasant sweet taste.", 
        img: "images/products/excipients/glycerin.jpg",
        features: "Moisture retaining, Sweet taste", appearance: "Clear viscous liquid", weight: "92.09 g/mol", density: "1.26 g/cm³", melting: "18°C", origin: "India", moq: "250 Kg", pkgType: "Drum"
    },
    { 
        id: 18, name: "Polyethylene Glycol (PEG)", cat: "Solvents", stock: "25 Kg Bag", func: "Solvent / Plasticizer", 
        apps: "Ointments, Tablets, Capsules", grade: "Pharma Grade / USP", 
        mol: "H(OCH₂CH₂)nOH", purity: ">99%", desc: "A versatile polymer used as a plasticizer and solvent. Improves drug solubility and formulation stability across many applications.", 
        img: "images/products/excipients/peg.jpg",
        features: "Excellent solubility, Good stability", appearance: "White flakes or powder", weight: "Varies", density: "1.12 g/cm³", melting: "60°C", origin: "India", moq: "25 Kg", pkgType: "Bag"
    },
    { 
        id: 30, name: "Ethanol (99.9%)", cat: "Solvents", stock: "50/200 L Drum", func: "Solvent / Disinfectant", 
        apps: "Syrups, Sanitizers, Liquid Formulations", grade: "Pharma Grade / IP / USP", 
        mol: "C₂H₆O", purity: ">99%", desc: "A clear, colorless, volatile liquid with a characteristic odor. Used as a high-purity solvent and powerful disinfectant.", 
        img: "images/products/excipients/ethanol.jpg",
        features: "Rapid evaporation, Excellent solvent properties", appearance: "Clear colorless liquid", weight: "46.07 g/mol", density: "0.79 g/cm³", melting: "-114°C", origin: "India", moq: "50 L", pkgType: "Drum"
    },

    // --- SPECIALTY ---
    { id: 301, name: "Aloe Vera Gel Powder", cat: "Specialty", stock: "10/25 Kg", func: "Natural Extract", apps: "Cosmetics, Nutraceuticals, Skincare", grade: "Cosmetic / Food Grade", mol: "Natural Extract", purity: "200X / 100X", desc: "Premium extract derived from Aloe Barbadensis leaf.", img: "images/products/specialty/aloe-vera-gel-powder.jpg" },
    { id: 302, name: "Bio-SAP Polymer", cat: "Specialty", stock: "25 Kg Bag", func: "Water Retainer", apps: "Agriculture, Hygiene, Industrial", grade: "Eco-Friendly", mol: "Bio-Polymer", purity: "High Capacity", desc: "Eco-friendly polymer capable of massive water retention.", img: "images/products/specialty/bio-based-super-absorbent-polymer.jpg" }
];

let cart = [];
let userLocation = "";

// 3. RENDERING LOGIC
function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    
    grid.innerHTML = items.map(p => `
        <div class="product-card bg-white rounded-3xl p-4 border border-slate-100 shadow-sm relative overflow-hidden group">
            <div class="absolute top-4 left-4 z-10">
                <span class="block bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-black text-slate-500 uppercase tracking-tighter">${p.stock}</span>
            </div>
            <img src="${p.img}?v=${Date.now()}" 
                 onerror="handleImageError(this, '${p.name}')" 
                 class="w-full h-48 object-cover rounded-2xl mb-4 bg-slate-50">
            <div class="px-2">
                <p class="text-[10px] font-bold text-slate-400 uppercase mb-1">${p.cat}</p>
                <h3 class="font-bold text-sm h-10 mb-2 uppercase">${p.name}</h3>
                <p class="text-[11px] text-slate-500 line-clamp-2 mb-4 italic">${p.func}</p>
                <div class="flex justify-between items-center">
                    <button onclick="viewDetails(${p.id})" class="text-[11px] font-bold text-[#004b8d] underline uppercase tracking-widest">Specs</button>
                    <button onclick="addToCart(${p.id})" class="w-10 h-10 bg-[#004b8d] text-white rounded-full flex items-center justify-center hover:bg-[#1a7139] transition">
                        <i data-lucide="plus" class="w-5 h-5"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

function handleImageError(imgElement, productName) {
    imgElement.src = `https://placehold.co/400x300?text=${productName.split(' ')[0]}`;
}

// 4. FILTER LOGIC
function filterProducts(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    const clickedBtn = Array.from(document.querySelectorAll('.filter-btn')).find(btn => btn.innerText.trim() === category);
    if (clickedBtn) clickedBtn.classList.add('active');

    if (category === 'All') {
        renderProducts(products);
    } else {
        renderProducts(products.filter(p => p.cat === category));
    }
}

// 5. MODAL & DETAILS LOGIC (CATEGORIZED SPECS)
function viewDetails(id) {
    const p = products.find(item => item.id === id);
    if (!p) return;

    document.getElementById('modal-title').innerText = p.name;
    document.getElementById('modal-desc').innerText = p.desc;
    
    const modalImg = document.getElementById('modal-img');
    if (modalImg) {
        modalImg.src = p.img; 
        modalImg.alt = p.name;
    }
    
    const specsGrid = document.getElementById('specs-grid');
    let specs = [];

    if (p.cat === "Colours") {
        if (p.ci) specs.push({ label: "Colour Index", value: p.ci });
        specs.push({ label: "Type", value: p.type || "Synthetic Dye" });
        specs.push({ label: "Solubility", value: p.solubility || "Water Soluble" });
        specs.push({ label: "Formula", value: p.mol });
        if (p.weight) specs.push({ label: "Mol. Weight", value: p.weight });
        if (p.density) specs.push({ label: "Density", value: p.density });
        if (p.appearance) specs.push({ label: "Appearance", value: p.appearance });
        specs.push({ label: "Grade", value: p.grade });
        specs.push({ label: "Purity", value: p.purity });
    } 
    else if (p.cat === "Excipients") {
        specs.push({ label: "Function", value: p.func });
        specs.push({ label: "Key Features", value: p.features || "N/A" });
        specs.push({ label: "Appearance", value: p.appearance || "N/A" });
        specs.push({ label: "Formula", value: p.mol });
        specs.push({ label: "Mol. Weight", value: p.weight || "N/A" });
        specs.push({ label: "Density", value: p.density || "N/A" });
        specs.push({ label: "Melting Point", value: p.melting || "N/A" });
        specs.push({ label: "Grade", value: p.grade });
        specs.push({ label: "Purity", value: p.purity });
        specs.push({ label: "Origin", value: p.origin || "India" });
        specs.push({ label: "Min. Order", value: p.moq || "25 Kg" });
    }
    else if (p.cat === "Vitamins") {
        specs.push({ label: "Function", value: p.func });
        specs.push({ label: "Active Purity", value: p.purity });
        specs.push({ label: "Formula", value: p.mol });
        specs.push({ label: "Grade", value: p.grade });
    }
    else if (p.cat === "Excipients" || p.cat === "Solvents") {
        specs.push({ label: "Function", value: p.func });
        specs.push({ label: "Key Features", value: p.features || "N/A" });
        specs.push({ label: "Appearance", value: p.appearance || "N/A" });
        specs.push({ label: "Formula", value: p.mol });
        specs.push({ label: "Mol. Weight", value: p.weight || "N/A" });
        specs.push({ label: "Density", value: p.density || "N/A" });
        specs.push({ label: "Melting Point", value: p.melting || "N/A" });
        specs.push({ label: "Grade", value: p.grade });
        specs.push({ label: "Purity", value: p.purity });
        specs.push({ label: "Origin", value: p.origin || "India" });
        specs.push({ label: "Min. Order", value: p.moq || "25 Kg" });
    }
    else { 
        specs.push({ label: "Category", value: p.cat });
        specs.push({ label: "Function", value: p.func });
        specs.push({ label: "Grade", value: p.grade });
        specs.push({ label: "Concentration", value: p.purity });
    }

    specsGrid.innerHTML = specs.map(s => `
        <div>
            <h4 class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">${s.label}</h4>
            <p class="text-xs font-bold text-slate-800">${s.value}</p>
        </div>
    `).join('');

    const appContainer = document.getElementById('modal-apps');
    appContainer.innerHTML = p.apps.split(',').map(app => 
        `<span class="px-3 py-1 bg-blue-50 text-[#004b8d] text-[10px] font-bold rounded-full uppercase border border-blue-100">${app.trim()}</span>`
    ).join('');

    document.getElementById('modal-add-btn').onclick = () => { addToCart(p.id); closeDetails(); };
    document.getElementById('details-modal').classList.remove('hidden');
    lucide.createIcons();
}

function closeDetails() {
    document.getElementById('details-modal').classList.add('hidden');
}

function addToCart(id) {
    const item = products.find(p => p.id === id);
    const inCart = cart.find(c => c.id === id);
    if (inCart) { inCart.qty++; } else { cart.push({...item, qty: 1}); }
    updateCartUI();
    
    const toast = document.createElement('div');
    toast.className = "fixed bottom-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-full z-[100] text-sm font-bold shadow-2xl";
    toast.innerText = `${item.name} added to inquiry`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

function updateCartUI() {
    const list = document.getElementById('cart-items');
    const count = document.getElementById('cart-count');
    const subtotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('total-price');

    count.innerText = cart.reduce((acc, c) => acc + c.qty, 0);

    list.innerHTML = cart.map(c => `
        <div class="flex items-center gap-4 bg-slate-50 p-3 rounded-2xl">
            <img src="${c.img}" onerror="this.src='https://placehold.co/100x100?text=Product'" class="w-16 h-16 object-cover rounded-xl bg-white">
            <div class="flex-1">
                <h4 class="text-xs font-bold">${c.name}</h4>
                <p class="text-[10px] text-slate-500">${c.stock}</p>
            </div>
            <div class="flex items-center gap-2">
                <button onclick="changeQty(${c.id}, -1)" class="w-6 h-6 border rounded-lg">-</button>
                <span class="text-xs font-bold">${c.qty}</span>
                <button onclick="changeQty(${c.id}, 1)" class="w-6 h-6 border rounded-lg">+</button>
            </div>
        </div>
    `).join('');

    subtotalEl.innerText = "Quote Required";
    totalEl.innerText = "Quote Request";
    renderSummary();
}

function changeQty(id, delta) {
    const item = cart.find(c => c.id === id);
    item.qty += delta;
    if (item.qty < 1) cart = cart.filter(c => c.id !== id);
    updateCartUI();
}

function toggleCart() {
    document.getElementById('cart-drawer').classList.toggle('invisible');
    document.getElementById('cart-content').classList.toggle('translate-x-full');
}

function showCheckout() {
    if (cart.length === 0) return alert("Your inquiry list is empty!");
    document.getElementById('checkout-modal').classList.remove('hidden');
    renderSummary();
}

function closeCheckout() {
    document.getElementById('checkout-modal').classList.add('hidden');
}

function renderSummary() {
    const list = document.getElementById('summary-items');
    list.innerHTML = cart.map(c => `
        <div class="flex justify-between text-sm">
            <span>${c.name} x${c.qty}</span>
            <span class="font-bold text-slate-400">${c.stock}</span>
        </div>
    `).join('');
    
    if(document.getElementById('summ-subtotal')) {
        document.getElementById('summ-subtotal').innerText = "Pricing on Request";
        document.getElementById('summ-total').innerText = "Inquiry Only";
    }
}

function getLocation() {
    const btn = document.getElementById('location-btn');
    btn.innerHTML = `Accessing...`;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            userLocation = `https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}`;
            btn.innerHTML = `Location Linked ✓`;
        }, () => { btn.innerText = "Location Denied"; });
    }
}

function submitOrder(method) {
    const name = document.getElementById('cust-name').value;
    const phone = document.getElementById('cust-phone').value;
    if (!name || !phone) return alert("Please enter Name and Phone");

    let orderText = `*NEW INQUIRY - EXCIPURE PHARMA*\n\n`;
    orderText += `*Customer:* ${name}\n*Phone:* ${phone}\n`;
    if(userLocation) orderText += `*Location:* ${userLocation}\n`;
    orderText += `\n*ITEMS REQUESTED:*\n`;
    cart.forEach(c => { orderText += `- ${c.name} (Qty: ${c.qty}) [${c.stock}]\n`; });

    if (method === 'whatsapp') {
        window.open(`https://wa.me/919398453760?text=${encodeURIComponent(orderText)}`, '_blank');
    } else {
        window.location.href = `mailto:excipurepharma@gmail.com?subject=Inquiry from ${name}&body=${encodeURIComponent(orderText)}`;
    }
}

renderProducts(products);
