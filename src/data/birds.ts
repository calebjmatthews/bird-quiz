import Bird from "./bird";

const birds: Bird[] =  [
  {
    audio: [
      require("../audio/LOON__COMMON.MP3"),
      require("../audio/Common_loon_tremolo.ogg")
    ],
    images: [
      require("../images/Gavia_immer_-Minocqua,_Wisconsin,_USA_-swimming-8.jpg"),
      require("../images/Loon,_common_04-24_a.jpg")
    ],
    order: "Gaviiformes",
    family: "Gaviidae",
    scientific: "Gavia immer",
    familyCommon: "Loons",
    speciesCommon: "Common Loon",
    responses: [
      require("../responses/Common-Loon-correct.wav"),
      require("../responses/Common-Loon-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/GREBE__PIED_BILLED.mp3")
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
    speciesCommon: "Pied-billed Grebe",
    responses: [
      require("../responses/Pied-billed-Grebe-correct.wav"),
      require("../responses/Pied-billed-Grebe-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/BITTERN__AMERICAN.mp3")
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
    speciesCommon: "American Bittern",
    responses: [
      require("../responses/American-Bittern-correct.wav"),
      require("../responses/American-Bittern-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/BITTERN__LEAST.mp3"),
      require("../audio/Ixobrychus_exilis_-_Least_Bittern_XC251028.mp3")
    ],
    images: [
      require("../images/Least_Bittern_For_Wiki.png"),
      require("../images/Least_bittern_(71430).jpg")
    ],
    order: "Ciconiiformes",
    family: "Ardeidae",
    scientific: "Botaurus exilis",
    familyCommon: "Herons/Bitterns/Allies",
    speciesCommon: "Least Bittern",
    responses: [
      require("../responses/Least-Bittern-correct.wav"),
      require("../responses/Least-Bittern-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/HERON__BLACK_CROWNED_NIGHT.mp3"),
      require("../audio/Nycticorax_nycticorax_-_Black-crowned_Night_Heron_-_XC99573.ogg")
    ],
    images: [
      require("../images/BlackCrownedNightHeronDusky.jpg"),
      require("../images/Nycticorax_nycticorax_457953189.jpg")
    ],
    order: "Ciconiiformes",
    family: "Ardeidae",
    scientific: "Nycticorax nycticorax",
    familyCommon: "Herons/Bitterns/Allies",
    speciesCommon: "Black-crowned Night-Heron",
    responses: [
      require("../responses/Black-crowned-Night-Heron-correct.wav"),
      require("../responses/Black-crowned-Night-Heron-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/GOOSE__CANADA.mp3"),
      require("../audio/Branta_canadensis.ogg")
    ],
    images: [
      require("../images/Canada_goose_on_Seedskadee_NWR_(27826185489).jpg"),
      require("../images/Branta_canadensis_-near_Oceanville,_New_Jersey,_USA_-flying-8.jpg")
    ],
    order: "Anseriformes",
    family: "Anatidae",
    scientific: "Branta canadensis",
    familyCommon: "Ducks/Geese/Swans",
    speciesCommon: "Canada Goose",
    responses: [
      require("../responses/Canada-Goose-correct.wav"),
      require("../responses/Canada-Goose-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/DUCK__WOOD.mp3"),
      require("../audio/Aix_sponsa_-_Wood_Duck_-_XC63109.ogg")
    ],
    images: [
      require("../images/Wood_Duck_Wissahickon_Creek.png"),
      require("../images/Hen_Wood_Duck.png")
    ],
    order: "Anseriformes",
    family: "Anatidae",
    scientific: "Aix sponsa",
    familyCommon: "Ducks/Geese/Swans",
    speciesCommon: "Wood Duck",
    responses: [
      require("../responses/Wood-Duck-correct.wav"),
      require("../responses/Wood-Duck-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/MALLARD.mp3"),
      require("../audio/Anas_platyrhynchos_-_Mallard_-_XC62258.ogg")
    ],
    images: [
      require("../images/Anas_platyrhynchos_male_female_quadrat.jpg"),
      require("../images/DrakeMallardPortrait.png")
    ],
    order: "Anseriformes",
    family: "Anatidae",
    scientific: "Anas platyrhynchos",
    familyCommon: "Ducks/Geese/Swans",
    speciesCommon: "Mallard",
    responses: [
      require("../responses/Mallard-correct.wav"),
      require("../responses/Mallard-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/GOSHAWK__NORTHERN.mp3")
    ],
    images: [
      require("../images/Goshawkmale66.jpg"),
      require("../images/Accipiter_gentilisAAP045CA.jpg")
    ],
    order: "Falconiformes",
    family: "Accipitridae",
    scientific: "Astur atricapillus",
    familyCommon: "Hawks/Kites/Eagles/Allies",
    speciesCommon: "Northern Goshawk",
    responses: [
      require("../responses/Northern-Goshawk-correct.wav"),
      require("../responses/Northern-Goshawk-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/HAWK__RED_SHOULDERED.mp3"),
      require("../audio/Red-shouldered_hawk_calling.ogg")
    ],
    images: [
      require("../images/Red-shouldered_Hawk_(Buteo_lineatus)_-_Blue_Cypress_Lake,_Florida.jpg"),
      require("../images/Red-shouldered_hawk_taking_flight.jpeg")
    ],
    order: "Falconiformes",
    family: "Accipitridae",
    scientific: "Buteo lineatus",
    familyCommon: "Hawks/Kites/Eagles/Allies",
    speciesCommon: "Red-shouldered Hawk",
    responses: [
      require("../responses/Red-shouldered-Hawk-correct.wav"),
      require("../responses/Red-shouldered-Hawk-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/HAWK__BROAD_WINGED.mp3")
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
    speciesCommon: "Broad-winged Hawk",
    responses: [
      require("../responses/Broad-winged-Hawk-correct.wav"),
      require("../responses/Broad-winged-Hawk-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/HAWK__RED_TAILED.mp3"),
      require("../audio/Screaming_Hawk.wav")
    ],
    images: [
      require("../images/Red-tailed_Hawk_(45812546121).jpg"),
      require("../images/Red-tailed_hawk_in_flight.jpg")
    ],
    order: "Falconiformes",
    family: "Accipitridae",
    scientific: "Buteo jamaicensis",
    familyCommon: "Hawks/Kites/Eagles/Allies",
    speciesCommon: "Red-tailed Hawk",
    responses: [
      require("../responses/Red-tailed-Hawk-correct.wav"),
      require("../responses/Red-tailed-Hawk-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/KESTREL__AMERICAN.mp3")
    ],
    mnemonic: "three basic vocalizations – the \"klee\" or \"killy\", the \"whine\", and the \"chitter\"",
    images: [
      require("../images/AmericanKestrel02.jpg"),
      require("../images/Female_American_Kestrel.jpg")
    ],
    order: "Falconiformes",
    family: "Falconidae",
    scientific: "Falco sparverius",
    familyCommon: "Caracaras/Falcons",
    speciesCommon: "American Kestrel",
    responses: [
      require("../responses/American-Kestrel-correct.wav"),
      require("../responses/American-Kestrel-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/MERLIN.MP3"),
      require("../audio/Falco_columbarius_-_Merlin_-_XC101582.ogg")
    ],
    images: [
      require("../images/Merlin_in_Prospect_Park_(63386).jpg"),
      require("../images/Merlin,_Dumfries_&_Galloway,_Scotland_(53554254330).jpg")
    ],
    order: "Falconiformes",
    family: "Falconidae",
    scientific: "Falco columbarius",
    familyCommon: "Caracaras/Falcons",
    speciesCommon: "Merlin",
    responses: [
      require("../responses/Merlin-correct.wav"),
      require("../responses/Merlin-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/PHEASANT__RING_NECKED.MP3"),
      require("../audio/Phasianus_colchicus.ogg")
    ],
    images: [
      require("../images/Pheasant_(Phasianus_colchicus)_(51028701818).jpg"),
      require("../images/Phasianus_colchicus_-Rutland_Water_-female-8.jpg")
    ],
    order: "Galliformes",
    family: "Phasianidae",
    scientific: "Phasianus colchicus",
    familyCommon: "Partridges/Grouse/Turkeys/Quail",
    speciesCommon: "Ring-necked Pheasant",
    responses: [
      require("../responses/Ring-necked-Pheasant-correct.wav"),
      require("../responses/Ring-necked-Pheasant-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/GROUSE__RUFFED.MP3"),
      require("../audio/Bonasa-umbellus.20100830.ogg")
    ],
    images: [
      require("../images/Ruffed_Grouse_(18645551408).jpg"),
      require("../images/Bonasa-umbellus-001edit1.jpg")
    ],
    order: "Galliformes",
    family: "Phasianidae",
    scientific: "Bonasa umbellus",
    familyCommon: "Partridges/Grouse/Turkeys/Quail",
    speciesCommon: "Ruffed Grouse",
    responses: [
      require("../responses/Ruffed-Grouse-correct.wav"),
      require("../responses/Ruffed-Grouse-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/CHICKEN__GREATER_PRAIRE.MP3")
    ],
    images: [
      require("../images/Tympanuchus_cupido_-Illinois,_USA_-male_displaying-8_.jpg"),
      require("../images/Greater_Prairie_Chicken_(Tympanuchus_cupido)_(20351644665).jpg")
    ],
    order: "Galliformes",
    family: "Phasianidae",
    scientific: "Tympanuchus cupido",
    familyCommon: "Partridges/Grouse/Turkeys/Quail",
    speciesCommon: "Greater Prairie-Chicken",
    responses: [
      require("../responses/Greater-Prairie-Chicken-correct.wav"),
      require("../responses/Greater-Prairie-Chicken-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/TURKEY__WILD.MP3")
    ],
    images: [
      require("../images/Gall-dindi.jpg"),
      require("../images/Wild_Turkey_(female)_-_Meleagris_gallopavo.jpg")
    ],
    order: "Galliformes",
    family: "Phasianidae",
    scientific: "Meleagris gallopavo",
    familyCommon: "Partridges/Grouse/Turkeys/Quail",
    speciesCommon: "Wild Turkey",
    responses: [
      require("../responses/Wild-Turkey-correct.wav"),
      require("../responses/Wild-Turkey-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/RAIL__YELLOW.MP3"),
      require("../audio/Coturnicops_noveboracensis_-_Yellow_Rail_XC344711.mp3")
    ],
    images: [
      require("../images/Yellow_Rail.jpg"),
      require("../images/303199891-1280px.jpg")
    ],
    order: "Gruiformes",
    family: "Rallidae",
    scientific: "Coturnicops noveboracensis",
    familyCommon: "Rails/Gallinules/Coots",
    speciesCommon: "Yellow Rail",
    responses: [
      require("../responses/Yellow-Rail-correct.wav"),
      require("../responses/Yellow-Rail-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/RAIL__VIRGINIA.MP3")
    ],
    mnemonic: "\"tick-it\" or \"kid-ick\"",
    images: [
      require("../images/Virginia_rail_(41109).jpg"),
      require("../images/Virginia_rail.jpeg")
    ],
    order: "Gruiformes",
    family: "Rallidae",
    scientific: "Rallus limicola",
    familyCommon: "Rails/Gallinules/Coots",
    speciesCommon: "Virginia Rail",
    responses: [
      require("../responses/Virginia-Rail-correct.wav"),
      require("../responses/Virginia-Rail-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/RAIL__SORA.MP3"),
      require("../audio/Porzana_carolina_-_Sora_XC109542.mp3")
    ],
    images: [
      require("../images/Sora_(Porzana_carolina).jpg"),
      require("../images/Porzana_carolina.jpg")
    ],
    order: "Gruiformes",
    family: "Rallidae",
    scientific: "Porzana carolina",
    familyCommon: "Rails/Gallinules/Coots",
    speciesCommon: "Sora",
    responses: [
      require("../responses/Sora-correct.wav"),
      require("../responses/Sora-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/MOORHEN__COMMON.MP3")
    ],
    images: [
      require("../images/Common-gallinule-galapagos-casey-klebba.jpg"),
      require("../images/Gallinula_galeata_cachinnans_Everglades.jpg")
    ],
    order: "Gruiformes",
    family: "Rallidae",
    scientific: "Gallinula chloropus",
    familyCommon: "Rails/Gallinules/Coots",
    speciesCommon: "Common Moorhen",
    responses: [
      require("../responses/Common-Moorhen-correct.wav"),
      require("../responses/Common-Moorhen-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/COOT__AMERICAN.MP3")
    ],
    images: [
      require("../images/American_coot_in_Prospect_Park_(06152).jpg"),
      require("../images/Fulica_americana.jpg")
    ],
    order: "Gruiformes",
    family: "Rallidae",
    scientific: "Fulica americana",
    familyCommon: "Rails/Gallinules/Coots",
    speciesCommon: "American Coot",
    responses: [
      require("../responses/American-Coot-correct.wav"),
      require("../responses/American-Coot-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/CRANE__SANDHILL.MP3"),
      require("../audio/Grus_canadensis_Denali_National_Park.ogg")
    ],
    images: [
      require("../images/Sandhill_Crane_JG.jpg"),
      require("../images/Grus_canadensis_in_flight-2618.jpg")
    ],
    order: "Gruiformes",
    family: "Gruidae",
    scientific: "Antigone canadensis",
    familyCommon: "Cranes",
    speciesCommon: "Sandhill Crane",
    responses: [
      require("../responses/Sandhill-Crane-correct.wav"),
      require("../responses/Sandhill-Crane-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/KILLDEER.MP3"),
      require("../audio/Charadrius_vociferus.ogg")
    ],
    images: [
      require("../images/1512px-Killdeer_Heislerville.png"),
      require("../images/Kildeer_(6316766771).jpg")
    ],
    order: "Charadriiformes",
    family: "Charadriidae",
    scientific: "Charadrius vociferus",
    familyCommon: "Lapwings/Plovers",
    speciesCommon: "Killdeer",
    responses: [
      require("../responses/Killdeer-correct.wav"),
      require("../responses/Killdeer-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/SANDPIPER__SPOTTED.MP3"),
      require("../audio/Spotted_Sandpiper.ogg")
    ],
    images: [
      require("../images/Actitis-macularia-005.jpg"),
      require("../images/Actitis-macularia-004.jpg")
    ],
    order: "Charadriiformes",
    family: "Scolopacidae",
    scientific: "Actitis macularius",
    familyCommon: "Sandpipers/Phalaropes/Allies",
    speciesCommon: "Spotted Sandpiper",
    responses: [
      require("../responses/Spotted-Sandpiper-correct.wav"),
      require("../responses/Spotted-Sandpiper-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/SANDPIPER__UPLAND.MP3"),
      require("../audio/Bartramia_longicauda_-_Upland_Sandpiper_-_XC104531.ogg")
    ],
    images: [
      require("../images/UplandSandpiperOntarioCropped.jpg"),
      require("../images/Upland_Sandpiper_by_Andy_Reago__Chrissy_McClarren_550_375.webp")
    ],
    order: "Charadriiformes",
    family: "Scolopacidae",
    scientific: "Bartramia longicauda",
    familyCommon: "Sandpipers/Phalaropes/Allies",
    speciesCommon: "Upland Sandpiper",
    responses: [
      require("../responses/Upland-Sandpiper-correct.wav"),
      require("../responses/Upland-Sandpiper-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/SNIPE__COMMON.MP3")
    ],
    images: [
      require("../images/Gallinago-delicata-002-cropped.jpg"),
      require("../images/Wilson's_Snipe_Bolivar_Peninsula.jpg")
    ],
    order: "Charadriiformes",
    family: "Scolopacidae",
    scientific: "Gallinago delicata",
    familyCommon: "Sandpipers/Phalaropes/Allies",
    speciesCommon: "Wilson's snipe",
    responses: [
      require("../responses/Wilson's-snipe-correct.wav"),
      require("../responses/Wilson's-snipe-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WOODCOCK__AMERICAN.MP3")
    ],
    images: [
      require("../images/1509px-American_woodcock_(95252).jpg"),
      require("../images/AMWO.webp")
    ],
    order: "Charadriiformes",
    family: "Scolopacidae",
    scientific: "Scolopax minor",
    familyCommon: "Sandpipers/Phalaropes/Allies",
    speciesCommon: "American Woodcock",
    responses: [
      require("../responses/American-Woodcock-correct.wav"),
      require("../responses/American-Woodcock-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/GULL__RING_BILLED.MP3")
    ],
    images: [
      require("../images/Larus-delawarensis-021.jpg"),
      require("../images/Ring-billed_gull_in_flight_(94615)_(cropped).jpg")
    ],
    order: "Charadriiformes",
    family: "Laridae",
    scientific: "Larus delawarensis",
    familyCommon: "Skuas/Gulls/Terns/Skimmers",
    speciesCommon: "Ring-billed Gull",
    responses: [
      require("../responses/Ring-billed-Gull-correct.wav"),
      require("../responses/Ring-billed-Gull-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/TERN__CASPIAN.MP3")
    ],
    images: [
      require("../images/Sterna-caspia-010.jpg"),
      require("../images/Caspian_tern_(Hydroprogne_caspia)_non-breeding.jpg")
    ],
    order: "Charadriiformes",
    family: "Laridae",
    scientific: "Hydroprogne caspia",
    familyCommon: "Skuas/Gulls/Terns/Skimmers",
    speciesCommon: "Caspian Tern",
    responses: [
      require("../responses/Caspian-Tern-correct.wav"),
      require("../responses/Caspian-Tern-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/TERN__FORSTER_S.MP3")
    ],
    images: [
      require("../images/Forster's_Tern,_Horicon_NWR,_Wisconsin.jpg"),
      require("../images/Forster's_Tern.jpg")
    ],
    order: "Charadriiformes",
    family: "Laridae",
    scientific: "Sterna forsteri",
    familyCommon: "Skuas/Gulls/Terns/Skimmers",
    speciesCommon: "Forster's Tern",
    responses: [
      require("../responses/Forster's-Tern-correct.wav"),
      require("../responses/Forster's-Tern-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/TERN__BLACK.MP3")
    ],
    images: [
      require("../images/Čorík_čierny_(Chlidonias_niger)_a_(4644831482).jpg"),
      require("../images/1350px-Chlidonias_niger_GNP_01.jpg")
    ],
    order: "Charadriiformes",
    family: "Laridae",
    scientific: "Chlidonias niger",
    familyCommon: "Skuas/Gulls/Terns/Skimmers",
    speciesCommon: "Black Tern",
    responses: [
      require("../responses/Black-Tern-correct.wav"),
      require("../responses/Black-Tern-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/DOVE__ROCK.MP3")
    ],
    images: [
      require("../images/Wild_rock_dove_at_Raikot.png"),
      require("../images/Rock_Doves,_West_Azerbaijan.jpg")
    ],
    order: "Columbiformes",
    family: "Columbidae",
    scientific: "Columba livia",
    familyCommon: "Pigeons/Doves",
    speciesCommon: "Rock Pigeon",
    responses: [
      require("../responses/Rock-Pigeon-correct.wav"),
      require("../responses/Rock-Pigeon-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/DOVE__MOURNING.mp3"),
      require("../audio/Zenaida_macroura_vocalizations_-_pone.0027052.s009.oga")
    ],
    images: [
      require("../images/Av_Mourning_Dove_JG.jpg"),
      require("../images/Zenaida_macroura_-California-8-2c.jpg")
    ],
    order: "Columbiformes",
    family: "Columbidae",
    scientific: "Zenaida macroura",
    familyCommon: "Pigeons/Doves",
    speciesCommon: "Mourning Dove",
    responses: [
      require("../responses/Mourning-Dove-correct.wav"),
      require("../responses/Mourning-Dove-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/CUCKOO__BLACK_BILLED.MP3")
    ],
    images: [
      require("../images/Black-billed-cuckoo2.jpg"),
      require("../images/Black-billed_Cuckoo_(13883974479).jpg")
    ],
    order: "Cuculiformes",
    family: "Cuculidae",
    scientific: "Coccyzus erythropthalmus",
    familyCommon: "Cuckoos/Roadrunners/Anis",
    speciesCommon: "Black-billed Cuckoo",
    responses: [
      require("../responses/Black-billed-Cuckoo-correct.wav"),
      require("../responses/Black-billed-Cuckoo-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/OWL__EASTERN_SCREECH.MP3")
    ],
    images: [
      require("../images/Eastern_Screech_Owl.jpg"),
      require("../images/EasternScreechOwl-Rufous.jpg")
    ],
    order: "Strigiformes",
    family: "Strigidae",
    scientific: "Megascops asio",
    familyCommon: "Typical Owls",
    speciesCommon: "Eastern Screech Owl",
    responses: [
      require("../responses/Eastern-Screech-Owl-correct.wav"),
      require("../responses/Eastern-Screech-Owl-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/OWL__GREAT_HORNED.MP3"),
      require("../audio/Bubo_virginianus_-_Great_Horned_Owl_XC450919.mp3")
    ],
    images: [
      require("../images/Bubo_virginianus_06.jpg"),
      require("../images/Bubo_virginianus_-Canada-6.jpg")
    ],
    order: "Strigiformes",
    family: "Strigidae",
    familyCommon: "Typical Owls",
    scientific: "Bubo virginianus",
    speciesCommon: "Great Horned Owl",
    responses: [
      require("../responses/Great-Horned-Owl-correct.wav"),
      require("../responses/Great-Horned-Owl-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/OWL__BARRED.MP3")
    ],
    images: [
      require("../images/Strix-varia-005.jpg"),
      require("../images/Barred_Owl_Closeup.jpg")
    ],
    order: "Strigiformes",
    family: "Strigidae",
    scientific: "Strix varia",
    familyCommon: "Typical Owls",
    speciesCommon: "Barred Owl",
    responses: [
      require("../responses/Barred-Owl-correct.wav"),
      require("../responses/Barred-Owl-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/OWL__NORTHERN_SAW_WHET.MP3")
    ],
    images: [
      require("../images/Male_Northern_Saw-whet_Owl_(7364047820).jpg"),
      require("../images/Saw_Whet_Owl_Burian_5007.jpg")
    ],
    order: "Strigiformes",
    family: "Strigidae",
    scientific: "Aegolius acadicus",
    familyCommon: "Typical Owls",
    speciesCommon: "Northern Saw-whet Owl",
    responses: [
      require("../responses/Northern-Saw-whet-Owl-correct.wav"),
      require("../responses/Northern-Saw-whet-Owl-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WHIP_POOR_WILL.MP3"),
      require("../audio/Antrostomus_vociferus_-_Eastern_Whip-poor-will_-_XC103418.ogg")
    ],
    images: [
      require("../images/Caprimulgus_vociferusAAP065B.jpg"),
      require("../images/EasternWhip-poor-will.jpg")
    ],
    order: "Caprimulgiformes",
    family: "Caprimulgidae",
    scientific: "Antrostomus vociferus",
    familyCommon: "Goatsuckers",
    speciesCommon: "Whip-poor-will",
    responses: [
      require("../responses/Whip-poor-will-correct.wav"),
      require("../responses/Whip-poor-will-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/SWIFT__CHIMNEY.MP3"),
      require("../audio/Chaetura_pelagica_-_Chimney_Swift_-_XC105129.ogg")
    ],
    images: [
      require("../images/Chaetura_pelagica,_by_Lake_Erie,_Cleveland,_Ohio,_USA_339593191.jpg"),
      require("../images/Chimney-Swifts_1926-cr.jpg")
    ],
    order: "Apodiformes",
    family: "Apodidae",
    scientific: "Chaetura pelagica",
    familyCommon: "Swifts",
    speciesCommon: "Chimney Swift",
    responses: [
      require("../responses/Chimney-Swift-correct.wav"),
      require("../responses/Chimney-Swift-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/HUMMINGBIRD__RUBY_THROATED.MP3"),
      require("../audio/Archilochus_colubris.ogg")
    ],
    images: [
      require("../images/Archilochus_colubris_-flying_-male-8.jpg"),
      require("../images/Ruby-throated_hummingbird_(Archilochus_colubris)_female_Palopo.jpg")
    ],
    order: "Apodiformes",
    family: "Trochilidae",
    scientific: "Archilochus colubris",
    familyCommon: "Hummingbirds",
    speciesCommon: "Ruby-throated Hummingbird",
    responses: [
      require("../responses/Ruby-throated-Hummingbird-correct.wav"),
      require("../responses/Ruby-throated-Hummingbird-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/KINGFISHER__BELTED.MP3"),
      require("../audio/Megaceryle_alcyon.ogg")
    ],
    images: [
      require("../images/BeltedKingfisherJG_Male.jpg"),
      require("../images/Megaceryle_alcyon_femelle.jpg")
    ],
    order: "Coraciiformes",
    scientific: "Megaceryle alcyon",
    family: "Alcedinidae",
    familyCommon: "Kingfishers",
    speciesCommon: "Belted Kingfisher",
    responses: [
      require("../responses/Belted-Kingfisher-correct.wav"),
      require("../responses/Belted-Kingfisher-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WOODPECKER__RED_HEADED.MP3")
    ],
    images: [
      require("../images/Melanerpes-erythrocephalus-003.jpg"),
      require("../images/Melanerpes_erythrocephalus_-tree_trunk-USA.jpg")
    ],
    order: "Piciformes",
    family: "Picidae",
    scientific: "Melanerpes erythrocephalus",
    familyCommon: "Woodpeckers/Allies",
    speciesCommon: "Red-headed Woodpecker",
    responses: [
      require("../responses/Red-headed-Woodpecker-correct.wav"),
      require("../responses/Red-headed-Woodpecker-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WOODPECKER__RED_BELLIED.MP3")
    ],
    images: [
      require("../images/Red-bellied_Woodpecker-27527.jpg"),
      require("../images/Red-bellied_Woodpecker_Female.jpg")
    ],
    order: "Piciformes",
    family: "Picidae",
    scientific: "Melanerpes carolinus",
    familyCommon: "Woodpeckers/Allies",
    speciesCommon: "Red-bellied Woodpecker",
    responses: [
      require("../responses/Red-bellied-Woodpecker-correct.wav"),
      require("../responses/Red-bellied-Woodpecker-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/SAPSUCKER__YELLOW_BELLIED.MP3"),
      require("../audio/Yellow-bellied_Sapsucker.ogg")
    ],
    images: [
      require("../images/Yellow-bellied_sapsucker_in_CP_(40484).jpg"),
      require("../images/Yellow-bellied_sapsucker_(Sphyrapicus_varius)_female.jpeg")
    ],
    order: "Piciformes",
    family: "Picidae",
    scientific: "Sphyrapicus varius",
    familyCommon: "Woodpeckers/Allies",
    speciesCommon: "Yellow-bellied Sapsucker",
    responses: [
      require("../responses/Yellow-bellied-Sapsucker-correct.wav"),
      require("../responses/Yellow-bellied-Sapsucker-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WOODPECKER__DOWNY.MP3")
    ],
    images: [
      require("../images/Downy_Woodpecker01.jpg"),
      require("../images/FemaleDownyWoodpecker.jpg")
    ],
    order: "Piciformes",
    family: "Picidae",
    scientific: "Dryobates pubescens",
    familyCommon: "Woodpeckers/Allies",
    speciesCommon: "Downy Woodpecker",
    responses: [
      require("../responses/Downy-Woodpecker-correct.wav"),
      require("../responses/Downy-Woodpecker-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WOODPECKER__HAIRY.MP3"),
      require("../audio/Picoides_villosus.ogg")
    ],
    images: [
      require("../images/Picoides_villosus_monticola_male1.jpg"),
      require("../images/Hairy_woodpecker.jpg")
    ],
    order: "Piciformes",
    family: "Picidae",
    scientific: "Leuconotopicus villosus",
    familyCommon: "Woodpeckers/Allies",
    speciesCommon: "Hairy Woodpecker",
    responses: [
      require("../responses/Hairy-Woodpecker-correct.wav"),
      require("../responses/Hairy-Woodpecker-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/FLICKER__YELLOW_SHAFTED.MP3"),
      require("../audio/Colaptes_auratus.ogg")
    ],
    images: [
      require("../images/Northern_flicker,_Roslyn_(cropped).jpg"),
      require("../images/A6305966_(50335324522).jpg")
    ],
    order: "Piciformes",
    family: "Picidae",
    scientific: "Colaptes auratus",
    familyCommon: "Woodpeckers/Allies",
    speciesCommon: "Northern Flicker",
    responses: [
      require("../responses/Northern-Flicker-correct.wav"),
      require("../responses/Northern-Flicker-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WOODPECKER__PILEATED.MP3"),
      require("../audio/Dryocopus_pileatus_-_Pileated_Woodpecker_-_XC61518.ogg")
    ],
    images: [
      require("../images/PileatedWoodpeckerFeedingonTree,_crop.jpg"),
      require("../images/Pileated_Woodpecker_(9597212081),_crop.jpg")
    ],
    order: "Piciformes",
    family: "Picidae",
    scientific: "Dryocopus pileatus",
    familyCommon: "Woodpeckers/Allies",
    speciesCommon: "Pileated Woodpecker",
    responses: [
      require("../responses/Pileated-Woodpecker-correct.wav"),
      require("../responses/Pileated-Woodpecker-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/FLYCATCHER__OLIVE_SIDED.MP3")
    ],
    images: [
      require("../images/Olive-sided_Flycatcher.jpg"),
      require("../images/Olive_sided_flycatcher.webp")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    scientific: "Contopus cooperi",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Olive-sided Flycatcher",
    responses: [
      require("../responses/Olive-sided-Flycatcher-correct.wav"),
      require("../responses/Olive-sided-Flycatcher-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/PEWEE__EASTERN_WOOD.MP3")
    ],
    images: [
      require("../images/Eastern_wood_pewee_(71095).jpg"),
      require("../images/Contopus_virensPCCA20050724-9873B.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    scientific: "Contopus virens",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Eastern Wood-Pewee",
    responses: [
      require("../responses/Eastern-Wood-Pewee-correct.wav"),
      require("../responses/Eastern-Wood-Pewee-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/FLYCATCHER__YELLOW_BELLIED.MP3")
    ],
    images: [
      require("../images/Yellow-bellied_Flycatcher_-_Empidonax_flaviventris.jpg"),
      require("../images/Yellow-bellied_Flycatcher2.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    scientific: "Empidonax flaviventris",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Yellow-bellied Flycatcher",
    responses: [
      require("../responses/Yellow-bellied-Flycatcher-correct.wav"),
      require("../responses/Yellow-bellied-Flycatcher-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/FLYCATCHER__ACADIAN.MP3")
    ],
    images: [
      require("../images/Empidonax_virescens_99136793_(cropped).jpg"),
      require("../images/301816971-1280px.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    scientific: "Empidonax virescens",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Acadian Flycatcher",
    responses: [
      require("../responses/Acadian-Flycatcher-correct.wav"),
      require("../responses/Acadian-Flycatcher-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/FLYCATCHER__ALDER.MP3")
    ],
    images: [
      require("../images/Empidonax_alnorum_CT2.jpg"),
      require("../images/301820301-1280px.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    scientific: "Empidonax alnorum",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Alder Flycatcher",
    responses: [
      require("../responses/Alder-Flycatcher-correct.wav"),
      require("../responses/Alder-Flycatcher-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/FLYCATCHER__WILLOW.MP3"),
      require("../audio/Empidonax_traillii.ogg")
    ],
    images: [
      require("../images/Southwestern_Willow_Flycatcher.jpg"),
      require("../images/301824711-1280px.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    scientific: "Empidonax traillii",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Willow Flycatcher",
    responses: [
      require("../responses/Willow-Flycatcher-correct.wav"),
      require("../responses/Willow-Flycatcher-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/FLYCATCHER__LEAST.MP3"),
      require("../audio/Empidonax_minimus_-_Least_Flycatcher_XC134690.ogg")
    ],
    images: [
      require("../images/Empidonax-minimus-001.jpg"),
      require("../images/Least_FlycatcherTex.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    scientific: "Empidonax minimus",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Least Flycatcher",
    responses: [
      require("../responses/Least-Flycatcher-correct.wav"),
      require("../responses/Least-Flycatcher-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/PHOEBE__EASTERN.MP3"),
      require("../audio/Sayornis_phoebe_-_Eastern_Phoebe_XC132866.ogg")
    ],
    images: [
      require("../images/Sayornis_phoebe_-Owen_Conservation_Park,_Madison,_Wisconsin,_USA-8.jpg"),
      require("../images/Sayornis_phoebe_-Madison,_Wisconsin,_USA-8.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    scientific: "Sayornis phoebe",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Eastern Phoebe",
    responses: [
      require("../responses/Eastern-Phoebe-correct.wav"),
      require("../responses/Eastern-Phoebe-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/FLYCATCHER__GREAT_CRESTED.MP3")
    ],
    images: [
      require("../images/Great_Crested_Flycatcher_RWD2.jpg"),
      require("../images/RWM_8715.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    scientific: "Myiarchus crinitus",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Great Crested Flycatcher",
    responses: [
      require("../responses/Great-Crested-Flycatcher-correct.wav"),
      require("../responses/Great-Crested-Flycatcher-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/KINGBIRD__EASTERN.MP3"),
      require("../audio/Eastern_Kingbird_Call.ogg")
    ],
    images: [
      require("../images/Eastern_kingbird_(21559).jpg"),
      require("../images/BOTW-Homepage-Thumbnail_Eastern-Kingbird-1-1024x663.jpg")
    ],
    order: "Passeriformes",
    family: "Tyrannidae",
    scientific: "Tyrannus tyrannus",
    familyCommon: "Tyrant Flycatchers",
    speciesCommon: "Eastern Kingbird",
    responses: [
      require("../responses/Eastern-Kingbird-correct.wav"),
      require("../responses/Eastern-Kingbird-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/VIREO__BELL_S.MP3")
    ],
    images: [
      require("../images/1440px-Bell's_Vireo.jpg"),
      require("../images/web_bells-vireo_17938984569_5b0cfb690d_o_kk.webp")
    ],
    order: "Passeriformes",
    family: "Vireonidae",
    scientific: "Vireo bellii",
    familyCommon: "Vireos",
    speciesCommon: "Bell's Vireo",
    responses: [
      require("../responses/Bell's-Vireo-correct.wav"),
      require("../responses/Bell's-Vireo-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/VIREO__YELLOW_THROATED.MP3")
    ],
    images: [
      require("../images/Vireo-flavifrons-001.jpg"),
      require("../images/Yellow-throated_Vireo_by_Dan_Pancamo_1.jpg")
    ],
    order: "Passeriformes",
    family: "Vireonidae",
    scientific: "Vireo flavifrons",
    familyCommon: "Vireos",
    speciesCommon: "Yellow-throated Vireo",
    responses: [
      require("../responses/Yellow-throated-Vireo-correct.wav"),
      require("../responses/Yellow-throated-Vireo-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/VIREO__BLUE_HEADED.MP3"),
      require("../audio/Vireo_solitarius_-_Blue-headed_Vireo_-_XC77879.ogg")
    ],
    images: [
      require("../images/Blue-headed_Vireo_(8088895251).jpg"),
      require("../images/Blue-headed_Vireo.jpg")
    ],
    order: "Passeriformes",
    family: "Vireonidae",
    scientific: "Vireo solitarius",
    familyCommon: "Vireos",
    speciesCommon: "Blue-headed Vireo",
    responses: [
      require("../responses/Blue-headed-Vireo-correct.wav"),
      require("../responses/Blue-headed-Vireo-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/VIREO__WARBLING.MP3"),
      require("../audio/Vireo_gilvus_gilvus_-_Warbling_Vireo_-_XC102968.ogg")
    ],
    images: [
      require("../images/Warbling_vireo_(82141).jpg"),
      require("../images/Warbling_vireo.jpg")
    ],
    order: "Passeriformes",
    family: "Vireonidae",
    scientific: "Vireo gilvus",
    familyCommon: "Vireos",
    speciesCommon: "Warbling Vireo",
    responses: [
      require("../responses/Warbling-Vireo-correct.wav"),
      require("../responses/Warbling-Vireo-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/VIREO__PHILADELPHIA.MP3")
    ],
    images: [
      require("../images/Philadelphia_Vireo_Tex.jpg"),
      require("../images/Vireo_philadelphicus.jpg")
    ],
    order: "Passeriformes",
    family: "Vireonidae",
    scientific: "Vireo philadelphicus",
    familyCommon: "Vireos",
    speciesCommon: "Philadelphia Vireo",
    responses: [
      require("../responses/Philadelphia-Vireo-correct.wav"),
      require("../responses/Philadelphia-Vireo-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/VIREO__RED_EYED.MP3")
    ],
    images: [
      require("../images/Vireo_olivaceus_-Madison_-Wisconsin_-USA-8.jpg"),
      require("../images/Red-eyed_vireo_(35215).jpg")
    ],
    order: "Passeriformes",
    family: "Vireonidae",
    scientific: "Vireo olivaceus",
    familyCommon: "Vireos",
    speciesCommon: "Red-eyed Vireo",
    responses: [
      require("../responses/Red-eyed-Vireo-correct.wav"),
      require("../responses/Red-eyed-Vireo-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/JAY__GREY.MP3")
    ],
    images: [
      require("../images/Perisoreus_canadensis_Grand_Tetons.jpg"),
      require("../images/Perisoreus_canadensis_mercier2.jpg")
    ],
    order: "Passeriformes",
    family: "Corvidae",
    scientific: "Perisoreus canadensis",
    familyCommon: "Jays/Crows",
    speciesCommon: "Gray Jay",
    responses: [
      require("../responses/Gray-Jay-correct.wav"),
      require("../responses/Gray-Jay-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/JAY__BLUE.MP3"),
      require("../audio/Cyanocitta_cristata_-_Blue_Jay_-_XC109601.ogg")
    ],
    images: [
      require("../images/Blue_jay_in_PP_(30960).jpg"),
      require("../images/Blue_jay_in_Central_Park_(16465).jpg")
    ],
    order: "Passeriformes",
    family: "Corvidae",
    scientific: "Cyanocitta cristata",
    familyCommon: "Jays/Crows",
    speciesCommon: "Blue Jay",
    responses: [
      require("../responses/Blue-Jay-correct.wav"),
      require("../responses/Blue-Jay-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/CROW__AMERICAN.MP3"),
      require("../audio/Corvus_brachyrhynchos_-_American_Crow_-_XC115429.ogg")
    ],
    images: [
      require("../images/Corvus-brachyrhynchos-001.jpg"),
      require("../images/American_Crow_Brooklyn,_NY.jpg")
    ],
    order: "Passeriformes",
    family: "Corvidae",
    scientific: "Corvus brachyrhynchos",
    familyCommon: "Jays/Crows",
    speciesCommon: "American Crow",
    responses: [
      require("../responses/American-Crow-correct.wav"),
      require("../responses/American-Crow-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/RAVEN__COMMON.MP3"),
      require("../audio/Common_Raven_Grand_Teton_National_Park.ogg")
    ],
    images: [
      require("../images/Corvus_corax_ad_berlin_090516.jpg"),
      require("../images/MK04400_Raven_(Jasper_National_Park).jpg")
    ],
    order: "Passeriformes",
    family: "Corvidae",
    scientific: "Corvus corax",
    familyCommon: "Jays/Crows",
    speciesCommon: "Common Raven",
    responses: [
      require("../responses/Common-Raven-correct.wav"),
      require("../responses/Common-Raven-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/LARK__HORNED.MP3")
    ],
    images: [
      require("../images/Shore_Lark.jpg"),
      require("../images/Horned_lark.jpg")
    ],
    order: "Passeriformes",
    family: "Alaudidae",
    scientific: "Eremophila alpestris",
    familyCommon: "Larks",
    speciesCommon: "Horned Lark",
    responses: [
      require("../responses/Horned-Lark-correct.wav"),
      require("../responses/Horned-Lark-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/MARTIN__PURPLE.MP3"),
      require("../audio/Progne-subis-001.ogg")
    ],
    images: [
      require("../images/PurpleMartin_cajay.jpg"),
      require("../images/Progne_subis_-Chicago,_USA_-female-8.jpg")
    ],
    order: "Passeriformes",
    family: "Hirundinidae",
    scientific: "Progne subis",
    familyCommon: "Swallows",
    speciesCommon: "Purple Martin",
    responses: [
      require("../responses/Purple-Martin-correct.wav"),
      require("../responses/Purple-Martin-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/SWALLOW__TREE.MP3")
    ],
    images: [
      require("../images/Tree_swallow_in_JBWR_(25579).jpg"),
      require("../images/Tree_Swallows_-_Minneapolis_Minnesota_-_Birds_Calling.jpg")
    ],
    order: "Passeriformes",
    family: "Hirundinidae",
    scientific: "Tachycineta bicolor",
    familyCommon: "Swallows",
    speciesCommon: "Tree Swallow",
    responses: [
      require("../responses/Tree-Swallow-correct.wav"),
      require("../responses/Tree-Swallow-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/SWALLOW__NORTHERN_ROUGH_WIN.MP3")
    ],
    images: [
      require("../images/Adult_Northern_Rough-winged_Swallow.jpg"),
      require("../images/Stelgidopteryx_serripennis.jpg")
    ],
    order: "Passeriformes",
    family: "Hirundinidae",
    scientific: "Stelgidopteryx serripennis",
    familyCommon: "Swallows",
    speciesCommon: "Northern Rough-winged Swallow",
    responses: [
      require("../responses/Northern-Rough-winged-Swallow-correct.wav"),
      require("../responses/Northern-Rough-winged-Swallow-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/SWALLOW__BANK.MP3")
    ],
    images: [
      require("../images/Sand_martin_(Riparia_riparia).jpg"),
      require("../images/Digesvale.jpg")
    ],
    order: "Passeriformes",
    family: "Hirundinidae",
    scientific: "Riparia riparia",
    familyCommon: "Swallows",
    speciesCommon: "Bank Swallow",
    responses: [
      require("../responses/Bank-Swallow-correct.wav"),
      require("../responses/Bank-Swallow-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/SWALLOW__BARN.MP3"),
      require("../audio/Hirundo_rustica_-_Barn_Swallow_-_XC83449.ogg")
    ],
    images: [
      require("../images/BarnSwallow_cajay.jpg"),
      require("../images/Rauchschwalbe_Hirundo_rustica.jpg")
    ],
    order: "Passeriformes",
    family: "Hirundinidae",
    scientific: "Hirundo rustica",
    familyCommon: "Swallows",
    speciesCommon: "Barn Swallow",
    responses: [
      require("../responses/Barn-Swallow-correct.wav"),
      require("../responses/Barn-Swallow-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/CHICKADEE__BLACK_CAPPED.MP3"),
      require("../audio/Poecile_atricapillus_-_Black-capped_Chickadee_-_XC70185.ogg")
    ],
    images: [
      require("../images/Poecile-atricapilla-001.jpg"),
      require("../images/Black-capped_Chickadee_Stratham_NH,_Aug_2013.jpg")
    ],
    order: "Passeriformes",
    family: "Paridae",
    scientific: "Poecile atricapillus",
    familyCommon: "Chickadees/Titmice",
    speciesCommon: "Black-capped Chickadee",
    responses: [
      require("../responses/Black-capped-Chickadee-correct.wav"),
      require("../responses/Black-capped-Chickadee-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/CHICKADEE__BOREAL.MP3")
    ],
    images: [
      require("../images/Poecile_hudsonicus_7.jpg"),
      require("../images/boreal_chickadee.webp")
    ],
    order: "Passeriformes",
    family: "Paridae",
    scientific: "Poecile hudsonicus",
    familyCommon: "Chickadees/Titmice",
    speciesCommon: "Boreal Chickadee",
    responses: [
      require("../responses/Boreal-Chickadee-correct.wav"),
      require("../responses/Boreal-Chickadee-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/TITMOUSE__TUFTED.MP3"),
      require("../audio/Tufted_Titmouse_call.ogg")
    ],
    images: [
      require("../images/Tufted_titmouse_(84917).jpg"),
      require("../images/TuftedTitmouse_Gam.jpg")
    ],
    order: "Passeriformes",
    family: "Paridae",
    scientific: "Baeolophus bicolor",
    familyCommon: "Chickadees/Titmice",
    speciesCommon: "Tufted Titmouse",
    responses: [
      require("../responses/Tufted-Titmouse-correct.wav"),
      require("../responses/Tufted-Titmouse-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/NUTHATCH__RED_BREASTED.MP3"),
      require("../audio/Red_breasted_Nuthatch_Yosemite_National_Park.ogg")
    ],
    images: [
      require("../images/Sitta_canadensis_5563.jpeg"),
      require("../images/Sitta_canadensis_CT2.jpg")
    ],
    order: "Passeriformes",
    family: "Sittidae",
    scientific: "Sitta canadensis",
    familyCommon: "Nuthatches",
    speciesCommon: "Red-breasted Nuthatch",
    responses: [
      require("../responses/Red-breasted-Nuthatch-correct.wav"),
      require("../responses/Red-breasted-Nuthatch-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/NUTHATCH__WHITE_BREASTED.MP3")
    ],
    images: [
      require("../images/Sitta-carolinensis-001.jpg"),
      require("../images/White-breasted_nuthatch_(26471).jpg")
    ],
    order: "Passeriformes",
    family: "Sittidae",
    scientific: "Sitta carolinensis",
    familyCommon: "Nuthatches",
    speciesCommon: "White-breasted Nuthatch",
    responses: [
      require("../responses/White-breasted-Nuthatch-correct.wav"),
      require("../responses/White-breasted-Nuthatch-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/CREEPER__BROWN.MP3")
    ],
    images: [
      require("../images/Brown_creeper_at_a_banding_station_(90455).jpg"),
      require("../images/Brown_creeper_(Certhia_americana)_in_Center_City,_Philadelphia,_PA,_USA.png")
    ],
    order: "Passeriformes",
    family: "Certhiidae",
    scientific: "Certhia americana",
    familyCommon: "Creepers",
    speciesCommon: "Brown Creeper",
    responses: [
      require("../responses/Brown-Creeper-correct.wav"),
      require("../responses/Brown-Creeper-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WREN__HOUSE.MP3"),
      require("../audio/Troglodytes_aedon_-_House_Wren_-_XC79974.ogg")
    ],
    images: [
      require("../images/Troglodytes_aedon_NPS.jpg"),
      require("../images/House_wren_in_full_song_cropped.png")
    ],
    order: "Passeriformes",
    family: "Troglodytidae",
    scientific: "Troglodytes aedon",
    familyCommon: "Wrens",
    speciesCommon: "House Wren",
    responses: [
      require("../responses/House-Wren-correct.wav"),
      require("../responses/House-Wren-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WREN__WINTER.MP3")
    ],
    images: [
      require("../images/Winter_wren_on_a_tree_(90538).jpg"),
      require("../images/Winter_wren_in_Prospect_Park_(32249).jpg")
    ],
    order: "Passeriformes",
    family: "Troglodytidae",
    scientific: "Troglodytes hiemalis",
    familyCommon: "Wrens",
    speciesCommon: "Winter Wren",
    responses: [
      require("../responses/Winter-Wren-correct.wav"),
      require("../responses/Winter-Wren-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WREN__SEDGE.MP3"),
      require("../audio/Cistothorus_stellaris_-_Sedge_Wren_-_XC106011.oga")
    ],
    images: [
      require("../images/Kankakee_NWR_sedge_wren_vervain_6_December_2021.png"),
      require("../images/Sedge_Wren_(31204304001).jpg")
    ],
    order: "Passeriformes",
    family: "Troglodytidae",
    scientific: "Cistothorus stellaris",
    familyCommon: "Wrens",
    speciesCommon: "Sedge Wren",
    responses: [
      require("../responses/Sedge-Wren-correct.wav"),
      require("../responses/Sedge-Wren-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WREN__MARSH.MP3")
    ],
    images: [
      require("../images/Cistothorus_palustris_-Reifel_Island,_Vancouver-8.jpg"),
      require("../images/Cistothorus_palustris_CT.jpg")
    ],
    order: "Passeriformes",
    family: "Troglodytidae",
    scientific: "Cistothorus palustris",
    familyCommon: "Wrens",
    speciesCommon: "Marsh Wren",
    responses: [
      require("../responses/Marsh-Wren-correct.wav"),
      require("../responses/Marsh-Wren-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/KINGLET__GOLDEN_CROWNED.MP3")
    ],
    images: [
      require("../images/Golden-Crowned_Kinglet_EBFNWR.jpg"),
      require("../images/Golden-crowned_Kinglet_RWD.jpg")
    ],
    order: "Passeriformes",
    family: "Regulidae",
    scientific: "Regulus satrapa",
    familyCommon: "Kinglets",
    speciesCommon: "Golden-crowned Kinglet",
    responses: [
      require("../responses/Golden-crowned-Kinglet-correct.wav"),
      require("../responses/Golden-crowned-Kinglet-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/KINGLET__RUBY_CROWNED.MP3")
    ],
    images: [
      require("../images/Regulus_calendula_MP_3.jpg"),
      require("../images/Ruby-crowned_Kinglet1.jpg")
    ],
    order: "Passeriformes",
    family: "Regulidae",
    scientific: "Corthylio calendula",
    familyCommon: "Kinglets",
    speciesCommon: "Ruby-crowned Kinglet",
    responses: [
      require("../responses/Ruby-crowned-Kinglet-correct.wav"),
      require("../responses/Ruby-crowned-Kinglet-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/GNATCATCHER__BLUE_GREY.MP3")
    ],
    images: [
      require("../images/Blue-gray_gnatcatcher_in_PP_(72317).jpg"),
      require("../images/Blue-gray_gnatcatcher_in_PP_(72343).jpg")
    ],
    order: "Passeriformes",
    family: "Sylviidae",
    scientific: "Polioptila caerulea",
    familyCommon: "Old World Warblers/Gnatcatchers",
    speciesCommon: "Blue-gray Gnatcatcher",
    responses: [
      require("../responses/Blue-gray-Gnatcatcher-correct.wav"),
      require("../responses/Blue-gray-Gnatcatcher-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/BLUEBIRD__EASTERN.MP3"),
      require("../audio/Sialia_sialis_-_Eastern_Bluebird_-_XC79976.ogg")
    ],
    images: [
      require("../images/Sialia_sialis_-Michigan,_USA_-pair-8c.jpg"),
      require("../images/7Z1E5531.jpg")
    ],
    order: "Passeriformes",
    family: "Turdidae",
    scientific: "Sialia sialis",
    familyCommon: "Thrushes",
    speciesCommon: "Eastern Bluebird",
    responses: [
      require("../responses/Eastern-Bluebird-correct.wav"),
      require("../responses/Eastern-Bluebird-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/VEERY.MP3")
    ],
    images: [
      require("../images/Veery_in_CP_(43277).jpg"),
      require("../images/303693841-720px.jpg")
    ],
    order: "Passeriformes",
    family: "Turdidae",
    scientific: "Catharus fuscescens",
    familyCommon: "Thrushes",
    speciesCommon: "Veery",
    responses: [
      require("../responses/Veery-correct.wav"),
      require("../responses/Veery-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/THRUSH__SWAINSON_S.MP3"),
      require("../audio/Catharus_ustulatus_-_Swainson's_Thrush_XC142624.ogg")
    ],
    images: [
      require("../images/Swainson’s_Thrush_Tex.jpg"),
      require("../images/Catharus_ustulatus_Charlie_Lake.jpg")
    ],
    order: "Passeriformes",
    family: "Turdidae",
    scientific: "Catharus ustulatus",
    familyCommon: "Thrushes",
    speciesCommon: "Swainson's Thrush",
    responses: [
      require("../responses/Swainson's-Thrush-correct.wav"),
      require("../responses/Swainson's-Thrush-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/THRUSH__HERMIT.MP3"),
      require("../audio/Hermit_Thrush_Yosemite_National_Park.ogg")
    ],
    images: [
      require("../images/Hermit_thrush_(10787).jpg"),
      require("../images/20231024_hermith_thrush.jpg")
    ],
    order: "Passeriformes",
    family: "Turdidae",
    scientific: "Catharus guttatus",
    familyCommon: "Thrushes",
    speciesCommon: "Hermit Thrush",
    responses: [
      require("../responses/Hermit-Thrush-correct.wav"),
      require("../responses/Hermit-Thrush-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/THRUSH__WOOD.MP3")
    ],
    images: [
      require("../images/170865181-480px.jpg"),
      require("../images/Wood_thrush_(Hylocichla_mustelina)_Peten.jpg")
    ],
    order: "Passeriformes",
    family: "Turdidae",
    scientific: "Hylocichla mustelina",
    familyCommon: "Thrushes",
    speciesCommon: "Wood Thrush",
    responses: [
      require("../responses/Wood-Thrush-correct.wav"),
      require("../responses/Wood-Thrush-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/ROBIN__AMERICAN.MP3"),
      require("../audio/American_Robin.ogg")
    ],
    images: [
      require("../images/American_robin_(71307).jpg"),
      require("../images/American_Robin_(Female)_(8234762055).jpg")
    ],
    order: "Passeriformes",
    family: "Turdidae",
    scientific: "Turdus migratorius",
    familyCommon: "Thrushes",
    speciesCommon: "American Robin",
    responses: [
      require("../responses/American-Robin-correct.wav"),
      require("../responses/American-Robin-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/CATBIRD__GREY.MP3"),
      require("../audio/Dumetella_carolinensis_-_Grey_Catbird_-_XC81292.ogg")
    ],
    images: [
      require("../images/Gray_catbird_(85315).jpg"),
      require("../images/Gray_Catbird_in_the_grass.jpg")
    ],
    order: "Passeriformes",
    family: "Mimidae",
    scientific: "Dumetella carolinensis",
    familyCommon: "Mockingbirds/Thrashers",
    speciesCommon: "Gray Catbird",
    responses: [
      require("../responses/Gray-Catbird-correct.wav"),
      require("../responses/Gray-Catbird-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/THRASHER__BROWN.MP3")
    ],
    images: [
      require("../images/Brown_thrasher_in_CP_(02147).jpg"),
      require("../images/Toxostoma_rufum_-Virginia,_USA.jpg")
    ],
    order: "Passeriformes",
    family: "Mimidae",
    scientific: "Toxostoma rufum",
    familyCommon: "Mockingbirds/Thrashers",
    speciesCommon: "Brown Thrasher",
    responses: [
      require("../responses/Brown-Thrasher-correct.wav"),
      require("../responses/Brown-Thrasher-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/STARLING__EUROPEAN.MP3"),
      require("../audio/Sturnus_vulgaris.ogg")
    ],
    images: [
      require("../images/Toulouse_-_Sturnus_vulgaris_-_2012-02-26_-_3.jpg"),
      require("../images/Sturnus_vulgaris_porphyronotus,_Kensu,_Almaty,_Kazakhstan_1.jpg")
    ],
    order: "Passeriformes",
    family: "Sturnidae",
    scientific: "Sturnus vulgaris",
    familyCommon: "Starlings",
    speciesCommon: "European Starling",
    responses: [
      require("../responses/European-Starling-correct.wav"),
      require("../responses/European-Starling-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WAXWING__CEDAR.MP3"),
      require("../audio/Bombycilla_cedrorum_-_Cedar_Waxwing.ogg")
    ],
    images: [
      require("../images/Cedar_Waxwing_-_Bombycilla.jpg"),
      require("../images/Cedar_Waxwing-27527-2.jpg")
    ],
    order: "Passeriformes",
    family: "Bombycillidae",
    scientific: "Bombycilla cedrorum",
    familyCommon: "Waxwings",
    speciesCommon: "Cedar Waxwing",
    responses: [
      require("../responses/Cedar-Waxwing-correct.wav"),
      require("../responses/Cedar-Waxwing-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBLER__BLUE_WINGED.MP3")
    ],
    images: [
      require("../images/Vermivora_cyanoptera.jpg"),
      require("../images/Blue-winged_Warbler_2.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Vermivora cyanoptera",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Blue-winged Warbler",
    responses: [
      require("../responses/Blue-winged-Warbler-correct.wav"),
      require("../responses/Blue-winged-Warbler-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBLER__GOLDEN_WINGED.MP3")
    ],
    images: [
      require("../images/Vermivora_chrysoptera_400767711.jpg"),
      require("../images/Golden-winged_Warbler_-_52345913454.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Vermivora chrysoptera",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Golden-winged Warbler",
    responses: [
      require("../responses/Golden-winged-Warbler-correct.wav"),
      require("../responses/Golden-winged-Warbler-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBLER__TENNESSEE.MP3")
    ],
    images: [
      require("../images/Leiothlypis_peregrina_Malus_sp_JRVdH_01.jpg"),
      require("../images/Tennessee_Warbler_(20318546674).jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Leiothlypis peregrina",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Tennessee Warbler",
    responses: [
      require("../responses/Tennessee-Warbler-correct.wav"),
      require("../responses/Tennessee-Warbler-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBLER__NASHVILLE.MP3"),
      require("../audio/Leiothlypis_ruficapilla_-_Nashville_Warbler_-_XC78063.ogg")
    ],
    images: [
      require("../images/Young_female_Nashville_Warbler_(6219549745).jpg"),
      require("../images/Vermivora_ruficapilla_Winema_National_Forest_(cropped).jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Leiothlypis ruficapilla",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Nashville Warbler",
    responses: [
      require("../responses/Nashville-Warbler-correct.wav"),
      require("../responses/Nashville-Warbler-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBLER__PARULA.MP3"),
      require("../audio/Setophaga_americana_-_Northern_Parula_XC142585.ogg")
    ],
    images: [
      require("../images/Northern_Parula_by_Dan_Pancamo.jpg"),
      require("../images/Northern_Parula_in_High_Island_by_Dan_Pancamo_1.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Setophaga americana",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Northern Parula",
    responses: [
      require("../responses/Northern-Parula-correct.wav"),
      require("../responses/Northern-Parula-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBER__YELLOW.MP3"),
      require("../audio/Setophaga_aestiva_-_American_Yellow_Warbler_-_XC81302.ogg")
    ],
    images: [
      require("../images/Yellow_warbler_(82905).jpg"),
      require("../images/20240504_20240504.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Setophaga petechia",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Yellow Warbler",
    responses: [
      require("../responses/Yellow-Warbler-correct.wav"),
      require("../responses/Yellow-Warbler-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBLER__CHESTNUT_SIDED.MP3")
    ],
    images: [
      require("../images/Dendroica-pensylvanica-003.jpg"),
      require("../images/Chestnut-sided_Warbler_Tex.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Setophaga pensylvanica",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Chestnut-sided Warbler",
    responses: [
      require("../responses/Chestnut-sided-Warbler-correct.wav"),
      require("../responses/Chestnut-sided-Warbler-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBLER__MAGNOLIA.MP3")
    ],
    images: [
      require("../images/Magnolia_Warbler_-_May_17,_2025.jpg"),
      require("../images/Magnolia_warbler.webp")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Setophaga magnolia",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Magnolia Warbler",
    responses: [
      require("../responses/Magnolia-Warbler-correct.wav"),
      require("../responses/Magnolia-Warbler-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBLER__CAPE_MAY.MP3")
    ],
    images: [
      require("../images/Setophaga_tigrina_Male.jpg"),
      require("../images/Cape_May_Warbler_2.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Setophaga tigrina",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Cape May Warbler",
    responses: [
      require("../responses/Cape-May-Warbler-correct.wav"),
      require("../responses/Cape-May-Warbler-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBLER__BLACK_THROATED_BLU.MP3")
    ],
    images: [
      require("../images/Black-throated_Blue_Warbler_1.jpg"),
      require("../images/Black-Throated_Blue_Warbler.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Setophaga caerulescens",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Black-throated Blue Warbler",
    responses: [
      require("../responses/Black-throated-Blue-Warbler-correct.wav"),
      require("../responses/Black-throated-Blue-Warbler-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBLER__YELLOW_RUMPED.MP3")
    ],
    images: [
      require("../images/Yellow-rumped_warbler_singing_(41612)_(cropped).jpg"),
      require("../images/Myrtle_Warbler_-_Houston,_TX_2.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Setophaga coronata",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Yellow-rumped Warbler",
    responses: [
      require("../responses/Yellow-rumped-Warbler-correct.wav"),
      require("../responses/Yellow-rumped-Warbler-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBLER__BLACK_THROATED_GRE.MP3"),
      require("../audio/Setophaga_virens_-_Black-throated_Green_Warbler_-_XC101293.ogg")
    ],
    images: [
      require("../images/Black-throated_green_warbler_in_PP_(14050).jpg"),
      require("../images/Black-throated_Green_Warbler_by_Dan_Pancamo.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Setophaga virens",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Black-throated Green Warbler",
    responses: [
      require("../responses/Black-throated-Green-Warbler-correct.wav"),
      require("../responses/Black-throated-Green-Warbler-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBLER__BLACKBURNIAN.MP3"),
      require("../audio/Setophaga_fusca_-_Blackburnian_Warbler_XC142594.ogg")
    ],
    images: [
      require("../images/Blackburnian_warbler_(Setophaga_fusca)_male_San_Isidro.jpg"),
      require("../images/Blackburnian_warbler_(71064).jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Setophaga fusca",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Blackburnian Warbler",
    responses: [
      require("../responses/Blackburnian-Warbler-correct.wav"),
      require("../responses/Blackburnian-Warbler-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBLER__YELLOW_THROATED.MP3")
    ],
    images: [
      require("../images/Yellow-throated_Warbler_2.jpg"),
      require("../images/Yellow-throated_Warbler_on_territory.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Setophaga dominica",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Yellow-throated Warbler",
    responses: [
      require("../responses/Yellow-throated-Warbler-correct.wav"),
      require("../responses/Yellow-throated-Warbler-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBLER__PINE.MP3")
    ],
    images: [
      require("../images/Pine_warbler_(90070).jpg"),
      require("../images/Pine_Warbler_-_female.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Setophaga pinus",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Pine Warbler",
    responses: [
      require("../responses/Pine-Warbler-correct.wav"),
      require("../responses/Pine-Warbler-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBLER__PALM.MP3")
    ],
    images: [
      require("../images/Palm_warbler_(41597).jpg"),
      require("../images/A_palm_warbler.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Setophaga palmarum",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Palm Warbler",
    responses: [
      require("../responses/Palm-Warbler-correct.wav"),
      require("../responses/Palm-Warbler-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBLER__BAY_BREASTED.MP3")
    ],
    images: [
      require("../images/Dendroica-castanea-001.jpg"),
      require("../images/Bay-breasted_warbler_in_Central_Park_(43472).jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Setophaga castanea",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Bay-breasted Warbler",
    responses: [
      require("../responses/Bay-breasted-Warbler-correct.wav"),
      require("../responses/Bay-breasted-Warbler-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBLER__CERULEAN.MP3")
    ],
    images: [
      require("../images/Cerulean_Warbler.jpg"),
      require("../images/Cerulean_Warbler_close-up.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Setophaga cerulea",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Cerulean Warbler",
    responses: [
      require("../responses/Cerulean-Warbler-correct.wav"),
      require("../responses/Cerulean-Warbler-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBLER__BLACK_AND_WHITE.MP3")
    ],
    images: [
      require("../images/Black-and-white_warbler_in_Prospect_Park_(06193)2.jpg"),
      require("../images/Black-and-white_Warbler_2.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Mniotilta varia",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Black-and-white Warbler",
    responses: [
      require("../responses/Black-and-white-Warbler-correct.wav"),
      require("../responses/Black-and-white-Warbler-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/REDSTART__AMERICAN.MP3")
    ],
    images: [
      require("../images/Setophaga_ruticilla.jpg"),
      require("../images/AmericanRedstart17.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Setophaga ruticilla",
    familyCommon: "Wood-Warblers",
    speciesCommon: "American Redstart",
    responses: [
      require("../responses/American-Redstart-correct.wav"),
      require("../responses/American-Redstart-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBLER__PROTHONOTARY.MP3")
    ],
    images: [
      require("../images/Protonotaria-citrea-002_edit.jpg"),
      require("../images/D8G7D2390.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Protonotaria citrea",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Prothonotary Warbler",
    responses: [
      require("../responses/Prothonotary-Warbler-correct.wav"),
      require("../responses/Prothonotary-Warbler-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBLER__WORM_EATING.MP3")
    ],
    images: [
      require("../images/Worm-eating_Warbler.jpg"),
      require("../images/BOTW-featured-image_Worm-eating-Warbler.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Helmitheros vermivorum",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Worm-eating Warbler",
    responses: [
      require("../responses/Worm-eating-Warbler-correct.wav"),
      require("../responses/Worm-eating-Warbler-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/OVENBIRD.MP3")
    ],
    images: [
      require("../images/Ovenbird_(90497).jpg"),
      require("../images/ovenbird.webp")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Seiurus aurocapilla",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Ovenbird",
    responses: [
      require("../responses/Ovenbird-correct.wav"),
      require("../responses/Ovenbird-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WATERTHRUSH__NORTHERN.MP3")
    ],
    images: [
      require("../images/Northern_waterthrush_in_Central_Park_(14717).jpg"),
      require("../images/Northern_Waterthrush_Tex.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Parkesia noveboracensis",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Northern Waterthrush",
    responses: [
      require("../responses/Northern-Waterthrush-correct.wav"),
      require("../responses/Northern-Waterthrush-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WATERTHRUSH__LOUISIANA.MP3")
    ],
    images: [
      require("../images/Louisiana_waterthrush_(Parkesia_motacilla).jpg"),
      require("../images/Louisiana-waterthrush-2_(cropped).jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Parkesia motacilla",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Louisiana Waterthrush",
    responses: [
      require("../responses/Louisiana-Waterthrush-correct.wav"),
      require("../responses/Louisiana-Waterthrush-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBLER__KENTUCKY.MP3")
    ],
    images: [
      require("../images/Kentucky_Warbler1_Tex.jpg"),
      require("../images/Kentucky_Warbler2_Tex.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Geothlypis formosa",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Kentucky Warbler",
    responses: [
      require("../responses/Kentucky-Warbler-correct.wav"),
      require("../responses/Kentucky-Warbler-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBLER__CONNECTICUT.MP3")
    ],
    images: [
      require("../images/Oporornis_agilis_Youghiogheny_River_MD.jpg"),
      require("../images/75339871-1200px.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Oporornis agilis",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Connecticut Warbler",
    responses: [
      require("../responses/Connecticut-Warbler-correct.wav"),
      require("../responses/Connecticut-Warbler-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBLER__MOURNING.MP3")
    ],
    images: [
      require("../images/Geothlypis_philadelphia_289725142_(cropped).jpg"),
      require("../images/mourning_warbler.webp")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Geothlypis philadelphia",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Mourning Warbler",
    responses: [
      require("../responses/Mourning-Warbler-correct.wav"),
      require("../responses/Mourning-Warbler-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/YELLOWTHROAT__COMMON.MP3"),
      require("../audio/Yellowstone_sound_library_-_Common_Yellowthroat_-_001.mp3")
    ],
    images: [
      require("../images/Common_yellowthroat_in_PP_(14155).jpg"),
      require("../images/Common_Yellowthroat,_Finley_NWR_(13887001167).jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Geothlypis trichas",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Common Yellowthroat",
    responses: [
      require("../responses/Common-Yellowthroat-correct.wav"),
      require("../responses/Common-Yellowthroat-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBLER__HOODED.MP3")
    ],
    images: [
      require("../images/Hooded_Warbler.jpg"),
      require("../images/Hooded_Warbler_f_02.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Setophaga citrina",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Hooded Warbler",
    responses: [
      require("../responses/Hooded-Warbler-correct.wav"),
      require("../responses/Hooded-Warbler-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBLER__WILSON_S.MP3"),
      require("../audio/Cardellina_pusilla_-_Wilson's_Warbler_-_XC108402.ogg")
    ],
    images: [
      require("../images/Wilsonia_pusilla.jpg"),
      require("../images/Wilson's_warbler_in_PP_(14375).jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Cardellina pusilla",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Wilson's Warbler",
    responses: [
      require("../responses/Wilson's-Warbler-correct.wav"),
      require("../responses/Wilson's-Warbler-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/CHAT__YELLOW_BREASTED.MP3")
    ],
    images: [
      require("../images/Yellow-Breasted-Chat-Oregon.jpg"),
      require("../images/Yellow-breasted_chat_eating_a_snail_(06390).jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Icteria virens",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Yellow-breasted Chat",
    responses: [
      require("../responses/Yellow-breasted-Chat-correct.wav"),
      require("../responses/Yellow-breasted-Chat-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/WARBLER__CANADA.MP3")
    ],
    images: [
      require("../images/Canada_warbler_(Cardellina_canadensis)_male_San_Isidro.jpg"),
      require("../images/Canada_Warbler_on_Bough.jpg")
    ],
    order: "Passeriformes",
    family: "Parulidae",
    scientific: "Cardellina canadensis",
    familyCommon: "Wood-Warblers",
    speciesCommon: "Canada Warbler",
    responses: [
      require("../responses/Canada-Warbler-correct.wav"),
      require("../responses/Canada-Warbler-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/TANAGER__SCARLET.MP3")
    ],
    images: [
      require("../images/Piranga_olivacea1.jpg"),
      require("../images/Scarlet_tanager_in_GWC_(50867).jpg")
    ],
    order: "Passeriformes",
    family: "Thraupidae",
    scientific: "Piranga olivacea",
    familyCommon: "Tanagers",
    speciesCommon: "Scarlet Tanager",
    responses: [
      require("../responses/Scarlet-Tanager-correct.wav"),
      require("../responses/Scarlet-Tanager-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/TOWHEE__EASTERN.MP3"),
      require("../audio/Pipilo_erythrophthalmus_-_Eastern_Towhee_-_XC81298.ogg")
    ],
    images: [
      require("../images/20241004_eastern_towhee_pleasant_valley_PD207764.jpg"),
      require("../images/Pipilo_erythrophthalmus.jpg")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    scientific: "Pipilo erythrophthalmus",
    familyCommon: "Emberizids",
    speciesCommon: "Eastern Towhee",
    responses: [
      require("../responses/Eastern-Towhee-correct.wav"),
      require("../responses/Eastern-Towhee-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/SPARROW__CHIPPING.MP3"),
      require("../audio/Spizella_passerina_vocalizations_-_pone.0027052.s005.oga")
    ],
    images: [
      require("../images/Spizella-passerina-015_edit.jpg"),
      require("../images/Sparrow_at_Feeder_Portrait.jpg")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    scientific: "Spizella passerina",
    familyCommon: "Emberizids",
    speciesCommon: "Chipping Sparrow",
    responses: [
      require("../responses/Chipping-Sparrow-correct.wav"),
      require("../responses/Chipping-Sparrow-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/XC1014341_Clay-colored_Sparrow.wav")
    ],
    images: [
      require("../images/Spizella_pallida4_edit.jpg"),
      require("../images/Clay-colored_Sparrow_Tex.jpg")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    scientific: "Spizella pallida",
    familyCommon: "Emberizids",
    speciesCommon: "Clay-colored Sparrow",
    responses: [
      require("../responses/Clay-colored-Sparrow-correct.wav"),
      require("../responses/Clay-colored-Sparrow-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/SPARROW__FIELD.MP3")
    ],
    images: [
      require("../images/Field_sparrow_in_CP_(41484)_(cropped).jpg"),
      require("../images/Field_sparrow_in_CP_(41514).jpg")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    scientific: "Spizella pusilla",
    familyCommon: "Emberizids",
    speciesCommon: "Field Sparrow",
    responses: [
      require("../responses/Field-Sparrow-correct.wav"),
      require("../responses/Field-Sparrow-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/SPARROW__VESPER.MP3")
    ],
    images: [
      require("../images/Pooecetes_gramineus_-USA-8_(cropped).jpg"),
      require("../images/vesper_sparrow.webp")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    scientific: "Pooecetes gramineus",
    familyCommon: "Emberizids",
    speciesCommon: "Vesper Sparrow",
    responses: [
      require("../responses/Vesper-Sparrow-correct.wav"),
      require("../responses/Vesper-Sparrow-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/SPARROW__LARK.MP3")
    ],
    images: [
      require("../images/LarkSparrow.jpg"),
      require("../images/LarkSparrow-7DEC2017.jpg")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    scientific: "Chondestes grammacus",
    familyCommon: "Emberizids",
    speciesCommon: "Lark Sparrow",
    responses: [
      require("../responses/Lark-Sparrow-correct.wav"),
      require("../responses/Lark-Sparrow-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/SPARROW__SAVANNAH.MP3")
    ],
    images: [
      require("../images/Passerculus_sandwichensis_crop.jpg"),
      require("../images/Ipswich_Savannah_sparrow.png")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    scientific: "Passerculus sandwichensis",
    familyCommon: "Emberizids",
    speciesCommon: "Savannah Sparrow",
    responses: [
      require("../responses/Savannah-Sparrow-correct.wav"),
      require("../responses/Savannah-Sparrow-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/SPARROW__GRASSHOPPER.MP3"),
      require("../audio/Ammodramus_savannarum_-_Grasshopper_Sparrow_-_XC104530.ogg")
    ],
    images: [
      require("../images/Ammodramus_savannarum_160849415_(cropped).jpg"),
      require("../images/Grasshopper_Sparrow.jpg")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    scientific: "Ammodramus savannarum",
    familyCommon: "Emberizids",
    speciesCommon: "Grasshopper Sparrow",
    responses: [
      require("../responses/Grasshopper-Sparrow-correct.wav"),
      require("../responses/Grasshopper-Sparrow-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/SPARROW__HENSLOW_S.MP3")
    ],
    images: [
      require("../images/Henslow's_Sparrow_(WORKS)_(32593335156)_(cropped).jpg"),
      require("../images/henslows_sparrow.webp")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    scientific: "Centronyx henslowii",
    familyCommon: "Emberizids",
    speciesCommon: "Henslow's Sparrow",
    responses: [
      require("../responses/Henslow's-Sparrow-correct.wav"),
      require("../responses/Henslow's-Sparrow-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/SPARROW__SONG.MP3")
    ],
    images: [
      require("../images/Song_sparrow_in_Prospect_Park_(93031).jpg"),
      require("../images/Melospiza_melodia.jpg")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    scientific: "Melospiza melodia",
    familyCommon: "Emberizids",
    speciesCommon: "Song Sparrow",
    responses: [
      require("../responses/Song-Sparrow-correct.wav"),
      require("../responses/Song-Sparrow-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/SPARROW__LINCOLN.MP3")
    ],
    images: [
      require("../images/Lincoln_Sparrow_(34945695136)_(cropped).jpg"),
      require("../images/LincolnsSparrow-30DEC2017.jpg")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    scientific: "Melospiza lincolnii",
    familyCommon: "Emberizids",
    speciesCommon: "Lincoln's Sparrow",
    responses: [
      require("../responses/Lincoln's-Sparrow-correct.wav"),
      require("../responses/Lincoln's-Sparrow-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/SPARROW__SWAMP.MP3")
    ],
    images: [
      require("../images/Melospiza_georgiana_MP_01,_crop.jpg"),
      require("../images/SwampSparrow.jpg")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    scientific: "Melospiza georgiana",
    familyCommon: "Emberizids",
    speciesCommon: "Swamp Sparrow",
    responses: [
      require("../responses/Swamp-Sparrow-correct.wav"),
      require("../responses/Swamp-Sparrow-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/SPARROW__WHITE_THROATED.MP3"),
      require("../audio/Voice_of_Zonotrichia_albicollis.ogg")
    ],
    images: [
      require("../images/Zonotrichia_albicollis_CT1.jpg"),
      require("../images/White-throated_sparrow_in_CP_close_up_(02081).jpg")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    scientific: "Zonotrichia albicollis",
    familyCommon: "Emberizids",
    speciesCommon: "White-throated Sparrow",
    responses: [
      require("../responses/White-throated-Sparrow-correct.wav"),
      require("../responses/White-throated-Sparrow-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/JUNCO__DARK_EYED.MP3")
    ],
    images: [
      require("../images/Junco_hyemalis_hyemalis_CT1_(cropped).jpg"),
      require("../images/Dark-eyed_junco_(21840).jpg")
    ],
    order: "Passeriformes",
    family: "Emberizidae",
    scientific: "Junco hyemalis",
    familyCommon: "Emberizids",
    speciesCommon: "Dark-eyed Junco",
    responses: [
      require("../responses/Dark-eyed-Junco-correct.wav"),
      require("../responses/Dark-eyed-Junco-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/CARDINAL__NORTHERN.MP3")
    ],
    images: [
      require("../images/Male_northern_cardinal_in_Central_Park_(52612).jpg"),
      require("../images/Northern_cardinal_female_in_CP_(02035).jpg")
    ],
    order: "Passeriformes",
    family: "Cardinalidae",
    scientific: "Cardinalis cardinalis",
    familyCommon: "Cardinals/Saltators/Allies",
    speciesCommon: "Northern Cardinal",
    responses: [
      require("../responses/Northern-Cardinal-correct.wav"),
      require("../responses/Northern-Cardinal-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/GROSBEAK__ROSE_BREASTED.MP3")
    ],
    images: [
      require("../images/RosebreastedGrosbeak08.jpg"),
      require("../images/rose-breasted_grossbeak.webp")
    ],
    order: "Passeriformes",
    family: "Cardinalidae",
    scientific: "Pheucticus ludovicianus",
    familyCommon: "Cardinals/Saltators/Allies",
    speciesCommon: "Rose-breasted Grosbeak",
    responses: [
      require("../responses/Rose-breasted-Grosbeak-correct.wav"),
      require("../responses/Rose-breasted-Grosbeak-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/BUNTING__INDIGO.MP3")
    ],
    images: [
      require("../images/Indigo_Bunting_by_Dan_Pancamo_4.jpg"),
      require("../images/indigo_bunting.webp")
    ],
    order: "Passeriformes",
    family: "Cardinalidae",
    scientific: "Passerina cyanea",
    familyCommon: "Cardinals/Saltators/Allies",
    speciesCommon: "Indigo Bunting",
    responses: [
      require("../responses/Indigo-Bunting-correct.wav"),
      require("../responses/Indigo-Bunting-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/Spiza_americana_-_Dickcissel_-_XC82764.ogg"),
      require("../audio/DICKCISSEL.MP3")
    ],
    images: [
      require("../images/927_-_DICKCISSEL_(5-28-2018)_rick_evans.jpg"),
      require("../images/927_-_DICKCISSEL_(5-28-2018).jpg")
    ],
    order: "Passeriformes",
    family: "Cardinalidae",
    scientific: "Spiza americana",
    familyCommon: "Cardinals/Saltators/Allies",
    speciesCommon: "Dickcissel",
    responses: [
      require("../responses/Dickcissel-correct.wav"),
      require("../responses/Dickcissel-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/BOBOLINK.MP3")
    ],
    images: [
      require("../images/20250702_adult_male_bobolink.jpg"),
      require("../images/Bobolink_singing_Shawangunk_(31748).jpg")
    ],
    order: "Passeriformes",
    family: "Icteridae",
    scientific: "Dolichonyx oryzivorus",
    familyCommon: "Blackbirds",
    speciesCommon: "Bobolink",
    responses: [
      require("../responses/Bobolink-correct.wav"),
      require("../responses/Bobolink-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/BLACKBIRD__RED_WINGED.MP3"),
      require("../audio/Agelaius-phoeniceus-001.ogg")
    ],
    images: [
      require("../images/Agelaius_phoeniceus_0110_taxo.jpg"),
      require("../images/Red_winged_blackbird_-_natures_pics.jpg")
    ],
    order: "Passeriformes",
    family: "Icteridae",
    scientific: "Agelaius phoeniceus",
    familyCommon: "Blackbirds",
    speciesCommon: "Red-winged Blackbird",
    responses: [
      require("../responses/Red-winged-Blackbird-correct.wav"),
      require("../responses/Red-winged-Blackbird-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/MEADOWLARK__EASTERN.MP3")
    ],
    images: [
      require("../images/Two_meadows.jpg"),
      require("../images/Eastern_meadowlark.jpg")
    ],
    order: "Passeriformes",
    family: "Icteridae",
    scientific: "Sturnella magna",
    familyCommon: "Blackbirds",
    speciesCommon: "Eastern Meadowlark",
    responses: [
      require("../responses/Eastern-Meadowlark-correct.wav"),
      require("../responses/Eastern-Meadowlark-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/MEADOWLARK__WESTERN.MP3"),
      require("../audio/Sturnella_neglecta_-_Western_Meadowlark_-_XC76505.ogg")
    ],
    images: [
      require("../images/Sturnella_neglecta_GNP_02.jpg"),
      require("../images/Western_Meadowlark_in_Wyoming.jpg")
    ],
    order: "Passeriformes",
    family: "Icteridae",
    scientific: "Sturnella neglecta",
    familyCommon: "Blackbirds",
    speciesCommon: "Western Meadowlark",
    responses: [
      require("../responses/Western-Meadowlark-correct.wav"),
      require("../responses/Western-Meadowlark-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/BLACKBIRD__YELLOW_HEADED.MP3")
    ],
    images: [
      require("../images/Male_Yellow-headed_Blackbird.jpg"),
      require("../images/Yellow-headed_Blackbird_Tex.jpg")
    ],
    order: "Passeriformes",
    family: "Icteridae",
    scientific: "Xanthocephalus xanthocephalus",
    familyCommon: "Blackbirds",
    speciesCommon: "Yellow-headed Blackbird",
    responses: [
      require("../responses/Yellow-headed-Blackbird-correct.wav"),
      require("../responses/Yellow-headed-Blackbird-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/BLACKBIRD__BREWER_S.MP3"),
      require("../audio/Euphagus_cyanocephalus_-_Brewer's_Blackbird_-_XC104520.ogg")
    ],
    images: [
      require("../images/Brewers_Blackbird_Esquimalt_Lagoon.jpg"),
      require("../images/Brewer's_Blackbird_puffed_up.jpeg")
    ],
    order: "Passeriformes",
    family: "Icteridae",
    scientific: "Euphagus cyanocephalus",
    familyCommon: "Blackbirds",
    speciesCommon: "Brewer's Blackbird",
    responses: [
      require("../responses/Brewer's-Blackbird-correct.wav"),
      require("../responses/Brewer's-Blackbird-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/GRACKLE__COMMON.MP3"),
      require("../audio/Quiscalus_quiscula_-_Common_Grackle_-_XC99545.ogg")
    ],
    images: [
      require("../images/Common_grackle_in_PP_(36732).jpg"),
      require("../images/Common_grackle_iridescence_in_CP_(43218).jpg")
    ],
    order: "Passeriformes",
    family: "Icteridae",
    scientific: "Quiscalus quiscula",
    familyCommon: "Blackbirds",
    speciesCommon: "Common Grackle",
    responses: [
      require("../responses/Common-Grackle-correct.wav"),
      require("../responses/Common-Grackle-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/COWBIRD__BROWN_HEADED.MP3"),
      require("../audio/LS110137_BHCO_B_Brown-headed_cowbird_one_call.ogg")
    ],
    images: [
      require("../images/Brown-headed_cowbird_male_(71126).jpg"),
      require("../images/Cowbirdsincourtship.jpg")
    ],
    order: "Passeriformes",
    family: "Icteridae",
    scientific: "Molothrus ater",
    familyCommon: "Blackbirds",
    speciesCommon: "Brown-headed Cowbird",
    responses: [
      require("../responses/Brown-headed-Cowbird-correct.wav"),
      require("../responses/Brown-headed-Cowbird-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/BLACKBIRD__RUSTY.MP3")
    ],
    images: [
      require("../images/Euphagus-carolinus-001.jpg"),
      require("../images/rusty_blackbird.webp")
    ],
    order: "Passeriformes",
    family: "Icteridae",
    scientific: "Euphagus carolinus",
    familyCommon: "Blackbirds",
    speciesCommon: "Rusty Blackbird",
    responses: [
      require("../responses/Rusty-Blackbird-correct.wav"),
      require("../responses/Rusty-Blackbird-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/ORIOLE__ORCHARD.MP3")
    ],
    images: [
      require("../images/Orchard_Oriole_by_Dan_Pancamo_1.jpg"),
      require("../images/Orchard_oriole_(Icterus_spurius)_male_Los_Tarrales.jpg")
    ],
    order: "Passeriformes",
    family: "Icteridae",
    scientific: "Icterus spurius",
    familyCommon: "Blackbirds",
    speciesCommon: "Orchard Oriole",
    responses: [
      require("../responses/Orchard-Oriole-correct.wav"),
      require("../responses/Orchard-Oriole-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/ORIOLE__BALTIMORE.MP3"),
      require("../audio/Baltimore_oriole.ogg")
    ],
    images: [
      require("../images/Baltimore_Oriole-_dorsum.jpg"),
      require("../images/Audubon_Oriole_(Male).jpg")
    ],
    order: "Passeriformes",
    family: "Icteridae",
    scientific: "Icterus galbula",
    familyCommon: "Blackbirds",
    speciesCommon: "Baltimore Oriole",
    responses: [
      require("../responses/Baltimore-Oriole-correct.wav"),
      require("../responses/Baltimore-Oriole-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/FINCH__PURPLE.MP3")
    ],
    images: [
      require("../images/Carpodacus_purpureus_CT3.jpg"),
      require("../images/Purple_Finch_on_a_Fir_branch.jpg")
    ],
    order: "Passeriformes",
    family: "Fringillidae",
    scientific: "Haemorhous purpureus",
    familyCommon: "Fringilline/Cardueline Finches",
    speciesCommon: "Purple Finch",
    responses: [
      require("../responses/Purple-Finch-correct.wav"),
      require("../responses/Purple-Finch-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/FINCH__HOUSE.MP3"),
      require("../audio/Carpodacus_mexicanus.oga")
    ],
    images: [
      require("../images/House_finch_(33688)2.jpg"),
      require("../images/Common_House_Finch_on_Branch.jpg")
    ],
    order: "Passeriformes",
    family: "Fringillidae",
    scientific: "Haemorhous mexicanus",
    familyCommon: "Fringilline/Cardueline Finches",
    speciesCommon: "House Finch",
    responses: [
      require("../responses/House-Finch-correct.wav"),
      require("../responses/House-Finch-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/CROSSBILL__WHITE_WINGED.MP3")
    ],
    images: [
      require("../images/Whitewingedcrossbillmale09.jpg"),
      require("../images/white_winged_crossbill.webp")
    ],
    order: "Passeriformes",
    family: "Fringillidae",
    scientific: "Loxia leucoptera",
    familyCommon: "Fringilline/Cardueline Finches",
    speciesCommon: "White-winged Crossbill",
    responses: [
      require("../responses/White-winged-Crossbill-correct.wav"),
      require("../responses/White-winged-Crossbill-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/SISKIN__PINE.MP3"),
      require("../audio/Carduelis_pinus_-_Pine_Siskin_-_XC70423.ogg")
    ],
    images: [
      require("../images/Carduelis_pinus_CT7.jpg"),
      require("../images/pine_siskin.webp")
    ],
    order: "Passeriformes",
    family: "Fringillidae",
    scientific: "Spinus pinus",
    familyCommon: "Fringilline/Cardueline Finches",
    speciesCommon: "Pine Siskin",
    responses: [
      require("../responses/Pine-Siskin-correct.wav"),
      require("../responses/Pine-Siskin-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/GOLDFINCH__AMERICAN.MP3"),
      require("../audio/30goldfinch.ogg")
    ],
    images: [
      require("../images/Carduelis_tristis_-Michigan,_USA_-male-8.jpg"),
      require("../images/American_Goldfinch-27527.jpg")
    ],
    order: "Passeriformes",
    family: "Fringillidae",
    scientific: "Spinus tristis",
    familyCommon: "Fringilline/Cardueline Finches",
    speciesCommon: "American Goldfinch",
    responses: [
      require("../responses/American-Goldfinch-correct.wav"),
      require("../responses/American-Goldfinch-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/GROSBEAK__EVENING.MP3"),
      require("../audio/Hesperiphona_vespertina.ogg")
    ],
    images: [
      require("../images/Hesperiphona_vespertina_CT3.jpg"),
      require("../images/Evening_Grosbeak_Male.jpg")
    ],
    order: "Passeriformes",
    family: "Fringillidae",
    scientific: "Hesperiphona vespertina",
    familyCommon: "Fringilline/Cardueline Finches",
    speciesCommon: "Evening Grosbeak",
    responses: [
      require("../responses/Evening-Grosbeak-correct.wav"),
      require("../responses/Evening-Grosbeak-incorrect.wav")
    ]
  },
  {
    audio: [
      require("../audio/SPARROW__HOUSE.MP3"),
      require("../audio/House_Sparrow_(Passer_domesticus)_call.wav")
    ],
    images: [
      require("../images/House_sparrow_male_in_Prospect_Park_(53532).jpg"),
      require("../images/House_Sparrow,_England_-_May_09.jpg")
    ],
    order: "Passeriformes",
    family: "Passeridae",
    scientific: "Passer domesticus",
    familyCommon: "Old World Sparrows",
    speciesCommon: "House Sparrow",
    responses: [
      require("../responses/House-Sparrow-correct.wav"),
      require("../responses/House-Sparrow-incorrect.wav")
    ]
  }
];

export default birds;