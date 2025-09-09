import Bird from "./bird";

const birds: Bird[] =  [
  {
    audio: [
      require("../audio/LOON__COMMON.MP3"),
      require("../audio/Common_loon_tremolo.ogg"),
    ],
    images: [
      require("../images/Gavia_immer_-Minocqua,_Wisconsin,_USA_-swimming-8.jpg"),
      require("../images/Loon,_common_04-24_a.jpg")
    ],
    order: "Gaviiformes",
    family: "Gaviidae",
    scientific: "Gavia immer",
    familyCommon: "Loons",
    speciesCommon: "Common Loon"
  }, {
    audio: [
      require("../audio/GREBE__PIED_BILLED.mp3"),
    ],
    mnemonic: "whooping kuk-kuk-cow-cow-cow-cowp-cowp",
    images: [
      require("../images/Podilymbus-podiceps-001.jpg"),
      require("../images/Pied-billed_grebe_(Podilymbus_podiceps_antarcticus)_Cundinamarca.jpg")
    ],
    order: "Podicipediformes",
    family: "Podicipedidae",
    scientific: "Podilymbus podiceps",
    familyCommon: "Grebes",
    speciesCommon: "Pied-billed Grebe"
  }, {
    audio: [
      require("../audio/BITTERN__AMERICAN.mp3"),
    ],
    mnemonic: "oong, kach, oonk",
    images: [
      require("../images/Botaurus_lentiginosus_28079.jpeg"),
      require("../images/American_Bittern_-_Nisqually_NWR.jpg")
    ],
    order: "Ciconiiformes",
    family: "Ardeidae",
    scientific: "Botaurus lentiginosus",
    familyCommon: "Herons/Bitterns/Allies",
    speciesCommon: "American Bittern"
  }, {
    audio: [
      require("../audio/BITTERN__LEAST.mp3"),
      require("../audio/Ixobrychus_exilis_-_Least_Bittern_XC251028.mp3"),
    ],
    images: [
      require("../images/Least_Bittern_For_Wiki.png"),
      require("../images/Least_bittern_(71430).jpg")
    ],
    order: "Ciconiiformes",
    family: "Ardeidae",
    scientific: "Botaurus exilis",
    familyCommon: "Herons/Bitterns/Allies",
    speciesCommon: "Least Bittern"
  }, {
    audio: [
      require("../audio/HERON__BLACK_CROWNED_NIGHT.mp3"),
      require("../audio/Nycticorax_nycticorax_-_Black-crowned_Night_Heron_-_XC99573.ogg"),
    ],
    images: [
      require("../images/BlackCrownedNightHeronDusky.jpg"),
      require("../images/Nycticorax_nycticorax_457953189.jpg")
    ],
    order: "Ciconiiformes",
    family: "Ardeidae",
    scientific: "Nycticorax nycticorax",
    familyCommon: "Herons/Bitterns/Allies",
    speciesCommon: "Black-crowned Night-Heron"
  }, {
    audio: [
      require("../audio/GOOSE__CANADA.mp3"),
      require("../audio/Branta_canadensis.mp3"),
    ],
    images: [
      require("../images/Canada_goose_on_Seedskadee_NWR_(27826185489).jpg"),
      require("../images/Branta_canadensis_-near_Oceanville,_New_Jersey,_USA_-flying-8.jpg")
    ],
    order: "Anseriformes",
    family: "Anatidae",
    scientific: "Branta canadensis",
    familyCommon: "Ducks/Geese/Swans",
    speciesCommon: "Canada Goose"
  }, {
    audio: [
      require("../audio/DUCK__WOOD.mp3"),
      require("../audio/Aix_sponsa_-_Wood_Duck_-_XC63109.mp3"),
    ],
    images: [
      require("../images/Wood_Duck_Wissahickon_Creek.png"),
      require("../images/Hen_Wood_Duck.png")
    ],
    order: "Anseriformes",
    family: "Anatidae",
    scientific: "Aix sponsa",
    familyCommon: "Ducks/Geese/Swans",
    speciesCommon: "Wood Duck"
  }, {
    audio: [
      require("../audio/MALLARD.mp3"),
      require("../audio/Anas_platyrhynchos_-_Mallard_-_XC62258.mp3"),
    ],
    images: [
      require("../images/Anas_platyrhynchos_male_female_quadrat.jpg"),
      require("../images/DrakeMallardPortrait.png")
    ],
    order: "Anseriformes",
    family: "Anatidae",
    scientific: "Anas platyrhynchos",
    familyCommon: "Ducks/Geese/Swans",
    speciesCommon: "Mallard"
  }, {
    audio: [
      require("../audio/GOSHAWK__NORTHERN.mp3"),
    ],
    images: [
      require("../images/Goshawkmale66.jpg"),
      require("../images/Accipiter_gentilisAAP045CA.jpg")
    ],
    order: "Falconiformes",
    family: "Accipitridae",
    scientific: "Astur atricapillus",
    familyCommon: "Hawks/Kites/Eagles/Allies",
    speciesCommon: "Northern Goshawk"
  }, {
    audio: [
      require("../audio/HAWK__RED_SHOULDERED.mp3"),
      require("../audio/Red-shouldered_hawk_calling.ogg"),
    ],
    images: [
      require("../images/Red-shouldered_Hawk_(Buteo_lineatus)_-_Blue_Cypress_Lake,_Florida.jpg"),
      require("../images/Red-shouldered_hawk_taking_flight.jpeg")
    ],
    order: "Falconiformes",
    family: "Accipitridae",
    scientific: "Buteo lineatus",
    familyCommon: "Hawks/Kites/Eagles/Allies",
    speciesCommon: "Red-shouldered Hawk"
  }, {
    audio: [
      require("../audio/HAWK__BROAD_WINGED.mp3"),
    ],
    mnemonic: "very high-pitched kee-ee, almost like a whistle",
    images: [
      require("../images/Julie_Waters_broad_winged_hawk.jpeg"),
      require("../images/BroadwingedHawk23.jpg")
    ],
    order: "Falconiformes",
    family: "Accipitridae",
    scientific: "Buteo platypterus",
    familyCommon: "Hawks/Kites/Eagles/Allies",
    speciesCommon: "Broad-winged Hawk"
  }, {
    audio: [
      require("../audio/HAWK__RED_TAILED.mp3"),
      require("../audio/Screaming_Hawk.wav"),
    ],
    images: [
      require("../images/Red-tailed_Hawk_(45812546121).jpg"),
      require("../images/Red-tailed_hawk_in_flight.jpg")
    ],
    order: "Falconiformes",
    family: "Accipitridae",
    scientific: "Buteo jamaicensis",
    familyCommon: "Hawks/Kites/Eagles/Allies",
    speciesCommon: "Red-tailed Hawk"
  }, {
    audio: [
      require("../audio/KESTREL__AMERICAN.mp3"),
    ],
    mnemonic: `three basic vocalizations – the "klee" or "killy", the "whine", and the "chitter"`,
    images: [
      require("../images/AmericanKestrel02.jpg"),
      require("../images/Female_American_Kestrel.jpg")
    ],
    order: "Falconiformes",
    family: "Falconidae",
    scientific: "Falco sparverius",
    familyCommon: "Caracaras/Falcons",
    speciesCommon: "American Kestrel"
  }, {
    audio: [
      require("../audio/MERLIN.MP3"),
      require("../audio/Falco_columbarius_-_Merlin_-_XC101582.ogg"),
    ],
    images: [
      require("../images/Merlin_in_Prospect_Park_(63386).jpg"),
      require("../images/Merlin,_Dumfries_&_Galloway,_Scotland_(53554254330).jpg")
    ],
    order: "Falconiformes",
    family: "Falconidae",
    scientific: "Falco columbarius",
    familyCommon: "Caracaras/Falcons",
    speciesCommon: "Merlin"
  }, {
    audio: [
      require("../audio/PHEASANT__RING_NECKED.MP3"),
      require("../audio/Phasianus_colchicus.ogg"),
    ],
    images: [
      require("../images/Pheasant_(Phasianus_colchicus)_(51028701818).jpg"),
      require("../images/Phasianus_colchicus_-Rutland_Water_-female-8.jpg")
    ],
    order: "Galliformes",
    family: "Phasianidae",
    scientific: "Phasianus colchicus",
    familyCommon: "Partridges/Grouse/Turkeys/Quail",
    speciesCommon: "Ring-necked Pheasant"
  }, {
    audio: [
      require("../audio/GROUSE__RUFFED.MP3"),
      require("../audio/Bonasa-umbellus.20100830.ogg"),
    ],
    images: [
      require("../images/Ruffed_Grouse_(18645551408).jpg"),
      require("../images/Bonasa-umbellus-001edit1.jpg")
    ],
    order: "Galliformes",
    family: "Phasianidae",
    scientific: "Bonasa umbellus",
    familyCommon: "Partridges/Grouse/Turkeys/Quail",
    speciesCommon: "Ruffed Grouse"
  }, {
    audio: [
      require("../audio/CHICKEN__GREATER_PRAIRE.MP3"),
    ],
    images: [
      require("../images/Tympanuchus_cupido_-Illinois,_USA_-male_displaying-8_.jpg"),
      require("../images/Greater_Prairie_Chicken_(Tympanuchus_cupido)_(20351644665).jpg")
    ],
    order: "Galliformes",
    family: "Phasianidae",
    scientific: "Tympanuchus cupido",
    familyCommon: "Partridges/Grouse/Turkeys/Quail",
    speciesCommon: "Greater Prairie-Chicken"
  }, {
    audio: [
      require("../audio/TURKEY__WILD.MP3"),
    ],
    images: [
      require("../images/Gall-dindi.jpg"),
      require("../images/Wild_Turkey_(female)_-_Meleagris_gallopavo.jpg")
    ],
    order: "Galliformes",
    family: "Phasianidae",
    scientific: "Meleagris gallopavo",
    familyCommon: "Partridges/Grouse/Turkeys/Quail",
    speciesCommon: "Wild Turkey"
  }, {
    audio: [
      require("../audio/RAIL__YELLOW.MP3"),
      require("../audio/Coturnicops_noveboracensis_-_Yellow_Rail_XC344711.mp3"),
    ],
    images: [
      require("../images/Yellow_Rail.jpg"),
      require("../images/303199891-1280px.jpg")
    ],
    order: "Gruiformes",
    family: "Rallidae",
    scientific: "Coturnicops noveboracensis",
    familyCommon: "Rails/Gallinules/Coots",
    speciesCommon: "Yellow Rail"
  }, {
    audio: [
      require("../audio/RAIL__VIRGINIA.MP3"),
    ],
    mnemonic: `"tick-it" or "kid-ick"`,
    images: [
      require("../images/Virginia_rail_(41109).jpg"),
      require("../images/Virginia_rail.jpeg")
    ],
    order: "Gruiformes",
    family: "Rallidae",
    scientific: "Rallus limicola",
    familyCommon: "Rails/Gallinules/Coots",
    speciesCommon: "Virginia Rail"
  }, {
    audio: [
      require("../audio/RAIL__SORA.MP3"),
      require("../audio/Porzana_carolina_-_Sora_XC109542.mp3"),
    ],
    images: [
      require("../images/Sora_(Porzana_carolina).jpg"),
      require("../images/Porzana_carolina.jpg")
    ],
    order: "Gruiformes",
    family: "Rallidae",
    scientific: "Porzana carolina",
    familyCommon: "Rails/Gallinules/Coots",
    speciesCommon: "Sora"
  }, {
    audio: [
      require("../audio/MOORHEN__COMMON.MP3"),
    ],
    images: [
      require("../images/Common-gallinule-galapagos-casey-klebba.jpg"),
      require("../images/Gallinula_galeata_cachinnans_Everglades.jpg")
    ],
    order: "Gruiformes",
    family: "Rallidae",
    scientific: "Gallinula chloropus",
    familyCommon: "Rails/Gallinules/Coots",
    speciesCommon: "Common Moorhen"
  }, {
    audio: [
      require("../audio/COOT__AMERICAN.MP3"),
    ],
    images: [
      require("../images/American_coot_in_Prospect_Park_(06152).jpg"),
      require("../images/Fulica_americana.jpg")
    ],
    order: "Gruiformes",
    family: "Rallidae",
    scientific: "Fulica americana",
    familyCommon: "Rails/Gallinules/Coots",
    speciesCommon: "American Coot"
  }, {
    audio: [
      require("../audio/CRANE__SANDHILL.MP3"),
      require("../audio/Grus_canadensis_Denali_National_Park.ogg"),
    ],
    images: [
      require("../images/Sandhill_Crane_JG.jpg"),
      require("../images/Grus_canadensis_in_flight-2618.jpg")
    ],
    order: "Gruiformes",
    family: "Gruidae",
    scientific: "Antigone canadensis",
    familyCommon: "Cranes",
    speciesCommon: "Sandhill Crane"
  }, {
    audio: [
      require("../audio/KILLDEER.MP3"),
      require("../audio/Charadrius_vociferus.ogg"),
    ],
    images: [
      require("../images/1512px-Killdeer_Heislerville.png"),
      require("../images/Kildeer_(6316766771).jpg")
    ],
    order: "Charadriiformes",
    family: "Charadriidae",
    scientific: "Charadrius vociferus",
    familyCommon: "Lapwings/Plovers",
    speciesCommon: "Killdeer"
  }, {
    audio: [
      require("../audio/SANDPIPER__SPOTTED.MP3"),
      require("../audio/Spotted_Sandpiper.ogg"),
    ],
    images: [
      require("../images/Actitis-macularia-005.jpg"),
      require("../images/Actitis-macularia-004.jpg")
    ],
    order: "Charadriiformes",
    family: "Scolopacidae",
    scientific: "Actitis macularius",
    familyCommon: "Sandpipers/Phalaropes/Allies",
    speciesCommon: "Spotted Sandpiper"
  }, {
    audio: [
      require("../audio/SANDPIPER__UPLAND.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Charadriiformes",
    family: "Scolopacidae",
    familyCommon: "Sandpipers/Phalaropes/Allies",
    speciesCommon: "Upland Sandpiper"
  }, {
    audio: [
      require("../audio/SNIPE__COMMON.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Charadriiformes",
    family: "Scolopacidae",
    familyCommon: "Sandpipers/Phalaropes/Allies",
    speciesCommon: "Common Snipe"
  }, {
    audio: [
      require("../audio/WOODCOCK__AMERICAN.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Charadriiformes",
    family: "Scolopacidae",
    familyCommon: "Sandpipers/Phalaropes/Allies",
    speciesCommon: "American Woodcock"
  }, {
    audio: [
      require("../audio/GULL__RING_BILLED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Charadriiformes",
    family: "Laridae",
    familyCommon: "Skuas/Gulls/Terns/Skimmers",
    speciesCommon: "Ring-billed Gull"
  }, {
    audio: [
      require("../audio/TERN__CASPIAN.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Charadriiformes",
    family: "Laridae",
    familyCommon: "Skuas/Gulls/Terns/Skimmers",
    speciesCommon: "Caspian Tern"
  }, {
    audio: [
      require("../audio/TERN__FORSTER_S.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Charadriiformes",
    family: "Laridae",
    familyCommon: "Skuas/Gulls/Terns/Skimmers",
    speciesCommon: "Forster's Tern"
  }, {
    audio: [
      require("../audio/TERN__BLACK.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Charadriiformes",
    family: "Laridae",
    familyCommon: "Skuas/Gulls/Terns/Skimmers",
    speciesCommon: "Black Tern"
  }, {
    audio: [
      require("../audio/DOVE__ROCK.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Columbiformes",
    family: "Columbidae",
    familyCommon: "Pigeons/Doves",
    speciesCommon: "Rock Pigeon"
  }, {
    audio: [
      require("../audio/DOVE__MOURNING.mp3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Columbiformes",
    family: "Columbidae",
    familyCommon: "Pigeons/Doves",
    speciesCommon: "Mourning Dove"
  }, {
    audio: [
      require("../audio/CUCKOO__BLACK_BILLED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Cuculiformes",
    family: "Cuculidae",
    familyCommon: "Cuckoos/Roadrunners/Anis",
    speciesCommon: "Black-billed Cuckoo"
  }, {
    audio: [
      require("../audio/OWL__EASTERN_SCREECH.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Strigiformes",
    family: "Strigidae",
    familyCommon: "Typical Owls",
    speciesCommon: "Eastern Screech Owl"
  }, {
    audio: [
      require("../audio/OWL__GREAT_HORNED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Strigiformes",
    family: "Strigidae",
    familyCommon: "Typical Owls",
    speciesCommon: "Great Horned Owl"
  }, {
    audio: [
      require("../audio/OWL__BARRED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Strigiformes",
    family: "Strigidae",
    familyCommon: "Typical Owls",
    speciesCommon: "Barred Owl"
  }, {
    audio: [
      require("../audio/OWL__NORTHERN_SAW_WHET.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Strigiformes",
    family: "Strigidae",
    familyCommon: "Typical Owls",
    speciesCommon: "Northern Saw-whet Owl"
  }, {
    audio: [
      require("../audio/WHIP_POOR_WILL.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Caprimulgiformes",
    family: "Caprimulgidae",
    familyCommon: "Goatsuckers",
    speciesCommon: "Whip-poor-will"
  }, {
    audio: [
      require("../audio/SWIFT__CHIMNEY.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Apodiformes",
    family: "Apodidae",
    familyCommon: "Swifts",
    speciesCommon: "Chimney Swift"
  }, {
    audio: [
      require("../audio/HUMMINGBIRD__RUBY_THROATED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Apodiformes",
    family: "Trochilidae",
    familyCommon: "Hummingbirds",
    speciesCommon: "Ruby-throated Hummingbird"
  }, {
    audio: [
      require("../audio/KINGFISHER__BELTED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Coraciiformes",
    family: "Alcedinidae",
    familyCommon: "Kingfishers",
    speciesCommon: "Belted Kingfisher"
  }, {
    audio: [
      require("../audio/WOODPECKER__RED_HEADED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Piciformes",
    family: "Picidae",
    familyCommon: "Woodpeckers/Allies",
    speciesCommon: "Red-headed Woodpecker"
  }, {
    audio: [
      require("../audio/WOODPECKER__RED_BELLIED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Piciformes",
    family: "Picidae",
    familyCommon: "Woodpeckers/Allies",
    speciesCommon: "Red-bellied Woodpecker"
  }, {
    audio: [
      require("../audio/SAPSUCKER__YELLOW_BELLIED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Piciformes",
    family: "Picidae",
    familyCommon: "Woodpeckers/Allies",
    speciesCommon: "Yellow-bellied Sapsucker"
  }, {
    audio: [
      require("../audio/WOODPECKER__DOWNY.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Piciformes",
    family: "Picidae",
    familyCommon: "Woodpeckers/Allies",
    speciesCommon: "Downy Woodpecker"
  }, {
    audio: [
      require("../audio/WOODPECKER__HAIRY.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Piciformes",
    family: "Picidae",
    familyCommon: "Woodpeckers/Allies",
    speciesCommon: "Hairy Woodpecker"
  }, {
    audio: [
      require("../audio/FLICKER__YELLOW_SHAFTED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Piciformes",
    family: "Picidae",
    familyCommon: "Woodpeckers/Allies",
    speciesCommon: "Northern Flicker"
  }, {
    audio: [
      require("../audio/WOODPECKER__PILEATED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Piciformes",
    family: "Picidae",
    familyCommon: "Woodpeckers/Allies",
    speciesCommon: "Pileated Woodpecker"
  }, {
    audio: [
      require("../audio/FLYCATCHER__OLIVE_SIDED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Olive-sided Flycatcher"
  }, {
    audio: [
      require("../audio/PEWEE__EASTERN_WOOD.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Eastern Wood-Pewee"
  }, {
    audio: [
      require("../audio/FLYCATCHER__YELLOW_BELLIED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Yellow-bellied Flycatcher"
  }, {
    audio: [
      require("../audio/FLYCATCHER__ACADIAN.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Acadian Flycatcher"
  }, {
    audio: [
      require("../audio/FLYCATCHER__ALDER.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Alder Flycatcher"
  }, {
    audio: [
      require("../audio/FLYCATCHER__WILLOW.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Willow Flycatcher"
  }, {
    audio: [
      require("../audio/FLYCATCHER__LEAST.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Least Flycatcher"
  }, {
    audio: [
      require("../audio/PHOEBE__EASTERN.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Eastern Phoebe"
  }, {
    audio: [
      require("../audio/FLYCATCHER__GREAT_CRESTED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Great Crested Flycatcher"
  }, {
    audio: [
      require("../audio/KINGBIRD__EASTERN.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Eastern Kingbird"
  }, {
    audio: [
      require("../audio/VIREO__BELL_S.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Vireonidae",
    familyCommon: "Vireos",
    speciesCommon: "Bell's Vireo"
  }, {
    audio: [
      require("../audio/VIREO__YELLOW_THROATED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Vireonidae",
    familyCommon: "Vireos",
    speciesCommon: "Yellow-throated Vireo"
  }, {
    audio: [
      require("../audio/VIREO__BLUE_HEADED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Vireonidae",
    familyCommon: "Vireos",
    speciesCommon: "Blue-headed Vireo"
  }, {
    audio: [
      require("../audio/VIREO__WARBLING.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Vireonidae",
    familyCommon: "Vireos",
    speciesCommon: "Warbling Vireo"
  }, {
    audio: [
      require("../audio/VIREO__PHILADELPHIA.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Vireonidae",
    familyCommon: "Vireos",
    speciesCommon: "Philadelphia Vireo"
  }, {
    audio: [
      require("../audio/VIREO__RED_EYED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Vireonidae",
    familyCommon: "Vireos",
    speciesCommon: "Red-eyed Vireo"
  }, {
    audio: [
      require("../audio/JAY__GREY.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Corvidae",
    familyCommon: "Jays/Crows",
    speciesCommon: "Gray Jay"
  }, {
    audio: [
      require("../audio/JAY__BLUE.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Corvidae",
    familyCommon: "Jays/Crows",
    speciesCommon: "Blue Jay"
  }, {
    audio: [
      require("../audio/CROW__AMERICAN.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Corvidae",
    familyCommon: "Jays/Crows",
    speciesCommon: "American Crow"
  }, {
    audio: [
      require("../audio/RAVEN__COMMON.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Corvidae",
    familyCommon: "Jays/Crows",
    speciesCommon: "Common Raven"
  }, {
    audio: [
      require("../audio/LARK__HORNED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Alaudidae",
    familyCommon: "Larks",
    speciesCommon: "Horned Lark"
  }, {
    audio: [
      require("../audio/MARTIN__PURPLE.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Hirundinidae",
    familyCommon: "Swallows",
    speciesCommon: "Purple Martin"
  }, {
    audio: [
      require("../audio/SWALLOW__TREE.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Hirundinidae",
    familyCommon: "Swallows",
    speciesCommon: "Tree Swallow"
  }, {
    audio: [
      require("../audio/SWALLOW__NORTHERN_ROUGH_WIN.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Hirundinidae",
    familyCommon: "Swallows",
    speciesCommon: "Northern Rough-winged Swallow"
  }, {
    audio: [
      require("../audio/SWALLOW__BANK.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Hirundinidae",
    familyCommon: "Swallows",
    speciesCommon: "Bank Swallow"
  }, {
    audio: [
      require("../audio/SWALLOW__BARN.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Hirundinidae",
    familyCommon: "Swallows",
    speciesCommon: "Barn Swallow"
  }, {
    audio: [
      require("../audio/CHICKADEE__BLACK_CAPPED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Paridae",
    familyCommon: "Chickadees/Titmice",
    speciesCommon: "Black-capped Chickadee"
  }, {
    audio: [
      require("../audio/CHICKADEE__BOREAL.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Paridae",
    familyCommon: "Chickadees/Titmice",
    speciesCommon: "Boreal Chickadee"
  }, {
    audio: [
      require("../audio/TITMOUSE__TUFTED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Paridae",
    familyCommon: "Chickadees/Titmice",
    speciesCommon: "Tufted Titmouse"
  }, {
    audio: [
      require("../audio/NUTHATCH__RED_BREASTED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Sittidae",
    familyCommon: "Nuthatches",
    speciesCommon: "Red-breasted Nuthatch"
  }, {
    audio: [
      require("../audio/NUTHATCH__WHITE_BREASTED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Sittidae",
    familyCommon: "Nuthatches",
    speciesCommon: "White-breasted Nuthatch"
  }, {
    audio: [
      require("../audio/CREEPER__BROWN.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Certhiidae",
    familyCommon: "Creepers",
    speciesCommon: "Brown Creeper"
  }, {
    audio: [
      require("../audio/WREN__HOUSE.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Troglodytidae",
    familyCommon: "Wrens",
    speciesCommon: "House Wren"
  }, {
    audio: [
      require("../audio/WREN__WINTER.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Troglodytidae",
    familyCommon: "Wrens",
    speciesCommon: "Winter Wren"
  }, {
    audio: [
      require("../audio/WREN__SEDGE.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Troglodytidae",
    familyCommon: "Wrens",
    speciesCommon: "Sedge Wren"
  }, {
    audio: [
      require("../audio/WREN__MARSH.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Troglodytidae",
    familyCommon: "Wrens",
    speciesCommon: "Marsh Wren"
  }, {
    audio: [
      require("../audio/KINGLET__GOLDEN_CROWNED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Regulidae",
    familyCommon: "Kinglets",
    speciesCommon: "Golden-crowned Kinglet"
  }, {
    audio: [
      require("../audio/KINGLET__RUBY_CROWNED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Regulidae",
    familyCommon: "Kinglets",
    speciesCommon: "Ruby-crowned Kinglet"
  }, {
    audio: [
      require("../audio/GNATCATCHER__BLUE_GREY.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Sylviidae",
    familyCommon: "Old World Warblers/Gnatcatchers",
    speciesCommon: "Blue-gray Gnatcatcher"
  }, {
    audio: [
      require("../audio/BLUEBIRD__EASTERN.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Turdidae",
    familyCommon: "Thrushes",
    speciesCommon: "Eastern Bluebird"
  }, {
    audio: [
      require("../audio/VEERY.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Turdidae",
    familyCommon: "Thrushes",
    speciesCommon: "Veery"
  }, {
    audio: [
      require("../audio/THRUSH__SWAINSON_S.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Turdidae",
    familyCommon: "Thrushes",
    speciesCommon: "Swainson's Thrush"
  }, {
    audio: [
      require("../audio/THRUSH__HERMIT.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Turdidae",
    familyCommon: "Thrushes",
    speciesCommon: "Hermit Thrush"
  }, {
    audio: [
      require("../audio/THRUSH__WOOD.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Turdidae",
    familyCommon: "Thrushes",
    speciesCommon: "Wood Thrush"
  }, {
    audio: [
      require("../audio/ROBIN__AMERICAN.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Turdidae",
    familyCommon: "Thrushes",
    speciesCommon: "American Robin"
  }, {
    audio: [
      require("../audio/CATBIRD__GREY.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Mimidae",
    familyCommon: "Mockingbirds/Thrashers",
    speciesCommon: "Gray Catbird"
  }, {
    audio: [
      require("../audio/THRASHER__BROWN.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Mimidae",
    familyCommon: "Mockingbirds/Thrashers",
    speciesCommon: "Brown Thrasher"
  }, {
    audio: [
      require("../audio/STARLING__EUROPEAN.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Sturnidae",
    familyCommon: "Starlings",
    speciesCommon: "European Starling"
  }, {
    audio: [
      require("../audio/WAXWING__CEDAR.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Bombycillidae",
    familyCommon: "Waxwings",
    speciesCommon: "Cedar Waxwing"
  }, {
    audio: [
      require("../audio/WARBLER__BLUE_WINGED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Blue-winged Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__GOLDEN_WINGED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Golden-winged Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__TENNESSEE.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Tennessee Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__NASHVILLE.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Nashville Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__PARULA.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Northern Parula"
  }, {
    audio: [
      require("../audio/WARBER__YELLOW.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Yellow Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__CHESTNUT_SIDED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Chestnut-sided Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__MAGNOLIA.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Magnolia Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__CAPE_MAY.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Cape May Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__BLACK_THROATED_BLU.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Black-throated Blue Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__YELLOW_RUMPED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Yellow-rumped Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__BLACK_THROATED_GRE.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Black-throated Green Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__BLACKBURNIAN.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Blackburnian Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__YELLOW_THROATED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Yellow-throated Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__PINE.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Pine Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__PALM.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Palm Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__BAY_BREASTED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Bay-breasted Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__CERULEAN.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Cerulean Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__BLACK_AND_WHITE.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Black-and-white Warbler"
  }, {
    audio: [
      require("../audio/REDSTART__AMERICAN.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "American Redstart"
  }, {
    audio: [
      require("../audio/WARBLER__PROTHONOTARY.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Prothonotary Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__WORM_EATING.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Worm-eating Warbler"
  }, {
    audio: [
      require("../audio/OVENBIRD.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Ovenbird"
  }, {
    audio: [
      require("../audio/WATERTHRUSH__NORTHERN.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Northern Waterthrush"
  }, {
    audio: [
      require("../audio/WATERTHRUSH__LOUISIANA.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Louisiana Waterthrush"
  }, {
    audio: [
      require("../audio/WARBLER__KENTUCKY.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Kentucky Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__CONNECTICUT.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Connecticut Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__MOURNING.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Mourning Warbler"
  }, {
    audio: [
      require("../audio/YELLOWTHROAT__COMMON.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Common Yellowthroat"
  }, {
    audio: [
      require("../audio/WARBLER__HOODED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Hooded Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__WILSON_S.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Wilson's Warbler"
  }, {
    audio: [
      require("../audio/CHAT__YELLOW_BREASTED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Yellow-breasted Chat"
  }, {
    audio: [
      require("../audio/WARBLER__CANADA.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Canada Warbler"
  }, {
    audio: [
      require("../audio/TANAGER__SCARLET.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Thraupidae",
    familyCommon: "Tanagers",
    speciesCommon: "Scarlet Tanager"
  }, {
    audio: [
      require("../audio/TOWHEE__EASTERN.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    familyCommon: "Emberizids",
    speciesCommon: "Eastern Towhee"
  }, {
    audio: [
      require("../audio/SPARROW__CHIPPING.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    familyCommon: "Emberizids",
    speciesCommon: "Chipping Sparrow"
  },
  // { ToDo: Find audio for Clay-colored Sparrow
  //   audio: [
  // require("../audio/SPARROW__CLAY_COLORED.MP3"),
  //   order: "Passeriformes",
  //   family: "Emberizidae",
  //   familyCommon: "Emberizids",
  //   speciesCommon: "Clay-colored Sparrow"
  // },
  {
    audio: [
      require("../audio/SPARROW__FIELD.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    familyCommon: "Emberizids",
    speciesCommon: "Field Sparrow"
  }, {
    audio: [
      require("../audio/SPARROW__VESPER.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    familyCommon: "Emberizids",
    speciesCommon: "Vesper Sparrow"
  }, {
    audio: [
      require("../audio/SPARROW__LARK.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    familyCommon: "Emberizids",
    speciesCommon: "Lark Sparrow"
  }, {
    audio: [
      require("../audio/SPARROW__SAVANNAH.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    familyCommon: "Emberizids",
    speciesCommon: "Savannah Sparrow"
  }, {
    audio: [
      require("../audio/SPARROW__GRASSHOPPER.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    familyCommon: "Emberizids",
    speciesCommon: "Grasshopper Sparrow"
  }, {
    audio: [
      require("../audio/SPARROW__HENSLOW_S.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    familyCommon: "Emberizids",
    speciesCommon: "Henslow's Sparrow"
  }, {
    audio: [
      require("../audio/SPARROW__SONG.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    familyCommon: "Emberizids",
    speciesCommon: "Song Sparrow"
  }, {
    audio: [
      require("../audio/SPARROW__LINCOLN.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    familyCommon: "Emberizids",
    speciesCommon: "Lincoln's Sparrow"
  }, {
    audio: [
      require("../audio/SPARROW__SWAMP.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    familyCommon: "Emberizids",
    speciesCommon: "Swamp Sparrow"
  }, {
    audio: [
      require("../audio/SPARROW__WHITE_THROATED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    familyCommon: "Emberizids",
    speciesCommon: "White-throated Sparrow"
  }, {
    audio: [
      require("../audio/JUNCO__DARK_EYED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    familyCommon: "Emberizids",
    speciesCommon: "Dark-eyed Junco"
  }, {
    audio: [
      require("../audio/CARDINAL__NORTHERN.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Cardinalidae",
    familyCommon: "Cardinals/Saltators/Allies",
    speciesCommon: "Northern Cardinal"
  }, {
    audio: [
      require("../audio/GROSBEAK__ROSE_BREASTED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Cardinalidae",
    familyCommon: "Cardinals/Saltators/Allies",
    speciesCommon: "Rose-breasted Grosbeak"
  }, {
    audio: [
      require("../audio/BUNTING__INDIGO.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Cardinalidae",
    familyCommon: "Cardinals/Saltators/Allies",
    speciesCommon: "Indigo Bunting"
  }, {
    audio: [
      require("../audio/DICKCISSEL.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Cardinalidae",
    familyCommon: "Cardinals/Saltators/Allies",
    speciesCommon: "Dickcissel"
  }, {
    audio: [
      require("../audio/BOBOLINK.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Icteridae",
    familyCommon: "Blackbirds",
    speciesCommon: "Bobolink"
  }, {
    audio: [
      require("../audio/BLACKBIRD__RED_WINGED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Icteridae",
    familyCommon: "Blackbirds",
    speciesCommon: "Red-winged Blackbird"
  }, {
    audio: [
      require("../audio/MEADOWLARK__EASTERN.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Icteridae",
    familyCommon: "Blackbirds",
    speciesCommon: "Eastern Meadowlark"
  }, {
    audio: [
      require("../audio/MEADOWLARK__WESTERN.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Icteridae",
    familyCommon: "Blackbirds",
    speciesCommon: "Western Meadowlark"
  }, {
    audio: [
      require("../audio/BLACKBIRD__YELLOW_HEADED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Icteridae",
    familyCommon: "Blackbirds",
    speciesCommon: "Yellow-headed Blackbird"
  }, {
    audio: [
      require("../audio/BLACKBIRD__BREWER_S.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Icteridae",
    familyCommon: "Blackbirds",
    speciesCommon: "Brewer's Blackbird"
  }, {
    audio: [
      require("../audio/GRACKLE__COMMON.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Icteridae",
    familyCommon: "Blackbirds",
    speciesCommon: "Common Grackle"
  }, {
    audio: [
      require("../audio/COWBIRD__BROWN_HEADED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Icteridae",
    familyCommon: "Blackbirds",
    speciesCommon: "Brown-headed Cowbird"
  }, {
    audio: [
      require("../audio/BLACKBIRD__RUSTY.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Icteridae",
    familyCommon: "Blackbirds",
    speciesCommon: "Rusty Blackbird"
  }, {
    audio: [
      require("../audio/ORIOLE__ORCHARD.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Icteridae",
    familyCommon: "Blackbirds",
    speciesCommon: "Orchard Oriole"
  }, {
    audio: [
      require("../audio/ORIOLE__BALTIMORE.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Icteridae",
    familyCommon: "Blackbirds",
    speciesCommon: "Baltimore Oriole"
  }, {
    audio: [
      require("../audio/FINCH__PURPLE.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Fringillidae",
    familyCommon: "Fringilline/Cardueline Finches",
    speciesCommon: "Purple Finch"
  }, {
    audio: [
      require("../audio/FINCH__HOUSE.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Fringillidae",
    familyCommon: "Fringilline/Cardueline Finches",
    speciesCommon: "House Finch"
  }, {
    audio: [
      require("../audio/CROSSBILL__WHITE_WINGED.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Fringillidae",
    familyCommon: "Fringilline/Cardueline Finches",
    speciesCommon: "White-winged Crossbill"
  }, {
    audio: [
      require("../audio/SISKIN__PINE.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Fringillidae",
    familyCommon: "Fringilline/Cardueline Finches",
    speciesCommon: "Pine Siskin"
  }, {
    audio: [
      require("../audio/GOLDFINCH__AMERICAN.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Fringillidae",
    familyCommon: "Fringilline/Cardueline Finches",
    speciesCommon: "American Goldfinch"
  }, {
    audio: [
      require("../audio/GROSBEAK__EVENING.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Fringillidae",
    familyCommon: "Fringilline/Cardueline Finches",
    speciesCommon: "Evening Grosbeak"
  }, {
    audio: [
      require("../audio/SPARROW__HOUSE.MP3"),
    ],
    images: [
      require("../images/.jpg"),
      require("../images/.jpg")
    ],
    order: "Passeriformes",
    family: "Passeridae",
    familyCommon: "Old World Sparrows",
    speciesCommon: "House Sparrow"
  }
];

export default birds;