// 1. INITIALIZE ICONS
lucide.createIcons();

// 2. PRODUCT DATABASE
const products = [
    // --- EXCIPIENTS ---
    { 
    id: 1, 
    name: "Calcium Carbonate", 
    cat: "Excipients", 
    stock: "25 Kg Bag", 
    func: "Diluent", 
    apps: "Calcium Supplement, Tablet Diluent, Antacid Formulations", 
    grade: "Pharma Grade / IP / BP / USP / Food Grade", 
    mol: "CaCO₃", 
    purity: "Approx. >99%", 
    desc: "A fine white, odorless crystalline powder, Calcium Carbonate is widely used as a diluent and calcium supplement. It provides bulk to formulations and is also used as an antacid. Common in pharmaceutical, food, and nutraceutical industries.", 
    img: "images/products/excipients/calcium-carbonate.jpg",
    // New fields from Excel:
    features: "Excellent stability, High calcium content, Good compressibility",
    appearance: "White powder or granules",
    weight: "100.09 g/mol",
    density: "Approx. 2.71 g/cm³",
    melting: "Decomposes above 825°C",
    origin: "India",
    moq: "25 Kg",
    pkgType: "Bag"
    },
    { id: 2, name: "Carbomer (Carbopol)", cat: "Excipients", stock: "Custom", func: "Gelling agent", apps: "Gels, Cosmetics", grade: "IP/USP/BP", mol: "Polyacrylic Acid", purity: "90–100%", desc: "Fluffy powder forming clear gels for topical use.", img: "images/products/excipients/carbomer.jpg" },
    { id: 3, name: "Propylene Glycol", cat: "Excipients", stock: "215 Kg Drum", func: "Solvent", apps: "Syrups, Oral Liquids", grade: "USP/IP", mol: "C₃H₈O₂", purity: ">99%", desc: "Clear viscous liquid used as a solvent and humectant.", img: "images/products/excipients/propylene-glycol.jpg" },
    { id: 4, name: "Calcium Stearate", cat: "Excipients", stock: "25 Kg Bag", func: "Lubricant", apps: "Tablets, Capsules", grade: "USP", mol: "C₃₆H₇₀CaO₄", purity: ">98%", desc: "Fine white greasy powder used as a tablet lubricant.", img: "images/products/excipients/calcium-stearate.jpg" },
    { id: 5, name: "Chitosan", cat: "Excipients", stock: "Custom", func: "Binder", apps: "Biomedical, Film coatings", grade: "USP/BP", mol: "Polymer", purity: "≥ 85%", desc: "Natural polymer known for bioadhesive properties.", img: "images/products/excipients/chitosan.jpg" },
    { id: 6, name: "Citric Acid", cat: "Excipients", stock: "25 Kg Bag", func: "Acidulant", apps: "Effervescent tabs, Syrups", grade: "IP/USP/BP", mol: "C₆H₈O₇", purity: "Pharma Std", desc: "White crystalline powder used for pH adjustment.", img: "images/products/excipients/citric-acid.jpg" },
    { id: 7, name: "CMC (Carboxy Methyl Cellulose)", cat: "Excipients", stock: "25 Kg Bag", func: "Thickener", apps: "Suspensions, Tablets", grade: "USP/IP", mol: "C₈H₁₅NaO₈", purity: ">99%", desc: "Water-soluble thickener and binder.", img: "images/products/excipients/cmc.jpg" },
    { id: 8, name: "Croscarmellose Sodium", cat: "Excipients", stock: "25 Kg Bag", func: "Super Disintegrant", apps: "Tablets", grade: "USP/IP", mol: "Polymer", purity: ">99%", desc: "Ensures rapid drug release from tablets.", img: "images/products/excipients/croscarmellose.jpg" },
    { id: 9, name: "Crospovidone", cat: "Excipients", stock: "25 Kg Bag", func: "Super Disintegrant", apps: "Rapid release tabs", grade: "USP/IP", mol: "(C₆H₉NO)n", purity: ">98%", desc: "Ensures quick tablet disintegration.", img: "images/products/excipients/crospovidone.jpg" },
    { id: 10, name: "Dicalcium Phosphate (DCP)", cat: "Excipients", stock: "25 Kg Bag", func: "Diluent", apps: "Tablets, Capsules", grade: "USP/IP", mol: "CaHPO₄", purity: ">98%", desc: "Provides bulk and enhances tablet hardness.", img: "images/products/excipients/dcp.jpg" },
    { id: 11, name: "Gelatin", cat: "Excipients", stock: "25 Kg Bag", func: "Gelling agent", apps: "Capsule shells", grade: "USP/IP", mol: "Protein", purity: ">98%", desc: "The primary material for hard/soft capsules.", img: "images/products/excipients/gelatin.jpg" },
    { id: 12, name: "Glycerin", cat: "Excipients", stock: "250 Kg Drum", func: "Humectant", apps: "Syrups, Topicals", grade: "USP/IP", mol: "C₃H₈O₃", purity: ">99%", desc: "Clear viscous solvent and sweetener.", img: "images/products/excipients/glycerin.jpg" },
    { id: 13, name: "HPMC", cat: "Excipients", stock: "25 Kg Bag", func: "Binder / Coating Agent", apps: "Film Coating, Controlled Release", grade: "IP/USP", mol: "Cellulose", purity: ">98%", desc: "Standard for tablet coating and controlled release.", img: "images/products/excipients/hpmc.jpg" },
    { id: 14, name: "Lactose", cat: "Excipients", stock: "25 Kg Bag", func: "Diluent", apps: "Tablets, Capsules", grade: "USP/IP", mol: "Sugar", purity: ">99%", desc: "High-purity filler for solid dosage forms.", img: "images/products/excipients/lactose.jpg" },
    { id: 15, name: "Magnesium Stearate", cat: "Excipients", stock: "25 Kg Bag", func: "Lubricant", apps: "Tableting", grade: "IP/USP", mol: "Salt", purity: ">98%", desc: "Prevents powder sticking during tableting.", img: "images/products/excipients/magnesium-stearate.jpg" },
    { id: 16, name: "MCC", cat: "Excipients", stock: "25 Kg Bag", func: "Binder / Diluent", apps: "Direct Compression", grade: "USP/IP", mol: "Cellulose", purity: ">98%", desc: "Highly compressible binder for tablets.", img: "images/products/excipients/mcc.jpg" },
    { id: 17, name: "Poloxamer", cat: "Excipients", stock: "25 Kg Bag", func: "Surfactant", apps: "Emulsions, Gels", grade: "USP", mol: "Copolymer", purity: ">98%", desc: "Improves drug solubility and stability.", img: "images/products/excipients/poloxamer.jpg" },
    { id: 18, name: "Polyethylene Glycol (PEG)", cat: "Excipients", stock: "25 Kg Bag", func: "Solvent / Plasticizer", apps: "Ointments, Coating", grade: "USP", mol: "Polymer", purity: ">99%", desc: "Versatile solvent and coating plasticizer.", img: "images/products/excipients/peg.jpg" },
    { id: 19, name: "PVP K30", cat: "Excipients", stock: "25 Kg Bag", func: "Binder", apps: "Wet Granulation", grade: "USP", mol: "Polymer", purity: ">99%", desc: "Strong binder for granulation process.", img: "images/products/excipients/pvp-k30.jpg" },
    { id: 20, name: "Sodium Lauryl Sulfate (SLS)", cat: "Excipients", stock: "25 Kg Bag", func: "Surfactant", apps: "Capsules, Topicals", grade: "IP/USP", mol: "Salt", purity: ">95%", desc: "Improves drug dissolution in water.", img: "images/products/excipients/sls.jpg" },
    { id: 21, name: "SSG (Sodium Starch Glycolate)", cat: "Excipients", stock: "25 Kg Bag", func: "Super Disintegrant", apps: "Tablets", grade: "USP/IP", mol: "Starch", purity: ">95%", desc: "Derived from starch, ensures rapid disintegration.", img: "images/products/excipients/ssg.jpg" },
    { id: 22, name: "Sorbitol", cat: "Excipients", stock: "25Kg Bag / Drum", func: "Sweetener", apps: "Syrups, Chewables", grade: "USP/IP", mol: "C₆H₁₄O₆", purity: ">98%", desc: "Non-sugar sweetener and humectant.", img: "images/products/excipients/sorbitol.jpg" },
    { id: 23, name: "Starch (Maize/Corn)", cat: "Excipients", stock: "25 Kg Bag", func: "Binder", apps: "Tablets", grade: "IP/USP", mol: "Natural", purity: ">98%", desc: "Universal binder and disintegrant.", img: "images/products/excipients/starch.jpg" },
    { id: 24, name: "Stearic Acid", cat: "Excipients", stock: "25 Kg Bag", func: "Lubricant", apps: "Tablets, Creams", grade: "USP", mol: "C₁₈H₃₆O₂", purity: ">98%", desc: "Waxy solid used as lubricant and binder.", img: "images/products/excipients/stearic-acid.jpg" },
    { id: 25, name: "Sucrose", cat: "Excipients", stock: "25 Kg Bag", func: "Sweetener", apps: "Syrups, Tabs", grade: "IP/USP", mol: "Sugar", purity: ">99%", desc: "Standard pharma-grade sugar.", img: "images/products/excipients/sucrose.jpg" },
    { id: 26, name: "Talc", cat: "Excipients", stock: "25 Kg Bag", func: "Glidant", apps: "Tablets, Powders", grade: "IP/USP", mol: "Mineral", purity: ">98%", desc: "Enhances flow and reduces sticking.", img: "images/products/excipients/talc.jpg" },
    { id: 27, name: "Titanium Dioxide", cat: "Excipients", stock: "25 Kg Bag", func: "Opacifier", apps: "Tablet Coating, Capsule Coating, Pharma & Nutraceuticals", grade: "IP/USP", mol: "TiO₂", purity: ">99%", desc: "A widely used white pigment that provides opacity, brightness, and UV protection.", img: "images/products/excipients/titanium-dioxide.jpg", ci: "PW 6", type: "Opacifying Pigment", weight: "79.87 g/mol", density: "4.23 g/cm³", appearance: "Fine White Powder", features: "High Opacity, brightness, UV protection" },
    { id: 28, name: "Xanthan Gum", cat: "Excipients", stock: "25 Kg Bag", func: "Thickener", apps: "Suspensions", grade: "USP", mol: "Gum", purity: ">98%", desc: "Natural stabilizer for oral liquids.", img: "images/products/excipients/xanthan-gum.jpg" },
    { id: 29, name: "Colloidal Silicon Dioxide", cat: "Excipients", stock: "25 Kg Bag", func: "Glidant", apps: "Flow Enhancer", grade: "USP/IP", mol: "SiO₂", purity: ">99%", desc: "Improves powder flow significantly.", img: "images/products/excipients/colloidal-silicon-dioxide.jpg" },
    { id: 30, name: "Ethanol (99.9%)", cat: "Excipients", stock: "50/200 L Drum", func: "Solvent", apps: "Liquids, Sanitizers", grade: "IP/USP", mol: "C₂H₆O", purity: ">99%", desc: "High-purity volatile solvent.", img: "images/products/excipients/ethanol.jpg" },
    { id: 31, name: "Ethyl Cellulose", cat: "Excipients", stock: "25 Kg Bag", func: "Release Agent", apps: "SR Tablets", grade: "IP/USP", mol: "Polymer", purity: ">98%", desc: "Used for barrier coating and SR.", img: "images/products/excipients/ethyl-cellulose.jpg" },
    { id: 32, name: "Mannitol", cat: "Excipients", stock: "25 Kg Bag", func: "Sweetener", apps: "Chewables", grade: "USP/IP", mol: "C₆H₁₄O₆", purity: ">98%", desc: "Cooling effect and non-hygroscopic.", img: "images/products/excipients/mannitol.jpg" },
    { id: 33, name: "Methyl Paraben", cat: "Excipients", stock: "25 Kg Bag", func: "Preservative", apps: "Syrups, Creams, Lotions", grade: "Pharma Grade / USP", mol: "C₈H₈O₃ (152.15 g/mol)", purity: ">99%", desc: "A widely used antimicrobial preservative effective against bacteria and fungi.", img: "images/products/excipients/methyl-paraben.jpg" },
    { id: 34, name: "Propyl Paraben", cat: "Excipients", stock: "25 Kg Bag", func: "Preservative", apps: "Liquid & Topical Formulations", grade: "Pharma Grade / USP", mol: "C₁₀H₁₂O₃ (180.20 g/mol)", purity: ">99%", desc: "An antimicrobial preservative often used in combination with Methyl Paraben.", img: "images/products/excipients/propyl-paraben.jpg" },
    { id: 35, name: "Sodium Benzoate", cat: "Excipients", stock: "25 Kg Bag", func: "Preservative", apps: "Syrups", grade: "USP/IP", mol: "C₇H₅NaO₂", purity: ">99%", desc: "Effective antimicrobial for liquids.", img: "images/products/excipients/sodium-benzoate.jpg" },
    
    // --- COLOURS (Mapped from Excel) ---
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

    // --- FIX: Update Title, Description AND Image ---
    document.getElementById('modal-title').innerText = p.name;
    document.getElementById('modal-desc').innerText = p.desc;
    
    const modalImg = document.getElementById('modal-img');
    if (modalImg) {
        modalImg.src = p.img; // This line fixes the missing image issue
        modalImg.alt = p.name;
    }
    
    // Select the Dynamic Specs Grid
    const specsGrid = document.getElementById('specs-grid');
    let specs = [];

    // CATEGORIZE SPECS BASED ON TYPE
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
        specs.push({ label: "Origin", value: p.origin || "N/A" });
        specs.push({ label: "Min. Order", value: p.moq || "N/A" });
    }
    else if (p.cat === "Vitamins") {
        specs.push({ label: "Function", value: p.func });
        specs.push({ label: "Active Purity", value: p.purity });
        specs.push({ label: "Formula", value: p.mol });
        specs.push({ label: "Grade", value: p.grade });
    }
    else { // Specialty/Others
        specs.push({ label: "Category", value: p.cat });
        specs.push({ label: "Function", value: p.func });
        specs.push({ label: "Grade", value: p.grade });
        specs.push({ label: "Concentration", value: p.purity });
    }

    // Inject Specs into Modal
    specsGrid.innerHTML = specs.map(s => `
        <div>
            <h4 class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">${s.label}</h4>
            <p class="text-xs font-bold text-slate-800">${s.value}</p>
        </div>
    `).join('');

    // Handle Applications Tags
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

// 6. CART & CHECKOUT LOGIC
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

// 7. CHECKOUT & WHATSAPP
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

// 8. STARTUP
renderProducts(products);
