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
      require("../audio/Bartramia_longicauda_-_Upland_Sandpiper_-_XC104531.ogg"),
    ],
    images: [
      require("../images/UplandSandpiperOntarioCropped.jpg"),
      require("../images/Upland_Sandpiper_by_Andy_Reago__Chrissy_McClarren_550_375.webp")
    ],
    order: "Charadriiformes",
    family: "Scolopacidae",
    scientific: "Bartramia longicauda",
    familyCommon: "Sandpipers/Phalaropes/Allies",
    speciesCommon: "Upland Sandpiper"
  }, {
    audio: [
      require("../audio/SNIPE__COMMON.MP3"),
    ],
    images: [
      require("../images/Gallinago-delicata-002-cropped.jpg"),
      require("../images/Wilson's_Snipe_Bolivar_Peninsula.jpg")
    ],
    order: "Charadriiformes",
    family: "Scolopacidae",
    scientific: "Gallinago delicata",
    familyCommon: "Sandpipers/Phalaropes/Allies",
    speciesCommon: "Wilson's snipe"
  }, {
    audio: [
      require("../audio/WOODCOCK__AMERICAN.MP3"),
    ],
    images: [
      require("../images/1509px-American_woodcock_(95252).jpg"),
      require("../images/AMWO.webp")
    ],
    order: "Charadriiformes",
    family: "Scolopacidae",
    scientific: "Scolopax minor",
    familyCommon: "Sandpipers/Phalaropes/Allies",
    speciesCommon: "American Woodcock"
  }, {
    audio: [
      require("../audio/GULL__RING_BILLED.MP3"),
    ],
    images: [
      require("../images/Larus-delawarensis-021.jpg"),
      require("../images/Ring-billed_gull_in_flight_(94615)_(cropped).jpg")
    ],
    order: "Charadriiformes",
    family: "Laridae",
    scientific: "Larus delawarensis",
    familyCommon: "Skuas/Gulls/Terns/Skimmers",
    speciesCommon: "Ring-billed Gull"
  }, {
    audio: [
      require("../audio/TERN__CASPIAN.MP3"),
    ],
    images: [
      require("../images/Sterna-caspia-010.jpg"),
      require("../images/Caspian_tern_(Hydroprogne_caspia)_non-breeding.jpg")
    ],
    order: "Charadriiformes",
    family: "Laridae",
    scientific: "Hydroprogne caspia",
    familyCommon: "Skuas/Gulls/Terns/Skimmers",
    speciesCommon: "Caspian Tern"
  }, {
    audio: [
      require("../audio/TERN__FORSTER_S.MP3"),
    ],
    images: [
      require("../images/Forster's_Tern,_Horicon_NWR,_Wisconsin.jpg"),
      require("../images/Forster's_Tern.jpg")
    ],
    order: "Charadriiformes",
    family: "Laridae",
    scientific: "Sterna forsteri",
    familyCommon: "Skuas/Gulls/Terns/Skimmers",
    speciesCommon: "Forster's Tern"
  }, {
    audio: [
      require("../audio/TERN__BLACK.MP3"),
    ],
    images: [
      require("../images/Čorík_čierny_(Chlidonias_niger)_a_(4644831482).jpg"),
      require("../images/1350px-Chlidonias_niger_GNP_01.jpg")
    ],
    order: "Charadriiformes",
    family: "Laridae",
    scientific: "Chlidonias niger",
    familyCommon: "Skuas/Gulls/Terns/Skimmers",
    speciesCommon: "Black Tern"
  }, {
    audio: [
      require("../audio/DOVE__ROCK.MP3"),
    ],
    images: [
      require("../images/Wild_rock_dove_at_Raikot.png"),
      require("../images/Rock_Doves,_West_Azerbaijan.jpg")
    ],
    order: "Columbiformes",
    family: "Columbidae",
    scientific: "Columba livia",
    familyCommon: "Pigeons/Doves",
    speciesCommon: "Rock Pigeon"
  }, {
    audio: [
      require("../audio/DOVE__MOURNING.mp3"),
      require("../audio/Zenaida_macroura_vocalizations_-_pone.0027052.s009.oga"),
    ],
    images: [
      require("../images/Av_Mourning_Dove_JG.jpg"),
      require("../images/Zenaida_macroura_-California-8-2c.jpg")
    ],
    order: "Columbiformes",
    family: "Columbidae",
    scientific: "Zenaida macroura",
    familyCommon: "Pigeons/Doves",
    speciesCommon: "Mourning Dove"
  }, {
    audio: [
      require("../audio/CUCKOO__BLACK_BILLED.MP3"),
    ],
    images: [
      require("../images/Black-billed-cuckoo2.jpg"),
      require("../images/Black-billed_Cuckoo_(13883974479).jpg")
    ],
    order: "Cuculiformes",
    family: "Cuculidae",
    scientific: "Coccyzus erythropthalmus",
    familyCommon: "Cuckoos/Roadrunners/Anis",
    speciesCommon: "Black-billed Cuckoo"
  }, {
    audio: [
      require("../audio/OWL__EASTERN_SCREECH.MP3"),
    ],
    images: [
      require("../images/Eastern_Screech_Owl.jpg"),
      require("../images/EasternScreechOwl-Rufous.jpg")
    ],
    order: "Strigiformes",
    family: "Strigidae",
    scientific: "Megascops asio",
    familyCommon: "Typical Owls",
    speciesCommon: "Eastern Screech Owl"
  }, {
    audio: [
      require("../audio/OWL__GREAT_HORNED.MP3"),
      require("../audio/Bubo_virginianus_-_Great_Horned_Owl_XC450919.mp3"),
    ],
    images: [
      require("../images/Bubo_virginianus_06.jpg"),
      require("../images/Bubo_virginianus_-Canada-6.jpg")
    ],
    order: "Strigiformes",
    family: "Strigidae",
    familyCommon: "Typical Owls",
    scientific: "Bubo virginianus",
    speciesCommon: "Great Horned Owl"
  }, {
    audio: [
      require("../audio/OWL__BARRED.MP3"),
    ],
    images: [
      require("../images/Strix-varia-005.jpg"),
      require("../images/Barred_Owl_Closeup.jpg")
    ],
    order: "Strigiformes",
    family: "Strigidae",
    scientific: "Strix varia",
    familyCommon: "Typical Owls",
    speciesCommon: "Barred Owl"
  }, {
    audio: [
      require("../audio/OWL__NORTHERN_SAW_WHET.MP3"),
    ],
    images: [
      require("../images/Male_Northern_Saw-whet_Owl_(7364047820).jpg"),
      require("../images/Saw_Whet_Owl_Burian_5007.jpg")
    ],
    order: "Strigiformes",
    family: "Strigidae",
    scientific: "Aegolius acadicus",
    familyCommon: "Typical Owls",
    speciesCommon: "Northern Saw-whet Owl"
  }, {
    audio: [
      require("../audio/WHIP_POOR_WILL.MP3"),
      require("../audio/Antrostomus_vociferus_-_Eastern_Whip-poor-will_-_XC103418.ogg"),
    ],
    images: [
      require("../images/Caprimulgus_vociferusAAP065B.jpg"),
      require("../images/EasternWhip-poor-will.jpg")
    ],
    order: "Caprimulgiformes",
    family: "Caprimulgidae",
    scientific: "Antrostomus vociferus",
    familyCommon: "Goatsuckers",
    speciesCommon: "Whip-poor-will"
  }, {
    audio: [
      require("../audio/SWIFT__CHIMNEY.MP3"),
      require("../audio/Chaetura_pelagica_-_Chimney_Swift_-_XC105129.ogg"),
    ],
    images: [
      require("../images/Chaetura_pelagica,_by_Lake_Erie,_Cleveland,_Ohio,_USA_339593191.jpg"),
      require("../images/Chimney-Swifts_1926-cr.jpg")
    ],
    order: "Apodiformes",
    family: "Apodidae",
    scientific: "Chaetura pelagica",
    familyCommon: "Swifts",
    speciesCommon: "Chimney Swift"
  }, {
    audio: [
      require("../audio/HUMMINGBIRD__RUBY_THROATED.MP3"),
      require("../audio/Archilochus_colubris.ogg"),
    ],
    images: [
      require("../images/Archilochus_colubris_-flying_-male-8.jpg"),
      require("../images/Ruby-throated_hummingbird_(Archilochus_colubris)_female_Palopo.jpg")
    ],
    order: "Apodiformes",
    family: "Trochilidae",
    scientific: "Archilochus colubris",
    familyCommon: "Hummingbirds",
    speciesCommon: "Ruby-throated Hummingbird"
  }, {
    audio: [
      require("../audio/KINGFISHER__BELTED.MP3"),
      require("../audio/Megaceryle_alcyon.ogg"),
    ],
    images: [
      require("../images/BeltedKingfisherJG_Male.jpg"),
      require("../images/Megaceryle_alcyon_femelle.jpg")
    ],
    order: "Coraciiformes",
    scientific: "Megaceryle alcyon",
    family: "Alcedinidae",
    familyCommon: "Kingfishers",
    speciesCommon: "Belted Kingfisher"
  }, {
    audio: [
      require("../audio/WOODPECKER__RED_HEADED.MP3"),
    ],
    images: [
      require("../images/Melanerpes-erythrocephalus-003.jpg"),
      require("../images/Melanerpes_erythrocephalus_-tree_trunk-USA.jpg")
    ],
    order: "Piciformes",
    family: "Picidae",
    scientific: "Melanerpes erythrocephalus",
    familyCommon: "Woodpeckers/Allies",
    speciesCommon: "Red-headed Woodpecker"
  }, {
    audio: [
      require("../audio/WOODPECKER__RED_BELLIED.MP3"),
    ],
    images: [
      require("../images/Red-bellied_Woodpecker-27527.jpg"),
      require("../images/Red-bellied_Woodpecker_Female.jpg")
    ],
    order: "Piciformes",
    family: "Picidae",
    scientific: "Melanerpes carolinus",
    familyCommon: "Woodpeckers/Allies",
    speciesCommon: "Red-bellied Woodpecker"
  }, {
    audio: [
      require("../audio/SAPSUCKER__YELLOW_BELLIED.MP3"),
      require("../audio/Yellow-bellied_Sapsucker.ogg"),
    ],
    images: [
      require("../images/Yellow-bellied_sapsucker_in_CP_(40484).jpg"),
      require("../images/Yellow-bellied_sapsucker_(Sphyrapicus_varius)_female.jpg")
    ],
    order: "Piciformes",
    family: "Picidae",
    scientific: "Sphyrapicus varius",
    familyCommon: "Woodpeckers/Allies",
    speciesCommon: "Yellow-bellied Sapsucker"
  }, {
    audio: [
      require("../audio/WOODPECKER__DOWNY.MP3"),
    ],
    images: [
      require("../images/Downy_Woodpecker01.jpg"),
      require("../images/FemaleDownyWoodpecker.jpg")
    ],
    order: "Piciformes",
    family: "Picidae",
    scientific: "Dryobates pubescens",
    familyCommon: "Woodpeckers/Allies",
    speciesCommon: "Downy Woodpecker"
  }, {
    audio: [
      require("../audio/WOODPECKER__HAIRY.MP3"),
      require("../audio/Picoides_villosus.ogg"),
    ],
    images: [
      require("../images/Picoides_villosus_monticola_male1.jpg"),
      require("../images/Hairy_woodpecker.jpg")
    ],
    order: "Piciformes",
    family: "Picidae",
    scientific: "Leuconotopicus villosus",
    familyCommon: "Woodpeckers/Allies",
    speciesCommon: "Hairy Woodpecker"
  }, {
    audio: [
      require("../audio/FLICKER__YELLOW_SHAFTED.MP3"),
      require("../audio/Colaptes_auratus.ogg"),
    ],
    images: [
      require("../images/Northern_flicker,_Roslyn_(cropped).jpg"),
      require("../images/A6305966_(50335324522).jpg")
    ],
    order: "Piciformes",
    family: "Picidae",
    scientific: "Colaptes auratus",
    familyCommon: "Woodpeckers/Allies",
    speciesCommon: "Northern Flicker"
  }, {
    audio: [
      require("../audio/WOODPECKER__PILEATED.MP3"),
      require("../audio/Dryocopus_pileatus_-_Pileated_Woodpecker_-_XC61518.ogg"),
    ],
    images: [
      require("../images/PileatedWoodpeckerFeedingonTree,_crop.jpg"),
      require("../images/Pileated_Woodpecker_(9597212081),_crop.jpg")
    ],
    order: "Piciformes",
    family: "Picidae",
    scientific: "Dryocopus pileatus",
    familyCommon: "Woodpeckers/Allies",
    speciesCommon: "Pileated Woodpecker"
  }, {
    audio: [
      require("../audio/FLYCATCHER__OLIVE_SIDED.MP3"),
    ],
    images: [
      require("../images/Olive-sided_Flycatcher.jpg"),
      require("../images/Olive_sided_flycatcher.webp")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    scientific: "Contopus cooperi",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Olive-sided Flycatcher"
  }, {
    audio: [
      require("../audio/PEWEE__EASTERN_WOOD.MP3"),
    ],
    images: [
      require("../images/Eastern_wood_pewee_(71095).jpg"),
      require("../images/Contopus_virensPCCA20050724-9873B.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    scientific: "Contopus virens",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Eastern Wood-Pewee"
  }, {
    audio: [
      require("../audio/FLYCATCHER__YELLOW_BELLIED.MP3"),
    ],
    images: [
      require("../images/Yellow-bellied_Flycatcher_-_Empidonax_flaviventris.jpg"),
      require("../images/Yellow-bellied_Flycatcher2.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    scientific: "Empidonax flaviventris",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Yellow-bellied Flycatcher"
  }, {
    audio: [
      require("../audio/FLYCATCHER__ACADIAN.MP3"),
    ],
    images: [
      require("../images/Empidonax_virescens_99136793_(cropped).jpg"),
      require("../images/301816971-1280px.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    scientific: "Empidonax virescens",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Acadian Flycatcher"
  }, {
    audio: [
      require("../audio/FLYCATCHER__ALDER.MP3"),
    ],
    images: [
      require("../images/Empidonax_alnorum_CT2.jpg"),
      require("../images/301820301-1280px.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    scientific: "Empidonax alnorum",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Alder Flycatcher"
  }, {
    audio: [
      require("../audio/FLYCATCHER__WILLOW.MP3"),
      require("../audio/Empidonax_traillii.ogg"),
    ],
    images: [
      require("../images/Southwestern_Willow_Flycatcher.jpg"),
      require("../images/301824711-1280px.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    scientific: "Empidonax traillii",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Willow Flycatcher"
  }, {
    audio: [
      require("../audio/FLYCATCHER__LEAST.MP3"),
      require("../audio/Empidonax_minimus_-_Least_Flycatcher_XC134690.ogg"),
    ],
    images: [
      require("../images/Empidonax-minimus-001.jpg"),
      require("../images/Least_FlycatcherTex.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    scientific: "Empidonax minimus",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Least Flycatcher"
  }, {
    audio: [
      require("../audio/PHOEBE__EASTERN.MP3"),
      require("../audio/Sayornis_phoebe_-_Eastern_Phoebe_XC132866.ogg"),
    ],
    images: [
      require("../images/Sayornis_phoebe_-Owen_Conservation_Park,_Madison,_Wisconsin,_USA-8.jpg"),
      require("../images/Sayornis_phoebe_-Madison,_Wisconsin,_USA-8.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    scientific: "Sayornis phoebe",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Eastern Phoebe"
  }, {
    audio: [
      require("../audio/FLYCATCHER__GREAT_CRESTED.MP3"),
    ],
    images: [
      require("../images/Great_Crested_Flycatcher_RWD2.jpg"),
      require("../images/RWM_8715.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    scientific: "Myiarchus crinitus",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Great Crested Flycatcher"
  }, {
    audio: [
      require("../audio/KINGBIRD__EASTERN.MP3"),
      require("../audio/Eastern_Kingbird_Call.ogg"),
    ],
    images: [
      require("../images/Eastern_kingbird_(21559).jpg"),
      require("../images/BOTW-Homepage-Thumbnail_Eastern-Kingbird-1-1024x663.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    scientific: "Tyrannus tyrannus",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Eastern Kingbird"
  }, {
    audio: [
      require("../audio/VIREO__BELL_S.MP3"),
    ],
    images: [
      require("../images/1440px-Bell's_Vireo.jpg"),
      require("../images/web_bells-vireo_17938984569_5b0cfb690d_o_kk.webp")
    ],
    order: "Passeriformes",
    family: "Vireonidae",
    scientific: "Vireo bellii",
    familyCommon: "Vireos",
    speciesCommon: "Bell's Vireo"
  }, {
    audio: [
      require("../audio/VIREO__YELLOW_THROATED.MP3"),
    ],
    images: [
      require("../images/Vireo-flavifrons-001.jpg"),
      require("../images/Yellow-throated_Vireo_by_Dan_Pancamo_1.jpg")
    ],
    order: "Passeriformes",
    family: "Vireonidae",
    scientific: "Vireo flavifrons",
    familyCommon: "Vireos",
    speciesCommon: "Yellow-throated Vireo"
  }, {
    audio: [
      require("../audio/VIREO__BLUE_HEADED.MP3"),
      require("../audio/Vireo_solitarius_-_Blue-headed_Vireo_-_XC77879.ogg"),
    ],
    images: [
      require("../images/Blue-headed_Vireo_(8088895251).jpg"),
      require("../images/Blue-headed_Vireo.jpg")
    ],
    order: "Passeriformes",
    family: "Vireonidae",
    scientific: "Vireo solitarius",
    familyCommon: "Vireos",
    speciesCommon: "Blue-headed Vireo"
  }, {
    audio: [
      require("../audio/VIREO__WARBLING.MP3"),
      require("../audio/Vireo_gilvus_gilvus_-_Warbling_Vireo_-_XC102968.ogg"),
    ],
    images: [
      require("../images/Warbling_vireo_(82141).jpg"),
      require("../images/Warbling_vireo.jpg")
    ],
    order: "Passeriformes",
    family: "Vireonidae",
    scientific: "Vireo gilvus",
    familyCommon: "Vireos",
    speciesCommon: "Warbling Vireo"
  }, {
    audio: [
      require("../audio/VIREO__PHILADELPHIA.MP3"),
    ],
    images: [
      require("../images/Philadelphia_Vireo_Tex.jpg"),
      require("../images/Vireo_philadelphicus.jpg")
    ],
    order: "Passeriformes",
    family: "Vireonidae",
    scientific: "Vireo philadelphicus",
    familyCommon: "Vireos",
    speciesCommon: "Philadelphia Vireo"
  }, {
    audio: [
      require("../audio/VIREO__RED_EYED.MP3"),
    ],
    images: [
      require("../images/Vireo_olivaceus_-Madison_-Wisconsin_-USA-8.jpg"),
      require("../images/Red-eyed_vireo_(35215).jpg")
    ],
    order: "Passeriformes",
    family: "Vireonidae",
    scientific: "Vireo olivaceus",
    familyCommon: "Vireos",
    speciesCommon: "Red-eyed Vireo"
  }, {
    audio: [
      require("../audio/JAY__GREY.MP3"),
    ],
    images: [
      require("../images/Perisoreus_canadensis_Grand_Tetons.jpg"),
      require("../images/Perisoreus_canadensis_mercier2.jpg")
    ],
    order: "Passeriformes",
    family: "Corvidae",
    scientific: "Perisoreus canadensis",
    familyCommon: "Jays/Crows",
    speciesCommon: "Gray Jay"
  }, {
    audio: [
      require("../audio/JAY__BLUE.MP3"),
      require("../audio/Cyanocitta_cristata_-_Blue_Jay_-_XC109601.ogg"),
    ],
    images: [
      require("../images/Blue_jay_in_PP_(30960).jpg"),
      require("../images/Blue_jay_in_Central_Park_(16465).jpg")
    ],
    order: "Passeriformes",
    family: "Corvidae",
    scientific: "Cyanocitta cristata",
    familyCommon: "Jays/Crows",
    speciesCommon: "Blue Jay"
  }, {
    audio: [
      require("../audio/CROW__AMERICAN.MP3"),
      require("../audio/Corvus_brachyrhynchos_-_American_Crow_-_XC115429.ogg"),
    ],
    images: [
      require("../images/Corvus-brachyrhynchos-001.jpg"),
      require("../images/American_Crow_Brooklyn,_NY.jpg")
    ],
    order: "Passeriformes",
    family: "Corvidae",
    scientific: "Corvus brachyrhynchos",
    familyCommon: "Jays/Crows",
    speciesCommon: "American Crow"
  }, {
    audio: [
      require("../audio/RAVEN__COMMON.MP3"),
      require("../audio/Common_Raven_Grand_Teton_National_Park.ogg"),
    ],
    images: [
      require("../images/Corvus_corax_ad_berlin_090516.jpg"),
      require("../images/MK04400_Raven_(Jasper_National_Park).jpg")
    ],
    order: "Passeriformes",
    family: "Corvidae",
    scientific: "Corvus corax",
    familyCommon: "Jays/Crows",
    speciesCommon: "Common Raven"
  }, {
    audio: [
      require("../audio/LARK__HORNED.MP3"),
    ],
    images: [
      require("../images/Shore_Lark.jpg"),
      require("../images/Horned_lark.jpg")
    ],
    order: "Passeriformes",
    family: "Alaudidae",
    scientific: "Eremophila alpestris",
    familyCommon: "Larks",
    speciesCommon: "Horned Lark"
  }, {
    audio: [
      require("../audio/MARTIN__PURPLE.MP3"),
      require("../audio/Progne-subis-001.ogg"),
    ],
    images: [
      require("../images/PurpleMartin_cajay.jpg"),
      require("../images/Progne_subis_-Chicago,_USA_-female-8.jpg")
    ],
    order: "Passeriformes",
    family: "Hirundinidae",
    scientific: "Progne subis",
    familyCommon: "Swallows",
    speciesCommon: "Purple Martin"
  }, {
    audio: [
      require("../audio/SWALLOW__TREE.MP3"),
    ],
    images: [
      require("../images/Tree_swallow_in_JBWR_(25579).jpg"),
      require("../images/Tree_Swallows_-_Minneapolis_Minnesota_-_Birds_Calling.jpg")
    ],
    order: "Passeriformes",
    family: "Hirundinidae",
    scientific: "Tachycineta bicolor",
    familyCommon: "Swallows",
    speciesCommon: "Tree Swallow"
  }, {
    audio: [
      require("../audio/SWALLOW__NORTHERN_ROUGH_WIN.MP3"),
    ],
    images: [
      require("../images/Adult_Northern_Rough-winged_Swallow.jpg"),
      require("../images/Stelgidopteryx_serripennis.jpg")
    ],
    order: "Passeriformes",
    family: "Hirundinidae",
    scientific: "Stelgidopteryx serripennis",
    familyCommon: "Swallows",
    speciesCommon: "Northern Rough-winged Swallow"
  }, {
    audio: [
      require("../audio/SWALLOW__BANK.MP3"),
    ],
    images: [
      require("../images/Sand_martin_(Riparia_riparia).jpg"),
      require("../images/Digesvale.jpg")
    ],
    order: "Passeriformes",
    family: "Hirundinidae",
    scientific: "Riparia riparia",
    familyCommon: "Swallows",
    speciesCommon: "Bank Swallow"
  }, {
    audio: [
      require("../audio/SWALLOW__BARN.MP3"),
      require("../audio/Hirundo_rustica_-_Barn_Swallow_-_XC83449.ogg"),
    ],
    images: [
      require("../images/BarnSwallow_cajay.jpg"),
      require("../images/Rauchschwalbe_Hirundo_rustica.jpg")
    ],
    order: "Passeriformes",
    family: "Hirundinidae",
    scientific: "Hirundo rustica",
    familyCommon: "Swallows",
    speciesCommon: "Barn Swallow"
  }, {
    audio: [
      require("../audio/CHICKADEE__BLACK_CAPPED.MP3"),
      require("../audio/Poecile_atricapillus_-_Black-capped_Chickadee_-_XC70185.ogg"),
    ],
    images: [
      require("../images/Poecile-atricapilla-001.jpg"),
      require("../images/Black-capped_Chickadee_Stratham_NH,_Aug_2013.jpg")
    ],
    order: "Passeriformes",
    family: "Paridae",
    scientific: "Poecile atricapillus",
    familyCommon: "Chickadees/Titmice",
    speciesCommon: "Black-capped Chickadee"
  }, {
    audio: [
      require("../audio/CHICKADEE__BOREAL.MP3"),
    ],
    images: [
      require("../images/Poecile_hudsonicus_7.jpg"),
      require("../images/boreal_chickadee.webp")
    ],
    order: "Passeriformes",
    family: "Paridae",
    scientific: "Poecile hudsonicus",
    familyCommon: "Chickadees/Titmice",
    speciesCommon: "Boreal Chickadee"
  }, {
    audio: [
      require("../audio/TITMOUSE__TUFTED.MP3"),
      require("../audio/Tufted_Titmouse_call.ogg"),
    ],
    images: [
      require("../images/Tufted_titmouse_(84917).jpg"),
      require("../images/TuftedTitmouse_Gam.jpg")
    ],
    order: "Passeriformes",
    family: "Paridae",
    scientific: "Baeolophus bicolor",
    familyCommon: "Chickadees/Titmice",
    speciesCommon: "Tufted Titmouse"
  }, {
    audio: [
      require("../audio/NUTHATCH__RED_BREASTED.MP3"),
      require("../audio/Red_breasted_Nuthatch_Yosemite_National_Park.ogg"),
    ],
    images: [
      require("../images/Sitta_canadensis_5563.jpg"),
      require("../images/Sitta_canadensis_CT2.jpg")
    ],
    order: "Passeriformes",
    family: "Sittidae",
    scientific: "Sitta canadensis",
    familyCommon: "Nuthatches",
    speciesCommon: "Red-breasted Nuthatch"
  }, {
    audio: [
      require("../audio/NUTHATCH__WHITE_BREASTED.MP3"),
    ],
    images: [
      require("../images/Sitta-carolinensis-001.jpg"),
      require("../images/White-breasted_nuthatch_(26471).jpg")
    ],
    order: "Passeriformes",
    family: "Sittidae",
    scientific: "Sitta carolinensis",
    familyCommon: "Nuthatches",
    speciesCommon: "White-breasted Nuthatch"
  }, {
    audio: [
      require("../audio/CREEPER__BROWN.MP3"),
    ],
    images: [
      require("../images/Brown_creeper_at_a_banding_station_(90455).jpg"),
      require("../images/Brown_creeper_(Certhia_americana)_in_Center_City,_Philadelphia,_PA,_USA.jpg")
    ],
    order: "Passeriformes",
    family: "Certhiidae",
    scientific: "Certhia americana",
    familyCommon: "Creepers",
    speciesCommon: "Brown Creeper"
  }, {
    audio: [
      require("../audio/WREN__HOUSE.MP3"),
      require("../audio/Troglodytes_aedon_-_House_Wren_-_XC79974.ogg"),
    ],
    images: [
      require("../images/Troglodytes_aedon_NPS.jpg"),
      require("../images/House_wren_in_full_song_cropped.png")
    ],
    order: "Passeriformes",
    family: "Troglodytidae",
    scientific: "Troglodytes aedon",
    familyCommon: "Wrens",
    speciesCommon: "House Wren"
  }, {
    audio: [
      require("../audio/WREN__WINTER.MP3"),
    ],
    images: [
      require("../images/Winter_wren_on_a_tree_(90538).jpg"),
      require("../images/Winter_wren_in_Prospect_Park_(32249).jpg")
    ],
    order: "Passeriformes",
    family: "Troglodytidae",
    scientific: "Troglodytes hiemalis",
    familyCommon: "Wrens",
    speciesCommon: "Winter Wren"
  }, {
    audio: [
      require("../audio/WREN__SEDGE.MP3"),
      require("../audio/Cistothorus_stellaris_-_Sedge_Wren_-_XC106011.oga"),
    ],
    images: [
      require("../images/Kankakee_NWR_sedge_wren_vervain_6_December_2021.png"),
      require("../images/Sedge_Wren_(31204304001).jpg")
    ],
    order: "Passeriformes",
    family: "Troglodytidae",
    scientific: "Cistothorus stellaris",
    familyCommon: "Wrens",
    speciesCommon: "Sedge Wren"
  }, {
    audio: [
      require("../audio/WREN__MARSH.MP3"),
    ],
    images: [
      require("../images/Cistothorus_palustris_-Reifel_Island,_Vancouver-8.jpg"),
      require("../images/Cistothorus_palustris_CT.jpg")
    ],
    order: "Passeriformes",
    family: "Troglodytidae",
    scientific: "Cistothorus palustris",
    familyCommon: "Wrens",
    speciesCommon: "Marsh Wren"
  }, {
    audio: [
      require("../audio/KINGLET__GOLDEN_CROWNED.MP3"),
    ],
    images: [
      require("../images/Golden-Crowned_Kinglet_EBFNWR.jpg"),
      require("../images/Golden-crowned_Kinglet_RWD.jpg")
    ],
    order: "Passeriformes",
    family: "Regulidae",
    scientific: "Regulus satrapa",
    familyCommon: "Kinglets",
    speciesCommon: "Golden-crowned Kinglet"
  }, {
    audio: [
      require("../audio/KINGLET__RUBY_CROWNED.MP3"),
    ],
    images: [
      require("../images/Regulus_calendula_MP_3.jpg"),
      require("../images/Ruby-crowned_Kinglet1.jpg")
    ],
    order: "Passeriformes",
    family: "Regulidae",
    scientific: "Corthylio calendula",
    familyCommon: "Kinglets",
    speciesCommon: "Ruby-crowned Kinglet"
  }, {
    audio: [
      require("../audio/GNATCATCHER__BLUE_GREY.MP3"),
    ],
    images: [
      require("../images/Blue-gray_gnatcatcher_in_PP_(72317).jpg"),
      require("../images/Blue-gray_gnatcatcher_in_PP_(72343).jpg")
    ],
    order: "Passeriformes",
    family: "Sylviidae",
    scientific: "Polioptila caerulea",
    familyCommon: "Old World Warblers/Gnatcatchers",
    speciesCommon: "Blue-gray Gnatcatcher"
  }, {
    audio: [
      require("../audio/BLUEBIRD__EASTERN.MP3"),
      require("../audio/Sialia_sialis_-_Eastern_Bluebird_-_XC79976.ogg"),
    ],
    images: [
      require("../images/Sialia_sialis_-Michigan,_USA_-pair-8c.jpg"),
      require("../images/7Z1E5531.jpg")
    ],
    order: "Passeriformes",
    family: "Turdidae",
    scientific: "Sialia sialis",
    familyCommon: "Thrushes",
    speciesCommon: "Eastern Bluebird"
  }, {
    audio: [
      require("../audio/VEERY.MP3"),
    ],
    images: [
      require("../images/Veery_in_CP_(43277).jpg"),
      require("../images/303693841-720px.jpg")
    ],
    order: "Passeriformes",
    family: "Turdidae",
    scientific: "Catharus fuscescens",
    familyCommon: "Thrushes",
    speciesCommon: "Veery"
  }, {
    audio: [
      require("../audio/THRUSH__SWAINSON_S.MP3"),
      require("../audio/Catharus_ustulatus_-_Swainson's_Thrush_XC142624.ogg"),
    ],
    images: [
      require("../images/Swainson’s_Thrush_Tex.jpg"),
      require("../images/Catharus_ustulatus_Charlie_Lake.jpg")
    ],
    order: "Passeriformes",
    family: "Turdidae",
    scientific: "Catharus ustulatus",
    familyCommon: "Thrushes",
    speciesCommon: "Swainson's Thrush"
  }, {
    audio: [
      require("../audio/THRUSH__HERMIT.MP3"),
      require("../audio/Hermit_Thrush_Yosemite_National_Park.ogg"),
    ],
    images: [
      require("../images/Hermit_thrush_(10787).jpg"),
      require("../images/20231024_hermith_thrush.jpg")
    ],
    order: "Passeriformes",
    family: "Turdidae",
    scientific: "Catharus guttatus",
    familyCommon: "Thrushes",
    speciesCommon: "Hermit Thrush"
  }, {
    audio: [
      require("../audio/THRUSH__WOOD.MP3"),
    ],
    images: [
      require("../images/170865181-480px.jpg"),
      require("../images/Wood_thrush_(Hylocichla_mustelina)_Peten.jpg")
    ],
    order: "Passeriformes",
    family: "Turdidae",
    scientific: "Hylocichla mustelina",
    familyCommon: "Thrushes",
    speciesCommon: "Wood Thrush"
  }, {
    audio: [
      require("../audio/ROBIN__AMERICAN.MP3"),
      require("../audio/American_Robin.ogg"),
    ],
    images: [
      require("../images/American_robin_(71307).jpg"),
      require("../images/American_Robin_(Female)_(8234762055).jpg")
    ],
    order: "Passeriformes",
    family: "Turdidae",
    scientific: "Turdus migratorius",
    familyCommon: "Thrushes",
    speciesCommon: "American Robin"
  }, {
    audio: [
      require("../audio/CATBIRD__GREY.MP3"),
      require("../audio/Dumetella_carolinensis_-_Grey_Catbird_-_XC81292.ogg"),
    ],
    images: [
      require("../images/Gray_catbird_(85315).jpg"),
      require("../images/Gray_Catbird_in_the_grass.jpg")
    ],
    order: "Passeriformes",
    family: "Mimidae",
    scientific: "Dumetella carolinensis",
    familyCommon: "Mockingbirds/Thrashers",
    speciesCommon: "Gray Catbird"
  }, {
    audio: [
      require("../audio/THRASHER__BROWN.MP3"),
    ],
    images: [
      require("../images/Brown_thrasher_in_CP_(02147).jpg"),
      require("../images/Toxostoma_rufum_-Virginia,_USA.jpg")
    ],
    order: "Passeriformes",
    family: "Mimidae",
    scientific: "Toxostoma rufum",
    familyCommon: "Mockingbirds/Thrashers",
    speciesCommon: "Brown Thrasher"
  }, {
    audio: [
      require("../audio/STARLING__EUROPEAN.MP3"),
      require("../audio/Sturnus_vulgaris.ogg"),
    ],
    images: [
      require("../images/Toulouse_-_Sturnus_vulgaris_-_2012-02-26_-_3.jpg"),
      require("../images/Sturnus_vulgaris_porphyronotus,_Kensu,_Almaty,_Kazakhstan_1.jpg")
    ],
    order: "Passeriformes",
    family: "Sturnidae",
    scientific: "Sturnus vulgaris",
    familyCommon: "Starlings",
    speciesCommon: "European Starling"
  }, {
    audio: [
      require("../audio/WAXWING__CEDAR.MP3"),
      require("../audio/Bombycilla_cedrorum_-_Cedar_Waxwing.ogg"),
    ],
    images: [
      require("../images/Cedar_Waxwing_-_Bombycilla.jpg"),
      require("../images/Cedar_Waxwing-27527-2.jpg")
    ],
    order: "Passeriformes",
    family: "Bombycillidae",
    scientific: "Bombycilla cedrorum",
    familyCommon: "Waxwings",
    speciesCommon: "Cedar Waxwing"
  }, {
    audio: [
      require("../audio/WARBLER__BLUE_WINGED.MP3"),
    ],
    images: [
      require("../images/Vermivora_cyanoptera.jpg"),
      require("../images/Blue-winged_Warbler_2.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Vermivora cyanoptera",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Blue-winged Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__GOLDEN_WINGED.MP3"),
    ],
    images: [
      require("../images/Vermivora_chrysoptera_400767711.jpg"),
      require("../images/Golden-winged_Warbler_-_52345913454.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Vermivora chrysoptera",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Golden-winged Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__TENNESSEE.MP3"),
    ],
    images: [
      require("../images/Leiothlypis_peregrina_Malus_sp_JRVdH_01.jpg"),
      require("../images/Tennessee_Warbler_(20318546674).jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Leiothlypis peregrina",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Tennessee Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__NASHVILLE.MP3"),
      require("../audio/Leiothlypis_ruficapilla_-_Nashville_Warbler_-_XC78063.ogg"),
    ],
    images: [
      require("../images/Young_female_Nashville_Warbler_(6219549745).jpg"),
      require("../images/Vermivora_ruficapilla_Winema_National_Forest_(cropped).jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Leiothlypis ruficapilla",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Nashville Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__PARULA.MP3"),
      require("../audio/Setophaga_americana_-_Northern_Parula_XC142585.ogg"),
    ],
    images: [
      require("../images/Northern_Parula_by_Dan_Pancamo.jpg"),
      require("../images/Northern_Parula_in_High_Island_by_Dan_Pancamo_1.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Setophaga americana",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Northern Parula"
  }, {
    audio: [
      require("../audio/WARBER__YELLOW.MP3"),
      require("../audio/Setophaga_aestiva_-_American_Yellow_Warbler_-_XC81302.ogg"),
    ],
    images: [
      require("../images/Yellow_warbler_(82905).jpg"),
      require("../images/20240504_20240504.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Setophaga petechia",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Yellow Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__CHESTNUT_SIDED.MP3"),
    ],
    images: [
      require("../images/Dendroica-pensylvanica-003.jpg"),
      require("../images/Chestnut-sided_Warbler_Tex.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Setophaga pensylvanica",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Chestnut-sided Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__MAGNOLIA.MP3"),
    ],
    images: [
      require("../images/Magnolia_Warbler_-_May_17,_2025.jpg"),
      require("../images/Magnolia_warbler.webp")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Setophaga magnolia",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Magnolia Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__CAPE_MAY.MP3"),
    ],
    images: [
      require("../images/Setophaga_tigrina_Male.jpg"),
      require("../images/Cape_May_Warbler_2.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Setophaga tigrina",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Cape May Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__BLACK_THROATED_BLU.MP3"),
    ],
    images: [
      require("../images/Black-throated_Blue_Warbler_1.jpg"),
      require("../images/Black-Throated_Blue_Warbler.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Setophaga caerulescens",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Black-throated Blue Warbler"
  }, {
    audio: [
      require("../audio/WARBLER__YELLOW_RUMPED.MP3"),
    ],
    images: [
      require("../images/Yellow-rumped_warbler_singing_(41612)_(cropped).jpg"),
      require("../images/Myrtle_Warbler_-_Houston,_TX_2.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Setophaga coronata",
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