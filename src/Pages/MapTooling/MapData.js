export const longLat = {
    data: [
        /*
        // Original data points
        {long: -122.4194, lat: 37.7749}, // San Francisco
        {long: -118.2437, lat: 34.0522}, // Los Angeles
        {long: -73.935242, lat: 40.730610}, // New York City        
        {long: -87.6298, lat: 41.8781}, // Chicago
        {long: -95.3698, lat: 29.7604}, // Houston
        {long: -104.9903, lat: 39.7392}, // Denver
        {long: -122.3321, lat: 47.6062}, // Seattle
        {long: -111.8910, lat: 40.7608}, // Salt Lake City
        
        // Additional mock data points across the US
        // California
        {long: -121.4944, lat: 38.5816}, // Sacramento
        {long: -117.1611, lat: 32.7157}, // San Diego
        {long: -119.7871, lat: 36.7378}, // Fresno
        {long: -121.8863, lat: 36.6002}, // Monterey
        {long: -120.6596, lat: 35.2828}, // San Luis Obispo
        {long: -122.0838, lat: 37.4020}, // Mountain View
        {long: -118.4912, lat: 34.0194}, // West Hollywood
        {long: -121.2958, lat: 37.9577}, // Concord
        {long: -122.2711, lat: 37.8044}, // Berkeley
        {long: -117.9245, lat: 33.8003}, // Riverside
        
        // Texas
        {long: -97.7431, lat: 30.2672}, // Austin
        {long: -96.7970, lat: 32.7767}, // Dallas
        {long: -98.4936, lat: 29.4241}, // San Antonio
        {long: -97.3308, lat: 32.7555}, // Fort Worth
        {long: -106.4424, lat: 31.7619}, // El Paso
        {long: -101.8313, lat: 33.5779}, // Lubbock
        {long: -97.0403, lat: 28.8056}, // Corpus Christi
        {long: -94.1265, lat: 30.0733}, // Beaumont
        {long: -100.4370, lat: 31.4638}, // San Angelo
        {long: -99.1332, lat: 27.8006}, // Alice
        
        // New York
        {long: -73.7562, lat: 42.6526}, // Albany
        {long: -78.8784, lat: 42.8864}, // Buffalo
        {long: -76.1474, lat: 43.0481}, // Syracuse
        {long: -75.2307, lat: 43.0001}, // Utica
        {long: -73.8370, lat: 41.7658}, // Poughkeepsie
        {long: -74.7429, lat: 41.8723}, // Warwick
        {long: -73.9442, lat: 40.6782}, // Brooklyn
        {long: -73.8648, lat: 40.7489}, // Queens
        {long: -74.2591, lat: 40.7178}, // Newark
        {long: -77.6109, lat: 43.1540}, // Elmira
        
        // Florida
        {long: -80.1918, lat: 25.7617}, // Miami
        {long: -81.3792, lat: 28.5383}, // Orlando
        {long: -82.4572, lat: 27.9506}, // Tampa
        {long: -81.6557, lat: 30.3322}, // Jacksonville
        {long: -84.2807, lat: 30.4518}, // Tallahassee
        {long: -80.0378, lat: 26.7056}, // Fort Lauderdale
        {long: -82.6404, lat: 27.7676}, // St. Petersburg
        {long: -80.2374, lat: 26.1224}, // Fort Lauderdale
        {long: -81.8552, lat: 26.6406}, // Naples
        {long: -82.2677, lat: 26.5629}, // Port Charlotte
        */

        // Illinois
        {long: -89.4012, lat: 40.6331}, // Peoria
        {long: -90.5151, lat: 41.5868}, // Rock Island
        {long: -89.0937, lat: 42.2711}, // Rockford
        {long: -88.2073, lat: 41.7858}, // Naperville
        {long: -87.9073, lat: 42.0664}, // Schaumburg
        // {long: -88.0812, lat: 41.5292}, // Joliet
        // {long: -89.6501, lat: 39.8014}, // Springfield
        // {long: -90.1994, lat: 38.7817}, // Belleville
        // {long: -88.2434, lat: 40.1164}, // Champaign
        // {long: -89.5890, lat: 40.6936}, // East Peoria
        
        //CHICAGO TEST DATA
        {long: -87.622824, lat: 41.871204},
        
        // Downtown Chicago
        {long: -87.623177, lat: 41.881832},
        {long: -87.627564, lat: 41.878876},
        
        // North Side Chicago
        {long: -87.652751, lat: 41.925861}, // Lincoln Park
        {long: -87.673855, lat: 41.940267}, // Lakeview
        {long: -87.658438, lat: 41.954707}, // Wrigleyville
        {long: -87.668517, lat: 41.975635}, // Uptown
        
        // South Side Chicago
        {long: -87.606209, lat: 41.815933}, // Hyde Park
        {long: -87.625961, lat: 41.795625}, // Bronzeville
        {long: -87.644855, lat: 41.747011}, // Bridgeport
        {long: -87.580986, lat: 41.757836}, // South Shore
        
        // West Side Chicago
        {long: -87.724609, lat: 41.878433}, // Oak Park
        {long: -87.748032, lat: 41.887314}, // River Forest
        {long: -87.697258, lat: 41.833733}, // Little Village
        {long: -87.716751, lat: 41.852278}, // Austin
        
        // North Suburbs
        {long: -87.723999, lat: 42.036530}, // Evanston
        {long: -87.833076, lat: 42.097809}, // Highland Park
        {long: -87.896423, lat: 42.156014}, // Lake Forest
        {long: -87.868164, lat: 42.323849}, // Waukegan
        {long: -88.007507, lat: 42.241157}, // Libertyville
        
        // Northwest Suburbs
        {long: -88.011688, lat: 42.065624}, // Buffalo Grove
        {long: -88.142395, lat: 42.038113}, // Schaumburg
        {long: -88.201866, lat: 42.033462}, // Hoffman Estates
        {long: -88.291931, lat: 41.995758}, // Elgin
        {long: -88.162994, lat: 41.881065}, // Addison
        
        // West Suburbs
        {long: -88.089905, lat: 41.855762}, // Lombard
        {long: -88.137390, lat: 41.816875}, // Downers Grove
        {long: -88.243378, lat: 41.789722}, // Naperville
        {long: -88.162476, lat: 41.742363}, // Bolingbrook
        {long: -88.320801, lat: 41.779697}, // Aurora
        
        // Southwest Suburbs
        {long: -87.804871, lat: 41.748886}, // Burbank
        {long: -87.864456, lat: 41.702499}, // Palos Hills
        {long: -87.927246, lat: 41.668915}, // Orland Park
        {long: -87.978134, lat: 41.616558}, // Joliet
        {long: -88.081970, lat: 41.694611}, // Romeoville
        
        // South Suburbs
        {long: -87.622070, lat: 41.563072}, // Harvey
        {long: -87.565308, lat: 41.523972}, // South Holland
        {long: -87.724915, lat: 41.603439}, // Alsip
        {long: -87.533493, lat: 41.442852}, // Crete
        {long: -87.681885, lat: 41.480469}, // Homewood
        
        // Southeast Suburbs (Indiana)
        {long: -87.464294, lat: 41.593300}, // Gary, IN
        {long: -87.362518, lat: 41.557140}, // Portage, IN
        {long: -87.321777, lat: 41.452713}, // Valparaiso, IN
        {long: -87.057495, lat: 41.531116}, // Michigan City, IN
        
        // Far North (Wisconsin)
        {long: -87.822571, lat: 42.497616}, // Kenosha, WI
        {long: -87.906189, lat: 42.726013}, // Racine, WI
        
        // Far West
        {long: -88.432007, lat: 41.888550}, // DeKalb
        {long: -88.759766, lat: 41.861206}, // Rochelle
        {long: -88.542175, lat: 41.757141}, // Yorkville
        
        // Additional Chicago neighborhoods for better coverage
        {long: -87.709999, lat: 41.917408}, // Logan Square
        {long: -87.751617, lat: 41.963425}, // Jefferson Park
        {long: -87.625656, lat: 41.864711}, // Chinatown
        {long: -87.687302, lat: 41.799000}, // McKinley Park
        {long: -87.598724, lat: 41.745842}, // Woodlawn
        {long: -87.726059, lat: 41.793194}, // Brighton Park
        {long: -87.768021, lat: 41.799721}, // Archer Heights
        
        // Additional suburbs for comprehensive coverage
        {long: -88.004456, lat: 41.963959}, // Mount Prospect
        {long: -87.933960, lat: 42.128067}, // Northbrook
        {long: -87.759399, lat: 42.146454}, // Wilmette
        {long: -88.191040, lat: 41.946468}, // Des Plaines
        /*
        // Ohio
        {long: -82.9988, lat: 39.9612}, // Columbus
        {long: -84.5120, lat: 39.1031}, // Cincinnati
        {long: -81.6944, lat: 41.4993}, // Cleveland
        {long: -84.1916, lat: 41.6528}, // Toledo
        {long: -84.3951, lat: 39.7817}, // Dayton
        {long: -80.7698, lat: 41.0998}, // Youngstown
        {long: -81.2901, lat: 41.1540}, // Akron
        {long: -83.0458, lat: 39.9526}, // Dublin
        {long: -82.7649, lat: 39.9723}, // Westerville
        {long: -81.4673, lat: 41.2033}, // Cuyahoga Falls
        
        // Pennsylvania
        {long: -75.1652, lat: 39.9526}, // Philadelphia
        {long: -79.9959, lat: 40.4406}, // Pittsburgh
        {long: -76.8839, lat: 40.2732}, // Harrisburg
        {long: -75.2804, lat: 40.6259}, // Allentown
        {long: -80.0851, lat: 40.2677}, // Washington
        {long: -75.3282, lat: 40.3573}, // Allentown
        {long: -78.8784, lat: 40.7934}, // State College
        {long: -75.5277, lat: 40.6895}, // Bethlehem
        {long: -80.2201, lat: 40.0370}, // Canonsburg
        {long: -78.3947, lat: 40.4668}, // Johnstown
        
        // Michigan
        {long: -83.0458, lat: 42.3314}, // Detroit
        {long: -84.5555, lat: 42.9634}, // Lansing
        {long: -85.6681, lat: 42.9634}, // Kalamazoo
        {long: -85.5872, lat: 42.2917}, // Battle Creek
        {long: -86.2520, lat: 43.2081}, // Grand Rapids
        {long: -84.4569, lat: 43.6532}, // Bay City
        {long: -83.2813, lat: 43.5945}, // Saginaw
        {long: -87.6073, lat: 41.5250}, // Gary (Indiana border)
        {long: -82.4274, lat: 42.9067}, // Port Huron
        {long: -86.0326, lat: 45.0218}, // Traverse City
        
        // Georgia
        {long: -84.3880, lat: 33.7490}, // Atlanta
        {long: -81.0912, lat: 32.0835}, // Savannah
        {long: -83.2321, lat: 32.0840}, // Macon
        {long: -84.1557, lat: 32.4609}, // Columbus
        {long: -83.6324, lat: 34.2979}, // Gainesville
        {long: -82.3540, lat: 34.8526}, // Anderson
        {long: -81.6326, lat: 32.8407}, // Augusta
        {long: -85.1549, lat: 31.5804}, // Albany
        {long: -83.9738, lat: 33.0801}, // Warner Robins
        {long: -84.2696, lat: 33.2968}, // Peachtree City
        
        // North Carolina
        {long: -78.6382, lat: 35.7796}, // Raleigh
        {long: -80.8431, lat: 35.2271}, // Charlotte
        {long: -79.7920, lat: 36.0726}, // Greensboro
        {long: -77.9447, lat: 34.2257}, // Wilmington
        {long: -82.5515, lat: 35.5951}, // Asheville
        {long: -80.8414, lat: 35.2271}, // Charlotte
        {long: -78.8986, lat: 35.9940}, // Durham
        {long: -80.0782, lat: 35.1495}, // Gastonia
        {long: -81.3412, lat: 35.7343}, // Hickory
        {long: -79.0193, lat: 35.9132}, // Chapel Hill
        
        // Virginia
        {long: -77.4360, lat: 37.5407}, // Richmond
        {long: -76.2859, lat: 36.8468}, // Norfolk
        {long: -77.0369, lat: 38.9517}, // Alexandria
        {long: -79.2353, lat: 37.4316}, // Lynchburg
        {long: -78.4767, lat: 38.0293}, // Charlottesville
        {long: -80.3200, lat: 37.2290}, // Roanoke
        {long: -76.6073, lat: 37.0871}, // Newport News
        {long: -77.4605, lat: 37.4316}, // Chesterfield
        {long: -82.2788, lat: 36.7409}, // Bristol
        {long: -78.9072, lat: 36.5951}, // Danville
        
        // Tennessee
        {long: -86.7816, lat: 36.1627}, // Nashville
        {long: -90.0490, lat: 35.1495}, // Memphis
        {long: -83.9207, lat: 35.9606}, // Knoxville
        {long: -85.2086, lat: 35.0456}, // Chattanooga
        {long: -82.3540, lat: 36.5473}, // Johnson City
        {long: -88.1974, lat: 36.3032}, // Clarksville
        {long: -89.2620, lat: 35.5951}, // Jackson
        {long: -86.5197, lat: 35.8456}, // Murfreesboro
        {long: -84.8766, lat: 35.2137}, // Cleveland
        {long: -85.4669, lat: 35.2201}, // Cookeville
        
        // Kentucky
        {long: -85.7585, lat: 38.2009}, // Louisville
        {long: -84.5037, lat: 38.0406}, // Lexington
        {long: -88.6059, lat: 37.0842}, // Paducah
        {long: -87.4895, lat: 37.7619}, // Owensboro
        {long: -83.7660, lat: 38.1970}, // Winchester
        {long: -82.6440, lat: 38.4724}, // Ashland
        {long: -86.1081, lat: 37.0971}, // Bowling Green
        {long: -84.7633, lat: 37.0754}, // Somerset
        {long: -85.8644, lat: 37.2619}, // Elizabethtown
        {long: -84.2733, lat: 37.0890}, // London
        
        // South Carolina
        {long: -81.0348, lat: 34.0007}, // Columbia
        {long: -79.9311, lat: 32.7765}, // Charleston
        {long: -82.3940, lat: 34.8526}, // Greenville
        {long: -80.8414, lat: 35.2271}, // Rock Hill
        {long: -81.1187, lat: 34.7104}, // Spartanburg
        {long: -79.2930, lat: 33.8361}, // Florence
        {long: -80.6665, lat: 32.4609}, // Aiken
        {long: -82.6515, lat: 34.8037}, // Anderson
        {long: -79.7620, lat: 34.1954}, // Sumter
        {long: -81.2009, lat: 32.0835}, // Orangeburg
        
        // Alabama
        {long: -86.7816, lat: 33.5186}, // Birmingham
        {long: -86.3009, lat: 32.3668}, // Montgomery
        {long: -87.6298, lat: 30.6944}, // Mobile
        {long: -86.5861, lat: 34.7304}, // Huntsville
        {long: -85.4669, lat: 32.6010}, // Auburn
        {long: -87.0073, lat: 33.2098}, // Tuscaloosa
        {long: -86.1081, lat: 33.6901}, // Anniston
        {long: -85.9727, lat: 31.3069}, // Dothan
        {long: -87.2021, lat: 30.4108}, // Prichard
        {long: -86.4517, lat: 32.4270}, // Prattville
        
        // Mississippi
        {long: -90.1848, lat: 32.2988}, // Jackson
        {long: -88.8853, lat: 30.3960}, // Biloxi
        {long: -91.0532, lat: 31.5601}, // Vicksburg
        {long: -88.7001, lat: 34.2581}, // Tupelo
        {long: -89.1165, lat: 33.4735}, // Greenwood
        {long: -90.8787, lat: 33.9007}, // Clarksdale
        {long: -89.5901, lat: 30.3674}, // Hattiesburg
        {long: -90.4426, lat: 34.2270}, // Oxford
        {long: -88.4280, lat: 31.3271}, // Laurel
        {long: -91.3985, lat: 32.5007}, // Monroe (LA border)
        
        // Louisiana
        {long: -90.0715, lat: 29.9511}, // New Orleans
        {long: -91.1871, lat: 30.4515}, // Baton Rouge
        {long: -93.7063, lat: 32.5007}, // Shreveport
        {long: -92.4426, lat: 30.2201}, // Lafayette
        {long: -93.2174, lat: 30.2266}, // Lake Charles
        {long: -92.0198, lat: 32.5093}, // Monroe
        {long: -90.7243, lat: 29.9399}, // Kenner
        {long: -93.7449, lat: 30.2266}, // Sulphur
        {long: -91.8368, lat: 29.7069}, // Morgan City
        {long: -92.1043, lat: 30.2266}, // Opelousas
        
        // Arkansas
        {long: -92.2896, lat: 34.7465}, // Little Rock
        {long: -94.1574, lat: 35.3859}, // Fort Smith
        {long: -94.4185, lat: 36.3729}, // Fayetteville
        {long: -92.4426, lat: 35.2184}, // Conway
        {long: -91.2068, lat: 35.1495}, // Jonesboro
        {long: -93.0752, lat: 34.5037}, // Hot Springs
        {long: -90.1848, lat: 35.8456}, // West Memphis
        {long: -92.4426, lat: 36.0726}, // Mountain Home
        {long: -94.3574, lat: 35.9132}, // Bentonville
        {long: -91.5499, lat: 35.9374}, // Batesville
        
        // Oklahoma
        {long: -97.5164, lat: 35.4676}, // Oklahoma City
        {long: -95.9928, lat: 36.1540}, // Tulsa
        {long: -97.0584, lat: 36.1156}, // Stillwater
        {long: -97.4395, lat: 35.2220}, // Norman
        {long: -98.2495, lat: 34.6037}, // Lawton
        {long: -95.3698, lat: 35.2495}, // McAlester
        {long: -94.8749, lat: 35.3465}, // Muskogee
        {long: -97.9339, lat: 36.1540}, // Enid
        {long: -95.8824, lat: 36.7323}, // Bartlesville
        {long: -98.4142, lat: 36.1156}, // Woodward
        
        // Kansas
        {long: -95.6890, lat: 39.0473}, // Topeka
        {long: -97.3375, lat: 37.6872}, // Wichita
        {long: -94.6859, lat: 39.1142}, // Overland Park
        {long: -96.5847, lat: 39.1836}, // Manhattan
        {long: -94.6275, lat: 38.9517}, // Kansas City
        {long: -97.6114, lat: 38.2904}, // Hutchinson
        {long: -100.0187, lat: 37.0625}, // Garden City
        {long: -95.2353, lat: 37.0495}, // Parsons
        {long: -98.7073, lat: 38.8673}, // Salina
        {long: -101.3552, lat: 37.7561}, // Dodge City
        
        // Nebraska
        {long: -96.6917, lat: 40.8136}, // Lincoln
        {long: -95.9345, lat: 41.2565}, // Omaha
        {long: -98.5696, lat: 40.9248}, // Grand Island
        {long: -100.7837, lat: 41.1374}, // North Platte
        {long: -103.6624, lat: 41.1374}, // Scottsbluff
        {long: -99.0817, lat: 40.1289}, // Kearney
        {long: -97.3482, lat: 40.9248}, // Columbus
        {long: -96.4003, lat: 41.5868}, // Fremont
        {long: -98.3420, lat: 40.5218}, // Hastings
        {long: -101.7077, lat: 41.1289}, // Sidney
        
        // Iowa
        {long: -93.6091, lat: 41.5868}, // Des Moines
        {long: -91.6656, lat: 41.6612}, // Cedar Rapids
        {long: -91.5240, lat: 41.5240}, // Iowa City
        {long: -96.4003, lat: 42.4839}, // Sioux City
        {long: -92.4635, lat: 42.0308}, // Waterloo
        {long: -93.6204, lat: 42.0308}, // Ames
        {long: -90.5776, lat: 41.5240}, // Davenport
        {long: -95.0465, lat: 41.2619}, // Council Bluffs
        {long: -94.3574, lat: 40.4017}, // Ottumwa
        {long: -91.1043, lat: 40.9248}, // Burlington
        
        // Missouri
        {long: -94.5786, lat: 39.0997}, // Kansas City
        {long: -90.1994, lat: 38.6270}, // St. Louis
        {long: -92.1890, lat: 38.9517}, // Columbia
        {long: -93.2982, lat: 37.2085}, // Springfield
        {long: -92.1890, lat: 38.5767}, // Jefferson City
        {long: -94.8169, lat: 38.8673}, // Independence
        {long: -90.4125, lat: 38.7817}, // St. Charles
        {long: -93.6091, lat: 39.7817}, // Sedalia
        {long: -89.6351, lat: 36.6232}, // Cape Girardeau
        {long: -94.3574, lat: 37.0842}, // Joplin
        
        // Indiana
        {long: -86.1581, lat: 39.7684}, // Indianapolis
        {long: -87.5594, lat: 41.5868}, // Gary
        {long: -87.0073, lat: 41.4789}, // Hammond
        {long: -85.1394, lat: 41.0998}, // Fort Wayne
        {long: -87.4139, lat: 39.4667}, // Evansville
        {long: -86.5264, lat: 39.1637}, // Bloomington
        {long: -85.3803, lat: 40.1934}, // Muncie
        {long: -86.2520, lat: 41.6833}, // South Bend
        {long: -85.6229, lat: 39.9612}, // Richmond
        {long: -87.1711, lat: 39.3667}, // Terre Haute
        
        // Wisconsin
        {long: -87.9073, lat: 43.0389}, // Milwaukee
        {long: -89.4012, lat: 43.0731}, // Madison
        {long: -88.0173, lat: 44.5133}, // Green Bay
        {long: -89.6351, lat: 44.9537}, // Wausau
        {long: -91.4985, lat: 43.8041}, // La Crosse
        {long: -87.9642, lat: 44.5133}, // Appleton
        {long: -88.7998, lat: 44.2619}, // Oshkosh
        {long: -90.4958, lat: 46.8083}, // Superior
        {long: -92.1043, lat: 46.7833}, // Duluth (MN border)
        {long: -89.0937, lat: 43.5417}, // Janesville
        
        // Minnesota
        {long: -93.2650, lat: 44.9778}, // Minneapolis
        {long: -93.0940, lat: 44.9537}, // St. Paul
        {long: -92.1043, lat: 46.7833}, // Duluth
        {long: -94.6859, lat: 46.3535}, // Brainerd
        {long: -93.2566, lat: 45.5608}, // St. Cloud
        {long: -95.2353, lat: 44.1289}, // Marshall
        {long: -96.5847, lat: 44.9248}, // Brookings (SD border)
        {long: -94.8749, lat: 43.6612}, // Mankato
        {long: -92.4635, lat: 43.8041}, // Winona
        {long: -93.5991, lat: 44.0833}, // Faribault
        
        // North Dakota
        {long: -100.7837, lat: 46.8083}, // Bismarck
        {long: -96.7898, lat: 46.8772}, // Fargo
        {long: -101.2996, lat: 47.9253}, // Minot
        {long: -98.7073, lat: 46.9537}, // Jamestown
        {long: -97.0584, lat: 47.9253}, // Grand Forks
        {long: -103.2317, lat: 47.8701}, // Williston
        {long: -100.2796, lat: 47.2701}, // Devils Lake
        {long: -102.7896, lat: 46.9083}, // Dickinson
        {long: -97.5444, lat: 46.8539}, // West Fargo
        {long: -98.8652, lat: 47.4414}, // Rugby
        
        // South Dakota
        {long: -100.3510, lat: 44.3683}, // Pierre
        {long: -96.7311, lat: 43.5460}, // Sioux Falls
        {long: -103.2317, lat: 44.0833}, // Rapid City
        {long: -97.3827, lat: 44.3605}, // Brookings
        {long: -96.9311, lat: 44.3128}, // Watertown
        {long: -98.0348, lat: 44.8833}, // Aberdeen
        {long: -97.7369, lat: 43.2419}, // Yankton
        {long: -100.4017, lat: 45.4667}, // Mobridge
        {long: -103.7696, lat: 44.6667}, // Sturgis
        {long: -101.0348, lat: 43.7374}, // Winner
        
        // Montana
        {long: -112.5362, lat: 46.5197}, // Helena
        {long: -108.5007, lat: 45.7833}, // Billings
        {long: -104.0422, lat: 47.0527}, // Glendive
        {long: -114.0833, lat: 46.8701}, // Missoula
        {long: -111.2833, lat: 47.5053}, // Great Falls
        {long: -111.0362, lat: 45.6833}, // Bozeman
        {long: -109.5007, lat: 45.2701}, // Red Lodge
        {long: -106.6333, lat: 45.8833}, // Miles City
        {long: -115.0362, lat: 47.6833}, // Kalispell
        {long: -104.7362, lat: 48.2333}, // Sidney
        
        // Wyoming
        {long: -104.8197, lat: 41.1374}, // Cheyenne
        {long: -106.3188, lat: 42.8667}, // Casper
        {long: -110.5885, lat: 44.2619}, // Jackson
        {long: -108.7508, lat: 44.2952}, // Cody
        {long: -105.5449, lat: 44.2701}, // Gillette
        {long: -107.2362, lat: 41.3374}, // Rawlins
        {long: -109.2362, lat: 41.5885}, // Rock Springs
        {long: -106.9508, lat: 42.0374}, // Saratoga
        {long: -110.9622, lat: 43.4799}, // Pinedale
        {long: -104.1622, lat: 42.8333}, // Douglas
        
        // Colorado
        {long: -105.0178, lat: 39.7392}, // Denver
        {long: -104.8214, lat: 38.8339}, // Colorado Springs
        {long: -108.5506, lat: 39.0639}, // Grand Junction
        {long: -105.2705, lat: 40.0150}, // Boulder
        {long: -104.7091, lat: 40.4233}, // Fort Collins
        {long: -106.8317, lat: 40.4850}, // Steamboat Springs
        {long: -107.8403, lat: 39.1911}, // Aspen
        {long: -106.3744, lat: 39.6403}, // Vail
        {long: -108.7351, lat: 37.3472}, // Durango
        {long: -105.8742, lat: 38.0583}, // Salida
        
        // New Mexico
        {long: -105.9378, lat: 35.6870}, // Santa Fe
        {long: -106.6504, lat: 35.0844}, // Albuquerque
        {long: -103.2052, lat: 32.4014}, // Roswell
        {long: -108.2227, lat: 32.7959}, // Silver City
        {long: -104.5230, lat: 32.2217}, // Carlsbad
        {long: -106.7637, lat: 32.3199}, // Las Cruces
        {long: -108.7425, lat: 35.6751}, // Farmington
        {long: -105.6701, lat: 35.5751}, // Los Alamos
        {long: -107.2362, lat: 35.1319}, // Grants
        {long: -103.3285, lat: 34.4208}, // Clovis
        
        // Arizona
        {long: -112.0740, lat: 33.4484}, // Phoenix
        {long: -110.9265, lat: 32.2226}, // Tucson
        {long: -111.6513, lat: 35.1983}, // Flagstaff
        {long: -109.0448, lat: 32.2217}, // Sierra Vista
        {long: -114.2029, lat: 33.3528}, // Yuma
        {long: -111.9004, lat: 33.4152}, // Scottsdale
        {long: -111.9315, lat: 33.3062}, // Tempe
        {long: -112.2967, lat: 33.5387}, // Glendale
        {long: -111.8315, lat: 33.4734}, // Mesa
        {long: -110.7362, lat: 34.5362}, // Show Low
        
        // Utah
        {long: -111.8910, lat: 40.7608}, // Salt Lake City
        {long: -111.9461, lat: 40.5852}, // West Jordan
        {long: -113.5684, lat: 37.6847}, // St. George
        {long: -111.6946, lat: 39.5447}, // Provo
        {long: -109.5388, lat: 38.5733}, // Moab
                {long: -111.9738, lat: 41.2230}, // Ogden
        {long: -112.1646, lat: 40.6097}, // Tooele
        {long: -113.0631, lat: 37.7700}, // Cedar City
        {long: -112.3236, lat: 37.0464}, // Hurricane
        {long: -110.8456, lat: 39.5997}, // Price
        {long: -111.2833, lat: 38.9236}, // Richfield
        {long: -112.5446, lat: 38.2419}, // Beaver
        {long: -109.5533, lat: 39.5469}, // Green River
        {long: -110.4897, lat: 40.4553}, // Duchesne
        {long: -111.1035, lat: 40.1635}, // Heber City

        // Nevada
        {long: -115.1728, lat: 36.1699}, // Las Vegas
        {long: -119.8138, lat: 39.5296}, // Reno
        {long: -118.7501, lat: 39.4735}, // Fallon
        {long: -114.8910, lat: 39.2430}, // Ely
        {long: -119.7696, lat: 39.1638}, // Carson City
        {long: -115.0334, lat: 40.8324}, // Elko
        {long: -118.6253, lat: 41.4906}, // Winnemucca
        {long: -116.8318, lat: 40.9667}, // Battle Mountain
        {long: -117.7206, lat: 38.0135}, // Tonopah
        {long: -114.5446, lat: 36.7617}, // Mesquite

        // Idaho
        {long: -116.2023, lat: 43.6150}, // Boise
        {long: -112.4666, lat: 42.8713}, // Pocatello
        {long: -112.4455, lat: 42.5628}, // Blackfoot
        {long: -114.5140, lat: 42.6026}, // Twin Falls
        {long: -117.0156, lat: 44.5148}, // Fruitland
        {long: -115.7032, lat: 43.1386}, // Mountain Home
        {long: -116.9835, lat: 46.4166}, // Moscow
        {long: -116.7805, lat: 47.6777}, // Coeur d'Alene
        {long: -114.3510, lat: 43.5196}, // Sun Valley
        {long: -113.5840, lat: 42.5358}, // Burley

        // Washington
        {long: -122.3321, lat: 47.6062}, // Seattle
        {long: -122.4443, lat: 47.2529}, // Tacoma
        {long: -122.6765, lat: 45.5231}, // Vancouver
        {long: -117.4260, lat: 47.6588}, // Spokane
        {long: -122.9084, lat: 46.1460}, // Longview
        {long: -123.8360, lat: 46.9730}, // Aberdeen
        {long: -120.7401, lat: 46.6021}, // Yakima
        {long: -118.5580, lat: 46.0646}, // Walla Walla
        {long: -122.0363, lat: 47.6788}, // Redmond
        {long: -122.3415, lat: 48.7519}, // Bellingham

        // Oregon
        {long: -122.6765, lat: 45.5231}, // Portland
        {long: -123.2620, lat: 44.5646}, // Corvallis
        {long: -123.0305, lat: 44.9429}, // Salem
        {long: -122.8756, lat: 42.3265}, // Medford
        {long: -124.1637, lat: 43.3665}, // Coos Bay
        {long: -121.3153, lat: 44.2726}, // Bend
        {long: -124.0524, lat: 44.6368}, // Newport
        {long: -123.3408, lat: 43.2165}, // Roseburg
        {long: -123.1220, lat: 44.0486}, // Eugene
        {long: -121.7880, lat: 45.6826}, // Hood River

        // Alaska
        {long: -149.9003, lat: 61.2181}, // Anchorage
        {long: -134.4197, lat: 58.3019}, // Juneau
        {long: -147.7164, lat: 64.8378}, // Fairbanks
        {long: -165.4064, lat: 64.5011}, // Nome
        {long: -163.4056, lat: 66.8335}, // Kotzebue
        {long: -160.7724, lat: 63.4710}, // Bethel
        {long: -133.7410, lat: 56.4720}, // Petersburg
        {long: -169.5402, lat: 63.0501}, // Gambell
        {long: -152.3910, lat: 70.2002}, // Prudhoe Bay
        {long: -176.6333, lat: 51.8781}, // Adak

        // Hawaii
        {long: -157.8583, lat: 21.3069}, // Honolulu
        {long: -156.3319, lat: 20.7984}, // Lahaina
        {long: -155.0895, lat: 19.7297}, // Hilo
        {long: -156.4726, lat: 20.8905}, // Kahului
        {long: -155.8444, lat: 20.0400}, // Kailua-Kona
        {long: -156.6825, lat: 21.1743}, // Wailuku
        {long: -155.5743, lat: 19.6406}, // Volcano
        {long: -157.8583, lat: 21.4822}, // Kaneohe
        {long: -156.4656, lat: 21.1465}, // Kihei
        {long: -158.0001, lat: 21.6813}, // Waialua
        */
    ]
};
