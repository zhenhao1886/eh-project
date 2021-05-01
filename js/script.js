var lineLatLng = [
    [1.3505353077943203, 103.92779344205884],
    [1.3498059495116854, 103.92732673769287],
    [1.3492428418644131, 103.92839962129284],
    [1.349403729776934, 103.92849081639885],
    [1.3493393746132105, 103.92865711335683],
    [1.349098042734048, 103.92854982499684],
    [1.3503047018969299, 103.9264308798835],
    [1.3488459849370298, 103.92544382696236],
    [1.3482453365158649, 103.92474645261665],
    [1.3477304949132887, 103.92525070790863],
    [1.3472102902496887, 103.92519706373027],
    [1.347038676332852, 103.92584615830546],
    [1.346679359612637, 103.92587298040138],
    [1.346443390406623, 103.92634504918537],
    [1.3461707060907224, 103.92651537585282],
    [1.3453493510621182, 103.92618411664537],
    [1.3451723740521724, 103.92621093873616],
    [1.3449685823405868, 103.92652743939816],
    [1.3452849957802309, 103.92749303463815],
    [1.3446307170969984, 103.92832988384613],
    [1.344861323511331, 103.92904871587164],
    [1.344378658842133, 103.92969781044965],
    [1.3442070447145273, 103.92974072579365],//
    [1.3442982147213234, 103.92996066693163],
    [1.3430432860745736, 103.93104427937878],
    [1.3426901572109948, 103.93145600485607],
    [1.343381977022955, 103.93207291292593],
    [1.3426901572109948, 103.93145600485607],
    [1.3409410109765638, 103.93368893746783],
    [1.3396592658681568, 103.93442922715181],
    [1.3396163622419106, 103.93372648839697],
    [1.3383479999441497, 103.93388395036192], //
    [1.338811919390333, 103.93489593152165],
    [1.3406619109360876, 103.93645334802727],
    [1.344308713909153, 103.93825579249034],
    [1.3447913786229295, 103.93829870783742],
    [1.34501662210902, 103.94010115228538],
    [1.3451775103006283, 103.94004750810538],
    [1.3449871259565096, 103.93900681101003],
    [1.3454563831580657, 103.93824238144502],
    [1.345544871662199, 103.93810290657538],
    [1.3464726598934564, 103.93811631762041],
    [1.3464699784293928, 103.93784273229477],
    [1.346735443787154, 103.93732238374875],
    [1.3469177836175719, 103.93737066350984],
    [1.3475103879509756, 103.93584716879438],
    [1.3478026678668318, 103.9357425626407],
    [1.3484676715697947, 103.93606442772084],
    [1.3488835049782602, 103.9352236895757],
    [1.3491891920481045, 103.9352853803827]
];

var originalPlanned = [
    [1.3505353077943203, 103.92779344205884],
    [1.3498059495116854, 103.92732673769287],
    [1.3492428418644131, 103.92839962129284],
    [1.349403729776934, 103.92849081639885],
    [1.3493393746132105, 103.92865711335683],
    [1.349098042734048, 103.92854982499684],
    [1.3503047018969299, 103.9264308798835],
    [1.3488459849370298, 103.92544382696236],
    [1.3482453365158649, 103.92474645261665],
    [1.3477304949132887, 103.92525070790863],
    [1.3472102902496887, 103.92519706373027],
    [1.347038676332852, 103.92584615830546],
    [1.346679359612637, 103.92587298040138],
    [1.346443390406623, 103.92634504918537],
    [1.3461707060907224, 103.92651537585282],
    [1.3453493510621182, 103.92618411664537],
    [1.3451723740521724, 103.92621093873616],
    [1.3449685823405868, 103.92652743939816],
    [1.3452849957802309, 103.92749303463815],
    [1.3446307170969984, 103.92832988384613],
    [1.344861323511331, 103.92904871587164],
    [1.344378658842133, 103.92969781044965],
    [1.3442070447145273, 103.92974072579365],//
    [1.3442982147213234, 103.92996066693163],
    [1.3430432860745736, 103.93104427937878],
    [1.3426901572109948, 103.93145600485607],
    [1.343381977022955, 103.93207291292593],
    [1.3426901572109948, 103.93145600485607],
    [1.3409410109765638, 103.93368893746783],
	[1.3396592658681568, 103.93442922715181],
	[1.3393822513016223, 103.93549515185256],
	[1.3405610797338317, 103.93639350711246],
	[1.3439852125755267, 103.93825727627475],
	[1.3447145726476435, 103.9382465474475],
	[1.3448218314598135, 103.94051033185616],
	[1.3459158710409387, 103.94272047207212],
	[1.3457442570214464, 103.94441562816012]
];

var gmaps = [
	[1.3505353077943203, 103.92779344205884],
    [1.3498059495116854, 103.92732673769287],
    [1.3466878248829726, 103.93290986144498],
    [1.3448644258528903, 103.93784512600284],
    [1.3450574916978146, 103.940505877356],
    [1.3463660486598783, 103.94301642497996],
    [1.3457224961433099, 103.94473303873993]
];

var start = [1.3505353077943203, 103.92779344205884];

//waypoint 1
var petrol = [1.3492428418644131, 103.92839962129284];

//waypoint 2
var condo = [1.3488459849370298, 103.92544382696236];

//waypoint 3
var squirrel = [1.3477304949132887, 103.92525070790863];

var reservoir = [1.346679359612637, 103.92587298040138];

var lifebuoy = [1.3453493510621182, 103.92618411664537];

//waypoint 4
var treepath = [1.3452849957802309, 103.92749303463815];

//waypoint 4
var forestadventure = [1.3430432860745736, 103.93104427937878];

//waypoint 5
var tp =[1.343381977022955, 103.93207291292593];

//branchpoint
var split = [1.3396592658681568, 103.93442922715181];

//true end
var finish = [1.3491891920481045, 103.9352853803827];

var mrt = [1.345544871662199, 103.93810290657538];
var bus = [1.3383479999441497, 103.93388395036192];

var pathTaken = L.polyline(lineLatLng, {color: 'blue'})
var originalPlannedRoute = L.polyline(originalPlanned, {color:'orange'})
var googleMaps = L.polyline(gmaps, {color: 'green'})


var start1 = L.marker(start)
var petrol1 = L.marker(petrol)
var condo1 = L.marker(condo)
var squirrel1 = L.marker(squirrel)
var treepath1 = L.marker(treepath);
var forestadventure1 = L.marker(forestadventure);
var tp1 = L.marker(tp);
var split1 = L.marker(split);
var finish1 = L.marker(finish);
var lifebuoy1 = L.marker(lifebuoy);
var reservoir1 = L.marker(reservoir);
var mrt1 = L.marker(mrt);
var bus1 = L.marker(bus);

start1.bindTooltip('<p>Start!</p>')
petrol1.bindTooltip('<p> We went to Caltex to get a drink before setting off. They are also selling </br> Tomoya toy cars there, which we have never seen before! </br> <img src = imgs/DSC02836.JPG width = 500></img></p>')
condo1.bindTooltip('<p>Waypoint 2: We were outside an apartment </br> <img src = imgs/20210417_104850.JPG width = 500></img> </br> <img src = imgs/20210417_105024.JPG width = 500></img> </p>')
squirrel1.bindTooltip('<p>Waypoint 3: We saw a squirrel here! Also some autumn-coloured leaves!</br> <img src = imgs/DSC02845.JPG width = 500></img> </br> <img src = imgs/20210417_112509.JPG width = 500></img></p> ')
lifebuoy1.bindTooltip('<p>Just another lifebuoy </br> <img src = imgs/DSC02851.JPG width = 500></img></p>')
treepath1.bindTooltip('<p>The path is lined with trees!</br> <img src = imgs/20210417_110859.JPG width = 500></img></p>')
forestadventure1.bindTooltip('<p> We saw a participant having an adventure in the forest!</br> <img src = imgs/DSC02861.JPG width = 500></img> </br> <img src = imgs/20210417_111843.JPG width = 500></img> </br> <img src = imgs/DSC02865.JPG width = 500></img></p>')
tp1.bindTooltip('<p> Here is Temasek Polytechnic </br> <img src = imgs/DSC02870.JPG width = 500></img></p>')
split1.bindTooltip('<p>Drops of rain fell on us: but we quickly snapped a photo of this termite nest </br> <img src = imgs/DSC02872.JPG width = 500></img> </br> <img src = imgs/20210417_112758.JPG width = 500></img></p>')
finish1.bindTooltip('<p>We reached the Coffee Shop to get lunch. After that, it begun to rain again :( Our journey ends here!</br> <img src = imgs/20210417_121945.JPG width = 500></img></p>')
reservoir1.bindTooltip('<p>Bedok Reservoir is really clean and pretty! There are some water activities happening as well. </br> <img src = imgs/20210417_110103.JPG width = 500></img> </br> <img src = imgs/DSC02846.JPG width = 500></img> </p>')
mrt1.bindTooltip('<p>We alighted at the bus stop near Tampines West MRT and we crossed the underpass and emerged here! </br> <img src = imgs/20210417_114849.JPG width = 500></img></p>')
bus1.bindTooltip('<p>We took bus 65 so that we can go to the round market. </br> However, the rain stopped halfway and we got out at the Tampines West MRT.</br>We changed our destination to the coffee shop near Tampines West Community Center because we were worried it would rain again. </p>')

var actualLayer = L.layerGroup([pathTaken, petrol1, condo1, squirrel1, treepath1, forestadventure1, tp1, finish1, lifebuoy1, reservoir1, mrt1, bus1, split1])

var mymap = L.map('map', {layers: [start1,  actualLayer, originalPlannedRoute, googleMaps],
                         center:[1.348288239949306, 103.9305936682969],
                         zoom:17});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiemhlbmhhbzE4ODYiLCJhIjoiY2tucGxmOWExMDNlczJvcXBncXhzODl3MSJ9.aTnkhyJ8Mn0b7q6PXjburA'
}).addTo(mymap);


var overlays = {"Google Maps": googleMaps,
               "Original Planned": originalPlannedRoute,
               "Actual Path": actualLayer}
L.control.layers(null, overlays).addTo(mymap);