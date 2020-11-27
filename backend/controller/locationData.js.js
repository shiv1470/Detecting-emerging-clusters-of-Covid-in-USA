const locations = [
  {
    Location: "34.3424135138,-104.411957888",
    CountyGeoId: 35011,
    NAME: "De Baca County",
  },
  {
    Location: "18.1875265182,-65.8693174115",
    CountyGeoId: 72085,
    NAME: "Las Piedras Municipio",
  },
  {
    Location: "35.8598655553,-92.1567129536",
    CountyGeoId: "05137",
    NAME: "Stone County",
  },
  {
    Location: "38.0805527548,-106.281555562",
    CountyGeoId: "08109",
    NAME: "Saguache County",
  },
  {
    Location: "30.6184688458,-86.1715163089",
    CountyGeoId: 12131,
    NAME: "Walton County",
  },
  {
    Location: "35.5424444709,-97.9824010419",
    CountyGeoId: 40017,
    NAME: "Canadian County",
  },
  {
    Location: "40.4037747348,-91.1646955496",
    CountyGeoId: 17067,
    NAME: "Hancock County",
  },
  {
    Location: "42.3911118186,-96.564513018",
    CountyGeoId: 31043,
    NAME: "Dakota County",
  },
  {
    Location: "38.291547316,-84.5839338937",
    CountyGeoId: 21209,
    NAME: "Scott County",
  },
  {
    Location: "37.9991525438,-101.791256465",
    CountyGeoId: 20075,
    NAME: "Hamilton County",
  },
  {
    Location: "41.8881456263,-74.2585695251",
    CountyGeoId: 36111,
    NAME: "Ulster County",
  },
  {
    Location: "45.4190045389,-119.584275031",
    CountyGeoId: 41049,
    NAME: "Morrow County",
  },
  {
    Location: "33.5827978515,-85.0797630545",
    CountyGeoId: 13045,
    NAME: "Carroll County",
  },
  {
    Location: "45.8138937581,-109.941013899",
    CountyGeoId: 30097,
    NAME: "Sweet Grass County",
  },
  {
    Location: "37.4127561973,-88.5616201146",
    CountyGeoId: 17151,
    NAME: "Pope County",
  },
  {
    Location: "41.0317620678,-91.9488728782",
    CountyGeoId: 19101,
    NAME: "Jefferson County",
  },
  {
    Location: "36.3920428566,-86.1567527604",
    CountyGeoId: 47169,
    NAME: "Trousdale County",
  },
  {
    Location: "42.4321558891,-122.728517877",
    CountyGeoId: 41029,
    NAME: "Jackson County",
  },
  {
    Location: "38.0674165811,-78.9013542096",
    CountyGeoId: 51820,
    NAME: "Waynesboro city",
  },
  {
    Location: "40.3469033297,-87.3533144839",
    CountyGeoId: 18171,
    NAME: "Warren County",
  },
  {
    Location: "28.8475696914,-82.5201067311",
    CountyGeoId: 12017,
    NAME: "Citrus County",
  },
  {
    Location: "38.3642764332,-86.8798021177",
    CountyGeoId: 18037,
    NAME: "Dubois County",
  },
  {
    Location: "36.835513749,-94.810429621",
    CountyGeoId: 40115,
    NAME: "Ottawa County",
  },
  {
    Location: "41.0001918546,-78.4741251099",
    CountyGeoId: 42033,
    NAME: "Clearfield County",
  },
  {
    Location: "40.5244687103,-98.5012089617",
    CountyGeoId: 31001,
    NAME: "Adams County",
  },
  {
    Location: "40.6598994131,-74.3081414246",
    CountyGeoId: 34039,
    NAME: "Union County",
  },
  {
    Location: "30.6851516211,-88.1975233535",
    CountyGeoId: "01097",
    NAME: "Mobile County",
  },
  {
    Location: "37.2641094188,-85.5531056748",
    CountyGeoId: 21087,
    NAME: "Green County",
  },
  {
    Location: "46.2086670875,-88.5305528694",
    CountyGeoId: 26071,
    NAME: "Iron County",
  },
  {
    Location: "33.1768244406,-101.816123837",
    CountyGeoId: 48305,
    NAME: "Lynn County",
  },
  {
    Location: "35.0175290075,-79.237290715",
    CountyGeoId: 37093,
    NAME: "Hoke County",
  },
  {
    Location: "40.1763469163,-101.042272426",
    CountyGeoId: 31087,
    NAME: "Hitchcock County",
  },
  {
    Location: "37.5947979696,-83.7162777687",
    CountyGeoId: 21129,
    NAME: "Lee County",
  },
  {
    Location: "38.4021560325,-108.269451135",
    CountyGeoId: "08085",
    NAME: "Montrose County",
  },
  {
    Location: "37.2779522735,-105.428249706",
    CountyGeoId: "08023",
    NAME: "Costilla County",
  },
  {
    Location: "32.346971275,-84.7870462059",
    CountyGeoId: 13053,
    NAME: "Chattahoochee County",
  },
  {
    Location: "46.8106825848,-102.65508878",
    CountyGeoId: 38089,
    NAME: "Stark County",
  },
  {
    Location: "33.2334606021,-98.1724585828",
    CountyGeoId: 48237,
    NAME: "Jack County",
  },
  {
    Location: "41.0933920308,-89.7974473885",
    CountyGeoId: 17175,
    NAME: "Stark County",
  },
  {
    Location: "37.6846796381,-104.960584534",
    CountyGeoId: "08055",
    NAME: "Huerfano County",
  },
  {
    Location: "28.9057389627,-97.8594018287",
    CountyGeoId: 48255,
    NAME: "Karnes County",
  },
  {
    Location: "36.7152338187,-95.9043661801",
    CountyGeoId: 40147,
    NAME: "Washington County",
  },
  {
    Location: "39.0075029241,-78.8579227191",
    CountyGeoId: 54031,
    NAME: "Hardy County",
  },
  {
    Location: "34.2898117968,-81.6001198539",
    CountyGeoId: 45071,
    NAME: "Newberry County",
  },
  {
    Location: "41.3021937169,-80.2577062656",
    CountyGeoId: 42085,
    NAME: "Mercer County",
  },
  {
    Location: "38.0874875679,-88.1795748823",
    CountyGeoId: 17193,
    NAME: "White County",
  },
  {
    Location: "44.4096825746,-92.7229029989",
    CountyGeoId: 27049,
    NAME: "Goodhue County",
  },
  {
    Location: "28.3067419076,-82.438869799",
    CountyGeoId: 12101,
    NAME: "Pasco County",
  },
  {
    Location: "39.3170652967,-78.614168492",
    CountyGeoId: 54027,
    NAME: "Hampshire County",
  },
  {
    Location: "31.9131719625,-89.9194880948",
    CountyGeoId: 28127,
    NAME: "Simpson County",
  },
  {
    Location: "39.3128100483,-86.8376542268",
    CountyGeoId: 18119,
    NAME: "Owen County",
  },
  {
    Location: "37.3785013178,-81.653583786",
    CountyGeoId: 54047,
    NAME: "McDowell County",
  },
  {
    Location: "39.2835296916,-80.3798749895",
    CountyGeoId: 54033,
    NAME: "Harrison County",
  },
  {
    Location: "42.9145713002,-96.9756376237",
    CountyGeoId: 46027,
    NAME: "Clay County",
  },
  {
    Location: "33.9879970441,-98.7035507511",
    CountyGeoId: 48485,
    NAME: "Wichita County",
  },
  {
    Location: "47.3079544484,-111.347045865",
    CountyGeoId: 30013,
    NAME: "Cascade County",
  },
  {
    Location: "37.1923179509,-101.312046958",
    CountyGeoId: 20189,
    NAME: "Stevens County",
  },
  {
    Location: "35.2399169268,-87.7880131637",
    CountyGeoId: 47181,
    NAME: "Wayne County",
  },
  {
    Location: "37.3151524068,-79.5241721318",
    CountyGeoId: 51019,
    NAME: "Bedford County",
  },
  {
    Location: "42.2532253491,-83.83877051",
    CountyGeoId: 26161,
    NAME: "Washtenaw County",
  },
  {
    Location: "38.4603650792,-91.8618379561",
    CountyGeoId: 29151,
    NAME: "Osage County",
  },
  {
    Location: "41.6715248584,-91.5881018852",
    CountyGeoId: 19103,
    NAME: "Johnson County",
  },
  {
    Location: "36.7580732628,-84.145177727",
    CountyGeoId: 21235,
    NAME: "Whitley County",
  },
  {
    Location: "33.6041424405,-102.828435632",
    CountyGeoId: 48079,
    NAME: "Cochran County",
  },
  {
    Location: "47.8692071189,-120.618973477",
    CountyGeoId: 53007,
    NAME: "Chelan County",
  },
  {
    Location: "18.1252645849,-65.4323048679",
    CountyGeoId: 72147,
    NAME: "Vieques Municipio",
  },
  {
    Location: "38.292414567,-86.4517083941",
    CountyGeoId: 18025,
    NAME: "Crawford County",
  },
  {
    Location: "18.4578316549,-65.9025233046",
    CountyGeoId: 72087,
    NAME: "Loíza Municipio",
  },
  {
    Location: "34.5387970384,-93.6595529416",
    CountyGeoId: "05097",
    NAME: "Montgomery County",
  },
  {
    Location: "36.2778878907,-102.60218562",
    CountyGeoId: 48111,
    NAME: "Dallam County",
  },
  {
    Location: "35.9503879058,-84.9983515819",
    CountyGeoId: 47035,
    NAME: "Cumberland County",
  },
  {
    Location: "45.0214343278,-84.5989931681",
    CountyGeoId: 26137,
    NAME: "Otsego County",
  },
  {
    Location: "29.9855183221,-83.1810673054",
    CountyGeoId: 12067,
    NAME: "Lafayette County",
  },
  {
    Location: "36.5236457051,-83.2218260273",
    CountyGeoId: 47067,
    NAME: "Hancock County",
  },
  {
    Location: "30.8533433125,-90.0405268831",
    CountyGeoId: 22117,
    NAME: "Washington Parish",
  },
  {
    Location: "37.2288385526,-98.684790626",
    CountyGeoId: 20007,
    NAME: "Barber County",
  },
  {
    Location: "46.2398610144,-119.511127184",
    CountyGeoId: 53005,
    NAME: "Benton County",
  },
  {
    Location: "41.0331711391,-89.3447914374",
    CountyGeoId: 17123,
    NAME: "Marshall County",
  },
  {
    Location: "32.8624049426,-85.7975022448",
    CountyGeoId: "01123",
    NAME: "Tallapoosa County",
  },
  {
    Location: "55.2245210175,-161.947228747",
    CountyGeoId: "02013",
    NAME: "Aleutians East Borough",
  },
  {
    Location: "37.0759383564,-77.6322882986",
    CountyGeoId: 51053,
    NAME: "Dinwiddie County",
  },
  {
    Location: "37.6504930265,-121.917998966",
    CountyGeoId: "06001",
    NAME: "Alameda County",
  },
  {
    Location: "35.1863303424,-91.2430822004",
    CountyGeoId: "05147",
    NAME: "Woodruff County",
  },
  {
    Location: "36.6180054611,-82.1607018861",
    CountyGeoId: 51520,
    NAME: "Bristol city",
  },
  {
    Location: "41.3574164267,-83.14391569",
    CountyGeoId: 39143,
    NAME: "Sandusky County",
  },
  {
    Location: "33.9046109451,-78.9761374454",
    CountyGeoId: 45051,
    NAME: "Horry County",
  },
  {
    Location: "29.1678318425,-95.4342547974",
    CountyGeoId: 48039,
    NAME: "Brazoria County",
  },
  {
    Location: "44.0428854726,-83.7472418424",
    CountyGeoId: 26011,
    NAME: "Arenac County",
  },
  {
    Location: "45.4883821256,-110.526662711",
    CountyGeoId: 30067,
    NAME: "Park County",
  },
  {
    Location: "18.343826453,-66.1140504606",
    CountyGeoId: 72061,
    NAME: "Guaynabo Municipio",
  },
  {
    Location: "39.0580193147,-90.9600453966",
    CountyGeoId: 29113,
    NAME: "Lincoln County",
  },
  {
    Location: "38.8978264216,-80.2334232097",
    CountyGeoId: 54097,
    NAME: "Upshur County",
  },
  {
    Location: "38.0309985368,-98.7174450154",
    CountyGeoId: 20185,
    NAME: "Stafford County",
  },
  {
    Location: "36.2983026796,-88.7177438488",
    CountyGeoId: 47183,
    NAME: "Weakley County",
  },
  {
    Location: "42.7023842075,-78.2244395122",
    CountyGeoId: 36121,
    NAME: "Wyoming County",
  },
  {
    Location: "35.6883600988,-99.6957077129",
    CountyGeoId: 40129,
    NAME: "Roger Mills County",
  },
  {
    Location: "43.0815577125,-93.2608184346",
    CountyGeoId: 19033,
    NAME: "Cerro Gordo County",
  },
  {
    Location: "44.5929338436,-74.3037621955",
    CountyGeoId: 36033,
    NAME: "Franklin County",
  },
  {
    Location: "18.443076541,-66.8626349655",
    CountyGeoId: 72027,
    NAME: "Camuy Municipio",
  },
  {
    Location: "33.6166121137,-100.778860652",
    CountyGeoId: 48125,
    NAME: "Dickens County",
  },
  {
    Location: "41.0289838852,-94.6991848828",
    CountyGeoId: 19003,
    NAME: "Adams County",
  },
  {
    Location: "37.1933028033,-100.851287248",
    CountyGeoId: 20175,
    NAME: "Seward County",
  },
  {
    Location: "38.6130327476,-85.3375681071",
    CountyGeoId: 21223,
    NAME: "Trimble County",
  },
  {
    Location: "35.0217248029,-77.3551679748",
    CountyGeoId: 37103,
    NAME: "Jones County",
  },
  {
    Location: "44.9380153707,-98.3461899802",
    CountyGeoId: 46115,
    NAME: "Spink County",
  },
  {
    Location: "38.9240617743,-80.8570836304",
    CountyGeoId: 54021,
    NAME: "Gilmer County",
  },
  {
    Location: "33.2672553197,-91.2939728213",
    CountyGeoId: "05017",
    NAME: "Chicot County",
  },
  {
    Location: "34.1338827438,-83.5663480377",
    CountyGeoId: 13157,
    NAME: "Jackson County",
  },
  {
    Location: "39.7736200492,-87.2063672164",
    CountyGeoId: 18121,
    NAME: "Parke County",
  },
  {
    Location: "40.8181139287,-90.925108658",
    CountyGeoId: 17071,
    NAME: "Henderson County",
  },
  {
    Location: "38.3623255596,-79.5685441465",
    CountyGeoId: 51091,
    NAME: "Highland County",
  },
  {
    Location: "37.0216059108,-122.009787403",
    CountyGeoId: "06087",
    NAME: "Santa Cruz County",
  },
  {
    Location: "35.0169370912,-97.8841201933",
    CountyGeoId: 40051,
    NAME: "Grady County",
  },
  {
    Location: "38.5999841735,-86.1053059023",
    CountyGeoId: 18175,
    NAME: "Washington County",
  },
  {
    Location: "30.2663768834,-98.3998650256",
    CountyGeoId: 48031,
    NAME: "Blanco County",
  },
  {
    Location: "33.2660636336,-81.4350227718",
    CountyGeoId: 45011,
    NAME: "Barnwell County",
  },
  {
    Location: "43.4633261176,-114.805776873",
    CountyGeoId: 16025,
    NAME: "Camas County",
  },
  {
    Location: "45.0043671834,-88.7100058635",
    CountyGeoId: 55078,
    NAME: "Menominee County",
  },
  {
    Location: "38.0267183008,-77.3470467441",
    CountyGeoId: 51033,
    NAME: "Caroline County",
  },
  {
    Location: "37.2650404186,-77.3969067219",
    CountyGeoId: 51570,
    NAME: "Colonial Heights city",
  },
  {
    Location: "38.0270346749,-92.7660468541",
    CountyGeoId: 29029,
    NAME: "Camden County",
  },
  {
    Location: "30.6266523214,-90.4056805267",
    CountyGeoId: 22105,
    NAME: "Tangipahoa Parish",
  },
  {
    Location: "38.4207190191,-77.4574003866",
    CountyGeoId: 51179,
    NAME: "Stafford County",
  },
  {
    Location: "41.0229983046,-87.1161212419",
    CountyGeoId: 18073,
    NAME: "Jasper County",
  },
  {
    Location: "43.9878918655,-84.8478607548",
    CountyGeoId: 26035,
    NAME: "Clare County",
  },
  {
    Location: "37.286581954,-107.843270687",
    CountyGeoId: "08067",
    NAME: "La Plata County",
  },
  {
    Location: "44.2839056343,-112.351297512",
    CountyGeoId: 16033,
    NAME: "Clark County",
  },
  {
    Location: "18.0559662881,-65.8633023194",
    CountyGeoId: 72151,
    NAME: "Yabucoa Municipio",
  },
  {
    Location: "33.3862927393,-95.6722708168",
    CountyGeoId: 48119,
    NAME: "Delta County",
  },
  {
    Location: "36.3900951244,-78.9718051426",
    CountyGeoId: 37145,
    NAME: "Person County",
  },
  {
    Location: "43.3567673364,-92.3171989039",
    CountyGeoId: 19089,
    NAME: "Howard County",
  },
  {
    Location: "37.3527152683,-88.0972226536",
    CountyGeoId: 21055,
    NAME: "Crittenden County",
  },
  {
    Location: "41.5674402954,-98.5212445201",
    CountyGeoId: 31077,
    NAME: "Greeley County",
  },
  {
    Location: "40.5240610865,-97.1409086996",
    CountyGeoId: 31151,
    NAME: "Saline County",
  },
  {
    Location: "32.7505866271,-81.6119345544",
    CountyGeoId: 13251,
    NAME: "Screven County",
  },
  {
    Location: "37.6047919172,-79.1451431275",
    CountyGeoId: 51009,
    NAME: "Amherst County",
  },
  {
    Location: "17.9530033162,-66.3866938243",
    CountyGeoId: 72133,
    NAME: "Santa Isabel Municipio",
  },
  {
    Location: "34.8807714578,-88.5802645599",
    CountyGeoId: 28003,
    NAME: "Alcorn County",
  },
  {
    Location: "45.1523823451,-95.0047424624",
    CountyGeoId: 27067,
    NAME: "Kandiyohi County",
  },
  {
    Location: "31.3661921291,-101.523008414",
    CountyGeoId: 48383,
    NAME: "Reagan County",
  },
  {
    Location: "35.0060483545,-79.7477780226",
    CountyGeoId: 37153,
    NAME: "Richmond County",
  },
  {
    Location: "44.0221236545,-93.5872832229",
    CountyGeoId: 27161,
    NAME: "Waseca County",
  },
  {
    Location: "34.5767017575,-93.150399652",
    CountyGeoId: "05051",
    NAME: "Garland County",
  },
  {
    Location: "37.2809053404,-92.8758770268",
    CountyGeoId: 29225,
    NAME: "Webster County",
  },
  {
    Location: "33.9574736745,-91.7333211971",
    CountyGeoId: "05079",
    NAME: "Lincoln County",
  },
  {
    Location: "48.2452683995,-93.7833663013",
    CountyGeoId: 27071,
    NAME: "Koochiching County",
  },
  {
    Location: "37.0530460164,-89.5685146862",
    CountyGeoId: 29201,
    NAME: "Scott County",
  },
  {
    Location: "43.0103267267,-76.5743582093",
    CountyGeoId: 36011,
    NAME: "Cayuga County",
  },
  {
    Location: "44.3695852597,-97.491476123",
    CountyGeoId: 46077,
    NAME: "Kingsbury County",
  },
  {
    Location: "45.7055576976,-89.5218199491",
    CountyGeoId: 55085,
    NAME: "Oneida County",
  },
  {
    Location: "43.560975208,-73.8460059552",
    CountyGeoId: 36113,
    NAME: "Warren County",
  },
  {
    Location: "47.7764366569,-123.576473816",
    CountyGeoId: 53031,
    NAME: "Jefferson County",
  },
  {
    Location: "30.010805099,-95.9876533263",
    CountyGeoId: 48473,
    NAME: "Waller County",
  },
  {
    Location: "38.4226080428,-76.0833253109",
    CountyGeoId: 24019,
    NAME: "Dorchester County",
  },
  {
    Location: "39.9167779156,-83.7838897267",
    CountyGeoId: 39023,
    NAME: "Clark County",
  },
  {
    Location: "33.544295273,-81.6346948405",
    CountyGeoId: 45003,
    NAME: "Aiken County",
  },
  {
    Location: "42.1351123414,-72.6316491133",
    CountyGeoId: 25013,
    NAME: "Hampden County",
  },
  {
    Location: "37.6583184627,-92.590351423",
    CountyGeoId: 29105,
    NAME: "Laclede County",
  },
  {
    Location: "31.8027084904,-85.9409081483",
    CountyGeoId: "01109",
    NAME: "Pike County",
  },
  {
    Location: "32.5910175308,-88.1987896089",
    CountyGeoId: "01119",
    NAME: "Sumter County",
  },
  {
    Location: "33.3800616097,-86.1659036872",
    CountyGeoId: "01121",
    NAME: "Talladega County",
  },
  {
    Location: "37.1126355072,-90.4614294536",
    CountyGeoId: 29223,
    NAME: "Wayne County",
  },
  {
    Location: "41.4461591184,-76.5121412893",
    CountyGeoId: 42113,
    NAME: "Sullivan County",
  },
  {
    Location: "37.731927576,-79.3568295188",
    CountyGeoId: 51530,
    NAME: "Buena Vista city",
  },
  {
    Location: "42.1581860579,-96.5440972071",
    CountyGeoId: 31173,
    NAME: "Thurston County",
  },
  {
    Location: "37.5052112298,-76.9973400492",
    CountyGeoId: 51127,
    NAME: "New Kent County",
  },
  {
    Location: "41.6841906978,-83.4682747823",
    CountyGeoId: 39095,
    NAME: "Lucas County",
  },
  {
    Location: "29.8572816038,-95.3923371044",
    CountyGeoId: 48201,
    NAME: "Harris County",
  },
  {
    Location: "34.6463905658,-83.747108233",
    CountyGeoId: 13311,
    NAME: "White County",
  },
  {
    Location: "48.162897037,-122.575262954",
    CountyGeoId: 53029,
    NAME: "Island County",
  },
  {
    Location: "40.7532343253,-91.9499782974",
    CountyGeoId: 19177,
    NAME: "Van Buren County",
  },
  {
    Location: "32.3859736952,-85.6926686622",
    CountyGeoId: "01087",
    NAME: "Macon County",
  },
  {
    Location: "36.4449435708,-76.7005266521",
    CountyGeoId: 37073,
    NAME: "Gates County",
  },
  {
    Location: "44.3039525837,-91.3584515501",
    CountyGeoId: 55121,
    NAME: "Trempealeau County",
  },
  {
    Location: "42.1769034689,-98.0666853094",
    CountyGeoId: 31003,
    NAME: "Antelope County",
  },
  {
    Location: "30.0262964539,-90.7963157853",
    CountyGeoId: 22093,
    NAME: "St. James Parish",
  },
  {
    Location: "46.3324239679,-111.495486653",
    CountyGeoId: 30007,
    NAME: "Broadwater County",
  },
  {
    Location: "34.0244909939,-79.7029792115",
    CountyGeoId: 45041,
    NAME: "Florence County",
  },
  {
    Location: "32.325973709,-87.1064763258",
    CountyGeoId: "01047",
    NAME: "Dallas County",
  },
  {
    Location: "32.7803142142,-90.3964479749",
    CountyGeoId: 28163,
    NAME: "Yazoo County",
  },
  {
    Location: "41.3364654753,-92.1786423155",
    CountyGeoId: 19107,
    NAME: "Keokuk County",
  },
  {
    Location: "37.4596486226,-88.8809285275",
    CountyGeoId: 17087,
    NAME: "Johnson County",
  },
  {
    Location: "42.3362603021,-89.1608658488",
    CountyGeoId: 17201,
    NAME: "Winnebago County",
  },
  {
    Location: "38.318172839,-83.0495338272",
    CountyGeoId: 21043,
    NAME: "Carter County",
  },
  {
    Location: "48.8296158722,-121.872821263",
    CountyGeoId: 53073,
    NAME: "Whatcom County",
  },
  {
    Location: "35.4751864248,-79.1714836119",
    CountyGeoId: 37105,
    NAME: "Lee County",
  },
  {
    Location: "35.6426343016,-87.858966744",
    CountyGeoId: 47135,
    NAME: "Perry County",
  },
  {
    Location: "36.8590007836,-76.3567086184",
    CountyGeoId: 51740,
    NAME: "Portsmouth city",
  },
  {
    Location: "32.9326627045,-109.887451628",
    CountyGeoId: "04009",
    NAME: "Graham County",
  },
  {
    Location: "35.0219948491,-90.7478115543",
    CountyGeoId: "05123",
    NAME: "St. Francis County",
  },
  {
    Location: "32.0469291804,-96.4724850654",
    CountyGeoId: 48349,
    NAME: "Navarro County",
  },
  {
    Location: "45.7721844848,-96.4716413553",
    CountyGeoId: 27155,
    NAME: "Traverse County",
  },
  {
    Location: "30.3937798122,-89.4745620917",
    CountyGeoId: 28045,
    NAME: "Hancock County",
  },
  {
    Location: "37.0540793189,-88.71271926",
    CountyGeoId: 21145,
    NAME: "McCracken County",
  },
  {
    Location: "37.6584480026,-87.9453835494",
    CountyGeoId: 21225,
    NAME: "Union County",
  },
  {
    Location: "35.1986760952,-88.1844851879",
    CountyGeoId: 47071,
    NAME: "Hardin County",
  },
  {
    Location: "34.0800586214,-79.362510123",
    CountyGeoId: 45067,
    NAME: "Marion County",
  },
  {
    Location: "32.1571759799,-83.7987668507",
    CountyGeoId: 13093,
    NAME: "Dooly County",
  },
  {
    Location: "42.1330537308,-104.965815501",
    CountyGeoId: 56031,
    NAME: "Platte County",
  },
  {
    Location: "41.4705726437,-82.5763150918",
    CountyGeoId: 39043,
    NAME: "Erie County",
  },
  {
    Location: "42.0365026335,-93.9316370877",
    CountyGeoId: 19015,
    NAME: "Boone County",
  },
  {
    Location: "32.8434261558,-80.6496843171",
    CountyGeoId: 45029,
    NAME: "Colleton County",
  },
  {
    Location: "44.4123213669,-100.735943173",
    CountyGeoId: 46117,
    NAME: "Stanley County",
  },
  {
    Location: "37.0584319295,-88.9993411296",
    CountyGeoId: 21007,
    NAME: "Ballard County",
  },
  {
    Location: "48.4326760914,-108.958601602",
    CountyGeoId: 30005,
    NAME: "Blaine County",
  },
  {
    Location: "37.0635610525,-80.714385637",
    CountyGeoId: 51155,
    NAME: "Pulaski County",
  },
  {
    Location: "40.7391440172,-95.1501748646",
    CountyGeoId: 19145,
    NAME: "Page County",
  },
  {
    Location: "38.3570143624,-113.235717851",
    CountyGeoId: 49001,
    NAME: "Beaver County",
  },
  {
    Location: "31.0378936572,-83.0626533592",
    CountyGeoId: 13173,
    NAME: "Lanier County",
  },
  {
    Location: "29.7082609899,-94.6713769479",
    CountyGeoId: 48071,
    NAME: "Chambers County",
  },
  {
    Location: "36.5095802749,-106.693083681",
    CountyGeoId: 35039,
    NAME: "Rio Arriba County",
  },
  {
    Location: "37.5571191153,-79.8123170828",
    CountyGeoId: 51023,
    NAME: "Botetourt County",
  },
  {
    Location: "42.781081385,-76.8237785954",
    CountyGeoId: 36099,
    NAME: "Seneca County",
  },
  {
    Location: "32.7463149294,-100.916407078",
    CountyGeoId: 48415,
    NAME: "Scurry County",
  },
  {
    Location: "44.0763500067,-99.2049557543",
    CountyGeoId: 46017,
    NAME: "Buffalo County",
  },
  {
    Location: "37.4608189464,-86.3438765333",
    CountyGeoId: 21085,
    NAME: "Grayson County",
  },
  {
    Location: "37.6433385983,-114.877539979",
    CountyGeoId: 32017,
    NAME: "Lincoln County",
  },
  {
    Location: "37.258049088,-93.3419904743",
    CountyGeoId: 29077,
    NAME: "Greene County",
  },
  {
    Location: "36.7419423399,-86.582320534",
    CountyGeoId: 21213,
    NAME: "Simpson County",
  },
  {
    Location: "42.0362403729,-94.3968169905",
    CountyGeoId: 19073,
    NAME: "Greene County",
  },
  {
    Location: "30.1264602387,-90.4708835924",
    CountyGeoId: 22095,
    NAME: "St. John the Baptist Parish",
  },
  {
    Location: "37.7713611083,-81.2486346747",
    CountyGeoId: 54081,
    NAME: "Raleigh County",
  },
  {
    Location: "44.3428004034,-86.3641128583",
    CountyGeoId: 26101,
    NAME: "Manistee County",
  },
  {
    Location: "36.422718944,-99.265080664",
    CountyGeoId: 40153,
    NAME: "Woodward County",
  },
  {
    Location: "37.7071366717,-89.8244110855",
    CountyGeoId: 29157,
    NAME: "Perry County",
  },
  {
    Location: "42.0798117536,-92.5325425886",
    CountyGeoId: 19171,
    NAME: "Tama County",
  },
  {
    Location: "29.6346233871,-91.4729263457",
    CountyGeoId: 22101,
    NAME: "St. Mary Parish",
  },
  {
    Location: "34.4750152607,-85.3452913609",
    CountyGeoId: 13055,
    NAME: "Chattooga County",
  },
  {
    Location: "34.3915831664,-79.3788986183",
    CountyGeoId: 45033,
    NAME: "Dillon County",
  },
  {
    Location: "41.2200386132,-98.5170946378",
    CountyGeoId: 31093,
    NAME: "Howard County",
  },
  {
    Location: "38.446389504,-120.651115621",
    CountyGeoId: "06005",
    NAME: "Amador County",
  },
  {
    Location: "34.5299582294,-102.261669894",
    CountyGeoId: 48069,
    NAME: "Castro County",
  },
  {
    Location: "42.5936732732,-86.2917651855",
    CountyGeoId: 26005,
    NAME: "Allegan County",
  },
  {
    Location: "37.9781820266,-77.9628583492",
    CountyGeoId: 51109,
    NAME: "Louisa County",
  },
  {
    Location: "28.300314142,-80.7012054832",
    CountyGeoId: 12009,
    NAME: "Brevard County",
  },
  {
    Location: "34.0218460217,-80.9030859572",
    CountyGeoId: 45079,
    NAME: "Richland County",
  },
  {
    Location: "30.8746728358,-84.2344263446",
    CountyGeoId: 13131,
    NAME: "Grady County",
  },
  {
    Location: "46.1484599385,-112.093784553",
    CountyGeoId: 30043,
    NAME: "Jefferson County",
  },
  {
    Location: "36.1184426301,-84.198463003",
    CountyGeoId: 47001,
    NAME: "Anderson County",
  },
  {
    Location: "41.5602875792,-84.5881378939",
    CountyGeoId: 39171,
    NAME: "Williams County",
  },
  {
    Location: "42.2847872565,-111.329738822",
    CountyGeoId: 16007,
    NAME: "Bear Lake County",
  },
  {
    Location: "35.8135384798,-89.1395281511",
    CountyGeoId: 47033,
    NAME: "Crockett County",
  },
  {
    Location: "40.1894007554,-80.248244362",
    CountyGeoId: 42125,
    NAME: "Washington County",
  },
  {
    Location: "35.2247812957,-95.1166498604",
    CountyGeoId: 40061,
    NAME: "Haskell County",
  },
  {
    Location: "33.2937873448,-85.4590701568",
    CountyGeoId: "01111",
    NAME: "Randolph County",
  },
  {
    Location: "40.0916079241,-82.4831009236",
    CountyGeoId: 39089,
    NAME: "Licking County",
  },
  {
    Location: "39.4954650301,-92.0007352464",
    CountyGeoId: 29137,
    NAME: "Monroe County",
  },
  {
    Location: "35.9966113202,-88.9326248037",
    CountyGeoId: 47053,
    NAME: "Gibson County",
  },
  {
    Location: "35.6169396312,-87.0770139545",
    CountyGeoId: 47119,
    NAME: "Maury County",
  },
  {
    Location: "47.773853549,-96.4018033447",
    CountyGeoId: 27119,
    NAME: "Polk County",
  },
  {
    Location: "35.1970807469,-89.4143720339",
    CountyGeoId: 47047,
    NAME: "Fayette County",
  },
  {
    Location: "36.2114502716,-89.7853789263",
    CountyGeoId: 29155,
    NAME: "Pemiscot County",
  },
  {
    Location: "42.8181212402,-74.0585725636",
    CountyGeoId: 36093,
    NAME: "Schenectady County",
  },
  {
    Location: "41.9874357661,-70.7370759268",
    CountyGeoId: 25023,
    NAME: "Plymouth County",
  },
  {
    Location: "34.2656450828,-78.6550308717",
    CountyGeoId: 37047,
    NAME: "Columbus County",
  },
  {
    Location: "34.6397559581,-80.1586830546",
    CountyGeoId: 45025,
    NAME: "Chesterfield County",
  },
  {
    Location: "44.8288090199,-72.2438064213",
    CountyGeoId: 50019,
    NAME: "Orleans County",
  },
  {
    Location: "30.2292239003,-93.3579451616",
    CountyGeoId: 22019,
    NAME: "Calcasieu Parish",
  },
  {
    Location: "41.5130724363,-79.2360118434",
    CountyGeoId: 42053,
    NAME: "Forest County",
  },
  {
    Location: "33.0765357599,-84.1394626622",
    CountyGeoId: 13171,
    NAME: "Lamar County",
  },
  {
    Location: "30.1213082966,-93.8938981104",
    CountyGeoId: 48361,
    NAME: "Orange County",
  },
  {
    Location: "40.1282548929,-92.1480723868",
    CountyGeoId: 29103,
    NAME: "Knox County",
  },
  {
    Location: "41.7721614458,-77.2542641766",
    CountyGeoId: 42117,
    NAME: "Tioga County",
  },
  {
    Location: "43.0405280973,-108.630418124",
    CountyGeoId: 56013,
    NAME: "Fremont County",
  },
  {
    Location: "39.6203734727,-81.8526618984",
    CountyGeoId: 39115,
    NAME: "Morgan County",
  },
  {
    Location: "40.8456930058,-85.7940056739",
    CountyGeoId: 18169,
    NAME: "Wabash County",
  },
  {
    Location: "44.8235439383,-94.2724202106",
    CountyGeoId: 27085,
    NAME: "McLeod County",
  },
  {
    Location: "46.0175261512,-123.716999161",
    CountyGeoId: 41007,
    NAME: "Clatsop County",
  },
  {
    Location: "30.8974526088,-100.538546044",
    CountyGeoId: 48413,
    NAME: "Schleicher County",
  },
  {
    Location: "36.9338705281,-82.0953569204",
    CountyGeoId: 51167,
    NAME: "Russell County",
  },
  {
    Location: "32.8531388427,-87.9522309156",
    CountyGeoId: "01063",
    NAME: "Greene County",
  },
  {
    Location: "36.0360299243,-78.8765926949",
    CountyGeoId: 37063,
    NAME: "Durham County",
  },
  {
    Location: "26.1518560378,-80.4558842537",
    CountyGeoId: 12011,
    NAME: "Broward County",
  },
  {
    Location: "32.1217203314,-82.3312929099",
    CountyGeoId: 13279,
    NAME: "Toombs County",
  },
  {
    Location: "38.4805374528,-101.805968435",
    CountyGeoId: 20071,
    NAME: "Greeley County",
  },
  {
    Location: "44.0663458318,-98.6296749711",
    CountyGeoId: 46073,
    NAME: "Jerauld County",
  },
  {
    Location: "48.2279328059,-112.226687932",
    CountyGeoId: 30073,
    NAME: "Pondera County",
  },
  {
    Location: "35.4805846794,-104.815897957",
    CountyGeoId: 35047,
    NAME: "San Miguel County",
  },
  {
    Location: "34.356757808,-89.4849192699",
    CountyGeoId: 28071,
    NAME: "Lafayette County",
  },
  {
    Location: "32.9143722298,-85.3920429513",
    CountyGeoId: "01017",
    NAME: "Chambers County",
  },
  {
    Location: "34.5302641047,-101.208593305",
    CountyGeoId: 48045,
    NAME: "Briscoe County",
  },
  {
    Location: "40.3984096201,-77.2622958162",
    CountyGeoId: 42099,
    NAME: "Perry County",
  },
  {
    Location: "31.4284974445,-102.51556846",
    CountyGeoId: 48103,
    NAME: "Crane County",
  },
  {
    Location: "48.2217054336,-101.541784418",
    CountyGeoId: 38101,
    NAME: "Ward County",
  },
  {
    Location: "30.2145304261,-96.4034437639",
    CountyGeoId: 48477,
    NAME: "Washington County",
  },
  {
    Location: "48.792167798,-100.833304016",
    CountyGeoId: 38009,
    NAME: "Bottineau County",
  },
  {
    Location: "41.4368044101,-78.2037773985",
    CountyGeoId: 42023,
    NAME: "Cameron County",
  },
  {
    Location: "36.3353843636,-89.493466796",
    CountyGeoId: 47095,
    NAME: "Lake County",
  },
  {
    Location: "31.9892401922,-87.3082017869",
    CountyGeoId: "01131",
    NAME: "Wilcox County",
  },
  {
    Location: "33.9972551652,-94.2412727038",
    CountyGeoId: "05133",
    NAME: "Sevier County",
  },
  {
    Location: "43.5938619334,-90.8343823934",
    CountyGeoId: 55123,
    NAME: "Vernon County",
  },
  {
    Location: "38.0037403985,-108.405922131",
    CountyGeoId: "08113",
    NAME: "San Miguel County",
  },
  {
    Location: "27.1863023348,-81.8094429515",
    CountyGeoId: 12027,
    NAME: "DeSoto County",
  },
  {
    Location: "41.4667862464,-72.1065129033",
    CountyGeoId: "09011",
    NAME: "New London County",
  },
  {
    Location: "41.334373461,-93.5613593647",
    CountyGeoId: 19181,
    NAME: "Warren County",
  },
  {
    Location: "37.5501871513,-77.9151942586",
    CountyGeoId: 51145,
    NAME: "Powhatan County",
  },
  {
    Location: "43.0600413474,-92.3176637461",
    CountyGeoId: 19037,
    NAME: "Chickasaw County",
  },
  {
    Location: "40.7746843377,-82.5364843947",
    CountyGeoId: 39139,
    NAME: "Richland County",
  },
  {
    Location: "39.9879052609,-91.1884921409",
    CountyGeoId: 17001,
    NAME: "Adams County",
  },
  {
    Location: "46.4573445763,-99.4774139048",
    CountyGeoId: 38047,
    NAME: "Logan County",
  },
  {
    Location: "37.4192050035,-83.6831118762",
    CountyGeoId: 21189,
    NAME: "Owsley County",
  },
  {
    Location: "38.4137041563,-78.2792244734",
    CountyGeoId: 51113,
    NAME: "Madison County",
  },
  {
    Location: "34.3736483159,-96.0378479139",
    CountyGeoId: 40005,
    NAME: "Atoka County",
  },
  {
    Location: "40.0274157084,-89.8021776433",
    CountyGeoId: 17129,
    NAME: "Menard County",
  },
  {
    Location: "38.5347120041,-76.5305644689",
    CountyGeoId: 24009,
    NAME: "Calvert County",
  },
  {
    Location: "36.2574485453,-77.6517329831",
    CountyGeoId: 37083,
    NAME: "Halifax County",
  },
  {
    Location: "42.7934613757,-120.38733759",
    CountyGeoId: 41037,
    NAME: "Lake County",
  },
  {
    Location: "34.316890097,-83.81967864",
    CountyGeoId: 13139,
    NAME: "Hall County",
  },
  {
    Location: "37.2784856293,-79.9580837461",
    CountyGeoId: 51770,
    NAME: "Roanoke city",
  },
  {
    Location: "35.8579354045,-103.820048707",
    CountyGeoId: 35021,
    NAME: "Harding County",
  },
  {
    Location: "32.0414016703,-88.6894044448",
    CountyGeoId: 28023,
    NAME: "Clarke County",
  },
  {
    Location: "40.1332239754,-84.6193191365",
    CountyGeoId: 39037,
    NAME: "Darke County",
  },
  {
    Location: "46.2974982725,-117.907842238",
    CountyGeoId: 53013,
    NAME: "Columbia County",
  },
  {
    Location: "31.8691599476,-102.031609284",
    CountyGeoId: 48329,
    NAME: "Midland County",
  },
  {
    Location: "38.0423302608,-84.4587221937",
    CountyGeoId: 21067,
    NAME: "Fayette County",
  },
  {
    Location: "45.589722978,-98.3516118048",
    CountyGeoId: 46013,
    NAME: "Brown County",
  },
  {
    Location: "44.6057305617,-72.6414291047",
    CountyGeoId: 50015,
    NAME: "Lamoille County",
  },
  {
    Location: "35.869381374,-106.307385105",
    CountyGeoId: 35028,
    NAME: "Los Alamos County",
  },
  {
    Location: "36.0105961,-104.944975073",
    CountyGeoId: 35033,
    NAME: "Mora County",
  },
  {
    Location: "63.8762960012,-143.211992263",
    CountyGeoId: "02240",
    NAME: "Southeast Fairbanks Census Area",
  },
  {
    Location: "40.2396222297,-89.9168137955",
    CountyGeoId: 17125,
    NAME: "Mason County",
  },
  {
    Location: "48.1102917179,-123.934213907",
    CountyGeoId: 53009,
    NAME: "Clallam County",
  },
  {
    Location: "38.8295152487,-76.8472924091",
    CountyGeoId: 24033,
    NAME: "Prince George's County",
  },
  {
    Location: "43.2853462355,-123.179556863",
    CountyGeoId: 41019,
    NAME: "Douglas County",
  },
  {
    Location: "37.5181798892,-88.2667801291",
    CountyGeoId: 17069,
    NAME: "Hardin County",
  },
  {
    Location: "35.2903672637,-98.9922233091",
    CountyGeoId: 40149,
    NAME: "Washita County",
  },
  {
    Location: "41.4252272843,-78.6490862597",
    CountyGeoId: 42047,
    NAME: "Elk County",
  },
  {
    Location: "33.9617197861,-84.0236132972",
    CountyGeoId: 13135,
    NAME: "Gwinnett County",
  },
  {
    Location: "37.0760435997,-76.5164553837",
    CountyGeoId: 51700,
    NAME: "Newport News city",
  },
  {
    Location: "45.5190279208,-121.651091385",
    CountyGeoId: 41027,
    NAME: "Hood River County",
  },
  {
    Location: "35.5560557128,-82.9821729698",
    CountyGeoId: 37087,
    NAME: "Haywood County",
  },
  {
    Location: "32.3484295414,-96.7944846878",
    CountyGeoId: 48139,
    NAME: "Ellis County",
  },
  {
    Location: "43.4292261998,-70.6701460671",
    CountyGeoId: 23031,
    NAME: "York County",
  },
  {
    Location: "32.0784621843,-84.8352023744",
    CountyGeoId: 13259,
    NAME: "Stewart County",
  },
  {
    Location: "42.9883723478,-97.8846508535",
    CountyGeoId: 46009,
    NAME: "Bon Homme County",
  },
  {
    Location: "38.083736798,-89.3670210808",
    CountyGeoId: 17145,
    NAME: "Perry County",
  },
  {
    Location: "42.2838809992,-113.600088287",
    CountyGeoId: 16031,
    NAME: "Cassia County",
  },
  {
    Location: "41.9149937091,-101.740518753",
    CountyGeoId: 31075,
    NAME: "Grant County",
  },
  {
    Location: "27.0315726438,-98.2187211196",
    CountyGeoId: 48047,
    NAME: "Brooks County",
  },
  {
    Location: "32.3062117521,-100.921228654",
    CountyGeoId: 48335,
    NAME: "Mitchell County",
  },
  {
    Location: "43.0599208476,-92.7890033704",
    CountyGeoId: 19067,
    NAME: "Floyd County",
  },
  {
    Location: "44.7891558271,-88.7654354834",
    CountyGeoId: 55115,
    NAME: "Shawano County",
  },
  {
    Location: "41.4525115243,-82.1514904737",
    CountyGeoId: 39093,
    NAME: "Lorain County",
  },
  {
    Location: "34.6404621514,-105.850819579",
    CountyGeoId: 35057,
    NAME: "Torrance County",
  },
  {
    Location: "33.0884910001,-89.0344291744",
    CountyGeoId: 28159,
    NAME: "Winston County",
  },
  {
    Location: "30.7863379319,-96.9768199136",
    CountyGeoId: 48331,
    NAME: "Milam County",
  },
  {
    Location: "40.610413019,-77.6170419931",
    CountyGeoId: 42087,
    NAME: "Mifflin County",
  },
  {
    Location: "31.8055957772,-82.6369408916",
    CountyGeoId: 13161,
    NAME: "Jeff Davis County",
  },
  {
    Location: "38.843539656,-92.8101191097",
    CountyGeoId: 29053,
    NAME: "Cooper County",
  },
  {
    Location: "26.0992389901,-81.3809730552",
    CountyGeoId: 12021,
    NAME: "Collier County",
  },
  {
    Location: "69.3634118461,-153.510605515",
    CountyGeoId: "02185",
    NAME: "North Slope Borough",
  },
  {
    Location: "37.1106705529,-84.11780032",
    CountyGeoId: 21125,
    NAME: "Laurel County",
  },
  {
    Location: "31.5454641622,-96.5805297375",
    CountyGeoId: 48293,
    NAME: "Limestone County",
  },
  {
    Location: "38.2785594463,-90.1772845526",
    CountyGeoId: 17133,
    NAME: "Monroe County",
  },
  {
    Location: "48.2945125463,-105.016391302",
    CountyGeoId: 30085,
    NAME: "Roosevelt County",
  },
  {
    Location: "37.191870471,-120.717688",
    CountyGeoId: "06047",
    NAME: "Merced County",
  },
  {
    Location: "29.9830664456,-81.8578845259",
    CountyGeoId: 12019,
    NAME: "Clay County",
  },
  {
    Location: "37.2097032695,-88.3538137781",
    CountyGeoId: 21139,
    NAME: "Livingston County",
  },
  {
    Location: "38.2154382436,-85.1947770123",
    CountyGeoId: 21211,
    NAME: "Shelby County",
  },
  {
    Location: "37.7531363894,-88.5407417954",
    CountyGeoId: 17165,
    NAME: "Saline County",
  },
  {
    Location: "42.2454540023,-85.5311845383",
    CountyGeoId: 26077,
    NAME: "Kalamazoo County",
  },
  {
    Location: "40.1636345517,-77.2655238393",
    CountyGeoId: 42041,
    NAME: "Cumberland County",
  },
  {
    Location: "33.9414815247,-84.5766842461",
    CountyGeoId: 13067,
    NAME: "Cobb County",
  },
  {
    Location: "40.5244322568,-98.0512842475",
    CountyGeoId: 31035,
    NAME: "Clay County",
  },
  {
    Location: "35.7846556198,-83.5241923117",
    CountyGeoId: 47155,
    NAME: "Sevier County",
  },
  {
    Location: "32.7534965705,-89.1175728285",
    CountyGeoId: 28099,
    NAME: "Neshoba County",
  },
  {
    Location: "45.394991781,-105.630190704",
    CountyGeoId: 30075,
    NAME: "Powder River County",
  },
  {
    Location: "31.0270650231,-96.5127823741",
    CountyGeoId: 48395,
    NAME: "Robertson County",
  },
  {
    Location: "43.0564977139,-104.47537645",
    CountyGeoId: 56027,
    NAME: "Niobrara County",
  },
  {
    Location: "40.4403578768,-118.404438052",
    CountyGeoId: 32027,
    NAME: "Pershing County",
  },
  {
    Location: "35.1754531586,-88.5636398807",
    CountyGeoId: 47109,
    NAME: "McNairy County",
  },
  {
    Location: "39.1609175598,-86.5231372076",
    CountyGeoId: 18105,
    NAME: "Monroe County",
  },
  {
    Location: "32.7885605367,-91.4567382424",
    CountyGeoId: 22123,
    NAME: "West Carroll Parish",
  },
  {
    Location: "42.638915376,-70.8679199556",
    CountyGeoId: 25009,
    NAME: "Essex County",
  },
  {
    Location: "42.9710217012,-114.811514939",
    CountyGeoId: 16047,
    NAME: "Gooding County",
  },
  {
    Location: "32.4804706054,-94.8169477887",
    CountyGeoId: 48183,
    NAME: "Gregg County",
  },
  {
    Location: "36.2683474959,-92.6842202167",
    CountyGeoId: "05089",
    NAME: "Marion County",
  },
  {
    Location: "37.8102830478,-90.4722676012",
    CountyGeoId: 29187,
    NAME: "St. Francois County",
  },
  {
    Location: "38.8345659231,-77.2762195686",
    CountyGeoId: 51059,
    NAME: "Fairfax County",
  },
  {
    Location: "38.2142048256,-95.2933285252",
    CountyGeoId: 20003,
    NAME: "Anderson County",
  },
  {
    Location: "46.4662809401,-109.844522327",
    CountyGeoId: 30107,
    NAME: "Wheatland County",
  },
  {
    Location: "43.2899298863,-86.5352341115",
    CountyGeoId: 26121,
    NAME: "Muskegon County",
  },
  {
    Location: "38.4164943803,-88.053300973",
    CountyGeoId: 17047,
    NAME: "Edwards County",
  },
  {
    Location: "38.7478811299,-77.4838087142",
    CountyGeoId: 51683,
    NAME: "Manassas city",
  },
  {
    Location: "35.332466935,-79.9054790812",
    CountyGeoId: 37123,
    NAME: "Montgomery County",
  },
  {
    Location: "29.9086211231,-85.2610062794",
    CountyGeoId: 12045,
    NAME: "Gulf County",
  },
  {
    Location: "37.6847615589,-97.4609686791",
    CountyGeoId: 20173,
    NAME: "Sedgwick County",
  },
  {
    Location: "33.7353045888,-93.6684431539",
    CountyGeoId: "05057",
    NAME: "Hempstead County",
  },
  {
    Location: "34.0705125102,-101.8268813",
    CountyGeoId: 48189,
    NAME: "Hale County",
  },
  {
    Location: "35.7025721296,-79.2552758614",
    CountyGeoId: 37037,
    NAME: "Chatham County",
  },
  {
    Location: "35.4953438716,-94.755225505",
    CountyGeoId: 40135,
    NAME: "Sequoyah County",
  },
  {
    Location: "35.926348429,-85.4551771798",
    CountyGeoId: 47185,
    NAME: "White County",
  },
  {
    Location: "55.4885148595,-131.030510343",
    CountyGeoId: "02130",
    NAME: "Ketchikan Gateway Borough",
  },
  {
    Location: "29.0634475051,-81.1485743573",
    CountyGeoId: 12127,
    NAME: "Volusia County",
  },
  {
    Location: "43.3348466891,-97.7544162352",
    CountyGeoId: 46067,
    NAME: "Hutchinson County",
  },
  {
    Location: "38.5086167769,-81.9089929263",
    CountyGeoId: 54079,
    NAME: "Putnam County",
  },
  {
    Location: "41.6487307494,-75.3032577124",
    CountyGeoId: 42127,
    NAME: "Wayne County",
  },
  {
    Location: "39.3009797143,-76.610646905",
    CountyGeoId: 24510,
    NAME: "Baltimore city",
  },
  {
    Location: "37.2442933233,-83.2214816028",
    CountyGeoId: 21193,
    NAME: "Perry County",
  },
  {
    Location: "44.0219511839,-97.6102451711",
    CountyGeoId: 46097,
    NAME: "Miner County",
  },
  {
    Location: "37.9390693081,-76.9408852763",
    CountyGeoId: 51057,
    NAME: "Essex County",
  },
  {
    Location: "32.777645813,-97.8050966636",
    CountyGeoId: 48367,
    NAME: "Parker County",
  },
  {
    Location: "39.8600027881,-88.9615519316",
    CountyGeoId: 17115,
    NAME: "Macon County",
  },
  {
    Location: "35.048611942,-78.8275607671",
    CountyGeoId: 37051,
    NAME: "Cumberland County",
  },
  {
    Location: "37.4012086268,-76.5229667418",
    CountyGeoId: 51073,
    NAME: "Gloucester County",
  },
  {
    Location: "39.7621646287,-104.875801423",
    CountyGeoId: "08031",
    NAME: "Denver County",
  },
  {
    Location: "39.9541358004,-105.052664798",
    CountyGeoId: "08014",
    NAME: "Broomfield County",
  },
  {
    Location: "43.0818860731,-93.7342722978",
    CountyGeoId: 19081,
    NAME: "Hancock County",
  },
  {
    Location: "42.9723307203,-105.507062664",
    CountyGeoId: 56009,
    NAME: "Converse County",
  },
  {
    Location: "45.5403894994,-111.170368946",
    CountyGeoId: 30031,
    NAME: "Gallatin County",
  },
  {
    Location: "34.3325069471,-79.9577199015",
    CountyGeoId: 45031,
    NAME: "Darlington County",
  },
  {
    Location: "33.3489778227,-112.491486812",
    CountyGeoId: "04013",
    NAME: "Maricopa County",
  },
  {
    Location: "36.3592115189,-85.6731507891",
    CountyGeoId: 47087,
    NAME: "Jackson County",
  },
  {
    Location: "44.4704611746,-88.9647928071",
    CountyGeoId: 55135,
    NAME: "Waupaca County",
  },
  {
    Location: "43.5800915709,-73.0366087399",
    CountyGeoId: 50021,
    NAME: "Rutland County",
  },
  {
    Location: "42.2092885613,-97.11926027",
    CountyGeoId: 31179,
    NAME: "Wayne County",
  },
  {
    Location: "34.9915361594,-78.3713906105",
    CountyGeoId: 37163,
    NAME: "Sampson County",
  },
  {
    Location: "42.1717425857,-90.5742293965",
    CountyGeoId: 19097,
    NAME: "Jackson County",
  },
  {
    Location: "33.179875706,-101.298424102",
    CountyGeoId: 48169,
    NAME: "Garza County",
  },
  {
    Location: "43.3779847631,-95.1508300608",
    CountyGeoId: 19059,
    NAME: "Dickinson County",
  },
  {
    Location: "38.9941571642,-76.5675970619",
    CountyGeoId: 24003,
    NAME: "Anne Arundel County",
  },
  {
    Location: "47.5875228967,-99.6609104924",
    CountyGeoId: 38103,
    NAME: "Wells County",
  },
  {
    Location: "33.2142871374,-93.227308885",
    CountyGeoId: "05027",
    NAME: "Columbia County",
  },
  {
    Location: "33.9511687467,-83.3673290793",
    CountyGeoId: 13059,
    NAME: "Clarke County",
  },
  {
    Location: "37.9233794475,-121.951073113",
    CountyGeoId: "06013",
    NAME: "Contra Costa County",
  },
  {
    Location: "43.9416929041,-122.876213921",
    CountyGeoId: 41039,
    NAME: "Lane County",
  },
  {
    Location: "39.3932659263,-98.2093648177",
    CountyGeoId: 20123,
    NAME: "Mitchell County",
  },
  {
    Location: "30.8626068236,-88.6440346093",
    CountyGeoId: 28039,
    NAME: "George County",
  },
  {
    Location: "37.8311453235,-83.823774583",
    CountyGeoId: 21197,
    NAME: "Powell County",
  },
  {
    Location: "31.2532716595,-96.9358470922",
    CountyGeoId: 48145,
    NAME: "Falls County",
  },
  {
    Location: "35.2387731611,-77.6412486292",
    CountyGeoId: 37107,
    NAME: "Lenoir County",
  },
  {
    Location: "32.7014650504,-82.6600810997",
    CountyGeoId: 13167,
    NAME: "Johnson County",
  },
  {
    Location: "30.5988510952,-92.0058568609",
    CountyGeoId: 22097,
    NAME: "St. Landry Parish",
  },
  {
    Location: "37.1913959707,-101.799252231",
    CountyGeoId: 20129,
    NAME: "Morton County",
  },
  {
    Location: "45.9452167902,-93.2934250568",
    CountyGeoId: 27065,
    NAME: "Kanabec County",
  },
  {
    Location: "18.4557008482,-66.3966030173",
    CountyGeoId: 72145,
    NAME: "Vega Baja Municipio",
  },
  {
    Location: "40.6673139262,-111.923601307",
    CountyGeoId: 49035,
    NAME: "Salt Lake County",
  },
  {
    Location: "18.2235175389,-65.9088978011",
    CountyGeoId: 72077,
    NAME: "Juncos Municipio",
  },
  {
    Location: "41.0418321081,-86.6987792624",
    CountyGeoId: 18131,
    NAME: "Pulaski County",
  },
  {
    Location: "38.8785834577,-77.1009715341",
    CountyGeoId: 51013,
    NAME: "Arlington County",
  },
  {
    Location: "33.0251331683,-83.5605241695",
    CountyGeoId: 13169,
    NAME: "Jones County",
  },
  {
    Location: "37.9763768738,-91.3039612785",
    CountyGeoId: 29055,
    NAME: "Crawford County",
  },
  {
    Location: "46.4087959622,-95.7080021514",
    CountyGeoId: 27111,
    NAME: "Otter Tail County",
  },
  {
    Location: "40.5240865228,-82.7940677882",
    CountyGeoId: 39117,
    NAME: "Morrow County",
  },
  {
    Location: "33.0775359877,-94.3435927798",
    CountyGeoId: 48067,
    NAME: "Cass County",
  },
  {
    Location: "45.7711313958,-100.051628546",
    CountyGeoId: 46021,
    NAME: "Campbell County",
  },
  {
    Location: "33.0335103757,-85.0283367991",
    CountyGeoId: 13285,
    NAME: "Troup County",
  },
  {
    Location: "41.8713684138,-71.578520179",
    CountyGeoId: 44007,
    NAME: "Providence County",
  },
  {
    Location: "42.4018650655,-92.7914177407",
    CountyGeoId: 19075,
    NAME: "Grundy County",
  },
  {
    Location: "33.7997498678,-110.811737097",
    CountyGeoId: "04007",
    NAME: "Gila County",
  },
  {
    Location: "48.0662320513,-96.0366682912",
    CountyGeoId: 27113,
    NAME: "Pennington County",
  },
  {
    Location: "39.785156359,-98.7854727927",
    CountyGeoId: 20183,
    NAME: "Smith County",
  },
  {
    Location: "35.8938381553,-86.8986535599",
    CountyGeoId: 47187,
    NAME: "Williamson County",
  },
  {
    Location: "34.7045808679,-97.3093236805",
    CountyGeoId: 40049,
    NAME: "Garvin County",
  },
  {
    Location: "46.9653297577,-104.248943969",
    CountyGeoId: 30109,
    NAME: "Wibaux County",
  },
  {
    Location: "32.5801941764,-93.8823968489",
    CountyGeoId: 22017,
    NAME: "Caddo Parish",
  },
  {
    Location: "30.4964266893,-82.9479591393",
    CountyGeoId: 12047,
    NAME: "Hamilton County",
  },
  {
    Location: "34.9167055034,-83.7372785445",
    CountyGeoId: 13281,
    NAME: "Towns County",
  },
  {
    Location: "33.6756265521,-97.7246531212",
    CountyGeoId: 48337,
    NAME: "Montague County",
  },
  {
    Location: "35.3119550622,-80.2509863077",
    CountyGeoId: 37167,
    NAME: "Stanly County",
  },
  {
    Location: "30.4078429457,-89.9546332243",
    CountyGeoId: 22103,
    NAME: "St. Tammany Parish",
  },
  {
    Location: "47.4909231926,-121.83595173",
    CountyGeoId: 53033,
    NAME: "King County",
  },
  {
    Location: "42.170297478,-76.306316775",
    CountyGeoId: 36107,
    NAME: "Tioga County",
  },
  {
    Location: "36.117697723,-90.5590717273",
    CountyGeoId: "05055",
    NAME: "Greene County",
  },
  {
    Location: "41.2249600832,-73.3712046145",
    CountyGeoId: "09001",
    NAME: "Fairfield County",
  },
  {
    Location: "32.776276295,-81.1407026054",
    CountyGeoId: 45049,
    NAME: "Hampton County",
  },
  {
    Location: "43.2789221432,-96.721824276",
    CountyGeoId: 46083,
    NAME: "Lincoln County",
  },
  {
    Location: "36.7865296888,-85.3884485912",
    CountyGeoId: 21057,
    NAME: "Cumberland County",
  },
  {
    Location: "31.6022829517,-83.2763750394",
    CountyGeoId: 13155,
    NAME: "Irwin County",
  },
  {
    Location: "40.6419821705,-91.4792643967",
    CountyGeoId: 19111,
    NAME: "Lee County",
  },
  {
    Location: "41.6544687417,-105.723910733",
    CountyGeoId: 56001,
    NAME: "Albany County",
  },
  {
    Location: "44.5204732898,-109.587955049",
    CountyGeoId: 56029,
    NAME: "Park County",
  },
  {
    Location: "42.4707837931,-91.837842149",
    CountyGeoId: 19019,
    NAME: "Buchanan County",
  },
  {
    Location: "42.325322722,-87.6311845438",
    CountyGeoId: 17097,
    NAME: "Lake County",
  },
  {
    Location: "32.7666300195,-96.7778770663",
    CountyGeoId: 48113,
    NAME: "Dallas County",
  },
  {
    Location: "41.2197790932,-102.994978749",
    CountyGeoId: 31033,
    NAME: "Cheyenne County",
  },
  {
    Location: "36.7740135585,-91.8865416662",
    CountyGeoId: 29091,
    NAME: "Howell County",
  },
  {
    Location: "40.9879710088,-91.5445322832",
    CountyGeoId: 19087,
    NAME: "Henry County",
  },
  {
    Location: "43.0004744491,-90.1353840185",
    CountyGeoId: 55049,
    NAME: "Iowa County",
  },
  {
    Location: "31.1551977348,-98.8175760649",
    CountyGeoId: 48411,
    NAME: "San Saba County",
  },
  {
    Location: "39.5458317531,-89.2772543125",
    CountyGeoId: 17021,
    NAME: "Christian County",
  },
  {
    Location: "40.4525990445,-92.1470474552",
    CountyGeoId: 29199,
    NAME: "Scotland County",
  },
  {
    Location: "30.8783441069,-84.5790701498",
    CountyGeoId: 13087,
    NAME: "Decatur County",
  },
  {
    Location: "40.9318279821,-90.2132382621",
    CountyGeoId: 17095,
    NAME: "Knox County",
  },
  {
    Location: "45.2827261064,-95.68142838",
    CountyGeoId: 27151,
    NAME: "Swift County",
  },
  {
    Location: "46.9012020299,-117.523057733",
    CountyGeoId: 53075,
    NAME: "Whitman County",
  },
  {
    Location: "41.499810931,-71.2809786997",
    CountyGeoId: 44005,
    NAME: "Newport County",
  },
  {
    Location: "42.0687539209,-89.9343041982",
    CountyGeoId: 17015,
    NAME: "Carroll County",
  },
  {
    Location: "44.6294210298,-121.176237426",
    CountyGeoId: 41031,
    NAME: "Jefferson County",
  },
  {
    Location: "39.090675859,-77.6357053514",
    CountyGeoId: 51107,
    NAME: "Loudoun County",
  },
  {
    Location: "43.6406015599,-84.8467965535",
    CountyGeoId: 26073,
    NAME: "Isabella County",
  },
  {
    Location: "30.2035444978,-90.9112912896",
    CountyGeoId: 22005,
    NAME: "Ascension Parish",
  },
  {
    Location: "37.9529528516,-98.0860066564",
    CountyGeoId: 20155,
    NAME: "Reno County",
  },
  {
    Location: "46.4325011338,-102.460280406",
    CountyGeoId: 38041,
    NAME: "Hettinger County",
  },
  {
    Location: "38.1449736906,-83.74266722",
    CountyGeoId: 21011,
    NAME: "Bath County",
  },
  {
    Location: "32.8318884986,-92.3748055749",
    CountyGeoId: 22111,
    NAME: "Union Parish",
  },
  {
    Location: "39.580876381,-118.335778874",
    CountyGeoId: 32001,
    NAME: "Churchill County",
  },
  {
    Location: "40.1764332141,-98.4999473753",
    CountyGeoId: 31181,
    NAME: "Webster County",
  },
  {
    Location: "35.7933524917,-80.2127487756",
    CountyGeoId: 37057,
    NAME: "Davidson County",
  },
  {
    Location: "40.8759049641,-102.351791195",
    CountyGeoId: "08115",
    NAME: "Sedgwick County",
  },
  {
    Location: "42.7341351105,-94.6787466122",
    CountyGeoId: 19151,
    NAME: "Pocahontas County",
  },
  {
    Location: "35.7415534129,-91.5697116529",
    CountyGeoId: "05063",
    NAME: "Independence County",
  },
  {
    Location: "42.6864089427,-121.650120994",
    CountyGeoId: 41035,
    NAME: "Klamath County",
  },
  {
    Location: "39.8035392391,-74.9597543553",
    CountyGeoId: 34007,
    NAME: "Camden County",
  },
  {
    Location: "38.9166611398,-101.763574005",
    CountyGeoId: 20199,
    NAME: "Wallace County",
  },
  {
    Location: "42.1810916537,-111.813201111",
    CountyGeoId: 16041,
    NAME: "Franklin County",
  },
  {
    Location: "48.2689430235,-98.7201050468",
    CountyGeoId: 38071,
    NAME: "Ramsey County",
  },
  {
    Location: "41.2053450175,-90.7413938887",
    CountyGeoId: 17131,
    NAME: "Mercer County",
  },
  {
    Location: "44.8582538926,-97.7294962958",
    CountyGeoId: 46025,
    NAME: "Clark County",
  },
  {
    Location: "33.1791243873,-100.253305507",
    CountyGeoId: 48433,
    NAME: "Stonewall County",
  },
  {
    Location: "40.4727799619,-90.2074818825",
    CountyGeoId: 17057,
    NAME: "Fulton County",
  },
  {
    Location: "40.4308475737,-95.4280934716",
    CountyGeoId: 29005,
    NAME: "Atchison County",
  },
  {
    Location: "39.4148645227,-85.0602848847",
    CountyGeoId: 18047,
    NAME: "Franklin County",
  },
  {
    Location: "46.6997094485,-88.3521803449",
    CountyGeoId: 26013,
    NAME: "Baraga County",
  },
  {
    Location: "18.1831012969,-67.6050637583",
    CountyGeoId: 72097,
    NAME: "Mayagüez Municipio",
  },
  {
    Location: "42.3513950817,-71.9077266261",
    CountyGeoId: 25027,
    NAME: "Worcester County",
  },
  {
    Location: "35.6786827093,-85.778498039",
    CountyGeoId: 47177,
    NAME: "Warren County",
  },
  {
    Location: "43.759429876,-111.207614545",
    CountyGeoId: 16081,
    NAME: "Teton County",
  },
  {
    Location: "45.5167568769,-104.536158529",
    CountyGeoId: 30011,
    NAME: "Carter County",
  },
  {
    Location: "38.8344683216,-81.6747943199",
    CountyGeoId: 54035,
    NAME: "Jackson County",
  },
  {
    Location: "43.0154568883,-87.5805486607",
    CountyGeoId: 55079,
    NAME: "Milwaukee County",
  },
  {
    Location: "28.0847204066,-96.991438734",
    CountyGeoId: 48007,
    NAME: "Aransas County",
  },
  {
    Location: "34.935737081,-99.5607827211",
    CountyGeoId: 40055,
    NAME: "Greer County",
  },
  {
    Location: "38.5064964441,-122.330538465",
    CountyGeoId: "06055",
    NAME: "Napa County",
  },
  {
    Location: "38.297620662,-78.4668692674",
    CountyGeoId: 51079,
    NAME: "Greene County",
  },
  {
    Location: "14.1515429648,145.215166139",
    CountyGeoId: 69100,
    NAME: "Rota Municipality",
  },
  {
    Location: "39.8777172962,-74.6680674072",
    CountyGeoId: 34005,
    NAME: "Burlington County",
  },
  {
    Location: "38.8613737904,-107.862876811",
    CountyGeoId: "08029",
    NAME: "Delta County",
  },
  {
    Location: "32.5099583696,-84.8770429861",
    CountyGeoId: 13215,
    NAME: "Muscogee County",
  },
  {
    Location: "36.5011043566,-87.8384575868",
    CountyGeoId: 47161,
    NAME: "Stewart County",
  },
  {
    Location: "42.8447493088,-91.3414327747",
    CountyGeoId: 19043,
    NAME: "Clayton County",
  },
  {
    Location: "33.2166030364,-94.9656722276",
    CountyGeoId: 48449,
    NAME: "Titus County",
  },
  {
    Location: "38.4789639679,-98.756464293",
    CountyGeoId: 20009,
    NAME: "Barton County",
  },
  {
    Location: "30.1290721039,-91.6082975068",
    CountyGeoId: 22099,
    NAME: "St. Martin Parish",
  },
  {
    Location: "43.3137033973,-73.4307589223",
    CountyGeoId: 36115,
    NAME: "Washington County",
  },
  {
    Location: "39.4899707456,-86.1016367881",
    CountyGeoId: 18081,
    NAME: "Johnson County",
  },
  {
    Location: "37.5380074268,-77.405844847",
    CountyGeoId: 51087,
    NAME: "Henrico County",
  },
  {
    Location: "46.1117848382,-99.4411921853",
    CountyGeoId: 38051,
    NAME: "McIntosh County",
  },
  {
    Location: "36.3965102811,-78.1067171324",
    CountyGeoId: 37185,
    NAME: "Warren County",
  },
  {
    Location: "32.2641243634,-89.9457980719",
    CountyGeoId: 28121,
    NAME: "Rankin County",
  },
  {
    Location: "37.2850993946,-111.887766252",
    CountyGeoId: 49025,
    NAME: "Kane County",
  },
  {
    Location: "31.2971083422,-82.8799928978",
    CountyGeoId: 13003,
    NAME: "Atkinson County",
  },
  {
    Location: "44.7267746477,-91.2859815878",
    CountyGeoId: 55035,
    NAME: "Eau Claire County",
  },
  {
    Location: "42.48553813,-71.3917424712",
    CountyGeoId: 25017,
    NAME: "Middlesex County",
  },
  {
    Location: "42.8528477813,-77.2998210492",
    CountyGeoId: 36069,
    NAME: "Ontario County",
  },
  {
    Location: "40.813888089,-81.3656367045",
    CountyGeoId: 39151,
    NAME: "Stark County",
  },
  {
    Location: "48.3000250033,-116.601061373",
    CountyGeoId: 16017,
    NAME: "Bonner County",
  },
  {
    Location: "33.5580341574,-92.5030441645",
    CountyGeoId: "05013",
    NAME: "Calhoun County",
  },
  {
    Location: "33.1235144947,-90.0920506122",
    CountyGeoId: 28051,
    NAME: "Holmes County",
  },
  {
    Location: "39.9199582772,-76.7265140685",
    CountyGeoId: 42133,
    NAME: "York County",
  },
  {
    Location: "41.2851032069,-88.4184956524",
    CountyGeoId: 17063,
    NAME: "Grundy County",
  },
  {
    Location: "36.3116475219,-98.5359514102",
    CountyGeoId: 40093,
    NAME: "Major County",
  },
  {
    Location: "35.7051457145,-77.9186629547",
    CountyGeoId: 37195,
    NAME: "Wilson County",
  },
  {
    Location: "29.4711426482,-81.2929913884",
    CountyGeoId: 12035,
    NAME: "Flagler County",
  },
  {
    Location: "40.7050090829,-123.915819446",
    CountyGeoId: "06023",
    NAME: "Humboldt County",
  },
  {
    Location: "32.5897619047,-82.301708462",
    CountyGeoId: 13107,
    NAME: "Emanuel County",
  },
  {
    Location: "32.5637166985,-95.83651612",
    CountyGeoId: 48467,
    NAME: "Van Zandt County",
  },
  {
    Location: "36.5831912624,-79.4088067684",
    CountyGeoId: 51590,
    NAME: "Danville city",
  },
  {
    Location: "41.744942366,-123.957801356",
    CountyGeoId: "06015",
    NAME: "Del Norte County",
  },
  {
    Location: "36.7306482485,-83.6740950601",
    CountyGeoId: 21013,
    NAME: "Bell County",
  },
  {
    Location: "33.6745577167,-85.5187680028",
    CountyGeoId: "01029",
    NAME: "Cleburne County",
  },
  {
    Location: "46.191800961,-117.203075017",
    CountyGeoId: 53003,
    NAME: "Asotin County",
  },
  {
    Location: "18.441029345,-66.79771506",
    CountyGeoId: 72065,
    NAME: "Hatillo Municipio",
  },
  {
    Location: "18.1183693017,145.631090555",
    CountyGeoId: 69085,
    NAME: "Northern Islands Municipality",
  },
  {
    Location: "44.3714339354,-93.7300728963",
    CountyGeoId: 27079,
    NAME: "Le Sueur County",
  },
  {
    Location: "29.6774585804,-90.0977653992",
    CountyGeoId: 22051,
    NAME: "Jefferson Parish",
  },
  {
    Location: "29.8468719706,-93.1988964755",
    CountyGeoId: 22023,
    NAME: "Cameron Parish",
  },
  {
    Location: "39.2356038944,-76.0958206019",
    CountyGeoId: 24029,
    NAME: "Kent County",
  },
  {
    Location: "36.9233401324,-76.2456336955",
    CountyGeoId: 51710,
    NAME: "Norfolk city",
  },
  {
    Location: "39.509995074,-80.2433983428",
    CountyGeoId: 54049,
    NAME: "Marion County",
  },
  {
    Location: "39.301369579,-120.768752113",
    CountyGeoId: "06057",
    NAME: "Nevada County",
  },
  {
    Location: "38.4794187776,-99.9161797856",
    CountyGeoId: 20135,
    NAME: "Ness County",
  },
  {
    Location: "46.1932195454,-122.680974546",
    CountyGeoId: 53015,
    NAME: "Cowlitz County",
  },
  {
    Location: "30.1956117481,-82.9914923725",
    CountyGeoId: 12121,
    NAME: "Suwannee County",
  },
  {
    Location: "46.3339973594,-104.417423806",
    CountyGeoId: 30025,
    NAME: "Fallon County",
  },
  {
    Location: "30.4441430277,-83.4701228264",
    CountyGeoId: 12079,
    NAME: "Madison County",
  },
  {
    Location: "18.3969534214,-65.9687553171",
    CountyGeoId: 72031,
    NAME: "Carolina Municipio",
  },
  {
    Location: "30.8419677363,-83.5802119065",
    CountyGeoId: 13027,
    NAME: "Brooks County",
  },
  {
    Location: "42.3029409617,-79.4057576347",
    CountyGeoId: 36013,
    NAME: "Chautauqua County",
  },
  {
    Location: "34.4416706415,-87.8438119782",
    CountyGeoId: "01059",
    NAME: "Franklin County",
  },
  {
    Location: "31.7686268414,-106.23481792",
    CountyGeoId: 48141,
    NAME: "El Paso County",
  },
  {
    Location: "40.1245363517,-89.3675209057",
    CountyGeoId: 17107,
    NAME: "Logan County",
  },
  {
    Location: "37.191604867,-98.0754955835",
    CountyGeoId: 20077,
    NAME: "Harper County",
  },
  {
    Location: "39.7027072964,-112.784789329",
    CountyGeoId: 49023,
    NAME: "Juab County",
  },
  {
    Location: "40.3672314599,-76.4577127611",
    CountyGeoId: 42075,
    NAME: "Lebanon County",
  },
  {
    Location: "43.1138468547,-74.4221748142",
    CountyGeoId: 36035,
    NAME: "Fulton County",
  },
  {
    Location: "20.867735408,-156.617058801",
    CountyGeoId: 15009,
    NAME: "Maui County",
  },
  {
    Location: "43.5800235908,-72.5861605978",
    CountyGeoId: 50027,
    NAME: "Windsor County",
  },
  {
    Location: "37.1211921397,-82.8552822542",
    CountyGeoId: 21133,
    NAME: "Letcher County",
  },
  {
    Location: "36.0697841981,-88.0682731679",
    CountyGeoId: 47005,
    NAME: "Benton County",
  },
  {
    Location: "47.7152823036,-88.2521508057",
    CountyGeoId: 26083,
    NAME: "Keweenaw County",
  },
  {
    Location: "32.4205841079,-81.0221137598",
    CountyGeoId: 45053,
    NAME: "Jasper County",
  },
  {
    Location: "34.2799867489,-88.3613228409",
    CountyGeoId: 28057,
    NAME: "Itawamba County",
  },
  {
    Location: "31.5094655501,-103.102425237",
    CountyGeoId: 48475,
    NAME: "Ward County",
  },
  {
    Location: "42.7705180974,-111.562215274",
    CountyGeoId: 16029,
    NAME: "Caribou County",
  },
  {
    Location: "44.022343746,-93.2260411098",
    CountyGeoId: 27147,
    NAME: "Steele County",
  },
  {
    Location: "42.383771317,-93.7068096741",
    CountyGeoId: 19079,
    NAME: "Hamilton County",
  },
  {
    Location: "34.5721889489,-84.0026558339",
    CountyGeoId: 13187,
    NAME: "Lumpkin County",
  },
  {
    Location: "37.5621932698,-101.308021268",
    CountyGeoId: 20067,
    NAME: "Grant County",
  },
  {
    Location: "33.1304910055,-107.192378947",
    CountyGeoId: 35051,
    NAME: "Sierra County",
  },
  {
    Location: "35.9672502839,-77.9864448378",
    CountyGeoId: 37127,
    NAME: "Nash County",
  },
  {
    Location: "32.2202579876,-86.2076142923",
    CountyGeoId: "01101",
    NAME: "Montgomery County",
  },
  {
    Location: "31.2132418055,-81.4936975935",
    CountyGeoId: 13127,
    NAME: "Glynn County",
  },
  {
    Location: "36.7647498967,-77.8590299644",
    CountyGeoId: 51025,
    NAME: "Brunswick County",
  },
  {
    Location: "37.0487694369,-76.2954030037",
    CountyGeoId: 51650,
    NAME: "Hampton city",
  },
  {
    Location: "38.8411628915,-86.4834511309",
    CountyGeoId: 18093,
    NAME: "Lawrence County",
  },
  {
    Location: "41.226077466,-97.131768846",
    CountyGeoId: 31023,
    NAME: "Butler County",
  },
  {
    Location: "34.263162689,-85.2142786499",
    CountyGeoId: 13115,
    NAME: "Floyd County",
  },
  {
    Location: "39.7821029111,-93.5482792786",
    CountyGeoId: 29117,
    NAME: "Livingston County",
  },
  {
    Location: "42.8996847625,-98.7664619491",
    CountyGeoId: 31015,
    NAME: "Boyd County",
  },
  {
    Location: "45.9380407246,-93.630083459",
    CountyGeoId: 27095,
    NAME: "Mille Lacs County",
  },
  {
    Location: "34.6920572921,-81.1595312709",
    CountyGeoId: 45023,
    NAME: "Chester County",
  },
  {
    Location: "47.6743566297,-116.701762031",
    CountyGeoId: 16055,
    NAME: "Kootenai County",
  },
  {
    Location: "47.8805838786,-110.435223803",
    CountyGeoId: 30015,
    NAME: "Chouteau County",
  },
  {
    Location: "39.2965532011,-96.7351769755",
    CountyGeoId: 20161,
    NAME: "Riley County",
  },
  {
    Location: "40.1757608618,-97.1427156563",
    CountyGeoId: 31095,
    NAME: "Jefferson County",
  },
  {
    Location: "36.55115711,-85.543859188",
    CountyGeoId: 47027,
    NAME: "Clay County",
  },
  {
    Location: "18.472020962,-66.2620306809",
    CountyGeoId: 72051,
    NAME: "Dorado Municipio",
  },
  {
    Location: "44.0037525074,-92.401770932",
    CountyGeoId: 27109,
    NAME: "Olmsted County",
  },
  {
    Location: "43.6743108455,-97.3684431809",
    CountyGeoId: 46087,
    NAME: "McCook County",
  },
  {
    Location: "40.9900687168,-112.111371277",
    CountyGeoId: 49011,
    NAME: "Davis County",
  },
  {
    Location: "42.470095744,-92.3088197079",
    CountyGeoId: 19013,
    NAME: "Black Hawk County",
  },
  {
    Location: "37.555148813,-90.7734903178",
    CountyGeoId: 29093,
    NAME: "Iron County",
  },
  {
    Location: "34.5881997167,-96.2977785791",
    CountyGeoId: 40029,
    NAME: "Coal County",
  },
  {
    Location: "30.4060343343,-85.1972071433",
    CountyGeoId: 12013,
    NAME: "Calhoun County",
  },
  {
    Location: "35.8375699223,-100.270473266",
    CountyGeoId: 48211,
    NAME: "Hemphill County",
  },
  {
    Location: "40.1376743616,-83.7694969558",
    CountyGeoId: 39021,
    NAME: "Champaign County",
  },
  {
    Location: "40.7472371326,-87.8242979012",
    CountyGeoId: 17075,
    NAME: "Iroquois County",
  },
  {
    Location: "29.9047257308,-89.3041273649",
    CountyGeoId: 22087,
    NAME: "St. Bernard Parish",
  },
  {
    Location: "13.4427595479,144.769451697",
    CountyGeoId: 66010,
    NAME: "Guam",
  },
  {
    Location: "39.4692968709,-79.6681619853",
    CountyGeoId: 54077,
    NAME: "Preston County",
  },
  {
    Location: "34.9125779857,-107.999724325",
    CountyGeoId: 35006,
    NAME: "Cibola County",
  },
  {
    Location: "32.1547500095,-86.6501076967",
    CountyGeoId: "01085",
    NAME: "Lowndes County",
  },
  {
    Location: "18.2686767455,-66.8667797607",
    CountyGeoId: 72081,
    NAME: "Lares Municipio",
  },
  {
    Location: "-14.2084357923,-169.53673492",
    CountyGeoId: 60020,
    NAME: "Manu'a District",
  },
  {
    Location: "14.946529427,145.604845482",
    CountyGeoId: 69120,
    NAME: "Tinian Municipality",
  },
  {
    Location: "36.5111268089,-117.410789686",
    CountyGeoId: "06027",
    NAME: "Inyo County",
  },
  {
    Location: "40.4162956557,-75.9259989042",
    CountyGeoId: 42011,
    NAME: "Berks County",
  },
  {
    Location: "34.3176480082,-92.9460691759",
    CountyGeoId: "05059",
    NAME: "Hot Spring County",
  },
  {
    Location: "42.9127722362,-75.6696638191",
    CountyGeoId: 36053,
    NAME: "Madison County",
  },
  {
    Location: "41.1377184724,-87.8618317846",
    CountyGeoId: 17091,
    NAME: "Kankakee County",
  },
  {
    Location: "28.7963514929,-96.971525279",
    CountyGeoId: 48469,
    NAME: "Victoria County",
  },
  {
    Location: "35.8752484216,-98.4334742816",
    CountyGeoId: 40011,
    NAME: "Blaine County",
  },
  {
    Location: "18.0027266437,-66.607258824",
    CountyGeoId: 72113,
    NAME: "Ponce Municipio",
  },
  {
    Location: "35.151021226,-76.6694598427",
    CountyGeoId: 37137,
    NAME: "Pamlico County",
  },
  {
    Location: "41.4367863214,-75.6091956535",
    CountyGeoId: 42069,
    NAME: "Lackawanna County",
  },
  {
    Location: "29.3799669428,-94.8626717415",
    CountyGeoId: 48167,
    NAME: "Galveston County",
  },
  {
    Location: "38.701685538,-77.4776193547",
    CountyGeoId: 51153,
    NAME: "Prince William County",
  },
  {
    Location: "33.9498610997,-97.2441230299",
    CountyGeoId: 40085,
    NAME: "Love County",
  },
  {
    Location: "38.4295611651,-88.4256137919",
    CountyGeoId: 17191,
    NAME: "Wayne County",
  },
  {
    Location: "38.1951228784,-86.1113109452",
    CountyGeoId: 18061,
    NAME: "Harrison County",
  },
  {
    Location: "18.1332083357,-65.7877942339",
    CountyGeoId: 72069,
    NAME: "Humacao Municipio",
  },
  {
    Location: "37.8549014253,-111.443134948",
    CountyGeoId: 49017,
    NAME: "Garfield County",
  },
  {
    Location: "35.8392646425,-76.5693098876",
    CountyGeoId: 37187,
    NAME: "Washington County",
  },
  {
    Location: "43.9606082888,-100.689719816",
    CountyGeoId: 46075,
    NAME: "Jones County",
  },
  {
    Location: "47.0235840907,-103.376304933",
    CountyGeoId: 38007,
    NAME: "Billings County",
  },
  {
    Location: "33.5908249244,-83.4923823005",
    CountyGeoId: 13211,
    NAME: "Morgan County",
  },
  {
    Location: "35.117685821,-77.082003837",
    CountyGeoId: 37049,
    NAME: "Craven County",
  },
  {
    Location: "34.5879709683,-99.4147585085",
    CountyGeoId: 40065,
    NAME: "Jackson County",
  },
  {
    Location: "31.1986202778,-92.5331996257",
    CountyGeoId: 22079,
    NAME: "Rapides Parish",
  },
  {
    Location: "43.0640850193,-118.96788861",
    CountyGeoId: 41025,
    NAME: "Harney County",
  },
  {
    Location: "41.220590588,-98.9762070587",
    CountyGeoId: 31163,
    NAME: "Sherman County",
  },
  {
    Location: "37.8552256175,-94.8492968396",
    CountyGeoId: 20011,
    NAME: "Bourbon County",
  },
  {
    Location: "37.6096118283,-81.5491772356",
    CountyGeoId: 54109,
    NAME: "Wyoming County",
  },
  {
    Location: "34.6182874723,-88.5200953248",
    CountyGeoId: 28117,
    NAME: "Prentiss County",
  },
  {
    Location: "40.9181829168,-75.7088216052",
    CountyGeoId: 42025,
    NAME: "Carbon County",
  },
  {
    Location: "35.2875866253,-83.1408496187",
    CountyGeoId: 37099,
    NAME: "Jackson County",
  },
  {
    Location: "40.3113452381,-86.0518589748",
    CountyGeoId: 18159,
    NAME: "Tipton County",
  },
  {
    Location: "-14.3355554126,-170.784527256",
    CountyGeoId: 60050,
    NAME: "Western District",
  },
  {
    Location: "39.0453280683,-98.2076985187",
    CountyGeoId: 20105,
    NAME: "Lincoln County",
  },
  {
    Location: "44.7162497148,-95.8683593995",
    CountyGeoId: 27173,
    NAME: "Yellow Medicine County",
  },
  {
    Location: "38.8261607682,-85.0369979159",
    CountyGeoId: 18155,
    NAME: "Switzerland County",
  },
  {
    Location: "40.887287897,-109.507612097",
    CountyGeoId: 49009,
    NAME: "Daggett County",
  },
  {
    Location: "36.8906660574,-83.854045282",
    CountyGeoId: 21121,
    NAME: "Knox County",
  },
  {
    Location: "34.1815553357,-77.865597569",
    CountyGeoId: 37129,
    NAME: "New Hanover County",
  },
  {
    Location: "36.6211012796,-88.2722011175",
    CountyGeoId: 21035,
    NAME: "Calloway County",
  },
  {
    Location: "40.1763448561,-98.9527962385",
    CountyGeoId: 31061,
    NAME: "Franklin County",
  },
  {
    Location: "45.0223609495,-95.5667047202",
    CountyGeoId: 27023,
    NAME: "Chippewa County",
  },
  {
    Location: "38.0140589617,-87.0077059131",
    CountyGeoId: 18147,
    NAME: "Spencer County",
  },
  {
    Location: "36.276258667,-83.5096204438",
    CountyGeoId: 47057,
    NAME: "Grainger County",
  },
  {
    Location: "30.8678906078,-85.8141023534",
    CountyGeoId: 12059,
    NAME: "Holmes County",
  },
  {
    Location: "46.592401392,-92.6770526205",
    CountyGeoId: 27017,
    NAME: "Carlton County",
  },
  {
    Location: "39.4640664935,-78.0275428663",
    CountyGeoId: 54003,
    NAME: "Berkeley County",
  },
  {
    Location: "31.9739511211,-81.0939703133",
    CountyGeoId: 13051,
    NAME: "Chatham County",
  },
  {
    Location: "41.4995416587,-81.1786546043",
    CountyGeoId: 39055,
    NAME: "Geauga County",
  },
  {
    Location: "18.1111155053,-67.0384198311",
    CountyGeoId: 72125,
    NAME: "San Germán Municipio",
  },
  {
    Location: "44.7162390791,-85.5522032462",
    CountyGeoId: 26055,
    NAME: "Grand Traverse County",
  },
  {
    Location: "36.8355562279,-87.1791532892",
    CountyGeoId: 21219,
    NAME: "Todd County",
  },
  {
    Location: "18.4830555933,-67.014161744",
    CountyGeoId: 72071,
    NAME: "Isabela Municipio",
  },
  {
    Location: "36.6826585529,-79.8636317706",
    CountyGeoId: 51690,
    NAME: "Martinsville city",
  },
  {
    Location: "34.0266235144,-95.5521803129",
    CountyGeoId: 40023,
    NAME: "Choctaw County",
  },
  {
    Location: "33.9698311293,-92.6544402046",
    CountyGeoId: "05039",
    NAME: "Dallas County",
  },
  {
    Location: "33.8983618624,-92.1851454385",
    CountyGeoId: "05025",
    NAME: "Cleveland County",
  },
  {
    Location: "41.3975800161,-84.999084282",
    CountyGeoId: 18033,
    NAME: "DeKalb County",
  },
  {
    Location: "18.21191478,-66.0507654249",
    CountyGeoId: 72025,
    NAME: "Caguas Municipio",
  },
  {
    Location: "33.6556666121,-88.7815761672",
    CountyGeoId: 28025,
    NAME: "Clay County",
  },
  {
    Location: "39.7977760151,-92.0766157427",
    CountyGeoId: 29205,
    NAME: "Shelby County",
  },
  {
    Location: "47.2056646774,-119.451761712",
    CountyGeoId: 53025,
    NAME: "Grant County",
  },
  {
    Location: "38.0325101344,-85.3278488189",
    CountyGeoId: 21215,
    NAME: "Spencer County",
  },
  {
    Location: "37.4002848554,-79.190856302",
    CountyGeoId: 51680,
    NAME: "Lynchburg city",
  },
  {
    Location: "44.9058408356,-103.508040266",
    CountyGeoId: 46019,
    NAME: "Butte County",
  },
  {
    Location: "30.4634147938,-91.3127466677",
    CountyGeoId: 22121,
    NAME: "West Baton Rouge Parish",
  },
  {
    Location: "44.2733844798,-72.6149783508",
    CountyGeoId: 50023,
    NAME: "Washington County",
  },
  {
    Location: "40.3307738015,-111.16818403",
    CountyGeoId: 49051,
    NAME: "Wasatch County",
  },
  {
    Location: "33.7819451825,-82.743226753",
    CountyGeoId: 13317,
    NAME: "Wilkes County",
  },
  {
    Location: "47.5762161196,-118.418728999",
    CountyGeoId: 53043,
    NAME: "Lincoln County",
  },
  {
    Location: "43.3355804524,-102.551617407",
    CountyGeoId: 46102,
    NAME: "Oglala Lakota County",
  },
  {
    Location: "41.7159996542,-103.010548763",
    CountyGeoId: 31123,
    NAME: "Morrill County",
  },
  {
    Location: "34.1634980417,-93.6563416658",
    CountyGeoId: "05109",
    NAME: "Pike County",
  },
  {
    Location: "37.1249780238,-81.5605967061",
    CountyGeoId: 51185,
    NAME: "Tazewell County",
  },
  {
    Location: "47.0365253041,-113.923741221",
    CountyGeoId: 30063,
    NAME: "Missoula County",
  },
  {
    Location: "39.8931762515,-94.404709492",
    CountyGeoId: 29063,
    NAME: "DeKalb County",
  },
  {
    Location: "31.1484222352,-90.1061367548",
    CountyGeoId: 28147,
    NAME: "Walthall County",
  },
  {
    Location: "29.905528266,-90.3582204731",
    CountyGeoId: 22089,
    NAME: "St. Charles Parish",
  },
  {
    Location: "37.7381978567,-100.437862948",
    CountyGeoId: 20069,
    NAME: "Gray County",
  },
  {
    Location: "40.3016413767,-81.9200107367",
    CountyGeoId: 39031,
    NAME: "Coshocton County",
  },
  {
    Location: "58.2091446546,-135.559082719",
    CountyGeoId: "02105",
    NAME: "Hoonah-Angoon Census Area",
  },
  {
    Location: "27.9062278359,-82.346916153",
    CountyGeoId: 12057,
    NAME: "Hillsborough County",
  },
  {
    Location: "38.2164999843,-75.2966708247",
    CountyGeoId: 24047,
    NAME: "Worcester County",
  },
  {
    Location: "35.4426448889,-84.2528004804",
    CountyGeoId: 47123,
    NAME: "Monroe County",
  },
  {
    Location: "38.9147512529,-99.3172316232",
    CountyGeoId: 20051,
    NAME: "Ellis County",
  },
  {
    Location: "18.3622092521,-65.6065608131",
    CountyGeoId: 72053,
    NAME: "Fajardo Municipio",
  },
  {
    Location: "32.8977580696,-96.407781044",
    CountyGeoId: 48397,
    NAME: "Rockwall County",
  },
  {
    Location: "37.106351208,-93.8329365623",
    CountyGeoId: 29109,
    NAME: "Lawrence County",
  },
  {
    Location: "41.1166208296,-84.5801945588",
    CountyGeoId: 39125,
    NAME: "Paulding County",
  },
  {
    Location: "39.5202961461,-88.2217534978",
    CountyGeoId: 17029,
    NAME: "Coles County",
  },
  {
    Location: "23.7186403965,-164.736740347",
    CountyGeoId: 15003,
    NAME: "Honolulu County",
  },
  {
    Location: "31.2965068087,-95.9956906534",
    CountyGeoId: 48289,
    NAME: "Leon County",
  },
  {
    Location: "41.3338851661,-84.0682304213",
    CountyGeoId: 39069,
    NAME: "Henry County",
  },
  {
    Location: "43.3773984485,-93.2608475497",
    CountyGeoId: 19195,
    NAME: "Worth County",
  },
  {
    Location: "47.3091802574,-101.831489242",
    CountyGeoId: 38057,
    NAME: "Mercer County",
  },
  {
    Location: "32.3020349252,-92.5577401117",
    CountyGeoId: 22049,
    NAME: "Jackson Parish",
  },
  {
    Location: "39.6255458453,-84.9251420286",
    CountyGeoId: 18161,
    NAME: "Union County",
  },
  {
    Location: "33.4485258506,-89.9201976988",
    CountyGeoId: 28015,
    NAME: "Carroll County",
  },
  {
    Location: "36.3715618824,-95.6043730203",
    CountyGeoId: 40131,
    NAME: "Rogers County",
  },
  {
    Location: "35.1744060361,-98.3751581878",
    CountyGeoId: 40015,
    NAME: "Caddo County",
  },
  {
    Location: "34.6519495513,-90.3754987097",
    CountyGeoId: 28143,
    NAME: "Tunica County",
  },
  {
    Location: "27.3863036127,-80.888585011",
    CountyGeoId: 12093,
    NAME: "Okeechobee County",
  },
  {
    Location: "34.8340257189,-83.990719955",
    CountyGeoId: 13291,
    NAME: "Union County",
  },
  {
    Location: "40.0924597674,-105.35770567",
    CountyGeoId: "08013",
    NAME: "Boulder County",
  },
  {
    Location: "36.3019098987,-95.2308460091",
    CountyGeoId: 40097,
    NAME: "Mayes County",
  },
  {
    Location: "30.2677218795,-92.814120915",
    CountyGeoId: 22053,
    NAME: "Jefferson Davis Parish",
  },
  {
    Location: "33.347307069,-89.2483811971",
    CountyGeoId: 28019,
    NAME: "Choctaw County",
  },
  {
    Location: "34.6310256133,-83.5311320934",
    CountyGeoId: 13137,
    NAME: "Habersham County",
  },
  {
    Location: "37.5815223099,-119.905517029",
    CountyGeoId: "06043",
    NAME: "Mariposa County",
  },
  {
    Location: "36.2878738806,-83.8375139145",
    CountyGeoId: 47173,
    NAME: "Union County",
  },
  {
    Location: "41.1868968805,-97.5684211292",
    CountyGeoId: 31143,
    NAME: "Polk County",
  },
  {
    Location: "41.5939007094,-83.0199778922",
    CountyGeoId: 39123,
    NAME: "Ottawa County",
  },
  {
    Location: "38.4703210348,-89.9283990217",
    CountyGeoId: 17163,
    NAME: "St. Clair County",
  },
  {
    Location: "32.3572296163,-90.852011211",
    CountyGeoId: 28149,
    NAME: "Warren County",
  },
  {
    Location: "34.1365496957,-87.8871383639",
    CountyGeoId: "01093",
    NAME: "Marion County",
  },
  {
    Location: "40.0534755081,-84.2288717703",
    CountyGeoId: 39109,
    NAME: "Miami County",
  },
  {
    Location: "39.4336238198,-123.431553907",
    CountyGeoId: "06045",
    NAME: "Mendocino County",
  },
  {
    Location: "44.7261188782,-120.02756623",
    CountyGeoId: 41069,
    NAME: "Wheeler County",
  },
  {
    Location: "32.8797230696,-90.8132149241",
    CountyGeoId: 28125,
    NAME: "Sharkey County",
  },
  {
    Location: "47.4572804385,-98.2369675679",
    CountyGeoId: 38039,
    NAME: "Griggs County",
  },
  {
    Location: "32.822693435,-92.9957332424",
    CountyGeoId: 22027,
    NAME: "Claiborne Parish",
  },
  {
    Location: "34.7441185158,-99.8462501441",
    CountyGeoId: 40057,
    NAME: "Harmon County",
  },
  {
    Location: "41.1514811895,-73.7533906824",
    CountyGeoId: 36119,
    NAME: "Westchester County",
  },
  {
    Location: "33.0611535027,-82.0007811537",
    CountyGeoId: 13033,
    NAME: "Burke County",
  },
  {
    Location: "18.0244444435,-66.7279463804",
    CountyGeoId: 72111,
    NAME: "Peñuelas Municipio",
  },
  {
    Location: "37.731772508,-87.0872269242",
    CountyGeoId: 21059,
    NAME: "Daviess County",
  },
  {
    Location: "39.8736400746,-104.337801716",
    CountyGeoId: "08001",
    NAME: "Adams County",
  },
  {
    Location: "38.7858226615,-85.4385728826",
    CountyGeoId: 18077,
    NAME: "Jefferson County",
  },
  {
    Location: "45.1231152442,-94.5273094656",
    CountyGeoId: 27093,
    NAME: "Meeker County",
  },
  {
    Location: "18.3392710487,-67.2646843224",
    CountyGeoId: 72117,
    NAME: "Rincón Municipio",
  },
  {
    Location: "44.9985323069,-88.2205851408",
    CountyGeoId: 55083,
    NAME: "Oconto County",
  },
  {
    Location: "39.9731414157,-75.7484542227",
    CountyGeoId: 42029,
    NAME: "Chester County",
  },
  {
    Location: "40.5623281403,-74.1382730507",
    CountyGeoId: 36085,
    NAME: "Richmond County",
  },
  {
    Location: "39.9838920238,-116.268559598",
    CountyGeoId: 32011,
    NAME: "Eureka County",
  },
  {
    Location: "40.5938843197,-102.357579601",
    CountyGeoId: "08095",
    NAME: "Phillips County",
  },
  {
    Location: "18.3275819493,-64.7377153693",
    CountyGeoId: 78020,
    NAME: "St. John Island",
  },
  {
    Location: "39.0655884308,-93.7855426585",
    CountyGeoId: 29107,
    NAME: "Lafayette County",
  },
  {
    Location: "36.3683942057,-90.4173835629",
    CountyGeoId: "05021",
    NAME: "Clay County",
  },
  {
    Location: "48.7675154446,-97.5518190457",
    CountyGeoId: 38067,
    NAME: "Pembina County",
  },
  {
    Location: "43.6714700417,-92.7525135871",
    CountyGeoId: 27099,
    NAME: "Mower County",
  },
  {
    Location: "37.478191684,-86.8488901965",
    CountyGeoId: 21183,
    NAME: "Ohio County",
  },
  {
    Location: "39.0001785652,-89.0241202321",
    CountyGeoId: 17051,
    NAME: "Fayette County",
  },
  {
    Location: "38.8583044048,-78.570851665",
    CountyGeoId: 51171,
    NAME: "Shenandoah County",
  },
  {
    Location: "36.6781704977,-88.9762156953",
    CountyGeoId: 21105,
    NAME: "Hickman County",
  },
  {
    Location: "43.9457158153,-90.6178241184",
    CountyGeoId: 55081,
    NAME: "Monroe County",
  },
  {
    Location: "41.9127594294,-99.9768991117",
    CountyGeoId: 31009,
    NAME: "Blaine County",
  },
  {
    Location: "31.8885309869,-100.529910767",
    CountyGeoId: 48081,
    NAME: "Coke County",
  },
  {
    Location: "46.4315588357,-117.545169287",
    CountyGeoId: 53023,
    NAME: "Garfield County",
  },
  {
    Location: "35.5932989746,-77.3744965519",
    CountyGeoId: 37147,
    NAME: "Pitt County",
  },
  {
    Location: "31.3942193486,-94.1681932369",
    CountyGeoId: 48405,
    NAME: "San Augustine County",
  },
  {
    Location: "37.9347459676,-121.271403235",
    CountyGeoId: "06077",
    NAME: "San Joaquin County",
  },
  {
    Location: "45.934046167,-96.0121840981",
    CountyGeoId: 27051,
    NAME: "Grant County",
  },
  {
    Location: "33.12869729,-90.5266210224",
    CountyGeoId: 28053,
    NAME: "Humphreys County",
  },
  {
    Location: "47.0454432493,-110.266046893",
    CountyGeoId: 30045,
    NAME: "Judith Basin County",
  },
  {
    Location: "39.3338632113,-82.045128893",
    CountyGeoId: 39009,
    NAME: "Athens County",
  },
  {
    Location: "35.5806641869,-108.26182312",
    CountyGeoId: 35031,
    NAME: "McKinley County",
  },
  {
    Location: "35.8989479924,-82.3076279784",
    CountyGeoId: 37199,
    NAME: "Yancey County",
  },
  {
    Location: "38.7838065024,-97.6499306446",
    CountyGeoId: 20169,
    NAME: "Saline County",
  },
  {
    Location: "35.7902443741,-78.6503081729",
    CountyGeoId: 37183,
    NAME: "Wake County",
  },
  {
    Location: "44.7968254915,-73.2948285063",
    CountyGeoId: 50013,
    NAME: "Grand Isle County",
  },
  {
    Location: "18.3734438232,-66.5602142106",
    CountyGeoId: 72054,
    NAME: "Florida Municipio",
  },
  {
    Location: "32.2883800156,-85.1849624464",
    CountyGeoId: "01113",
    NAME: "Russell County",
  },
  {
    Location: "37.8418945509,-78.2771863744",
    CountyGeoId: 51065,
    NAME: "Fluvanna County",
  },
  {
    Location: "36.4549370868,-81.8517719844",
    CountyGeoId: 47091,
    NAME: "Johnson County",
  },
  {
    Location: "30.4867787311,-99.7486955832",
    CountyGeoId: 48267,
    NAME: "Kimble County",
  },
  {
    Location: "38.299192601,-77.4871504649",
    CountyGeoId: 51630,
    NAME: "Fredericksburg city",
  },
  {
    Location: "28.3450693013,-99.0996626872",
    CountyGeoId: 48283,
    NAME: "La Salle County",
  },
  {
    Location: "17.9972184165,-66.4903715317",
    CountyGeoId: 72075,
    NAME: "Juana Díaz Municipio",
  },
  {
    Location: "44.5477641459,-99.0049301861",
    CountyGeoId: 46059,
    NAME: "Hand County",
  },
  {
    Location: "41.9161186535,-85.0590443604",
    CountyGeoId: 26023,
    NAME: "Branch County",
  },
  {
    Location: "44.2421397159,-94.7275713188",
    CountyGeoId: 27015,
    NAME: "Brown County",
  },
  {
    Location: "30.2413631478,-84.8829111582",
    CountyGeoId: 12077,
    NAME: "Liberty County",
  },
  {
    Location: "33.1134825704,-94.7326503668",
    CountyGeoId: 48343,
    NAME: "Morris County",
  },
  {
    Location: "48.2591824926,-107.913235675",
    CountyGeoId: 30071,
    NAME: "Phillips County",
  },
  {
    Location: "38.5120104943,-78.8757516437",
    CountyGeoId: 51165,
    NAME: "Rockingham County",
  },
  {
    Location: "30.5794688821,-84.6135993294",
    CountyGeoId: 12039,
    NAME: "Gadsden County",
  },
  {
    Location: "36.434424701,-81.5005211955",
    CountyGeoId: 37009,
    NAME: "Ashe County",
  },
  {
    Location: "31.4838062078,-81.3755663746",
    CountyGeoId: 13191,
    NAME: "McIntosh County",
  },
  {
    Location: "41.3356001857,-91.7178701959",
    CountyGeoId: 19183,
    NAME: "Washington County",
  },
  {
    Location: "27.7610624301,-99.3315653042",
    CountyGeoId: 48479,
    NAME: "Webb County",
  },
  {
    Location: "47.0376054401,-122.13722281",
    CountyGeoId: 53053,
    NAME: "Pierce County",
  },
  {
    Location: "35.2021778635,-82.7983001279",
    CountyGeoId: 37175,
    NAME: "Transylvania County",
  },
  {
    Location: "37.805131267,-85.4659885855",
    CountyGeoId: 21179,
    NAME: "Nelson County",
  },
  {
    Location: "46.5347308489,-118.898842401",
    CountyGeoId: 53021,
    NAME: "Franklin County",
  },
  {
    Location: "26.8998432654,-81.9503159678",
    CountyGeoId: 12015,
    NAME: "Charlotte County",
  },
  {
    Location: "40.7841735523,-96.687755507",
    CountyGeoId: 31109,
    NAME: "Lancaster County",
  },
  {
    Location: "34.9649255862,-101.357404339",
    CountyGeoId: 48011,
    NAME: "Armstrong County",
  },
  {
    Location: "40.5111130544,-99.4145428942",
    CountyGeoId: 31137,
    NAME: "Phelps County",
  },
  {
    Location: "45.5251213571,-87.5096840021",
    CountyGeoId: 26109,
    NAME: "Menominee County",
  },
  {
    Location: "39.4386164734,-84.5756449351",
    CountyGeoId: 39017,
    NAME: "Butler County",
  },
  {
    Location: "40.606258463,-87.310906018",
    CountyGeoId: 18007,
    NAME: "Benton County",
  },
  {
    Location: "46.1126539091,-101.040305284",
    CountyGeoId: 38085,
    NAME: "Sioux County",
  },
  {
    Location: "42.4557108473,-98.7838447084",
    CountyGeoId: 31089,
    NAME: "Holt County",
  },
  {
    Location: "34.0245101817,-96.7691343971",
    CountyGeoId: 40095,
    NAME: "Marshall County",
  },
  {
    Location: "46.5777681751,-122.392638348",
    CountyGeoId: 53041,
    NAME: "Lewis County",
  },
  {
    Location: "38.4561871377,-96.1526397502",
    CountyGeoId: 20111,
    NAME: "Lyon County",
  },
  {
    Location: "31.0376717131,-97.4782023977",
    CountyGeoId: 48027,
    NAME: "Bell County",
  },
  {
    Location: "26.3967284864,-98.1810871979",
    CountyGeoId: 48215,
    NAME: "Hidalgo County",
  },
  {
    Location: "38.4813047182,-100.466398449",
    CountyGeoId: 20101,
    NAME: "Lane County",
  },
  {
    Location: "41.5459746701,-103.710476768",
    CountyGeoId: 31007,
    NAME: "Banner County",
  },
  {
    Location: "41.3307142217,-94.0155619459",
    CountyGeoId: 19121,
    NAME: "Madison County",
  },
  {
    Location: "43.0820642869,-94.6781370701",
    CountyGeoId: 19147,
    NAME: "Palo Alto County",
  },
  {
    Location: "33.7815571316,-83.7338466262",
    CountyGeoId: 13297,
    NAME: "Walton County",
  },
  {
    Location: "38.3916666453,-97.6480798696",
    CountyGeoId: 20113,
    NAME: "McPherson County",
  },
  {
    Location: "44.3586271805,-103.792224515",
    CountyGeoId: 46081,
    NAME: "Lawrence County",
  },
  {
    Location: "36.9325975948,-92.4988057662",
    CountyGeoId: 29067,
    NAME: "Douglas County",
  },
  {
    Location: "39.0634313879,-120.717645936",
    CountyGeoId: "06061",
    NAME: "Placer County",
  },
  {
    Location: "31.4951939674,-98.5954600939",
    CountyGeoId: 48333,
    NAME: "Mills County",
  },
  {
    Location: "37.5630613882,-101.784183191",
    CountyGeoId: 20187,
    NAME: "Stanton County",
  },
  {
    Location: "40.6735903894,-120.594332834",
    CountyGeoId: "06035",
    NAME: "Lassen County",
  },
  {
    Location: "46.7140170601,-85.564118869",
    CountyGeoId: 26095,
    NAME: "Luce County",
  },
  {
    Location: "38.0423815985,-116.471931336",
    CountyGeoId: 32023,
    NAME: "Nye County",
  },
  {
    Location: "36.4411634364,-82.9446876646",
    CountyGeoId: 47073,
    NAME: "Hawkins County",
  },
  {
    Location: "46.1125903386,-103.520671138",
    CountyGeoId: 38011,
    NAME: "Bowman County",
  },
  {
    Location: "33.4139430365,-84.4941911259",
    CountyGeoId: 13113,
    NAME: "Fayette County",
  },
  {
    Location: "35.6872037952,-83.9255394315",
    CountyGeoId: 47009,
    NAME: "Blount County",
  },
  {
    Location: "36.2062757623,-81.1633856618",
    CountyGeoId: 37193,
    NAME: "Wilkes County",
  },
  {
    Location: "39.6597402335,-94.8059357005",
    CountyGeoId: 29021,
    NAME: "Buchanan County",
  },
  {
    Location: "39.9310397361,-85.3964353742",
    CountyGeoId: 18065,
    NAME: "Henry County",
  },
  {
    Location: "40.5218545215,-80.5738922207",
    CountyGeoId: 54029,
    NAME: "Hancock County",
  },
  {
    Location: "38.941491042,-91.4702087982",
    CountyGeoId: 29139,
    NAME: "Montgomery County",
  },
  {
    Location: "32.3060301333,-101.951216779",
    CountyGeoId: 48317,
    NAME: "Martin County",
  },
  {
    Location: "33.9504748127,-90.1732642352",
    CountyGeoId: 28135,
    NAME: "Tallahatchie County",
  },
  {
    Location: "41.6594961424,-108.879430782",
    CountyGeoId: 56037,
    NAME: "Sweetwater County",
  },
  {
    Location: "39.4802974375,-97.6492819059",
    CountyGeoId: 20029,
    NAME: "Cloud County",
  },
  {
    Location: "38.0249578597,-87.5857849635",
    CountyGeoId: 18163,
    NAME: "Vanderburgh County",
  },
  {
    Location: "31.9229299181,-83.768102221",
    CountyGeoId: 13081,
    NAME: "Crisp County",
  },
  {
    Location: "33.9746150928,-99.7779848782",
    CountyGeoId: 48155,
    NAME: "Foard County",
  },
  {
    Location: "30.7289364182,-92.4059042007",
    CountyGeoId: 22039,
    NAME: "Evangeline Parish",
  },
  {
    Location: "36.7231381944,-88.6512057677",
    CountyGeoId: 21083,
    NAME: "Graves County",
  },
  {
    Location: "36.6867158656,-91.4032949632",
    CountyGeoId: 29149,
    NAME: "Oregon County",
  },
  {
    Location: "36.9171118758,-81.0786676313",
    CountyGeoId: 51197,
    NAME: "Wythe County",
  },
  {
    Location: "37.2372753377,-97.4765502094",
    CountyGeoId: 20191,
    NAME: "Sumner County",
  },
  {
    Location: "61.4170040809,-144.760229318",
    CountyGeoId: "02261",
    NAME: "Valdez-Cordova Census Area",
  },
  {
    Location: "45.8799717759,-91.1446648957",
    CountyGeoId: 55113,
    NAME: "Sawyer County",
  },
  {
    Location: "29.583050959,-97.9485847382",
    CountyGeoId: 48187,
    NAME: "Guadalupe County",
  },
  {
    Location: "31.5333740309,-84.2162536823",
    CountyGeoId: 13095,
    NAME: "Dougherty County",
  },
  {
    Location: "43.2165580516,-112.398078523",
    CountyGeoId: 16011,
    NAME: "Bingham County",
  },
  {
    Location: "43.6942207429,-101.628137211",
    CountyGeoId: 46071,
    NAME: "Jackson County",
  },
  {
    Location: "37.6917036301,-99.8879423784",
    CountyGeoId: 20057,
    NAME: "Ford County",
  },
  {
    Location: "38.5456646906,-82.9222922454",
    CountyGeoId: 21089,
    NAME: "Greenup County",
  },
  {
    Location: "33.4249531354,-88.8793051624",
    CountyGeoId: 28105,
    NAME: "Oktibbeha County",
  },
  {
    Location: "45.943781443,-123.08825568",
    CountyGeoId: 41009,
    NAME: "Columbia County",
  },
  {
    Location: "39.1962111616,-86.2273748048",
    CountyGeoId: 18013,
    NAME: "Brown County",
  },
  {
    Location: "34.650325267,-89.9447795242",
    CountyGeoId: 28137,
    NAME: "Tate County",
  },
  {
    Location: "44.6458436266,-123.907654696",
    CountyGeoId: 41041,
    NAME: "Lincoln County",
  },
  {
    Location: "33.0862934726,-89.5815415958",
    CountyGeoId: 28007,
    NAME: "Attala County",
  },
  {
    Location: "44.8982857088,-89.759058929",
    CountyGeoId: 55073,
    NAME: "Marathon County",
  },
  {
    Location: "36.7099124483,-93.8290683344",
    CountyGeoId: 29009,
    NAME: "Barry County",
  },
  {
    Location: "42.3654992437,-123.555497668",
    CountyGeoId: 41033,
    NAME: "Josephine County",
  },
  {
    Location: "31.1883904668,-83.7688482856",
    CountyGeoId: 13071,
    NAME: "Colquitt County",
  },
  {
    Location: "33.2808768859,-88.0886925942",
    CountyGeoId: "01107",
    NAME: "Pickens County",
  },
  {
    Location: "38.3366204607,-112.127186525",
    CountyGeoId: 49031,
    NAME: "Piute County",
  },
  {
    Location: "40.8681663764,-110.955893455",
    CountyGeoId: 49043,
    NAME: "Summit County",
  },
  {
    Location: "30.7100896074,-82.8939351883",
    CountyGeoId: 13101,
    NAME: "Echols County",
  },
  {
    Location: "33.6542354352,-84.0266082893",
    CountyGeoId: 13247,
    NAME: "Rockdale County",
  },
  {
    Location: "36.5085107806,-108.320603167",
    CountyGeoId: 35045,
    NAME: "San Juan County",
  },
  {
    Location: "38.7646163949,-91.1606930888",
    CountyGeoId: 29219,
    NAME: "Warren County",
  },
  {
    Location: "47.3529575649,-115.892435463",
    CountyGeoId: 16079,
    NAME: "Shoshone County",
  },
  {
    Location: "35.5178069265,-78.3657109025",
    CountyGeoId: 37101,
    NAME: "Johnston County",
  },
  {
    Location: "37.2324840341,-121.696278854",
    CountyGeoId: "06085",
    NAME: "Santa Clara County",
  },
  {
    Location: "43.9100683718,-82.8555082084",
    CountyGeoId: 26063,
    NAME: "Huron County",
  },
  {
    Location: "43.0321563061,-85.549296283",
    CountyGeoId: 26081,
    NAME: "Kent County",
  },
  {
    Location: "31.8369546469,-95.1651831384",
    CountyGeoId: 48073,
    NAME: "Cherokee County",
  },
  {
    Location: "36.8063197395,-87.8733713765",
    CountyGeoId: 21221,
    NAME: "Trigg County",
  },
  {
    Location: "39.7172646082,-75.1414130536",
    CountyGeoId: 34015,
    NAME: "Gloucester County",
  },
  {
    Location: "34.9660190366,-102.604926837",
    CountyGeoId: 48117,
    NAME: "Deaf Smith County",
  },
  {
    Location: "39.3105207472,-94.4208652851",
    CountyGeoId: 29047,
    NAME: "Clay County",
  },
  {
    Location: "36.6547348009,-93.0411071081",
    CountyGeoId: 29213,
    NAME: "Taney County",
  },
  {
    Location: "18.1281740486,-66.4728039205",
    CountyGeoId: 72149,
    NAME: "Villalba Municipio",
  },
  {
    Location: "36.7497076523,-100.476834839",
    CountyGeoId: 40007,
    NAME: "Beaver County",
  },
  {
    Location: "42.7315661359,-92.7901934384",
    CountyGeoId: 19023,
    NAME: "Butler County",
  },
  {
    Location: "34.6866819092,-80.7054233818",
    CountyGeoId: 45057,
    NAME: "Lancaster County",
  },
  {
    Location: "43.0825803991,-95.1509194224",
    CountyGeoId: 19041,
    NAME: "Clay County",
  },
  {
    Location: "48.6855411394,-99.2457570613",
    CountyGeoId: 38095,
    NAME: "Towner County",
  },
  {
    Location: "39.8714520053,-77.2178797931",
    CountyGeoId: 42001,
    NAME: "Adams County",
  },
  {
    Location: "38.9969300555,-85.6280646001",
    CountyGeoId: 18079,
    NAME: "Jennings County",
  },
  {
    Location: "39.8308020875,-92.5646083146",
    CountyGeoId: 29121,
    NAME: "Macon County",
  },
  {
    Location: "34.4855798533,-97.8515306642",
    CountyGeoId: 40137,
    NAME: "Stephens County",
  },
  {
    Location: "44.4524547726,-116.784781333",
    CountyGeoId: 16087,
    NAME: "Washington County",
  },
  {
    Location: "44.0229951536,-96.2586448321",
    CountyGeoId: 27117,
    NAME: "Pipestone County",
  },
  {
    Location: "39.0474329308,-84.1519178888",
    CountyGeoId: 39025,
    NAME: "Clermont County",
  },
  {
    Location: "36.7961439421,-97.7861241175",
    CountyGeoId: 40053,
    NAME: "Grant County",
  },
  {
    Location: "30.4401362441,-90.7279074417",
    CountyGeoId: 22063,
    NAME: "Livingston Parish",
  },
  {
    Location: "18.3287263734,-66.9712187022",
    CountyGeoId: 72131,
    NAME: "San Sebastián Municipio",
  },
  {
    Location: "39.6017802193,-94.4045940298",
    CountyGeoId: 29049,
    NAME: "Clinton County",
  },
  {
    Location: "44.9741566636,-70.4440737272",
    CountyGeoId: 23007,
    NAME: "Franklin County",
  },
  {
    Location: "38.6667977063,-107.031700114",
    CountyGeoId: "08051",
    NAME: "Gunnison County",
  },
  {
    Location: "37.3191787991,-102.560476646",
    CountyGeoId: "08009",
    NAME: "Baca County",
  },
  {
    Location: "31.9004024441,-97.6343490687",
    CountyGeoId: 48035,
    NAME: "Bosque County",
  },
  {
    Location: "47.350535135,-123.183009775",
    CountyGeoId: 53045,
    NAME: "Mason County",
  },
  {
    Location: "40.5300832055,-100.394202624",
    CountyGeoId: 31063,
    NAME: "Frontier County",
  },
  {
    Location: "35.1993218755,-94.2741206259",
    CountyGeoId: "05131",
    NAME: "Sebastian County",
  },
  {
    Location: "41.6837548102,-94.5010550107",
    CountyGeoId: 19077,
    NAME: "Guthrie County",
  },
  {
    Location: "35.6030197595,-88.108772783",
    CountyGeoId: 47039,
    NAME: "Decatur County",
  },
  {
    Location: "35.5740321244,-90.6629400421",
    CountyGeoId: "05111",
    NAME: "Poinsett County",
  },
  {
    Location: "36.991034312,-85.0586875538",
    CountyGeoId: 21207,
    NAME: "Russell County",
  },
  {
    Location: "46.9296269068,-122.832293746",
    CountyGeoId: 53067,
    NAME: "Thurston County",
  },
  {
    Location: "43.6714440477,-91.4928319425",
    CountyGeoId: 27055,
    NAME: "Houston County",
  },
  {
    Location: "32.3014720068,-99.8901220928",
    CountyGeoId: 48441,
    NAME: "Taylor County",
  },
  {
    Location: "41.6733545588,-71.5790218623",
    CountyGeoId: 44003,
    NAME: "Kent County",
  },
  {
    Location: "42.990603511,-72.7137985374",
    CountyGeoId: 50025,
    NAME: "Windham County",
  },
  {
    Location: "39.416820119,-95.793663658",
    CountyGeoId: 20085,
    NAME: "Jackson County",
  },
  {
    Location: "36.6803610038,-78.3626942045",
    CountyGeoId: 51117,
    NAME: "Mecklenburg County",
  },
  {
    Location: "30.1477719789,-84.3756074885",
    CountyGeoId: 12129,
    NAME: "Wakulla County",
  },
  {
    Location: "33.5419006063,-84.3576542517",
    CountyGeoId: 13063,
    NAME: "Clayton County",
  },
  {
    Location: "38.0796491352,-86.6380317986",
    CountyGeoId: 18123,
    NAME: "Perry County",
  },
  {
    Location: "34.0017844854,-85.1881533822",
    CountyGeoId: 13233,
    NAME: "Polk County",
  },
  {
    Location: "32.0922715486,-92.1166058761",
    CountyGeoId: 22021,
    NAME: "Caldwell Parish",
  },
  {
    Location: "36.0827733527,-78.2856965824",
    CountyGeoId: 37069,
    NAME: "Franklin County",
  },
  {
    Location: "32.0016607751,-91.3400729965",
    CountyGeoId: 22107,
    NAME: "Tensas Parish",
  },
  {
    Location: "35.9530379334,-81.5464366451",
    CountyGeoId: 37027,
    NAME: "Caldwell County",
  },
  {
    Location: "38.1616348912,-91.9248859666",
    CountyGeoId: 29125,
    NAME: "Maries County",
  },
  {
    Location: "38.0374914786,-78.4854998848",
    CountyGeoId: 51540,
    NAME: "Charlottesville city",
  },
  {
    Location: "44.2411163796,-114.281712396",
    CountyGeoId: 16037,
    NAME: "Custer County",
  },
  {
    Location: "45.5467908912,-122.414922836",
    CountyGeoId: 41051,
    NAME: "Multnomah County",
  },
  {
    Location: "44.0056617687,-72.3768216078",
    CountyGeoId: 50017,
    NAME: "Orange County",
  },
  {
    Location: "39.3069999343,-85.5011430488",
    CountyGeoId: 18031,
    NAME: "Decatur County",
  },
  {
    Location: "42.6684869829,-88.5419040709",
    CountyGeoId: 55127,
    NAME: "Walworth County",
  },
  {
    Location: "38.5388085859,-118.435214254",
    CountyGeoId: 32021,
    NAME: "Mineral County",
  },
  {
    Location: "38.525292575,-122.922544658",
    CountyGeoId: "06097",
    NAME: "Sonoma County",
  },
  {
    Location: "29.3502075785,-100.417946618",
    CountyGeoId: 48271,
    NAME: "Kinney County",
  },
  {
    Location: "46.977452062,-100.468737737",
    CountyGeoId: 38015,
    NAME: "Burleigh County",
  },
  {
    Location: "31.5323843939,-90.4539712434",
    CountyGeoId: 28085,
    NAME: "Lincoln County",
  },
  {
    Location: "18.328993222,-65.8878876071",
    CountyGeoId: 72029,
    NAME: "Canóvanas Municipio",
  },
  {
    Location: "40.6485010044,-96.1347754194",
    CountyGeoId: 31131,
    NAME: "Otoe County",
  },
  {
    Location: "33.4941024198,-89.6163956957",
    CountyGeoId: 28097,
    NAME: "Montgomery County",
  },
  {
    Location: "41.3012406125,-70.12811317",
    CountyGeoId: 25019,
    NAME: "Nantucket County",
  },
  {
    Location: "41.8935293191,-88.7703159232",
    CountyGeoId: 17037,
    NAME: "DeKalb County",
  },
  {
    Location: "33.2704260085,-83.0006868923",
    CountyGeoId: 13141,
    NAME: "Hancock County",
  },
  {
    Location: "38.2462130511,-78.0136665279",
    CountyGeoId: 51137,
    NAME: "Orange County",
  },
  {
    Location: "40.9097216232,-96.1408663039",
    CountyGeoId: 31025,
    NAME: "Cass County",
  },
  {
    Location: "29.2778616455,-96.2221042394",
    CountyGeoId: 48481,
    NAME: "Wharton County",
  },
  {
    Location: "39.3803407733,-94.7737543641",
    CountyGeoId: 29165,
    NAME: "Platte County",
  },
  {
    Location: "45.0275448913,-84.127204086",
    CountyGeoId: 26119,
    NAME: "Montmorency County",
  },
  {
    Location: "37.1913273481,-95.297576142",
    CountyGeoId: 20099,
    NAME: "Labette County",
  },
  {
    Location: "41.0893204311,-111.573150356",
    CountyGeoId: 49029,
    NAME: "Morgan County",
  },
  {
    Location: "27.6813329888,-98.5089060613",
    CountyGeoId: 48131,
    NAME: "Duval County",
  },
  {
    Location: "45.8991791693,-91.7912346303",
    CountyGeoId: 55129,
    NAME: "Washburn County",
  },
  {
    Location: "44.6894956175,-71.3055333389",
    CountyGeoId: 33007,
    NAME: "Coos County",
  },
  {
    Location: "43.998861771,-76.052068666",
    CountyGeoId: 36045,
    NAME: "Jefferson County",
  },
  {
    Location: "40.1746293382,-88.9040887049",
    CountyGeoId: 17039,
    NAME: "De Witt County",
  },
  {
    Location: "38.4111443545,-91.0749938771",
    CountyGeoId: 29071,
    NAME: "Franklin County",
  },
  {
    Location: "43.1934752745,-117.623098133",
    CountyGeoId: 41045,
    NAME: "Malheur County",
  },
  {
    Location: "35.3341018022,-81.5555471412",
    CountyGeoId: 37045,
    NAME: "Cleveland County",
  },
  {
    Location: "43.6748244159,-97.787331341",
    CountyGeoId: 46061,
    NAME: "Hanson County",
  },
  {
    Location: "42.7354936212,-95.1511488586",
    CountyGeoId: 19021,
    NAME: "Buena Vista County",
  },
  {
    Location: "39.1135952897,-79.5649741709",
    CountyGeoId: 54093,
    NAME: "Tucker County",
  },
  {
    Location: "30.7712321484,-94.3765939282",
    CountyGeoId: 48457,
    NAME: "Tyler County",
  },
  {
    Location: "36.712180279,-85.7165195846",
    CountyGeoId: 21171,
    NAME: "Monroe County",
  },
  {
    Location: "35.9790563044,-94.2155848036",
    CountyGeoId: "05143",
    NAME: "Washington County",
  },
  {
    Location: "48.399068947,-117.855153321",
    CountyGeoId: 53065,
    NAME: "Stevens County",
  },
  {
    Location: "39.2507169303,-76.9311943444",
    CountyGeoId: 24027,
    NAME: "Howard County",
  },
  {
    Location: "41.8064287933,-72.7328122495",
    CountyGeoId: "09003",
    NAME: "Hartford County",
  },
  {
    Location: "18.0231618268,-67.1857585947",
    CountyGeoId: 72023,
    NAME: "Cabo Rojo Municipio",
  },
  {
    Location: "48.3436752481,-103.48018589",
    CountyGeoId: 38105,
    NAME: "Williams County",
  },
  {
    Location: "43.6776345435,-103.451555966",
    CountyGeoId: 46033,
    NAME: "Custer County",
  },
  {
    Location: "18.1479975123,-65.9764543268",
    CountyGeoId: 72129,
    NAME: "San Lorenzo Municipio",
  },
  {
    Location: "30.7882970504,-98.1824471655",
    CountyGeoId: 48053,
    NAME: "Burnet County",
  },
  {
    Location: "31.5502158141,-90.1069711692",
    CountyGeoId: 28077,
    NAME: "Lawrence County",
  },
  {
    Location: "34.9312465729,-81.9908274743",
    CountyGeoId: 45083,
    NAME: "Spartanburg County",
  },
  {
    Location: "18.4495762857,-66.4877274773",
    CountyGeoId: 72091,
    NAME: "Manatí Municipio",
  },
  {
    Location: "35.8070259189,-80.8734378255",
    CountyGeoId: 37097,
    NAME: "Iredell County",
  },
  {
    Location: "32.7399038738,-99.8787442497",
    CountyGeoId: 48253,
    NAME: "Jones County",
  },
  {
    Location: "43.0217229031,-83.7067110419",
    CountyGeoId: 26049,
    NAME: "Genesee County",
  },
  {
    Location: "35.2030564629,-97.3264528463",
    CountyGeoId: 40027,
    NAME: "Cleveland County",
  },
  {
    Location: "41.7164225715,-74.7681429805",
    CountyGeoId: 36105,
    NAME: "Sullivan County",
  },
  {
    Location: "45.0387533824,-92.883969287",
    CountyGeoId: 27163,
    NAME: "Washington County",
  },
  {
    Location: "39.6557509891,-93.9827993285",
    CountyGeoId: 29025,
    NAME: "Caldwell County",
  },
  {
    Location: "41.3070676864,-104.689620569",
    CountyGeoId: 56021,
    NAME: "Laramie County",
  },
  {
    Location: "30.7154778208,-104.140019787",
    CountyGeoId: 48243,
    NAME: "Jeff Davis County",
  },
  {
    Location: "18.2664113682,-65.9792691875",
    CountyGeoId: 72063,
    NAME: "Gurabo Municipio",
  },
  {
    Location: "35.9254374123,-83.121183014",
    CountyGeoId: 47029,
    NAME: "Cocke County",
  },
  {
    Location: "42.2486331385,-78.6788502937",
    CountyGeoId: 36009,
    NAME: "Cattaraugus County",
  },
  {
    Location: "35.6087114537,-84.9243960855",
    CountyGeoId: 47143,
    NAME: "Rhea County",
  },
  {
    Location: "31.0536324937,-82.4236757904",
    CountyGeoId: 13299,
    NAME: "Ware County",
  },
  {
    Location: "42.7378473183,-96.2140273941",
    CountyGeoId: 19149,
    NAME: "Plymouth County",
  },
  {
    Location: "45.8627174808,-92.3675651683",
    CountyGeoId: 55013,
    NAME: "Burnett County",
  },
  {
    Location: "45.0694080018,-91.2798860249",
    CountyGeoId: 55017,
    NAME: "Chippewa County",
  },
  {
    Location: "42.6727950993,-82.9101752594",
    CountyGeoId: 26099,
    NAME: "Macomb County",
  },
  {
    Location: "36.0132038869,-82.1635815487",
    CountyGeoId: 37121,
    NAME: "Mitchell County",
  },
  {
    Location: "39.178267375,-81.0629473806",
    CountyGeoId: 54085,
    NAME: "Ritchie County",
  },
  {
    Location: "42.1602170275,-75.8196181695",
    CountyGeoId: 36007,
    NAME: "Broome County",
  },
  {
    Location: "40.3850195156,-80.7609722941",
    CountyGeoId: 39081,
    NAME: "Jefferson County",
  },
  {
    Location: "33.6206818158,-95.0503607355",
    CountyGeoId: 48387,
    NAME: "Red River County",
  },
  {
    Location: "32.3472191955,-93.0559517637",
    CountyGeoId: 22013,
    NAME: "Bienville Parish",
  },
  {
    Location: "34.7699753373,-92.3119257562",
    CountyGeoId: "05119",
    NAME: "Pulaski County",
  },
  {
    Location: "45.9989328531,-85.0094165914",
    CountyGeoId: 26097,
    NAME: "Mackinac County",
  },
  {
    Location: "43.6468567079,-84.3881091147",
    CountyGeoId: 26111,
    NAME: "Midland County",
  },
  {
    Location: "45.4187968009,-99.2153257614",
    CountyGeoId: 46045,
    NAME: "Edmunds County",
  },
  {
    Location: "42.6603998737,-83.385817604",
    CountyGeoId: 26125,
    NAME: "Oakland County",
  },
  {
    Location: "46.8161762124,-116.711723179",
    CountyGeoId: 16057,
    NAME: "Latah County",
  },
  {
    Location: "30.8636815475,-83.9193134094",
    CountyGeoId: 13275,
    NAME: "Thomas County",
  },
  {
    Location: "39.7843853292,-99.9034768772",
    CountyGeoId: 20137,
    NAME: "Norton County",
  },
  {
    Location: "38.2368379381,-95.7341117812",
    CountyGeoId: 20031,
    NAME: "Coffey County",
  },
  {
    Location: "31.482942855,-91.3534982605",
    CountyGeoId: 28001,
    NAME: "Adams County",
  },
  {
    Location: "40.2738181301,-80.5764203083",
    CountyGeoId: 54009,
    NAME: "Brooke County",
  },
  {
    Location: "37.1339863881,-81.1302139229",
    CountyGeoId: 51021,
    NAME: "Bland County",
  },
  {
    Location: "48.4820761134,-121.801606828",
    CountyGeoId: 53057,
    NAME: "Skagit County",
  },
  {
    Location: "43.29699417,-71.0288020158",
    CountyGeoId: 33017,
    NAME: "Strafford County",
  },
  {
    Location: "37.6395779036,-84.5376342293",
    CountyGeoId: 21079,
    NAME: "Garrard County",
  },
  {
    Location: "32.847853212,-86.718813672",
    CountyGeoId: "01021",
    NAME: "Chilton County",
  },
  {
    Location: "46.8605284936,-105.378007019",
    CountyGeoId: 30079,
    NAME: "Prairie County",
  },
  {
    Location: "37.3158384919,-104.03869984",
    CountyGeoId: "08071",
    NAME: "Las Animas County",
  },
  {
    Location: "43.3775677756,-93.7341954719",
    CountyGeoId: 19189,
    NAME: "Winnebago County",
  },
  {
    Location: "36.7274816255,-85.1360135602",
    CountyGeoId: 21053,
    NAME: "Clinton County",
  },
  {
    Location: "45.5798653729,-117.181020009",
    CountyGeoId: 41063,
    NAME: "Wallowa County",
  },
  {
    Location: "32.0191127391,-89.1188598215",
    CountyGeoId: 28061,
    NAME: "Jasper County",
  },
  {
    Location: "42.2638016191,-110.655947277",
    CountyGeoId: 56023,
    NAME: "Lincoln County",
  },
  {
    Location: "33.5938097958,-96.1068276828",
    CountyGeoId: 48147,
    NAME: "Fannin County",
  },
  {
    Location: "40.4154405354,-76.7794746983",
    CountyGeoId: 42043,
    NAME: "Dauphin County",
  },
  {
    Location: "41.1676828401,-81.1974037386",
    CountyGeoId: 39133,
    NAME: "Portage County",
  },
  {
    Location: "41.287491921,-110.547561693",
    CountyGeoId: 56041,
    NAME: "Uinta County",
  },
  {
    Location: "41.4068465707,-118.111965828",
    CountyGeoId: 32013,
    NAME: "Humboldt County",
  },
  {
    Location: "38.4461016023,-87.8442748908",
    CountyGeoId: 17185,
    NAME: "Wabash County",
  },
  {
    Location: "41.0908708811,-85.0665620402",
    CountyGeoId: 18003,
    NAME: "Allen County",
  },
  {
    Location: "37.2088402055,-86.2386201495",
    CountyGeoId: 21061,
    NAME: "Edmonson County",
  },
  {
    Location: "44.9465839939,-91.896403608",
    CountyGeoId: 55033,
    NAME: "Dunn County",
  },
  {
    Location: "34.3754273152,-83.2291886374",
    CountyGeoId: 13119,
    NAME: "Franklin County",
  },
  {
    Location: "37.7601394811,-77.4911573271",
    CountyGeoId: 51085,
    NAME: "Hanover County",
  },
  {
    Location: "43.6738441803,-93.3488158578",
    CountyGeoId: 27047,
    NAME: "Freeborn County",
  },
  {
    Location: "18.3233669794,-65.3008009927",
    CountyGeoId: 72049,
    NAME: "Culebra Municipio",
  },
  {
    Location: "37.7877775498,-80.0061751875",
    CountyGeoId: 51005,
    NAME: "Alleghany County",
  },
  {
    Location: "41.8506075383,-103.70794664",
    CountyGeoId: 31157,
    NAME: "Scotts Bluff County",
  },
  {
    Location: "39.2310459341,-89.4788485523",
    CountyGeoId: 17135,
    NAME: "Montgomery County",
  },
  {
    Location: "18.2106459126,-66.588445334",
    CountyGeoId: 72073,
    NAME: "Jayuya Municipio",
  },
  {
    Location: "39.0773714416,-83.0668541556",
    CountyGeoId: 39131,
    NAME: "Pike County",
  },
  {
    Location: "38.5231613136,-99.3092409497",
    CountyGeoId: 20165,
    NAME: "Rush County",
  },
  {
    Location: "38.311825371,-87.584594368",
    CountyGeoId: 18051,
    NAME: "Gibson County",
  },
  {
    Location: "40.8507725735,-82.9197777024",
    CountyGeoId: 39033,
    NAME: "Crawford County",
  },
  {
    Location: "40.3876548763,-95.8498160648",
    CountyGeoId: 31127,
    NAME: "Nemaha County",
  },
  {
    Location: "33.214771,-81.0542337736",
    CountyGeoId: 45009,
    NAME: "Bamberg County",
  },
  {
    Location: "38.326661062,-103.784825661",
    CountyGeoId: "08025",
    NAME: "Crowley County",
  },
  {
    Location: "30.5795335845,-95.1669012009",
    CountyGeoId: 48407,
    NAME: "San Jacinto County",
  },
  {
    Location: "29.9446888715,-98.7115552055",
    CountyGeoId: 48259,
    NAME: "Kendall County",
  },
  {
    Location: "46.9346483657,-95.673923543",
    CountyGeoId: 27005,
    NAME: "Becker County",
  },
  {
    Location: "46.2850391756,-100.238740757",
    CountyGeoId: 38029,
    NAME: "Emmons County",
  },
  {
    Location: "31.1261225461,-87.1616198682",
    CountyGeoId: "01053",
    NAME: "Escambia County",
  },
  {
    Location: "33.1755486771,-95.2184193975",
    CountyGeoId: 48159,
    NAME: "Franklin County",
  },
  {
    Location: "42.6604993637,-90.1317220132",
    CountyGeoId: 55065,
    NAME: "Lafayette County",
  },
  {
    Location: "44.7279402249,-71.7361943775",
    CountyGeoId: 50009,
    NAME: "Essex County",
  },
  {
    Location: "32.097399026,-111.789863499",
    CountyGeoId: "04019",
    NAME: "Pima County",
  },
  {
    Location: "18.1797326634,-66.7539566203",
    CountyGeoId: 72001,
    NAME: "Adjuntas Municipio",
  },
  {
    Location: "43.3656487303,-87.5944659612",
    CountyGeoId: 55089,
    NAME: "Ozaukee County",
  },
  {
    Location: "34.4835677354,-82.0059340359",
    CountyGeoId: 45059,
    NAME: "Laurens County",
  },
  {
    Location: "30.789951647,-89.1177101979",
    CountyGeoId: 28131,
    NAME: "Stone County",
  },
  {
    Location: "37.7302529228,-88.9299244512",
    CountyGeoId: 17199,
    NAME: "Williamson County",
  },
  {
    Location: "38.181330775,-99.2367293489",
    CountyGeoId: 20145,
    NAME: "Pawnee County",
  },
  {
    Location: "35.2021508952,-87.0347773688",
    CountyGeoId: 47055,
    NAME: "Giles County",
  },
  {
    Location: "39.3709375943,-81.1606296676",
    CountyGeoId: 54073,
    NAME: "Pleasants County",
  },
  {
    Location: "32.4714628579,-104.304465762",
    CountyGeoId: 35015,
    NAME: "Eddy County",
  },
  {
    Location: "32.7425260993,-101.947684441",
    CountyGeoId: 48115,
    NAME: "Dawson County",
  },
  {
    Location: "40.261929702,-96.6894414425",
    CountyGeoId: 31067,
    NAME: "Gage County",
  },
  {
    Location: "34.9036574214,-85.1382470065",
    CountyGeoId: 13047,
    NAME: "Catoosa County",
  },
  {
    Location: "44.4852469436,-69.1218807819",
    CountyGeoId: 23027,
    NAME: "Waldo County",
  },
  {
    Location: "48.2013321625,-102.355667862",
    CountyGeoId: 38061,
    NAME: "Mountrail County",
  },
  {
    Location: "41.047767486,-100.745233846",
    CountyGeoId: 31111,
    NAME: "Lincoln County",
  },
  {
    Location: "45.5803502555,-103.495767454",
    CountyGeoId: 46063,
    NAME: "Harding County",
  },
  {
    Location: "41.1690382608,-98.0379852209",
    CountyGeoId: 31121,
    NAME: "Merrick County",
  },
  {
    Location: "31.3587576021,-82.2127427051",
    CountyGeoId: 13229,
    NAME: "Pierce County",
  },
  {
    Location: "37.8771285847,-91.7923648921",
    CountyGeoId: 29161,
    NAME: "Phelps County",
  },
  {
    Location: "40.4809952692,-78.3486041534",
    CountyGeoId: 42013,
    NAME: "Blair County",
  },
  {
    Location: "34.0211833828,-103.4800253",
    CountyGeoId: 35041,
    NAME: "Roosevelt County",
  },
  {
    Location: "37.6164789768,-93.4005326616",
    CountyGeoId: 29167,
    NAME: "Polk County",
  },
  {
    Location: "45.8484671945,-88.398113352",
    CountyGeoId: 55037,
    NAME: "Florence County",
  },
  {
    Location: "34.8408848102,-79.4804292418",
    CountyGeoId: 37165,
    NAME: "Scotland County",
  },
  {
    Location: "32.0554496236,-93.7372773737",
    CountyGeoId: 22031,
    NAME: "De Soto Parish",
  },
  {
    Location: "35.4081187361,-76.1449651093",
    CountyGeoId: 37095,
    NAME: "Hyde County",
  },
  {
    Location: "33.1782312871,-99.7303000091",
    CountyGeoId: 48207,
    NAME: "Haskell County",
  },
  {
    Location: "38.6406885662,-90.4433975603",
    CountyGeoId: 29189,
    NAME: "St. Louis County",
  },
  {
    Location: "39.5364361834,-76.2988753861",
    CountyGeoId: 24025,
    NAME: "Harford County",
  },
  {
    Location: "36.3582326717,-89.1487992023",
    CountyGeoId: 47131,
    NAME: "Obion County",
  },
  {
    Location: "38.0228983556,-78.5566760673",
    CountyGeoId: 51003,
    NAME: "Albemarle County",
  },
  {
    Location: "31.9736926021,-90.9118133348",
    CountyGeoId: 28021,
    NAME: "Claiborne County",
  },
  {
    Location: "33.1766957792,-98.6877665573",
    CountyGeoId: 48503,
    NAME: "Young County",
  },
  {
    Location: "46.5514253133,-123.779667446",
    CountyGeoId: 53049,
    NAME: "Pacific County",
  },
  {
    Location: "37.8110307874,-84.8744366862",
    CountyGeoId: 21167,
    NAME: "Mercer County",
  },
  {
    Location: "44.2287741072,-111.481955865",
    CountyGeoId: 16043,
    NAME: "Fremont County",
  },
  {
    Location: "30.6650297247,-86.5921750794",
    CountyGeoId: 12091,
    NAME: "Okaloosa County",
  },
  {
    Location: "39.1692979289,-90.6675721556",
    CountyGeoId: 17013,
    NAME: "Calhoun County",
  },
  {
    Location: "31.4076037932,-88.2078768076",
    CountyGeoId: "01129",
    NAME: "Washington County",
  },
  {
    Location: "41.3239160959,-84.4904951214",
    CountyGeoId: 39039,
    NAME: "Defiance County",
  },
  {
    Location: "37.1257911242,-82.350353152",
    CountyGeoId: 51051,
    NAME: "Dickenson County",
  },
  {
    Location: "39.785240911,-101.075705109",
    CountyGeoId: 20153,
    NAME: "Rawlins County",
  },
  {
    Location: "40.0508013832,-86.4686962098",
    CountyGeoId: 18011,
    NAME: "Boone County",
  },
  {
    Location: "41.6370978319,-90.6232428034",
    CountyGeoId: 19163,
    NAME: "Scott County",
  },
  {
    Location: "30.3323725105,-94.3902216019",
    CountyGeoId: 48199,
    NAME: "Hardin County",
  },
  {
    Location: "44.464696712,-72.1022211883",
    CountyGeoId: 50005,
    NAME: "Caledonia County",
  },
  {
    Location: "27.1824778115,-82.3649735213",
    CountyGeoId: 12115,
    NAME: "Sarasota County",
  },
  {
    Location: "40.3607737937,-94.8834337255",
    CountyGeoId: 29147,
    NAME: "Nodaway County",
  },
  {
    Location: "46.456154939,-97.6574001918",
    CountyGeoId: 38073,
    NAME: "Ransom County",
  },
  {
    Location: "45.5875424692,-84.9814699602",
    CountyGeoId: 26047,
    NAME: "Emmet County",
  },
  {
    Location: "39.8702114727,-93.107175708",
    CountyGeoId: 29115,
    NAME: "Linn County",
  },
  {
    Location: "35.6816924709,-82.0493124426",
    CountyGeoId: 37111,
    NAME: "McDowell County",
  },
  {
    Location: "33.6639660687,-93.3071433023",
    CountyGeoId: "05099",
    NAME: "Nevada County",
  },
  {
    Location: "41.0279212756,-76.6585617307",
    CountyGeoId: 42093,
    NAME: "Montour County",
  },
  {
    Location: "37.5588848204,-98.1363325923",
    CountyGeoId: 20095,
    NAME: "Kingman County",
  },
  {
    Location: "37.31730701,-91.9650546828",
    CountyGeoId: 29215,
    NAME: "Texas County",
  },
  {
    Location: "39.9168074106,-75.3988998092",
    CountyGeoId: 42045,
    NAME: "Delaware County",
  },
  {
    Location: "41.9213775211,-83.4942863604",
    CountyGeoId: 26115,
    NAME: "Monroe County",
  },
  {
    Location: "37.1925238004,-95.7428780841",
    CountyGeoId: 20125,
    NAME: "Montgomery County",
  },
  {
    Location: "34.2898880686,-88.6804161511",
    CountyGeoId: 28081,
    NAME: "Lee County",
  },
  {
    Location: "29.8870240994,-96.2779088915",
    CountyGeoId: 48015,
    NAME: "Austin County",
  },
  {
    Location: "29.8929601366,-101.151715198",
    CountyGeoId: 48465,
    NAME: "Val Verde County",
  },
  {
    Location: "33.3217673671,-83.3728413605",
    CountyGeoId: 13237,
    NAME: "Putnam County",
  },
  {
    Location: "31.7342053896,-91.0371787166",
    CountyGeoId: 28063,
    NAME: "Jefferson County",
  },
  {
    Location: "44.5628867649,-68.3682079676",
    CountyGeoId: 23009,
    NAME: "Hancock County",
  },
  {
    Location: "38.8444981835,-81.11757183",
    CountyGeoId: 54013,
    NAME: "Calhoun County",
  },
  {
    Location: "36.7204000351,-77.1061007631",
    CountyGeoId: 51175,
    NAME: "Southampton County",
  },
  {
    Location: "41.1524635935,-74.0240654916",
    CountyGeoId: 36087,
    NAME: "Rockland County",
  },
  {
    Location: "34.8297827954,-91.5527759528",
    CountyGeoId: "05117",
    NAME: "Prairie County",
  },
  {
    Location: "35.8086768522,-86.0617405927",
    CountyGeoId: 47015,
    NAME: "Cannon County",
  },
  {
    Location: "33.2608769536,-84.2841507002",
    CountyGeoId: 13255,
    NAME: "Spalding County",
  },
  {
    Location: "41.7055177405,-71.2860712513",
    CountyGeoId: 44001,
    NAME: "Bristol County",
  },
  {
    Location: "41.8213257512,-75.8006828963",
    CountyGeoId: 42115,
    NAME: "Susquehanna County",
  },
  {
    Location: "40.422331371,-93.5685581671",
    CountyGeoId: 29129,
    NAME: "Mercer County",
  },
  {
    Location: "37.1500572155,-96.2453782628",
    CountyGeoId: 20019,
    NAME: "Chautauqua County",
  },
  {
    Location: "37.5525344711,-85.2696313766",
    CountyGeoId: 21155,
    NAME: "Marion County",
  },
  {
    Location: "45.4260991444,-96.410918404",
    CountyGeoId: 27011,
    NAME: "Big Stone County",
  },
  {
    Location: "44.034587103,-94.0670290696",
    CountyGeoId: 27013,
    NAME: "Blue Earth County",
  },
  {
    Location: "42.7669066527,-109.914705901",
    CountyGeoId: 56035,
    NAME: "Sublette County",
  },
  {
    Location: "38.3701068106,-83.6966440772",
    CountyGeoId: 21069,
    NAME: "Fleming County",
  },
  {
    Location: "36.0412452465,-91.1070801351",
    CountyGeoId: "05075",
    NAME: "Lawrence County",
  },
  {
    Location: "44.1106889273,-87.5123716853",
    CountyGeoId: 55071,
    NAME: "Manitowoc County",
  },
  {
    Location: "45.0326297438,-87.028957047",
    CountyGeoId: 55029,
    NAME: "Door County",
  },
  {
    Location: "31.7795065577,-84.1411344532",
    CountyGeoId: 13177,
    NAME: "Lee County",
  },
  {
    Location: "-14.5416136197,-168.16344943",
    CountyGeoId: 60030,
    NAME: "Rose Island",
  },
  {
    Location: "35.1293327482,-85.6219924364",
    CountyGeoId: 47115,
    NAME: "Marion County",
  },
  {
    Location: "33.9207998598,-88.9478637891",
    CountyGeoId: 28017,
    NAME: "Chickasaw County",
  },
  {
    Location: "41.4353818043,-72.5231194296",
    CountyGeoId: "09007",
    NAME: "Middlesex County",
  },
  {
    Location: "41.3248489608,-86.2617612923",
    CountyGeoId: 18099,
    NAME: "Marshall County",
  },
  {
    Location: "44.995486929,-96.1734786585",
    CountyGeoId: 27073,
    NAME: "Lac qui Parle County",
  },
  {
    Location: "44.7194015031,-92.4225034913",
    CountyGeoId: 55093,
    NAME: "Pierce County",
  },
  {
    Location: "36.2151963075,-115.013561058",
    CountyGeoId: 32003,
    NAME: "Clark County",
  },
  {
    Location: "30.6607989734,-96.3023849451",
    CountyGeoId: 48041,
    NAME: "Brazos County",
  },
  {
    Location: "29.7472049939,-99.246244112",
    CountyGeoId: 48019,
    NAME: "Bandera County",
  },
  {
    Location: "39.8537998099,-80.2228738585",
    CountyGeoId: 42059,
    NAME: "Greene County",
  },
  {
    Location: "32.7626642246,-87.6291176816",
    CountyGeoId: "01065",
    NAME: "Hale County",
  },
  {
    Location: "41.6828527455,-95.8169208876",
    CountyGeoId: 19085,
    NAME: "Harrison County",
  },
  {
    Location: "36.6827726796,-79.873952503",
    CountyGeoId: 51089,
    NAME: "Henry County",
  },
  {
    Location: "47.1224429081,-112.390455011",
    CountyGeoId: 30049,
    NAME: "Lewis and Clark County",
  },
  {
    Location: "43.6742397821,-95.7533863657",
    CountyGeoId: 27105,
    NAME: "Nobles County",
  },
  {
    Location: "36.4694088387,-86.4603553659",
    CountyGeoId: 47165,
    NAME: "Sumner County",
  },
  {
    Location: "47.108629802,-94.9166206034",
    CountyGeoId: 27057,
    NAME: "Hubbard County",
  },
  {
    Location: "40.7291866469,-85.2212198576",
    CountyGeoId: 18179,
    NAME: "Wells County",
  },
  {
    Location: "41.1281451272,-78.9994214565",
    CountyGeoId: 42065,
    NAME: "Jefferson County",
  },
  {
    Location: "42.285105582,-86.3064148915",
    CountyGeoId: 26159,
    NAME: "Van Buren County",
  },
  {
    Location: "28.3526879602,-98.5678411195",
    CountyGeoId: 48311,
    NAME: "McMullen County",
  },
  {
    Location: "39.1034546659,-85.262386374",
    CountyGeoId: 18137,
    NAME: "Ripley County",
  },
  {
    Location: "46.3281784324,-84.5293679243",
    CountyGeoId: 26033,
    NAME: "Chippewa County",
  },
  {
    Location: "33.9205455549,-84.867288503",
    CountyGeoId: 13223,
    NAME: "Paulding County",
  },
  {
    Location: "38.3588724365,-97.0968903589",
    CountyGeoId: 20115,
    NAME: "Marion County",
  },
  {
    Location: "33.1495558982,-95.5639501637",
    CountyGeoId: 48223,
    NAME: "Hopkins County",
  },
  {
    Location: "31.3687302289,-102.043034893",
    CountyGeoId: 48461,
    NAME: "Upton County",
  },
  {
    Location: "35.5832218368,-89.2838357978",
    CountyGeoId: 47075,
    NAME: "Haywood County",
  },
  {
    Location: "37.5294416201,-77.475587955",
    CountyGeoId: 51760,
    NAME: "Richmond city",
  },
  {
    Location: "32.1077245005,-94.7618791398",
    CountyGeoId: 48401,
    NAME: "Rusk County",
  },
  {
    Location: "31.2760599041,-83.229622",
    CountyGeoId: 13019,
    NAME: "Berrien County",
  },
  {
    Location: "31.1720242681,-88.9923282776",
    CountyGeoId: 28111,
    NAME: "Perry County",
  },
  {
    Location: "36.2650187228,-76.2492413613",
    CountyGeoId: 37139,
    NAME: "Pasquotank County",
  },
  {
    Location: "56.2936264549,-132.12922494",
    CountyGeoId: "02275",
    NAME: "Wrangell City and Borough",
  },
  {
    Location: "36.6783637366,-80.2842745676",
    CountyGeoId: 51141,
    NAME: "Patrick County",
  },
  {
    Location: "40.2938389348,-81.0911358771",
    CountyGeoId: 39067,
    NAME: "Harrison County",
  },
  {
    Location: "39.5276701706,-91.5220242163",
    CountyGeoId: 29173,
    NAME: "Ralls County",
  },
  {
    Location: "32.3790131031,-97.3663297978",
    CountyGeoId: 48251,
    NAME: "Johnson County",
  },
  {
    Location: "41.0469632989,-86.2635836849",
    CountyGeoId: 18049,
    NAME: "Fulton County",
  },
  {
    Location: "35.284617402,-86.3587711276",
    CountyGeoId: 47127,
    NAME: "Moore County",
  },
  {
    Location: "32.9362268304,-86.2476592648",
    CountyGeoId: "01037",
    NAME: "Coosa County",
  },
  {
    Location: "18.1720935702,-66.9422835125",
    CountyGeoId: 72093,
    NAME: "Maricao Municipio",
  },
  {
    Location: "42.6712233677,-89.0715652079",
    CountyGeoId: 55105,
    NAME: "Rock County",
  },
  {
    Location: "34.0740947769,-100.779828967",
    CountyGeoId: 48345,
    NAME: "Motley County",
  },
  {
    Location: "36.0408188808,-87.7756333583",
    CountyGeoId: 47085,
    NAME: "Humphreys County",
  },
  {
    Location: "32.211900087,-95.8535779226",
    CountyGeoId: 48213,
    NAME: "Henderson County",
  },
  {
    Location: "39.0196721892,-82.618382939",
    CountyGeoId: 39079,
    NAME: "Jackson County",
  },
  {
    Location: "33.8922415035,-88.4804669083",
    CountyGeoId: 28095,
    NAME: "Monroe County",
  },
  {
    Location: "31.8278792017,-101.050008039",
    CountyGeoId: 48431,
    NAME: "Sterling County",
  },
  {
    Location: "41.5689031802,-101.695910708",
    CountyGeoId: 31005,
    NAME: "Arthur County",
  },
  {
    Location: "38.2122718972,-94.8429319755",
    CountyGeoId: 20107,
    NAME: "Linn County",
  },
  {
    Location: "38.4408670947,-91.5079334292",
    CountyGeoId: 29073,
    NAME: "Gasconade County",
  },
  {
    Location: "35.2957261162,-90.771226853",
    CountyGeoId: "05037",
    NAME: "Cross County",
  },
  {
    Location: "44.6445874689,-86.3006262039",
    CountyGeoId: 26019,
    NAME: "Benzie County",
  },
  {
    Location: "36.6057058971,-121.074995529",
    CountyGeoId: "06069",
    NAME: "San Benito County",
  },
  {
    Location: "18.3779439965,-67.0807617245",
    CountyGeoId: 72099,
    NAME: "Moca Municipio",
  },
  {
    Location: "38.47719455,-85.7072716297",
    CountyGeoId: 18019,
    NAME: "Clark County",
  },
  {
    Location: "31.07624372,-92.001376741",
    CountyGeoId: 22009,
    NAME: "Avoyelles Parish",
  },
  {
    Location: "58.7332560682,-156.981015248",
    CountyGeoId: "02060",
    NAME: "Bristol Bay Borough",
  },
  {
    Location: "30.237646533,-85.6326228076",
    CountyGeoId: 12005,
    NAME: "Bay County",
  },
  {
    Location: "41.5898335739,-120.725028959",
    CountyGeoId: "06049",
    NAME: "Modoc County",
  },
  {
    Location: "41.8515631921,-96.3286044718",
    CountyGeoId: 31021,
    NAME: "Burt County",
  },
  {
    Location: "44.3542643029,-93.2966783051",
    CountyGeoId: 27131,
    NAME: "Rice County",
  },
  {
    Location: "32.0931465237,-93.3398791457",
    CountyGeoId: 22081,
    NAME: "Red River Parish",
  },
  {
    Location: "42.7511742879,-87.6960810134",
    CountyGeoId: 55101,
    NAME: "Racine County",
  },
  {
    Location: "31.7492803518,-82.288983582",
    CountyGeoId: 13001,
    NAME: "Appling County",
  },
  {
    Location: "27.9488714857,-81.6976853961",
    CountyGeoId: 12105,
    NAME: "Polk County",
  },
  {
    Location: "32.4299283238,-97.8322675076",
    CountyGeoId: 48221,
    NAME: "Hood County",
  },
  {
    Location: "37.886670206,-95.7401677072",
    CountyGeoId: 20207,
    NAME: "Woodson County",
  },
  {
    Location: "18.271003009,-66.7024478398",
    CountyGeoId: 72141,
    NAME: "Utuado Municipio",
  },
  {
    Location: "40.4379183725,-85.0056353252",
    CountyGeoId: 18075,
    NAME: "Jay County",
  },
  {
    Location: "48.5631854705,-122.977512444",
    CountyGeoId: 53055,
    NAME: "San Juan County",
  },
  {
    Location: "35.0093341427,-97.4442882363",
    CountyGeoId: 40087,
    NAME: "McClain County",
  },
  {
    Location: "35.2467670437,-80.8327311406",
    CountyGeoId: 37119,
    NAME: "Mecklenburg County",
  },
  {
    Location: "32.1733642109,-82.5348172563",
    CountyGeoId: 13209,
    NAME: "Montgomery County",
  },
  {
    Location: "34.7356590026,-85.3009850599",
    CountyGeoId: 13295,
    NAME: "Walker County",
  },
  {
    Location: "28.3513711091,-98.124785649",
    CountyGeoId: 48297,
    NAME: "Live Oak County",
  },
  {
    Location: "35.929110866,-80.5444636482",
    CountyGeoId: 37059,
    NAME: "Davie County",
  },
  {
    Location: "36.2776668644,-101.893467006",
    CountyGeoId: 48421,
    NAME: "Sherman County",
  },
  {
    Location: "45.4729404291,-84.492064415",
    CountyGeoId: 26031,
    NAME: "Cheboygan County",
  },
  {
    Location: "28.8935249788,-98.5271322703",
    CountyGeoId: 48013,
    NAME: "Atascosa County",
  },
  {
    Location: "36.220156659,-118.80047248",
    CountyGeoId: "06107",
    NAME: "Tulare County",
  },
  {
    Location: "41.8519557671,-88.0855946496",
    CountyGeoId: 17043,
    NAME: "DuPage County",
  },
  {
    Location: "36.3387382969,-94.2561015344",
    CountyGeoId: "05007",
    NAME: "Benton County",
  },
  {
    Location: "38.1962558627,-83.4210754055",
    CountyGeoId: 21205,
    NAME: "Rowan County",
  },
  {
    Location: "40.7246687188,-103.110095731",
    CountyGeoId: "08075",
    NAME: "Logan County",
  },
  {
    Location: "38.1871910002,-85.6591577058",
    CountyGeoId: 21111,
    NAME: "Jefferson County",
  },
  {
    Location: "36.5540721406,-89.1875965868",
    CountyGeoId: 21075,
    NAME: "Fulton County",
  },
  {
    Location: "38.0432184802,-97.4272714417",
    CountyGeoId: 20079,
    NAME: "Harvey County",
  },
  {
    Location: "38.3005234344,-88.9240091565",
    CountyGeoId: 17081,
    NAME: "Jefferson County",
  },
  {
    Location: "31.525961257,-110.846516905",
    CountyGeoId: "04023",
    NAME: "Santa Cruz County",
  },
  {
    Location: "59.8632076093,-140.381018617",
    CountyGeoId: "02282",
    NAME: "Yakutat City and Borough",
  },
  {
    Location: "30.7953911236,-85.2154596916",
    CountyGeoId: 12063,
    NAME: "Jackson County",
  },
  {
    Location: "43.0057953643,-76.1946419306",
    CountyGeoId: 36067,
    NAME: "Onondaga County",
  },
  {
    Location: "40.661536856,-83.6594624603",
    CountyGeoId: 39065,
    NAME: "Hardin County",
  },
  {
    Location: "46.9401261862,-103.846565695",
    CountyGeoId: 38033,
    NAME: "Golden Valley County",
  },
  {
    Location: "35.104348396,-103.549748464",
    CountyGeoId: 35037,
    NAME: "Quay County",
  },
  {
    Location: "33.2409810885,-93.6070389924",
    CountyGeoId: "05073",
    NAME: "Lafayette County",
  },
  {
    Location: "41.2185070628,-91.2596183012",
    CountyGeoId: 19115,
    NAME: "Louisa County",
  },
  {
    Location: "39.7659588693,-81.4555606055",
    CountyGeoId: 39121,
    NAME: "Noble County",
  },
  {
    Location: "28.4173932285,-97.7411901298",
    CountyGeoId: 48025,
    NAME: "Bee County",
  },
  {
    Location: "37.4320425654,-93.8502883553",
    CountyGeoId: 29057,
    NAME: "Dade County",
  },
  {
    Location: "37.8591931317,-113.289465841",
    CountyGeoId: 49021,
    NAME: "Iron County",
  },
  {
    Location: "40.7695040098,-86.0450230743",
    CountyGeoId: 18103,
    NAME: "Miami County",
  },
  {
    Location: "31.445835936,-91.6400549956",
    CountyGeoId: 22029,
    NAME: "Concordia Parish",
  },
  {
    Location: "37.2006875346,-106.191627951",
    CountyGeoId: "08021",
    NAME: "Conejos County",
  },
  {
    Location: "35.447636026,-93.0341542751",
    CountyGeoId: "05115",
    NAME: "Pope County",
  },
  {
    Location: "45.7663736363,-99.2214553894",
    CountyGeoId: 46089,
    NAME: "McPherson County",
  },
  {
    Location: "33.2292799721,-82.6107022318",
    CountyGeoId: 13125,
    NAME: "Glascock County",
  },
  {
    Location: "37.8505815921,-94.3424415366",
    CountyGeoId: 29217,
    NAME: "Vernon County",
  },
  {
    Location: "32.2976557,-99.3734880839",
    CountyGeoId: 48059,
    NAME: "Callahan County",
  },
  {
    Location: "37.2380515699,-76.4425351607",
    CountyGeoId: 51199,
    NAME: "York County",
  },
  {
    Location: "36.2721371509,-90.0909046758",
    CountyGeoId: 29069,
    NAME: "Dunklin County",
  },
  {
    Location: "30.2905333588,-92.4119791169",
    CountyGeoId: 22001,
    NAME: "Acadia Parish",
  },
  {
    Location: "41.4009690752,-79.7579455969",
    CountyGeoId: 42121,
    NAME: "Venango County",
  },
  {
    Location: "38.9958676803,-80.5021593376",
    CountyGeoId: 54041,
    NAME: "Lewis County",
  },
  {
    Location: "33.0692757535,-83.2495906334",
    CountyGeoId: 13009,
    NAME: "Baldwin County",
  },
  {
    Location: "40.3315251833,-84.2047427822",
    CountyGeoId: 39149,
    NAME: "Shelby County",
  },
  {
    Location: "38.5196362585,-84.8281098255",
    CountyGeoId: 21187,
    NAME: "Owen County",
  },
  {
    Location: "30.3002128386,-95.5030137057",
    CountyGeoId: 48339,
    NAME: "Montgomery County",
  },
  {
    Location: "27.7313380332,-98.0898862446",
    CountyGeoId: 48249,
    NAME: "Jim Wells County",
  },
  {
    Location: "33.6130681109,-89.2848255762",
    CountyGeoId: 28155,
    NAME: "Webster County",
  },
  {
    Location: "46.291133814,-123.433469914",
    CountyGeoId: 53069,
    NAME: "Wahkiakum County",
  },
  {
    Location: "35.8839481951,-94.658747151",
    CountyGeoId: 40001,
    NAME: "Adair County",
  },
  {
    Location: "42.3486893925,-70.9856096697",
    CountyGeoId: 25025,
    NAME: "Suffolk County",
  },
  {
    Location: "41.1392969335,-74.6908006832",
    CountyGeoId: 34037,
    NAME: "Sussex County",
  },
  {
    Location: "40.8292399575,-85.4881722777",
    CountyGeoId: 18069,
    NAME: "Huntington County",
  },
  {
    Location: "39.9617616288,-90.7503556212",
    CountyGeoId: 17009,
    NAME: "Brown County",
  },
  {
    Location: "43.1073811968,-73.8639045541",
    CountyGeoId: 36091,
    NAME: "Saratoga County",
  },
  {
    Location: "26.5534898513,-81.1659012496",
    CountyGeoId: 12051,
    NAME: "Hendry County",
  },
  {
    Location: "46.2296522668,-106.730712236",
    CountyGeoId: 30087,
    NAME: "Rosebud County",
  },
  {
    Location: "36.2505340956,-85.9567145693",
    CountyGeoId: 47159,
    NAME: "Smith County",
  },
  {
    Location: "39.2509849786,-82.4853500567",
    CountyGeoId: 39163,
    NAME: "Vinton County",
  },
  {
    Location: "35.5137978753,-86.4588856967",
    CountyGeoId: 47003,
    NAME: "Bedford County",
  },
  {
    Location: "39.0597819407,-88.5898533622",
    CountyGeoId: 17049,
    NAME: "Effingham County",
  },
  {
    Location: "35.0483629463,-96.2501879728",
    CountyGeoId: 40063,
    NAME: "Hughes County",
  },
  {
    Location: "44.5267152135,-107.995198768",
    CountyGeoId: 56003,
    NAME: "Big Horn County",
  },
  {
    Location: "36.1408328072,-85.495190724",
    CountyGeoId: 47141,
    NAME: "Putnam County",
  },
  {
    Location: "33.028186394,-116.770204664",
    CountyGeoId: "06073",
    NAME: "San Diego County",
  },
  {
    Location: "44.6836233781,-83.1290075152",
    CountyGeoId: 26001,
    NAME: "Alcona County",
  },
  {
    Location: "38.6523289215,-95.726945141",
    CountyGeoId: 20139,
    NAME: "Osage County",
  },
  {
    Location: "39.6278256159,-106.695299259",
    CountyGeoId: "08037",
    NAME: "Eagle County",
  },
  {
    Location: "43.9900669341,-85.8016452398",
    CountyGeoId: 26085,
    NAME: "Lake County",
  },
  {
    Location: "42.948534903,-86.4218821702",
    CountyGeoId: 26139,
    NAME: "Ottawa County",
  },
  {
    Location: "45.0073838126,-85.1758221578",
    CountyGeoId: 26009,
    NAME: "Antrim County",
  },
  {
    Location: "38.7469030854,-106.194066665",
    CountyGeoId: "08015",
    NAME: "Chaffee County",
  },
  {
    Location: "38.4729724659,-105.439657054",
    CountyGeoId: "08043",
    NAME: "Fremont County",
  },
  {
    Location: "36.2397743956,-121.308901554",
    CountyGeoId: "06053",
    NAME: "Monterey County",
  },
  {
    Location: "42.7197222221,-103.135438139",
    CountyGeoId: 31045,
    NAME: "Dawes County",
  },
  {
    Location: "36.6061367396,-104.646842539",
    CountyGeoId: 35007,
    NAME: "Colfax County",
  },
  {
    Location: "41.2340543656,-77.638105834",
    CountyGeoId: 42035,
    NAME: "Clinton County",
  },
  {
    Location: "32.403442782,-82.0736728222",
    CountyGeoId: 13043,
    NAME: "Candler County",
  },
  {
    Location: "40.6506935615,-123.112627727",
    CountyGeoId: "06105",
    NAME: "Trinity County",
  },
  {
    Location: "36.0766050343,-81.9226013745",
    CountyGeoId: 37011,
    NAME: "Avery County",
  },
  {
    Location: "38.4947373058,-80.421873068",
    CountyGeoId: 54101,
    NAME: "Webster County",
  },
  {
    Location: "38.2669127871,-121.940024418",
    CountyGeoId: "06095",
    NAME: "Solano County",
  },
  {
    Location: "28.7169755783,-81.2363275276",
    CountyGeoId: 12117,
    NAME: "Seminole County",
  },
  {
    Location: "45.2623443714,-89.0719088457",
    CountyGeoId: 55067,
    NAME: "Langlade County",
  },
  {
    Location: "38.6832973547,-75.3395417153",
    CountyGeoId: 10005,
    NAME: "Sussex County",
  },
  {
    Location: "33.3164335785,-83.6880895838",
    CountyGeoId: 13159,
    NAME: "Jasper County",
  },
  {
    Location: "29.3556960535,-99.1101310166",
    CountyGeoId: 48325,
    NAME: "Medina County",
  },
  {
    Location: "39.8235499831,-85.7732376368",
    CountyGeoId: 18059,
    NAME: "Hancock County",
  },
  {
    Location: "30.3354403303,-81.6480093213",
    CountyGeoId: 12031,
    NAME: "Duval County",
  },
  {
    Location: "43.7846914327,-75.4487944963",
    CountyGeoId: 36049,
    NAME: "Lewis County",
  },
  {
    Location: "40.1758305125,-100.476864817",
    CountyGeoId: 31145,
    NAME: "Red Willow County",
  },
  {
    Location: "30.7810605096,-102.723570332",
    CountyGeoId: 48371,
    NAME: "Pecos County",
  },
  {
    Location: "48.77230295,-98.464838016",
    CountyGeoId: 38019,
    NAME: "Cavalier County",
  },
  {
    Location: "28.8678175883,-99.1082667829",
    CountyGeoId: 48163,
    NAME: "Frio County",
  },
  {
    Location: "40.5247823592,-101.06184392",
    CountyGeoId: 31085,
    NAME: "Hayes County",
  },
  {
    Location: "39.8264989183,-95.5642196557",
    CountyGeoId: 20013,
    NAME: "Brown County",
  },
  {
    Location: "42.4877134885,-103.758878789",
    CountyGeoId: 31165,
    NAME: "Sioux County",
  },
  {
    Location: "48.5424784918,-115.405080861",
    CountyGeoId: 30053,
    NAME: "Lincoln County",
  },
  {
    Location: "37.8944043802,-90.1944237",
    CountyGeoId: 29186,
    NAME: "Ste. Genevieve County",
  },
  {
    Location: "41.0301399961,-95.1563757716",
    CountyGeoId: 19137,
    NAME: "Montgomery County",
  },
  {
    Location: "31.1082936995,-93.1841466986",
    CountyGeoId: 22115,
    NAME: "Vernon Parish",
  },
  {
    Location: "36.2871782318,-92.3369721117",
    CountyGeoId: "05005",
    NAME: "Baxter County",
  },
  {
    Location: "41.2809264377,-86.6476485661",
    CountyGeoId: 18149,
    NAME: "Starke County",
  },
  {
    Location: "33.7005398883,-94.2343408793",
    CountyGeoId: "05081",
    NAME: "Little River County",
  },
  {
    Location: "44.9432516761,-113.933251642",
    CountyGeoId: 16059,
    NAME: "Lemhi County",
  },
  {
    Location: "39.9338060484,-117.037908401",
    CountyGeoId: 32015,
    NAME: "Lander County",
  },
  {
    Location: "39.6414721595,-88.6192951938",
    CountyGeoId: 17139,
    NAME: "Moultrie County",
  },
  {
    Location: "40.6664172232,-105.461144451",
    CountyGeoId: "08069",
    NAME: "Larimer County",
  },
  {
    Location: "31.4318270699,-85.6110368183",
    CountyGeoId: "01045",
    NAME: "Dale County",
  },
  {
    Location: "40.2121076763,-94.4099168493",
    CountyGeoId: 29075,
    NAME: "Gentry County",
  },
  {
    Location: "37.0940663146,-83.3811399511",
    CountyGeoId: 21131,
    NAME: "Leslie County",
  },
  {
    Location: "38.080066116,-75.8534705783",
    CountyGeoId: 24039,
    NAME: "Somerset County",
  },
  {
    Location: "18.4353927796,-66.3355961365",
    CountyGeoId: 72143,
    NAME: "Vega Alta Municipio",
  },
  {
    Location: "39.1123184538,-77.9966807915",
    CountyGeoId: 51043,
    NAME: "Clarke County",
  },
  {
    Location: "38.2158624014,-76.5290606633",
    CountyGeoId: 24037,
    NAME: "St. Mary's County",
  },
  {
    Location: "43.9150098006,-121.228141798",
    CountyGeoId: 41017,
    NAME: "Deschutes County",
  },
  {
    Location: "33.615294221,-98.6876748071",
    CountyGeoId: 48009,
    NAME: "Archer County",
  },
  {
    Location: "31.1531879718,-85.3025273835",
    CountyGeoId: "01069",
    NAME: "Houston County",
  },
  {
    Location: "21.2118898113,-156.954041591",
    CountyGeoId: 15005,
    NAME: "Kalawao County",
  },
  {
    Location: "47.7401606201,-103.3952782",
    CountyGeoId: 38053,
    NAME: "McKenzie County",
  },
  {
    Location: "30.2249615668,-102.07648647",
    CountyGeoId: 48443,
    NAME: "Terrell County",
  },
  {
    Location: "33.1879272437,-96.57240407",
    CountyGeoId: 48085,
    NAME: "Collin County",
  },
  {
    Location: "39.754609342,-84.2906502039",
    CountyGeoId: 39113,
    NAME: "Montgomery County",
  },
  {
    Location: "44.47432886,-87.9928589857",
    CountyGeoId: 55009,
    NAME: "Brown County",
  },
  {
    Location: "40.8551525027,-99.0749662354",
    CountyGeoId: 31019,
    NAME: "Buffalo County",
  },
  {
    Location: "38.6327516348,-92.5830546608",
    CountyGeoId: 29135,
    NAME: "Moniteau County",
  },
  {
    Location: "34.0685270235,-102.829913123",
    CountyGeoId: 48017,
    NAME: "Bailey County",
  },
  {
    Location: "43.33611095,-78.7708246691",
    CountyGeoId: 36063,
    NAME: "Niagara County",
  },
  {
    Location: "43.3785703546,-95.6236852015",
    CountyGeoId: 19143,
    NAME: "Osceola County",
  },
  {
    Location: "32.4636565938,-82.9222383646",
    CountyGeoId: 13175,
    NAME: "Laurens County",
  },
  {
    Location: "36.0109653302,-93.7245618667",
    CountyGeoId: "05087",
    NAME: "Madison County",
  },
  {
    Location: "44.6836111689,-84.6103371078",
    CountyGeoId: 26039,
    NAME: "Crawford County",
  },
  {
    Location: "36.3672994836,-75.936949201",
    CountyGeoId: 37053,
    NAME: "Currituck County",
  },
  {
    Location: "40.4835856225,-86.1169307298",
    CountyGeoId: 18067,
    NAME: "Howard County",
  },
  {
    Location: "38.9064174884,-86.0375413468",
    CountyGeoId: 18071,
    NAME: "Jackson County",
  },
  {
    Location: "35.3736416751,-95.6667999353",
    CountyGeoId: 40091,
    NAME: "McIntosh County",
  },
  {
    Location: "44.7268149012,-94.9471503059",
    CountyGeoId: 27129,
    NAME: "Renville County",
  },
  {
    Location: "41.0343060095,-74.3007756821",
    CountyGeoId: 34031,
    NAME: "Passaic County",
  },
  {
    Location: "47.6459064305,-114.089374334",
    CountyGeoId: 30047,
    NAME: "Lake County",
  },
  {
    Location: "41.0293737922,-93.3277206567",
    CountyGeoId: 19117,
    NAME: "Lucas County",
  },
  {
    Location: "37.6259310585,-109.804623139",
    CountyGeoId: 49037,
    NAME: "San Juan County",
  },
  {
    Location: "34.0807261331,-99.2410547627",
    CountyGeoId: 48487,
    NAME: "Wilbarger County",
  },
  {
    Location: "38.8717218127,-75.8316009642",
    CountyGeoId: 24011,
    NAME: "Caroline County",
  },
  {
    Location: "32.0457484071,-82.0581758793",
    CountyGeoId: 13267,
    NAME: "Tattnall County",
  },
  {
    Location: "40.2993893945,-83.3715754728",
    CountyGeoId: 39159,
    NAME: "Union County",
  },
  {
    Location: "42.3243507876,-88.4524199255",
    CountyGeoId: 17111,
    NAME: "McHenry County",
  },
  {
    Location: "42.7325458524,-93.2624729913",
    CountyGeoId: 19069,
    NAME: "Franklin County",
  },
  {
    Location: "39.7515988537,-82.6305889168",
    CountyGeoId: 39045,
    NAME: "Fairfield County",
  },
  {
    Location: "28.6570952089,-97.4264922607",
    CountyGeoId: 48175,
    NAME: "Goliad County",
  },
  {
    Location: "41.3319875239,-75.0338289783",
    CountyGeoId: 42103,
    NAME: "Pike County",
  },
  {
    Location: "47.5776534848,-95.3790237804",
    CountyGeoId: 27029,
    NAME: "Clearwater County",
  },
  {
    Location: "36.059057801,-89.4137659493",
    CountyGeoId: 47045,
    NAME: "Dyer County",
  },
  {
    Location: "45.7086008724,-101.196869329",
    CountyGeoId: 46031,
    NAME: "Corson County",
  },
  {
    Location: "39.769517371,-86.5099758786",
    CountyGeoId: 18063,
    NAME: "Hendricks County",
  },
  {
    Location: "45.7586707668,-97.5985004429",
    CountyGeoId: 46091,
    NAME: "Marshall County",
  },
  {
    Location: "40.8492096503,-73.8530695745",
    CountyGeoId: 36005,
    NAME: "Bronx County",
  },
  {
    Location: "32.1332163406,-91.6737652244",
    CountyGeoId: 22041,
    NAME: "Franklin Parish",
  },
  {
    Location: "42.5831156958,-72.5918576846",
    CountyGeoId: 25011,
    NAME: "Franklin County",
  },
  {
    Location: "41.8950837577,-84.0663667481",
    CountyGeoId: 26091,
    NAME: "Lenawee County",
  },
  {
    Location: "38.385163021,-93.7927500298",
    CountyGeoId: 29083,
    NAME: "Henry County",
  },
  {
    Location: "37.5023005833,-94.3471107747",
    CountyGeoId: 29011,
    NAME: "Barton County",
  },
  {
    Location: "36.0437098766,-79.3994248175",
    CountyGeoId: 37001,
    NAME: "Alamance County",
  },
  {
    Location: "39.7880806129,-95.1467942431",
    CountyGeoId: 20043,
    NAME: "Doniphan County",
  },
  {
    Location: "18.3286016876,-64.9670827857",
    CountyGeoId: 78030,
    NAME: "St. Thomas Island",
  },
  {
    Location: "44.8575139984,-72.9120265429",
    CountyGeoId: 50011,
    NAME: "Franklin County",
  },
  {
    Location: "28.3215753001,-97.1595214632",
    CountyGeoId: 48391,
    NAME: "Refugio County",
  },
  {
    Location: "46.4965611851,-108.39808813",
    CountyGeoId: 30065,
    NAME: "Musselshell County",
  },
  {
    Location: "34.4904742327,-89.00385691",
    CountyGeoId: 28145,
    NAME: "Union County",
  },
  {
    Location: "27.0433971368,-98.6973050685",
    CountyGeoId: 48247,
    NAME: "Jim Hogg County",
  },
  {
    Location: "43.4638832499,-76.2086867847",
    CountyGeoId: 36075,
    NAME: "Oswego County",
  },
  {
    Location: "38.4418035091,-84.3313958343",
    CountyGeoId: 21097,
    NAME: "Harrison County",
  },
  {
    Location: "38.9143249144,-99.8727358362",
    CountyGeoId: 20195,
    NAME: "Trego County",
  },
  {
    Location: "34.2908080523,-91.3749047506",
    CountyGeoId: "05001",
    NAME: "Arkansas County",
  },
  {
    Location: "36.6953299477,-77.5356107293",
    CountyGeoId: 51595,
    NAME: "Emporia city",
  },
  {
    Location: "36.9055088424,-94.3392465045",
    CountyGeoId: 29145,
    NAME: "Newton County",
  },
  {
    Location: "38.0218915518,-87.8684711826",
    CountyGeoId: 18129,
    NAME: "Posey County",
  },
  {
    Location: "32.7696188927,-113.905618757",
    CountyGeoId: "04027",
    NAME: "Yuma County",
  },
  {
    Location: "37.7786161815,-79.9867558926",
    CountyGeoId: 51580,
    NAME: "Covington city",
  },
  {
    Location: "31.2060330455,-89.5086725366",
    CountyGeoId: 28073,
    NAME: "Lamar County",
  },
  {
    Location: "32.6011364841,-85.355562704",
    CountyGeoId: "01081",
    NAME: "Lee County",
  },
  {
    Location: "29.8767867938,-96.919761718",
    CountyGeoId: 48149,
    NAME: "Fayette County",
  },
  {
    Location: "38.9340476576,-83.8674279187",
    CountyGeoId: 39015,
    NAME: "Brown County",
  },
  {
    Location: "40.3884733432,-83.7658501734",
    CountyGeoId: 39091,
    NAME: "Logan County",
  },
  {
    Location: "42.6337635679,-75.0326059513",
    CountyGeoId: 36077,
    NAME: "Otsego County",
  },
  {
    Location: "33.07931306,-80.406685752",
    CountyGeoId: 45035,
    NAME: "Dorchester County",
  },
  {
    Location: "40.0076360466,-75.1339446794",
    CountyGeoId: 42101,
    NAME: "Philadelphia County",
  },
  {
    Location: "38.5645174515,-95.2859482396",
    CountyGeoId: 20059,
    NAME: "Franklin County",
  },
  {
    Location: "37.8857349436,-95.3013889295",
    CountyGeoId: 20001,
    NAME: "Allen County",
  },
  {
    Location: "41.6850925934,-95.31021134",
    CountyGeoId: 19165,
    NAME: "Shelby County",
  },
  {
    Location: "35.9210263138,-81.1770268506",
    CountyGeoId: 37003,
    NAME: "Alexander County",
  },
  {
    Location: "32.5993157059,-96.287794573",
    CountyGeoId: 48257,
    NAME: "Kaufman County",
  },
  {
    Location: "38.7123597006,-88.0851335477",
    CountyGeoId: 17159,
    NAME: "Richland County",
  },
  {
    Location: "31.5291972743,-84.6245076946",
    CountyGeoId: 13037,
    NAME: "Calhoun County",
  },
  {
    Location: "41.3887747357,-70.6987715777",
    CountyGeoId: 25007,
    NAME: "Dukes County",
  },
  {
    Location: "47.9216811843,-98.1920324671",
    CountyGeoId: 38063,
    NAME: "Nelson County",
  },
  {
    Location: "36.906729139,-76.7091264828",
    CountyGeoId: 51093,
    NAME: "Isle of Wight County",
  },
  {
    Location: "30.2584988738,-91.3493631932",
    CountyGeoId: 22047,
    NAME: "Iberville Parish",
  },
  {
    Location: "28.7048225353,-82.0809953636",
    CountyGeoId: 12119,
    NAME: "Sumter County",
  },
  {
    Location: "44.2944276779,-101.539985727",
    CountyGeoId: 46055,
    NAME: "Haakon County",
  },
  {
    Location: "40.7058005707,-76.2159548592",
    CountyGeoId: 42107,
    NAME: "Schuylkill County",
  },
  {
    Location: "33.5933550412,-92.8819343531",
    CountyGeoId: "05103",
    NAME: "Ouachita County",
  },
  {
    Location: "34.7280450543,-96.6843760531",
    CountyGeoId: 40123,
    NAME: "Pontotoc County",
  },
  {
    Location: "41.7067847215,-98.0672555333",
    CountyGeoId: 31011,
    NAME: "Boone County",
  },
  {
    Location: "34.4442980744,-84.1706356875",
    CountyGeoId: 13085,
    NAME: "Dawson County",
  },
  {
    Location: "40.8915578871,-88.5577158078",
    CountyGeoId: 17105,
    NAME: "Livingston County",
  },
  {
    Location: "30.9224883015,-81.6363849358",
    CountyGeoId: 13039,
    NAME: "Camden County",
  },
  {
    Location: "47.6206643185,-117.403947339",
    CountyGeoId: 53063,
    NAME: "Spokane County",
  },
  {
    Location: "36.388599579,-97.2305066413",
    CountyGeoId: 40103,
    NAME: "Noble County",
  },
  {
    Location: "43.8958184046,-99.847385514",
    CountyGeoId: 46085,
    NAME: "Lyman County",
  },
  {
    Location: "39.2690076722,-121.351262732",
    CountyGeoId: "06115",
    NAME: "Yuba County",
  },
  {
    Location: "39.1363621482,-77.2042373226",
    CountyGeoId: 24031,
    NAME: "Montgomery County",
  },
  {
    Location: "34.9648839235,-100.270065923",
    CountyGeoId: 48087,
    NAME: "Collingsworth County",
  },
  {
    Location: "31.8694627053,-101.520802191",
    CountyGeoId: 48173,
    NAME: "Glasscock County",
  },
  {
    Location: "36.3318375802,-88.3012135686",
    CountyGeoId: 47079,
    NAME: "Henry County",
  },
  {
    Location: "38.969864478,-84.727848116",
    CountyGeoId: 21015,
    NAME: "Boone County",
  },
  {
    Location: "36.8532163803,-88.9710587868",
    CountyGeoId: 21039,
    NAME: "Carlisle County",
  },
  {
    Location: "36.1490481181,-87.3566550687",
    CountyGeoId: 47043,
    NAME: "Dickson County",
  },
  {
    Location: "37.9407856984,-93.3207208702",
    CountyGeoId: 29085,
    NAME: "Hickory County",
  },
  {
    Location: "35.4906159935,-86.0747626426",
    CountyGeoId: 47031,
    NAME: "Coffee County",
  },
  {
    Location: "39.6224801785,-90.8863042728",
    CountyGeoId: 17149,
    NAME: "Pike County",
  },
  {
    Location: "30.5434714704,-95.9855029797",
    CountyGeoId: 48185,
    NAME: "Grimes County",
  },
  {
    Location: "46.2646373267,-96.9482619139",
    CountyGeoId: 38077,
    NAME: "Richland County",
  },
  {
    Location: "45.4237232587,-91.8483120037",
    CountyGeoId: 55005,
    NAME: "Barron County",
  },
  {
    Location: "40.0968997041,-91.7221441017",
    CountyGeoId: 29111,
    NAME: "Lewis County",
  },
  {
    Location: "40.5548298977,-104.392531357",
    CountyGeoId: "08123",
    NAME: "Weld County",
  },
  {
    Location: "34.5292014575,-100.207574947",
    CountyGeoId: 48075,
    NAME: "Childress County",
  },
  {
    Location: "38.6874292494,-96.6498496136",
    CountyGeoId: 20127,
    NAME: "Morris County",
  },
  {
    Location: "35.4849957203,-77.6757626742",
    CountyGeoId: 37079,
    NAME: "Greene County",
  },
  {
    Location: "37.5073151069,-94.8518113711",
    CountyGeoId: 20037,
    NAME: "Crawford County",
  },
  {
    Location: "43.8404850615,-104.567830048",
    CountyGeoId: 56045,
    NAME: "Weston County",
  },
  {
    Location: "35.154110294,-84.859602735",
    CountyGeoId: 47011,
    NAME: "Bradley County",
  },
  {
    Location: "30.1516119464,-94.8122103741",
    CountyGeoId: 48291,
    NAME: "Liberty County",
  },
  {
    Location: "34.7884475042,-84.7480935785",
    CountyGeoId: 13213,
    NAME: "Murray County",
  },
  {
    Location: "40.5241957601,-101.697946991",
    CountyGeoId: 31029,
    NAME: "Chase County",
  },
  {
    Location: "43.997787332,-69.5257592569",
    CountyGeoId: 23015,
    NAME: "Lincoln County",
  },
  {
    Location: "37.2691767895,-76.707596151",
    CountyGeoId: 51830,
    NAME: "Williamsburg city",
  },
  {
    Location: "35.7496106399,-81.7047784739",
    CountyGeoId: 37023,
    NAME: "Burke County",
  },
  {
    Location: "40.0028993432,-102.424226323",
    CountyGeoId: "08125",
    NAME: "Yuma County",
  },
  {
    Location: "38.2610713047,-90.5376891038",
    CountyGeoId: 29099,
    NAME: "Jefferson County",
  },
  {
    Location: "31.4470737521,-104.517369966",
    CountyGeoId: 48109,
    NAME: "Culberson County",
  },
  {
    Location: "40.7741618671,-73.9697971209",
    CountyGeoId: 36061,
    NAME: "New York County",
  },
  {
    Location: "40.6664326842,-106.342794688",
    CountyGeoId: "08057",
    NAME: "Jackson County",
  },
  {
    Location: "39.3054413227,-102.602887422",
    CountyGeoId: "08063",
    NAME: "Kit Carson County",
  },
  {
    Location: "34.7404337635,-88.2393231398",
    CountyGeoId: 28141,
    NAME: "Tishomingo County",
  },
  {
    Location: "37.6979246033,-85.9633719015",
    CountyGeoId: 21093,
    NAME: "Hardin County",
  },
  {
    Location: "44.6737588538,-97.1883336931",
    CountyGeoId: 46057,
    NAME: "Hamlin County",
  },
  {
    Location: "37.5582639151,-99.2860476017",
    CountyGeoId: 20097,
    NAME: "Kiowa County",
  },
  {
    Location: "32.2222882576,-97.7743353973",
    CountyGeoId: 48425,
    NAME: "Somervell County",
  },
  {
    Location: "33.6023128883,-90.5886186268",
    CountyGeoId: 28133,
    NAME: "Sunflower County",
  },
  {
    Location: "48.7724599221,-99.8409490369",
    CountyGeoId: 38079,
    NAME: "Rolette County",
  },
  {
    Location: "36.5584092548,-85.0749898228",
    CountyGeoId: 47137,
    NAME: "Pickett County",
  },
  {
    Location: "39.3739160769,-111.576354881",
    CountyGeoId: 49039,
    NAME: "Sanpete County",
  },
  {
    Location: "34.6892815822,-81.6194154302",
    CountyGeoId: 45087,
    NAME: "Union County",
  },
  {
    Location: "44.3498776053,-94.2473892814",
    CountyGeoId: 27103,
    NAME: "Nicollet County",
  },
  {
    Location: "45.3508956087,-88.00222052",
    CountyGeoId: 55075,
    NAME: "Marinette County",
  },
  {
    Location: "46.0607701736,-113.067841951",
    CountyGeoId: 30023,
    NAME: "Deer Lodge County",
  },
  {
    Location: "32.7358650208,-98.8361731572",
    CountyGeoId: 48429,
    NAME: "Stephens County",
  },
  {
    Location: "36.7984746846,-95.6173556358",
    CountyGeoId: 40105,
    NAME: "Nowata County",
  },
  {
    Location: "39.7836260546,-96.5229367542",
    CountyGeoId: 20117,
    NAME: "Marshall County",
  },
  {
    Location: "43.2079070509,-98.5878938604",
    CountyGeoId: 46023,
    NAME: "Charles Mix County",
  },
  {
    Location: "42.59926192,-97.252401002",
    CountyGeoId: 31027,
    NAME: "Cedar County",
  },
  {
    Location: "40.5672969004,-74.9122477682",
    CountyGeoId: 34019,
    NAME: "Hunterdon County",
  },
  {
    Location: "43.0837526517,-95.6248783386",
    CountyGeoId: 19141,
    NAME: "O'Brien County",
  },
  {
    Location: "33.8033347429,-87.2973573971",
    CountyGeoId: "01127",
    NAME: "Walker County",
  },
  {
    Location: "38.1849543372,-77.6560473238",
    CountyGeoId: 51177,
    NAME: "Spotsylvania County",
  },
  {
    Location: "47.7176029342,-98.9016466849",
    CountyGeoId: 38027,
    NAME: "Eddy County",
  },
  {
    Location: "39.2045833383,-78.2625471123",
    CountyGeoId: 51069,
    NAME: "Frederick County",
  },
  {
    Location: "33.6076426857,-102.343197183",
    CountyGeoId: 48219,
    NAME: "Hockley County",
  },
  {
    Location: "36.0772896934,-96.9756358548",
    CountyGeoId: 40119,
    NAME: "Payne County",
  },
  {
    Location: "32.1623552365,-94.3056398565",
    CountyGeoId: 48365,
    NAME: "Panola County",
  },
  {
    Location: "35.8400259506,-102.602862784",
    CountyGeoId: 48205,
    NAME: "Hartley County",
  },
  {
    Location: "38.2572922743,-94.339996655",
    CountyGeoId: 29013,
    NAME: "Bates County",
  },
  {
    Location: "35.1808755183,-85.1647566085",
    CountyGeoId: 47065,
    NAME: "Hamilton County",
  },
  {
    Location: "38.331795342,-80.0077524976",
    CountyGeoId: 54075,
    NAME: "Pocahontas County",
  },
  {
    Location: "31.7768809864,-84.4369222013",
    CountyGeoId: 13273,
    NAME: "Terrell County",
  },
  {
    Location: "39.7847564917,-100.459899544",
    CountyGeoId: 20039,
    NAME: "Decatur County",
  },
  {
    Location: "32.3034902579,-100.406052463",
    CountyGeoId: 48353,
    NAME: "Nolan County",
  },
  {
    Location: "33.7715468713,-84.226432416",
    CountyGeoId: 13089,
    NAME: "DeKalb County",
  },
  {
    Location: "44.061546541,-116.397518964",
    CountyGeoId: 16045,
    NAME: "Gem County",
  },
  {
    Location: "38.7568746647,-84.8593123857",
    CountyGeoId: 21077,
    NAME: "Gallatin County",
  },
  {
    Location: "48.7910039093,-102.518193492",
    CountyGeoId: 38013,
    NAME: "Burke County",
  },
  {
    Location: "26.6475645688,-80.4365110484",
    CountyGeoId: 12099,
    NAME: "Palm Beach County",
  },
  {
    Location: "43.6741733017,-95.1541129519",
    CountyGeoId: 27063,
    NAME: "Jackson County",
  },
  {
    Location: "39.1193028617,-105.717174716",
    CountyGeoId: "08093",
    NAME: "Park County",
  },
  {
    Location: "18.0836334373,-66.9433118197",
    CountyGeoId: 72121,
    NAME: "Sabana Grande Municipio",
  },
  {
    Location: "40.9404610588,-72.685241262",
    CountyGeoId: 36103,
    NAME: "Suffolk County",
  },
  {
    Location: "36.628673995,-94.3483586551",
    CountyGeoId: 29119,
    NAME: "McDonald County",
  },
  {
    Location: "40.6520516443,-79.0875470867",
    CountyGeoId: 42063,
    NAME: "Indiana County",
  },
  {
    Location: "35.580655379,-92.5156877897",
    CountyGeoId: "05141",
    NAME: "Van Buren County",
  },
  {
    Location: "38.1734202345,-104.512845555",
    CountyGeoId: "08101",
    NAME: "Pueblo County",
  },
  {
    Location: "35.4050346181,-102.602870603",
    CountyGeoId: 48359,
    NAME: "Oldham County",
  },
  {
    Location: "40.582858561,-86.5634841334",
    CountyGeoId: 18015,
    NAME: "Carroll County",
  },
  {
    Location: "34.7684002341,-88.9088980221",
    CountyGeoId: 28139,
    NAME: "Tippah County",
  },
  {
    Location: "39.443072852,-76.6163229502",
    CountyGeoId: 24005,
    NAME: "Baltimore County",
  },
  {
    Location: "44.9033239855,-122.584898334",
    CountyGeoId: 41047,
    NAME: "Marion County",
  },
  {
    Location: "41.394264035,-99.7261437929",
    CountyGeoId: 31041,
    NAME: "Custer County",
  },
  {
    Location: "36.578159387,-105.631025824",
    CountyGeoId: 35055,
    NAME: "Taos County",
  },
  {
    Location: "46.326849228,-116.750277131",
    CountyGeoId: 16069,
    NAME: "Nez Perce County",
  },
  {
    Location: "44.1131203121,-89.2428789608",
    CountyGeoId: 55137,
    NAME: "Waushara County",
  },
  {
    Location: "37.8015772072,-82.5132925147",
    CountyGeoId: 21159,
    NAME: "Martin County",
  },
  {
    Location: "35.4217523265,-88.6134615499",
    CountyGeoId: 47023,
    NAME: "Chester County",
  },
  {
    Location: "35.6886045558,-106.865950923",
    CountyGeoId: 35043,
    NAME: "Sandoval County",
  },
  {
    Location: "18.2017062276,-66.3098725656",
    CountyGeoId: 72019,
    NAME: "Barranquitas Municipio",
  },
  {
    Location: "32.7407276994,-102.635174091",
    CountyGeoId: 48165,
    NAME: "Gaines County",
  },
  {
    Location: "44.8895880248,-116.453882862",
    CountyGeoId: 16003,
    NAME: "Adams County",
  },
  {
    Location: "42.5970991967,-84.3735369769",
    CountyGeoId: 26065,
    NAME: "Ingham County",
  },
  {
    Location: "41.0334522634,-95.621326718",
    CountyGeoId: 19129,
    NAME: "Mills County",
  },
  {
    Location: "36.1306195485,-80.256300016",
    CountyGeoId: 37067,
    NAME: "Forsyth County",
  },
  {
    Location: "41.2953518815,-96.1544786904",
    CountyGeoId: 31055,
    NAME: "Douglas County",
  },
  {
    Location: "33.6061291442,-99.7414270482",
    CountyGeoId: 48275,
    NAME: "Knox County",
  },
  {
    Location: "37.4712716191,-89.255127403",
    CountyGeoId: 17181,
    NAME: "Union County",
  },
  {
    Location: "38.6064621876,-89.4224823889",
    CountyGeoId: 17027,
    NAME: "Clinton County",
  },
  {
    Location: "37.8415087294,-86.7779252067",
    CountyGeoId: 21091,
    NAME: "Hancock County",
  },
  {
    Location: "39.6914804501,-83.8898867514",
    CountyGeoId: 39057,
    NAME: "Greene County",
  },
  {
    Location: "60.1194076421,-151.698058085",
    CountyGeoId: "02122",
    NAME: "Kenai Peninsula Borough",
  },
  {
    Location: "41.916698107,-97.6007790824",
    CountyGeoId: 31119,
    NAME: "Madison County",
  },
  {
    Location: "34.6778362856,-91.2038921969",
    CountyGeoId: "05095",
    NAME: "Monroe County",
  },
  {
    Location: "63.6716419513,-150.011714676",
    CountyGeoId: "02068",
    NAME: "Denali Borough",
  },
  {
    Location: "42.4212881344,-99.4499297346",
    CountyGeoId: 31149,
    NAME: "Rock County",
  },
  {
    Location: "41.8963811411,-80.759010793",
    CountyGeoId: 39007,
    NAME: "Ashtabula County",
  },
  {
    Location: "25.0467803277,-81.1856924179",
    CountyGeoId: 12087,
    NAME: "Monroe County",
  },
  {
    Location: "35.4025956291,-81.9198334642",
    CountyGeoId: 37161,
    NAME: "Rutherford County",
  },
  {
    Location: "37.2072808133,-86.68175556",
    CountyGeoId: 21031,
    NAME: "Butler County",
  },
  {
    Location: "44.4125964168,-96.2670873079",
    CountyGeoId: 27081,
    NAME: "Lincoln County",
  },
  {
    Location: "34.965417596,-100.813991608",
    CountyGeoId: 48129,
    NAME: "Donley County",
  },
  {
    Location: "38.688812974,-84.0901906655",
    CountyGeoId: 21023,
    NAME: "Bracken County",
  },
  {
    Location: "36.3085986469,-93.0915633723",
    CountyGeoId: "05009",
    NAME: "Boone County",
  },
  {
    Location: "33.9364500127,-89.336445157",
    CountyGeoId: 28013,
    NAME: "Calhoun County",
  },
  {
    Location: "35.2792789622,-82.1696779265",
    CountyGeoId: 37149,
    NAME: "Polk County",
  },
  {
    Location: "39.9198995806,-79.6473693491",
    CountyGeoId: 42051,
    NAME: "Fayette County",
  },
  {
    Location: "31.303925021,-100.982419275",
    CountyGeoId: 48235,
    NAME: "Irion County",
  },
  {
    Location: "42.1949698367,-112.539356598",
    CountyGeoId: 16071,
    NAME: "Oneida County",
  },
  {
    Location: "41.6855048252,-93.5735335401",
    CountyGeoId: 19153,
    NAME: "Polk County",
  },
  {
    Location: "32.0176929287,-89.506677525",
    CountyGeoId: 28129,
    NAME: "Smith County",
  },
  {
    Location: "36.8556222182,-89.9443100866",
    CountyGeoId: 29207,
    NAME: "Stoddard County",
  },
  {
    Location: "37.8246250522,-92.2076625405",
    CountyGeoId: 29169,
    NAME: "Pulaski County",
  },
  {
    Location: "37.2180440575,-119.762644507",
    CountyGeoId: "06039",
    NAME: "Madera County",
  },
  {
    Location: "35.2943489527,-81.1802416273",
    CountyGeoId: 37071,
    NAME: "Gaston County",
  },
  {
    Location: "40.1257361849,-122.233884853",
    CountyGeoId: "06103",
    NAME: "Tehama County",
  },
  {
    Location: "41.6860388529,-93.0537645398",
    CountyGeoId: 19099,
    NAME: "Jasper County",
  },
  {
    Location: "41.3366123482,-95.542393077",
    CountyGeoId: 19155,
    NAME: "Pottawattamie County",
  },
  {
    Location: "33.7902830104,-84.4669897339",
    CountyGeoId: 13121,
    NAME: "Fulton County",
  },
  {
    Location: "43.3091611082,-77.6801783639",
    CountyGeoId: 36055,
    NAME: "Monroe County",
  },
  {
    Location: "30.9149468971,-82.7062370645",
    CountyGeoId: 13065,
    NAME: "Clinch County",
  },
  {
    Location: "34.7630897031,-86.5502065185",
    CountyGeoId: "01089",
    NAME: "Madison County",
  },
  {
    Location: "46.0092394572,-87.8702584456",
    CountyGeoId: 26043,
    NAME: "Dickinson County",
  },
  {
    Location: "34.7806229431,-90.7820673213",
    CountyGeoId: "05077",
    NAME: "Lee County",
  },
  {
    Location: "34.290293884,-99.7457167359",
    CountyGeoId: 48197,
    NAME: "Hardeman County",
  },
  {
    Location: "34.7622655092,-89.503056435",
    CountyGeoId: 28093,
    NAME: "Marshall County",
  },
  {
    Location: "41.8145746206,-79.2741433707",
    CountyGeoId: 42123,
    NAME: "Warren County",
  },
  {
    Location: "42.3897291621,-96.0447949019",
    CountyGeoId: 19193,
    NAME: "Woodbury County",
  },
  {
    Location: "43.0354526887,-73.0929606243",
    CountyGeoId: 50003,
    NAME: "Bennington County",
  },
  {
    Location: "40.7684277475,-80.7771865597",
    CountyGeoId: 39029,
    NAME: "Columbiana County",
  },
  {
    Location: "36.8280984725,-89.2911821185",
    CountyGeoId: 29133,
    NAME: "Mississippi County",
  },
  {
    Location: "39.3503577669,-100.441832361",
    CountyGeoId: 20179,
    NAME: "Sheridan County",
  },
  {
    Location: "44.58291654,-92.0015496858",
    CountyGeoId: 55091,
    NAME: "Pepin County",
  },
  {
    Location: "35.3955080611,-109.488828707",
    CountyGeoId: "04001",
    NAME: "Apache County",
  },
  {
    Location: "34.0686230903,-102.351710486",
    CountyGeoId: 48279,
    NAME: "Lamb County",
  },
  {
    Location: "36.1210986495,-95.9414756124",
    CountyGeoId: 40143,
    NAME: "Tulsa County",
  },
  {
    Location: "37.2243021506,-78.4410828106",
    CountyGeoId: 51147,
    NAME: "Prince Edward County",
  },
  {
    Location: "39.8644164614,-85.0098761363",
    CountyGeoId: 18177,
    NAME: "Wayne County",
  },
  {
    Location: "39.6036746811,-77.8139806631",
    CountyGeoId: 24043,
    NAME: "Washington County",
  },
  {
    Location: "37.9708518682,-84.1473994082",
    CountyGeoId: 21049,
    NAME: "Clark County",
  },
  {
    Location: "39.5236921944,-85.7917003981",
    CountyGeoId: 18145,
    NAME: "Shelby County",
  },
  {
    Location: "38.00019653,-101.31986081",
    CountyGeoId: 20093,
    NAME: "Kearny County",
  },
  {
    Location: "37.2381964095,-100.36618026",
    CountyGeoId: 20119,
    NAME: "Meade County",
  },
  {
    Location: "43.9346374164,-110.589809669",
    CountyGeoId: 56039,
    NAME: "Teton County",
  },
  {
    Location: "48.7668933923,-116.462903445",
    CountyGeoId: 16021,
    NAME: "Boundary County",
  },
  {
    Location: "41.6350590585,-81.7001959208",
    CountyGeoId: 39035,
    NAME: "Cuyahoga County",
  },
  {
    Location: "38.4820845404,-101.34735565",
    CountyGeoId: 20203,
    NAME: "Wichita County",
  },
  {
    Location: "27.6963908471,-80.5740896149",
    CountyGeoId: 12061,
    NAME: "Indian River County",
  },
  {
    Location: "38.4860376265,-77.955819263",
    CountyGeoId: 51047,
    NAME: "Culpeper County",
  },
  {
    Location: "35.4012788062,-100.269647513",
    CountyGeoId: 48483,
    NAME: "Wheeler County",
  },
  {
    Location: "40.0424384345,-76.2477042693",
    CountyGeoId: 42071,
    NAME: "Lancaster County",
  },
  {
    Location: "36.2171519061,-83.2666627121",
    CountyGeoId: 47063,
    NAME: "Hamblen County",
  },
  {
    Location: "30.458037893,-84.2778815189",
    CountyGeoId: 12073,
    NAME: "Leon County",
  },
  {
    Location: "41.402131202,-74.3055376374",
    CountyGeoId: 36071,
    NAME: "Orange County",
  },
  {
    Location: "38.9532912889,-96.2050045391",
    CountyGeoId: 20197,
    NAME: "Wabaunsee County",
  },
  {
    Location: "31.5146944202,-85.2414063367",
    CountyGeoId: "01067",
    NAME: "Henry County",
  },
  {
    Location: "34.6911781057,-84.4556269832",
    CountyGeoId: 13123,
    NAME: "Gilmer County",
  },
  {
    Location: "32.6347102394,-90.0337143493",
    CountyGeoId: 28089,
    NAME: "Madison County",
  },
  {
    Location: "45.0311075069,-83.1652010912",
    CountyGeoId: 26007,
    NAME: "Alpena County",
  },
  {
    Location: "28.5561708513,-82.4684895116",
    CountyGeoId: 12053,
    NAME: "Hernando County",
  },
  {
    Location: "38.9500945902,-84.9650431209",
    CountyGeoId: 18115,
    NAME: "Ohio County",
  },
  {
    Location: "33.5441179101,-82.2640527023",
    CountyGeoId: 13073,
    NAME: "Columbia County",
  },
  {
    Location: "45.1880453547,-122.220869625",
    CountyGeoId: 41005,
    NAME: "Clackamas County",
  },
  {
    Location: "43.6739971693,-92.0901672654",
    CountyGeoId: 27045,
    NAME: "Fillmore County",
  },
  {
    Location: "38.5417788857,-86.4950692821",
    CountyGeoId: 18117,
    NAME: "Orange County",
  },
  {
    Location: "46.9482692108,-86.5721601717",
    CountyGeoId: 26003,
    NAME: "Alger County",
  },
  {
    Location: "35.2153385104,-93.7162169926",
    CountyGeoId: "05083",
    NAME: "Logan County",
  },
  {
    Location: "38.2067299514,-84.2171399549",
    CountyGeoId: 21017,
    NAME: "Bourbon County",
  },
  {
    Location: "42.8788290644,-99.7123497118",
    CountyGeoId: 31103,
    NAME: "Keya Paha County",
  },
  {
    Location: "40.2982423213,-110.42518446",
    CountyGeoId: 49013,
    NAME: "Duchesne County",
  },
  {
    Location: "35.8580358086,-82.7057582627",
    CountyGeoId: 37115,
    NAME: "Madison County",
  },
  {
    Location: "31.5523801522,-97.2017864999",
    CountyGeoId: 48309,
    NAME: "McLennan County",
  },
  {
    Location: "35.7610127808,-89.6314442054",
    CountyGeoId: 47097,
    NAME: "Lauderdale County",
  },
  {
    Location: "40.072489475,-86.0520142517",
    CountyGeoId: 18057,
    NAME: "Hamilton County",
  },
  {
    Location: "34.3575285169,-119.126027193",
    CountyGeoId: "06111",
    NAME: "Ventura County",
  },
  {
    Location: "39.0026980674,-87.7595511478",
    CountyGeoId: 17033,
    NAME: "Crawford County",
  },
  {
    Location: "42.3851848526,-94.6404136047",
    CountyGeoId: 19025,
    NAME: "Calhoun County",
  },
  {
    Location: "33.6199254931,-79.7277120284",
    CountyGeoId: 45089,
    NAME: "Williamsburg County",
  },
  {
    Location: "37.7393195914,-83.4931751504",
    CountyGeoId: 21237,
    NAME: "Wolfe County",
  },
  {
    Location: "32.7145016626,-83.9863423246",
    CountyGeoId: 13079,
    NAME: "Crawford County",
  },
  {
    Location: "35.3867940405,-80.5518508851",
    CountyGeoId: 37025,
    NAME: "Cabarrus County",
  },
  {
    Location: "39.5783299005,-75.6389781252",
    CountyGeoId: 10003,
    NAME: "New Castle County",
  },
  {
    Location: "43.411940562,-113.980147573",
    CountyGeoId: 16013,
    NAME: "Blaine County",
  },
  {
    Location: "34.1538305575,-82.1259300134",
    CountyGeoId: 45047,
    NAME: "Greenwood County",
  },
  {
    Location: "48.0693970137,-99.3660130155",
    CountyGeoId: 38005,
    NAME: "Benson County",
  },
  {
    Location: "39.6302838888,-80.0465441583",
    CountyGeoId: 54061,
    NAME: "Monongalia County",
  },
  {
    Location: "31.3909114388,-97.7992042907",
    CountyGeoId: 48099,
    NAME: "Coryell County",
  },
  {
    Location: "44.6484737252,-93.5358982367",
    CountyGeoId: 27139,
    NAME: "Scott County",
  },
  {
    Location: "29.8081801337,-98.2782455413",
    CountyGeoId: 48091,
    NAME: "Comal County",
  },
  {
    Location: "39.8538114574,-87.4639782841",
    CountyGeoId: 18165,
    NAME: "Vermillion County",
  },
  {
    Location: "44.335608598,-84.6115999116",
    CountyGeoId: 26143,
    NAME: "Roscommon County",
  },
  {
    Location: "46.4954898595,-89.7954717926",
    CountyGeoId: 26053,
    NAME: "Gogebic County",
  },
  {
    Location: "40.0065552677,-78.4903171166",
    CountyGeoId: 42009,
    NAME: "Bedford County",
  },
  {
    Location: "44.3349392585,-84.1264136573",
    CountyGeoId: 26129,
    NAME: "Ogemaw County",
  },
  {
    Location: "32.4038815035,-82.567282527",
    CountyGeoId: 13283,
    NAME: "Treutlen County",
  },
  {
    Location: "41.0486534578,-76.4051500765",
    CountyGeoId: 42037,
    NAME: "Columbia County",
  },
  {
    Location: "48.2345728769,-100.636289195",
    CountyGeoId: 38049,
    NAME: "McHenry County",
  },
  {
    Location: "38.0815539776,-88.5390962907",
    CountyGeoId: 17065,
    NAME: "Hamilton County",
  },
  {
    Location: "41.2698430321,-111.913383934",
    CountyGeoId: 49057,
    NAME: "Weber County",
  },
  {
    Location: "39.1368391026,-93.2018512461",
    CountyGeoId: 29195,
    NAME: "Saline County",
  },
  {
    Location: "32.3526480947,-106.832721302",
    CountyGeoId: 35013,
    NAME: "Doña Ana County",
  },
  {
    Location: "38.9880685587,-103.513965366",
    CountyGeoId: "08073",
    NAME: "Lincoln County",
  },
  {
    Location: "41.6848582046,-94.0397619265",
    CountyGeoId: 19049,
    NAME: "Dallas County",
  },
  {
    Location: "42.3518291045,-89.6622542939",
    CountyGeoId: 17177,
    NAME: "Stephenson County",
  },
  {
    Location: "38.8530983407,-77.2997880719",
    CountyGeoId: 51600,
    NAME: "Fairfax city",
  },
  {
    Location: "37.7238515313,-93.8566135049",
    CountyGeoId: 29039,
    NAME: "Cedar County",
  },
  {
    Location: "18.131132267,-66.2643804492",
    CountyGeoId: 72009,
    NAME: "Aibonito Municipio",
  },
  {
    Location: "36.9919552301,-79.8810638666",
    CountyGeoId: 51067,
    NAME: "Franklin County",
  },
  {
    Location: "40.1576395642,-85.011310408",
    CountyGeoId: 18135,
    NAME: "Randolph County",
  },
  {
    Location: "35.4247444764,-84.6174748904",
    CountyGeoId: 47107,
    NAME: "McMinn County",
  },
  {
    Location: "41.855065982,-72.3365016791",
    CountyGeoId: "09013",
    NAME: "Tolland County",
  },
  {
    Location: "33.6102061227,-101.820545838",
    CountyGeoId: 48303,
    NAME: "Lubbock County",
  },
  {
    Location: "35.350171951,-83.833581803",
    CountyGeoId: 37075,
    NAME: "Graham County",
  },
  {
    Location: "38.0287775598,-81.0811920732",
    CountyGeoId: 54019,
    NAME: "Fayette County",
  },
  {
    Location: "32.5349201866,-86.642749235",
    CountyGeoId: "01001",
    NAME: "Autauga County",
  },
  {
    Location: "39.3076165956,-77.8627359849",
    CountyGeoId: 54037,
    NAME: "Jefferson County",
  },
  {
    Location: "37.9027017254,-103.716445685",
    CountyGeoId: "08089",
    NAME: "Otero County",
  },
  {
    Location: "38.6866603948,-121.90161702",
    CountyGeoId: "06113",
    NAME: "Yolo County",
  },
  {
    Location: "46.932964277,-97.2480210132",
    CountyGeoId: 38017,
    NAME: "Cass County",
  },
  {
    Location: "34.42829125,-90.8480221032",
    CountyGeoId: "05107",
    NAME: "Phillips County",
  },
  {
    Location: "39.0376284098,-76.0850360056",
    CountyGeoId: 24035,
    NAME: "Queen Anne's County",
  },
  {
    Location: "40.0944306459,-95.215512199",
    CountyGeoId: 29087,
    NAME: "Holt County",
  },
  {
    Location: "47.6747883901,-115.133309958",
    CountyGeoId: 30089,
    NAME: "Sanders County",
  },
  {
    Location: "36.4968580761,-87.382887079",
    CountyGeoId: 47125,
    NAME: "Montgomery County",
  },
  {
    Location: "38.0586888264,-79.7410619159",
    CountyGeoId: 51017,
    NAME: "Bath County",
  },
  {
    Location: "37.1936094363,-107.048288324",
    CountyGeoId: "08007",
    NAME: "Archuleta County",
  },
  {
    Location: "46.4044620332,-113.440367846",
    CountyGeoId: 30039,
    NAME: "Granite County",
  },
  {
    Location: "39.1735054386,-78.1746435555",
    CountyGeoId: 51840,
    NAME: "Winchester city",
  },
  {
    Location: "34.9365348363,-77.9330277459",
    CountyGeoId: 37061,
    NAME: "Duplin County",
  },
  {
    Location: "38.1644265021,-79.1338544675",
    CountyGeoId: 51015,
    NAME: "Augusta County",
  },
  {
    Location: "34.3541370113,-83.4973801652",
    CountyGeoId: 13011,
    NAME: "Banks County",
  },
  {
    Location: "37.5603718263,-80.5505540253",
    CountyGeoId: 54063,
    NAME: "Monroe County",
  },
  {
    Location: "31.9728932009,-83.4323638025",
    CountyGeoId: 13315,
    NAME: "Wilcox County",
  },
  {
    Location: "45.4439531217,-93.7745948671",
    CountyGeoId: 27141,
    NAME: "Sherburne County",
  },
  {
    Location: "33.616489499,-99.2135151435",
    CountyGeoId: 48023,
    NAME: "Baylor County",
  },
  {
    Location: "33.110112782,-88.5698161858",
    CountyGeoId: 28103,
    NAME: "Noxubee County",
  },
  {
    Location: "45.1600224643,-121.167775167",
    CountyGeoId: 41065,
    NAME: "Wasco County",
  },
  {
    Location: "34.709836363,-77.4157658244",
    CountyGeoId: 37133,
    NAME: "Onslow County",
  },
  {
    Location: "35.2562753346,-91.7455472673",
    CountyGeoId: "05145",
    NAME: "White County",
  },
  {
    Location: "40.2106416142,-93.1115222539",
    CountyGeoId: 29211,
    NAME: "Sullivan County",
  },
  {
    Location: "31.8691725205,-102.542749193",
    CountyGeoId: 48135,
    NAME: "Ector County",
  },
  {
    Location: "33.4089633624,-82.6767617191",
    CountyGeoId: 13301,
    NAME: "Warren County",
  },
  {
    Location: "37.5622507408,-100.871191808",
    CountyGeoId: 20081,
    NAME: "Haskell County",
  },
  {
    Location: "37.7064741502,-83.0649145355",
    CountyGeoId: 21153,
    NAME: "Magoffin County",
  },
  {
    Location: "30.6528705338,-92.8278792297",
    CountyGeoId: 22003,
    NAME: "Allen Parish",
  },
  {
    Location: "42.1412473526,-76.7600260363",
    CountyGeoId: 36015,
    NAME: "Chemung County",
  },
  {
    Location: "37.5591374435,-120.997682895",
    CountyGeoId: "06099",
    NAME: "Stanislaus County",
  },
  {
    Location: "37.7873807102,-78.8868222264",
    CountyGeoId: 51125,
    NAME: "Nelson County",
  },
  {
    Location: "31.9906857305,-97.1324266998",
    CountyGeoId: 48217,
    NAME: "Hill County",
  },
  {
    Location: "39.4553161933,-81.4952544284",
    CountyGeoId: 39167,
    NAME: "Washington County",
  },
  {
    Location: "42.0516662494,-95.9599234782",
    CountyGeoId: 19133,
    NAME: "Monona County",
  },
  {
    Location: "46.0126176925,-94.2684153059",
    CountyGeoId: 27097,
    NAME: "Morrison County",
  },
  {
    Location: "39.7842012909,-97.0875435237",
    CountyGeoId: 20201,
    NAME: "Washington County",
  },
  {
    Location: "44.3373203725,-85.0946817376",
    CountyGeoId: 26113,
    NAME: "Missaukee County",
  },
  {
    Location: "41.9159125951,-101.135334608",
    CountyGeoId: 31091,
    NAME: "Hooker County",
  },
  {
    Location: "39.6481383656,-110.588798086",
    CountyGeoId: 49007,
    NAME: "Carbon County",
  },
  {
    Location: "35.6542570602,-88.3879869313",
    CountyGeoId: 47077,
    NAME: "Henderson County",
  },
  {
    Location: "43.9898287022,-85.3252875939",
    CountyGeoId: 26133,
    NAME: "Osceola County",
  },
  {
    Location: "46.9915439408,-88.6520579518",
    CountyGeoId: 26061,
    NAME: "Houghton County",
  },
  {
    Location: "46.716058182,-101.281118786",
    CountyGeoId: 38059,
    NAME: "Morton County",
  },
  {
    Location: "37.2042660125,-77.3913375552",
    CountyGeoId: 51730,
    NAME: "Petersburg city",
  },
  {
    Location: "47.8716944124,-96.0953033903",
    CountyGeoId: 27125,
    NAME: "Red Lake County",
  },
  {
    Location: "32.8703394239,-95.7933763474",
    CountyGeoId: 48379,
    NAME: "Rains County",
  },
  {
    Location: "34.9747567032,-81.1843527866",
    CountyGeoId: 45091,
    NAME: "York County",
  },
  {
    Location: "38.336574821,-81.5281178783",
    CountyGeoId: 54039,
    NAME: "Kanawha County",
  },
  {
    Location: "37.1865096844,-77.2241521943",
    CountyGeoId: 51149,
    NAME: "Prince George County",
  },
  {
    Location: "34.0452544,-86.034762324",
    CountyGeoId: "01055",
    NAME: "Etowah County",
  },
  {
    Location: "38.981944957,-109.569833712",
    CountyGeoId: 49019,
    NAME: "Grand County",
  },
  {
    Location: "-11.0543869937,-171.074929617",
    CountyGeoId: 60040,
    NAME: "Swains Island",
  },
  {
    Location: "36.4148205561,-80.6880779273",
    CountyGeoId: 37171,
    NAME: "Surry County",
  },
  {
    Location: "31.4026271796,-85.9882069262",
    CountyGeoId: "01031",
    NAME: "Coffee County",
  },
  {
    Location: "43.6250870279,-116.709270124",
    CountyGeoId: 16027,
    NAME: "Canyon County",
  },
  {
    Location: "41.5740218741,-97.0864647524",
    CountyGeoId: 31037,
    NAME: "Colfax County",
  },
  {
    Location: "36.7777632303,-76.0163281416",
    CountyGeoId: 51810,
    NAME: "Virginia Beach city",
  },
  {
    Location: "45.3006916099,-111.920256238",
    CountyGeoId: 30057,
    NAME: "Madison County",
  },
  {
    Location: "37.7017152151,-76.4202298099",
    CountyGeoId: 51103,
    NAME: "Lancaster County",
  },
  {
    Location: "30.3346942825,-97.7819489614",
    CountyGeoId: 48453,
    NAME: "Travis County",
  },
  {
    Location: "43.6741782318,-96.7914365084",
    CountyGeoId: 46099,
    NAME: "Minnehaha County",
  },
  {
    Location: "36.8012652397,-84.828631199",
    CountyGeoId: 21231,
    NAME: "Wayne County",
  },
  {
    Location: "36.1350244127,-84.6492037421",
    CountyGeoId: 47129,
    NAME: "Morgan County",
  },
  {
    Location: "44.1658484298,-70.206444997",
    CountyGeoId: 23001,
    NAME: "Androscoggin County",
  },
  {
    Location: "34.4643197803,-84.4656390578",
    CountyGeoId: 13227,
    NAME: "Pickens County",
  },
  {
    Location: "42.4300205961,-99.9295064518",
    CountyGeoId: 31017,
    NAME: "Brown County",
  },
  {
    Location: "36.4035128143,-84.1493845804",
    CountyGeoId: 47013,
    NAME: "Campbell County",
  },
  {
    Location: "29.8537289242,-94.1534394591",
    CountyGeoId: 48245,
    NAME: "Jefferson County",
  },
  {
    Location: "32.7545579307,-88.6411594239",
    CountyGeoId: 28069,
    NAME: "Kemper County",
  },
  {
    Location: "33.3121471783,-93.8915614277",
    CountyGeoId: "05091",
    NAME: "Miller County",
  },
  {
    Location: "32.6384656558,-87.2944007854",
    CountyGeoId: "01105",
    NAME: "Perry County",
  },
  {
    Location: "34.7004337984,-87.8049852867",
    CountyGeoId: "01033",
    NAME: "Colbert County",
  },
  {
    Location: "43.2041300298,-94.2067199306",
    CountyGeoId: 19109,
    NAME: "Kossuth County",
  },
  {
    Location: "33.7936596461,-82.4512128043",
    CountyGeoId: 13181,
    NAME: "Lincoln County",
  },
  {
    Location: "46.1079382983,-97.6307326898",
    CountyGeoId: 38081,
    NAME: "Sargent County",
  },
  {
    Location: "35.7103417044,-79.8060069064",
    CountyGeoId: 37151,
    NAME: "Randolph County",
  },
  {
    Location: "43.3877423794,-111.614752705",
    CountyGeoId: 16019,
    NAME: "Bonneville County",
  },
  {
    Location: "33.7212061505,-87.7388619701",
    CountyGeoId: "01057",
    NAME: "Fayette County",
  },
  {
    Location: "46.8923435535,-96.4906494764",
    CountyGeoId: 27027,
    NAME: "Clay County",
  },
  {
    Location: "32.8024055204,-83.1712490669",
    CountyGeoId: 13319,
    NAME: "Wilkinson County",
  },
  {
    Location: "42.2484873981,-84.423437303",
    CountyGeoId: 26075,
    NAME: "Jackson County",
  },
  {
    Location: "43.3612746976,-72.2222293649",
    CountyGeoId: 33019,
    NAME: "Sullivan County",
  },
  {
    Location: "34.3669621021,-86.306636969",
    CountyGeoId: "01095",
    NAME: "Marshall County",
  },
  {
    Location: "40.7637666014,-122.040521531",
    CountyGeoId: "06089",
    NAME: "Shasta County",
  },
  {
    Location: "29.8093893174,-92.304282947",
    CountyGeoId: 22113,
    NAME: "Vermilion Parish",
  },
  {
    Location: "42.9193314277,-72.2511752725",
    CountyGeoId: 33005,
    NAME: "Cheshire County",
  },
  {
    Location: "31.6262755156,-84.9801029119",
    CountyGeoId: 13061,
    NAME: "Clay County",
  },
  {
    Location: "31.5708340246,-87.3654375115",
    CountyGeoId: "01099",
    NAME: "Monroe County",
  },
  {
    Location: "46.0528985901,-89.514845622",
    CountyGeoId: 55125,
    NAME: "Vilas County",
  },
  {
    Location: "32.4002323469,-89.1188085187",
    CountyGeoId: 28101,
    NAME: "Newton County",
  },
  {
    Location: "33.4457647387,-94.4233195808",
    CountyGeoId: 48037,
    NAME: "Bowie County",
  },
  {
    Location: "18.0795649599,-66.8582828252",
    CountyGeoId: 72153,
    NAME: "Yauco Municipio",
  },
  {
    Location: "38.9122413956,-119.616372018",
    CountyGeoId: 32005,
    NAME: "Douglas County",
  },
  {
    Location: "39.0363277254,-86.962046365",
    CountyGeoId: 18055,
    NAME: "Greene County",
  },
  {
    Location: "39.9798357499,-108.217225788",
    CountyGeoId: "08103",
    NAME: "Rio Blanco County",
  },
  {
    Location: "41.2044899818,-89.2857803179",
    CountyGeoId: 17155,
    NAME: "Putnam County",
  },
  {
    Location: "34.1492251125,-87.3736834128",
    CountyGeoId: "01133",
    NAME: "Winston County",
  },
  {
    Location: "47.5095252347,-93.6320085311",
    CountyGeoId: 27061,
    NAME: "Itasca County",
  },
  {
    Location: "34.028211563,-89.7076318397",
    CountyGeoId: 28161,
    NAME: "Yalobusha County",
  },
  {
    Location: "31.9141614433,-108.714976887",
    CountyGeoId: 35023,
    NAME: "Hidalgo County",
  },
  {
    Location: "37.7812707517,-96.8390654617",
    CountyGeoId: 20015,
    NAME: "Butler County",
  },
  {
    Location: "36.6830914867,-76.9385845546",
    CountyGeoId: 51620,
    NAME: "Franklin city",
  },
  {
    Location: "41.3352034594,-92.6409093578",
    CountyGeoId: 19123,
    NAME: "Mahaska County",
  },
  {
    Location: "29.99980267,-104.240521679",
    CountyGeoId: 48377,
    NAME: "Presidio County",
  },
  {
    Location: "35.7639016515,-90.0541660119",
    CountyGeoId: "05093",
    NAME: "Mississippi County",
  },
  {
    Location: "32.1721824488,-83.168399978",
    CountyGeoId: 13091,
    NAME: "Dodge County",
  },
  {
    Location: "28.9542442328,-96.577680914",
    CountyGeoId: 48239,
    NAME: "Jackson County",
  },
  {
    Location: "34.3387988678,-80.5902184298",
    CountyGeoId: 45055,
    NAME: "Kershaw County",
  },
  {
    Location: "31.8500445654,-103.048169055",
    CountyGeoId: 48495,
    NAME: "Winkler County",
  },
  {
    Location: "44.2483385902,-105.548313414",
    CountyGeoId: 56005,
    NAME: "Campbell County",
  },
  {
    Location: "45.423382391,-107.489852538",
    CountyGeoId: 30003,
    NAME: "Big Horn County",
  },
  {
    Location: "31.6332182103,-89.5526288201",
    CountyGeoId: 28031,
    NAME: "Covington County",
  },
  {
    Location: "37.6924814699,-83.9643302311",
    CountyGeoId: 21065,
    NAME: "Estill County",
  },
  {
    Location: "35.5123637272,-93.8906143781",
    CountyGeoId: "05047",
    NAME: "Franklin County",
  },
  {
    Location: "37.9700757707,-85.6958570326",
    CountyGeoId: 21029,
    NAME: "Bullitt County",
  },
  {
    Location: "41.6167180092,-86.2898576945",
    CountyGeoId: 18141,
    NAME: "St. Joseph County",
  },
  {
    Location: "33.438991479,-80.8002997359",
    CountyGeoId: 45075,
    NAME: "Orangeburg County",
  },
  {
    Location: "45.0170541432,-93.099606274",
    CountyGeoId: 27123,
    NAME: "Ramsey County",
  },
  {
    Location: "36.843740372,-81.5369666383",
    CountyGeoId: 51173,
    NAME: "Smyth County",
  },
  {
    Location: "40.7882358798,-89.2111061648",
    CountyGeoId: 17203,
    NAME: "Woodford County",
  },
  {
    Location: "38.5951729912,-83.8242451537",
    CountyGeoId: 21161,
    NAME: "Mason County",
  },
  {
    Location: "34.6621223951,-98.4716796499",
    CountyGeoId: 40031,
    NAME: "Comanche County",
  },
  {
    Location: "30.4234582107,-83.9004744786",
    CountyGeoId: 12065,
    NAME: "Jefferson County",
  },
  {
    Location: "38.9967401872,-110.700630808",
    CountyGeoId: 49015,
    NAME: "Emery County",
  },
  {
    Location: "37.5216171391,-83.3240853027",
    CountyGeoId: 21025,
    NAME: "Breathitt County",
  },
  {
    Location: "40.7476890807,-92.4097172922",
    CountyGeoId: 19051,
    NAME: "Davis County",
  },
  {
    Location: "43.9891394613,-115.730322485",
    CountyGeoId: 16015,
    NAME: "Boise County",
  },
  {
    Location: "44.0067583131,-116.76084539",
    CountyGeoId: 16075,
    NAME: "Payette County",
  },
  {
    Location: "33.7722424167,-81.9664425704",
    CountyGeoId: 45037,
    NAME: "Edgefield County",
  },
  {
    Location: "36.6758560817,-77.5595928743",
    CountyGeoId: 51081,
    NAME: "Greensville County",
  },
  {
    Location: "44.0037135763,-102.823815002",
    CountyGeoId: 46103,
    NAME: "Pennington County",
  },
  {
    Location: "41.244097338,-85.8607176828",
    CountyGeoId: 18085,
    NAME: "Kosciusko County",
  },
  {
    Location: "46.856415378,-112.936158101",
    CountyGeoId: 30077,
    NAME: "Powell County",
  },
  {
    Location: "40.9231743916,-91.181482989",
    CountyGeoId: 19057,
    NAME: "Des Moines County",
  },
  {
    Location: "42.5882192933,-74.4421175889",
    CountyGeoId: 36095,
    NAME: "Schoharie County",
  },
  {
    Location: "31.7597819469,-83.2204589709",
    CountyGeoId: 13017,
    NAME: "Ben Hill County",
  },
  {
    Location: "34.3639350883,-89.9505672784",
    CountyGeoId: 28107,
    NAME: "Panola County",
  },
  {
    Location: "35.2622207059,-92.7013072101",
    CountyGeoId: "05029",
    NAME: "Conway County",
  },
  {
    Location: "39.3503339996,-98.7679898039",
    CountyGeoId: 20141,
    NAME: "Osborne County",
  },
  {
    Location: "32.5554592715,-84.2504642348",
    CountyGeoId: 13269,
    NAME: "Taylor County",
  },
  {
    Location: "40.9596717781,-74.0742255725",
    CountyGeoId: 34003,
    NAME: "Bergen County",
  },
  {
    Location: "64.8354505226,-164.244322616",
    CountyGeoId: "02180",
    NAME: "Nome Census Area",
  },
  {
    Location: "52.680220089,-92.4880742871",
    CountyGeoId: "02016",
    NAME: "Aleutians West Census Area",
  },
  {
    Location: "34.1632936569,-80.2545239336",
    CountyGeoId: 45061,
    NAME: "Lee County",
  },
  {
    Location: "33.7699538621,-89.8020061532",
    CountyGeoId: 28043,
    NAME: "Grenada County",
  },
  {
    Location: "29.2102022904,-82.0566756823",
    CountyGeoId: 12083,
    NAME: "Marion County",
  },
  {
    Location: "32.3673093945,-81.3413404834",
    CountyGeoId: 13103,
    NAME: "Effingham County",
  },
  {
    Location: "43.3756405374,-90.4294834242",
    CountyGeoId: 55103,
    NAME: "Richland County",
  },
  {
    Location: "44.7899892755,-106.879383134",
    CountyGeoId: 56033,
    NAME: "Sheridan County",
  },
  {
    Location: "40.5795915499,-81.0897165993",
    CountyGeoId: 39019,
    NAME: "Carroll County",
  },
  {
    Location: "42.5814260739,-116.169968363",
    CountyGeoId: 16073,
    NAME: "Owyhee County",
  },
  {
    Location: "40.4702708097,-92.5209408738",
    CountyGeoId: 29197,
    NAME: "Schuyler County",
  },
  {
    Location: "45.3374314914,-89.7346390174",
    CountyGeoId: 55069,
    NAME: "Lincoln County",
  },
  {
    Location: "33.3633180669,-104.466879578",
    CountyGeoId: 35005,
    NAME: "Chaves County",
  },
  {
    Location: "41.7449210564,-77.895814073",
    CountyGeoId: 42105,
    NAME: "Potter County",
  },
  {
    Location: "37.1573917455,-91.4005112879",
    CountyGeoId: 29203,
    NAME: "Shannon County",
  },
  {
    Location: "35.9453881052,-97.9421091428",
    CountyGeoId: 40073,
    NAME: "Kingfisher County",
  },
  {
    Location: "38.2917014586,-80.7993280947",
    CountyGeoId: 54067,
    NAME: "Nicholas County",
  },
  {
    Location: "34.6466183905,-92.676575561",
    CountyGeoId: "05125",
    NAME: "Saline County",
  },
  {
    Location: "33.8995497978,-82.3098783777",
    CountyGeoId: 45065,
    NAME: "McCormick County",
  },
  {
    Location: "39.3297243092,-104.929559461",
    CountyGeoId: "08035",
    NAME: "Douglas County",
  },
  {
    Location: "34.482314169,-97.0679060587",
    CountyGeoId: 40099,
    NAME: "Murray County",
  },
  {
    Location: "41.1461539274,-82.5984082765",
    CountyGeoId: 39077,
    NAME: "Huron County",
  },
  {
    Location: "31.5536748311,-82.4526850982",
    CountyGeoId: 13005,
    NAME: "Bacon County",
  },
  {
    Location: "39.4275866129,-84.166754367",
    CountyGeoId: 39165,
    NAME: "Warren County",
  },
  {
    Location: "40.3987652449,-82.4215337501",
    CountyGeoId: 39083,
    NAME: "Knox County",
  },
  {
    Location: "40.0969217077,-80.619057007",
    CountyGeoId: 54069,
    NAME: "Ohio County",
  },
  {
    Location: "33.171357538,-92.5972913761",
    CountyGeoId: "05139",
    NAME: "Union County",
  },
  {
    Location: "31.6225588057,-89.1687933116",
    CountyGeoId: 28067,
    NAME: "Jones County",
  },
  {
    Location: "28.0087830727,-97.5182740096",
    CountyGeoId: 48409,
    NAME: "San Patricio County",
  },
  {
    Location: "41.1259792495,-81.5321670204",
    CountyGeoId: 39153,
    NAME: "Summit County",
  },
  {
    Location: "44.4036612077,-95.2538341808",
    CountyGeoId: 27127,
    NAME: "Redwood County",
  },
  {
    Location: "43.082617377,-96.1778828448",
    CountyGeoId: 19167,
    NAME: "Sioux County",
  },
  {
    Location: "37.7264040368,-82.1347612154",
    CountyGeoId: 54059,
    NAME: "Mingo County",
  },
  {
    Location: "36.3790614615,-97.7827227881",
    CountyGeoId: 40047,
    NAME: "Garfield County",
  },
  {
    Location: "46.022994757,-121.91478015",
    CountyGeoId: 53059,
    NAME: "Skamania County",
  },
  {
    Location: "32.2476134122,-87.7895192944",
    CountyGeoId: "01091",
    NAME: "Marengo County",
  },
  {
    Location: "33.7855310388,-98.2085033047",
    CountyGeoId: 48077,
    NAME: "Clay County",
  },
  {
    Location: "48.3694560358,-97.7213240867",
    CountyGeoId: 38099,
    NAME: "Walsh County",
  },
  {
    Location: "39.7845831125,-99.347022123",
    CountyGeoId: 20147,
    NAME: "Phillips County",
  },
  {
    Location: "18.2884177602,-66.2525509031",
    CountyGeoId: 72105,
    NAME: "Naranjito Municipio",
  },
  {
    Location: "28.8662114221,-99.7605956717",
    CountyGeoId: 48507,
    NAME: "Zavala County",
  },
  {
    Location: "34.5383440862,-120.030786183",
    CountyGeoId: "06083",
    NAME: "Santa Barbara County",
  },
  {
    Location: "38.204606803,-120.554132098",
    CountyGeoId: "06009",
    NAME: "Calaveras County",
  },
  {
    Location: "35.7029694977,-96.8808913751",
    CountyGeoId: 40081,
    NAME: "Lincoln County",
  },
  {
    Location: "39.2733468255,-88.2401981662",
    CountyGeoId: 17035,
    NAME: "Cumberland County",
  },
  {
    Location: "46.1101251059,-98.504704356",
    CountyGeoId: 38021,
    NAME: "Dickey County",
  },
  {
    Location: "31.599703679,-92.5595204513",
    CountyGeoId: 22043,
    NAME: "Grant Parish",
  },
  {
    Location: "47.2776387249,-106.992889065",
    CountyGeoId: 30033,
    NAME: "Garfield County",
  },
  {
    Location: "47.0221845765,-89.4347315443",
    CountyGeoId: 26131,
    NAME: "Ontonagon County",
  },
  {
    Location: "37.4817063904,-80.2113954217",
    CountyGeoId: 51045,
    NAME: "Craig County",
  },
  {
    Location: "35.8032506791,-87.4733082278",
    CountyGeoId: 47081,
    NAME: "Hickman County",
  },
  {
    Location: "31.3431998626,-93.8518024149",
    CountyGeoId: 48403,
    NAME: "Sabine County",
  },
  {
    Location: "36.0509841883,-83.4463116121",
    CountyGeoId: 47089,
    NAME: "Jefferson County",
  },
  {
    Location: "26.9564459351,-81.1890293853",
    CountyGeoId: 12043,
    NAME: "Glades County",
  },
  {
    Location: "47.2175378518,-116.658654162",
    CountyGeoId: 16009,
    NAME: "Benewah County",
  },
  {
    Location: "36.4912704378,-81.1278593427",
    CountyGeoId: 37005,
    NAME: "Alleghany County",
  },
  {
    Location: "37.7216505795,-77.9158559223",
    CountyGeoId: 51075,
    NAME: "Goochland County",
  },
  {
    Location: "34.1153249768,-94.7713788557",
    CountyGeoId: 40089,
    NAME: "McCurtain County",
  },
  {
    Location: "37.7201835062,-84.2779980048",
    CountyGeoId: 21151,
    NAME: "Madison County",
  },
  {
    Location: "36.0948699143,-91.9134102959",
    CountyGeoId: "05065",
    NAME: "Izard County",
  },
  {
    Location: "40.9912143554,-80.3347070702",
    CountyGeoId: 42073,
    NAME: "Lawrence County",
  },
  {
    Location: "33.2154016682,-109.240355413",
    CountyGeoId: "04011",
    NAME: "Greenlee County",
  },
  {
    Location: "33.9808673856,-86.5673709608",
    CountyGeoId: "01009",
    NAME: "Blount County",
  },
  {
    Location: "18.3762890029,-67.1867288243",
    CountyGeoId: 72003,
    NAME: "Aguada Municipio",
  },
  {
    Location: "37.1596975589,-83.714662683",
    CountyGeoId: 21051,
    NAME: "Clay County",
  },
  {
    Location: "17.9463619032,-66.9219381766",
    CountyGeoId: 72055,
    NAME: "Guánica Municipio",
  },
  {
    Location: "28.7425901306,-100.314514171",
    CountyGeoId: 48323,
    NAME: "Maverick County",
  },
  {
    Location: "43.7197073785,-87.6347744896",
    CountyGeoId: 55117,
    NAME: "Sheboygan County",
  },
  {
    Location: "36.8569745004,-83.2179510399",
    CountyGeoId: 21095,
    NAME: "Harlan County",
  },
  {
    Location: "44.4134915893,-95.8389749015",
    CountyGeoId: 27083,
    NAME: "Lyon County",
  },
  {
    Location: "43.3684799638,-88.2307624873",
    CountyGeoId: 55131,
    NAME: "Washington County",
  },
  {
    Location: "33.9022896586,-81.2721775142",
    CountyGeoId: 45063,
    NAME: "Lexington County",
  },
  {
    Location: "43.7535894574,-88.4882631121",
    CountyGeoId: 55039,
    NAME: "Fond du Lac County",
  },
  {
    Location: "36.7669321614,-98.8651275082",
    CountyGeoId: 40151,
    NAME: "Woods County",
  },
  {
    Location: "35.5381064958,-92.0267180322",
    CountyGeoId: "05023",
    NAME: "Cleburne County",
  },
  {
    Location: "41.6945892724,-106.930610164",
    CountyGeoId: 56007,
    NAME: "Carbon County",
  },
  {
    Location: "42.8542597176,-113.637461803",
    CountyGeoId: 16067,
    NAME: "Minidoka County",
  },
  {
    Location: "43.2394623005,-90.9310479025",
    CountyGeoId: 55023,
    NAME: "Crawford County",
  },
  {
    Location: "37.872051318,-84.5809372528",
    CountyGeoId: 21113,
    NAME: "Jessamine County",
  },
  {
    Location: "41.5973844823,-85.8587552785",
    CountyGeoId: 18039,
    NAME: "Elkhart County",
  },
  {
    Location: "37.3664545067,-85.3278346717",
    CountyGeoId: 21217,
    NAME: "Taylor County",
  },
  {
    Location: "32.7715559666,-97.291239244",
    CountyGeoId: 48439,
    NAME: "Tarrant County",
  },
  {
    Location: "41.0580656247,-75.3395154572",
    CountyGeoId: 42089,
    NAME: "Monroe County",
  },
  {
    Location: "33.7157303222,-86.3145956812",
    CountyGeoId: "01115",
    NAME: "St. Clair County",
  },
  {
    Location: "40.8699361138,-99.8195657092",
    CountyGeoId: 31047,
    NAME: "Dawson County",
  },
  {
    Location: "38.781907067,-90.6748987038",
    CountyGeoId: 29183,
    NAME: "St. Charles County",
  },
  {
    Location: "32.1567629596,-81.8868846224",
    CountyGeoId: 13109,
    NAME: "Evans County",
  },
  {
    Location: "47.457077544,-98.882985338",
    CountyGeoId: 38031,
    NAME: "Foster County",
  },
  {
    Location: "31.5515116745,-83.8508756933",
    CountyGeoId: 13321,
    NAME: "Worth County",
  },
  {
    Location: "39.4815483458,-86.4462121421",
    CountyGeoId: 18109,
    NAME: "Morgan County",
  },
  {
    Location: "38.0520825054,-89.825176402",
    CountyGeoId: 17157,
    NAME: "Randolph County",
  },
  {
    Location: "36.7244585691,-81.9598229888",
    CountyGeoId: 51191,
    NAME: "Washington County",
  },
  {
    Location: "37.2692738291,-80.0679899739",
    CountyGeoId: 51161,
    NAME: "Roanoke County",
  },
  {
    Location: "40.1208707645,-87.2419916982",
    CountyGeoId: 18045,
    NAME: "Fountain County",
  },
  {
    Location: "34.316508267,-96.6605948986",
    CountyGeoId: 40069,
    NAME: "Johnston County",
  },
  {
    Location: "36.7669858485,-78.9366028156",
    CountyGeoId: 51083,
    NAME: "Halifax County",
  },
  {
    Location: "33.8333331807,-91.2539442656",
    CountyGeoId: "05041",
    NAME: "Desha County",
  },
  {
    Location: "42.3862603643,-95.1053945569",
    CountyGeoId: 19161,
    NAME: "Sac County",
  },
  {
    Location: "40.2275253191,-85.3968993017",
    CountyGeoId: 18035,
    NAME: "Delaware County",
  },
  {
    Location: "32.8250434949,-79.896819219",
    CountyGeoId: 45019,
    NAME: "Charleston County",
  },
  {
    Location: "37.0191301368,-88.0832815032",
    CountyGeoId: 21143,
    NAME: "Lyon County",
  },
  {
    Location: "36.5254454743,-86.8705670582",
    CountyGeoId: 47147,
    NAME: "Robertson County",
  },
  {
    Location: "41.9147703039,-98.5281860324",
    CountyGeoId: 31183,
    NAME: "Wheeler County",
  },
  {
    Location: "39.3509686024,-101.055531285",
    CountyGeoId: 20193,
    NAME: "Thomas County",
  },
  {
    Location: "30.4160496685,-89.081642685",
    CountyGeoId: 28047,
    NAME: "Harrison County",
  },
  {
    Location: "38.619423178,-78.4843979826",
    CountyGeoId: 51139,
    NAME: "Page County",
  },
  {
    Location: "35.0481998087,-81.620428677",
    CountyGeoId: 45021,
    NAME: "Cherokee County",
  },
  {
    Location: "32.7924711254,-81.9635320121",
    CountyGeoId: 13165,
    NAME: "Jenkins County",
  },
  {
    Location: "18.4715322319,-66.5594617226",
    CountyGeoId: 72017,
    NAME: "Barceloneta Municipio",
  },
  {
    Location: "40.657513472,-73.8388030183",
    CountyGeoId: 36081,
    NAME: "Queens County",
  },
  {
    Location: "43.9906739447,-84.3882463136",
    CountyGeoId: 26051,
    NAME: "Gladwin County",
  },
  {
    Location: "37.191593361,-89.3376041231",
    CountyGeoId: 17003,
    NAME: "Alexander County",
  },
  {
    Location: "34.8817246173,-83.4020764834",
    CountyGeoId: 13241,
    NAME: "Rabun County",
  },
  {
    Location: "31.1639914481,-84.7307216738",
    CountyGeoId: 13201,
    NAME: "Miller County",
  },
  {
    Location: "39.3927278538,-87.1157584406",
    CountyGeoId: 18021,
    NAME: "Clay County",
  },
  {
    Location: "38.7024099657,-87.0720684602",
    CountyGeoId: 18027,
    NAME: "Daviess County",
  },
  {
    Location: "31.1988711407,-99.3474783776",
    CountyGeoId: 48307,
    NAME: "McCulloch County",
  },
  {
    Location: "44.0688768938,-88.6446587541",
    CountyGeoId: 55139,
    NAME: "Winnebago County",
  },
  {
    Location: "38.3987832635,-87.2321643219",
    CountyGeoId: 18125,
    NAME: "Pike County",
  },
  {
    Location: "40.7880635936,-89.7599800409",
    CountyGeoId: 17143,
    NAME: "Peoria County",
  },
  {
    Location: "41.0220807271,-84.131731929",
    CountyGeoId: 39137,
    NAME: "Putnam County",
  },
  {
    Location: "48.7050337785,-112.994708925",
    CountyGeoId: 30035,
    NAME: "Glacier County",
  },
  {
    Location: "32.74369415,-101.431748795",
    CountyGeoId: 48033,
    NAME: "Borden County",
  },
  {
    Location: "47.1152751471,-101.340308333",
    CountyGeoId: 38065,
    NAME: "Oliver County",
  },
  {
    Location: "18.2510736121,-66.1273464876",
    CountyGeoId: 72007,
    NAME: "Aguas Buenas Municipio",
  },
  {
    Location: "19.6023968175,-155.522885864",
    CountyGeoId: 15001,
    NAME: "Hawaii County",
  },
  {
    Location: "38.7697358036,-82.0265380466",
    CountyGeoId: 54053,
    NAME: "Mason County",
  },
  {
    Location: "38.0874838474,-99.897935995",
    CountyGeoId: 20083,
    NAME: "Hodgeman County",
  },
  {
    Location: "40.1616556187,-85.7193451682",
    CountyGeoId: 18095,
    NAME: "Madison County",
  },
  {
    Location: "35.4968698745,-89.7592441298",
    CountyGeoId: 47167,
    NAME: "Tipton County",
  },
  {
    Location: "40.0046824769,-120.838597596",
    CountyGeoId: "06063",
    NAME: "Plumas County",
  },
  {
    Location: "32.8064982238,-83.6974200138",
    CountyGeoId: 13021,
    NAME: "Bibb County",
  },
  {
    Location: "38.4326851414,-102.740340455",
    CountyGeoId: "08061",
    NAME: "Kiowa County",
  },
  {
    Location: "41.3617078714,-83.6229779272",
    CountyGeoId: 39173,
    NAME: "Wood County",
  },
  {
    Location: "48.3653542741,-106.667442369",
    CountyGeoId: 30105,
    NAME: "Valley County",
  },
  {
    Location: "35.8384916737,-100.813444084",
    CountyGeoId: 48393,
    NAME: "Roberts County",
  },
  {
    Location: "33.5894557062,-91.720023319",
    CountyGeoId: "05043",
    NAME: "Drew County",
  },
  {
    Location: "38.2948490453,-93.2879464988",
    CountyGeoId: 29015,
    NAME: "Benton County",
  },
  {
    Location: "35.6081436966,-88.8384708522",
    CountyGeoId: 47113,
    NAME: "Madison County",
  },
  {
    Location: "40.7456599313,-84.9366547189",
    CountyGeoId: 18001,
    NAME: "Adams County",
  },
  {
    Location: "44.0234449525,-98.0913750444",
    CountyGeoId: 46111,
    NAME: "Sanborn County",
  },
  {
    Location: "45.034066286,-92.4527825664",
    CountyGeoId: 55109,
    NAME: "St. Croix County",
  },
  {
    Location: "46.6588181292,-68.5988785527",
    CountyGeoId: 23003,
    NAME: "Aroostook County",
  },
  {
    Location: "36.3649169333,-78.4079288849",
    CountyGeoId: 37181,
    NAME: "Vance County",
  },
  {
    Location: "45.475142699,-91.1331318556",
    CountyGeoId: 55107,
    NAME: "Rusk County",
  },
  {
    Location: "37.7851065199,-89.3820759403",
    CountyGeoId: 17077,
    NAME: "Jackson County",
  },
  {
    Location: "37.8466393565,-82.8315397747",
    CountyGeoId: 21115,
    NAME: "Johnson County",
  },
  {
    Location: "45.1326999641,-112.898820016",
    CountyGeoId: 30001,
    NAME: "Beaverhead County",
  },
  {
    Location: "41.916402826,-96.787400407",
    CountyGeoId: 31039,
    NAME: "Cuming County",
  },
  {
    Location: "37.1742907521,-80.3872154427",
    CountyGeoId: 51121,
    NAME: "Montgomery County",
  },
  {
    Location: "39.6214732187,-78.6975385506",
    CountyGeoId: 24001,
    NAME: "Allegany County",
  },
  {
    Location: "46.5982240782,-110.885661385",
    CountyGeoId: 30059,
    NAME: "Meagher County",
  },
  {
    Location: "35.4855950234,-81.2235326264",
    CountyGeoId: 37109,
    NAME: "Lincoln County",
  },
  {
    Location: "35.8427065264,-86.4167378958",
    CountyGeoId: 47149,
    NAME: "Rutherford County",
  },
  {
    Location: "32.3270730707,-98.8323222504",
    CountyGeoId: 48133,
    NAME: "Eastland County",
  },
  {
    Location: "38.0229965906,-81.7112126287",
    CountyGeoId: 54005,
    NAME: "Boone County",
  },
  {
    Location: "44.0225894661,-92.8620540343",
    CountyGeoId: 27039,
    NAME: "Dodge County",
  },
  {
    Location: "40.3886187334,-86.8940974128",
    CountyGeoId: 18157,
    NAME: "Tippecanoe County",
  },
  {
    Location: "39.2171057452,-106.916577749",
    CountyGeoId: "08097",
    NAME: "Pitkin County",
  },
  {
    Location: "41.5490215572,-86.7423662187",
    CountyGeoId: 18091,
    NAME: "LaPorte County",
  },
  {
    Location: "34.5031701949,-84.8759139254",
    CountyGeoId: 13129,
    NAME: "Gordon County",
  },
  {
    Location: "31.752584831,-81.7457669756",
    CountyGeoId: 13183,
    NAME: "Long County",
  },
  {
    Location: "41.9144142466,-85.5277446789",
    CountyGeoId: 26149,
    NAME: "St. Joseph County",
  },
  {
    Location: "65.5086521548,-151.389616025",
    CountyGeoId: "02290",
    NAME: "Yukon-Koyukuk Census Area",
  },
  {
    Location: "17.9729540131,-66.261975661",
    CountyGeoId: 72123,
    NAME: "Salinas Municipio",
  },
  {
    Location: "38.6469784457,-94.3548163135",
    CountyGeoId: 29037,
    NAME: "Cass County",
  },
  {
    Location: "40.5067072585,-98.9480216382",
    CountyGeoId: 31099,
    NAME: "Kearney County",
  },
  {
    Location: "42.6001764292,-73.973558571",
    CountyGeoId: 36001,
    NAME: "Albany County",
  },
  {
    Location: "61.1482627033,-149.188568553",
    CountyGeoId: "02020",
    NAME: "Anchorage Municipality",
  },
  {
    Location: "41.5210180281,-113.082022662",
    CountyGeoId: 49003,
    NAME: "Box Elder County",
  },
  {
    Location: "39.3438351886,-91.1713632054",
    CountyGeoId: 29163,
    NAME: "Pike County",
  },
  {
    Location: "33.0406559359,-84.6883115804",
    CountyGeoId: 13199,
    NAME: "Meriwether County",
  },
  {
    Location: "35.2172743542,-87.3955844374",
    CountyGeoId: 47099,
    NAME: "Lawrence County",
  },
  {
    Location: "30.7687104974,-89.5897506359",
    CountyGeoId: 28109,
    NAME: "Pearl River County",
  },
  {
    Location: "33.7955389816,-90.8804009104",
    CountyGeoId: 28011,
    NAME: "Bolivar County",
  },
  {
    Location: "46.7007124229,-90.5645053525",
    CountyGeoId: 55003,
    NAME: "Ashland County",
  },
  {
    Location: "58.4439351761,-134.230339191",
    CountyGeoId: "02110",
    NAME: "Juneau City and Borough",
  },
  {
    Location: "42.080174751,-92.0657317334",
    CountyGeoId: 19011,
    NAME: "Benton County",
  },
  {
    Location: "48.3581259624,-96.3684743899",
    CountyGeoId: 27089,
    NAME: "Marshall County",
  },
  {
    Location: "38.8837685125,-94.8222610425",
    CountyGeoId: 20091,
    NAME: "Johnson County",
  },
  {
    Location: "46.9801017563,-99.7800913745",
    CountyGeoId: 38043,
    NAME: "Kidder County",
  },
  {
    Location: "27.9026762041,-82.7395539464",
    CountyGeoId: 12103,
    NAME: "Pinellas County",
  },
  {
    Location: "39.7858693359,-101.731104218",
    CountyGeoId: 20023,
    NAME: "Cheyenne County",
  },
  {
    Location: "36.5129154065,-82.3041428598",
    CountyGeoId: 47163,
    NAME: "Sullivan County",
  },
  {
    Location: "35.4868150519,-83.4927393736",
    CountyGeoId: 37173,
    NAME: "Swain County",
  },
  {
    Location: "47.4561506138,-97.7245908845",
    CountyGeoId: 38091,
    NAME: "Steele County",
  },
  {
    Location: "34.5301133129,-102.784538195",
    CountyGeoId: 48369,
    NAME: "Parmer County",
  },
  {
    Location: "42.3706766098,-73.2064122879",
    CountyGeoId: 25003,
    NAME: "Berkshire County",
  },
  {
    Location: "39.4722125305,-77.3979843347",
    CountyGeoId: 24021,
    NAME: "Frederick County",
  },
  {
    Location: "35.3106538555,-79.4813744392",
    CountyGeoId: 37125,
    NAME: "Moore County",
  },
  {
    Location: "31.1888694049,-89.2578597971",
    CountyGeoId: 28035,
    NAME: "Forrest County",
  },
  {
    Location: "35.2068682628,-88.9930848744",
    CountyGeoId: 47069,
    NAME: "Hardeman County",
  },
  {
    Location: "36.3040698262,-78.6527194252",
    CountyGeoId: 37077,
    NAME: "Granville County",
  },
  {
    Location: "32.4344414462,-83.3278388255",
    CountyGeoId: 13023,
    NAME: "Bleckley County",
  },
  {
    Location: "42.9311219743,-82.6643677239",
    CountyGeoId: 26147,
    NAME: "St. Clair County",
  },
  {
    Location: "34.7794159964,-85.9993005443",
    CountyGeoId: "01071",
    NAME: "Jackson County",
  },
  {
    Location: "42.6029174357,-83.9115277453",
    CountyGeoId: 26093,
    NAME: "Livingston County",
  },
  {
    Location: "46.4570264297,-120.738490426",
    CountyGeoId: 53077,
    NAME: "Yakima County",
  },
  {
    Location: "43.6446171312,-86.5817719968",
    CountyGeoId: 26127,
    NAME: "Oceana County",
  },
  {
    Location: "38.5635832261,-94.838056975",
    CountyGeoId: 20121,
    NAME: "Miami County",
  },
  {
    Location: "30.6143960313,-87.3413643298",
    CountyGeoId: 12033,
    NAME: "Escambia County",
  },
  {
    Location: "34.5303849906,-101.735026846",
    CountyGeoId: 48437,
    NAME: "Swisher County",
  },
  {
    Location: "35.9199743544,-93.2178669264",
    CountyGeoId: "05101",
    NAME: "Newton County",
  },
  {
    Location: "31.6767316888,-92.1604365033",
    CountyGeoId: 22059,
    NAME: "LaSalle Parish",
  },
  {
    Location: "64.8077661564,-146.565422856",
    CountyGeoId: "02090",
    NAME: "Fairbanks North Star Borough",
  },
  {
    Location: "37.7958423573,-87.5731516422",
    CountyGeoId: 21101,
    NAME: "Henderson County",
  },
  {
    Location: "18.2683832042,-65.5592543864",
    CountyGeoId: 72037,
    NAME: "Ceiba Municipio",
  },
  {
    Location: "44.4144805031,-98.2781096129",
    CountyGeoId: 46005,
    NAME: "Beadle County",
  },
  {
    Location: "38.1554971802,-107.76931682",
    CountyGeoId: "08091",
    NAME: "Ouray County",
  },
  {
    Location: "29.6208209311,-96.5262753522",
    CountyGeoId: 48089,
    NAME: "Colorado County",
  },
  {
    Location: "35.5884840734,-94.2429568096",
    CountyGeoId: "05033",
    NAME: "Crawford County",
  },
  {
    Location: "17.9979419359,-65.895344489",
    CountyGeoId: 72095,
    NAME: "Maunabo Municipio",
  },
  {
    Location: "44.9778528358,-97.1886184207",
    CountyGeoId: 46029,
    NAME: "Codington County",
  },
  {
    Location: "35.1469781265,-92.332041157",
    CountyGeoId: "05045",
    NAME: "Faulkner County",
  },
  {
    Location: "33.7436800499,-115.993845895",
    CountyGeoId: "06065",
    NAME: "Riverside County",
  },
  {
    Location: "33.9161721803,-80.382316033",
    CountyGeoId: 45085,
    NAME: "Sumter County",
  },
  {
    Location: "43.3564123717,-92.7890314515",
    CountyGeoId: 19131,
    NAME: "Mitchell County",
  },
  {
    Location: "40.1315428804,-96.2370551712",
    CountyGeoId: 31133,
    NAME: "Pawnee County",
  },
  {
    Location: "36.0794717315,-79.7889042685",
    CountyGeoId: 37081,
    NAME: "Guilford County",
  },
  {
    Location: "36.2183807861,-99.754618136",
    CountyGeoId: 40045,
    NAME: "Ellis County",
  },
  {
    Location: "42.9022816291,-74.4396826879",
    CountyGeoId: 36057,
    NAME: "Montgomery County",
  },
  {
    Location: "45.6296435561,-96.9461134069",
    CountyGeoId: 46109,
    NAME: "Roberts County",
  },
  {
    Location: "34.416170665,-95.3758623589",
    CountyGeoId: 40127,
    NAME: "Pushmataha County",
  },
  {
    Location: "41.8077476122,-78.5690251336",
    CountyGeoId: 42083,
    NAME: "McKean County",
  },
  {
    Location: "40.5075329902,-89.5134035348",
    CountyGeoId: 17179,
    NAME: "Tazewell County",
  },
  {
    Location: "39.2691704778,-80.70696595",
    CountyGeoId: 54017,
    NAME: "Doddridge County",
  },
  {
    Location: "31.5640129586,-93.5546968685",
    CountyGeoId: 22085,
    NAME: "Sabine Parish",
  },
  {
    Location: "39.4149780091,-83.808378857",
    CountyGeoId: 39027,
    NAME: "Clinton County",
  },
  {
    Location: "41.9169237189,-97.1939149855",
    CountyGeoId: 31167,
    NAME: "Stanton County",
  },
  {
    Location: "34.5307791419,-100.681128599",
    CountyGeoId: 48191,
    NAME: "Hall County",
  },
  {
    Location: "39.4469307309,-119.529362193",
    CountyGeoId: 32029,
    NAME: "Storey County",
  },
  {
    Location: "30.9655385978,-95.928410107",
    CountyGeoId: 48313,
    NAME: "Madison County",
  },
  {
    Location: "38.5315416285,-83.3780560683",
    CountyGeoId: 21135,
    NAME: "Lewis County",
  },
  {
    Location: "32.9732247426,-94.9784769569",
    CountyGeoId: 48063,
    NAME: "Camp County",
  },
  {
    Location: "34.1110028943,-97.8357913307",
    CountyGeoId: 40067,
    NAME: "Jefferson County",
  },
  {
    Location: "41.4450504457,-87.9786458597",
    CountyGeoId: 17197,
    NAME: "Will County",
  },
  {
    Location: "34.2291655931,-90.602687016",
    CountyGeoId: 28027,
    NAME: "Coahoma County",
  },
  {
    Location: "46.4641098796,-91.8994024936",
    CountyGeoId: 55031,
    NAME: "Douglas County",
  },
  {
    Location: "35.7040584995,-113.757910618",
    CountyGeoId: "04015",
    NAME: "Mohave County",
  },
  {
    Location: "18.4336934204,-66.674969152",
    CountyGeoId: 72013,
    NAME: "Arecibo Municipio",
  },
  {
    Location: "36.931457433,-82.6262026867",
    CountyGeoId: 51720,
    NAME: "Norton city",
  },
  {
    Location: "35.5128264241,-84.8133871962",
    CountyGeoId: 47121,
    NAME: "Meigs County",
  },
  {
    Location: "39.8575436237,-105.522621196",
    CountyGeoId: "08047",
    NAME: "Gilpin County",
  },
  {
    Location: "33.2052512262,-97.1170055183",
    CountyGeoId: 48121,
    NAME: "Denton County",
  },
  {
    Location: "32.6789310276,-93.6050459212",
    CountyGeoId: 22015,
    NAME: "Bossier Parish",
  },
  {
    Location: "39.1955341757,-84.5427676729",
    CountyGeoId: 39061,
    NAME: "Hamilton County",
  },
  {
    Location: "43.2393780072,-103.527540829",
    CountyGeoId: 46047,
    NAME: "Fall River County",
  },
  {
    Location: "26.5621530438,-98.7383995925",
    CountyGeoId: 48427,
    NAME: "Starr County",
  },
  {
    Location: "36.941272036,-90.9623104086",
    CountyGeoId: 29035,
    NAME: "Carter County",
  },
  {
    Location: "30.8219752667,-90.7103202756",
    CountyGeoId: 22091,
    NAME: "St. Helena Parish",
  },
  {
    Location: "47.2663787156,-104.89951088",
    CountyGeoId: 30021,
    NAME: "Dawson County",
  },
  {
    Location: "39.1451918976,-84.973258532",
    CountyGeoId: 18029,
    NAME: "Dearborn County",
  },
  {
    Location: "39.9607450135,-93.9854672168",
    CountyGeoId: 29061,
    NAME: "Daviess County",
  },
  {
    Location: "30.9387779365,-84.8688701106",
    CountyGeoId: 13253,
    NAME: "Seminole County",
  },
  {
    Location: "42.7764677574,-94.2071830507",
    CountyGeoId: 19091,
    NAME: "Humboldt County",
  },
  {
    Location: "40.468833662,-79.9811946065",
    CountyGeoId: 42003,
    NAME: "Allegheny County",
  },
  {
    Location: "39.6662617907,-86.8449997676",
    CountyGeoId: 18133,
    NAME: "Putnam County",
  },
  {
    Location: "36.1265615389,-76.6021303656",
    CountyGeoId: 37041,
    NAME: "Chowan County",
  },
  {
    Location: "33.4664224376,-92.1624016443",
    CountyGeoId: "05011",
    NAME: "Bradley County",
  },
  {
    Location: "35.843213981,-77.109232267",
    CountyGeoId: 37117,
    NAME: "Martin County",
  },
  {
    Location: "39.1993345198,-95.0379114409",
    CountyGeoId: 20103,
    NAME: "Leavenworth County",
  },
  {
    Location: "31.1961909998,-98.2414446434",
    CountyGeoId: 48281,
    NAME: "Lampasas County",
  },
  {
    Location: "39.5604331495,-78.2577317099",
    CountyGeoId: 54065,
    NAME: "Morgan County",
  },
  {
    Location: "30.0686436991,-89.928127921",
    CountyGeoId: 22071,
    NAME: "Orleans Parish",
  },
  {
    Location: "32.9986442965,-87.1264391014",
    CountyGeoId: "01007",
    NAME: "Bibb County",
  },
  {
    Location: "40.9629715402,-77.0622692252",
    CountyGeoId: 42119,
    NAME: "Union County",
  },
  {
    Location: "37.1453332323,-87.8679057735",
    CountyGeoId: 21033,
    NAME: "Caldwell County",
  },
  {
    Location: "33.4128251839,-79.2991976958",
    CountyGeoId: 45043,
    NAME: "Georgetown County",
  },
  {
    Location: "40.4487493593,-113.131090626",
    CountyGeoId: 49045,
    NAME: "Tooele County",
  },
  {
    Location: "44.3798321501,-91.7544696581",
    CountyGeoId: 55011,
    NAME: "Buffalo County",
  },
  {
    Location: "39.5984047698,-122.392206808",
    CountyGeoId: "06021",
    NAME: "Glenn County",
  },
  {
    Location: "43.2842837871,-91.3780922862",
    CountyGeoId: 19005,
    NAME: "Allamakee County",
  },
  {
    Location: "30.7057400268,-98.6840973495",
    CountyGeoId: 48299,
    NAME: "Llano County",
  },
  {
    Location: "40.31072723,-79.4669607014",
    CountyGeoId: 42129,
    NAME: "Westmoreland County",
  },
  {
    Location: "34.4858849277,-94.2280604373",
    CountyGeoId: "05113",
    NAME: "Polk County",
  },
  {
    Location: "40.4908916187,-88.847324278",
    CountyGeoId: 17113,
    NAME: "McLean County",
  },
  {
    Location: "44.3191504404,-90.8051677338",
    CountyGeoId: 55053,
    NAME: "Jackson County",
  },
  {
    Location: "40.9558477436,-87.3975365943",
    CountyGeoId: 18111,
    NAME: "Newton County",
  },
  {
    Location: "46.0424798151,-86.1772944904",
    CountyGeoId: 26153,
    NAME: "Schoolcraft County",
  },
  {
    Location: "18.1341807268,-67.1140222956",
    CountyGeoId: 72067,
    NAME: "Hormigueros Municipio",
  },
  {
    Location: "41.4041459264,-89.5286557577",
    CountyGeoId: 17011,
    NAME: "Bureau County",
  },
  {
    Location: "36.3410829938,-93.5381811083",
    CountyGeoId: "05015",
    NAME: "Carroll County",
  },
  {
    Location: "41.8980358084,-90.5319724291",
    CountyGeoId: 19045,
    NAME: "Clinton County",
  },
  {
    Location: "42.393798295,-76.8751761312",
    CountyGeoId: 36097,
    NAME: "Schuyler County",
  },
  {
    Location: "38.6847722239,-78.1592301973",
    CountyGeoId: 51157,
    NAME: "Rappahannock County",
  },
  {
    Location: "42.9436523662,-84.6015165533",
    CountyGeoId: 26037,
    NAME: "Clinton County",
  },
  {
    Location: "18.336311374,-65.9991239839",
    CountyGeoId: 72139,
    NAME: "Trujillo Alto Municipio",
  },
  {
    Location: "38.9906151273,-92.3096802497",
    CountyGeoId: 29019,
    NAME: "Boone County",
  },
  {
    Location: "39.5864284092,-105.250466793",
    CountyGeoId: "08059",
    NAME: "Jefferson County",
  },
  {
    Location: "36.2784137139,-100.815653969",
    CountyGeoId: 48357,
    NAME: "Ochiltree County",
  },
  {
    Location: "40.3546685834,-93.9920637276",
    CountyGeoId: 29081,
    NAME: "Harrison County",
  },
  {
    Location: "42.5785041032,-87.6531182363",
    CountyGeoId: 55059,
    NAME: "Kenosha County",
  },
  {
    Location: "36.4019040049,-80.2395157151",
    CountyGeoId: 37169,
    NAME: "Stokes County",
  },
  {
    Location: "41.3307464286,-94.4709413442",
    CountyGeoId: 19001,
    NAME: "Adair County",
  },
  {
    Location: "39.9654218536,-81.9443826591",
    CountyGeoId: 39119,
    NAME: "Muskingum County",
  },
  {
    Location: "36.341483312,-91.0277165202",
    CountyGeoId: "05121",
    NAME: "Randolph County",
  },
  {
    Location: "55.7271705274,-133.193025891",
    CountyGeoId: "02198",
    NAME: "Prince of Wales-Hyder Census Area",
  },
  {
    Location: "38.5054099582,-92.2816072464",
    CountyGeoId: 29051,
    NAME: "Cole County",
  },
  {
    Location: "39.5317400033,-95.3134446486",
    CountyGeoId: 20005,
    NAME: "Atchison County",
  },
  {
    Location: "44.5886036159,-104.569929444",
    CountyGeoId: 56011,
    NAME: "Crook County",
  },
  {
    Location: "36.2932966258,-82.4974202594",
    CountyGeoId: 47179,
    NAME: "Washington County",
  },
  {
    Location: "40.7321421632,-73.585536665",
    CountyGeoId: 36059,
    NAME: "Nassau County",
  },
  {
    Location: "46.6354343394,-91.1806847226",
    CountyGeoId: 55007,
    NAME: "Bayfield County",
  },
  {
    Location: "38.9147788411,-98.7623510222",
    CountyGeoId: 20167,
    NAME: "Russell County",
  },
  {
    Location: "45.9024044497,-112.656713468",
    CountyGeoId: 30093,
    NAME: "Silver Bow County",
  },
  {
    Location: "44.6846764139,-85.0902500996",
    CountyGeoId: 26079,
    NAME: "Kalkaska County",
  },
  {
    Location: "31.8796370864,-109.751263137",
    CountyGeoId: "04003",
    NAME: "Cochise County",
  },
  {
    Location: "45.4566725027,-123.758664685",
    CountyGeoId: 41057,
    NAME: "Tillamook County",
  },
  {
    Location: "37.322190727,-90.0259472067",
    CountyGeoId: 29017,
    NAME: "Bollinger County",
  },
  {
    Location: "44.0220442699,-97.129376351",
    CountyGeoId: 46079,
    NAME: "Lake County",
  },
  {
    Location: "36.3932742158,-79.3335234769",
    CountyGeoId: 37033,
    NAME: "Caswell County",
  },
  {
    Location: "18.3496368773,-66.1683365642",
    CountyGeoId: 72021,
    NAME: "Bayamón Municipio",
  },
  {
    Location: "38.4625319965,-81.075087468",
    CountyGeoId: 54015,
    NAME: "Clay County",
  },
  {
    Location: "27.0816164392,-80.3984639525",
    CountyGeoId: 12085,
    NAME: "Martin County",
  },
  {
    Location: "36.8212977305,-79.3971193907",
    CountyGeoId: 51143,
    NAME: "Pittsylvania County",
  },
  {
    Location: "41.5680844607,-101.060530422",
    CountyGeoId: 31117,
    NAME: "McPherson County",
  },
  {
    Location: "38.5972506332,-119.82065303",
    CountyGeoId: "06003",
    NAME: "Alpine County",
  },
  {
    Location: "39.7415270637,-84.6480146659",
    CountyGeoId: 39135,
    NAME: "Preble County",
  },
  {
    Location: "40.7309049975,-74.0759554422",
    CountyGeoId: 34017,
    NAME: "Hudson County",
  },
  {
    Location: "41.8877674933,-84.5929278019",
    CountyGeoId: 26059,
    NAME: "Hillsdale County",
  },
  {
    Location: "18.2149040847,-66.4339884969",
    CountyGeoId: 72107,
    NAME: "Orocovis Municipio",
  },
  {
    Location: "48.5323201664,-117.274001478",
    CountyGeoId: 53051,
    NAME: "Pend Oreille County",
  },
  {
    Location: "42.9622404458,-106.798493803",
    CountyGeoId: 56025,
    NAME: "Natrona County",
  },
  {
    Location: "34.5539435236,-83.2934335296",
    CountyGeoId: 13257,
    NAME: "Stephens County",
  },
  {
    Location: "18.0007459428,-65.9888491633",
    CountyGeoId: 72109,
    NAME: "Patillas Municipio",
  },
  {
    Location: "36.1107306366,-82.432342828",
    CountyGeoId: 47171,
    NAME: "Unicoi County",
  },
  {
    Location: "39.3911561848,-88.8055049879",
    CountyGeoId: 17173,
    NAME: "Shelby County",
  },
  {
    Location: "39.7371483117,-82.2361379221",
    CountyGeoId: 39127,
    NAME: "Perry County",
  },
  {
    Location: "46.5857615606,-94.9694078336",
    CountyGeoId: 27159,
    NAME: "Wadena County",
  },
  {
    Location: "37.2914862292,-77.2984913408",
    CountyGeoId: 51670,
    NAME: "Hopewell city",
  },
  {
    Location: "39.8659324961,-74.2499159319",
    CountyGeoId: 34029,
    NAME: "Ocean County",
  },
  {
    Location: "35.3686291614,-78.8694125204",
    CountyGeoId: 37085,
    NAME: "Harnett County",
  },
  {
    Location: "29.6086348479,-81.7443041288",
    CountyGeoId: 12107,
    NAME: "Putnam County",
  },
  {
    Location: "34.1167932846,-82.8400954979",
    CountyGeoId: 13105,
    NAME: "Elbert County",
  },
  {
    Location: "34.6145873342,-78.5636493115",
    CountyGeoId: 37017,
    NAME: "Bladen County",
  },
  {
    Location: "35.1338574515,-84.063444228",
    CountyGeoId: 37039,
    NAME: "Cherokee County",
  },
  {
    Location: "37.7825305611,-79.4438937578",
    CountyGeoId: 51678,
    NAME: "Lexington city",
  },
  {
    Location: "42.4712208979,-91.367341411",
    CountyGeoId: 19055,
    NAME: "Delaware County",
  },
  {
    Location: "35.9193387894,-97.4433173291",
    CountyGeoId: 40083,
    NAME: "Logan County",
  },
  {
    Location: "43.2417469044,-75.4358401731",
    CountyGeoId: 36065,
    NAME: "Oneida County",
  },
  {
    Location: "38.9173365456,-101.148391114",
    CountyGeoId: 20109,
    NAME: "Logan County",
  },
  {
    Location: "34.8633405971,-104.790631134",
    CountyGeoId: 35019,
    NAME: "Guadalupe County",
  },
  {
    Location: "40.1905621824,-92.6007190462",
    CountyGeoId: 29001,
    NAME: "Adair County",
  },
  {
    Location: "37.4197763873,-84.0057660473",
    CountyGeoId: 21109,
    NAME: "Jackson County",
  },
  {
    Location: "30.5382395947,-91.0956166217",
    CountyGeoId: 22033,
    NAME: "East Baton Rouge Parish",
  },
  {
    Location: "37.2701399985,-92.4687042487",
    CountyGeoId: 29229,
    NAME: "Wright County",
  },
  {
    Location: "37.29992674,-85.8847094016",
    CountyGeoId: 21099,
    NAME: "Hart County",
  },
  {
    Location: "31.7626226688,-84.7541920738",
    CountyGeoId: 13243,
    NAME: "Randolph County",
  },
  {
    Location: "36.1548497851,-86.2977463556",
    CountyGeoId: 47189,
    NAME: "Wilson County",
  },
  {
    Location: "35.912880671,-77.5970588882",
    CountyGeoId: 37065,
    NAME: "Edgecombe County",
  },
  {
    Location: "30.4628875802,-88.6228415765",
    CountyGeoId: 28059,
    NAME: "Jackson County",
  },
  {
    Location: "43.8195818941,-89.398748852",
    CountyGeoId: 55077,
    NAME: "Marquette County",
  },
  {
    Location: "33.8806479609,-83.0807032108",
    CountyGeoId: 13221,
    NAME: "Oglethorpe County",
  },
  {
    Location: "45.4052565917,-120.689371728",
    CountyGeoId: 41055,
    NAME: "Sherman County",
  },
  {
    Location: "34.5216520166,-87.311044513",
    CountyGeoId: "01079",
    NAME: "Lawrence County",
  },
  {
    Location: "35.9876527999,-99.0079245072",
    CountyGeoId: 40043,
    NAME: "Dewey County",
  },
  {
    Location: "43.37802248,-94.6784802642",
    CountyGeoId: 19063,
    NAME: "Emmet County",
  },
  {
    Location: "38.8355168847,-91.92602044",
    CountyGeoId: 29027,
    NAME: "Callaway County",
  },
  {
    Location: "37.8144890524,-79.4472820902",
    CountyGeoId: 51163,
    NAME: "Rockbridge County",
  },
  {
    Location: "40.1247748425,-109.51864842",
    CountyGeoId: 49047,
    NAME: "Uintah County",
  },
  {
    Location: "40.8571485251,-74.9973498515",
    CountyGeoId: 34041,
    NAME: "Warren County",
  },
  {
    Location: "33.9622404194,-96.2597620936",
    CountyGeoId: 40013,
    NAME: "Bryan County",
  },
  {
    Location: "30.722983086,-101.412147662",
    CountyGeoId: 48105,
    NAME: "Crockett County",
  },
  {
    Location: "31.404399317,-100.462072838",
    CountyGeoId: 48451,
    NAME: "Tom Green County",
  },
  {
    Location: "33.172974606,-102.827796072",
    CountyGeoId: 48501,
    NAME: "Yoakum County",
  },
  {
    Location: "45.2326671224,-123.308162692",
    CountyGeoId: 41071,
    NAME: "Yamhill County",
  },
  {
    Location: "40.1250638959,-95.7175305402",
    CountyGeoId: 31147,
    NAME: "Richardson County",
  },
  {
    Location: "31.326183927,-84.4446694741",
    CountyGeoId: 13007,
    NAME: "Baker County",
  },
  {
    Location: "39.0822408645,-82.0229005014",
    CountyGeoId: 39105,
    NAME: "Meigs County",
  },
  {
    Location: "35.0513554263,-106.670199593",
    CountyGeoId: 35001,
    NAME: "Bernalillo County",
  },
  {
    Location: "38.2391477444,-84.8770681668",
    CountyGeoId: 21073,
    NAME: "Franklin County",
  },
  {
    Location: "38.8821720468,-105.161826391",
    CountyGeoId: "08119",
    NAME: "Teller County",
  },
  {
    Location: "39.0959545402,-75.5046137018",
    CountyGeoId: 10001,
    NAME: "Kent County",
  },
  {
    Location: "39.0182904955,-108.466440182",
    CountyGeoId: "08077",
    NAME: "Mesa County",
  },
  {
    Location: "48.7209967429,-104.504654201",
    CountyGeoId: 30091,
    NAME: "Sheridan County",
  },
  {
    Location: "32.458996427,-83.6662408919",
    CountyGeoId: 13153,
    NAME: "Houston County",
  },
  {
    Location: "43.345873009,-99.8839942406",
    CountyGeoId: 46123,
    NAME: "Tripp County",
  },
  {
    Location: "30.7863091928,-93.7447410133",
    CountyGeoId: 48351,
    NAME: "Newton County",
  },
  {
    Location: "27.0007781554,-99.1686127905",
    CountyGeoId: 48505,
    NAME: "Zapata County",
  },
  {
    Location: "38.3595724655,-82.6877258112",
    CountyGeoId: 21019,
    NAME: "Boyd County",
  },
  {
    Location: "45.5600908408,-123.098321728",
    CountyGeoId: 41067,
    NAME: "Washington County",
  },
  {
    Location: "41.001938375,-83.6665354077",
    CountyGeoId: 39063,
    NAME: "Hancock County",
  },
  {
    Location: "28.4391092686,-96.6150736733",
    CountyGeoId: 48057,
    NAME: "Calhoun County",
  },
  {
    Location: "39.8277963216,-97.6506227728",
    CountyGeoId: 20157,
    NAME: "Republic County",
  },
  {
    Location: "39.0855054887,-90.3565282985",
    CountyGeoId: 17083,
    NAME: "Jersey County",
  },
  {
    Location: "28.5144162588,-81.3234735281",
    CountyGeoId: 12095,
    NAME: "Orange County",
  },
  {
    Location: "37.6477353374,-98.7395957092",
    CountyGeoId: 20151,
    NAME: "Pratt County",
  },
  {
    Location: "31.1539910285,-83.4304650673",
    CountyGeoId: 13075,
    NAME: "Cook County",
  },
  {
    Location: "44.7600579518,-96.6679741404",
    CountyGeoId: 46039,
    NAME: "Deuel County",
  },
  {
    Location: "34.0061055385,-81.7269282584",
    CountyGeoId: 45081,
    NAME: "Saluda County",
  },
  {
    Location: "37.6227077717,-76.5059133431",
    CountyGeoId: 51119,
    NAME: "Middlesex County",
  },
  {
    Location: "41.4722121302,-87.3763856",
    CountyGeoId: 18089,
    NAME: "Lake County",
  },
  {
    Location: "47.9219151859,-97.4569239404",
    CountyGeoId: 38035,
    NAME: "Grand Forks County",
  },
  {
    Location: "32.7360040875,-84.9089881157",
    CountyGeoId: 13145,
    NAME: "Harris County",
  },
  {
    Location: "37.2666155974,-82.0360146573",
    CountyGeoId: 51027,
    NAME: "Buchanan County",
  },
  {
    Location: "39.2059705721,-85.8976029732",
    CountyGeoId: 18005,
    NAME: "Bartholomew County",
  },
  {
    Location: "41.7651474406,-73.7428630516",
    CountyGeoId: 36027,
    NAME: "Dutchess County",
  },
  {
    Location: "33.1973239343,-79.952159639",
    CountyGeoId: 45015,
    NAME: "Berkeley County",
  },
  {
    Location: "41.590577647,-88.4287883539",
    CountyGeoId: 17093,
    NAME: "Kendall County",
  },
  {
    Location: "37.7597150131,-122.693975573",
    CountyGeoId: "06075",
    NAME: "San Francisco County",
  },
  {
    Location: "41.8954290221,-87.6461407931",
    CountyGeoId: 17031,
    NAME: "Cook County",
  },
  {
    Location: "43.3538854014,-115.469262353",
    CountyGeoId: 16039,
    NAME: "Elmore County",
  },
  {
    Location: "40.0520536496,-81.4942562194",
    CountyGeoId: 39059,
    NAME: "Guernsey County",
  },
  {
    Location: "38.8847267106,-77.1751638221",
    CountyGeoId: 51610,
    NAME: "Falls Church city",
  },
  {
    Location: "37.9616839121,-90.8774245019",
    CountyGeoId: 29221,
    NAME: "Washington County",
  },
  {
    Location: "57.1140130761,-133.002459292",
    CountyGeoId: "02195",
    NAME: "Petersburg Borough",
  },
  {
    Location: "34.8100783219,-86.9813747654",
    CountyGeoId: "01083",
    NAME: "Limestone County",
  },
  {
    Location: "44.6817581821,-84.1297714192",
    CountyGeoId: 26135,
    NAME: "Oscoda County",
  },
  {
    Location: "44.491500684,-119.007354057",
    CountyGeoId: 41023,
    NAME: "Grant County",
  },
  {
    Location: "39.9835107818,-94.8020598986",
    CountyGeoId: 29003,
    NAME: "Andrew County",
  },
  {
    Location: "34.9473737476,-92.9314699116",
    CountyGeoId: "05105",
    NAME: "Perry County",
  },
  {
    Location: "37.1228911509,-80.5587490523",
    CountyGeoId: 51750,
    NAME: "Radford city",
  },
  {
    Location: "35.8307887047,-90.632841255",
    CountyGeoId: "05031",
    NAME: "Craighead County",
  },
  {
    Location: "39.4421951904,-114.901684451",
    CountyGeoId: 32033,
    NAME: "White Pine County",
  },
  {
    Location: "44.4760263134,-89.501400671",
    CountyGeoId: 55097,
    NAME: "Portage County",
  },
  {
    Location: "39.5150814814,-92.9626237174",
    CountyGeoId: 29041,
    NAME: "Chariton County",
  },
  {
    Location: "40.2627443761,-103.809822237",
    CountyGeoId: "08087",
    NAME: "Morgan County",
  },
  {
    Location: "40.4400836596,-74.4088356547",
    CountyGeoId: 34023,
    NAME: "Middlesex County",
  },
  {
    Location: "39.1511464297,-119.747422249",
    CountyGeoId: 32510,
    NAME: "Carson City",
  },
  {
    Location: "36.8180034435,-97.1439380223",
    CountyGeoId: 40071,
    NAME: "Kay County",
  },
  {
    Location: "33.3534616689,-84.7633607428",
    CountyGeoId: 13077,
    NAME: "Coweta County",
  },
  {
    Location: "41.5712867683,-97.5211569987",
    CountyGeoId: 31141,
    NAME: "Platte County",
  },
  {
    Location: "38.4361880571,-78.873479236",
    CountyGeoId: 51660,
    NAME: "Harrisonburg city",
  },
  {
    Location: "39.1329338744,-80.0030288847",
    CountyGeoId: 54001,
    NAME: "Barbour County",
  },
  {
    Location: "38.8846594528,-95.2926063049",
    CountyGeoId: 20045,
    NAME: "Douglas County",
  },
  {
    Location: "33.4529935799,-84.1541806022",
    CountyGeoId: 13151,
    NAME: "Henry County",
  },
  {
    Location: "34.0071879577,-106.930399241",
    CountyGeoId: 35053,
    NAME: "Socorro County",
  },
  {
    Location: "37.1912804013,-99.2718714746",
    CountyGeoId: 20033,
    NAME: "Comanche County",
  },
  {
    Location: "34.9163840445,-98.9809214634",
    CountyGeoId: 40075,
    NAME: "Kiowa County",
  },
  {
    Location: "17.7356133736,-64.747935737",
    CountyGeoId: 78010,
    NAME: "St. Croix Island",
  },
  {
    Location: "37.6689956825,-106.924094646",
    CountyGeoId: "08079",
    NAME: "Mineral County",
  },
  {
    Location: "38.3189286397,-85.9068307178",
    CountyGeoId: 18043,
    NAME: "Floyd County",
  },
  {
    Location: "32.9695357353,-82.7958991685",
    CountyGeoId: 13303,
    NAME: "Washington County",
  },
  {
    Location: "35.3711477472,-85.4105869053",
    CountyGeoId: 47153,
    NAME: "Sequatchie County",
  },
  {
    Location: "31.6159802631,-94.6158732578",
    CountyGeoId: 48347,
    NAME: "Nacogdoches County",
  },
  {
    Location: "48.5487141288,-119.740857456",
    CountyGeoId: 53047,
    NAME: "Okanogan County",
  },
  {
    Location: "34.894336814,-82.3707710973",
    CountyGeoId: 45045,
    NAME: "Greenville County",
  },
  {
    Location: "38.6890898846,-87.4180084675",
    CountyGeoId: 18083,
    NAME: "Knox County",
  },
  {
    Location: "18.3043195475,-66.3278966402",
    CountyGeoId: 72047,
    NAME: "Corozal Municipio",
  },
  {
    Location: "34.9737894417,-80.102712026",
    CountyGeoId: 37007,
    NAME: "Anson County",
  },
  {
    Location: "59.0758951471,-135.470092205",
    CountyGeoId: "02100",
    NAME: "Haines Borough",
  },
  {
    Location: "37.5571085124,-82.7457041434",
    CountyGeoId: 21071,
    NAME: "Floyd County",
  },
  {
    Location: "46.9496014257,-94.3253505738",
    CountyGeoId: 27021,
    NAME: "Cass County",
  },
  {
    Location: "40.4562312432,-90.6778776624",
    CountyGeoId: 17109,
    NAME: "McDonough County",
  },
  {
    Location: "35.5992402368,-91.2145376687",
    CountyGeoId: "05067",
    NAME: "Jackson County",
  },
  {
    Location: "-14.2674550886,-170.627332642",
    CountyGeoId: 60010,
    NAME: "Eastern District",
  },
  {
    Location: "45.2732429118,-93.2464685787",
    CountyGeoId: 27003,
    NAME: "Anoka County",
  },
  {
    Location: "38.7491001783,-76.1786170603",
    CountyGeoId: 24041,
    NAME: "Talbot County",
  },
  {
    Location: "35.3428473738,-118.729900424",
    CountyGeoId: "06029",
    NAME: "Kern County",
  },
  {
    Location: "41.1457829623,-115.35770071",
    CountyGeoId: 32007,
    NAME: "Elko County",
  },
  {
    Location: "38.6998727176,-80.7192881391",
    CountyGeoId: 54007,
    NAME: "Braxton County",
  },
  {
    Location: "41.1129273435,-96.1119919612",
    CountyGeoId: 31153,
    NAME: "Sarpy County",
  },
  {
    Location: "46.3570765653,-96.4683496086",
    CountyGeoId: 27167,
    NAME: "Wilkin County",
  },
  {
    Location: "44.4091601365,-69.767264396",
    CountyGeoId: 23011,
    NAME: "Kennebec County",
  },
  {
    Location: "45.5614793413,-93.2951672181",
    CountyGeoId: 27059,
    NAME: "Isanti County",
  },
  {
    Location: "38.7140255919,-81.3483495174",
    CountyGeoId: 54087,
    NAME: "Roane County",
  },
  {
    Location: "31.1743965268,-90.8044314871",
    CountyGeoId: 28005,
    NAME: "Amite County",
  },
  {
    Location: "35.2687044015,-99.681956366",
    CountyGeoId: 40009,
    NAME: "Beckham County",
  },
  {
    Location: "43.3822824324,-78.2304441066",
    CountyGeoId: 36073,
    NAME: "Orleans County",
  },
  {
    Location: "33.1235953208,-96.0854546373",
    CountyGeoId: 48231,
    NAME: "Hunt County",
  },
  {
    Location: "36.1772228503,-76.4076199893",
    CountyGeoId: 37143,
    NAME: "Perquimans County",
  },
  {
    Location: "34.7535027956,-83.0658604798",
    CountyGeoId: 45073,
    NAME: "Oconee County",
  },
  {
    Location: "45.2273857114,-109.028015883",
    CountyGeoId: 30009,
    NAME: "Carbon County",
  },
  {
    Location: "40.6655968327,-119.664306118",
    CountyGeoId: 32031,
    NAME: "Washoe County",
  },
  {
    Location: "42.9152915059,-71.7160824662",
    CountyGeoId: 33011,
    NAME: "Hillsborough County",
  },
  {
    Location: "38.6495781117,-88.9189811153",
    CountyGeoId: 17121,
    NAME: "Marion County",
  },
  {
    Location: "31.7315001844,-86.3135388959",
    CountyGeoId: "01041",
    NAME: "Crenshaw County",
  },
  {
    Location: "30.2242399397,-82.6215388925",
    CountyGeoId: 12023,
    NAME: "Columbia County",
  },
  {
    Location: "38.3471428738,-98.2010299558",
    CountyGeoId: 20159,
    NAME: "Rice County",
  },
  {
    Location: "41.6863234292,-92.0655240141",
    CountyGeoId: 19095,
    NAME: "Iowa County",
  },
  {
    Location: "42.037212461,-95.3819677478",
    CountyGeoId: 19047,
    NAME: "Crawford County",
  },
  {
    Location: "33.7293704444,-113.981607439",
    CountyGeoId: "04012",
    NAME: "La Paz County",
  },
  {
    Location: "42.3558758962,-114.667148472",
    CountyGeoId: 16083,
    NAME: "Twin Falls County",
  },
  {
    Location: "35.5964202026,-85.2051550952",
    CountyGeoId: 47007,
    NAME: "Bledsoe County",
  },
  {
    Location: "40.872385845,-97.1395097335",
    CountyGeoId: 31159,
    NAME: "Seward County",
  },
  {
    Location: "42.2500701189,-73.6318704984",
    CountyGeoId: 36021,
    NAME: "Columbia County",
  },
  {
    Location: "39.6890538531,-105.64436349",
    CountyGeoId: "08019",
    NAME: "Clear Creek County",
  },
  {
    Location: "38.0443048231,-100.736990786",
    CountyGeoId: 20055,
    NAME: "Finney County",
  },
  {
    Location: "47.8371764984,-112.240577354",
    CountyGeoId: 30099,
    NAME: "Teton County",
  },
  {
    Location: "37.887648789,-99.3121708301",
    CountyGeoId: 20047,
    NAME: "Edwards County",
  },
  {
    Location: "39.3359933047,-80.0461837011",
    CountyGeoId: 54091,
    NAME: "Taylor County",
  },
  {
    Location: "42.596069775,-84.8383148406",
    CountyGeoId: 26045,
    NAME: "Eaton County",
  },
  {
    Location: "41.0305845373,-92.4094498846",
    CountyGeoId: 19179,
    NAME: "Wapello County",
  },
  {
    Location: "31.477145332,-90.8978501232",
    CountyGeoId: 28037,
    NAME: "Franklin County",
  },
  {
    Location: "37.4173108862,-76.271286532",
    CountyGeoId: 51115,
    NAME: "Mathews County",
  },
  {
    Location: "30.4924753926,-96.6214567361",
    CountyGeoId: 48051,
    NAME: "Burleson County",
  },
  {
    Location: "46.9833438193,-118.560633062",
    CountyGeoId: 53001,
    NAME: "Adams County",
  },
  {
    Location: "39.0996453445,-122.753183909",
    CountyGeoId: "06033",
    NAME: "Lake County",
  },
  {
    Location: "44.5668319195,-102.71686602",
    CountyGeoId: 46093,
    NAME: "Meade County",
  },
  {
    Location: "47.1175406772,-108.250216941",
    CountyGeoId: 30069,
    NAME: "Petroleum County",
  },
  {
    Location: "40.1762856299,-97.5949196014",
    CountyGeoId: 31169,
    NAME: "Thayer County",
  },
  {
    Location: "41.1115978115,-102.333949943",
    CountyGeoId: 31049,
    NAME: "Deuel County",
  },
  {
    Location: "36.7054264259,-83.1286182436",
    CountyGeoId: 51105,
    NAME: "Lee County",
  },
  {
    Location: "33.5543385118,-86.8963982424",
    CountyGeoId: "01073",
    NAME: "Jefferson County",
  },
  {
    Location: "34.854520662,-85.5045272078",
    CountyGeoId: 13083,
    NAME: "Dade County",
  },
  {
    Location: "32.4042861987,-88.662541529",
    CountyGeoId: 28075,
    NAME: "Lauderdale County",
  },
  {
    Location: "44.734724982,-90.6120571133",
    CountyGeoId: 55019,
    NAME: "Clark County",
  },
  {
    Location: "34.7154580153,-106.809062349",
    CountyGeoId: 35061,
    NAME: "Valencia County",
  },
  {
    Location: "59.5599920529,-135.336672633",
    CountyGeoId: "02230",
    NAME: "Skagway Municipality",
  },
  {
    Location: "40.2834374242,-74.7017524053",
    CountyGeoId: 34021,
    NAME: "Mercer County",
  },
  {
    Location: "41.331487609,-94.9278266277",
    CountyGeoId: 19029,
    NAME: "Cass County",
  },
  {
    Location: "40.5400113655,-84.6293603418",
    CountyGeoId: 39107,
    NAME: "Mercer County",
  },
  {
    Location: "40.1763796295,-98.0471849897",
    CountyGeoId: 31129,
    NAME: "Nuckolls County",
  },
  {
    Location: "32.6131446771,-105.741442552",
    CountyGeoId: 35035,
    NAME: "Otero County",
  },
  {
    Location: "34.4597729557,-85.8041426436",
    CountyGeoId: "01049",
    NAME: "DeKalb County",
  },
  {
    Location: "42.3401529673,-72.6637844853",
    CountyGeoId: 25015,
    NAME: "Hampshire County",
  },
  {
    Location: "38.0921662434,-87.2720537447",
    CountyGeoId: 18173,
    NAME: "Warrick County",
  },
  {
    Location: "33.6268085539,-96.6777253881",
    CountyGeoId: 48181,
    NAME: "Grayson County",
  },
  {
    Location: "42.6899047449,-114.263941364",
    CountyGeoId: 16053,
    NAME: "Jerome County",
  },
  {
    Location: "37.3540523996,-82.9541313398",
    CountyGeoId: 21119,
    NAME: "Knott County",
  },
  {
    Location: "44.7091742748,-117.675363456",
    CountyGeoId: 41001,
    NAME: "Baker County",
  },
  {
    Location: "35.7347792105,-84.3118676685",
    CountyGeoId: 47105,
    NAME: "Loudon County",
  },
  {
    Location: "40.7698402428,-77.0701686698",
    CountyGeoId: 42109,
    NAME: "Snyder County",
  },
  {
    Location: "34.1979978627,-118.26101385",
    CountyGeoId: "06037",
    NAME: "Los Angeles County",
  },
  {
    Location: "41.1923895368,-79.4209635408",
    CountyGeoId: 42031,
    NAME: "Clarion County",
  },
  {
    Location: "36.4177312434,-77.3968212099",
    CountyGeoId: 37131,
    NAME: "Northampton County",
  },
  {
    Location: "35.6394734632,-80.5247717485",
    CountyGeoId: 37159,
    NAME: "Rowan County",
  },
  {
    Location: "38.4202968763,-82.2417166787",
    CountyGeoId: 54011,
    NAME: "Cabell County",
  },
  {
    Location: "43.7189289965,-108.442097151",
    CountyGeoId: 56017,
    NAME: "Hot Springs County",
  },
  {
    Location: "44.0071075264,-95.1811530449",
    CountyGeoId: 27033,
    NAME: "Cottonwood County",
  },
  {
    Location: "39.7273470786,-81.0829177077",
    CountyGeoId: 39111,
    NAME: "Monroe County",
  },
  {
    Location: "39.8606128566,-80.6633865366",
    CountyGeoId: 54051,
    NAME: "Marshall County",
  },
  {
    Location: "38.8455149273,-83.4721517804",
    CountyGeoId: 39001,
    NAME: "Adams County",
  },
  {
    Location: "39.4147218971,-78.9437462563",
    CountyGeoId: 54057,
    NAME: "Mineral County",
  },
  {
    Location: "33.7942334247,-85.2110263502",
    CountyGeoId: 13143,
    NAME: "Haralson County",
  },
  {
    Location: "39.7694547721,-88.2173347046",
    CountyGeoId: 17041,
    NAME: "Douglas County",
  },
  {
    Location: "39.0732871864,-113.10069891",
    CountyGeoId: 49027,
    NAME: "Millard County",
  },
  {
    Location: "36.6493218817,-92.4446635679",
    CountyGeoId: 29153,
    NAME: "Ozark County",
  },
  {
    Location: "36.9462101355,-78.240565851",
    CountyGeoId: 51111,
    NAME: "Lunenburg County",
  },
  {
    Location: "31.3228327133,-84.9036434233",
    CountyGeoId: 13099,
    NAME: "Early County",
  },
  {
    Location: "39.8059654072,-91.622348013",
    CountyGeoId: 29127,
    NAME: "Marion County",
  },
  {
    Location: "39.599307179,-107.903956154",
    CountyGeoId: "08045",
    NAME: "Garfield County",
  },
  {
    Location: "29.8371164017,-97.6199983523",
    CountyGeoId: 48055,
    NAME: "Caldwell County",
  },
  {
    Location: "37.0116206611,-78.6616435866",
    CountyGeoId: 51037,
    NAME: "Charlotte County",
  },
  {
    Location: "40.2783937765,-83.0048853482",
    CountyGeoId: 39041,
    NAME: "Delaware County",
  },
  {
    Location: "18.4802902221,-67.1447198452",
    CountyGeoId: 72005,
    NAME: "Aguadilla Municipio",
  },
  {
    Location: "44.7666370786,-115.566279021",
    CountyGeoId: 16085,
    NAME: "Valley County",
  },
  {
    Location: "43.0089657475,-97.3947651219",
    CountyGeoId: 46135,
    NAME: "Yankton County",
  },
  {
    Location: "48.2951265514,-114.049673744",
    CountyGeoId: 30029,
    NAME: "Flathead County",
  },
  {
    Location: "40.851990777,-76.7093216245",
    CountyGeoId: 42097,
    NAME: "Northumberland County",
  },
  {
    Location: "45.3102250802,-118.008777581",
    CountyGeoId: 41061,
    NAME: "Union County",
  },
  {
    Location: "26.4769663387,-97.5916576336",
    CountyGeoId: 48489,
    NAME: "Willacy County",
  },
  {
    Location: "39.1146453374,-94.7644784215",
    CountyGeoId: 20209,
    NAME: "Wyandotte County",
  },
  {
    Location: "32.5687919024,-83.8268633608",
    CountyGeoId: 13225,
    NAME: "Peach County",
  },
  {
    Location: "41.3964956116,-71.6196574376",
    CountyGeoId: 44009,
    NAME: "Washington County",
  },
  {
    Location: "32.4063798664,-89.5376379602",
    CountyGeoId: 28123,
    NAME: "Scott County",
  },
  {
    Location: "47.2635798565,-109.224485149",
    CountyGeoId: 30027,
    NAME: "Fergus County",
  },
  {
    Location: "36.8596987837,-86.8789382363",
    CountyGeoId: 21141,
    NAME: "Logan County",
  },
  {
    Location: "43.2974962568,-71.6802764616",
    CountyGeoId: 33013,
    NAME: "Merrimack County",
  },
  {
    Location: "42.7582365339,-78.7796595828",
    CountyGeoId: 36029,
    NAME: "Erie County",
  },
  {
    Location: "36.2777169084,-100.273115438",
    CountyGeoId: 48295,
    NAME: "Lipscomb County",
  },
  {
    Location: "31.9479781068,-98.5582573019",
    CountyGeoId: 48093,
    NAME: "Comanche County",
  },
  {
    Location: "37.753378564,-85.1747465425",
    CountyGeoId: 21229,
    NAME: "Washington County",
  },
  {
    Location: "37.2190501994,-88.7077397007",
    CountyGeoId: 17127,
    NAME: "Massac County",
  },
  {
    Location: "36.9217518991,-77.261794619",
    CountyGeoId: 51183,
    NAME: "Sussex County",
  },
  {
    Location: "58.2787538674,-156.544796848",
    CountyGeoId: "02164",
    NAME: "Lake and Peninsula Borough",
  },
  {
    Location: "40.5871850985,-83.1609033358",
    CountyGeoId: 39101,
    NAME: "Marion County",
  },
  {
    Location: "31.8692373987,-90.448798677",
    CountyGeoId: 28029,
    NAME: "Copiah County",
  },
  {
    Location: "38.3694102763,-75.6315310797",
    CountyGeoId: 24045,
    NAME: "Wicomico County",
  },
  {
    Location: "46.3170555846,-90.264452745",
    CountyGeoId: 55051,
    NAME: "Iron County",
  },
  {
    Location: "33.1912219797,-91.7684475565",
    CountyGeoId: "05003",
    NAME: "Ashley County",
  },
  {
    Location: "59.7139951133,-158.348270189",
    CountyGeoId: "02070",
    NAME: "Dillingham Census Area",
  },
  {
    Location: "36.1611646374,-91.4798585278",
    CountyGeoId: "05135",
    NAME: "Sharp County",
  },
  {
    Location: "41.3440027805,-88.8859379256",
    CountyGeoId: 17099,
    NAME: "LaSalle County",
  },
  {
    Location: "29.2822055783,-82.7886132018",
    CountyGeoId: 12075,
    NAME: "Levy County",
  },
  {
    Location: "36.4858546341,-83.6604159043",
    CountyGeoId: 47025,
    NAME: "Claiborne County",
  },
  {
    Location: "41.6845893285,-94.905822196",
    CountyGeoId: 19009,
    NAME: "Audubon County",
  },
  {
    Location: "39.2023794705,-106.344837734",
    CountyGeoId: "08065",
    NAME: "Lake County",
  },
  {
    Location: "34.9238618899,-95.7484141356",
    CountyGeoId: 40121,
    NAME: "Pittsburg County",
  },
  {
    Location: "42.9450938315,-85.0746031181",
    CountyGeoId: 26067,
    NAME: "Ionia County",
  },
  {
    Location: "42.9845979293,-71.0890593426",
    CountyGeoId: 33015,
    NAME: "Rockingham County",
  },
  {
    Location: "30.3106777835,-96.9657036787",
    CountyGeoId: 48287,
    NAME: "Lee County",
  },
  {
    Location: "30.8338568988,-83.2677076921",
    CountyGeoId: 13185,
    NAME: "Lowndes County",
  },
  {
    Location: "22.0110798698,-159.7054382",
    CountyGeoId: 15007,
    NAME: "Kauai County",
  },
  {
    Location: "62.160012711,-163.525464784",
    CountyGeoId: "02158",
    NAME: "Kusilvak Census Area",
  },
  {
    Location: "32.7979817888,-94.3572221859",
    CountyGeoId: 48315,
    NAME: "Marion County",
  },
  {
    Location: "40.6343512879,-73.9502045905",
    CountyGeoId: 36047,
    NAME: "Kings County",
  },
  {
    Location: "33.7792058021,-88.0968988585",
    CountyGeoId: "01075",
    NAME: "Lamar County",
  },
  {
    Location: "35.1199026751,-84.5233230209",
    CountyGeoId: 47139,
    NAME: "Polk County",
  },
  {
    Location: "41.6194314385,-102.335438285",
    CountyGeoId: 31069,
    NAME: "Garden County",
  },
  {
    Location: "36.7479021665,-101.490100072",
    CountyGeoId: 40139,
    NAME: "Texas County",
  },
  {
    Location: "39.8940298185,-83.4001988278",
    CountyGeoId: 39097,
    NAME: "Madison County",
  },
  {
    Location: "30.3180548031,-98.9464800144",
    CountyGeoId: 48171,
    NAME: "Gillespie County",
  },
  {
    Location: "29.6747549911,-82.3577015483",
    CountyGeoId: 12001,
    NAME: "Alachua County",
  },
  {
    Location: "30.6929040291,-87.0184494886",
    CountyGeoId: 12113,
    NAME: "Santa Rosa County",
  },
  {
    Location: "18.4415684375,-66.1388392614",
    CountyGeoId: 72033,
    NAME: "Cataño Municipio",
  },
  {
    Location: "36.7371415587,-84.4841745377",
    CountyGeoId: 21147,
    NAME: "McCreary County",
  },
  {
    Location: "39.5767751714,-75.3579856904",
    CountyGeoId: 34033,
    NAME: "Salem County",
  },
  {
    Location: "37.7846965493,-117.632366036",
    CountyGeoId: 32009,
    NAME: "Esmeralda County",
  },
  {
    Location: "44.0272987421,-69.015547485",
    CountyGeoId: 23013,
    NAME: "Knox County",
  },
  {
    Location: "45.0710105947,-99.1452534374",
    CountyGeoId: 46049,
    NAME: "Faulk County",
  },
  {
    Location: "38.1753645383,-82.070392228",
    CountyGeoId: 54043,
    NAME: "Lincoln County",
  },
  {
    Location: "42.8674818753,-90.7062204223",
    CountyGeoId: 55043,
    NAME: "Grant County",
  },
  {
    Location: "42.4665806561,-124.215220683",
    CountyGeoId: 41015,
    NAME: "Curry County",
  },
  {
    Location: "36.3960127906,-79.7749871967",
    CountyGeoId: 37157,
    NAME: "Rockingham County",
  },
  {
    Location: "45.9337163348,-95.453523681",
    CountyGeoId: 27041,
    NAME: "Douglas County",
  },
  {
    Location: "37.4362097341,-122.355663195",
    CountyGeoId: "06081",
    NAME: "San Mateo County",
  },
  {
    Location: "32.3644009947,-91.2425796995",
    CountyGeoId: 22065,
    NAME: "Madison Parish",
  },
  {
    Location: "37.7516108062,-108.517265273",
    CountyGeoId: "08033",
    NAME: "Dolores County",
  },
  {
    Location: "43.4666080487,-89.3337362349",
    CountyGeoId: 55021,
    NAME: "Columbia County",
  },
  {
    Location: "34.0388755841,-78.2274071617",
    CountyGeoId: 37019,
    NAME: "Brunswick County",
  },
  {
    Location: "39.3502287543,-99.3250571176",
    CountyGeoId: 20163,
    NAME: "Rooks County",
  },
  {
    Location: "31.5696411088,-89.8230024414",
    CountyGeoId: 28065,
    NAME: "Jefferson Davis County",
  },
  {
    Location: "43.0023986959,-114.138200808",
    CountyGeoId: 16063,
    NAME: "Lincoln County",
  },
  {
    Location: "31.2484923988,-86.4512425439",
    CountyGeoId: "01039",
    NAME: "Covington County",
  },
  {
    Location: "30.6484687349,-93.343338993",
    CountyGeoId: 22011,
    NAME: "Beauregard Parish",
  },
  {
    Location: "30.7177158024,-99.2261274236",
    CountyGeoId: 48319,
    NAME: "Mason County",
  },
  {
    Location: "35.664936694,-75.6852333134",
    CountyGeoId: 37055,
    NAME: "Dare County",
  },
  {
    Location: "44.82075943,-93.8025859879",
    CountyGeoId: 27019,
    NAME: "Carver County",
  },
  {
    Location: "35.5272807264,-87.4930956193",
    CountyGeoId: 47101,
    NAME: "Lewis County",
  },
  {
    Location: "37.9370590546,-76.7296872797",
    CountyGeoId: 51159,
    NAME: "Richmond County",
  },
  {
    Location: "38.1459486608,-82.4269495914",
    CountyGeoId: 54099,
    NAME: "Wayne County",
  },
  {
    Location: "40.7715207081,-84.1057794323",
    CountyGeoId: 39003,
    NAME: "Allen County",
  },
  {
    Location: "37.2864000021,-80.0554750445",
    CountyGeoId: 51775,
    NAME: "Salem city",
  },
  {
    Location: "41.1987931574,-101.661351227",
    CountyGeoId: 31101,
    NAME: "Keith County",
  },
  {
    Location: "42.267809005,-77.3838032543",
    CountyGeoId: 36101,
    NAME: "Steuben County",
  },
  {
    Location: "46.6628779661,-87.5735241034",
    CountyGeoId: 26103,
    NAME: "Marquette County",
  },
  {
    Location: "40.737682711,-93.7862814096",
    CountyGeoId: 19053,
    NAME: "Decatur County",
  },
  {
    Location: "33.5660908408,-82.8787644687",
    CountyGeoId: 13265,
    NAME: "Taliaferro County",
  },
  {
    Location: "40.0103527451,-88.5910866502",
    CountyGeoId: 17147,
    NAME: "Piatt County",
  },
  {
    Location: "38.8184535854,-77.0862060584",
    CountyGeoId: 51510,
    NAME: "Alexandria city",
  },
  {
    Location: "29.0820812942,-97.356778445",
    CountyGeoId: 48123,
    NAME: "DeWitt County",
  },
  {
    Location: "38.0678786159,-82.7347546613",
    CountyGeoId: 21127,
    NAME: "Lawrence County",
  },
  {
    Location: "37.2157922672,-87.142041664",
    CountyGeoId: 21177,
    NAME: "Muhlenberg County",
  },
  {
    Location: "36.969571697,-93.1888539044",
    CountyGeoId: 29043,
    NAME: "Christian County",
  },
  {
    Location: "43.8003788931,-89.0448597042",
    CountyGeoId: 55047,
    NAME: "Green Lake County",
  },
  {
    Location: "18.2110304405,-65.7360948748",
    CountyGeoId: 72103,
    NAME: "Naguabo Municipio",
  },
  {
    Location: "43.7180588837,-99.0809353963",
    CountyGeoId: 46015,
    NAME: "Brule County",
  },
  {
    Location: "41.3171740913,-80.7611602655",
    CountyGeoId: 39155,
    NAME: "Trumbull County",
  },
  {
    Location: "40.0403785235,-86.8932997962",
    CountyGeoId: 18107,
    NAME: "Montgomery County",
  },
  {
    Location: "40.1139269766,-93.5653381974",
    CountyGeoId: 29079,
    NAME: "Grundy County",
  },
  {
    Location: "37.7627564124,-88.230465738",
    CountyGeoId: 17059,
    NAME: "Gallatin County",
  },
  {
    Location: "38.5984692441,-82.5367524098",
    CountyGeoId: 39087,
    NAME: "Lawrence County",
  },
  {
    Location: "42.8625961548,-91.8443243326",
    CountyGeoId: 19065,
    NAME: "Fayette County",
  },
  {
    Location: "38.05518334,-122.748858563",
    CountyGeoId: "06041",
    NAME: "Marin County",
  },
  {
    Location: "34.8612598084,-76.5357430669",
    CountyGeoId: 37031,
    NAME: "Carteret County",
  },
  {
    Location: "30.2067729534,-92.0638821244",
    CountyGeoId: 22055,
    NAME: "Lafayette Parish",
  },
  {
    Location: "43.4197021208,-74.9624979781",
    CountyGeoId: 36043,
    NAME: "Herkimer County",
  },
  {
    Location: "47.5754617267,-100.34555506",
    CountyGeoId: 38083,
    NAME: "Sheridan County",
  },
  {
    Location: "35.4012758182,-101.894004898",
    CountyGeoId: 48375,
    NAME: "Potter County",
  },
  {
    Location: "39.0023855083,-96.7525021968",
    CountyGeoId: 20061,
    NAME: "Geary County",
  },
  {
    Location: "36.7164170862,-90.4065563831",
    CountyGeoId: 29023,
    NAME: "Butler County",
  },
  {
    Location: "39.6199484364,-85.4657611777",
    CountyGeoId: 18139,
    NAME: "Rush County",
  },
  {
    Location: "36.5320343549,-86.0072701421",
    CountyGeoId: 47111,
    NAME: "Macon County",
  },
  {
    Location: "39.0415137637,-95.7565342577",
    CountyGeoId: 20177,
    NAME: "Shawnee County",
  },
  {
    Location: "33.1738126593,-102.335196551",
    CountyGeoId: 48445,
    NAME: "Terry County",
  },
  {
    Location: "34.5192808123,-82.6377509574",
    CountyGeoId: 45007,
    NAME: "Anderson County",
  },
  {
    Location: "39.4401679837,-92.4970779756",
    CountyGeoId: 29175,
    NAME: "Randolph County",
  },
  {
    Location: "42.2197672573,-103.085681934",
    CountyGeoId: 31013,
    NAME: "Box Butte County",
  },
  {
    Location: "37.2035472717,-94.3406053082",
    CountyGeoId: 29097,
    NAME: "Jasper County",
  },
  {
    Location: "35.9025835959,-96.3708562265",
    CountyGeoId: 40037,
    NAME: "Creek County",
  },
  {
    Location: "43.4913425333,-83.4398685744",
    CountyGeoId: 26157,
    NAME: "Tuscola County",
  },
  {
    Location: "39.349716037,-99.8832526271",
    CountyGeoId: 20065,
    NAME: "Graham County",
  },
  {
    Location: "30.7390448597,-95.5722839299",
    CountyGeoId: 48471,
    NAME: "Walker County",
  },
  {
    Location: "32.1005542205,-85.7156972254",
    CountyGeoId: "01011",
    NAME: "Bullock County",
  },
  {
    Location: "32.0196107831,-88.2632012743",
    CountyGeoId: "01023",
    NAME: "Choctaw County",
  },
  {
    Location: "37.55848541,-95.3067923129",
    CountyGeoId: 20133,
    NAME: "Neosho County",
  },
  {
    Location: "36.7315540772,-80.733902516",
    CountyGeoId: 51035,
    NAME: "Carroll County",
  },
  {
    Location: "32.8202181268,-91.801797046",
    CountyGeoId: 22067,
    NAME: "Morehouse Parish",
  },
  {
    Location: "43.2927326789,-84.6049110538",
    CountyGeoId: 26057,
    NAME: "Gratiot County",
  },
  {
    Location: "43.4511000415,-116.241166631",
    CountyGeoId: 16001,
    NAME: "Ada County",
  },
  {
    Location: "40.5635069447,-74.6163366246",
    CountyGeoId: 34035,
    NAME: "Somerset County",
  },
  {
    Location: "39.3497164186,-97.1651722307",
    CountyGeoId: 20027,
    NAME: "Clay County",
  },
  {
    Location: "46.6737194276,-115.65690713",
    CountyGeoId: 16035,
    NAME: "Clearwater County",
  },
  {
    Location: "18.1737088701,-66.160927935",
    CountyGeoId: 72041,
    NAME: "Cidra Municipio",
  },
  {
    Location: "39.7581742368,-89.6589101835",
    CountyGeoId: 17167,
    NAME: "Sangamon County",
  },
  {
    Location: "48.4701446298,-118.516586208",
    CountyGeoId: 53019,
    NAME: "Ferry County",
  },
  {
    Location: "37.4690483094,-82.3958631537",
    CountyGeoId: 21195,
    NAME: "Pike County",
  },
  {
    Location: "43.1933721852,-100.71843535",
    CountyGeoId: 46121,
    NAME: "Todd County",
  },
  {
    Location: "35.1504672096,-83.4221767088",
    CountyGeoId: 37113,
    NAME: "Macon County",
  },
  {
    Location: "45.5521529589,-94.6130114109",
    CountyGeoId: 27145,
    NAME: "Stearns County",
  },
  {
    Location: "41.2263705176,-96.6374007438",
    CountyGeoId: 31155,
    NAME: "Saunders County",
  },
  {
    Location: "36.3449979328,-85.2880811587",
    CountyGeoId: 47133,
    NAME: "Overton County",
  },
  {
    Location: "46.3582866004,-101.63966574",
    CountyGeoId: 38037,
    NAME: "Grant County",
  },
  {
    Location: "34.0776481589,-100.278743804",
    CountyGeoId: 48101,
    NAME: "Cottle County",
  },
  {
    Location: "40.7374323606,-94.6964147623",
    CountyGeoId: 19173,
    NAME: "Taylor County",
  },
  {
    Location: "32.1822155495,-107.749771928",
    CountyGeoId: 35029,
    NAME: "Luna County",
  },
  {
    Location: "27.7350347565,-97.516253851",
    CountyGeoId: 48355,
    NAME: "Nueces County",
  },
  {
    Location: "42.7110535518,-73.5097121399",
    CountyGeoId: 36083,
    NAME: "Rensselaer County",
  },
  {
    Location: "38.1593008022,-79.0611168206",
    CountyGeoId: 51790,
    NAME: "Staunton city",
  },
  {
    Location: "37.6558723241,-80.8585729141",
    CountyGeoId: 54089,
    NAME: "Summers County",
  },
  {
    Location: "47.1444090738,-123.828620824",
    CountyGeoId: 53027,
    NAME: "Grays Harbor County",
  },
  {
    Location: "28.7856505535,-96.0039807574",
    CountyGeoId: 48321,
    NAME: "Matagorda County",
  },
  {
    Location: "33.2970283837,-85.128270367",
    CountyGeoId: 13149,
    NAME: "Heard County",
  },
  {
    Location: "35.3639599672,-78.0039971272",
    CountyGeoId: 37191,
    NAME: "Wayne County",
  },
  {
    Location: "42.6684852128,-112.224618777",
    CountyGeoId: 16005,
    NAME: "Bannock County",
  },
  {
    Location: "18.1029234107,-66.1495019535",
    CountyGeoId: 72035,
    NAME: "Cayey Municipio",
  },
  {
    Location: "47.6452247762,-105.795424407",
    CountyGeoId: 30055,
    NAME: "McCone County",
  },
  {
    Location: "48.7766295653,-96.7828440349",
    CountyGeoId: 27069,
    NAME: "Kittson County",
  },
  {
    Location: "33.8349402867,-83.437054781",
    CountyGeoId: 13219,
    NAME: "Oconee County",
  },
  {
    Location: "31.929800968,-82.9389875255",
    CountyGeoId: 13271,
    NAME: "Telfair County",
  },
  {
    Location: "41.3985995057,-85.4174667322",
    CountyGeoId: 18113,
    NAME: "Noble County",
  },
  {
    Location: "32.4783131468,-92.1548701323",
    CountyGeoId: 22073,
    NAME: "Ouachita Parish",
  },
  {
    Location: "38.6678584122,-85.123590032",
    CountyGeoId: 21041,
    NAME: "Carroll County",
  },
  {
    Location: "43.6743620902,-94.551070329",
    CountyGeoId: 27091,
    NAME: "Martin County",
  },
  {
    Location: "34.876034515,-95.2503733342",
    CountyGeoId: 40077,
    NAME: "Latimer County",
  },
  {
    Location: "18.3755558594,-65.8002432965",
    CountyGeoId: 72119,
    NAME: "Río Grande Municipio",
  },
  {
    Location: "38.2737274749,-77.1564526995",
    CountyGeoId: 51099,
    NAME: "King George County",
  },
  {
    Location: "30.6105923313,-85.6653287163",
    CountyGeoId: 12133,
    NAME: "Washington County",
  },
  {
    Location: "37.3651781719,-84.3159414648",
    CountyGeoId: 21203,
    NAME: "Rockcastle County",
  },
  {
    Location: "39.7834476063,-96.0141016624",
    CountyGeoId: 20131,
    NAME: "Nemaha County",
  },
  {
    Location: "33.5550489458,-83.8501865375",
    CountyGeoId: 13217,
    NAME: "Newton County",
  },
  {
    Location: "45.5024976764,-85.373250216",
    CountyGeoId: 26029,
    NAME: "Charlevoix County",
  },
  {
    Location: "42.8324862728,-96.6560903889",
    CountyGeoId: 46127,
    NAME: "Union County",
  },
  {
    Location: "15.1992652149,145.777379252",
    CountyGeoId: 69110,
    NAME: "Saipan Municipality",
  },
  {
    Location: "37.3007843394,-75.9285418475",
    CountyGeoId: 51131,
    NAME: "Northampton County",
  },
  {
    Location: "33.0138972496,-83.9186821405",
    CountyGeoId: 13207,
    NAME: "Monroe County",
  },
  {
    Location: "42.1709806276,-71.1838291807",
    CountyGeoId: 25021,
    NAME: "Norfolk County",
  },
  {
    Location: "45.1719349421,-96.7676947106",
    CountyGeoId: 46051,
    NAME: "Grant County",
  },
  {
    Location: "35.0571811284,-83.7501767115",
    CountyGeoId: 37043,
    NAME: "Clay County",
  },
  {
    Location: "41.1175705357,-81.8997238467",
    CountyGeoId: 39103,
    NAME: "Medina County",
  },
  {
    Location: "33.2690858673,-85.8605470841",
    CountyGeoId: "01027",
    NAME: "Clay County",
  },
  {
    Location: "40.6822625859,-80.3492877814",
    CountyGeoId: 42007,
    NAME: "Beaver County",
  },
  {
    Location: "37.3133053,-76.7738000898",
    CountyGeoId: 51095,
    NAME: "James City County",
  },
  {
    Location: "36.7513165534,-86.1904186693",
    CountyGeoId: 21003,
    NAME: "Allen County",
  },
  {
    Location: "45.151770859,-86.0384960523",
    CountyGeoId: 26089,
    NAME: "Leelanau County",
  },
  {
    Location: "38.8868296401,-89.4355442381",
    CountyGeoId: 17005,
    NAME: "Bond County",
  },
  {
    Location: "34.0509558643,-93.1763674899",
    CountyGeoId: "05019",
    NAME: "Clark County",
  },
  {
    Location: "36.3816695474,-91.8182352994",
    CountyGeoId: "05049",
    NAME: "Fulton County",
  },
  {
    Location: "46.6082572906,-93.4154290883",
    CountyGeoId: 27001,
    NAME: "Aitkin County",
  },
  {
    Location: "31.7524339429,-86.6802892154",
    CountyGeoId: "01013",
    NAME: "Butler County",
  },
  {
    Location: "43.940666315,-71.8207197904",
    CountyGeoId: 33009,
    NAME: "Grafton County",
  },
  {
    Location: "37.5728931402,-105.788288197",
    CountyGeoId: "08003",
    NAME: "Alamosa County",
  },
  {
    Location: "44.1172175226,-73.7727094403",
    CountyGeoId: 36031,
    NAME: "Essex County",
  },
  {
    Location: "34.3508983325,-82.9642475976",
    CountyGeoId: 13147,
    NAME: "Hart County",
  },
  {
    Location: "40.61842222,-108.207290604",
    CountyGeoId: "08081",
    NAME: "Moffat County",
  },
  {
    Location: "37.2377526609,-96.8374891769",
    CountyGeoId: 20035,
    NAME: "Cowley County",
  },
  {
    Location: "35.5701227411,-93.4598811569",
    CountyGeoId: "05071",
    NAME: "Johnson County",
  },
  {
    Location: "37.5722077541,-78.5287073251",
    CountyGeoId: 51029,
    NAME: "Buckingham County",
  },
  {
    Location: "36.7470190976,-93.455980976",
    CountyGeoId: 29209,
    NAME: "Stone County",
  },
  {
    Location: "41.0290322944,-93.7851578386",
    CountyGeoId: 19039,
    NAME: "Clarke County",
  },
  {
    Location: "39.1424974869,-92.6962654763",
    CountyGeoId: 29089,
    NAME: "Howard County",
  },
  {
    Location: "41.7461054437,-89.3003092504",
    CountyGeoId: 17103,
    NAME: "Lee County",
  },
  {
    Location: "39.3790027809,-96.3423649942",
    CountyGeoId: 20149,
    NAME: "Pottawatomie County",
  },
  {
    Location: "27.4775188749,-82.3575458711",
    CountyGeoId: 12081,
    NAME: "Manatee County",
  },
  {
    Location: "38.9334528592,-84.5333168381",
    CountyGeoId: 21117,
    NAME: "Kenton County",
  },
  {
    Location: "32.7359728732,-99.3540669412",
    CountyGeoId: 48417,
    NAME: "Shackelford County",
  },
  {
    Location: "45.5024730826,-92.9083421514",
    CountyGeoId: 27025,
    NAME: "Chisago County",
  },
  {
    Location: "38.3521828118,-89.4104744564",
    CountyGeoId: 17189,
    NAME: "Washington County",
  },
  {
    Location: "34.8607684689,-94.0632792993",
    CountyGeoId: "05127",
    NAME: "Scott County",
  },
  {
    Location: "39.6441138538,-90.474747165",
    CountyGeoId: 17171,
    NAME: "Scott County",
  },
  {
    Location: "41.5088382943,-87.0733191356",
    CountyGeoId: 18127,
    NAME: "Porter County",
  },
  {
    Location: "38.0276014047,-119.95475358",
    CountyGeoId: "06109",
    NAME: "Tuolumne County",
  },
  {
    Location: "32.039959396,-84.1970560516",
    CountyGeoId: 13261,
    NAME: "Sumter County",
  },
  {
    Location: "37.3384339705,-108.596669828",
    CountyGeoId: "08083",
    NAME: "Montezuma County",
  },
  {
    Location: "41.3488242868,-72.8998576911",
    CountyGeoId: "09009",
    NAME: "New Haven County",
  },
  {
    Location: "43.99606769,-86.5450922685",
    CountyGeoId: 26105,
    NAME: "Mason County",
  },
  {
    Location: "41.5183294763,-76.0165514362",
    CountyGeoId: 42131,
    NAME: "Wyoming County",
  },
  {
    Location: "29.5812415277,-83.1870324531",
    CountyGeoId: 12029,
    NAME: "Dixie County",
  },
  {
    Location: "45.6673207505,-88.7703948628",
    CountyGeoId: 55041,
    NAME: "Forest County",
  },
  {
    Location: "37.4055150245,-81.1114444602",
    CountyGeoId: 54055,
    NAME: "Mercer County",
  },
  {
    Location: "32.6672014402,-83.4270835327",
    CountyGeoId: 13289,
    NAME: "Twiggs County",
  },
  {
    Location: "38.7787375794,-120.524649929",
    CountyGeoId: "06017",
    NAME: "El Dorado County",
  },
  {
    Location: "38.9160955531,-100.48290474",
    CountyGeoId: 20063,
    NAME: "Gove County",
  },
  {
    Location: "34.1319410705,-86.8676194614",
    CountyGeoId: "01043",
    NAME: "Cullman County",
  },
  {
    Location: "33.701828378,-84.7679728373",
    CountyGeoId: 13097,
    NAME: "Douglas County",
  },
  {
    Location: "32.1170652349,-82.7245932678",
    CountyGeoId: 13309,
    NAME: "Wheeler County",
  },
  {
    Location: "41.5664861496,-100.482861357",
    CountyGeoId: 31113,
    NAME: "Logan County",
  },
  {
    Location: "42.5047730204,-102.408963566",
    CountyGeoId: 31161,
    NAME: "Sheridan County",
  },
  {
    Location: "39.020397715,-119.189196841",
    CountyGeoId: 32019,
    NAME: "Lyon County",
  },
  {
    Location: "31.1749078562,-90.4041605467",
    CountyGeoId: 28113,
    NAME: "Pike County",
  },
  {
    Location: "40.4850679408,-106.991193187",
    CountyGeoId: "08107",
    NAME: "Routt County",
  },
  {
    Location: "34.901372384,-87.6539980067",
    CountyGeoId: "01077",
    NAME: "Lauderdale County",
  },
  {
    Location: "31.5514336788,-81.9167587358",
    CountyGeoId: 13305,
    NAME: "Wayne County",
  },
  {
    Location: "45.4493130951,-83.5277564528",
    CountyGeoId: 26141,
    NAME: "Presque Isle County",
  },
  {
    Location: "44.499782046,-70.7565745217",
    CountyGeoId: 23017,
    NAME: "Oxford County",
  },
  {
    Location: "39.008475666,-94.3461007818",
    CountyGeoId: 29095,
    NAME: "Jackson County",
  },
  {
    Location: "43.4162950523,-88.7075067352",
    CountyGeoId: 55027,
    NAME: "Dodge County",
  },
  {
    Location: "40.183401621,-87.732815214",
    CountyGeoId: 17183,
    NAME: "Vermilion County",
  },
  {
    Location: "44.3370929481,-83.0853006647",
    CountyGeoId: 26069,
    NAME: "Iosco County",
  },
  {
    Location: "30.792719766,-94.8300248619",
    CountyGeoId: 48373,
    NAME: "Polk County",
  },
  {
    Location: "47.726661247,-90.3859738837",
    CountyGeoId: 27031,
    NAME: "Cook County",
  },
  {
    Location: "31.6407805038,-88.6957976971",
    CountyGeoId: 28153,
    NAME: "Wayne County",
  },
  {
    Location: "43.0208142456,-88.7758658272",
    CountyGeoId: 55055,
    NAME: "Jefferson County",
  },
  {
    Location: "37.3360260406,-77.9761379333",
    CountyGeoId: 51007,
    NAME: "Amelia County",
  },
  {
    Location: "29.7564998487,-91.7630555512",
    CountyGeoId: 22045,
    NAME: "Iberia Parish",
  },
  {
    Location: "36.3168767363,-96.699194634",
    CountyGeoId: 40117,
    NAME: "Pawnee County",
  },
  {
    Location: "37.1039268916,-84.5771762961",
    CountyGeoId: 21199,
    NAME: "Pulaski County",
  },
  {
    Location: "31.8673305599,-85.0187841576",
    CountyGeoId: 13239,
    NAME: "Quitman County",
  },
  {
    Location: "45.8373643273,-69.2845234425",
    CountyGeoId: 23021,
    NAME: "Piscataquis County",
  },
  {
    Location: "43.3350287366,-84.0531870389",
    CountyGeoId: 26145,
    NAME: "Saginaw County",
  },
  {
    Location: "34.2226067095,-82.4591641694",
    CountyGeoId: 45001,
    NAME: "Abbeville County",
  },
  {
    Location: "33.1774899421,-99.2123698529",
    CountyGeoId: 48447,
    NAME: "Throckmorton County",
  },
  {
    Location: "46.120767065,-92.7412705154",
    CountyGeoId: 27115,
    NAME: "Pine County",
  },
  {
    Location: "30.1036068701,-97.3120103867",
    CountyGeoId: 48021,
    NAME: "Bastrop County",
  },
  {
    Location: "38.6807283768,-79.350893592",
    CountyGeoId: 54071,
    NAME: "Pendleton County",
  },
  {
    Location: "34.900298342,-94.7033667748",
    CountyGeoId: 40079,
    NAME: "Le Flore County",
  },
  {
    Location: "36.1605336919,-80.6652439331",
    CountyGeoId: 37197,
    NAME: "Yadkin County",
  },
  {
    Location: "40.5609114012,-84.2217438305",
    CountyGeoId: 39011,
    NAME: "Auglaize County",
  },
  {
    Location: "38.0335228018,-83.913088975",
    CountyGeoId: 21173,
    NAME: "Montgomery County",
  },
  {
    Location: "43.8060821062,-70.3302006275",
    CountyGeoId: 23005,
    NAME: "Cumberland County",
  },
  {
    Location: "17.9585899206,-66.041855295",
    CountyGeoId: 72015,
    NAME: "Arroyo Municipio",
  },
  {
    Location: "32.9881100057,-81.3582013406",
    CountyGeoId: 45005,
    NAME: "Allendale County",
  },
  {
    Location: "38.4237395729,-92.8859845551",
    CountyGeoId: 29141,
    NAME: "Morgan County",
  },
  {
    Location: "34.2900177408,-92.4235830486",
    CountyGeoId: "05053",
    NAME: "Grant County",
  },
  {
    Location: "37.1430626393,-78.051263729",
    CountyGeoId: 51135,
    NAME: "Nottoway County",
  },
  {
    Location: "44.45533124,-90.0415484809",
    CountyGeoId: 55141,
    NAME: "Wood County",
  },
  {
    Location: "36.97522315,-82.6212020717",
    CountyGeoId: 51195,
    NAME: "Wise County",
  },
  {
    Location: "38.4736812339,-77.0134840998",
    CountyGeoId: 24017,
    NAME: "Charles County",
  },
  {
    Location: "39.2610229552,-89.924455051",
    CountyGeoId: 17117,
    NAME: "Macoupin County",
  },
  {
    Location: "32.7535170026,-89.5240158465",
    CountyGeoId: 28079,
    NAME: "Leake County",
  },
  {
    Location: "48.7189972077,-101.657774141",
    CountyGeoId: 38075,
    NAME: "Renville County",
  },
  {
    Location: "39.0345595213,-121.694849665",
    CountyGeoId: "06101",
    NAME: "Sutter County",
  },
  {
    Location: "41.5310383041,-96.2220294815",
    CountyGeoId: 31177,
    NAME: "Washington County",
  },
  {
    Location: "40.3369482878,-75.1068734265",
    CountyGeoId: 42017,
    NAME: "Bucks County",
  },
  {
    Location: "26.9280228765,-97.636461158",
    CountyGeoId: 48261,
    NAME: "Kenedy County",
  },
  {
    Location: "48.6282036571,-110.111239391",
    CountyGeoId: 30041,
    NAME: "Hill County",
  },
  {
    Location: "38.696627674,-98.204730294",
    CountyGeoId: 20053,
    NAME: "Ellsworth County",
  },
  {
    Location: "29.3843544458,-96.9301524955",
    CountyGeoId: 48285,
    NAME: "Lavaca County",
  },
  {
    Location: "47.6396466034,-122.649176385",
    CountyGeoId: 53035,
    NAME: "Kitsap County",
  },
  {
    Location: "42.1980879866,-74.9664662769",
    CountyGeoId: 36025,
    NAME: "Delaware County",
  },
  {
    Location: "39.6497752303,-104.339234024",
    CountyGeoId: "08005",
    NAME: "Arapahoe County",
  },
  {
    Location: "35.8376872526,-101.89292281",
    CountyGeoId: 48341,
    NAME: "Moore County",
  },
  {
    Location: "41.6846965026,-80.1062776173",
    CountyGeoId: 42039,
    NAME: "Crawford County",
  },
  {
    Location: "43.1923769434,-99.1856121911",
    CountyGeoId: 46053,
    NAME: "Gregory County",
  },
  {
    Location: "37.3222824489,-84.9283681524",
    CountyGeoId: 21045,
    NAME: "Casey County",
  },
  {
    Location: "36.9905417852,-85.6292510918",
    CountyGeoId: 21169,
    NAME: "Metcalfe County",
  },
  {
    Location: "37.9698391666,-86.2171786433",
    CountyGeoId: 21163,
    NAME: "Meade County",
  },
  {
    Location: "38.6357242384,-90.245238047",
    CountyGeoId: 29510,
    NAME: "St. Louis city",
  },
  {
    Location: "34.8641146532,-84.3198525836",
    CountyGeoId: 13111,
    NAME: "Fannin County",
  },
  {
    Location: "40.8122907682,-79.4645390704",
    CountyGeoId: 42005,
    NAME: "Armstrong County",
  },
  {
    Location: "38.8246749142,-82.316909885",
    CountyGeoId: 39053,
    NAME: "Gallia County",
  },
  {
    Location: "40.8509414055,-101.649613261",
    CountyGeoId: 31135,
    NAME: "Perkins County",
  },
  {
    Location: "43.5179689655,-71.4226936063",
    CountyGeoId: 33001,
    NAME: "Belknap County",
  },
  {
    Location: "36.5946453006,-89.6518318853",
    CountyGeoId: 29143,
    NAME: "New Madrid County",
  },
  {
    Location: "37.5184174771,-87.6831570963",
    CountyGeoId: 21233,
    NAME: "Webster County",
  },
  {
    Location: "32.3061694988,-101.43550545",
    CountyGeoId: 48227,
    NAME: "Howard County",
  },
  {
    Location: "30.8897820069,-99.8206358613",
    CountyGeoId: 48327,
    NAME: "Menard County",
  },
  {
    Location: "33.4828592099,-82.4813683615",
    CountyGeoId: 13189,
    NAME: "McDuffie County",
  },
  {
    Location: "29.4567333341,-97.4925237545",
    CountyGeoId: 48177,
    NAME: "Gonzales County",
  },
  {
    Location: "18.4630482721,-66.9262663704",
    CountyGeoId: 72115,
    NAME: "Quebradillas Municipio",
  },
  {
    Location: "38.7541714951,-88.4902374225",
    CountyGeoId: 17025,
    NAME: "Clay County",
  },
  {
    Location: "38.8279397207,-102.603395824",
    CountyGeoId: "08017",
    NAME: "Cheyenne County",
  },
  {
    Location: "41.9135060744,-100.555845619",
    CountyGeoId: 31171,
    NAME: "Thomas County",
  },
  {
    Location: "39.6052632661,-80.6390976036",
    CountyGeoId: 54103,
    NAME: "Wetzel County",
  },
  {
    Location: "41.7723266607,-91.1324230468",
    CountyGeoId: 19031,
    NAME: "Cedar County",
  },
  {
    Location: "34.1759559677,-85.6037937156",
    CountyGeoId: "01019",
    NAME: "Cherokee County",
  },
  {
    Location: "37.1041534526,-85.2806497629",
    CountyGeoId: 21001,
    NAME: "Adair County",
  },
  {
    Location: "33.6146250309,-101.299958451",
    CountyGeoId: 48107,
    NAME: "Crosby County",
  },
  {
    Location: "57.1797757863,-135.304965119",
    CountyGeoId: "02220",
    NAME: "Sitka City and Borough",
  },
  {
    Location: "39.5624202546,-75.9481069728",
    CountyGeoId: 24015,
    NAME: "Cecil County",
  },
  {
    Location: "18.4222580561,-66.0683255265",
    CountyGeoId: 72127,
    NAME: "San Juan Municipio",
  },
  {
    Location: "45.5860205994,-95.4444821595",
    CountyGeoId: 27121,
    NAME: "Pope County",
  },
  {
    Location: "33.4729092689,-88.4433134871",
    CountyGeoId: 28087,
    NAME: "Lowndes County",
  },
  {
    Location: "30.4982930281,-100.538187495",
    CountyGeoId: 48435,
    NAME: "Sutton County",
  },
  {
    Location: "35.6161390425,-95.3794738182",
    CountyGeoId: 40101,
    NAME: "Muskogee County",
  },
  {
    Location: "37.854663265,-76.3795212302",
    CountyGeoId: 51133,
    NAME: "Northumberland County",
  },
  {
    Location: "44.5794783729,-94.2321420772",
    CountyGeoId: 27143,
    NAME: "Sibley County",
  },
  {
    Location: "32.8812700424,-84.2993435146",
    CountyGeoId: 13293,
    NAME: "Upson County",
  },
  {
    Location: "35.3995733714,-110.321396004",
    CountyGeoId: "04017",
    NAME: "Navajo County",
  },
  {
    Location: "40.9118486723,-79.9132708157",
    CountyGeoId: 42019,
    NAME: "Butler County",
  },
  {
    Location: "31.3177325566,-95.4226771526",
    CountyGeoId: 48225,
    NAME: "Houston County",
  },
  {
    Location: "43.9784278928,-94.6140606084",
    CountyGeoId: 27165,
    NAME: "Watonwan County",
  },
  {
    Location: "38.9047737146,-77.0163026702",
    CountyGeoId: 11001,
    NAME: "District of Columbia",
  },
  {
    Location: "32.23625867,-98.2179667085",
    CountyGeoId: 48143,
    NAME: "Erath County",
  },
  {
    Location: "34.6020603325,-79.6787226224",
    CountyGeoId: 45069,
    NAME: "Marlboro County",
  },
  {
    Location: "34.2508713944,-97.2857880387",
    CountyGeoId: 40019,
    NAME: "Carter County",
  },
  {
    Location: "45.4299476083,-100.03155444",
    CountyGeoId: 46129,
    NAME: "Walworth County",
  },
  {
    Location: "34.2902311647,-98.3722432436",
    CountyGeoId: 40033,
    NAME: "Cotton County",
  },
  {
    Location: "42.4688224327,-90.8825218504",
    CountyGeoId: 19061,
    NAME: "Dubuque County",
  },
  {
    Location: "31.4574378292,-83.5265943229",
    CountyGeoId: 13277,
    NAME: "Tift County",
  },
  {
    Location: "41.7886677146,-76.5154525457",
    CountyGeoId: 42015,
    NAME: "Bradford County",
  },
  {
    Location: "39.0850981086,-74.8499770137",
    CountyGeoId: 34009,
    NAME: "Cape May County",
  },
  {
    Location: "43.1851621531,-124.093318775",
    CountyGeoId: 41011,
    NAME: "Coos County",
  },
  {
    Location: "37.1693060628,-94.8462689731",
    CountyGeoId: 20021,
    NAME: "Cherokee County",
  },
  {
    Location: "18.0973046656,-66.360169921",
    CountyGeoId: 72043,
    NAME: "Coamo Municipio",
  },
  {
    Location: "27.4267108244,-97.6683877685",
    CountyGeoId: 48273,
    NAME: "Kleberg County",
  },
  {
    Location: "40.7394701918,-93.3273638708",
    CountyGeoId: 19185,
    NAME: "Wayne County",
  },
  {
    Location: "29.8116835857,-84.8004565948",
    CountyGeoId: 12037,
    NAME: "Franklin County",
  },
  {
    Location: "40.1580424715,-90.6150952137",
    CountyGeoId: 17169,
    NAME: "Schuyler County",
  },
  {
    Location: "43.0901474299,-83.2217837238",
    CountyGeoId: 26087,
    NAME: "Lapeer County",
  },
  {
    Location: "32.3570482149,-80.6921989253",
    CountyGeoId: 45013,
    NAME: "Beaufort County",
  },
  {
    Location: "42.9537338684,-84.1467311037",
    CountyGeoId: 26155,
    NAME: "Shiawassee County",
  },
  {
    Location: "47.1242661519,-120.679683235",
    CountyGeoId: 53037,
    NAME: "Kittitas County",
  },
  {
    Location: "30.6609696648,-87.7498400784",
    CountyGeoId: "01003",
    NAME: "Baldwin County",
  },
  {
    Location: "36.6565173634,-81.2248910808",
    CountyGeoId: 51077,
    NAME: "Grayson County",
  },
  {
    Location: "38.6488155619,-84.6246133807",
    CountyGeoId: 21081,
    NAME: "Grant County",
  },
  {
    Location: "41.0146401139,-80.7762950605",
    CountyGeoId: 39099,
    NAME: "Mahoning County",
  },
  {
    Location: "39.1847403436,-83.6009720963",
    CountyGeoId: 39071,
    NAME: "Highland County",
  },
  {
    Location: "33.2642770248,-86.6606484037",
    CountyGeoId: "01117",
    NAME: "Shelby County",
  },
  {
    Location: "60.8490903436,-160.195267975",
    CountyGeoId: "02050",
    NAME: "Bethel Census Area",
  },
  {
    Location: "47.6069508739,-101.321804009",
    CountyGeoId: 38055,
    NAME: "McLean County",
  },
  {
    Location: "42.7331189884,-93.7351436616",
    CountyGeoId: 19197,
    NAME: "Wright County",
  },
  {
    Location: "34.2254421511,-89.0374096749",
    CountyGeoId: 28115,
    NAME: "Pontotoc County",
  },
  {
    Location: "43.9695394798,-89.7703977477",
    CountyGeoId: 55001,
    NAME: "Adams County",
  },
  {
    Location: "31.944249197,-92.6367652262",
    CountyGeoId: 22127,
    NAME: "Winn Parish",
  },
  {
    Location: "47.5231709536,-91.4088486044",
    CountyGeoId: 27075,
    NAME: "Lake County",
  },
  {
    Location: "31.6661684568,-91.8470716058",
    CountyGeoId: 22025,
    NAME: "Catahoula Parish",
  },
  {
    Location: "35.6388377895,-99.0015558433",
    CountyGeoId: 40039,
    NAME: "Custer County",
  },
  {
    Location: "37.8213415755,-107.300311758",
    CountyGeoId: "08053",
    NAME: "Hinsdale County",
  },
  {
    Location: "31.2142247537,-88.6391629414",
    CountyGeoId: 28041,
    NAME: "Greene County",
  },
  {
    Location: "35.9610853587,-95.5212091489",
    CountyGeoId: 40145,
    NAME: "Wagoner County",
  },
  {
    Location: "46.482373828,-94.0708780275",
    CountyGeoId: 27035,
    NAME: "Crow Wing County",
  },
  {
    Location: "39.9735467174,-90.247375054",
    CountyGeoId: 17017,
    NAME: "Cass County",
  },
  {
    Location: "35.9066686938,-94.9996891482",
    CountyGeoId: 40021,
    NAME: "Cherokee County",
  },
  {
    Location: "36.9935767676,-86.4237993498",
    CountyGeoId: 21227,
    NAME: "Warren County",
  },
  {
    Location: "42.0358492263,-92.9987713463",
    CountyGeoId: 19127,
    NAME: "Marshall County",
  },
  {
    Location: "31.095016693,-85.8389848955",
    CountyGeoId: "01061",
    NAME: "Geneva County",
  },
  {
    Location: "43.0672901279,-89.4181224369",
    CountyGeoId: 55025,
    NAME: "Dane County",
  },
  {
    Location: "42.3838803185,-93.2404024994",
    CountyGeoId: 19083,
    NAME: "Hardin County",
  },
  {
    Location: "37.5825228172,-106.38321036",
    CountyGeoId: "08105",
    NAME: "Rio Grande County",
  },
  {
    Location: "31.7163847519,-83.6240929756",
    CountyGeoId: 13287,
    NAME: "Turner County",
  },
  {
    Location: "31.3231861567,-103.693167266",
    CountyGeoId: 48389,
    NAME: "Reeves County",
  },
  {
    Location: "44.9035217224,-123.41325989",
    CountyGeoId: 41053,
    NAME: "Polk County",
  },
  {
    Location: "37.9469326633,-80.4529516077",
    CountyGeoId: 54025,
    NAME: "Greenbrier County",
  },
  {
    Location: "18.4572380901,-66.1905835491",
    CountyGeoId: 72137,
    NAME: "Toa Baja Municipio",
  },
  {
    Location: "33.5505241007,-90.3010646863",
    CountyGeoId: 28083,
    NAME: "Leflore County",
  },
  {
    Location: "30.7439606074,-94.0250850358",
    CountyGeoId: 48241,
    NAME: "Jasper County",
  },
  {
    Location: "35.4654508069,-96.3227791208",
    CountyGeoId: 40107,
    NAME: "Okfuskee County",
  },
  {
    Location: "39.6669293633,-121.600671735",
    CountyGeoId: "06007",
    NAME: "Butte County",
  },
  {
    Location: "33.5787842008,-83.1666552038",
    CountyGeoId: 13133,
    NAME: "Greene County",
  },
  {
    Location: "37.5457980664,-85.6979139347",
    CountyGeoId: 21123,
    NAME: "Larue County",
  },
  {
    Location: "40.7497715932,-86.8654694016",
    CountyGeoId: 18181,
    NAME: "White County",
  },
  {
    Location: "40.7541667046,-75.3075869515",
    CountyGeoId: 42095,
    NAME: "Northampton County",
  },
  {
    Location: "37.3723568684,-78.8125507413",
    CountyGeoId: 51011,
    NAME: "Appomattox County",
  },
  {
    Location: "39.9274146651,-77.7212449251",
    CountyGeoId: 42055,
    NAME: "Franklin County",
  },
  {
    Location: "37.3840412342,-89.6844539015",
    CountyGeoId: 29031,
    NAME: "Cape Girardeau County",
  },
  {
    Location: "36.8941807353,-87.4903805625",
    CountyGeoId: 21047,
    NAME: "Christian County",
  },
  {
    Location: "31.1610674632,-91.3109179158",
    CountyGeoId: 28157,
    NAME: "Wilkinson County",
  },
  {
    Location: "40.1764957551,-99.4046440743",
    CountyGeoId: 31083,
    NAME: "Harlan County",
  },
  {
    Location: "43.3804969625,-96.2102923903",
    CountyGeoId: 19119,
    NAME: "Lyon County",
  },
  {
    Location: "40.1400890018,-88.1991706674",
    CountyGeoId: 17019,
    NAME: "Champaign County",
  },
  {
    Location: "45.0045756364,-93.4768864968",
    CountyGeoId: 27053,
    NAME: "Hennepin County",
  },
  {
    Location: "40.9193457751,-77.8199601615",
    CountyGeoId: 42027,
    NAME: "Centre County",
  },
  {
    Location: "41.0297829981,-92.8689876816",
    CountyGeoId: 19135,
    NAME: "Monroe County",
  },
  {
    Location: "38.0039134141,-84.9910045711",
    CountyGeoId: 21005,
    NAME: "Anderson County",
  },
  {
    Location: "29.5003322407,-90.402594527",
    CountyGeoId: 22057,
    NAME: "Lafourche Parish",
  },
  {
    Location: "31.2253196926,-84.1943088346",
    CountyGeoId: 13205,
    NAME: "Mitchell County",
  },
  {
    Location: "46.2114698469,-107.271623165",
    CountyGeoId: 30103,
    NAME: "Treasure County",
  },
  {
    Location: "39.9695461474,-83.0092981418",
    CountyGeoId: 39049,
    NAME: "Franklin County",
  },
  {
    Location: "37.5291899516,-87.2636042463",
    CountyGeoId: 21149,
    NAME: "McLean County",
  },
  {
    Location: "35.1549608138,-86.0921752079",
    CountyGeoId: 47051,
    NAME: "Franklin County",
  },
  {
    Location: "41.1238795774,-83.1277054408",
    CountyGeoId: 39147,
    NAME: "Seneca County",
  },
  {
    Location: "48.2496100861,-99.9718051015",
    CountyGeoId: 38069,
    NAME: "Pierce County",
  },
  {
    Location: "42.7280755442,-77.7754915036",
    CountyGeoId: 36051,
    NAME: "Livingston County",
  },
  {
    Location: "44.0309090144,-73.1409413698",
    CountyGeoId: 50001,
    NAME: "Addison County",
  },
  {
    Location: "41.1393753356,-85.505117935",
    CountyGeoId: 18183,
    NAME: "Whitley County",
  },
  {
    Location: "34.8753989481,-89.9917699831",
    CountyGeoId: 28033,
    NAME: "DeSoto County",
  },
  {
    Location: "38.9086479451,-78.2084593587",
    CountyGeoId: 51187,
    NAME: "Warren County",
  },
  {
    Location: "33.6748549849,-80.7802801147",
    CountyGeoId: 45017,
    NAME: "Calhoun County",
  },
  {
    Location: "42.0879392632,-104.353264458",
    CountyGeoId: 56015,
    NAME: "Goshen County",
  },
  {
    Location: "45.5138551635,-69.9588160836",
    CountyGeoId: 23025,
    NAME: "Somerset County",
  },
  {
    Location: "36.7483050997,-102.517723689",
    CountyGeoId: 40025,
    NAME: "Cimarron County",
  },
  {
    Location: "41.397302247,-97.9922509137",
    CountyGeoId: 31125,
    NAME: "Nance County",
  },
  {
    Location: "31.8133256702,-95.6525471812",
    CountyGeoId: 48001,
    NAME: "Anderson County",
  },
  {
    Location: "39.4688295112,-74.6337304316",
    CountyGeoId: 34001,
    NAME: "Atlantic County",
  },
  {
    Location: "40.102614944,-106.118358313",
    CountyGeoId: "08049",
    NAME: "Grand County",
  },
  {
    Location: "40.8423638927,-83.3043780736",
    CountyGeoId: 39175,
    NAME: "Wyandot County",
  },
  {
    Location: "43.4266633846,-89.9482166667",
    CountyGeoId: 55111,
    NAME: "Sauk County",
  },
  {
    Location: "33.9153518869,-108.404762399",
    CountyGeoId: 35003,
    NAME: "Catron County",
  },
  {
    Location: "31.1968761426,-81.9818955745",
    CountyGeoId: 13025,
    NAME: "Brantley County",
  },
  {
    Location: "41.6438678779,-85.000764854",
    CountyGeoId: 18151,
    NAME: "Steuben County",
  },
  {
    Location: "30.0614838052,-99.3501597562",
    CountyGeoId: 48265,
    NAME: "Kerr County",
  },
  {
    Location: "44.1421798372,-120.35658095",
    CountyGeoId: 41013,
    NAME: "Crook County",
  },
  {
    Location: "44.022011363,-96.6709220275",
    CountyGeoId: 46101,
    NAME: "Moody County",
  },
  {
    Location: "28.4225359982,-99.756726125",
    CountyGeoId: 48127,
    NAME: "Dimmit County",
  },
  {
    Location: "34.7542368128,-91.8887898981",
    CountyGeoId: "05085",
    NAME: "Lonoke County",
  },
  {
    Location: "43.5541675519,-85.8009172937",
    CountyGeoId: 26123,
    NAME: "Newaygo County",
  },
  {
    Location: "46.0706237641,-94.8975993632",
    CountyGeoId: 27153,
    NAME: "Todd County",
  },
  {
    Location: "42.2847454761,-83.2611328686",
    CountyGeoId: 26163,
    NAME: "Wayne County",
  },
  {
    Location: "32.7413905566,-90.9892124114",
    CountyGeoId: 28055,
    NAME: "Issaquena County",
  },
  {
    Location: "38.803961942,-82.992831025",
    CountyGeoId: 39145,
    NAME: "Scioto County",
  },
  {
    Location: "37.7186360945,-76.8952824642",
    CountyGeoId: 51097,
    NAME: "King and Queen County",
  },
  {
    Location: "35.388366704,-85.7225823933",
    CountyGeoId: 47061,
    NAME: "Grundy County",
  },
  {
    Location: "44.4964021427,-75.0689522747",
    CountyGeoId: 36089,
    NAME: "St. Lawrence County",
  },
  {
    Location: "38.4493208547,-121.344253814",
    CountyGeoId: "06067",
    NAME: "Sacramento County",
  },
  {
    Location: "36.9316012682,-80.3625657303",
    CountyGeoId: 51063,
    NAME: "Floyd County",
  },
  {
    Location: "40.7352022993,-94.2439719124",
    CountyGeoId: 19159,
    NAME: "Ringgold County",
  },
  {
    Location: "37.9222809093,-83.2588931268",
    CountyGeoId: 21175,
    NAME: "Morgan County",
  },
  {
    Location: "25.6089674858,-80.4986673175",
    CountyGeoId: 12086,
    NAME: "Miami-Dade County",
  },
  {
    Location: "27.3433797347,-81.3410379056",
    CountyGeoId: 12055,
    NAME: "Highlands County",
  },
  {
    Location: "32.9043665122,-111.344739896",
    CountyGeoId: "04021",
    NAME: "Pinal County",
  },
  {
    Location: "38.6850699523,-85.7474680992",
    CountyGeoId: 18143,
    NAME: "Scott County",
  },
  {
    Location: "18.2890180067,-66.5164422149",
    CountyGeoId: 72039,
    NAME: "Ciales Municipio",
  },
  {
    Location: "29.5274926713,-95.7708885981",
    CountyGeoId: 48157,
    NAME: "Fort Bend County",
  },
  {
    Location: "36.0753604529,-119.815502709",
    CountyGeoId: "06031",
    NAME: "Kings County",
  },
  {
    Location: "35.9109060184,-92.6995245166",
    CountyGeoId: "05129",
    NAME: "Searcy County",
  },
  {
    Location: "39.3335754723,-87.7877174066",
    CountyGeoId: 17023,
    NAME: "Clark County",
  },
  {
    Location: "38.5188144389,-84.0520241975",
    CountyGeoId: 21201,
    NAME: "Robertson County",
  },
  {
    Location: "43.9049970086,-107.68286072",
    CountyGeoId: 56043,
    NAME: "Washakie County",
  },
  {
    Location: "36.3411216216,-76.1609504039",
    CountyGeoId: 37029,
    NAME: "Camden County",
  },
  {
    Location: "42.4520186799,-76.4736541298",
    CountyGeoId: 36109,
    NAME: "Tompkins County",
  },
  {
    Location: "41.1976566629,-103.714949912",
    CountyGeoId: 31105,
    NAME: "Kimball County",
  },
  {
    Location: "42.5950284307,-85.3089680839",
    CountyGeoId: 26015,
    NAME: "Barry County",
  },
  {
    Location: "32.7390025581,-108.382455769",
    CountyGeoId: 35017,
    NAME: "Grant County",
  },
  {
    Location: "39.5628541642,-77.0225227247",
    CountyGeoId: 24013,
    NAME: "Carroll County",
  },
  {
    Location: "40.4169344997,-77.9812075394",
    CountyGeoId: 42061,
    NAME: "Huntingdon County",
  },
  {
    Location: "35.6466064799,-95.9642646677",
    CountyGeoId: 40111,
    NAME: "Okmulgee County",
  },
  {
    Location: "47.4541905541,-97.1615544591",
    CountyGeoId: 38097,
    NAME: "Traill County",
  },
  {
    Location: "47.9737829027,-94.9376544511",
    CountyGeoId: 27007,
    NAME: "Beltrami County",
  },
  {
    Location: "39.3524140547,-93.9898835294",
    CountyGeoId: 29177,
    NAME: "Ray County",
  },
  {
    Location: "35.1675045158,-96.615493743",
    CountyGeoId: 40133,
    NAME: "Seminole County",
  },
  {
    Location: "36.6777445035,-76.3024182804",
    CountyGeoId: 51550,
    NAME: "Chesapeake city",
  },
  {
    Location: "46.4472370802,-103.4598757",
    CountyGeoId: 38087,
    NAME: "Slope County",
  },
  {
    Location: "35.4035078706,-101.354183029",
    CountyGeoId: 48065,
    NAME: "Carson County",
  },
  {
    Location: "29.9499595746,-82.1687777662",
    CountyGeoId: 12007,
    NAME: "Bradford County",
  },
  {
    Location: "31.2308171304,-89.8224429891",
    CountyGeoId: 28091,
    NAME: "Marion County",
  },
  {
    Location: "35.2066555213,-96.9483597747",
    CountyGeoId: 40125,
    NAME: "Pottawatomie County",
  },
  {
    Location: "40.74316347,-92.8686104167",
    CountyGeoId: 19007,
    NAME: "Appanoose County",
  },
  {
    Location: "32.699486303,-84.5330101769",
    CountyGeoId: 13263,
    NAME: "Talbot County",
  },
  {
    Location: "35.8386956734,-111.770512718",
    CountyGeoId: "04005",
    NAME: "Coconino County",
  },
  {
    Location: "35.8478552218,-84.5232421788",
    CountyGeoId: 47145,
    NAME: "Roane County",
  },
  {
    Location: "36.7142829107,-82.6029222713",
    CountyGeoId: 51169,
    NAME: "Scott County",
  },
  {
    Location: "38.7477765207,-111.804508601",
    CountyGeoId: 49041,
    NAME: "Sevier County",
  },
  {
    Location: "37.3543505785,-77.0591277659",
    CountyGeoId: 51036,
    NAME: "Charles City County",
  },
  {
    Location: "34.5741914782,-103.347029228",
    CountyGeoId: 35009,
    NAME: "Curry County",
  },
  {
    Location: "37.2804061385,-113.504711207",
    CountyGeoId: 49053,
    NAME: "Washington County",
  },
  {
    Location: "32.0466488616,-84.5510526557",
    CountyGeoId: 13307,
    NAME: "Webster County",
  },
  {
    Location: "42.6800090555,-89.6022219559",
    CountyGeoId: 55045,
    NAME: "Green County",
  },
  {
    Location: "40.4791367057,-94.4221022302",
    CountyGeoId: 29227,
    NAME: "Worth County",
  },
  {
    Location: "40.5158445871,-85.6547259036",
    CountyGeoId: 18053,
    NAME: "Grant County",
  },
  {
    Location: "43.1949168271,-101.663989111",
    CountyGeoId: 46007,
    NAME: "Bennett County",
  },
  {
    Location: "44.0221214974,-95.7632758339",
    CountyGeoId: 27101,
    NAME: "Murray County",
  },
  {
    Location: "39.177573113,-122.237029616",
    CountyGeoId: "06011",
    NAME: "Colusa County",
  },
  {
    Location: "43.2906788284,-91.8437036051",
    CountyGeoId: 19191,
    NAME: "Winneshiek County",
  },
  {
    Location: "29.9007722759,-91.0625868595",
    CountyGeoId: 22007,
    NAME: "Assumption Parish",
  },
  {
    Location: "31.8072288628,-81.4562556854",
    CountyGeoId: 13179,
    NAME: "Liberty County",
  },
  {
    Location: "36.7617766621,-95.2084741643",
    CountyGeoId: 40035,
    NAME: "Craig County",
  },
  {
    Location: "35.662042354,-81.2150705598",
    CountyGeoId: 37035,
    NAME: "Catawba County",
  },
  {
    Location: "34.3728526138,-98.924242239",
    CountyGeoId: 40141,
    NAME: "Tillman County",
  },
  {
    Location: "43.3108677533,-97.1486602361",
    CountyGeoId: 46125,
    NAME: "Turner County",
  },
  {
    Location: "47.7361089311,-119.691774627",
    CountyGeoId: 53017,
    NAME: "Douglas County",
  },
  {
    Location: "42.3230756866,-88.8233754157",
    CountyGeoId: 17007,
    NAME: "Boone County",
  },
  {
    Location: "39.7155561425,-90.2015195408",
    CountyGeoId: 17137,
    NAME: "Morgan County",
  },
  {
    Location: "42.4930987798,-96.8677208272",
    CountyGeoId: 31051,
    NAME: "Dixon County",
  },
  {
    Location: "42.633442368,-77.1054588564",
    CountyGeoId: 36123,
    NAME: "Yates County",
  },
  {
    Location: "34.5150997489,-77.8884355846",
    CountyGeoId: 37141,
    NAME: "Pender County",
  },
  {
    Location: "27.3808664203,-80.4456030776",
    CountyGeoId: 12111,
    NAME: "St. Lucie County",
  },
  {
    Location: "36.8834465874,-88.3293805253",
    CountyGeoId: 21157,
    NAME: "Marshall County",
  },
  {
    Location: "37.4553667663,-84.6608453633",
    CountyGeoId: 21137,
    NAME: "Lincoln County",
  },
  {
    Location: "34.9883574887,-80.5307400446",
    CountyGeoId: 37179,
    NAME: "Union County",
  },
  {
    Location: "43.6739283199,-93.947999339",
    CountyGeoId: 27043,
    NAME: "Faribault County",
  },
  {
    Location: "42.7356225783,-95.6238053959",
    CountyGeoId: 19035,
    NAME: "Cherokee County",
  },
  {
    Location: "44.3696796109,-96.7904210084",
    CountyGeoId: 46011,
    NAME: "Brookings County",
  },
  {
    Location: "39.132537495,-97.6502157692",
    CountyGeoId: 20143,
    NAME: "Ottawa County",
  },
  {
    Location: "38.7747231232,-79.8757955735",
    CountyGeoId: 54083,
    NAME: "Randolph County",
  },
  {
    Location: "30.331070985,-82.2845872684",
    CountyGeoId: 12003,
    NAME: "Baker County",
  },
  {
    Location: "40.2108261137,-75.3672936402",
    CountyGeoId: 42091,
    NAME: "Montgomery County",
  },
  {
    Location: "40.8620042241,-74.5445106674",
    CountyGeoId: 34027,
    NAME: "Morris County",
  },
  {
    Location: "40.7872147845,-74.2470601526",
    CountyGeoId: 34013,
    NAME: "Essex County",
  },
  {
    Location: "43.5812561668,-100.760002796",
    CountyGeoId: 46095,
    NAME: "Mellette County",
  },
  {
    Location: "30.0438391148,-82.3714410129",
    CountyGeoId: 12125,
    NAME: "Union County",
  },
  {
    Location: "43.3253855625,-77.0482433004",
    CountyGeoId: 36117,
    NAME: "Wayne County",
  },
  {
    Location: "40.1199573141,-111.670334914",
    CountyGeoId: 49049,
    NAME: "Utah County",
  },
  {
    Location: "40.6127008036,-75.5923694841",
    CountyGeoId: 42077,
    NAME: "Lehigh County",
  },
  {
    Location: "32.7921493696,-103.412478212",
    CountyGeoId: 35025,
    NAME: "Lea County",
  },
  {
    Location: "33.1814152277,-100.777569383",
    CountyGeoId: 48263,
    NAME: "Kent County",
  },
  {
    Location: "31.8491922008,-103.579899078",
    CountyGeoId: 48301,
    NAME: "Loving County",
  },
  {
    Location: "41.9154003329,-85.9934577475",
    CountyGeoId: 26027,
    NAME: "Cass County",
  },
  {
    Location: "30.8797727288,-91.4200286829",
    CountyGeoId: 22125,
    NAME: "West Feliciana Parish",
  },
  {
    Location: "27.4927094815,-81.8100059395",
    CountyGeoId: 12049,
    NAME: "Hardee County",
  },
  {
    Location: "37.4536881105,-96.2440866545",
    CountyGeoId: 20049,
    NAME: "Elk County",
  },
  {
    Location: "18.2247426881,-66.2218192621",
    CountyGeoId: 72045,
    NAME: "Comerío Municipio",
  },
  {
    Location: "41.4839220534,-91.1127562492",
    CountyGeoId: 19139,
    NAME: "Muscatine County",
  },
  {
    Location: "47.3567862566,-102.618205478",
    CountyGeoId: 38025,
    NAME: "Dunn County",
  },
  {
    Location: "36.3804933554,-84.932458522",
    CountyGeoId: 47049,
    NAME: "Fentress County",
  },
  {
    Location: "36.7018432696,-76.6340460041",
    CountyGeoId: 51800,
    NAME: "Suffolk city",
  },
  {
    Location: "38.8320890915,-104.525584561",
    CountyGeoId: "08041",
    NAME: "El Paso County",
  },
  {
    Location: "31.704803053,-98.110725849",
    CountyGeoId: 48193,
    NAME: "Hamilton County",
  },
  {
    Location: "32.5966480504,-86.1491465307",
    CountyGeoId: "01051",
    NAME: "Elmore County",
  },
  {
    Location: "32.2667019192,-90.4428211702",
    CountyGeoId: 28049,
    NAME: "Hinds County",
  },
  {
    Location: "45.367151587,-97.6074090049",
    CountyGeoId: 46037,
    NAME: "Day County",
  },
  {
    Location: "39.6400558465,-85.1787249608",
    CountyGeoId: 18041,
    NAME: "Fayette County",
  },
  {
    Location: "40.8725715098,-98.5021739966",
    CountyGeoId: 31079,
    NAME: "Hall County",
  },
  {
    Location: "40.8730327985,-98.0228653105",
    CountyGeoId: 31081,
    NAME: "Hamilton County",
  },
  {
    Location: "18.3686639331,-65.7121531688",
    CountyGeoId: 72089,
    NAME: "Luquillo Municipio",
  },
  {
    Location: "45.7916364577,-86.8705966508",
    CountyGeoId: 26041,
    NAME: "Delta County",
  },
  {
    Location: "34.225546386,-84.1250173789",
    CountyGeoId: 13117,
    NAME: "Forsyth County",
  },
  {
    Location: "26.1513412689,-97.4529680071",
    CountyGeoId: 48061,
    NAME: "Cameron County",
  },
  {
    Location: "38.3355978163,-84.0153305006",
    CountyGeoId: 21181,
    NAME: "Nicholas County",
  },
  {
    Location: "39.5804001016,-120.515996378",
    CountyGeoId: "06091",
    NAME: "Sierra County",
  },
  {
    Location: "39.5598830033,-83.4560972785",
    CountyGeoId: 39047,
    NAME: "Fayette County",
  },
  {
    Location: "37.4780954961,-90.3450261596",
    CountyGeoId: 29123,
    NAME: "Madison County",
  },
  {
    Location: "42.2573913511,-78.027560601",
    CountyGeoId: 36003,
    NAME: "Allegany County",
  },
  {
    Location: "42.0362382229,-94.8605592807",
    CountyGeoId: 19027,
    NAME: "Carroll County",
  },
  {
    Location: "43.9117268938,-69.8393089562",
    CountyGeoId: 23023,
    NAME: "Sagadahoc County",
  },
  {
    Location: "31.2547645833,-94.6118485462",
    CountyGeoId: 48005,
    NAME: "Angelina County",
  },
  {
    Location: "37.3623265574,-90.9690828337",
    CountyGeoId: 29179,
    NAME: "Reynolds County",
  },
  {
    Location: "41.60179891,-84.130079524",
    CountyGeoId: 39051,
    NAME: "Fulton County",
  },
  {
    Location: "35.9798606621,-85.832751654",
    CountyGeoId: 47041,
    NAME: "DeKalb County",
  },
  {
    Location: "46.9361064669,-98.07154012",
    CountyGeoId: 38003,
    NAME: "Barnes County",
  },
  {
    Location: "37.9922926916,-88.9241655023",
    CountyGeoId: 17055,
    NAME: "Franklin County",
  },
  {
    Location: "43.6746303972,-96.2532076471",
    CountyGeoId: 27133,
    NAME: "Rock County",
  },
  {
    Location: "39.634170806,-106.116379137",
    CountyGeoId: "08117",
    NAME: "Summit County",
  },
  {
    Location: "43.661121629,-74.4973551336",
    CountyGeoId: 36041,
    NAME: "Hamilton County",
  },
  {
    Location: "31.773206868,-99.4536376507",
    CountyGeoId: 48083,
    NAME: "Coleman County",
  },
  {
    Location: "34.965857001,-101.896944529",
    CountyGeoId: 48381,
    NAME: "Randall County",
  },
  {
    Location: "40.8553982409,-84.5860991255",
    CountyGeoId: 39161,
    NAME: "Van Wert County",
  },
  {
    Location: "39.6419410966,-83.0243916323",
    CountyGeoId: 39129,
    NAME: "Pickaway County",
  },
  {
    Location: "38.2145295036,-92.428407769",
    CountyGeoId: 29131,
    NAME: "Miller County",
  },
  {
    Location: "41.9957776876,-86.6854211599",
    CountyGeoId: 26021,
    NAME: "Berrien County",
  },
  {
    Location: "34.2376620909,-84.8403384771",
    CountyGeoId: 13015,
    NAME: "Bartow County",
  },
  {
    Location: "44.4888787662,-122.534995075",
    CountyGeoId: 41043,
    NAME: "Linn County",
  },
  {
    Location: "44.7462263534,-73.6781737453",
    CountyGeoId: 36019,
    NAME: "Clinton County",
  },
  {
    Location: "32.3050356596,-102.637815121",
    CountyGeoId: 48003,
    NAME: "Andrews County",
  },
  {
    Location: "36.2927208493,-82.1274783436",
    CountyGeoId: 47019,
    NAME: "Carter County",
  },
  {
    Location: "38.7386464353,-77.8092394301",
    CountyGeoId: 51061,
    NAME: "Fauquier County",
  },
  {
    Location: "41.7570882119,-71.0885008559",
    CountyGeoId: 25005,
    NAME: "Bristol County",
  },
  {
    Location: "35.9731784168,-88.4502607461",
    CountyGeoId: 47017,
    NAME: "Carroll County",
  },
  {
    Location: "30.0581505603,-98.0310632636",
    CountyGeoId: 48209,
    NAME: "Hays County",
  },
  {
    Location: "40.3016905964,-86.4751595355",
    CountyGeoId: 18023,
    NAME: "Clinton County",
  },
  {
    Location: "38.482169359,-100.906858956",
    CountyGeoId: 20171,
    NAME: "Scott County",
  },
  {
    Location: "35.695981462,-85.4526142035",
    CountyGeoId: 47175,
    NAME: "Van Buren County",
  },
  {
    Location: "36.2859716601,-87.7170356289",
    CountyGeoId: 47083,
    NAME: "Houston County",
  },
  {
    Location: "40.8460241928,-82.2706927711",
    CountyGeoId: 39005,
    NAME: "Ashland County",
  },
  {
    Location: "37.6804065048,-93.0236553896",
    CountyGeoId: 29059,
    NAME: "Dallas County",
  },
  {
    Location: "41.8300455104,-71.9874782796",
    CountyGeoId: "09015",
    NAME: "Windham County",
  },
  {
    Location: "40.4409599145,-81.4737695521",
    CountyGeoId: 39157,
    NAME: "Tuscarawas County",
  },
  {
    Location: "39.5288947088,-79.2729932831",
    CountyGeoId: 24023,
    NAME: "Garrett County",
  },
  {
    Location: "40.3926315712,-96.2650968936",
    CountyGeoId: 31097,
    NAME: "Johnson County",
  },
  {
    Location: "36.0611182361,-79.120649356",
    CountyGeoId: 37135,
    NAME: "Orange County",
  },
  {
    Location: "38.7718774775,-77.4450310796",
    CountyGeoId: 51685,
    NAME: "Manassas Park city",
  },
  {
    Location: "37.6243602285,-84.8668203815",
    CountyGeoId: 21021,
    NAME: "Boyle County",
  },
  {
    Location: "33.2158995718,-97.6544621205",
    CountyGeoId: 48497,
    NAME: "Wise County",
  },
  {
    Location: "45.4614199106,-92.4413959911",
    CountyGeoId: 55095,
    NAME: "Polk County",
  },
  {
    Location: "41.4266615572,-73.74951416",
    CountyGeoId: 36079,
    NAME: "Putnam County",
  },
  {
    Location: "29.3806620653,-89.4819150635",
    CountyGeoId: 22075,
    NAME: "Plaquemines Parish",
  },
  {
    Location: "18.3625469294,-66.2464232226",
    CountyGeoId: 72135,
    NAME: "Toa Alta Municipio",
  },
  {
    Location: "44.4160919594,-88.464932258",
    CountyGeoId: 55087,
    NAME: "Outagamie County",
  },
  {
    Location: "35.4011632567,-100.812558034",
    CountyGeoId: 48179,
    NAME: "Gray County",
  },
  {
    Location: "41.3531364976,-90.1314083142",
    CountyGeoId: 17073,
    NAME: "Henry County",
  },
  {
    Location: "39.3561681629,-90.3904985092",
    CountyGeoId: 17061,
    NAME: "Greene County",
  },
  {
    Location: "37.5121196812,-78.2449450925",
    CountyGeoId: 51049,
    NAME: "Cumberland County",
  },
  {
    Location: "33.6392003476,-97.2126261296",
    CountyGeoId: 48097,
    NAME: "Cooke County",
  },
  {
    Location: "44.3383668115,-85.5784138137",
    CountyGeoId: 26165,
    NAME: "Wexford County",
  },
  {
    Location: "26.5756896561,-81.9154527285",
    CountyGeoId: 12071,
    NAME: "Lee County",
  },
  {
    Location: "39.9724398254,-79.0282722626",
    CountyGeoId: 42111,
    NAME: "Somerset County",
  },
  {
    Location: "36.3586360305,-76.9807147831",
    CountyGeoId: 37091,
    NAME: "Hertford County",
  },
  {
    Location: "46.2527089623,-105.57171097",
    CountyGeoId: 30017,
    NAME: "Custer County",
  },
  {
    Location: "44.2842861611,-92.2302602596",
    CountyGeoId: 27157,
    NAME: "Wabasha County",
  },
  {
    Location: "47.7878782632,-104.561358367",
    CountyGeoId: 30083,
    NAME: "Richland County",
  },
  {
    Location: "39.1051348222,-79.195570287",
    CountyGeoId: 54023,
    NAME: "Grant County",
  },
  {
    Location: "42.2465394718,-85.0055834874",
    CountyGeoId: 26025,
    NAME: "Calhoun County",
  },
  {
    Location: "36.6291866782,-96.3984928926",
    CountyGeoId: 40113,
    NAME: "Osage County",
  },
  {
    Location: "36.6528169511,-90.8638843452",
    CountyGeoId: 29181,
    NAME: "Ripley County",
  },
  {
    Location: "62.3046703274,-149.580200458",
    CountyGeoId: "02170",
    NAME: "Matanuska-Susitna Borough",
  },
  {
    Location: "42.1212370657,-91.131465421",
    CountyGeoId: 19105,
    NAME: "Jones County",
  },
  {
    Location: "46.3813014184,-109.175062005",
    CountyGeoId: 30037,
    NAME: "Golden Valley County",
  },
  {
    Location: "36.0656302022,-76.9667121404",
    CountyGeoId: 37015,
    NAME: "Bertie County",
  },
  {
    Location: "47.589861371,-92.4614657054",
    CountyGeoId: 27137,
    NAME: "St. Louis County",
  },
  {
    Location: "38.448468036,-85.1189299735",
    CountyGeoId: 21103,
    NAME: "Henry County",
  },
  {
    Location: "43.7180195308,-98.5615628976",
    CountyGeoId: 46003,
    NAME: "Aurora County",
  },
  {
    Location: "39.0100394517,-88.1538411275",
    CountyGeoId: 17079,
    NAME: "Jasper County",
  },
  {
    Location: "45.4905020909,-102.475635949",
    CountyGeoId: 46105,
    NAME: "Perkins County",
  },
  {
    Location: "40.8488341603,-90.6150375695",
    CountyGeoId: 17187,
    NAME: "Warren County",
  },
  {
    Location: "31.704894074,-96.1490922947",
    CountyGeoId: 48161,
    NAME: "Freestone County",
  },
  {
    Location: "31.8310952481,-99.9762313036",
    CountyGeoId: 48399,
    NAME: "Runnels County",
  },
  {
    Location: "36.2774544717,-101.354539211",
    CountyGeoId: 48195,
    NAME: "Hansford County",
  },
  {
    Location: "37.222980428,-89.1265952453",
    CountyGeoId: 17153,
    NAME: "Pulaski County",
  },
  {
    Location: "37.5592414881,-95.7433888048",
    CountyGeoId: 20205,
    NAME: "Wilson County",
  },
  {
    Location: "31.7235401557,-93.0962433857",
    CountyGeoId: 22069,
    NAME: "Natchitoches Parish",
  },
  {
    Location: "45.5861252834,-96.0003022919",
    CountyGeoId: 27149,
    NAME: "Stevens County",
  },
  {
    Location: "32.7531803783,-98.31302138",
    CountyGeoId: 48363,
    NAME: "Palo Pinto County",
  },
  {
    Location: "37.2355230437,-99.8203076918",
    CountyGeoId: 20025,
    NAME: "Clark County",
  },
  {
    Location: "29.3573361783,-99.7622052768",
    CountyGeoId: 48463,
    NAME: "Uvalde County",
  },
  {
    Location: "30.0195666061,-83.6189726465",
    CountyGeoId: 12123,
    NAME: "Taylor County",
  },
  {
    Location: "43.0009332766,-78.1937114415",
    CountyGeoId: 36037,
    NAME: "Genesee County",
  },
  {
    Location: "40.5246661273,-97.5965014328",
    CountyGeoId: 31059,
    NAME: "Fillmore County",
  },
  {
    Location: "39.0888346851,-87.4146903866",
    CountyGeoId: 18153,
    NAME: "Sullivan County",
  },
  {
    Location: "44.0387746178,-106.584632792",
    CountyGeoId: 56019,
    NAME: "Johnson County",
  },
  {
    Location: "33.665806061,-80.2164049721",
    CountyGeoId: 45027,
    NAME: "Clarendon County",
  },
  {
    Location: "45.6690533298,-109.395216695",
    CountyGeoId: 30095,
    NAME: "Stillwater County",
  },
  {
    Location: "34.453472028,-86.8529215684",
    CountyGeoId: "01103",
    NAME: "Morgan County",
  },
  {
    Location: "37.7732676848,-86.4292775361",
    CountyGeoId: 21027,
    NAME: "Breckinridge County",
  },
  {
    Location: "28.0626646156,-81.1494997552",
    CountyGeoId: 12097,
    NAME: "Osceola County",
  },
  {
    Location: "38.8665005829,-97.152702787",
    CountyGeoId: 20041,
    NAME: "Dickinson County",
  },
  {
    Location: "35.4688611107,-86.7650174387",
    CountyGeoId: 47117,
    NAME: "Marshall County",
  },
  {
    Location: "41.177009812,-75.9890260819",
    CountyGeoId: 42079,
    NAME: "Luzerne County",
  },
  {
    Location: "38.3243487435,-110.903793031",
    CountyGeoId: 49055,
    NAME: "Wayne County",
  },
  {
    Location: "34.2514096075,-90.2891244706",
    CountyGeoId: 28119,
    NAME: "Quitman County",
  },
  {
    Location: "35.5069269541,-105.976273211",
    CountyGeoId: 35049,
    NAME: "Santa Fe County",
  },
  {
    Location: "33.6769134328,-117.776142822",
    CountyGeoId: "06059",
    NAME: "Orange County",
  },
  {
    Location: "35.8400259746,-101.354699396",
    CountyGeoId: 48233,
    NAME: "Hutchinson County",
  },
  {
    Location: "42.4935106026,-75.6115785175",
    CountyGeoId: 36017,
    NAME: "Chenango County",
  },
  {
    Location: "39.9710617874,-103.201252881",
    CountyGeoId: "08121",
    NAME: "Washington County",
  },
  {
    Location: "32.3750354288,-95.2691826825",
    CountyGeoId: 48423,
    NAME: "Smith County",
  },
  {
    Location: "36.9655811681,-85.9336633247",
    CountyGeoId: 21009,
    NAME: "Barren County",
  },
  {
    Location: "37.205360404,-79.0965107022",
    CountyGeoId: 51031,
    NAME: "Campbell County",
  },
  {
    Location: "38.6956276543,-84.3602721797",
    CountyGeoId: 21191,
    NAME: "Pendleton County",
  },
  {
    Location: "18.3170844647,-66.4202927626",
    CountyGeoId: 72101,
    NAME: "Morovis Municipio",
  },
  {
    Location: "29.8119497744,-103.251755856",
    CountyGeoId: 48043,
    NAME: "Brewster County",
  },
  {
    Location: "18.2370904175,-66.9834149992",
    CountyGeoId: 72083,
    NAME: "Las Marías Municipio",
  },
  {
    Location: "35.611177887,-82.5301070587",
    CountyGeoId: 37021,
    NAME: "Buncombe County",
  },
  {
    Location: "18.0071198462,-66.7971292026",
    CountyGeoId: 72059,
    NAME: "Guayanilla Municipio",
  },
  {
    Location: "36.2611569307,-87.0867695023",
    CountyGeoId: 47021,
    NAME: "Cheatham County",
  },
  {
    Location: "38.0371780097,-93.775975762",
    CountyGeoId: 29185,
    NAME: "St. Clair County",
  },
  {
    Location: "43.9246050918,-90.1137916425",
    CountyGeoId: 55057,
    NAME: "Juneau County",
  },
  {
    Location: "42.6367815449,-97.8918968398",
    CountyGeoId: 31107,
    NAME: "Knox County",
  },
  {
    Location: "41.9103521337,-81.250939242",
    CountyGeoId: 39085,
    NAME: "Lake County",
  },
  {
    Location: "37.1169121603,-76.88830957",
    CountyGeoId: 51181,
    NAME: "Surry County",
  },
  {
    Location: "32.3583825945,-84.0424794131",
    CountyGeoId: 13193,
    NAME: "Macon County",
  },
  {
    Location: "43.386924164,-98.3660983597",
    CountyGeoId: 46043,
    NAME: "Douglas County",
  },
  {
    Location: "41.7224295706,-111.743622083",
    CountyGeoId: 49005,
    NAME: "Cache County",
  },
  {
    Location: "30.7817272016,-82.1376881412",
    CountyGeoId: 13049,
    NAME: "Charlton County",
  },
  {
    Location: "38.7440854857,-93.8063674936",
    CountyGeoId: 29101,
    NAME: "Johnson County",
  },
  {
    Location: "38.1086779015,-105.367471778",
    CountyGeoId: "08027",
    NAME: "Custer County",
  },
  {
    Location: "34.6402420514,-79.1038649277",
    CountyGeoId: 37155,
    NAME: "Robeson County",
  },
  {
    Location: "43.7841402516,-111.659188485",
    CountyGeoId: 16065,
    NAME: "Madison County",
  },
  {
    Location: "67.0081724432,-160.006978537",
    CountyGeoId: "02188",
    NAME: "Northwest Arctic Borough",
  },
  {
    Location: "36.7888025423,-99.6674010729",
    CountyGeoId: 40059,
    NAME: "Harper County",
  },
  {
    Location: "33.2836981018,-90.9474546435",
    CountyGeoId: 28151,
    NAME: "Washington County",
  },
  {
    Location: "41.7734492735,-70.2381374923",
    CountyGeoId: 25001,
    NAME: "Barnstable County",
  },
  {
    Location: "33.6672620503,-95.5712007054",
    CountyGeoId: 48277,
    NAME: "Lamar County",
  },
  {
    Location: "40.1762352358,-101.687961438",
    CountyGeoId: 31057,
    NAME: "Dundy County",
  },
  {
    Location: "33.9931962064,-83.7127549805",
    CountyGeoId: 13013,
    NAME: "Barrow County",
  },
  {
    Location: "35.486983815,-76.8453144055",
    CountyGeoId: 37013,
    NAME: "Beaufort County",
  },
  {
    Location: "44.9694591011,-67.6090594873",
    CountyGeoId: 23029,
    NAME: "Washington County",
  },
  {
    Location: "32.5481331978,-94.3714865548",
    CountyGeoId: 48203,
    NAME: "Harrison County",
  },
  {
    Location: "45.8441976984,-115.46748731",
    CountyGeoId: 16049,
    NAME: "Idaho County",
  },
  {
    Location: "41.6864421928,-92.531468397",
    CountyGeoId: 19157,
    NAME: "Poweshiek County",
  },
  {
    Location: "40.8288491598,-81.8880189942",
    CountyGeoId: 39169,
    NAME: "Wayne County",
  },
  {
    Location: "40.597165174,-88.2232738465",
    CountyGeoId: 17053,
    NAME: "Ford County",
  },
  {
    Location: "30.8450707709,-91.0455350736",
    CountyGeoId: 22037,
    NAME: "East Feliciana Parish",
  },
  {
    Location: "37.7065960005,-77.0885455088",
    CountyGeoId: 51101,
    NAME: "King William County",
  },
  {
    Location: "48.561754652,-111.024580148",
    CountyGeoId: 30051,
    NAME: "Liberty County",
  },
  {
    Location: "46.4569158173,-98.5354613133",
    CountyGeoId: 38045,
    NAME: "LaMoure County",
  },
  {
    Location: "43.7229327365,-113.172032247",
    CountyGeoId: 16023,
    NAME: "Butte County",
  },
  {
    Location: "36.2311062795,-81.6964250718",
    CountyGeoId: 37189,
    NAME: "Watauga County",
  },
  {
    Location: "39.4970238369,-82.4792535623",
    CountyGeoId: 39073,
    NAME: "Hocking County",
  },
  {
    Location: "39.2111317394,-81.514965317",
    CountyGeoId: 54107,
    NAME: "Wood County",
  },
  {
    Location: "44.5059941907,-87.3072532822",
    CountyGeoId: 55061,
    NAME: "Kewaunee County",
  },
  {
    Location: "38.1178916805,-83.0976163428",
    CountyGeoId: 21063,
    NAME: "Elliott County",
  },
  {
    Location: "32.4177916678,-91.7634818429",
    CountyGeoId: 22083,
    NAME: "Richland Parish",
  },
  {
    Location: "29.8317429384,-99.8221669212",
    CountyGeoId: 48385,
    NAME: "Real County",
  },
  {
    Location: "34.8414378315,-116.17846142",
    CountyGeoId: "06071",
    NAME: "San Bernardino County",
  },
  {
    Location: "34.8873453574,-82.725248963",
    CountyGeoId: 45077,
    NAME: "Pickens County",
  },
  {
    Location: "39.7847320849,-98.2183408742",
    CountyGeoId: 20089,
    NAME: "Jewell County",
  },
  {
    Location: "35.0025779761,-93.4112514229",
    CountyGeoId: "05149",
    NAME: "Yell County",
  },
  {
    Location: "37.8315338847,-81.9353404844",
    CountyGeoId: 54045,
    NAME: "Logan County",
  },
  {
    Location: "37.3142565856,-80.702936854",
    CountyGeoId: 51071,
    NAME: "Giles County",
  },
  {
    Location: "48.0460953466,-121.722346726",
    CountyGeoId: 53061,
    NAME: "Snohomish County",
  },
  {
    Location: "33.0548441405,-82.4181514496",
    CountyGeoId: 13163,
    NAME: "Jefferson County",
  },
  {
    Location: "40.5148205338,-99.8307042877",
    CountyGeoId: 31073,
    NAME: "Gosper County",
  },
  {
    Location: "41.9388566679,-88.4286377038",
    CountyGeoId: 17089,
    NAME: "Kane County",
  },
  {
    Location: "48.771256978,-94.9045482536",
    CountyGeoId: 27077,
    NAME: "Lake of the Woods County",
  },
  {
    Location: "32.7134544164,-93.3349833098",
    CountyGeoId: 22119,
    NAME: "Webster Parish",
  },
  {
    Location: "37.9550855775,-103.071704571",
    CountyGeoId: "08011",
    NAME: "Bent County",
  },
  {
    Location: "31.7924089362,-94.1450175185",
    CountyGeoId: 48419,
    NAME: "Shelby County",
  },
  {
    Location: "40.4103560325,-91.7383967271",
    CountyGeoId: 29045,
    NAME: "Clark County",
  },
  {
    Location: "33.0922652469,-84.3892346459",
    CountyGeoId: 13231,
    NAME: "Pike County",
  },
  {
    Location: "40.2875173476,-74.1582023922",
    CountyGeoId: 34025,
    NAME: "Monmouth County",
  },
  {
    Location: "36.4082132934,-94.8026575137",
    CountyGeoId: 40041,
    NAME: "Delaware County",
  },
  {
    Location: "45.4005123213,-68.6494281289",
    CountyGeoId: 23019,
    NAME: "Penobscot County",
  },
  {
    Location: "30.6480415096,-97.6007621039",
    CountyGeoId: 48491,
    NAME: "Williamson County",
  },
  {
    Location: "33.3596322314,-82.0735477739",
    CountyGeoId: 13245,
    NAME: "Richmond County",
  },
  {
    Location: "42.1174762417,-80.0981063578",
    CountyGeoId: 42049,
    NAME: "Erie County",
  },
  {
    Location: "37.3088201365,-87.540842137",
    CountyGeoId: 21107,
    NAME: "Hopkins County",
  },
  {
    Location: "18.287078989,-67.1315302779",
    CountyGeoId: 72011,
    NAME: "Añasco Municipio",
  },
  {
    Location: "43.6407681919,-85.3246335487",
    CountyGeoId: 26107,
    NAME: "Mecosta County",
  },
  {
    Location: "31.7742624158,-98.999794176",
    CountyGeoId: 48049,
    NAME: "Brown County",
  },
  {
    Location: "39.0224214624,-81.3786238259",
    CountyGeoId: 54105,
    NAME: "Wirt County",
  },
  {
    Location: "43.8738459397,-71.2029939175",
    CountyGeoId: 33003,
    NAME: "Carroll County",
  },
  {
    Location: "39.2157556331,-91.84158588",
    CountyGeoId: 29007,
    NAME: "Audrain County",
  },
  {
    Location: "31.6766595802,-87.8308098507",
    CountyGeoId: "01025",
    NAME: "Clarke County",
  },
  {
    Location: "41.5778862866,-96.6539833969",
    CountyGeoId: 31053,
    NAME: "Dodge County",
  },
  {
    Location: "34.5998564246,-112.553944833",
    CountyGeoId: "04025",
    NAME: "Yavapai County",
  },
  {
    Location: "35.1839946708,-89.8955956151",
    CountyGeoId: 47157,
    NAME: "Shelby County",
  },
  {
    Location: "40.7455891853,-95.6046765408",
    CountyGeoId: 19071,
    NAME: "Fremont County",
  },
  {
    Location: "45.064501565,-99.9572518743",
    CountyGeoId: 46107,
    NAME: "Potter County",
  },
  {
    Location: "35.1405167444,-86.5889416254",
    CountyGeoId: 47103,
    NAME: "Lincoln County",
  },
  {
    Location: "40.8727457976,-97.5971068674",
    CountyGeoId: 31185,
    NAME: "York County",
  },
  {
    Location: "36.1695295563,-86.7848240917",
    CountyGeoId: 47037,
    NAME: "Davidson County",
  },
  {
    Location: "44.5473945862,-99.4871292548",
    CountyGeoId: 46069,
    NAME: "Hyde County",
  },
  {
    Location: "34.1277855795,-83.2090415694",
    CountyGeoId: 13195,
    NAME: "Madison County",
  },
  {
    Location: "46.2298432372,-118.47840308",
    CountyGeoId: 53071,
    NAME: "Walla Walla County",
  },
  {
    Location: "17.9791005078,-67.0428558452",
    CountyGeoId: 72079,
    NAME: "Lajas Municipio",
  },
  {
    Location: "34.3951111298,-81.1212291623",
    CountyGeoId: 45039,
    NAME: "Fairfield County",
  },
  {
    Location: "33.0395904342,-115.365336962",
    CountyGeoId: "06025",
    NAME: "Imperial County",
  },
  {
    Location: "39.6785303915,-87.7455648767",
    CountyGeoId: 17045,
    NAME: "Edgar County",
  },
  {
    Location: "46.9792551456,-98.958838067",
    CountyGeoId: 38093,
    NAME: "Stutsman County",
  },
  {
    Location: "36.6660406992,-80.9175879894",
    CountyGeoId: 51640,
    NAME: "Galax city",
  },
  {
    Location: "33.6164757788,-100.255850072",
    CountyGeoId: 48269,
    NAME: "King County",
  },
  {
    Location: "47.3252360192,-95.8090496343",
    CountyGeoId: 27087,
    NAME: "Mahnomen County",
  },
  {
    Location: "30.6105780997,-81.7714179132",
    CountyGeoId: 12089,
    NAME: "Nassau County",
  },
  {
    Location: "38.3994422236,-85.4483655316",
    CountyGeoId: 21185,
    NAME: "Oldham County",
  },
  {
    Location: "34.2439383654,-84.4761934266",
    CountyGeoId: 13057,
    NAME: "Cherokee County",
  },
  {
    Location: "44.4609805861,-73.0809205876",
    CountyGeoId: 50007,
    NAME: "Chittenden County",
  },
  {
    Location: "38.7080111869,-86.8030654716",
    CountyGeoId: 18101,
    NAME: "Martin County",
  },
  {
    Location: "31.0888152015,-95.1355105473",
    CountyGeoId: 48455,
    NAME: "Trinity County",
  },
  {
    Location: "45.7791445679,-122.482577988",
    CountyGeoId: 53011,
    NAME: "Clark County",
  },
  {
    Location: "45.6803836844,-90.3614492328",
    CountyGeoId: 55099,
    NAME: "Price County",
  },
  {
    Location: "47.1471983625,-114.998338744",
    CountyGeoId: 30061,
    NAME: "Mineral County",
  },
  {
    Location: "40.478908401,-93.0161267941",
    CountyGeoId: 29171,
    NAME: "Putnam County",
  },
  {
    Location: "37.9413779683,-83.5988719199",
    CountyGeoId: 21165,
    NAME: "Menifee County",
  },
  {
    Location: "33.2878507429,-83.9571695116",
    CountyGeoId: 13035,
    NAME: "Butts County",
  },
  {
    Location: "39.2865595002,-104.13588983",
    CountyGeoId: "08039",
    NAME: "Elbert County",
  },
  {
    Location: "42.7745872458,-92.3180548339",
    CountyGeoId: 19017,
    NAME: "Bremer County",
  },
  {
    Location: "37.6066301658,-91.5078826618",
    CountyGeoId: 29065,
    NAME: "Dent County",
  },
  {
    Location: "38.7282893735,-93.2850962929",
    CountyGeoId: 29159,
    NAME: "Pettis County",
  },
  {
    Location: "32.7362765372,-94.9414845344",
    CountyGeoId: 48459,
    NAME: "Upshur County",
  },
  {
    Location: "37.378523092,-77.5869258358",
    CountyGeoId: 51041,
    NAME: "Chesterfield County",
  },
  {
    Location: "36.4285385751,-84.5035173074",
    CountyGeoId: 47151,
    NAME: "Scott County",
  },
  {
    Location: "35.38741848,-120.452196945",
    CountyGeoId: "06079",
    NAME: "San Luis Obispo County",
  },
  {
    Location: "42.5449323085,-101.118576892",
    CountyGeoId: 31031,
    NAME: "Cherry County",
  },
  {
    Location: "41.6322534258,-111.244509797",
    CountyGeoId: 49033,
    NAME: "Rich County",
  },
  {
    Location: "37.1502697208,-76.2705623776",
    CountyGeoId: 51735,
    NAME: "Poquoson city",
  },
  {
    Location: "37.8777875638,-96.2326356698",
    CountyGeoId: 20073,
    NAME: "Greenwood County",
  },
  {
    Location: "43.8201324535,-112.311302461",
    CountyGeoId: 16051,
    NAME: "Jefferson County",
  },
  {
    Location: "43.9065519065,-91.1151957557",
    CountyGeoId: 55063,
    NAME: "La Crosse County",
  },
  {
    Location: "36.4816684795,-103.470970513",
    CountyGeoId: 35059,
    NAME: "Union County",
  },
  {
    Location: "37.764043073,-107.676147275",
    CountyGeoId: "08111",
    NAME: "San Juan County",
  },
  {
    Location: "42.4279491681,-94.1817743675",
    CountyGeoId: 19187,
    NAME: "Webster County",
  },
  {
    Location: "36.730988911,-98.3239781797",
    CountyGeoId: 40003,
    NAME: "Alfalfa County",
  },
  {
    Location: "43.4433116085,-82.6457538571",
    CountyGeoId: 26151,
    NAME: "Sanilac County",
  },
  {
    Location: "34.8172864604,-89.1884754842",
    CountyGeoId: 28009,
    NAME: "Benton County",
  },
  {
    Location: "29.7258227162,-82.8003665306",
    CountyGeoId: 12041,
    NAME: "Gilchrist County",
  },
  {
    Location: "37.9551831858,-102.393348977",
    CountyGeoId: "08099",
    NAME: "Prowers County",
  },
  {
    Location: "44.4917990421,-123.429249066",
    CountyGeoId: 41003,
    NAME: "Benton County",
  },
  {
    Location: "32.6016373737,-92.6648152839",
    CountyGeoId: 22061,
    NAME: "Lincoln Parish",
  },
  {
    Location: "44.9804118511,-101.665858437",
    CountyGeoId: 46137,
    NAME: "Ziebach County",
  },
  {
    Location: "33.2895498464,-87.525029952",
    CountyGeoId: "01125",
    NAME: "Tuscaloosa County",
  },
  {
    Location: "41.4673285687,-90.5674126031",
    CountyGeoId: 17161,
    NAME: "Rock Island County",
  },
  {
    Location: "40.761491497,-86.3459465589",
    CountyGeoId: 18017,
    NAME: "Cass County",
  },
  {
    Location: "42.6936561133,-112.840655966",
    CountyGeoId: 16077,
    NAME: "Power County",
  },
  {
    Location: "34.2687844437,-91.9315146225",
    CountyGeoId: "05069",
    NAME: "Jefferson County",
  },
  {
    Location: "29.4489578348,-98.5200258895",
    CountyGeoId: 48029,
    NAME: "Bexar County",
  },
  {
    Location: "44.7155640273,-100.132245565",
    CountyGeoId: 46119,
    NAME: "Sully County",
  },
  {
    Location: "45.1739317274,-93.9630531168",
    CountyGeoId: 27171,
    NAME: "Wright County",
  },
  {
    Location: "29.9121811706,-81.4098866827",
    CountyGeoId: 12109,
    NAME: "St. Johns County",
  },
  {
    Location: "39.925343626,-78.1126836616",
    CountyGeoId: 42057,
    NAME: "Fulton County",
  },
  {
    Location: "39.3514336872,-101.719980701",
    CountyGeoId: 20181,
    NAME: "Sherman County",
  },
  {
    Location: "42.2765197661,-74.1227065013",
    CountyGeoId: 36039,
    NAME: "Greene County",
  },
  {
    Location: "32.7325534614,-91.2350651111",
    CountyGeoId: 22035,
    NAME: "East Carroll Parish",
  },
  {
    Location: "34.0724245507,-101.303234519",
    CountyGeoId: 48153,
    NAME: "Floyd County",
  },
  {
    Location: "47.3264761642,-96.4552777398",
    CountyGeoId: 27107,
    NAME: "Norman County",
  },
  {
    Location: "28.7614688332,-81.7113031676",
    CountyGeoId: 12069,
    NAME: "Lake County",
  },
  {
    Location: "43.9868496601,-91.779129433",
    CountyGeoId: 27169,
    NAME: "Winona County",
  },
  {
    Location: "29.9826329444,-100.304741702",
    CountyGeoId: 48137,
    NAME: "Edwards County",
  },
  {
    Location: "42.0789535271,-91.5990228598",
    CountyGeoId: 19113,
    NAME: "Linn County",
  },
  {
    Location: "37.938990343,-118.886709262",
    CountyGeoId: "06051",
    NAME: "Mono County",
  },
  {
    Location: "41.9143570712,-98.9913852808",
    CountyGeoId: 31071,
    NAME: "Garfield County",
  },
  {
    Location: "48.8148829805,-103.48733562",
    CountyGeoId: 38023,
    NAME: "Divide County",
  },
  {
    Location: "41.3344518776,-93.0994371546",
    CountyGeoId: 19125,
    NAME: "Marion County",
  },
  {
    Location: "45.1566160513,-100.871863039",
    CountyGeoId: 46041,
    NAME: "Dewey County",
  },
  {
    Location: "42.2643746213,-97.6012905205",
    CountyGeoId: 31139,
    NAME: "Pierce County",
  },
  {
    Location: "32.3533781815,-84.5246378869",
    CountyGeoId: 13197,
    NAME: "Marion County",
  },
  {
    Location: "42.3658182043,-90.2125952059",
    CountyGeoId: 17085,
    NAME: "Jo Daviess County",
  },
  {
    Location: "46.096820597,-102.528498668",
    CountyGeoId: 38001,
    NAME: "Adams County",
  },
  {
    Location: "40.495294012,-78.7137032852",
    CountyGeoId: 42021,
    NAME: "Cambria County",
  },
  {
    Location: "39.4306386001,-87.3899644539",
    CountyGeoId: 18167,
    NAME: "Vigo County",
  },
  {
    Location: "42.5950071515,-76.0702669072",
    CountyGeoId: 36023,
    NAME: "Cortland County",
  },
  {
    Location: "41.6426062358,-85.4264979093",
    CountyGeoId: 18087,
    NAME: "LaGrange County",
  },
  {
    Location: "30.7093956955,-91.6007888442",
    CountyGeoId: 22077,
    NAME: "Pointe Coupee Parish",
  },
  {
    Location: "32.3968141786,-81.7431781429",
    CountyGeoId: 13031,
    NAME: "Bulloch County",
  },
  {
    Location: "31.4561406891,-105.386456079",
    CountyGeoId: 48229,
    NAME: "Hudspeth County",
  },
  {
    Location: "44.6718744229,-93.0654245878",
    CountyGeoId: 27037,
    NAME: "Dakota County",
  },
  {
    Location: "41.0277303995,-94.2423791547",
    CountyGeoId: 19175,
    NAME: "Union County",
  },
  {
    Location: "36.1753512461,-82.8458266599",
    CountyGeoId: 47059,
    NAME: "Greene County",
  },
  {
    Location: "42.0362414924,-93.4650447654",
    CountyGeoId: 19169,
    NAME: "Story County",
  },
  {
    Location: "45.2115438874,-90.5012525364",
    CountyGeoId: 55119,
    NAME: "Taylor County",
  },
  {
    Location: "45.6991358622,-93.9988297843",
    CountyGeoId: 27009,
    NAME: "Benton County",
  },
  {
    Location: "35.5515100533,-97.4072328405",
    CountyGeoId: 40109,
    NAME: "Oklahoma County",
  },
  {
    Location: "45.3782690825,-120.210685268",
    CountyGeoId: 41021,
    NAME: "Gilliam County",
  },
  {
    Location: "42.0425663561,-89.3207266558",
    CountyGeoId: 17141,
    NAME: "Ogle County",
  },
  {
    Location: "40.5310649083,-77.4021626656",
    CountyGeoId: 42067,
    NAME: "Juniata County",
  },
  {
    Location: "36.7581801263,-119.649322632",
    CountyGeoId: "06019",
    NAME: "Fresno County",
  },
  {
    Location: "31.8696032448,-85.3931969755",
    CountyGeoId: "01005",
    NAME: "Barbour County",
  },
  {
    Location: "33.7453078269,-105.459295871",
    CountyGeoId: 35027,
    NAME: "Lincoln County",
  },
  {
    Location: "32.7864051416,-95.3820619748",
    CountyGeoId: 48499,
    NAME: "Wood County",
  },
  {
    Location: "35.8694070017,-76.1704523585",
    CountyGeoId: 37177,
    NAME: "Tyrrell County",
  },
  {
    Location: "35.9932063802,-83.9370903322",
    CountyGeoId: 47093,
    NAME: "Knox County",
  },
  {
    Location: "17.9733883474,-66.1363432071",
    CountyGeoId: 72057,
    NAME: "Guayama Municipio",
  },
  {
    Location: "43.6747378332,-98.1459868879",
    CountyGeoId: 46035,
    NAME: "Davison County",
  },
  {
    Location: "39.4652776369,-80.8848251911",
    CountyGeoId: 54095,
    NAME: "Tyler County",
  },
  {
    Location: "32.7428202205,-100.402168105",
    CountyGeoId: 48151,
    NAME: "Fisher County",
  },
  {
    Location: "32.2322990847,-83.4759611368",
    CountyGeoId: 13235,
    NAME: "Pulaski County",
  },
  {
    Location: "31.3264967359,-99.8639623316",
    CountyGeoId: 48095,
    NAME: "Concho County",
  },
  {
    Location: "31.5492717947,-82.8492009827",
    CountyGeoId: 13069,
    NAME: "Coffee County",
  },
  {
    Location: "37.7649390453,-75.7565570848",
    CountyGeoId: 51001,
    NAME: "Accomack County",
  },
  {
    Location: "44.0816034654,-88.2180579882",
    CountyGeoId: 55015,
    NAME: "Calumet County",
  },
  {
    Location: "48.6553582885,-111.695670939",
    CountyGeoId: 30101,
    NAME: "Toole County",
  },
  {
    Location: "32.2616858077,-84.3147208166",
    CountyGeoId: 13249,
    NAME: "Schley County",
  },
  {
    Location: "38.3020458533,-96.593928638",
    CountyGeoId: 20017,
    NAME: "Chase County",
  },
  {
    Location: "32.013224335,-81.4424722248",
    CountyGeoId: 13029,
    NAME: "Bryan County",
  },
  {
    Location: "39.2357647667,-95.383448733",
    CountyGeoId: 20087,
    NAME: "Jefferson County",
  },
  {
    Location: "39.3280985807,-75.1293182687",
    CountyGeoId: 34011,
    NAME: "Cumberland County",
  },
  {
    Location: "43.3109397092,-85.15248111",
    CountyGeoId: 26117,
    NAME: "Montcalm County",
  },
  {
    Location: "33.7714324565,-85.8260308543",
    CountyGeoId: "01015",
    NAME: "Calhoun County",
  },
  {
    Location: "38.9464767816,-84.3796958206",
    CountyGeoId: 21037,
    NAME: "Campbell County",
  },
  {
    Location: "41.7924983178,-73.2453207905",
    CountyGeoId: "09005",
    NAME: "Litchfield County",
  },
  {
    Location: "38.8297122608,-89.90499843",
    CountyGeoId: 17119,
    NAME: "Madison County",
  },
  {
    Location: "46.2369933896,-116.426326116",
    CountyGeoId: 16061,
    NAME: "Lewis County",
  },
  {
    Location: "43.7213655935,-83.9418350885",
    CountyGeoId: 26017,
    NAME: "Bay County",
  },
  {
    Location: "45.8738054472,-120.789207302",
    CountyGeoId: 53039,
    NAME: "Klickitat County",
  },
  {
    Location: "29.3374418892,-90.8376399064",
    CountyGeoId: 22109,
    NAME: "Terrebonne Parish",
  },
  {
    Location: "38.1128050013,-76.7998633255",
    CountyGeoId: 51193,
    NAME: "Westmoreland County",
  },
  {
    Location: "34.0887429323,-93.9934933573",
    CountyGeoId: "05061",
    NAME: "Howard County",
  },
  {
    Location: "29.17400609,-98.0865732835",
    CountyGeoId: 48493,
    NAME: "Wilson County",
  },
  {
    Location: "57.6602871351,-153.749160002",
    CountyGeoId: "02150",
    NAME: "Kodiak Island Borough",
  },
  {
    Location: "40.561195332,-81.9293594987",
    CountyGeoId: 39075,
    NAME: "Holmes County",
  },
  {
    Location: "44.3890320927,-99.9960503842",
    CountyGeoId: 46065,
    NAME: "Hughes County",
  },
  {
    Location: "40.0158001655,-80.9885424488",
    CountyGeoId: 39013,
    NAME: "Belmont County",
  },
  {
    Location: "39.3376277289,-83.0570255812",
    CountyGeoId: 39141,
    NAME: "Ross County",
  },
  {
    Location: "41.7562548803,-89.9141029918",
    CountyGeoId: 17195,
    NAME: "Whiteside County",
  },
  {
    Location: "38.7199480156,-87.7267298383",
    CountyGeoId: 17101,
    NAME: "Lawrence County",
  },
  {
    Location: "31.4292715445,-86.9936742092",
    CountyGeoId: "01035",
    NAME: "Conecuh County",
  },
  {
    Location: "35.2079371348,-90.3088719897",
    CountyGeoId: "05035",
    NAME: "Crittenden County",
  },
  {
    Location: "41.3433818683,-77.0645062464",
    CountyGeoId: 42081,
    NAME: "Lycoming County",
  },
  {
    Location: "40.1764658834,-99.9122732442",
    CountyGeoId: 31065,
    NAME: "Furnas County",
  },
  {
    Location: "41.567305883,-98.9819022019",
    CountyGeoId: 31175,
    NAME: "Valley County",
  },
  {
    Location: "38.0423908286,-84.7436031459",
    CountyGeoId: 21239,
    NAME: "Woodford County",
  },
  {
    Location: "45.9373346715,-108.27441843",
    CountyGeoId: 30111,
    NAME: "Yellowstone County",
  },
  {
    Location: "39.7817096805,-86.1384716709",
    CountyGeoId: 18097,
    NAME: "Marion County",
  },
  {
    Location: "46.0816740437,-114.120758882",
    CountyGeoId: 30081,
    NAME: "Ravalli County",
  },
  {
    Location: "45.5919771895,-118.736784883",
    CountyGeoId: 41059,
    NAME: "Umatilla County",
  },
  {
    Location: "34.8056115749,-84.9672206823",
    CountyGeoId: 13313,
    NAME: "Whitfield County",
  },
  {
    Location: "39.4269814843,-93.50517578",
    CountyGeoId: 29033,
    NAME: "Carroll County",
  },
  {
    Location: "35.3362263031,-82.4799463782",
    CountyGeoId: 37089,
    NAME: "Henderson County",
  },
  {
    Location: "41.5926866339,-122.540367763",
    CountyGeoId: "06093",
    NAME: "Siskiyou County",
  },
  {
    Location: "41.91384687,-99.4544205673",
    CountyGeoId: 31115,
    NAME: "Loup County",
  },
  {
    Location: "40.473600561,-85.3248199236",
    CountyGeoId: 18009,
    NAME: "Blackford County",
  },
  {
    Location: "43.0182145442,-88.3045082663",
    CountyGeoId: 55133,
    NAME: "Waukesha County",
  },
  {
    Location: "48.7837971902,-105.548617097",
    CountyGeoId: 30019,
    NAME: "Daniels County",
  },
  {
    Location: "42.3868746602,-95.5134961566",
    CountyGeoId: 19093,
    NAME: "Ida County",
  },
  {
    Location: "48.7751394251,-95.8108171586",
    CountyGeoId: 27135,
    NAME: "Roseau County",
  },
];

module.exports = locations;
