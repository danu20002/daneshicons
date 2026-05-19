const fs = require('fs');
const path = require('path');

// ─── Seeded PRNG ────────────────────────────────────────────────────────────
function mulberry32(a) {
  return function() {
    let t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(424242);
const randInt = (min, max) => Math.floor(rand() * (max - min + 1)) + min;
const pick = (arr) => arr[Math.floor(rand() * arr.length)];
const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

const baseDir = path.join(__dirname, '..', 'src', 'icons');

// ─── Scan existing icon names ──────────────────────────────────────────────
const EXISTING_NAMES = new Set();
function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) scanDir(full);
    else if (entry.name.endsWith('.jsx')) EXISTING_NAMES.add(entry.name.replace('.jsx', ''));
  }
}
scanDir(baseDir);
console.log(`Existing icons: ${EXISTING_NAMES.size}`);

// ─── WORD POOLS for name generation ────────────────────────────────────────
const PREFIXES = [
  'Aero','Aqua','Archi','Astro','Audio','Auto','Avi','Baro','Bio','Blast',
  'Bore','Brake','Bruno','Caelo','Calci','Calli','Canto','Capri','Carno','Cata',
  'Celer','Centri','Chrono','Cine','Cirro','Claro','Clino','Coelo','Colo','Combi',
  'Conso','Contra','Cosmo','Cryo','Crypt','Cyano','Cyclo','Cymo','Deco','Denso',
  'Diablo','Digi','Dilithio','Dimen','Disco','Dorso','Draco','Ducto','Duo','Dura',
  'Dynamo','Echo','Eco','Electro','Elite','Ember','Emerald','Epi','Equi','Ergo',
  'Ether','Euno','Evol','Exo','Extra','Fanto','Fasto','Ferno','Fiber','Fido',
  'Fissio','Flexo','Fluxo','Forge','Formo','Fracto','Frigo','Frono','Fulgo','Fumo',
  'Fundo','Fusio','Galvo','Gama','Gastro','Gemini','Geno','Geo','Giga','Glacio',
  'Gluco','Glypho','Grano','Grapho','Gravito','Gyro','Halo','Hapto','Helio','Hema',
  'Hemi','Hepta','Hetero','Hexa','Hiberno','Holo','Homo','Horizo','Hydro','Hyper',
  'Hypno','Icosa','Igni','Illumi','Imago','Indigo','Infra','Inka','Intero','Iono',
  'Irido','Ischo','Isomero','Iso','Jato','Joule','Jubilo','Jugo','Juncto','Juvio',
  'Kaleido','Kappa','Karyo','Kata','Kilo','Kine','Klepto','Krypto','Labyrintho',
  'Lacuno','Lamina','Lapiso','Larimo','Latexo','Lattro','Lava','Lenso','Lepto',
  'Leuco','Levo','Ligro','Limo','Liquido','Litho','Longi','Luci','Lumen','Luna',
  'Luteo','Lyso','Macro','Magnet','Magni','Malto','Manto','Marino','Marmo','Masso',
  'Materi','Mecha','Medio','Mega','Melano','Membra','Meso','Meta','Micro','Midnight',
  'Mille','Mini','Mirage','Mirro','Miso','Mito','Mobilo','Modu','Moleculo','Mono',
  'Morpho','Multi','Muro','Musculo','Myco','Nano','Narciso','Naso','Natura','Navio',
  'Nebulo','Necto','Neo','Nephro','Neuro','Neuro','Neutro','Nigro','Nimbus','Nocto',
  'Nodo','Nomo','Non','Novo','Nucleo','Nulli','Numero','Nympha','Obliq','Obsidi',
  'Occi','Octo','Odonto','Oleo','Olivo','Olympo','Ombra','Omni','Onco','Onto',
  'Onyx','Optic','Opto','Oracle','Orbi','Orchido','Orni','Ortho','Osmo','Oxo',
  'Oxy','Ozo','Pachy','Paleo','Pali','Panto','Para','Pardo','Parti','Pavo',
  'Pecto','Pedro','Pegaso','Pelvo','Penta','Peri','Perlo','Phago','Phanto','Phaso',
  'Philo','Phlebo','Phono','Photo','Phren','Phyllo','Physio','Phyto','Pico','Piezo',
  'Pigment','Pilo','Pirou','Placo','Plano','Plasma','Plasto','Platino','Pleno',
  'Plexi','Plumbo','Pluto','Pneumo','Podio','Polaris','Polpo','Poly','Pomo','Ponto',
  'Porto','Posto','Poto','Prema','Primo','Prismo','Probo','Proprio','Proto','Proximo',
  'Pseudo','Psycho','Pulmo','Pulso','Puncto','Purpura','Pusillo','Pyrrho','Pyro',
  'Quadra','Quali','Quant','Quarzo','Quasi','Quatro','Quebra','Querci','Questo',
  'Quies','Quilo','Quin','Quint','Racio','Radici','Radio','Radi','Rapido','Reacto',
  'Recti','Redox','Refle','Regio','Regula','Remo','Reno','Repso','Reso','Retro',
  'Revol','Rhizo','Rhodo','Rhyo','Rigo','Rivo','Robo','Rocci','Roto','Rubro',
  'Rufo','Rupo','Rusto','Sacro','Sagitta','Salino','Salvi','Sangui','Sapho','Sapro',
  'Sarco','Satur','Scandi','Scanno','Scapo','Scaro','Scenario','Schema','Schizo',
  'Scintil','Sclero','Scopo','Scorpi','Scoto','Scripto','Scudo','Scurro','Secco',
  'Sedimen','Segno','Seismo','Selecto','Seleno','Semi','Senso','Septi','Sequen',
  'Sereno','Sero','Sesto','Setto','Severo','Sexto','Sidero','Sigmo','Signo','Silico',
  'Simul','Sino','Sinter','Sipho','Skeleto','Skopo','Socio','Soleno','Solido',
  'Solo','Soma','Sonno','Sono','Soprano','Sorbo','Soro','Sotto','Spacio','Spano',
  'Spectro','Sphero','Sphingo','Spico','Spino','Spiral','Spiri','Spleno','Spodo',
  'Spondyl','Spumoso','Squamo','Stabili','Stagno','Stallo','Stanno','Stasi','Stato',
  'Steato','Stello','Steno','Stereo','Stibio','Stigma','Stilo','Stimulo','Stipite',
  'Stocho','Stoloni','Stomato','Stratto','Strepto','Stretto','Striato','Strido',
  'Strobilo','Strombo','Structo','Sturno','Stylo','Subli','Subtil','Sucro','Sudoro',
  'Sulfu','Summo','Sunno','Super','Supra','Surdo','Surge','Susurro','Sylvano',
  'Symbio','Synapto','Synchro','Syndesmo','Syno','Synto','Syringo','Tabula','Tacco',
  'Tachio','Tacto','Taenia','Talo','Tandem','Tango','Tanto','Tapho','Tardigrado',
  'Tarsio','Tattoo','Taure','Taxo','Techno','Tecto','Tego','Tela','Teleo','Telluro',
  'Tempera','Tendo','Tenso','Tenu','Tephro','Terbio','Termo','Terno','Terra','Tesso',
  'Testo','Tetra','Textu','Thalamo','Theco','Theo','Thermo','Thixo','Thoro','Thymo',
  'Tibio','Tigro','Tili','Timbro','Tintinn','Tipo','Tirso','Tisico','Titano',
  'Titillo','Titolo','Tocco','Toco','Tolo','Tombo','Tomo','Tondo','Tonico','Topo',
  'Torchio','Tormento','Tornado','Toro','Torre','Torsio','Torti','Tossico','Totem',
  'Tracheo','Tracto','Tragico','Trajecto','Tranquillo','Trans','Trappo','Trasfig',
  'Tratto','Trauma','Trema','Tremolo','Trepano','Triang','Tribo','Trichino','Triclo',
  'Tridente','Trifoglio','Trigon','Trilob','Trimero','Trinitro','Triplo','Trito',
  'Trittico','Triumvi','Troclea','Trofico','Trombo','Tronco','Tropico','Trullo',
  'Trunco','Trypano','Tsunam','Tubulo','Tuffo','Tumido','Tumulo','Turbido','Turbino',
  'Turchese','Turgido','Turris','Tutela','Tutore','Tweed','Tympan','Typho','Uberto',
  'Ubiqui','Ulcera','Uligino','Ulivo','Ultra','Ulula','Umbel','Umbilic','Umbra',
  'Umbro','Umidi','Umido','Unciale','Uncino','Uncto','Undato','Undoso','Unge','Uni',
  'Unito','Univoco','Urano','Urbano','Urceo','Uredo','Uretere','Urgente','Urico',
  'Urino','Uro','Urpino','Ursino','Urtice','Usignol','Usurpo','Utile','Utopia',
  'Uvulare','Vacuo','Vadoso','Vaga','Valchiria','Valgo','Valico','Vallato','Valore',
  'Valuta','Valvola','Vampiro','Vapor','Varano','Varcare','Variolo','Varro','Vasajo',
  'Vassallo','Vasto','Vate','Vectis','Vedovo','Vegeto','Veglia','Vela','Veleno',
  'Vellico','Velluto','Veloci','Veloce','Vena','Vendem','Venero','Ventaglio','Vento',
  'Ventrilo','Venusto','Verace','Verbo','Verde','Verdetto','Verdura','Verifica',
  'Verismo','Verlen','Vermiglio','Vernice','Vernile','Veronica','Versale','Verso',
  'Vertebra','Vertice','Vertigo','Veruco','Vescica','Vespa','Vespillo','Veste',
  'Vesuvio','Vetero','Vetro','Vettore','Vezzo','Viaggio','Vibrato','Vice','Vicino',
  'Victo','Vidimo','Vidro','Vietato','Vigile','Vigna','Vigore','Vile','Villico',
  'Vimine','Vincolo','Vindice','Vinile','Vino','Vinovo','Viola','Vipere','Virago',
  'Virgola','Virgulto','Virile','Virtu','Viscido','Visiera','Visione','Visivo',
  'Visore','Vista','Vistoso','Vita','Vitale','Vitello','Viticcio','Vitreo','Vittima',
  'Vittore','Vivace','Vivajo','Vivande','Viveri','Vivente','Vivido','Vizioso',
  'Vocale','Vocio','Voga','Voglia','Volano','Volatico','Volcano','Volenter','Voliera',
  'Volley','Voltaje','Voltura','Volubile','Volume','Voluto','Volutt','Vongola',
  'Vorace','Vortice','Vulcano','Vulgo','Vulnere','Vulpin','Vulva','Xanto','Xenico',
  'Xenofilo','Xenotim','Xerico','Xerofilo','Xerogra','Xilino','Xilofago','Xilofono',
  'Xilogra','Xiphoide','Xolo','Yacht','Yankee','Yard','Yawn','Year','Yeast',
  'Yellow','Yen','Yep','Yodel','Yoga','Yogurt','Yoyo','Yttrium','Yummy','Zaffiro',
  'Zagro','Zambello','Zampino','Zampogna','Zanella','Zanna','Zanzara','Zappino',
  'Zappone','Zar','Zebra','Zefiro','Zelante','Zelo','Zenit','Zeo','Zerbino',
  'Zero','Zigzag','Zimo','Zinco','Zinnia','Zinzino','Zippo','Zircone','Zirlo',
  'Zittino','Zizzolo','Zoccolo','Zodiaco','Zolfo','Zombi','Zona','Zond','Zonzo',
  'Zoologia','Zoppico','Zotico','Zucchero','Zuffa','Zufolo','Zulù','Zuppa','Zurigo',
];

const SUFFIXES = [
  'Arc','Arrow','Art','Atom','Aura','Axel','Axis','Badge','Band','Bar',
  'Base','Basin','Batch','Baton','Beacon','Beam','Bear','Beast','Bell','Belt',
  'Bend','Blade','Blaze','Block','Bloom','Blossom','Bolt','Bond','Bone','Boost',
  'Border','Bounce','Box','Brace','Braid','Branch','Brand','Braid','Breach','Bread',
  'Breeze','Brick','Bridge','Bright','Brim','Brink','Bristle','Broad','Bronze',
  'Brush','Bubble','Buck','Bud','Buffer','Build','Bulb','Bulge','Bullet','Bumper',
  'Burst','Bush','Butter','Button','Buzz','Byte','Cable','Cage','Cake','Camber',
  'Camel','Cameo','Camp','Canal','Candle','Cane','Cannon','Canoe','Canopy','Canyon',
  'Cap','Cape','Capri','Captain','Carbon','Card','Cargo','Carnival','Carpet',
  'Carrier','Cart','Cascade','Case','Cask','Cast','Caster','Castle','Catch',
  'Cater','Cattle','Cauldron','Cave','Cavity','Cedar','Cell','Cement','Center',
  'Chain','Chair','Chamber','Champ','Chance','Change','Channel','Chaos','Chapter',
  'Charge','Charm','Chart','Charter','Chase','Chasm','Check','Checkout','Chest',
  'Chew','Chill','Chime','Chip','Chord','Chrome','Chunk','Circuit','Citadel',
  'Claim','Clamp','Clasp','Class','Clause','Claw','Clay','Clean','Clear','Clerk',
  'Click','Cliff','Climb','Clip','Clock','Clone','Close','Cloud','Clover','Club',
  'Clutch','Coast','Coat','Cobalt','Cobra','Cocoon','Code','Cog','Coil','Coin',
  'Cold','Collar','Colony','Column','Comb','Comet','Comfort','Command','Comment',
  'Compact','Compass','Complex','Compost','Compound','Compute','Concept','Conch',
  'Concrete','Condor','Cone','Config','Connect','Console','Contact','Contour',
  'Convoy','Cookie','Copper','Coral','Cord','Core','Cork','Corner','Corona',
  'Corps','Corridor','Cortex','Costume','Cotton','Couch','Count','Counter','Couple',
  'Coupon','Course','Court','Cousin','Cove','Cover','Crack','Cradle','Craft',
  'Crane','Crank','Crash','Crate','Crater','Crawl','Crayon','Cream','Create',
  'Credit','Creek','Crest','Crew','Cricket','Crime','Crisis','Crisp','Critic',
  'Crook','Crop','Cross','Crowd','Crown','Crucible','Cruise','Crumb','Crunch',
  'Crusade','Crust','Crystal','Cube','Cubicle','Cuff','Cult','Cup','Curb',
  'Cure','Curio','Current','Curtain','Curve','Cushion','Custard','Custom','Cut',
  'Cycle','Cylinder','Cymbal','Dagger','Dale','Dam','Dance','Dart','Dash',
  'Data','Dawn','Day','Deal','Debris','Debug','Decade','Decay','Deck','Decode',
  'Decorate','Decoy','Decree','Deduce','Deed','Deep','Deer','Defect','Defend',
  'Deficit','Degree','Deity','Delay','Delight','Deliver','Delta','Demand','Demise',
  'Demure','Denial','Density','Dent','Depart','Depend','Depict','Deploy','Depot',
  'Depth','Deputy','Derby','Derive','Descend','Desert','Design','Desire','Desk',
  'Despair','Despot','Destiny','Destroy','Detach','Detail','Detect','Device',
  'Devil','Devise','Devote','Dew','Dexter','Dial','Diamond','Diary','Dice',
  'Die','Diet','Digest','Digit','Dignity','Dilemma','Dilute','Dime','Dimple',
  'Dine','Dino','Dip','Diploma','Director','Dirge','Dirt','Disarm','Disc',
  'Disco','Dish','Disk','Dispatch','Display','Dispute','Distill','District',
  'Ditch','Dive','Diver','Divide','Dock','Doctor','Doctrine','Document','Dodge',
  'Dodo','Dojo','Dolce','Dole','Doll','Dollar','Dome','Dominion','Donor','Doom',
  'Door','Dope','Dorm','Dose','Dot','Double','Doubt','Dove','Dowel','Down',
  'Dozen','Draft','Dragon','Drain','Drake','Drama','Drape','Draw','Drawer',
  'Dream','Dress','Drier','Drift','Drill','Drink','Drip','Drive','Drone',
  'Drop','Drove','Drum','Dryad','Dual','Dub','Duck','Duct','Due','Duet',
  'Duke','Dull','Dummy','Dump','Dune','Dungeon','Duo','Duplex','Duplicate',
  'Dura','Dusk','Dust','Duty','Dwarf','Dwell','Dye','Dynamo','Eagle','Ear',
  'Earth','Ease','Easel','East','Echo','Eclipse','Edge','Edict','Edition',
  'Editor','Educate','Effect','Effort','Egg','Ego','Eject','Elastic','Elbow',
  'Elder','Elect','Elegance','Element','Elevate','Elf','Elite','Elixir','Elm',
  'Elope','Elude','Ember','Emblem','Embrace','Emerald','Emit','Emotion','Empire',
  'Employ','Empty','Enable','Enact','Enamel','Enchant','Enclave','Encode','End',
  'Endure','Enemy','Energy','Enforce','Engage','Engine','Engrave','Enhance',
  'Enigma','Enlist','Enrich','Enroll','Ensemble','Ensure','Enter','Entire',
  'Entity','Entrance','Entry','Envelope','Episode','Equal','Equator','Equinox',
  'Equip','Equity','Era','Eraser','Erect','Erosion','Error','Erupt','Escape',
  'Essay','Essence','Estate','Eternal','Ether','Ethics','Event','Everest',
  'Evidence','Evil','Evoke','Evolution','Exact','Exalt','Examine','Exceed',
  'Excel','Except','Excerpt','Excess','Exchange','Excise','Excite','Exclaim',
  'Exclude','Excuse','Execute','Exempt','Exercise','Exert','Exhaust','Exhibit',
  'Exile','Exist','Exit','Exodus','Exotic','Expand','Expect','Expel','Expense',
  'Expert','Expire','Explain','Explore','Export','Expose','Extend','Extent',
  'Exterior','Extract','Extreme','Exult','Eye','Fable','Fabric','Face','Fact',
  'Fade','Fairy','Faith','Fake','Falcon','Fall','Fame','Fan','Fancy','Fang',
  'Fantasy','Farce','Fare','Farm','Fascinate','Fashion','Fast','Fate','Father',
  'Fault','Favor','Feast','Feat','Feature','Federation','Feed','Feel','Feline',
  'Fellow','Felt','Fence','Fender','Fennel','Ferment','Fern','Ferry','Festival',
  'Fetch','Fever','Fiber','Fiction','Fiddle','Field','Fiend','Fierce','Fiesta',
  'Fifth','Fight','Figure','File','Film','Filter','Final','Finance','Find',
  'Fine','Finger','Finish','Finite','Fire','Firm','First','Fish','Fist','Fit',
  'Five','Fix','Fixture','Flag','Flair','Flamingo','Flange','Flank','Flap',
  'Flare','Flash','Flask','Flat','Flavor','Fleece','Fleet','Flesh','Flex',
  'Flick','Flight','Fling','Float','Flock','Flood','Floor','Flora','Floret',
  'Flour','Flow','Flower','Fluid','Flush','Flute','Flux','Fly','Focus','Fog',
  'Foil','Fold','Foliage','Force','Forest','Forever','Forge','Fork','Form',
  'Fort','Fortune','Forum','Fossil','Foster','Fountain','Fowl','Fox','Frame',
  'Fray','Freeze','Freight','Frenzy','Fresco','Friction','Friday','Fridge',
  'Friend','Frigate','Fright','Fringe','Frog','Front','Frost','Frown','Frozen',
  'Fruit','Fuel','Fugue','Full','Fume','Fun','Function','Fund','Funeral',
  'Fungus','Funny','Fur','Fury','Fuse','Fusion','Fuss','Future','Gadget',
  'Gain','Galaxy','Gale','Gallant','Gallery','Gallon','Gallop','Gamble','Game',
  'Gang','Gap','Garage','Garb','Garden','Garland','Garment','Garnet','Garrison',
  'Gas','Gate','Gather','Gauge','Gear','Gecko','Gem','Gender','General','Genesis',
  'Genius','Genre','Gentle','Genuine','Geo','Germ','Gesture','Get','Geyser',
  'Ghost','Giant','Gift','Gig','Gild','Gill','Gimbal','Gimmick','Gin','Ginger',
  'Giraffe','Girder','Girdle','Girl','Gist','Give','Glacier','Glade','Gland',
  'Glare','Glass','Gleam','Glen','Glide','Glimpse','Glint','Glitch','Globe',
  'Gloom','Glory','Gloss','Glove','Glow','Glue','Gnome','Goal','Goat','Goblet',
  'God','Golden','Golf','Gondola','Gong','Good','Goose','Gorge','Gospel','Gossip',
  'Govern','Gown','Grab','Grace','Grade','Grain','Gram','Grand','Grant','Graph',
  'Grasp','Grass','Grate','Grave','Gravity','Graze','Grease','Great','Greed',
  'Green','Greet','Grid','Grief','Grill','Grim','Grind','Grip','Grit','Grocery',
  'Groove','Gross','Ground','Group','Grove','Growl','Growth','Grudge','Grunge',
  'Guard','Guess','Guest','Guide','Guild','Guilt','Guitar','Gulf','Gulp','Gum',
  'Gun','Gush','Gust','Gut','Gutter','Gym','Habit','Habitat','Hail','Hair',
  'Halt','Hammer','Hamper','Hand','Handle','Hang','Happen','Harbor','Hard',
  'Harem','Harp','Harsh','Harvest','Haste','Hat','Hatch','Hate','Haul','Haunt',
  'Haven','Havoc','Hawk','Hay','Hazard','Haze','Hazel','Head','Heal','Health',
  'Heap','Hear','Heart','Hearth','Heat','Heath','Heaven','Heavy','Hedge','Heel',
  'Height','Heir','Helix','Hell','Helm','Helmet','Help','Hem','Hemp','Hen',
  'Herd','Here','Hero','Hest','Hex','Hidden','Hide','High','Highway','Hike',
  'Hill','Hilt','Hinge','Hint','Hip','Hire','Hiss','History','Hit','Hive',
  'Hobby','Hog','Hold','Hole','Hollow','Home','Honey','Honor','Hood','Hook',
  'Hoop','Hop','Hope','Horizon','Horn','Horror','Horse','Hostel','Hot','Hotel',
  'Hour','House','Hover','Hub','Huddle','Hull','Human','Humble','Humor','Hump',
  'Hunger','Hunt','Hurdle','Hurl','Hurricane','Hurry','Hurt','Hush','Hut',
  'Hybrid','Hydrant','Hydro','Hymn','Hyphen','Ice','Icon','Idea','Idle','Idol',
  'Ignite','Ignore','Illusion','Image','Imagine','Impact','Impale','Import',
  'Impose','Imprint','Improve','Impulse','Index','Indigo','Indoor','Induce',
  'Industry','Inert','Infant','Inferno','Infinite','Influx','Inform','Infra',
  'Ingot','Inhabit','Inhale','Inherit','Ink','Inlay','Inlet','Inner','Input',
  'Inquiry','Insect','Insert','Inside','Insight','Insignia','Insist','Inspect',
  'Inspire','Install','Instant','Instinct','Insulin','Insult','Integer','Intel',
  'Intent','Inter','Intimate','Intrigue','Intro','Intrude','Intuit','Invade',
  'Invent','Inverse','Invest','Invite','Invoke','Iodine','Ion','Iris','Iron',
  'Island','Isle','Isolate','Issue','Item','Ivory','Ivy','Jacket','Jade',
  'Jaguar','Jail','Jam','Jar','Jaw','Jazz','Jeans','Jeep','Jelly','Jet',
  'Jewel','Jigsaw','Jingle','Job','Jock','Jog','Join','Joint','Joke','Jolt',
  'Journal','Journey','Joy','Judge','Juice','Junction','June','Jungle','Junior',
  'Junk','Jupiter','Juror','Justice','Jut','Juvenile','Kale','Kangaroo','Karma',
  'Kayak','Kazoo','Kebab','Keen','Keep','Kelp','Kettle','Key','Keystone','Kick',
  'Kid','Kidney','Kindle','King','Kiss','Kit','Kitchen','Kite','Kitten','Kiwi',
  'Knee','Knife','Knight','Knit','Knob','Knot','Know','Knuckle','Koi','Kroner',
  'Label','Lab','Lace','Lack','Ladder','Ladle','Lady','Lagoon','Lake','Lamb',
  'Lame','Lamp','Land','Lane','Language','Lantern','Lap','Lapse','Laptop',
  'Large','Lark','Laser','Latch','Late','Lathe','Latitude','Lattice','Launch',
  'Laundry','Lava','Lavender','Law','Lawn','Layer','Layout','Lazy','Lead',
  'Leaf','League','Leak','Lean','Leap','Lease','Leash','Leather','Leave','Lecture',
  'Ledger','Leech','Leek','Left','Leg','Legacy','Legal','Legend','Legion',
  'Legume','Leisure','Lemon','Lend','Length','Lens','Leopard','Lesson','Letter',
  'Level','Lever','Lexicon','Liability','Liana','Liberty','Library','License',
  'Lid','Life','Lift','Light','Like','Lilac','Lily','Limb','Lime','Limit',
  'Limp','Line','Linen','Liner','Linger','Link','Lint','Lion','Lip','Liquid',
  'Liquor','List','Listen','Literal','Litter','Little','Live','Lizard','Load',
  'Loaf','Loan','Lobby','Lobe','Local','Lock','Lodge','Loft','Log','Logic',
  'Logo','Lone','Long','Look','Loop','Loose','Loot','Lop','Lord','Lore',
  'Lose','Loss','Lot','Lotion','Lotus','Loud','Lounge','Love','Low','Loyal',
  'Luck','Luggage','Lull','Lumber','Lumen','Lump','Lunar','Lunch','Lung',
  'Lure','Lurk','Lush','Lust','Lustre','Luxury','Lynx','Lyric','Macro','Madam',
  'Magazine','Magic','Magnet','Magnify','Maid','Mail','Main','Maine','Majesty',
  'Major','Make','Mall','Malt','Mammal','Manage','Mandate','Mane','Mango',
  'Mansion','Mantle','Manual','Maple','Marble','March','Margin','Marine','Mark',
  'Market','Marmalade','Marquee','Marshal','Marsh','Mart','Mascot','Mask','Mason',
  'Mass','Mast','Master','Mat','Match','Mate','Material','Math','Matrix','Matter',
  'Mattress','Mature','Meadow','Meal','Mean','Measure','Meat','Mechanic','Medal',
  'Media','Medicine','Meditate','Medium','Meek','Meet','Mellow','Melody','Melon',
  'Melt','Member','Membrane','Memento','Memo','Memory','Mend','Mental','Mention',
  'Mentor','Menu','Merchant','Mercury','Mercy','Merge','Merit','Merry','Mesh',
  'Mess','Message','Metal','Meteor','Meter','Method','Metro','Mew','Mica',
  'Microbe','Midday','Middle','Midst','Might','Mile','Milk','Mill','Mimic',
  'Mind','Mine','Mineral','Mingle','Mini','Minion','Minister','Minor','Mint',
  'Minute','Miracle','Mirror','Mirth','Missile','Mist','Mister','Mix','Mobile',
  'Mock','Mode','Model','Modem','Modern','Module','Moist','Mold','Molecule',
  'Moment','Monarch','Monday','Money','Monk','Monkey','Monopoly','Monster',
  'Month','Monument','Mood','Moon','Moor','Moose','Mop','Moral','Morbid','More',
  'Morning','Mortal','Mosaic','Mosque','Moss','Most','Moth','Mother','Motion',
  'Motor','Motto','Mound','Mount','Mourn','Mouse','Mouth','Move','Movie','Mow',
  'Much','Mud','Muffin','Mug','Mulch','Mule','Multi','Mum','Mummy','Munch',
  'Murder','Murmur','Muscle','Museum','Mushroom','Music','Musk','Mustard',
  'Muster','Mutation','Mute','Mutt','Mutter','Muzzle','Myriad','Mystery','Myth',
  'Nail','Naked','Name','Nanny','Nap','Napkin','Narrative','Narrow','Nation',
  'Native','Nature','Nausea','Naval','Navel','Navigate','Navy','Near','Neat',
  'Necklace','Need','Needle','Negate','Neighbor','Neon','Nephew','Nerve','Nest',
  'Net','Network','Neuron','Neutral','Never','New','Newt','Next','Nice',
  'Nickel','Niece','Night','Nimble','Nine','Nip','Nitro','Node','Noise',
  'Nomad','Noodle','Noon','Nor','Norm','North','Nose','Notch','Note','Notice',
  'Notion','Noun','Novel','November','Now','Nucleus','Nudge','Number','Nun',
  'Nurse','Nut','Nylon','Oasis','Oath','Obelisk','Obey','Object','Oblige',
  'Oblique','Obtain','Occupy','Ocean','Ocelot','October','Octopus','Odd','Odor',
  'Offend','Offense','Offer','Office','Official','Offset','Offspring','Often',
  'Oil','Old','Olive','Olympic','Omelet','Omen','Omit','Once','One','Onion',
  'Online','Only','Onset','Onus','Onyx','Open','Opera','Opinion','Opium',
  'Oppose','Opt','Optical','Optimize','Option','Orbit','Orchard','Orchestra',
  'Order','Ore','Organ','Orient','Origin','Ornament','Orphan','Oscillate',
  'Osmosis','Other','Otter','Ounce','Outbreak','Outcome','Outdoor','Outer',
  'Outlet','Outline','Output','Outset','Outskirts','Outwit','Oval','Oven',
  'Overlap','Overt','Overture','Owl','Own','Oxide','Oxygen','Oyster','Ozone',
  'Pace','Pacific','Pack','Packet','Pact','Pad','Paddle','Page','Pain','Paint',
  'Pair','Palace','Palate','Palm','Pan','Pancake','Panda','Panel','Panic',
  'Panther','Pantry','Paper','Parachute','Parade','Paradise','Paragraph','Parallel',
  'Parasol','Parcel','Pardon','Parent','Parfait','Parish','Park','Parliament',
  'Parrot','Parsley','Part','Partner','Party','Pass','Passage','Passion','Paste',
  'Pastor','Pastry','Patch','Patent','Path','Patience','Patient','Patrol',
  'Patron','Pattern','Pause','Pave','Pavilion','Paw','Pawn','Pay','Pea','Peace',
  'Peach','Peacock','Peak','Peanut','Pear','Pearl','Peasant','Pebble','Peck',
  'Pedal','Pedestal','Pedigree','Peel','Peer','Peg','Pelican','Pellet','Pelt',
  'Pen','Penalty','Pencil','Pending','Penguin','Peninsula','Penny','Pepper',
  'Perch','Perfect','Perfume','Peril','Period','Perish','Permit','Person','Petal',
  'Petition','Petrol','Pew','Phantom','Pharmacy','Phase','Pheasant','Phone',
  'Photon','Phrase','Physical','Piano','Pick','Pickle','Picnic','Picture','Pie',
  'Piece','Pier','Pierce','Pigeon','Pigment','Pile','Pill','Pillar','Pillow',
  'Pilot','Pin','Pinch','Pine','Pineapple','Pink','Pint','Pioneer','Pipe',
  'Pirate','Piston','Pit','Pitch','Pivot','Pixel','Pizza','Place','Plague',
  'Plain','Plan','Plane','Planet','Plank','Plant','Plasma','Plaster','Plastic',
  'Plate','Platform','Platinum','Platter','Play','Plea','Pleasant','Pledge',
  'Plenty','Plier','Plot','Plow','Pluck','Plug','Plum','Plumber','Plume',
  'Plump','Plunge','Plural','Plus','Plush','Pluto','Pocket','Poem','Poet',
  'Point','Poison','Polar','Pole','Policy','Polio','Pollen','Polymer','Pond',
  'Pony','Pool','Pop','Popcorn','Pope','Popular','Porch','Porcupine','Port',
  'Porter','Portfolio','Portion','Portrait','Pose','Position','Post','Potato',
  'Potential','Potion','Pouch','Poultry','Pound','Pour','Poverty','Powder',
  'Power','Practice','Prairie','Praise','Prawn','Pray','Preach','Precious',
  'Precipice','Precision','Prefer','Prefix','Pregnancy','Premier','Premium',
  'Prepare','Prescribe','Present','Preserve','Press','Pressure','Prestige',
  'Pretend','Pretty','Prevail','Prevent','Preview','Price','Pride','Priest',
  'Primary','Prince','Princess','Principal','Principle','Print','Printer','Prior',
  'Prism','Prison','Privacy','Prize','Probe','Problem','Proceed','Process',
  'Proclaim','Produce','Product','Profile','Profit','Program','Project','Prologue',
  'Promise','Promo','Promote','Prompt','Prone','Proof','Prop','Propeller',
  'Property','Prophet','Proposal','Prose','Prospect','Protect','Protein','Protest',
  'Protocol','Proud','Prove','Proverb','Provide','Province','Provision','Prowl',
  'Proxy','Prune','Psalm','Pseudo','Pubic','Public','Puck','Puff','Pulse',
  'Pump','Punch','Puncture','Pupil','Puppet','Puppy','Purchase','Pure','Purple',
  'Purpose','Purse','Pursue','Pursuit','Push','Puzzle','Pyramid','Python',
  'Quaint','Qualify','Quality','Quanta','Quarry','Quarter','Quartz','Quasar',
  'Quaver','Queen','Query','Quest','Question','Queue','Quick','Quiet','Quill',
  'Quilt','Quintet','Quip','Quirk','Quit','Quite','Quiver','Quiz','Quota',
  'Quote','Rabbit','Raccoon','Race','Rack','Radar','Radial','Radian','Radish',
  'Radius','Radix','Raft','Rag','Rage','Raid','Rail','Rain','Raise','Rake',
  'Ramble','Ramp','Ranch','Random','Range','Ranger','Rank','Ransom','Rapid',
  'Rare','Rascal','Rash','Rasp','Rat','Rate','Ratio','Rattle','Raven','Ravine',
  'Raw','Rayon','Razor','React','Read','Ready','Realm','Reap','Rear','Reason',
  'Rebate','Rebel','Reboot','Recall','Receipt','Receive','Recent','Recess',
  'Recipe','Recruit','Rectify','Recycle','Red','Reduce','Reed','Reel','Refer',
  'Refine','Reflect','Reform','Refuge','Refund','Refuse','Region','Register',
  'Regret','Regular','Reign','Reject','Relate','Relax','Release','Relic','Relief',
  'Reluctant','Remain','Remark','Remedy','Remind','Remote','Remove','Render',
  'Rent','Repair','Repeat','Replace','Report','Republic','Request','Require',
  'Rescue','Research','Reserve','Reside','Resign','Resist','Resolve','Resort',
  'Resource','Respond','Rest','Restore','Result','Resume','Retail','Retain',
  'Retire','Retreat','Return','Reunion','Reveal','Revenge','Revenue','Reverse',
  'Review','Revise','Revive','Revolt','Reward','Rhapsody','Rheum','Rhino',
  'Rhyme','Rhythm','Ribbon','Rice','Rich','Riddle','Ride','Ridge','Rifle',
  'Rigid','Rim','Ring','Rinse','Riot','Rip','Ripple','Rise','Risk','Rite',
  'Ritual','Rival','River','Rivet','Roach','Road','Roam','Roar','Roast','Robe',
  'Robin','Robot','Rocket','Rocky','Rodent','Role','Roll','Roof','Room','Roost',
  'Root','Rope','Rose','Rosin','Rotate','Rough','Round','Route','Rover','Row',
  'Royal','Rubber','Rubble','Ruby','Rudder','Rugby','Ruin','Rule','Ruler',
  'Rumor','Run','Rune','Rung','Rush','Rust','Rustic','Rye','Saber','Sable',
  'Sack','Sacred','Sad','Saddle','Safe','Safari','Saga','Sage','Sail','Saint',
  'Salad','Salary','Sale','Salmon','Salon','Salt','Salute','Salvage','Sample',
  'Sanctum','Sand','Sandwich','Sane','Sapphire','Sarcasm','Satchel','Satellite',
  'Satin','Satire','Satisfy','Sauce','Saucer','Savanna','Save','Savior','Savor',
  'Savvy','Saw','Scale','Scan','Scandal','Scar','Scare','Scarf','Scene','Scent',
  'Schedule','Scheme','Scholar','School','Science','Scissor','Sconce','Scope',
  'Score','Scorn','Scout','Scramble','Scrap','Scratch','Screen','Screw','Script',
  'Scroll','Scrub','Scuba','Sculpt','Scythe','Sea','Seal','Seam','Search',
  'Season','Seat','Second','Secret','Section','Secure','Sedge','Seed','Seek',
  'Segment','Select','Self','Sell','Senate','Send','Senior','Sense','Sentence',
  'Separate','Sequence','Serene','Serial','Series','Serpent','Service','Session',
  'Set','Settle','Setup','Seven','Severe','Sewer','Shadow','Shaft','Shake',
  'Shall','Shallow','Shame','Shape','Share','Shark','Sharp','Shave','Shear',
  'Shed','Sheep','Sheet','Shelf','Shell','Shelter','Sheriff','Shield','Shift',
  'Shine','Ship','Shirt','Shock','Shoe','Shoot','Shop','Shore','Short','Shot',
  'Shoulder','Shovel','Show','Shower','Shrimp','Shrine','Shrink','Shrub',
  'Shuffle','Shutdown','Sibling','Sick','Side','Siesta','Sight','Sign','Signal',
  'Silence','Silk','Silly','Silver','Simple','Sin','Since','Sincere','Sing',
  'Singer','Single','Sink','Sinner','Sip','Sir','Siren','Sister','Sit','Site',
  'Situation','Six','Size','Skate','Skeleton','Sketch','Skill','Skin','Skip',
  'Skirt','Skull','Skunk','Sky','Slab','Slack','Slash','Slate','Slave','Sled',
  'Sleep','Sleeve','Slice','Slide','Slime','Sling','Slip','Slit','Slope',
  'Slot','Slow','Slug','Slump','Small','Smart','Smash','Smell','Smile','Smog',
  'Smoke','Snack','Snail','Snake','Snap','Snare','Sniff','Snip','Snob','Snooze',
  'Snore','Snow','Snug','Soak','Soap','Sober','Soccer','Social','Sock','Soda',
  'Sofa','Soft','Soil','Solar','Soldier','Solid','Solve','Somber','Sonar',
  'Song','Sonic','Soother','Soothe','Sorbet','Soul','Sound','Soup','Source',
  'South','Space','Spade','Span','Spark','Sparrow','Spatial','Speak','Spear',
  'Spec','Special','Species','Specific','Speech','Speed','Spell','Spend','Sphere',
  'Spice','Spider','Spike','Spill','Spin','Spine','Spiral','Spirit','Splash',
  'Spleen','Splice','Splint','Split','Spoil','Spoke','Sponge','Spoon','Sport',
  'Spot','Spray','Spread','Spring','Sprout','Spruce','Spy','Square','Squash',
  'Squeak','Squeeze','Squid','Squirrel','Stable','Stack','Stadium','Staff',
  'Stage','Stain','Stair','Stake','Stale','Stalk','Stall','Stamp','Stand',
  'Staple','Star','Stare','Start','Starve','State','Static','Station','Statue',
  'Status','Stay','Steady','Steak','Steal','Steam','Steel','Steep','Steer',
  'Stem','Step','Stereotype','Sterling','Stew','Stick','Stiff','Still','Sting',
  'Stir','Stitch','Stock','Stocking','Stomach','Stone','Stool','Stop','Storage',
  'Store','Storm','Story','Stove','Strain','Strand','Strange','Stranger','Strap',
  'Straw','Stream','Street','Strength','Stress','Stretch','Strike','String',
  'Strip','Stripe','Stroke','Strong','Structure','Struggle','Student','Studio',
  'Study','Stuff','Stump','Stun','Stunt','Sturdy','Style','Subject','Submit',
  'Subtle','Suburb','Subway','Succeed','Success','Succumb','Suck','Sudden',
  'Suffer','Sugar','Suggest','Suit','Summer','Summit','Summon','Sun','Superb',
  'Supper','Supply','Support','Suppose','Supreme','Surface','Surge','Surgeon',
  'Surplus','Surprise','Surreal','Survey','Survive','Suspect','Suspend','Sustain',
  'Swallow','Swamp','Swan','Swap','Swarm','Swear','Sweat','Sweep','Sweet','Swell',
  'Swift','Swim','Swing','Swirl','Switch','Sword','Syllable','Symbol','Symmetry',
  'Sympathy','Symphony','Symptom','Synapse','Sync','Syndicate','Syndrome','Synergy',
  'Syntax','System','Table','Tablet','Tackle','Tact','Tactics','Tag','Tail',
  'Tailor','Take','Tale','Talent','Talk','Tall','Tally','Talon','Tame','Tandem',
  'Tangle','Tank','Tap','Tape','Target','Tariff','Tarmac','Task','Taste','Tattoo',
  'Tavern','Taxi','Tea','Teach','Team','Tear','Tectonic','Teddy','Teen','Teeth',
  'Telegram','Telescope','Television','Tell','Temper','Temple','Tempo','Tenant',
  'Tend','Tender','Tennis','Tension','Tent','Term','Terminal','Terra','Terrain',
  'Territory','Terror','Test','Text','Texture','Thank','Theater','Theme','Theory',
  'Therapy','Thermal','Thicket','Thief','Thin','Thing','Think','Third','Thirst',
  'Thirteen','Thorn','Thorough','Thought','Thousand','Thread','Threat','Three',
  'Thresh','Threshold','Thrill','Throat','Throne','Throttle','Through','Throw',
  'Thrust','Thumb','Thunder','Ticket','Tide','Tiger','Tight','Tile','Till',
  'Tilt','Timber','Time','Timing','Tin','Tiny','Tip','Tire','Tissue','Title',
  'Toast','Tobacco','Today','Toe','Together','Toilet','Token','Tolerance','Toll',
  'Tomato','Tomb','Tomorrow','Tone','Tongue','Tonight','Tool','Tooth','Topaz',
  'Topic','Torch','Tornado','Torque','Torrent','Torso','Tortoise','Toss','Total',
  'Touch','Tough','Tour','Tourist','Toward','Towel','Tower','Town','Toxic',
  'Toy','Trace','Track','Trade','Tradition','Traffic','Tragedy','Trail','Train',
  'Trait','Tram','Trampoline','Trance','Transfer','Transform','Transit','Translator',
  'Transmit','Trap','Trash','Travel','Tray','Treasure','Treat','Treaty','Tree',
  'Trek','Tremble','Tremor','Trench','Trend','Trial','Triangle','Tribe','Tribute',
  'Trick','Trigger','Trill','Trim','Trinket','Trip','Triple','Triumph','Trojan',
  'Trophy','Tropic','Trot','Trouble','Trout','Truck','True','Truly','Trumpet',
  'Trunk','Trust','Truth','Try','Tub','Tube','Tuck','Tuesday','Tug','Tuition',
  'Tulip','Tumble','Tumor','Tuna','Tune','Tunnel','Turbo','Turkey','Turn',
  'Turtle','Tusk','Tutor','Tutorial','Tuxedo','Twelve','Twenty','Twice','Twig',
  'Twilight','Twin','Twine','Twinkle','Twist','Type','Typist','Tyrant','Ultra',
  'Umbrella','Unable','Uncle','Uncover','Under','Undo','Unfair','Unfold','Unhappy',
  'Uniform','Union','Unique','Unit','United','Unity','Universal','Universe',
  'Unknown','Unleash','Unlock','Unusual','Unveil','Update','Upgrade','Uphold',
  'Uplift','Upon','Upper','Upright','Uproar','Upset','Urban','Urge','Urgent',
  'Urn','Usage','Use','Utility','Utilize','Utmost','Utopia','Utter','Vacant',
  'Vacation','Vaccine','Vacuum','Vagabond','Vague','Valiant','Valid','Valley',
  'Valuable','Value','Valve','Vampire','Van','Vandal','Vane','Vanish','Vanity',
  'Vapor','Variable','Variety','Various','Varnish','Vary','Vase','Vast','Vault',
  'Vector','Vegetable','Vehicle','Veil','Vein','Velocity','Velvet','Vendor',
  'Veneer','Venture','Venue','Verb','Verdict','Verdure','Verge','Verify','Vermin',
  'Verse','Version','Vertebra','Vertex','Vertical','Vessel','Vest','Veteran',
  'Veto','Vex','Via','Viable','Vibrant','Vibration','Vice','Victim','Victor',
  'Video','View','Vigil','Vigorous','Village','Villain','Vine','Vintage','Vinyl',
  'Violent','Violet','Violin','Viper','Viral','Virgin','Virtual','Virtue',
  'Virus','Visa','Viscous','Vision','Visit','Vista','Visual','Vital','Vitamin',
  'Vivid','Vocal','Vocation','Voice','Void','Volcano','Volley','Volume','Volunteer',
  'Vortex','Vote','Vouch','Vow','Vowel','Voyage','Vulcan','Vulture','Wad',
  'Wade','Waffle','Wage','Wagon','Waist','Wait','Waiver','Wake','Walk','Wall',
  'Wallet','Walnut','Waltz','Wander','Want','War','Ward','Warm','Warn','Warp',
  'Warrant','Warrior','Wart','Wary','Wash','Wasp','Waste','Watch','Water','Wave',
  'Wax','Way','Wealth','Weapon','Wear','Weasel','Weather','Weave','Web','Wedding',
  'Weed','Week','Weekend','Weight','Weird','Welcome','Weld','Welfare','Well',
  'West','Wet','Whale','Wheat','Wheel','Whip','Whirl','Whisper','Whistle',
  'White','Whole','Why','Wick','Wide','Width','Wield','Wife','Wild','Will',
  'Willing','Wilt','Win','Wind','Window','Wine','Wing','Wink','Winner','Winter',
  'Wire','Wisdom','Wise','Wish','Wisp','Wit','Witch','Witness','Wizard','Wolf',
  'Wonder','Wood','Wool','Word','Work','World','Worm','Worry','Worship','Wound',
  'Woven','Wrap','Wrath','Wreck','Wrench','Wrist','Write','Wrong','Xenon',
  'Xerox','Xylophone','Yacht','Yard','Yarn','Year','Yeast','Yellow','Yield',
  'Yoga','Yogurt','Yoke','Young','Youth','Zebra','Zenith','Zero','Zest','Zigzag',
  'Zinc','Zip','Zone','Zoo','Zoom',
];

// Generate all unique name combos and shuffle
const ALL_NAMES = shuffle(
  PREFIXES.flatMap(p => SUFFIXES.map(s => p + s))
).filter(n => !EXISTING_NAMES.has(n));

console.log(`Available unique names: ${ALL_NAMES.length}`);

// ─── SVG PATH GENERATORS ───────────────────────────────────────────────────
function generatePolygon(sides) {
  const cx = 12, cy = 12, r = 8 + rand() * 2;
  const rot = rand() * Math.PI * 2;
  const pts = [];
  for (let i = 0; i < sides; i++) {
    const angle = rot + (i / sides) * Math.PI * 2;
    pts.push([cx + r * Math.cos(angle), cy + r * Math.sin(angle)]);
  }
  // Close the polygon
  const d = pts.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${pt[0].toFixed(2)} ${pt[1].toFixed(2)}`).join(' ') + ' Z';
  return [['path', { d }]];
}

function generateStar(points) {
  const cx = 12, cy = 12, rOuter = 9 + rand() * 2, rInner = 3 + rand() * 3;
  const rot = rand() * Math.PI * 2;
  const pts = [];
  for (let i = 0; i < points * 2; i++) {
    const angle = rot + (i / (points * 2)) * Math.PI * 2;
    const r = i % 2 === 0 ? rOuter : rInner;
    pts.push([cx + r * Math.cos(angle), cy + r * Math.sin(angle)]);
  }
  const d = pts.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${pt[0].toFixed(2)} ${pt[1].toFixed(2)}`).join(' ') + ' Z';
  return [['path', { d }]];
}

function generateSpiral() {
  const turns = 2 + randInt(1, 4);
  const cx = 12, cy = 12;
  const maxR = 9 + rand() * 2;
  const segments = turns * 24;
  const pts = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const angle = t * turns * Math.PI * 2;
    const r = maxR * t;
    pts.push([cx + r * Math.cos(angle), cy + r * Math.sin(angle)]);
  }
  const d = pts.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${pt[0].toFixed(2)} ${pt[1].toFixed(2)}`).join(' ');
  return [['path', { d }]];
}

function generateConcentricCircles(count) {
  const cx = 12, cy = 12;
  const paths = [];
  for (let i = 0; i < count; i++) {
    const r = (2 + i * (8 / count)) + rand() * 0.5;
    const dash = rand() > 0.6 ? ` ${randInt(2, 6)} ${randInt(1, 3)}` : '';
    const attrs = { d: `M ${(cx - r).toFixed(2)} ${cy.toFixed(2)} a ${r.toFixed(2)} ${r.toFixed(2)} 0 1 0 ${(r * 2).toFixed(2)} 0 a ${r.toFixed(2)} ${r.toFixed(2)} 0 1 0 ${(-r * 2).toFixed(2)} 0` };
    if (dash && rand() > 0.5) attrs['stroke-dasharray'] = dash.trim();
    paths.push(['path', attrs]);
  }
  return paths;
}

function generateWeave() {
  const paths = [];
  const count = 3 + randInt(0, 3);
  for (let i = 0; i < count; i++) {
    const x1 = 2 + rand() * 8;
    const y1 = 2 + rand() * 8;
    const x2 = 14 + rand() * 8;
    const y2 = 14 + rand() * 8;
    const cx1 = 4 + rand() * 16;
    const cy1 = 4 + rand() * 16;
    const cx2 = 4 + rand() * 16;
    const cy2 = 4 + rand() * 16;
    paths.push(['path', {
      d: `M ${x1.toFixed(2)} ${y1.toFixed(2)} C ${cx1.toFixed(2)} ${cy1.toFixed(2)}, ${cx2.toFixed(2)} ${cy2.toFixed(2)}, ${x2.toFixed(2)} ${y2.toFixed(2)}`
    }]);
  }
  return paths;
}

function generateGrid() {
  const paths = [];
  const size = 3 + randInt(1, 3);
  const gap = 16 / size;
  const offset = (24 - gap * size) / 2;
  const style = randInt(0, 3);
  if (style === 0) {
    // Vertical lines
    for (let i = 0; i <= size; i++) {
      const x = offset + i * gap;
      paths.push(['path', { d: `M ${x.toFixed(2)} ${offset.toFixed(2)} L ${x.toFixed(2)} ${(offset + gap * size).toFixed(2)}` }]);
    }
    // Horizontal lines
    for (let i = 0; i <= size; i++) {
      const y = offset + i * gap;
      paths.push(['path', { d: `M ${offset.toFixed(2)} ${y.toFixed(2)} L ${(offset + gap * size).toFixed(2)} ${y.toFixed(2)}` }]);
    }
  } else if (style === 1) {
    // Diagonal grid
    for (let i = -size; i <= size; i++) {
      const p = offset + i * gap;
      paths.push(['path', { d: `M ${p.toFixed(2)} ${offset.toFixed(2)} L ${(offset + gap * size).toFixed(2)} ${(p + gap * size).toFixed(2)}` }]);
    }
    for (let i = -size; i <= size; i++) {
      const p = offset + i * gap;
      paths.push(['path', { d: `M ${p.toFixed(2)} ${(offset + gap * size).toFixed(2)} L ${(offset + gap * size).toFixed(2)} ${p.toFixed(2)}` }]);
    }
  } else {
    // Dots grid
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const x = offset + i * gap + gap / 2;
        const y = offset + j * gap + gap / 2;
        const r = 0.3 + rand() * 0.8;
        paths.push(['circle', { cx: x.toFixed(2), cy: y.toFixed(2), r: r.toFixed(2) }]);
      }
    }
  }
  return paths;
}

function generateWave() {
  const paths = [];
  const amplitude = 3 + rand() * 4;
  const frequency = 1 + randInt(1, 3);
  const count = 1 + randInt(0, 2);
  for (let w = 0; w < count; w++) {
    const yOffset = 6 + w * 6 + rand() * 2;
    const pts = [];
    const segments = 40;
    for (let i = 0; i <= segments; i++) {
      const x = 2 + (i / segments) * 20;
      const y = yOffset + amplitude * Math.sin((i / segments) * frequency * Math.PI * 2 + (w * rand()));
      pts.push([x, y]);
    }
    const d = pts.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${pt[0].toFixed(2)} ${pt[1].toFixed(2)}`).join(' ');
    paths.push(['path', { d }]);
  }
  return paths;
}

function generateMaze() {
  const paths = [];
  const size = 4 + randInt(0, 3);
  const cellSize = 18 / size;
  const offset = (24 - cellSize * size) / 2;
  // Generate random horizontal and vertical walls
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const x = offset + i * cellSize;
      const y = offset + j * cellSize;
      if (rand() > 0.5 && i < size - 1) {
        // Right wall
        if (rand() > 0.3) {
          paths.push(['path', { d: `M ${(x + cellSize).toFixed(2)} ${y.toFixed(2)} L ${(x + cellSize).toFixed(2)} ${(y + cellSize).toFixed(2)}` }]);
        }
      }
      if (rand() > 0.5 && j < size - 1) {
        // Bottom wall
        if (rand() > 0.3) {
          paths.push(['path', { d: `M ${x.toFixed(2)} ${(y + cellSize).toFixed(2)} L ${(x + cellSize).toFixed(2)} ${(y + cellSize).toFixed(2)}` }]);
        }
      }
    }
  }
  // Add outer border
  paths.push(['path', { d: `M ${offset.toFixed(2)} ${offset.toFixed(2)} L ${(offset + cellSize * size).toFixed(2)} ${offset.toFixed(2)} L ${(offset + cellSize * size).toFixed(2)} ${(offset + cellSize * size).toFixed(2)} L ${offset.toFixed(2)} ${(offset + cellSize * size).toFixed(2)} Z` }]);
  return paths;
}

function generateSymmetric() {
  const paths = [];
  const type = randInt(0, 3);
  const cx = 12, cy = 12;

  if (type === 0) {
    // Mandala-like symmetric petals
    const petalCount = 4 + randInt(0, 4) * 2;
    const rOuter = 8 + rand() * 2;
    const rInner = 2 + rand() * 3;
    for (let i = 0; i < petalCount; i++) {
      const angle = (i / petalCount) * Math.PI * 2;
      const nextAngle = ((i + 1) / petalCount) * Math.PI * 2;
      const x1 = cx + rOuter * Math.cos(angle);
      const y1 = cy + rOuter * Math.sin(angle);
      const x2 = cx + rInner * Math.cos(angle + (nextAngle - angle) / 2);
      const y2 = cy + rInner * Math.sin(angle + (nextAngle - angle) / 2);
      const x3 = cx + rOuter * Math.cos(nextAngle);
      const y3 = cy + rOuter * Math.sin(nextAngle);
      paths.push(['path', {
        d: `M ${x1.toFixed(2)} ${y1.toFixed(2)} Q ${x2.toFixed(2)} ${y2.toFixed(2)} ${x3.toFixed(2)} ${y3.toFixed(2)}`
      }]);
    }
  } else if (type === 1) {
    // Cross-like symmetric
    const armLen = 6 + rand() * 3;
    const armW = 1.5 + rand() * 2;
    // Horizontal
    paths.push(['path', { d: `M ${(cx - armLen).toFixed(2)} ${cy.toFixed(2)} L ${(cx + armLen).toFixed(2)} ${cy.toFixed(2)}` }]);
    // Vertical
    paths.push(['path', { d: `M ${cx.toFixed(2)} ${(cy - armLen).toFixed(2)} L ${cx.toFixed(2)} ${(cy + armLen).toFixed(2)}` }]);
    // Diagonals (sometimes)
    if (rand() > 0.5) {
      const dLen = armLen * 0.7;
      paths.push(['path', { d: `M ${(cx - dLen).toFixed(2)} ${(cy - dLen).toFixed(2)} L ${(cx + dLen).toFixed(2)} ${(cy + dLen).toFixed(2)}` }]);
      paths.push(['path', { d: `M ${(cx - dLen).toFixed(2)} ${(cy + dLen).toFixed(2)} L ${(cx + dLen).toFixed(2)} ${(cy - dLen).toFixed(2)}` }]);
    }
    // Outer ring
    const rr = 9 + rand() * 2;
    paths.push(['path', { d: `M ${(cx - rr).toFixed(2)} ${cy.toFixed(2)} a ${rr.toFixed(2)} ${rr.toFixed(2)} 0 1 0 ${(rr * 2).toFixed(2)} 0 a ${rr.toFixed(2)} ${rr.toFixed(2)} 0 1 0 ${(-rr * 2).toFixed(2)} 0` }]);
  } else {
    // Rotational symmetry
    const copies = 3 + randInt(0, 3);
    const baseX = 6 + rand() * 6;
    const baseY = 6 + rand() * 6;
    for (let i = 0; i < copies; i++) {
      const angle = (i / copies) * Math.PI * 2;
      const cosA = Math.cos(angle), sinA = Math.sin(angle);
      const rx = cx + (baseX - cx) * cosA - (baseY - cy) * sinA;
      const ry = cy + (baseX - cx) * sinA + (baseY - cy) * cosA;
      const endX = cx + (baseX + 4 - cx) * cosA - (baseY - cy) * sinA;
      const endY = cy + (baseX + 4 - cx) * sinA + (baseY - cy) * cosA;
      paths.push(['path', { d: `M ${rx.toFixed(2)} ${ry.toFixed(2)} L ${endX.toFixed(2)} ${endY.toFixed(2)}` }]);
    }
  }
  return paths;
}

function generateAbstract() {
  const paths = [];
  const numPaths = 2 + randInt(0, 4);
  for (let i = 0; i < numPaths; i++) {
    const type = randInt(0, 4);
    if (type === 0) {
      // Line
      const x1 = 2 + rand() * 20;
      const y1 = 2 + rand() * 20;
      const x2 = 2 + rand() * 20;
      const y2 = 2 + rand() * 20;
      paths.push(['path', { d: `M ${x1.toFixed(2)} ${y1.toFixed(2)} L ${x2.toFixed(2)} ${y2.toFixed(2)}` }]);
    } else if (type === 1) {
      // Quadratic bezier
      const x1 = 2 + rand() * 20;
      const y1 = 2 + rand() * 20;
      const cx = 2 + rand() * 20;
      const cy = 2 + rand() * 20;
      const x2 = 2 + rand() * 20;
      const y2 = 2 + rand() * 20;
      paths.push(['path', { d: `M ${x1.toFixed(2)} ${y1.toFixed(2)} Q ${cx.toFixed(2)} ${cy.toFixed(2)} ${x2.toFixed(2)} ${y2.toFixed(2)}` }]);
    } else if (type === 2) {
      // Cubic bezier
      const x1 = 2 + rand() * 20;
      const y1 = 2 + rand() * 20;
      const cx1 = 2 + rand() * 20;
      const cy1 = 2 + rand() * 20;
      const cx2 = 2 + rand() * 20;
      const cy2 = 2 + rand() * 20;
      const x2 = 2 + rand() * 20;
      const y2 = 2 + rand() * 20;
      paths.push(['path', { d: `M ${x1.toFixed(2)} ${y1.toFixed(2)} C ${cx1.toFixed(2)} ${cy1.toFixed(2)}, ${cx2.toFixed(2)} ${cy2.toFixed(2)}, ${x2.toFixed(2)} ${y2.toFixed(2)}` }]);
    } else if (type === 3) {
      // Arc
      const x1 = 2 + rand() * 20;
      const y1 = 2 + rand() * 20;
      const rx = 2 + rand() * 5;
      const ry = 2 + rand() * 5;
      const rot = randInt(0, 180);
      const sweep = rand() > 0.5 ? 1 : 0;
      const x2 = 2 + rand() * 20;
      const y2 = 2 + rand() * 20;
      paths.push(['path', { d: `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${rx.toFixed(2)} ${ry.toFixed(2)} ${rot} 0 ${sweep} ${x2.toFixed(2)} ${y2.toFixed(2)}` }]);
    } else {
      // Zigzag
      const pts = [];
      const count = 3 + randInt(0, 5);
      for (let j = 0; j < count; j++) {
        pts.push([2 + rand() * 20, 2 + rand() * 20]);
      }
      const d = pts.map((pt, j) => `${j === 0 ? 'M' : 'L'} ${pt[0].toFixed(2)} ${pt[1].toFixed(2)}`).join(' ');
      paths.push(['path', { d }]);
    }
  }
  return paths;
}

function generateGeometric() {
  const paths = [];
  const type = randInt(0, 6);

  if (type === 0) {
    // Hexagon grid tile
    const r = 4;
    for (let row = -1; row <= 1; row++) {
      for (let col = -1; col <= 1; col++) {
        const cx = 12 + col * r * 1.732;
        const cy = 12 + row * r * 1.5 + (col % 2 !== 0 ? r * 0.75 : 0);
        if (cx < 0 || cx > 24 || cy < 0 || cy > 24) continue;
        const pts = [];
        for (let i = 0; i < 6; i++) {
          const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
          pts.push([cx + r * Math.cos(angle), cy + r * Math.sin(angle)]);
        }
        const d = pts.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${pt[0].toFixed(2)} ${pt[1].toFixed(2)}`).join(' ') + ' Z';
        paths.push(['path', { d }]);
      }
    }
  } else if (type === 1) {
    // Diamond
    const cx = 12, cy = 12;
    const h = 7 + rand() * 3, w = 5 + rand() * 3;
    paths.push(['path', { d: `M ${cx.toFixed(2)} ${(cy - h).toFixed(2)} L ${(cx + w).toFixed(2)} ${cy.toFixed(2)} L ${cx.toFixed(2)} ${(cy + h).toFixed(2)} L ${(cx - w).toFixed(2)} ${cy.toFixed(2)} Z` }]);
  } else if (type === 2) {
    // Nested polygons
    const cx = 12, cy = 12;
    const layers = 2 + randInt(0, 2);
    const sides = 3 + randInt(0, 3);
    for (let l = 0; l < layers; l++) {
      const r = 9 - l * 3 + rand() * 0.5;
      const rot = l * 0.3 + rand() * 0.2;
      const pts = [];
      for (let i = 0; i < sides; i++) {
        const angle = rot + (i / sides) * Math.PI * 2;
        pts.push([cx + r * Math.cos(angle), cy + r * Math.sin(angle)]);
      }
      const d = pts.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${pt[0].toFixed(2)} ${pt[1].toFixed(2)}`).join(' ') + ' Z';
      paths.push(['path', { d }]);
    }
  } else if (type === 3) {
    // Arrow-like
    const cx = 12, cy = 12;
    const len = 7 + rand() * 4;
    const head = 3 + rand() * 2;
    // Shaft
    paths.push(['path', { d: `M ${(cx - len / 2).toFixed(2)} ${cy.toFixed(2)} L ${(cx + len / 2).toFixed(2)} ${cy.toFixed(2)}` }]);
    // Head
    const dx = rand() > 0.5 ? 1 : -1;
    if (dx > 0) {
      paths.push(['path', { d: `M ${(cx + len / 2).toFixed(2)} ${cy.toFixed(2)} L ${(cx + len / 2 - head).toFixed(2)} ${(cy - head * 0.6).toFixed(2)}` }]);
      paths.push(['path', { d: `M ${(cx + len / 2).toFixed(2)} ${cy.toFixed(2)} L ${(cx + len / 2 - head).toFixed(2)} ${(cy + head * 0.6).toFixed(2)}` }]);
    } else {
      paths.push(['path', { d: `M ${(cx - len / 2).toFixed(2)} ${cy.toFixed(2)} L ${(cx - len / 2 + head).toFixed(2)} ${(cy - head * 0.6).toFixed(2)}` }]);
      paths.push(['path', { d: `M ${(cx - len / 2).toFixed(2)} ${cy.toFixed(2)} L ${(cx - len / 2 + head).toFixed(2)} ${(cy + head * 0.6).toFixed(2)}` }]);
    }
  } else if (type === 4) {
    // Connected network
    const nodes = [];
    const nodeCount = 3 + randInt(0, 3);
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({ x: 3 + rand() * 18, y: 3 + rand() * 18 });
    }
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (rand() > 0.4) {
          paths.push(['path', { d: `M ${nodes[i].x.toFixed(2)} ${nodes[i].y.toFixed(2)} L ${nodes[j].x.toFixed(2)} ${nodes[j].y.toFixed(2)}` }]);
        }
      }
    }
    // Add nodes as circles
    for (const n of nodes) {
      paths.push(['circle', { cx: n.x.toFixed(2), cy: n.y.toFixed(2), r: '1.5' }]);
    }
  } else {
    // Rounded path flow
    const pts = [];
    const count = 4 + randInt(0, 4);
    for (let i = 0; i < count; i++) {
      pts.push([3 + rand() * 18, 3 + rand() * 18]);
    }
    // Sort by angle around center
    pts.sort((a, b) => Math.atan2(a[1] - 12, a[0] - 12) - Math.atan2(b[1] - 12, b[0] - 12));
    const d = pts.map((pt, i) => {
      const prev = pts[(i - 1 + pts.length) % pts.length];
      const midX = (prev[0] + pt[0]) / 2;
      const midY = (prev[1] + pt[1]) / 2;
      return `${i === 0 ? 'M' : 'Q'} ${midX.toFixed(2)} ${midY.toFixed(2)} ${pt[0].toFixed(2)} ${pt[1].toFixed(2)}`;
    }).join(' ') + ' Z';
    paths.push(['path', { d }]);
  }

  return paths;
}

function generateConnectingDots() {
  const paths = [];
  const count = 4 + randInt(0, 4);
  const pts = [];
  for (let i = 0; i < count; i++) {
    pts.push({ x: 2 + rand() * 20, y: 2 + rand() * 20 });
  }
  // Connect in sequence
  const d = pts.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${pt.x.toFixed(2)} ${pt.y.toFixed(2)}`).join(' ');
  paths.push(['path', { d }]);
  // Add circles at points
  for (const pt of pts) {
    const r = 0.5 + rand() * 1;
    paths.push(['circle', { cx: pt.x.toFixed(2), cy: pt.y.toFixed(2), r: r.toFixed(2) }]);
  }
  return paths;
}

function generateScribble() {
  const paths = [];
  const count = 1 + randInt(0, 2);
  for (let w = 0; w < count; w++) {
    const pts = [];
    const segments = 15 + randInt(0, 20);
    let x = 3 + rand() * 18;
    let y = 3 + rand() * 18;
    pts.push([x, y]);
    for (let i = 0; i < segments; i++) {
      x += (rand() - 0.5) * 6;
      y += (rand() - 0.5) * 6;
      x = Math.max(1, Math.min(23, x));
      y = Math.max(1, Math.min(23, y));
      pts.push([x, y]);
    }
    const d = pts.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${pt[0].toFixed(2)} ${pt[1].toFixed(2)}`).join(' ');
    paths.push(['path', { d }]);
  }
  return paths;
}

function generateGlobe() {
  const cx = 12, cy = 12;
  const paths = [];
  const r = 8 + rand() * 2;
  // Outer circle
  paths.push(['path', { d: `M ${(cx - r).toFixed(2)} ${cy.toFixed(2)} a ${r.toFixed(2)} ${r.toFixed(2)} 0 1 0 ${(r * 2).toFixed(2)} 0 a ${r.toFixed(2)} ${r.toFixed(2)} 0 1 0 ${(-r * 2).toFixed(2)} 0` }]);
  // Lat lines
  const latCount = 1 + randInt(0, 3);
  for (let i = 0; i < latCount; i++) {
    const latY = cy - r + (i + 1) * (r * 2) / (latCount + 1);
    const latR = Math.sqrt(r * r - (latY - cy) * (latY - cy));
    if (latR > 0.5) {
      paths.push(['path', { d: `M ${(cx - latR).toFixed(2)} ${latY.toFixed(2)} a ${latR.toFixed(2)} ${latR * 0.3.toFixed(2)} 0 1 0 ${(latR * 2).toFixed(2)} 0 a ${latR.toFixed(2)} ${latR * 0.3.toFixed(2)} 0 1 0 ${(-latR * 2).toFixed(2)} 0` }]);
    }
  }
  // Lon lines
  const lonCount = 1 + randInt(0, 2);
  for (let i = 0; i < lonCount; i++) {
    const angle = ((i + 1) / (lonCount + 1)) * Math.PI;
    const lonR = r * Math.sin(angle);
    const offset = r * Math.cos(angle);
    paths.push(['path', { d: `M ${(cx + offset).toFixed(2)} ${(cy - lonR).toFixed(2)} A 2 2 0 0 0 ${(cx + offset).toFixed(2)} ${(cy + lonR).toFixed(2)}` }]);
    paths.push(['path', { d: `M ${(cx + offset).toFixed(2)} ${(cy - lonR).toFixed(2)} A 2 2 0 0 1 ${(cx + offset).toFixed(2)} ${(cy + lonR).toFixed(2)}` }]);
  }
  return paths;
}

function generateBox3D() {
  const paths = [];
  const cx = 12, cy = 12;
  const w = 7 + rand() * 2;
  const h = 5 + rand() * 2;
  const d = 3 + rand() * 2;
  // Front face
  paths.push(['path', { d: `M ${(cx - w).toFixed(2)} ${(cy - h).toFixed(2)} L ${(cx + w).toFixed(2)} ${(cy - h).toFixed(2)} L ${(cx + w).toFixed(2)} ${(cy + h).toFixed(2)} L ${(cx - w).toFixed(2)} ${(cy + h).toFixed(2)} Z` }]);
  // Top face
  paths.push(['path', { d: `M ${(cx - w).toFixed(2)} ${(cy - h).toFixed(2)} L ${(cx - w + d).toFixed(2)} ${(cy - h - d).toFixed(2)} L ${(cx + w + d).toFixed(2)} ${(cy - h - d).toFixed(2)} L ${(cx + w).toFixed(2)} ${(cy - h).toFixed(2)}` }]);
  // Right face
  paths.push(['path', { d: `M ${(cx + w).toFixed(2)} ${(cy - h).toFixed(2)} L ${(cx + w + d).toFixed(2)} ${(cy - h - d).toFixed(2)} L ${(cx + w + d).toFixed(2)} ${(cy + h - d).toFixed(2)} L ${(cx + w).toFixed(2)} ${(cy + h).toFixed(2)}` }]);
  return paths;
}

function generateRing() {
  const paths = [];
  const cx = 12, cy = 12;
  const r = 7 + rand() * 2;
  const t = 1.5 + rand() * 1.5;
  const rInner = r - t;
  // Outer ring
  paths.push(['path', { d: `M ${(cx - r).toFixed(2)} ${cy.toFixed(2)} a ${r.toFixed(2)} ${r.toFixed(2)} 0 1 0 ${(r * 2).toFixed(2)} 0 a ${r.toFixed(2)} ${r.toFixed(2)} 0 1 0 ${(-r * 2).toFixed(2)} 0` }]);
  // Inner ring (opposite direction for cutout effect)
  paths.push(['path', { d: `M ${(cx - rInner).toFixed(2)} ${cy.toFixed(2)} a ${rInner.toFixed(2)} ${rInner.toFixed(2)} 0 1 1 ${(rInner * 2).toFixed(2)} 0 a ${rInner.toFixed(2)} ${rInner.toFixed(2)} 0 1 1 ${(-rInner * 2).toFixed(2)} 0` }]);
  // Add ticks around ring
  const tickCount = 6 + randInt(0, 6);
  for (let i = 0; i < tickCount; i++) {
    const angle = (i / tickCount) * Math.PI * 2;
    const x1 = cx + (r - 0.5) * Math.cos(angle);
    const y1 = cy + (r - 0.5) * Math.sin(angle);
    const x2 = cx + (r + 1.5) * Math.cos(angle);
    const y2 = cy + (r + 1.5) * Math.sin(angle);
    paths.push(['path', { d: `M ${x1.toFixed(2)} ${y1.toFixed(2)} L ${x2.toFixed(2)} ${y2.toFixed(2)}` }]);
  }
  return paths;
}

// ─── GENERATORS POOL ────────────────────────────────────────────────────────
const GENERATORS = [
  () => generatePolygon(3 + randInt(0, 5)),
  () => generatePolygon(3 + randInt(0, 5)),
  () => generatePolygon(5 + randInt(0, 4)),
  () => generateStar(4 + randInt(0, 4)),
  () => generateStar(3 + randInt(0, 3)),
  () => generateSpiral(),
  () => generateConcentricCircles(2 + randInt(0, 3)),
  () => generateWeave(),
  () => generateGrid(),
  () => generateWave(),
  () => generateMaze(),
  () => generateSymmetric(),
  () => generateAbstract(),
  () => generateGeometric(),
  () => generateConnectingDots(),
  () => generateScribble(),
  () => generateGlobe(),
  () => generateBox3D(),
  () => generateRing(),
];

// ─── CATEGORIES ─────────────────────────────────────────────────────────────
const EXISTING_CATEGORIES = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const NEW_CATEGORIES = [];
for (const c1 of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
  for (const c2 of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
    NEW_CATEGORIES.push(c1 + c2);
  }
}
const ALL_CATEGORIES = [...EXISTING_CATEGORIES, ...NEW_CATEGORIES, 'Y'];

// ─── GENERATE ICONS ─────────────────────────────────────────────────────────
const TARGET = 10000;
const batchSize = 100;

const indexExports = [];

// Collect existing exports
function scanIndexExports() {
  const indexPath = path.join(__dirname, '..', 'src', 'index.js');
  if (fs.existsSync(indexPath)) {
    const lines = fs.readFileSync(indexPath, 'utf8').split('\n').filter(l => l.startsWith('export'));
    for (const line of lines) indexExports.push(line);
  }
}
scanIndexExports();

let generated = 0;
let catIdx = 0;

for (let batch = 0; batch < Math.ceil(TARGET / batchSize); batch++) {
  const start = batch * batchSize;
  const end = Math.min(start + batchSize, TARGET);

  for (let i = start; i < end; i++) {
    if (i >= ALL_NAMES.length) {
      console.log('Ran out of unique names!');
      break;
    }

    const name = ALL_NAMES[i];

    // Pick a generator
    const generator = GENERATORS[i % GENERATORS.length];
    const nodes = generator();

    // Remove duplicates within the same icon
    const seen = new Set();
    const uniqueNodes = [];
    for (const node of nodes) {
      const key = JSON.stringify(node[1]);
      if (!seen.has(key)) {
        seen.add(key);
        uniqueNodes.push(node);
      }
    }

    // Category
    const category = ALL_CATEGORIES[catIdx % ALL_CATEGORIES.length];
    catIdx++;

    // Ensure category dir exists
    const catDir = path.join(baseDir, category);
    if (!fs.existsSync(catDir)) fs.mkdirSync(catDir, { recursive: true });

    // Format paths for JSX
    const formattedPaths = uniqueNodes.map(([tag, attrs]) => {
      const attrStr = Object.entries(attrs).map(([k, v]) => `${k}="${v}"`).join(' ');
      return `      <${tag} ${attrStr} />`;
    }).join('\n');

    const iconData = {
      id: name,
      name,
      category,
      nodes: uniqueNodes,
    };

    const fileContent = `import React from 'react';

export const iconData = ${JSON.stringify(iconData, null, 2)};

export const ${name} = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
${formattedPaths}
      {children}
    </svg>
  );
});

export default ${name};
`;

    fs.writeFileSync(path.join(catDir, `${name}.jsx`), fileContent);
    indexExports.push(`export { default as ${name} } from './icons/${category}/${name}.jsx';`);
    generated++;
  }

  console.log(`Generated ${generated} / ${Math.min(TARGET, ALL_NAMES.length)} icons (batch ${batch + 1})`);
}

// ─── WRITE INDEX ────────────────────────────────────────────────────────────
const indexPath = path.join(__dirname, '..', 'src', 'index.js');
// Sort the exports alphabetically
indexExports.sort((a, b) => {
  const nameA = a.match(/as (\w+)/)?.[1] || '';
  const nameB = b.match(/as (\w+)/)?.[1] || '';
  return nameA.localeCompare(nameB);
});
fs.writeFileSync(indexPath, indexExports.join('\n') + '\n');
console.log(`\nWritten src/index.js with ${indexExports.length} exports.`);

// ─── COUNT FINAL ────────────────────────────────────────────────────────────
let finalCount = 0;
scanDir(baseDir);
console.log(`Final icon count: ${EXISTING_NAMES.size}`);
