const birds =  [
  {
    "audio": require("./audio/LOON__COMMON.MP3"),
    "order": "Gaviiformes",
    "family": "Gaviidae",
    // "scientific": "Gavia immer",
    "familyCommon": "Loons",
    "speciesCommon": "Common Loon"
  }, {
    "audio": require("./audio/GREBE__PIED_BILLED.mp3"),
    "order": "Podicipediformes",
    "family": "Podicipedidae",
    // "scientific": "Podilymbus podiceps",
    "familyCommon": "Grebes",
    "speciesCommon": "Pied-billed Grebe"
  }, {
    "audio": require("./audio/BITTERN__AMERICAN.mp3"),
    "order": "Ciconiiformes",
    "family": "Ardeidae",
    // "scientific": "Botaurus lentiginosus",
    "familyCommon": "Herons/Bitterns/Allies",
    "speciesCommon": "American Bittern"
  }, {
    "audio": require("./audio/BITTERN__LEAST.mp3"),
    "order": "Ciconiiformes",
    "family": "Ardeidae",
    "familyCommon": "Herons/Bitterns/Allies",
    "speciesCommon": "Least Bittern"
  }, {
    "audio": require("./audio/HERON__BLACK_CROWNED_NIGHT.mp3"),
    "order": "Ciconiiformes",
    "family": "Ardeidae",
    "familyCommon": "Herons/Bitterns/Allies",
    "speciesCommon": "Black-crowned Night-Heron"
  }, {
    "audio": require("./audio/GOOSE__CANADA.mp3"),
    "order": "Anseriformes",
    "family": "Anatidae",
    "familyCommon": "Ducks/Geese/Swans",
    "speciesCommon": "Canada Goose"
  }, {
    "audio": require("./audio/DUCK__WOOD.mp3"),
    "order": "Anseriformes",
    "family": "Anatidae",
    "familyCommon": "Ducks/Geese/Swans",
    "speciesCommon": "Wood Duck"
  }, {
    "audio": require("./audio/MALLARD.mp3"),
    "order": "Anseriformes",
    "family": "Anatidae",
    "familyCommon": "Ducks/Geese/Swans",
    "speciesCommon": "Mallard"
  }, {
    "audio": require("./audio/GOSHAWK__NORTHERN.mp3"),
    "order": "Falconiformes",
    "family": "Accipitridae",
    "familyCommon": "Hawks/Kites/Eagles/Allies",
    "speciesCommon": "Northern Goshawk"
  }, {
    "audio": require("./audio/HAWK__RED_SHOULDERED.mp3"),
    "order": "Falconiformes",
    "family": "Accipitridae",
    "familyCommon": "Hawks/Kites/Eagles/Allies",
    "speciesCommon": "Red-shouldered Hawk"
  }, {
    "audio": require("./audio/HAWK__BROAD_WINGED.mp3"),
    "order": "Falconiformes",
    "family": "Accipitridae",
    "familyCommon": "Hawks/Kites/Eagles/Allies",
    "speciesCommon": "Broad-winged Hawk"
  }, {
    "audio": require("./audio/HAWK__RED_TAILED.mp3"),
    "order": "Falconiformes",
    "family": "Accipitridae",
    "familyCommon": "Hawks/Kites/Eagles/Allies",
    "speciesCommon": "Red-tailed Hawk"
  }, {
    "audio": require("./audio/KESTREL__AMERICAN.mp3"),
    "order": "Falconiformes",
    "family": "Falconidae",
    "familyCommon": "Caracaras/Falcons",
    "speciesCommon": "American Kestrel"
  }, {
    "audio": require("./audio/MERLIN.MP3"),
    "order": "Falconiformes",
    "family": "Falconidae",
    "familyCommon": "Caracaras/Falcons",
    "speciesCommon": "Merlin"
  }, {
    "audio": require("./audio/PHEASANT__RING_NECKED.MP3"),
    "order": "Galliformes",
    "family": "Phasianidae",
    "familyCommon": "Partridges/Grouse/Turkeys/Quail",
    "speciesCommon": "Ring-necked Pheasant"
  }, {
    "audio": require("./audio/GROUSE__RUFFED.MP3"),
    "order": "Galliformes",
    "family": "Phasianidae",
    "familyCommon": "Partridges/Grouse/Turkeys/Quail",
    "speciesCommon": "Ruffed Grouse"
  }, {
    "audio": require("./audio/CHICKEN__GREATER_PRAIRE.MP3"),
    "order": "Galliformes",
    "family": "Phasianidae",
    "familyCommon": "Partridges/Grouse/Turkeys/Quail",
    "speciesCommon": "Greater Prairie-Chicken"
  }, {
    "audio": require("./audio/TURKEY__WILD.MP3"),
    "order": "Galliformes",
    "family": "Phasianidae",
    "familyCommon": "Partridges/Grouse/Turkeys/Quail",
    "speciesCommon": "Wild Turkey"
  }, {
    "audio": require("./audio/RAIL__YELLOW.MP3"),
    "order": "Gruiformes",
    "family": "Rallidae",
    "familyCommon": "Rails/Gallinules/Coots",
    "speciesCommon": "Yellow Rail"
  }, {
    "audio": require("./audio/RAIL__VIRGINIA.MP3"),
    "order": "Gruiformes",
    "family": "Rallidae",
    "familyCommon": "Rails/Gallinules/Coots",
    "speciesCommon": "Virginia Rail"
  }, {
    "audio": require("./audio/RAIL__SORA.MP3"),
    "order": "Gruiformes",
    "family": "Rallidae",
    "familyCommon": "Rails/Gallinules/Coots",
    "speciesCommon": "Sora"
  }, {
    "audio": require("./audio/MOORHEN__COMMON.MP3"),
    "order": "Gruiformes",
    "family": "Rallidae",
    "familyCommon": "Rails/Gallinules/Coots",
    "speciesCommon": "Common Moorhen"
  }, {
    "audio": require("./audio/COOT__AMERICAN.MP3"),
    "order": "Gruiformes",
    "family": "Rallidae",
    "familyCommon": "Rails/Gallinules/Coots",
    "speciesCommon": "American Coot"
  }, {
    "audio": require("./audio/CRANE__SANDHILL.MP3"),
    "order": "Gruiformes",
    "family": "Gruidae",
    "familyCommon": "Cranes",
    "speciesCommon": "Sandhill Crane"
  }, {
    "audio": require("./audio/KILLDEER.MP3"),
    "order": "Charadriiformes",
    "family": "Charadriidae",
    "familyCommon": "Lapwings/Plovers",
    "speciesCommon": "Killdeer"
  }, {
    "audio": require("./audio/SANDPIPER__SPOTTED.MP3"),
    "order": "Charadriiformes",
    "family": "Scolopacidae",
    "familyCommon": "Sandpipers/Phalaropes/Allies",
    "speciesCommon": "Spotted Sandpiper"
  }, {
    "audio": require("./audio/SANDPIPER__UPLAND.MP3"),
    "order": "Charadriiformes",
    "family": "Scolopacidae",
    "familyCommon": "Sandpipers/Phalaropes/Allies",
    "speciesCommon": "Upland Sandpiper"
  }, {
    "audio": require("./audio/SNIPE__COMMON.MP3"),
    "order": "Charadriiformes",
    "family": "Scolopacidae",
    "familyCommon": "Sandpipers/Phalaropes/Allies",
    "speciesCommon": "Common Snipe"
  }, {
    "audio": require("./audio/WOODCOCK__AMERICAN.MP3"),
    "order": "Charadriiformes",
    "family": "Scolopacidae",
    "familyCommon": "Sandpipers/Phalaropes/Allies",
    "speciesCommon": "American Woodcock"
  }, {
    "audio": require("./audio/GULL__RING_BILLED.MP3"),
    "order": "Charadriiformes",
    "family": "Laridae",
    "familyCommon": "Skuas/Gulls/Terns/Skimmers",
    "speciesCommon": "Ring-billed Gull"
  }, {
    "audio": require("./audio/TERN__CASPIAN.MP3"),
    "order": "Charadriiformes",
    "family": "Laridae",
    "familyCommon": "Skuas/Gulls/Terns/Skimmers",
    "speciesCommon": "Caspian Tern"
  }, {
    "audio": require("./audio/TERN__FORSTER_S.MP3"),
    "order": "Charadriiformes",
    "family": "Laridae",
    "familyCommon": "Skuas/Gulls/Terns/Skimmers",
    "speciesCommon": "Forster's Tern"
  }, {
    "audio": require("./audio/TERN__BLACK.MP3"),
    "order": "Charadriiformes",
    "family": "Laridae",
    "familyCommon": "Skuas/Gulls/Terns/Skimmers",
    "speciesCommon": "Black Tern"
  }, {
    "audio": require("./audio/DOVE__ROCK.MP3"),
    "order": "Columbiformes",
    "family": "Columbidae",
    "familyCommon": "Pigeons/Doves",
    "speciesCommon": "Rock Pigeon"
  }, {
    "audio": require("./audio/DOVE__MOURNING.mp3"),
    "order": "Columbiformes",
    "family": "Columbidae",
    "familyCommon": "Pigeons/Doves",
    "speciesCommon": "Mourning Dove"
  }, {
    "audio": require("./audio/CUCKOO__BLACK_BILLED.MP3"),
    "order": "Cuculiformes",
    "family": "Cuculidae",
    "familyCommon": "Cuckoos/Roadrunners/Anis",
    "speciesCommon": "Black-billed Cuckoo"
  }, {
    "audio": require("./audio/OWL__EASTERN_SCREECH.MP3"),
    "order": "Strigiformes",
    "family": "Strigidae",
    "familyCommon": "Typical Owls",
    "speciesCommon": "Eastern Screech Owl"
  }, {
    "audio": require("./audio/OWL__GREAT_HORNED.MP3"),
    "order": "Strigiformes",
    "family": "Strigidae",
    "familyCommon": "Typical Owls",
    "speciesCommon": "Great Horned Owl"
  }, {
    "audio": require("./audio/OWL__BARRED.MP3"),
    "order": "Strigiformes",
    "family": "Strigidae",
    "familyCommon": "Typical Owls",
    "speciesCommon": "Barred Owl"
  }, {
    "audio": require("./audio/OWL__NORTHERN_SAW_WHET.MP3"),
    "order": "Strigiformes",
    "family": "Strigidae",
    "familyCommon": "Typical Owls",
    "speciesCommon": "Northern Saw-whet Owl"
  }, {
    "audio": require("./audio/WHIP_POOR_WILL.MP3"),
    "order": "Caprimulgiformes",
    "family": "Caprimulgidae",
    "familyCommon": "Goatsuckers",
    "speciesCommon": "Whip-poor-will"
  }, {
    "audio": require("./audio/SWIFT__CHIMNEY.MP3"),
    "order": "Apodiformes",
    "family": "Apodidae",
    "familyCommon": "Swifts",
    "speciesCommon": "Chimney Swift"
  }, {
    "audio": require("./audio/HUMMINGBIRD__RUBY_THROATED.MP3"),
    "order": "Apodiformes",
    "family": "Trochilidae",
    "familyCommon": "Hummingbirds",
    "speciesCommon": "Ruby-throated Hummingbird"
  }, {
    "audio": require("./audio/KINGFISHER__BELTED.MP3"),
    "order": "Coraciiformes",
    "family": "Alcedinidae",
    "familyCommon": "Kingfishers",
    "speciesCommon": "Belted Kingfisher"
  }, {
    "audio": require("./audio/WOODPECKER__RED_HEADED.MP3"),
    "order": "Piciformes",
    "family": "Picidae",
    "familyCommon": "Woodpeckers/Allies",
    "speciesCommon": "Red-headed Woodpecker"
  }, {
    "audio": require("./audio/WOODPECKER__RED_BELLIED.MP3"),
    "order": "Piciformes",
    "family": "Picidae",
    "familyCommon": "Woodpeckers/Allies",
    "speciesCommon": "Red-bellied Woodpecker"
  }, {
    "audio": require("./audio/SAPSUCKER__YELLOW_BELLIED.MP3"),
    "order": "Piciformes",
    "family": "Picidae",
    "familyCommon": "Woodpeckers/Allies",
    "speciesCommon": "Yellow-bellied Sapsucker"
  }, {
    "audio": require("./audio/WOODPECKER__DOWNY.MP3"),
    "order": "Piciformes",
    "family": "Picidae",
    "familyCommon": "Woodpeckers/Allies",
    "speciesCommon": "Downy Woodpecker"
  }, {
    "audio": require("./audio/WOODPECKER__HAIRY.MP3"),
    "order": "Piciformes",
    "family": "Picidae",
    "familyCommon": "Woodpeckers/Allies",
    "speciesCommon": "Hairy Woodpecker"
  }, {
    "audio": require("./audio/FLICKER__YELLOW_SHAFTED.MP3"),
    "order": "Piciformes",
    "family": "Picidae",
    "familyCommon": "Woodpeckers/Allies",
    "speciesCommon": "Northern Flicker"
  }, {
    "audio": require("./audio/WOODPECKER__PILEATED.MP3"),
    "order": "Piciformes",
    "family": "Picidae",
    "familyCommon": "Woodpeckers/Allies",
    "speciesCommon": "Pileated Woodpecker"
  },
  // {
  //   "audio": require("./audio/"),
  //   "order": "",
  //   "family": "",
  //   "familyCommon": "",
  //   "speciesCommon": ""
  // }, {
  //   "audio": require("./audio/"),
  //   "order": "",
  //   "family": "",
  //   "familyCommon": "",
  //   "speciesCommon": ""
  // }
];

export default birds;