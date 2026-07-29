// 1. INITIALIZE ICONS
lucide.createIcons();

// 2. PRODUCT DATABASE
const products = [
    // --- EXCIPIENTS (IDs 1-35) ---
    { id: 1, name: "Calcium Carbonate", cat: "Excipients", stock: "25 Kg Bag", func: "Diluent", apps: "Calcium Supplement, Tablet Diluent, Antacid Formulations", grade: "IP / BP / USP / Food Grade", mol: "CaCO₃", purity: ">99%", desc: "A fine white, odorless crystalline powder, Calcium Carbonate is widely used as a diluent and calcium supplement.", img: "images/products/excipients/calcium-carbonate.jpg", features: "Excellent stability, High calcium content, Good compressibility", appearance: "White powder or granules", weight: "100.09 g/mol", density: "2.71 g/cm³", melting: "825°C", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 2, name: "Carbomer (Carbopol)", cat: "Excipients", stock: "25 Kg Bag", func: "Thickener / Gelling Agent", apps: "Gels, Creams, Lotions, Topical Formulations", grade: "Pharma Grade / USP", mol: "Crosslinked Polyacrylic Acid", purity: ">99%", desc: "A white fluffy hygroscopic powder widely used as a thickening, suspending, and gelling agent.", img: "images/products/excipients/carbomer.jpg", features: "High viscosity, Excellent stability", appearance: "White fluffy powder", weight: "Varies", density: "0.20 g/cm³", melting: "Decomposes", origin: "India", moq: "20 Kg", pkgType: "Bag / Drum" },
    { id: 4, name: "Calcium Stearate", cat: "Excipients", stock: "25 Kg Bag", func: "Lubricant / Stabilizer", apps: "Tablets, Capsules", grade: "Pharma Grade / USP", mol: "C₃₆H₇₀CaO₄", purity: ">98%", desc: "A fine white, slightly greasy powder, Calcium Stearate acts as a lubricant and anti-adherent in tablet manufacturing.", img: "images/products/excipients/calcium-stearate.jpg", features: "Water repellent, Improves flow properties", appearance: "Fine white powder", weight: "607.02 g/mol", density: "1.08 g/cm³", melting: "150°C", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 5, name: "Chitosan", cat: "Excipients", stock: "25 Kg Bag", func: "Binder / Film Forming Agent", apps: "Drug Delivery Systems, Tablets, Wound Dressings", grade: "Pharma Grade", mol: "(C₆H₁₁NO₄)n", purity: ">90%", desc: "A natural biopolymer derived from chitin, known for biocompatibility and film-forming properties.", img: "images/products/excipients/chitosan.jpg", features: "Biodegradable, Biocompatible", appearance: "Off-white to light cream powder", weight: "Varies", density: "0.75 g/cm³", melting: "Decomposes", origin: "India", moq: "25 Kg", pkgType: "Bag / Drum" },
    { id: 6, name: "Citric Acid", cat: "Excipients", stock: "25 Kg Bag", func: "Acidulant / Buffering Agent", apps: "Effervescent Tablets, Syrups, Food formulations", grade: "IP / BP / USP", mol: "C₆H₈O₇", purity: ">99%", desc: "A white crystalline organic acid widely used as an acidulant, preservative, and buffering agent.", img: "images/products/excipients/citric-acid.jpg", features: "Excellent solubility, pH control", appearance: "White crystalline powder", weight: "192.12 g/mol", density: "1.66 g/cm³", melting: "153°C", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 7, name: "CMC (Carboxy Methyl Cellulose)", cat: "Excipients", stock: "25 Kg Bag", func: "Thickener / Stabilizer", apps: "Suspensions, Syrups, Tablets", grade: "Pharma Grade / USP / IP", mol: "C₈H₁₅NaO₈", purity: ">99%", desc: "A white to cream-colored powder used as a thickener, stabilizer, and binder.", img: "images/products/excipients/cmc.jpg", features: "High viscosity, Excellent water solubility", appearance: "White to cream powder", weight: "242.20 g/mol", density: "1.59 g/cm³", melting: "Decomposes", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 8, name: "Croscarmellose Sodium", cat: "Excipients", stock: "25 Kg Bag", func: "Super Disintegrant", apps: "Tablets, Fast Dissolving Tablets", grade: "Pharma Grade / USP / IP", mol: "C₈H₁₆NaO₈", purity: ">99%", desc: "A white powder used as a super disintegrant for rapid drug release.", img: "images/products/excipients/croscarmellose.jpg", features: "Rapid swelling, Improves tablet disintegration", appearance: "White powder", weight: "262.19 g/mol", density: "1.60 g/cm³", melting: "Decomposes", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 9, name: "Crospovidone", cat: "Excipients", stock: "25 Kg Bag", func: "Super Disintegrant", apps: "Tablets, Fast Dissolving Tablets, Capsules", grade: "Pharma Grade / USP / IP", mol: "(C₆H₉NO)n", purity: ">98%", desc: "Cross-linked Polyvinylpyrrolidone ensures rapid disintegration and faster dissolution.", img: "images/products/excipients/crospovidone.jpg", features: "Rapid disintegration, High swelling capacity", appearance: "White powder", weight: "Varies", density: "1.22 g/cm³", melting: "150°C", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 10, name: "Dicalcium Phosphate (DCP)", cat: "Excipients", stock: "25 Kg Bag", func: "Diluent / Calcium Supplement", apps: "Tablets, Capsules", grade: "Pharma Grade / USP / IP", mol: "CaHPO₄", purity: ">98%", desc: "A filler/diluent providing bulk and enhancing tablet hardness and stability.", img: "images/products/excipients/dcp.jpg", features: "Good flowability, Excellent compressibility", appearance: "White powder", weight: "136.06 g/mol", density: "2.89 g/cm³", melting: "109°C", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 11, name: "Gelatin", cat: "Excipients", stock: "25 Kg Bag", func: "Gelling Agent", apps: "Hard Capsules, Softgel Capsules", grade: "Pharma Grade / USP / IP", mol: "Protein derivative", purity: ">98%", desc: "A protein-based excipient used as a gelling and capsule-forming agent.", img: "images/products/excipients/gelatin.jpg", features: "Excellent film forming, Biocompatible", appearance: "Yellowish granules or powder", weight: "Varies", density: "1.30 g/cm³", melting: "35°C", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 13, name: "HPMC", cat: "Excipients", stock: "25 Kg Bag", func: "Binder / Coating Agent", apps: "Tablets, Capsules, Film Coating", grade: "Pharma Grade / IP / USP", mol: "C₅₆H₁₀₈O₃₀", purity: ">98%", desc: "Semi-synthetic polymer used for binding, film coating, and controlled release.", img: "images/products/excipients/hpmc.jpg", features: "Excellent film forming, Controlled drug release", appearance: "White to off-white powder", weight: "Varies", density: "1.39 g/cm³", melting: "190°C", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 14, name: "Lactose", cat: "Excipients", stock: "25 Kg Bag", func: "Diluent / Filler", apps: "Tablets, Capsules", grade: "Pharma Grade / USP / IP", mol: "C₁₂H₂₂O₁₁", purity: ">99%", desc: "Primary diluent and filler offering excellent compressibility.", img: "images/products/excipients/lactose.jpg", features: "Excellent compressibility, Good taste", appearance: "White crystalline powder", weight: "342.30 g/mol", density: "1.53 g/cm³", melting: "202°C", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 15, name: "Magnesium Stearate", cat: "Excipients", stock: "25 Kg Bag", func: "Lubricant", apps: "Lubricant, Flow Enhancer", grade: "Pharma Grade / IP / BP / USP", mol: "C₃₆H₇₀MgO₄", purity: ">98%", desc: "Prevents sticking and improves powder flow during manufacturing.", img: "images/products/excipients/magnesium-stearate.jpg", features: "Reduces sticking, Improves flow properties", appearance: "Fine white powder", weight: "591.24 g/mol", density: "1.03 g/cm³", melting: "88°C", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 16, name: "MCC (Microcrystalline Cellulose)", cat: "Excipients", stock: "25 Kg Bag", func: "Binder / Diluent", apps: "Direct Compression Tablets", grade: "Pharma Grade / USP / IP", mol: "(C₆H₁₀O₅)n", purity: ">98%", desc: "Purified cellulose widely used for exceptional compressibility.", img: "images/products/excipients/mcc.jpg", features: "Excellent compressibility, Good flow properties", appearance: "White powder", weight: "Varies", density: "1.50 g/cm³", melting: "Decomposes", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 17, name: "Poloxamer", cat: "Excipients", stock: "25 Kg Bag", func: "Surfactant / Solubilizer", apps: "Creams, Gels, Liquid Formulations", grade: "Pharma Grade / USP", mol: "Copolymer", purity: ">98%", desc: "Improves solubility and stability of drugs.", img: "images/products/excipients/poloxamer.jpg", features: "Excellent emulsification, Improves solubility", appearance: "White waxy powder", weight: "Varies", density: "1.05 g/cm³", melting: "52°C", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 19, name: "PVP K30", cat: "Excipients", stock: "25 Kg Bag", func: "Binder / Solubilizer", apps: "Wet Granulation, Tablets, Capsules", grade: "Pharma Grade / USP", mol: "(C₆H₉NO)n", purity: ">99%", desc: "Synthetic polymer used as a binder and solubilizer.", img: "images/products/excipients/pvp-k30.jpg", features: "Excellent binding properties, Water soluble", appearance: "White hygroscopic powder", weight: "Varies", density: "1.20 g/cm³", melting: "150°C", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 20, name: "Sodium Lauryl Sulfate (SLS)", cat: "Excipients", stock: "25 Kg Bag", func: "Surfactant", apps: "Wetting Agent, Emulsifier, Foaming Agent", grade: "Pharma Grade / IP / BP / USP", mol: "C₁₂H₂₅NaO₄S", purity: ">95%", desc: "Wetting, emulsifying, and foaming agent.", img: "images/products/excipients/sls.jpg", features: "Excellent foaming, Effective wetting action", appearance: "White to pale yellow powder", weight: "288.38 g/mol", density: "1.01 g/cm³", melting: "204°C", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 21, name: "SSG (Sodium Starch Glycolate)", cat: "Excipients", stock: "25 Kg Bag", func: "Super Disintegrant", apps: "Tablets, Capsules", grade: "Pharma Grade / USP / IP", mol: "C₂₄H₃₅NaO₁₈", purity: ">95%", desc: "Superdisintegrant derived from modified starch.", img: "images/products/excipients/ssg.jpg", features: "Fast swelling, Excellent disintegration", appearance: "White powder", weight: "594.52 g/mol", density: "0.75 g/cm³", melting: "Decomposes", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 22, name: "Sorbitol", cat: "Excipients", stock: "25 Kg Bag / Drum", func: "Sweetener / Humectant", apps: "Syrups, Oral Solutions, Chewables", grade: "Pharma Grade / USP / IP", mol: "C₆H₁₄O₆", purity: ">98%", desc: "Sweet-tasting polyol used as a non-cariogenic sweetener.", img: "images/products/excipients/sorbitol.jpg", features: "Non-cariogenic, Moisture retaining", appearance: "Clear liquid or white powder", weight: "182.17 g/mol", density: "1.49 g/cm³", melting: "95°C", origin: "India", moq: "25 Kg", pkgType: "Drum / Bag" },
    { id: 23, name: "Starch", cat: "Excipients", stock: "25 Kg Bag", func: "Binder / Disintegrant", apps: "Tablets, Capsules", grade: "Pharma Grade / IP / USP", mol: "(C₆H₁₀O₅)n", purity: ">98%", desc: "Natural polysaccharide aiding in tablet binding.", img: "images/products/excipients/starch.jpg", features: "Excellent swelling property, Good compressibility", appearance: "Fine white powder", weight: "Varies", density: "1.50 g/cm³", melting: "Decomposes", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 24, name: "Stearic Acid", cat: "Excipients", stock: "25 Kg Bag", func: "Lubricant / Emulsifier", apps: "Tablets, Capsules, Creams", grade: "Pharma Grade / USP", mol: "C₁₈H₃₆O₂", purity: ">98%", desc: "Fatty acid used as a lubricant and binder.", img: "images/products/excipients/stearic-acid.jpg", features: "Improves flowability, Excellent stability", appearance: "White waxy powder", weight: "284.48 g/mol", density: "0.94 g/cm³", melting: "69°C", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 25, name: "Sucrose", cat: "Excipients", stock: "25 Kg Bag", func: "Sweetening Agent", apps: "Syrups, Chewable Tablets", grade: "Pharma Grade / IP / USP", mol: "C₁₂H₂₂O₁₁", purity: ">99%", desc: "Primary sweetening and bulking agent.", img: "images/products/excipients/sucrose.jpg", features: "Pleasant taste, Good solubility", appearance: "White crystalline powder", weight: "342.30 g/mol", density: "1.59 g/cm³", melting: "186°C", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 26, name: "Talc", cat: "Excipients", stock: "25 Kg Bag", func: "Glidant / Anti-caking Agent", apps: "Tablets, Capsules, Powder Formulations", grade: "Pharma Grade / IP / USP", mol: "Mg₃Si₄O₁₀(OH)₂", purity: ">98%", desc: "Mineral powder used as a lubricant and flow enhancer.", img: "images/products/excipients/talc.jpg", features: "Improves powder flow, Reduces sticking", appearance: "Fine white powder", weight: "379.27 g/mol", density: "2.70 g/cm³", melting: "1500°C", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 27, name: "Titanium Dioxide", cat: "Excipients", stock: "25 Kg Bag", func: "Opacifier / Colouring Agent", apps: "Tablet Coating, Capsule Coating", grade: "Pharma Grade / IP / BP / USP", mol: "TiO₂", purity: ">99%", desc: "Whitening agent providing brightness and UV protection.", img: "images/products/excipients/titanium-dioxide.jpg", features: "Excellent opacity, High brightness, UV protection", appearance: "Fine white powder", weight: "79.87 g/mol", density: "4.23 g/cm³", melting: "1843°C", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 28, name: "Xanthan Gum", cat: "Excipients", stock: "25 Kg Bag", func: "Thickener / Stabilizer", apps: "Suspensions, Syrups, Oral Liquids", grade: "Pharma Grade / USP", mol: "(C₃₅H₄₉O₂₉)n", purity: ">98%", desc: "Natural polysaccharide produced by fermentation.", img: "images/products/excipients/xanthan-gum.jpg", features: "Viscosity control, Stable pH range", appearance: "Cream to off-white powder", weight: "Varies", density: "1.50 g/cm³", melting: "Decomposes", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 29, name: "Colloidal Silicon Dioxide", cat: "Excipients", stock: "25 Kg Bag", func: "Glidant / Anti-caking Agent", apps: "Flow Enhancer, Moisture Control", grade: "Pharma Grade / USP / IP", mol: "SiO₂", purity: ">99%", desc: "Fine white powder used as a glidant to improve powder flow.", img: "images/products/excipients/colloidal-silicon-dioxide.jpg", features: "Improves powder flow, High adsorption", appearance: "Fine white powder", weight: "60.08 g/mol", density: "2.20 g/cm³", melting: "1600°C", origin: "India", moq: "10 Kg", pkgType: "Bag" },
    { id: 31, name: "Ethyl Cellulose", cat: "Excipients", stock: "25 Kg Bag", func: "Coating Agent / Binder", apps: "Sustained Release Tablets, Film Coating", grade: "Pharma Grade / IP / USP", mol: "C₂₀H₃₈O₁₁", purity: ">98%", desc: "Used for sustained drug release and barrier coating.", img: "images/products/excipients/ethyl-cellulose.jpg", features: "Water-insoluble, Film strength", appearance: "White granular powder", weight: "Varies", density: "1.14 g/cm³", melting: "240°C", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 32, name: "Mannitol", cat: "Excipients", stock: "25 Kg Bag", func: "Diluent / Sweetener", apps: "Chewable Tablets, Capsules", grade: "Pharma Grade / USP / IP", mol: "C₆H₁₄O₆", purity: ">98%", desc: "Non-hygroscopic diluent with a sweet, cooling taste.", img: "images/products/excipients/mannitol.jpg", features: "Cooling effect, Non-hygroscopic", appearance: "White crystalline powder", weight: "182.17 g/mol", density: "1.49 g/cm³", melting: "167°C", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 33, name: "Methyl Paraben", cat: "Excipients", stock: "25 Kg Bag", func: "Preservative", apps: "Syrups, Creams, Lotions", grade: "Pharma Grade / USP", mol: "C₈H₈O₃", purity: ">99%", desc: "Antimicrobial preservative effective against bacteria and fungi.", img: "images/products/excipients/methyl-paraben.jpg", features: "Antimicrobial, Stable compound", appearance: "White crystalline powder", weight: "152.15 g/mol", density: "1.35 g/cm³", melting: "125°C", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 34, name: "Propyl Paraben", cat: "Excipients", stock: "25 Kg Bag", func: "Preservative", apps: "Liquid & Topical Formulations", grade: "Pharma Grade / USP", mol: "C₁₀H₁₂O₃", purity: ">99%", desc: "Preservative often used with Methyl Paraben.", img: "images/products/excipients/propyl-paraben.jpg", features: "Antimicrobial activity, Good stability", appearance: "White crystalline powder", weight: "180.20 g/mol", density: "1.06 g/cm³", melting: "96°C", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 35, name: "Sodium Benzoate", cat: "Excipients", stock: "25 Kg Bag", func: "Preservative", apps: "Syrups, Liquid Formulations", grade: "Pharma Grade / USP / IP", mol: "C₇H₅NaO₂", purity: ">99%", desc: "Used to prevent microbial growth and ensure shelf-life.", img: "images/products/excipients/sodium-benzoate.jpg", features: "Microbial protection, Good stability", appearance: "White crystalline powder", weight: "144.11 g/mol", density: "1.44 g/cm³", melting: "300°C", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    
   // --- COLOURS (Sub-categories mapped by 'type') ---
    { id: 101, name: "Allura Red E129", cat: "Colours", subCat: "Synthetic Azo Dye", stock: "25 Kg", func: "Synthetic Colour", apps: "Tablets, Capsules, Syrups", grade: "IP/USP/Food Grade", mol: "C₁₈H₁₄N₂Na₂O₈S₂", purity: ">85%", desc: "A vibrant red colour offering uniformity and stability.", img: "images/products/colours/allura-red-e129.jpg", ci: "CI 16035", type: "Synthetic Azo Dye", solubility: "Water Soluble", weight: "496.42 g/mol", density: "0.70 g/cm³", appearance: "Dark red Powder", features: "Bright red shade, excellent uniformity", moq: "25 Kg", pkgType: "Bag / Drum" },
    { id: 102, name: "Allura Red Lake", cat: "Colours", subCat: "Aluminium Lake Pigment", stock: "25 Kg", func: "Aluminium Lake", apps: "Tablet Coating, Capsule Coating", grade: "IP/USP/Food Grade", mol: "Complex Aluminium Lake", purity: ">40% Dye Content", desc: "Stable pigment for uniform red coloration.", img: "images/products/colours/allura-red-lake.jpg", type: "Aluminium Lake Pigment", solubility: "Insoluble / Oil Dispersible", density: "0.70 g/cm³", appearance: "Red Fine Powder", features: "Bright colour shade, good heat stability", moq: "25 Kg", pkgType: "Bag / Drum" },
    { id: 103, name: "Black Iron Oxide", cat: "Colours", subCat: "Inorganic Pigment", stock: "25 Kg Bag", func: "Inorganic Pigment", apps: "Capsules, Coatings", grade: "IP/USP", mol: "Fe₃O₄", purity: ">95%", desc: "Used for grey to black shades.", img: "images/products/colours/black-iron-oxide.jpg", ci: "CI 77499", type: "Inorganic Pigment", solubility: "Insoluble", weight: "231.53 g/mol", density: "5.17 g/cm³", appearance: "Black Fine Powder", features: "Deep black shade, high covering power", moq: "25 Kg", pkgType: "Bag" },
    { id: 104, name: "Brilliant Blue E133", cat: "Colours", subCat: "Synthetic Azo Dye", stock: "25 Kg", func: "Synthetic Colour", apps: "Tablets, Capsules, Oral liquids", grade: "IP/USP/Food Grade", mol: "C₃₇H₃₄N₂Na₂O₉S₃", purity: ">85%", desc: "Bright blue colour for clear formulations.", img: "images/products/colours/brilliant-blue-e133.jpg", ci: "CI 42090", type: "Synthetic Azo Dye", solubility: "Water Soluble", weight: "792.84 g/mol", density: "0.80 g/cm³", appearance: "Blue Powder/Granules", features: "Bright blue shade, excellent stability", moq: "25 Kg", pkgType: "Bag" },
    { id: 105, name: "Brilliant Blue Lake", cat: "Colours", subCat: "Aluminium Lake Pigment", stock: "25 Kg", func: "Aluminium Lake", apps: "Tablet Coating, Capsule Coating", grade: "IP/USP/Food Grade", mol: "Complex Aluminium Lake", purity: ">35% Dye Content", desc: "Stable blue coloration in coatings.", img: "images/products/colours/brilliant-blue-lake.jpg", type: "Aluminium Lake Pigment", solubility: "Insoluble", weight: "N/A", density: "0.70 g/cm³", appearance: "Blue Fine Powder", features: "High tinting strength, thermal stability", moq: "25 Kg", pkgType: "Bag" },
    { id: 106, name: "Carmosine E122", cat: "Colours", subCat: "Synthetic Azo Dye", stock: "25 Kg", func: "Synthetic Colour", apps: "Oral liquids, Tablets", grade: "IP/USP/Food Grade", mol: "C₂₀H₁₂N₂Na₂O₇S₂", purity: ">85%", desc: "Deep red shade for strong visual identity.", img: "images/products/colours/carmosine-e122.jpg", ci: "CI 14720", type: "Synthetic Azo Dye", solubility: "Water Soluble", weight: "502.43 g/mol", density: "0.80 g/cm³", appearance: "Red to maroon Powder", features: "Pink to red shade, good solubility", moq: "25 Kg", pkgType: "Bag" },
    { id: 107, name: "Carmosine Lake", cat: "Colours", subCat: "Aluminium Lake Pigment", stock: "25 Kg", func: "Aluminium Lake", apps: "Pharmaceutical Coating", grade: "IP/USP/Food Grade", mol: "Complex Aluminium Lake", purity: ">35% Dye Content", desc: "Insoluble pigment form of Carmoisine.", img: "images/products/colours/carmosine-lake.jpg", type: "Aluminium Lake Pigment", solubility: "Insoluble", density: "0.70 g/cm³", appearance: "Dark red Fine Powder", features: "Uniform distribution, light stability", moq: "25 Kg", pkgType: "Bag" },
    { id: 108, name: "D and C Red 30", cat: "Colours", subCat: "Organic Pigment", stock: "25 Kg", func: "Colour Pigment", apps: "Cosmetic, Pharmaceutical", grade: "IP/USP", mol: "C₂₆H₂₂ N₄O₂", purity: ">90%", desc: "Synthetic organic pigment for red coloration.", img: "images/products/colours/d-and-c-red-30.jpg", type: "Organic Pigment", solubility: "Insoluble", weight: "422.48 g/mol", density: "1.30 g/cm³", appearance: "Red Fine Powder", features: "Bright shade, good dispersion", moq: "25 Kg", pkgType: "Bag" },
    { id: 109, name: "D and C Red 34", cat: "Colours", subCat: "Organic Pigment", stock: "25 Kg", func: "Colour Pigment", apps: "Pharmaceutical Coating", grade: "IP/USP", mol: "C₁₈H₁₃N₃NaO₈S", purity: ">90%", desc: "Specialty organic red pigment.", img: "images/products/colours/d-and-c-red-34.jpg", type: "Organic Pigment", solubility: "Insoluble", weight: "454.36 g/mol", density: "1.20 g/cm³", appearance: "Red-violet Fine Powder", features: "High tinting strength, consistent performance", moq: "25 Kg", pkgType: "Bag" },
    { id: 110, name: "D and C Red 36", cat: "Colours", subCat: "Organic Pigment", stock: "25 Kg", func: "Colour Pigment", apps: "Tablet Coating", grade: "IP/USP", mol: "C₂₀H₁₂N₂O₇S₂Na₂", purity: ">90%", desc: "High-performance organic pigment for deep red shades.", img: "images/products/colours/d-and-c-red-36.jpg", type: "Organic Pigment", solubility: "Insoluble", weight: "502.43 g/mol", density: "1.25 g/cm³", appearance: "Bluish-red Fine Powder", features: "Excellent uniformity, high stability", moq: "25 Kg", pkgType: "Bag" },
    { id: 111, name: "Fast Green E143", cat: "Colours", subCat: "Synthetic Azo Dye", stock: "25 Kg", func: "Synthetic Colour", apps: "Tablets, Capsules, Syrups", grade: "IP/USP/Food Grade", mol: "C₃₇H₃₄N₂Na₂O₁₀S₃", purity: ">85%", desc: "Sea-green colour for product differentiation.", img: "images/products/colours/fast-green-e143.jpg", ci: "CI 42053", type: "Synthetic Azo Dye", solubility: "Water Soluble", weight: "808.85 g/mol", density: "0.90 g/cm³", appearance: "Green Powder/Granules", features: "Bluish-green shade, stable", moq: "25 Kg", pkgType: "Bag" },
    { id: 112, name: "Fast Green Lake", cat: "Colours", subCat: "Aluminium Lake Pigment", stock: "25 Kg", func: "Aluminium Lake", apps: "Pharmaceutical Coating", grade: "IP/USP/Food Grade", mol: "Complex Aluminium Lake", purity: ">35% Dye Content", desc: "Stable insoluble green pigment.", img: "images/products/colours/fast-green-lake.jpg", type: "Aluminium Lake Pigment", solubility: "Insoluble", weight: "N/A", density: "0.75 g/cm³", appearance: "Green Fine Powder", features: "Consistent shade, stable performance", moq: "25 Kg", pkgType: "Bag" },
    { id: 113, name: "Indigo Carmine E132", cat: "Colours", subCat: "Synthetic Azo Dye", stock: "25 Kg", func: "Synthetic Colour", apps: "Tablets, Diagnostics", grade: "IP/USP/Food Grade", mol: "C₁₆H₈N₂Na₂O₈S₂", purity: ">85%", desc: "Darker blue shade for specialized apps.", img: "images/products/colours/indigo-caramine-e132.jpg", ci: "CI 73015", type: "Synthetic Azo Dye", solubility: "Water Soluble", weight: "466.35 g/mol", density: "1.80 g/cm³", appearance: "Dark blue Powder", features: "Deep blue shade, pH stability", moq: "25 Kg", pkgType: "Bag" },
    { id: 114, name: "Iron Red Oxide", cat: "Colours", subCat: "Inorganic Pigment", stock: "25 Kg Bag", func: "Inorganic Pigment", apps: "Tablet Coating, Capsules", grade: "IP/USP", mol: "Fe₂O₃", purity: ">95%", desc: "Highly stable inorganic red pigment.", img: "images/products/colours/iron-red-oxide.jpg", ci: "CI 77491", type: "Inorganic Pigment", solubility: "Insoluble", weight: "159.69 g/mol", density: "5.24 g/cm³", appearance: "Red-brown Fine Powder", features: "Excellent opacity, high stability", moq: "25 Kg", pkgType: "Bag" },
    { id: 115, name: "Ponceau 4R E124", cat: "Colours", subCat: "Synthetic Azo Dye", stock: "25 Kg", func: "Synthetic Colour", apps: "Tablets, Syrups, Capsules", grade: "IP/USP/Food Grade", mol: "C₂₀H₁₁N₂Na₃O₁₀S₃", purity: ">80%", desc: "Rich red colour for oral forms.", img: "images/products/colours/ponceau-4r-e124.jpg", ci: "CI 16255", type: "Synthetic Azo Dye", solubility: "Water Soluble", weight: "604.47 g/mol", density: "0.90 g/cm³", appearance: "Red Powder/Granules", features: "Strong red shade, good dispersion", moq: "25 Kg", pkgType: "Bag" },
    { id: 116, name: "Ponceau 4R Lake", cat: "Colours", subCat: "Aluminium Lake Pigment", stock: "25 Kg", func: "Aluminium Lake", apps: "Film Coating, Tablet Coating", grade: "IP/USP/Food Grade", mol: "Complex Aluminium Lake", purity: ">40% Dye Content", desc: "Lake pigment used in nutraceutical coatings.", img: "images/products/colours/ponceau-4r-lake.jpg", type: "Aluminium Lake Pigment", solubility: "Insoluble", weight: "N/A", density: "0.72 g/cm³", appearance: "Red Fine Powder", features: "Strong colouring, excellent dispersion", moq: "25 Kg", pkgType: "Bag" },
    { id: 117, name: "Quinoline Yellow E104", cat: "Colours", subCat: "Synthetic Azo Dye", stock: "25 Kg", func: "Synthetic Dye", apps: "Tablets, Coatings", grade: "IP/USP/Food Grade", mol: "C₁₈H₁₉NO₈S₂Na₂", purity: ">70%", desc: "Greenish-yellow colour used in coatings.", img: "images/products/colours/quinoline-yellow-e104.jpg", ci: "CI 47005", type: "Synthetic Azo Dye", solubility: "Water Soluble", weight: "477.38 g/mol", density: "0.70 g/cm³", appearance: "Greenish-yellow Powder", features: "High light stability, distinct hue", moq: "25 Kg", pkgType: "Bag" },
    { id: 118, name: "Quinoline Yellow Lake", cat: "Colours", subCat: "Aluminium Lake Pigment", stock: "25 Kg", func: "Aluminium Lake", apps: "Film Coating, Tablet Coating", grade: "IP/USP/Food Grade", mol: "Complex Aluminium Lake", purity: ">40% Dye Content", desc: "Insoluble pigment form for stable coatings.", img: "images/products/colours/quinoloine-yellow-lake.jpg", type: "Aluminium Lake Pigment", solubility: "Insoluble", density: "0.65 g/cm³", appearance: "Yellow Fine Powder", features: "Colour stability, uniform dispersion", moq: "25 Kg", pkgType: "Bag" },
    { id: 119, name: "Sunset Yellow E110", cat: "Colours", subCat: "Synthetic Azo Dye", stock: "25 Kg", func: "Synthetic Colour", apps: "Tablets, Capsules, Syrups", grade: "IP/USP/Food Grade", mol: "C₁₆H₁₀N₂Na₂O₇S₂", purity: ">85%", desc: "Orange-yellow shade enhancing product appeal.", img: "images/products/colours/sunset-yellow-e110.jpg", ci: "CI 15985", type: "Synthetic Azo Dye", solubility: "Water Soluble", weight: "452.37 g/mol", density: "0.80 g/cm³", appearance: "Orange-red Powder", features: "Good heat stability, vibrant shade", moq: "25 Kg", pkgType: "Bag" },
    { id: 120, name: "Sunset Yellow Lake", cat: "Colours", subCat: "Aluminium Lake Pigment", stock: "25 Kg", func: "Aluminium Lake", apps: "Film Coating, Oil-based systems", grade: "IP/USP/Food Grade", mol: "Complex Aluminium Lake", purity: ">40% Dye Content", desc: "Enhanced opacity and consistent colour.", img: "images/products/colours/sunset-yellow-lake.jpg", type: "Aluminium Lake Pigment", solubility: "Insoluble", density: "0.60 g/cm³", appearance: "Orange Fine Powder", features: "Stable in oil systems, uniform opacity", moq: "25 Kg", pkgType: "Bag" },
    { id: 121, name: "Tartrazine E102", cat: "Colours", subCat: "Synthetic Azo Dye", stock: "25 Kg", func: "Synthetic Colour", apps: "Tablets, Capsules, Syrups", grade: "IP/USP/Food Grade", mol: "C₁₈H₁₉NO₈S₂Na₂", purity: ">85%", desc: "Bright lemon-yellow colour for pharmaceutical appearance.", img: "images/products/colours/tartrazine-e102.jpg", ci: "CI 19140", type: "Synthetic Azo Dye", solubility: "Water Soluble", weight: "534.36 g/mol", density: "0.52 g/cm³", appearance: "Orange-yellow powder", features: "High stability, cost-effective", moq: "25 Kg", pkgType: "Bag" },
    { id: 122, name: "Tartrazine Lake", cat: "Colours", subCat: "Aluminium Lake Pigment", stock: "25 Kg", func: "Aluminium Lake", apps: "Tablet Coating, Capsules", grade: "IP/USP/Food Grade", mol: "Complex Aluminium Lake", purity: ">40% Dye Content", desc: "Insoluble pigment form for improved dispersion.", img: "images/products/colours/tartrazine-lake.jpg", type: "Aluminium Lake Pigment", solubility: "Oil Dispersible", density: "0.60 g/cm³", appearance: "Yellow-orange Fine Powder", features: "Improved opacity, uniform coating", moq: "25 Kg", pkgType: "Bag" },
    { id: 123, name: "Yellow Iron Oxide", cat: "Colours", subCat: "Inorganic Pigment", stock: "25 Kg Bag", func: "Inorganic Pigment", apps: "Tablet Coating", grade: "IP/USP", mol: "FeO(OH)", purity: ">95%", desc: "Provides natural yellow tones with light resistance.", img: "images/products/colours/yellow-iron-oxide.jpg", ci: "CI 77492", type: "Inorganic Pigment", solubility: "Insoluble", weight: "88.85 g/mol", density: "4.26 g/cm³", appearance: "Yellow Fine Powder", features: "Natural shade, light resistant", moq: "25 Kg", pkgType: "Bag" },

    // --- SOLVENTS (IDs 3, 12, 18, 30) ---
    { id: 3, name: "Propylene Glycol", cat: "Solvents", stock: "215 Kg Drum", func: "Solvent / Humectant", apps: "Syrups, Oral Solutions, Topical Formulations", grade: "Pharma Grade / USP / IP", mol: "C₃H₈O₂", purity: ">99%", desc: "Clear, colorless, viscous liquid used as a solvent and humectant.", img: "images/products/excipients/propylene-glycol.jpg", features: "Excellent solvent properties, Moisture retaining", appearance: "Clear colorless viscous liquid", weight: "76.09 g/mol", density: "1.04 g/cm³", melting: "-59°C", origin: "India", moq: "215 Kg", pkgType: "Drum" },
    { id: 12, name: "Glycerin", cat: "Solvents", stock: "250 Kg Drum", func: "Humectant / Solvent", apps: "Syrups, Creams, Oral Solutions", grade: "Pharma Grade / USP / IP", mol: "C₃H₈O₃", purity: ">99%", desc: "Clear viscous liquid used as a humectant and sweetener.", img: "images/products/excipients/glycerin.jpg", features: "Moisture retaining, Sweet taste", appearance: "Clear viscous liquid", weight: "92.09 g/mol", density: "1.26 g/cm³", melting: "18°C", origin: "India", moq: "250 Kg", pkgType: "Drum" },
    { id: 18, name: "Polyethylene Glycol (PEG)", cat: "Solvents", stock: "25 Kg Bag", func: "Solvent / Plasticizer", apps: "Ointments, Tablets, Capsules", grade: "Pharma Grade / USP", mol: "H(OCH₂CH₂)nOH", purity: ">99%", desc: "Versatile polymer used as a plasticizer and solvent.", img: "images/products/excipients/peg.jpg", features: "Excellent solubility, Good stability", appearance: "White flakes or powder", weight: "Varies", density: "1.12 g/cm³", melting: "60°C", origin: "India", moq: "25 Kg", pkgType: "Bag" },
    { id: 30, name: "Ethanol (99.9%)", cat: "Solvents", stock: "50/200 L Drum", func: "Solvent / Disinfectant", apps: "Syrups, Sanitizers, Liquid Formulations", grade: "Pharma Grade / IP / USP", mol: "C₂H₆O", purity: ">99%", desc: "Clear, colorless, volatile solvent and disinfectant.", img: "images/products/excipients/ethanol.jpg", features: "Rapid evaporation, Excellent solvent properties", appearance: "Clear colorless liquid", weight: "46.07 g/mol", density: "0.79 g/cm³", melting: "-114°C", origin: "India", moq: "50 L", pkgType: "Drum" },

    // --- VITAMINS  ---
    { id: 201, name: "Ascorbic Acid (Vitamin C)", cat: "Vitamins", stock: "25 Kg Carton", func: "Vitamin / Antioxidant", apps: "Tablets, Capsules, Fortification", grade: "IP/BP/USP/FCC", mol: "C₆H₈O₆", purity: ">99%", desc: "Vital nutrient used to boost immunity.", img: "images/products/vitamins/ascorbic-acid.jpg", moq: "25 Kg", pkgType: "Carton" },
    { id: 202, name: "Ascorbyl Palmitate", cat: "Vitamins", stock: "25 Kg", func: "Fat-Soluble Vit C", apps: "Oil formulations", grade: "NF/FCC", mol: "C₂₂H₃₈O₇", purity: "98-100%", desc: "Fat-soluble antioxidant.", img: "images/products/vitamins/ascorbyl-palmitate.jpg" },
    { id: 203, name: "Tocopherol (Vitamin E)", cat: "Vitamins", stock: "25 kg", func: "Antioxidant", apps: "Softgels, Topicals", grade: "USP", mol: "C₂₉H₅₀O₂", purity: ">99%", desc: "Protect cells from damage.", img: "images/products/vitamins/tocopherol.jpg" },
    { id: 204, name: "Tocopheryl Acetate", cat: "Vitamins", stock: "25 kg", func: "Vitamin E", apps: "Multi-vitamins", grade: "USP", mol: "C₃₁H₅₂O₃", purity: ">98%", desc: "Stable ester of Vitamin E.", img: "images/products/vitamins/tocopheryl-acetate.jpg" },
    
    // --- Specialty  ---    
    { id: 301, name: "Aloe Vera Gel Powder", cat: "Specialty", stock: "25 Kg", func: "Natural Extract", apps: "Cosmetics, Nutraceuticals", grade: "Cosmetic / Food Grade", mol: "Natural Extract", purity: ">99%", desc: "Premium extract from Aloe leaf.", img: "images/products/specialty/aloe-vera-gel-powder.jpg" },
    { id: 302, name: "Bio-SAP Polymer", cat: "Specialty", stock: "25 Kg Bag", func: "Water Retainer", apps: "Agriculture, Hygiene", grade: "Eco-Friendly", mol: "Bio-Polymer", purity: ">99%", desc: "Eco-friendly polymer.", img: "images/products/specialty/bio-based-super-absorbent-polymer.jpg" }
];

let cart = [];

// 3. RENDERING LOGIC
window.renderProducts = function(items) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    
    grid.innerHTML = items.map(p => `
        <div class="product-card bg-white rounded-[2.5rem] p-7 border border-slate-100 shadow-sm relative overflow-hidden group">
            <div class="absolute top-5 left-5 z-10">
                <span class="block bg-[#004b8d] text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-md">${p.stock}</span>
            </div>
            <img src="${p.img}?v=${Date.now()}" 
                 alt="${p.name} - Pharmaceutical Excipients Wholesaler Hyderabad"
                 onerror="this.src='https://placehold.co/400x300?text=${p.name.split(' ')[0]}'" 
                 class="w-full h-56 object-cover rounded-3xl mb-5 bg-slate-50 border border-slate-50 shadow-inner">
            <div class="px-2">
                <p class="text-[11px] font-black text-[#1a7139] uppercase mb-1 tracking-tighter">${p.cat}</p>
                <h3 class="font-black text-xl h-14 mb-3 uppercase leading-tight text-slate-900">${p.name}</h3>
                <p class="text-[14px] text-slate-500 mb-2">Application: <span class="text-[17px] font-black text-slate-900">${p.func}</span></p>
                <div class="text-[12px] text-slate-500 leading-tight mb-7">
                    Minimum order quantity: <span class="font-black text-slate-900">${p.moq || '25 Kg'}</span>
                </div>
                <div class="flex justify-between items-center pt-4 border-t border-slate-50">
                    <button onclick="window.viewDetails(${p.id})" class="text-[15px] font-black text-[#004b8d] underline uppercase tracking-widest hover:text-[#1a7139] transition-colors">Product Details</button>
                    <button onclick="window.addToCart(${p.id})" class="w-14 h-14 bg-[#004b8d] text-white rounded-full flex items-center justify-center hover:bg-[#1a7139] transition shadow-xl shadow-blue-100">
                        <i data-lucide="plus" class="w-7 h-7"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

// 4. FILTER LOGIC
window.filterProducts = function(category) {
    if (category === 'All') {
        renderProducts(products);
    } else {
        renderProducts(products.filter(p => p.cat === category));
    }
    scrollToCatalog();
}

window.filterSingleProduct = function(id) {
    renderProducts(products.filter(p => p.id === id));
    scrollToCatalog();
}

function scrollToCatalog() {
    const target = document.getElementById('catalog');
    if (target) {
        window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
    }
}

// 5. MODAL & DETAILS
window.viewDetails = function(id) {
    const p = products.find(item => item.id === id);
    if (!p) return;

    document.getElementById('modal-title').innerText = p.name;
    document.getElementById('modal-desc').innerHTML = `<span class="text-xl text-slate-600 font-medium">${p.desc}</span>`;
    document.getElementById('modal-img').src = p.img; 
    
    const specsGrid = document.getElementById('specs-grid');
    let specs = [
        { label: "Function", value: p.func },
        { label: "Grade", value: p.grade },
        { label: "Purity", value: p.purity },
        { label: "MOQ", value: p.moq || "25 Kg" }
    ];

    specsGrid.innerHTML = specs.map(s => `
        <div class="mb-5">
            <h4 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">${s.label}</h4>
            <p class="text-lg font-extrabold text-slate-800">${s.value}</p>
        </div>
    `).join('');

    document.getElementById('details-modal').classList.remove('hidden');
    lucide.createIcons();
}

window.closeDetails = function() {
    document.getElementById('details-modal').classList.add('hidden');
}

// 6. CART LOGIC
window.addToCart = function(id) {
    const item = products.find(p => p.id === id);
    const inCart = cart.find(c => c.id === id);
    if (inCart) { inCart.qty++; } else { cart.push({...item, qty: 1}); }
    updateCartUI();
    
    // Toast notification
    const toast = document.createElement('div');
    toast.className = "fixed bottom-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-full z-[100] text-sm font-bold shadow-2xl";
    toast.innerText = `${item.name} added to inquiry`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

function updateCartUI() {
    const list = document.getElementById('cart-items');
    const totalItems = cart.reduce((acc, c) => acc + c.qty, 0);

    document.getElementById('cart-count').innerText = totalItems;
    if(document.getElementById('cart-total-count')) document.getElementById('cart-total-count').innerText = totalItems;

    list.innerHTML = cart.map(c => `
        <div class="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <div class="flex-1">
                <h4 class="text-sm font-bold text-slate-800">${c.name}</h4>
                <p class="text-[10px] text-slate-400 font-black uppercase">${c.stock}</p>
            </div>
            <div class="flex items-center gap-3 bg-white px-3 py-1 rounded-xl">
                <button onclick="window.changeQty(${c.id}, -1)" class="font-bold">-</button>
                <span class="text-sm font-black w-4 text-center">${c.qty}</span>
                <button onclick="window.changeQty(${c.id}, 1)" class="text-[#004b8d] font-bold">+</button>
            </div>
        </div>
    `).join('');
}

window.changeQty = function(id, delta) {
    const item = cart.find(c => c.id === id);
    item.qty += delta;
    if (item.qty < 1) cart = cart.filter(c => c.id !== id);
    updateCartUI();
}

window.toggleCart = function() {
    const drawer = document.getElementById('cart-drawer');
    const content = document.getElementById('cart-content');
    drawer.classList.toggle('invisible');
    content.classList.toggle('translate-x-full');
}

window.showCheckout = function() {
    if (cart.length === 0) return alert("Inquiry list is empty!");
    document.getElementById('checkout-modal').classList.remove('hidden');
    renderSummary();
}

window.closeCheckout = function() {
    document.getElementById('checkout-modal').classList.add('hidden');
}

function renderSummary() {
    const list = document.getElementById('summary-items');
    list.innerHTML = cart.map(c => `
        <div class="flex justify-between items-center bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <span class="font-black text-slate-800">${c.name}</span>
            <span class="font-black text-[#004b8d] text-lg">x${c.qty}</span>
        </div>
    `).join('');
}

// 7. ORDER SUBMISSION
window.submitOrder = function(method) {
    const name = document.getElementById('cust-name').value.trim();
    const phone = document.getElementById('cust-phone').value.trim();
    const address = document.getElementById('cust-address').value.trim();
    if (!name || !phone || !address) return alert("Please fill all details.");

    let body = `INQUIRY - EXCIPURE PHARMA\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\n\nProducts:\n`;
    cart.forEach((item, i) => { body += `${i + 1}. ${item.name} (x${item.qty})\n`; });

    if (method === 'whatsapp') {
        window.open(`https://wa.me/919398453760?text=${encodeURIComponent(body)}`, '_blank');
    } else {
        window.location.href = `mailto:info@excipurepharma.com?subject=Inquiry&body=${encodeURIComponent(body)}`;
    }
}

// 8. SIDEBAR
function renderSidebar() {
    const nav = document.getElementById('sidebar-nav');
    const categories = ["Excipients", "Colours", "Solvents", "Vitamins", "Specialty"];
    nav.innerHTML = `
        <button onclick="window.filterProducts('All')" class="w-full text-left px-5 py-4 rounded-xl hover:bg-slate-50 transition font-black text-lg mb-4 flex items-center justify-between border border-transparent">
            All Products <i data-lucide="layers" class="w-5 h-5 text-slate-300"></i>
        </button>
    ` + categories.map(cat => `
        <button onclick="window.filterProducts('${cat}')" class="w-full text-left px-5 py-4 rounded-xl hover:bg-slate-50 transition font-black text-lg uppercase tracking-wide border-b border-slate-50 last:border-0">${cat}</button>
    `).join('');
    lucide.createIcons();
}

// INITIAL STARTUP
if (document.getElementById('product-grid')) {
    renderProducts(products);
    renderSidebar();
}

window.toggleMobileMenu = function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
    lucide.createIcons();
}
