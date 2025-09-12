const birdsWithoutFiles = [
  {
    "order": "Gaviiformes",
    "family": "Gaviidae",
    "scientific": "Gavia immer",
    "familyCommon": "Loons",
    "speciesCommon": "Common Loon"
  },
  {
    "mnemonic": "whooping kuk-kuk-cow-cow-cow-cowp-cowp",
    "order": "Podicipediformes",
    "family": "Podicipedidae",
    "scientific": "Podilymbus podiceps",
    "familyCommon": "Grebes",
    "speciesCommon": "Pied-billed Grebe"
  },
  {
    "mnemonic": "oong, kach, oonk",
    "order": "Ciconiiformes",
    "family": "Ardeidae",
    "scientific": "Botaurus lentiginosus",
    "familyCommon": "Herons/Bitterns/Allies",
    "speciesCommon": "American Bittern"
  },
  {
    "order": "Ciconiiformes",
    "family": "Ardeidae",
    "scientific": "Botaurus exilis",
    "familyCommon": "Herons/Bitterns/Allies",
    "speciesCommon": "Least Bittern"
  },
  {
    "order": "Ciconiiformes",
    "family": "Ardeidae",
    "scientific": "Nycticorax nycticorax",
    "familyCommon": "Herons/Bitterns/Allies",
    "speciesCommon": "Black-crowned Night-Heron"
  },
  {
    "order": "Anseriformes",
    "family": "Anatidae",
    "scientific": "Branta canadensis",
    "familyCommon": "Ducks/Geese/Swans",
    "speciesCommon": "Canada Goose"
  },
  {
    "order": "Anseriformes",
    "family": "Anatidae",
    "scientific": "Aix sponsa",
    "familyCommon": "Ducks/Geese/Swans",
    "speciesCommon": "Wood Duck"
  },
  {
    "order": "Anseriformes",
    "family": "Anatidae",
    "scientific": "Anas platyrhynchos",
    "familyCommon": "Ducks/Geese/Swans",
    "speciesCommon": "Mallard"
  },
  {
    "order": "Falconiformes",
    "family": "Accipitridae",
    "scientific": "Astur atricapillus",
    "familyCommon": "Hawks/Kites/Eagles/Allies",
    "speciesCommon": "Northern Goshawk"
  },
  {
    "order": "Falconiformes",
    "family": "Accipitridae",
    "scientific": "Buteo lineatus",
    "familyCommon": "Hawks/Kites/Eagles/Allies",
    "speciesCommon": "Red-shouldered Hawk"
  },
  {
    "mnemonic": "very high-pitched kee-ee, almost like a whistle",
    "order": "Falconiformes",
    "family": "Accipitridae",
    "scientific": "Buteo platypterus",
    "familyCommon": "Hawks/Kites/Eagles/Allies",
    "speciesCommon": "Broad-winged Hawk"
  },
  {
    "order": "Falconiformes",
    "family": "Accipitridae",
    "scientific": "Buteo jamaicensis",
    "familyCommon": "Hawks/Kites/Eagles/Allies",
    "speciesCommon": "Red-tailed Hawk"
  },
  {
    "mnemonic": "three basic vocalizations – the \"klee\" or \"killy\", the \"whine\", and the \"chitter\"",
    "order": "Falconiformes",
    "family": "Falconidae",
    "scientific": "Falco sparverius",
    "familyCommon": "Caracaras/Falcons",
    "speciesCommon": "American Kestrel"
  },
  {
    "order": "Falconiformes",
    "family": "Falconidae",
    "scientific": "Falco columbarius",
    "familyCommon": "Caracaras/Falcons",
    "speciesCommon": "Merlin"
  },
  {
    "order": "Galliformes",
    "family": "Phasianidae",
    "scientific": "Phasianus colchicus",
    "familyCommon": "Partridges/Grouse/Turkeys/Quail",
    "speciesCommon": "Ring-necked Pheasant"
  },
  {
    "order": "Galliformes",
    "family": "Phasianidae",
    "scientific": "Bonasa umbellus",
    "familyCommon": "Partridges/Grouse/Turkeys/Quail",
    "speciesCommon": "Ruffed Grouse"
  },
  {
    "order": "Galliformes",
    "family": "Phasianidae",
    "scientific": "Tympanuchus cupido",
    "familyCommon": "Partridges/Grouse/Turkeys/Quail",
    "speciesCommon": "Greater Prairie-Chicken"
  },
  {
    "order": "Galliformes",
    "family": "Phasianidae",
    "scientific": "Meleagris gallopavo",
    "familyCommon": "Partridges/Grouse/Turkeys/Quail",
    "speciesCommon": "Wild Turkey"
  },
  {
    "order": "Gruiformes",
    "family": "Rallidae",
    "scientific": "Coturnicops noveboracensis",
    "familyCommon": "Rails/Gallinules/Coots",
    "speciesCommon": "Yellow Rail"
  },
  {
    "mnemonic": "\"tick-it\" or \"kid-ick\"",
    "order": "Gruiformes",
    "family": "Rallidae",
    "scientific": "Rallus limicola",
    "familyCommon": "Rails/Gallinules/Coots",
    "speciesCommon": "Virginia Rail"
  },
  {
    "order": "Gruiformes",
    "family": "Rallidae",
    "scientific": "Porzana carolina",
    "familyCommon": "Rails/Gallinules/Coots",
    "speciesCommon": "Sora"
  },
  {
    "order": "Gruiformes",
    "family": "Rallidae",
    "scientific": "Gallinula chloropus",
    "familyCommon": "Rails/Gallinules/Coots",
    "speciesCommon": "Common Moorhen"
  },
  {
    "order": "Gruiformes",
    "family": "Rallidae",
    "scientific": "Fulica americana",
    "familyCommon": "Rails/Gallinules/Coots",
    "speciesCommon": "American Coot"
  },
  {
    "order": "Gruiformes",
    "family": "Gruidae",
    "scientific": "Antigone canadensis",
    "familyCommon": "Cranes",
    "speciesCommon": "Sandhill Crane"
  },
  {
    "order": "Charadriiformes",
    "family": "Charadriidae",
    "scientific": "Charadrius vociferus",
    "familyCommon": "Lapwings/Plovers",
    "speciesCommon": "Killdeer"
  },
  {
    "order": "Charadriiformes",
    "family": "Scolopacidae",
    "scientific": "Actitis macularius",
    "familyCommon": "Sandpipers/Phalaropes/Allies",
    "speciesCommon": "Spotted Sandpiper"
  },
  {
    "order": "Charadriiformes",
    "family": "Scolopacidae",
    "scientific": "Bartramia longicauda",
    "familyCommon": "Sandpipers/Phalaropes/Allies",
    "speciesCommon": "Upland Sandpiper"
  },
  {
    "order": "Charadriiformes",
    "family": "Scolopacidae",
    "scientific": "Gallinago delicata",
    "familyCommon": "Sandpipers/Phalaropes/Allies",
    "speciesCommon": "Wilson's snipe"
  },
  {
    "order": "Charadriiformes",
    "family": "Scolopacidae",
    "scientific": "Scolopax minor",
    "familyCommon": "Sandpipers/Phalaropes/Allies",
    "speciesCommon": "American Woodcock"
  },
  {
    "order": "Charadriiformes",
    "family": "Laridae",
    "scientific": "Larus delawarensis",
    "familyCommon": "Skuas/Gulls/Terns/Skimmers",
    "speciesCommon": "Ring-billed Gull"
  },
  {
    "order": "Charadriiformes",
    "family": "Laridae",
    "scientific": "Hydroprogne caspia",
    "familyCommon": "Skuas/Gulls/Terns/Skimmers",
    "speciesCommon": "Caspian Tern"
  },
  {
    "order": "Charadriiformes",
    "family": "Laridae",
    "scientific": "Sterna forsteri",
    "familyCommon": "Skuas/Gulls/Terns/Skimmers",
    "speciesCommon": "Forster's Tern"
  },
  {
    "order": "Charadriiformes",
    "family": "Laridae",
    "scientific": "Chlidonias niger",
    "familyCommon": "Skuas/Gulls/Terns/Skimmers",
    "speciesCommon": "Black Tern"
  },
  {
    "order": "Columbiformes",
    "family": "Columbidae",
    "scientific": "Columba livia",
    "familyCommon": "Pigeons/Doves",
    "speciesCommon": "Rock Pigeon"
  },
  {
    "order": "Columbiformes",
    "family": "Columbidae",
    "scientific": "Zenaida macroura",
    "familyCommon": "Pigeons/Doves",
    "speciesCommon": "Mourning Dove"
  },
  {
    "order": "Cuculiformes",
    "family": "Cuculidae",
    "scientific": "Coccyzus erythropthalmus",
    "familyCommon": "Cuckoos/Roadrunners/Anis",
    "speciesCommon": "Black-billed Cuckoo"
  },
  {
    "order": "Strigiformes",
    "family": "Strigidae",
    "scientific": "Megascops asio",
    "familyCommon": "Typical Owls",
    "speciesCommon": "Eastern Screech Owl"
  },
  {
    "order": "Strigiformes",
    "family": "Strigidae",
    "scientific": "Bubo virginianus",
    "familyCommon": "Typical Owls",
    "speciesCommon": "Great Horned Owl"
  },
  {
    "order": "Strigiformes",
    "family": "Strigidae",
    "scientific": "Strix varia",
    "familyCommon": "Typical Owls",
    "speciesCommon": "Barred Owl"
  },
  {
    "order": "Strigiformes",
    "family": "Strigidae",
    "scientific": "Aegolius acadicus",
    "familyCommon": "Typical Owls",
    "speciesCommon": "Northern Saw-whet Owl"
  },
  {
    "order": "Caprimulgiformes",
    "family": "Caprimulgidae",
    "scientific": "Antrostomus vociferus",
    "familyCommon": "Goatsuckers",
    "speciesCommon": "Whip-poor-will"
  },
  {
    "order": "Apodiformes",
    "family": "Apodidae",
    "scientific": "Chaetura pelagica",
    "familyCommon": "Swifts",
    "speciesCommon": "Chimney Swift"
  },
  {
    "order": "Apodiformes",
    "family": "Trochilidae",
    "scientific": "Archilochus colubris",
    "familyCommon": "Hummingbirds",
    "speciesCommon": "Ruby-throated Hummingbird"
  },
  {
    "order": "Coraciiformes",
    "family": "Alcedinidae",
    "scientific": "Megaceryle alcyon",
    "familyCommon": "Kingfishers",
    "speciesCommon": "Belted Kingfisher"
  },
  {
    "order": "Piciformes",
    "family": "Picidae",
    "scientific": "Melanerpes erythrocephalus",
    "familyCommon": "Woodpeckers/Allies",
    "speciesCommon": "Red-headed Woodpecker"
  },
  {
    "order": "Piciformes",
    "family": "Picidae",
    "scientific": "Melanerpes carolinus",
    "familyCommon": "Woodpeckers/Allies",
    "speciesCommon": "Red-bellied Woodpecker"
  },
  {
    "order": "Piciformes",
    "family": "Picidae",
    "scientific": "Sphyrapicus varius",
    "familyCommon": "Woodpeckers/Allies",
    "speciesCommon": "Yellow-bellied Sapsucker"
  },
  {
    "order": "Piciformes",
    "family": "Picidae",
    "scientific": "Dryobates pubescens",
    "familyCommon": "Woodpeckers/Allies",
    "speciesCommon": "Downy Woodpecker"
  },
  {
    "order": "Piciformes",
    "family": "Picidae",
    "scientific": "Leuconotopicus villosus",
    "familyCommon": "Woodpeckers/Allies",
    "speciesCommon": "Hairy Woodpecker"
  },
  {
    "order": "Piciformes",
    "family": "Picidae",
    "scientific": "Colaptes auratus",
    "familyCommon": "Woodpeckers/Allies",
    "speciesCommon": "Northern Flicker"
  },
  {
    "order": "Piciformes",
    "family": "Picidae",
    "scientific": "Dryocopus pileatus",
    "familyCommon": "Woodpeckers/Allies",
    "speciesCommon": "Pileated Woodpecker"
  },
  {
    "order": "Passeriformes",
    "family": "Tyrannidae",
    "scientific": "Contopus cooperi",
    "familyCommon": "Tyrant Flycatchers",
    "speciesCommon": "Olive-sided Flycatcher"
  },
  {
    "order": "Passeriformes",
    "family": "Tyrannidae",
    "scientific": "Contopus virens",
    "familyCommon": "Tyrant Flycatchers",
    "speciesCommon": "Eastern Wood-Pewee"
  },
  {
    "order": "Passeriformes",
    "family": "Tyrannidae",
    "scientific": "Empidonax flaviventris",
    "familyCommon": "Tyrant Flycatchers",
    "speciesCommon": "Yellow-bellied Flycatcher"
  },
  {
    "order": "Passeriformes",
    "family": "Tyrannidae",
    "scientific": "Empidonax virescens",
    "familyCommon": "Tyrant Flycatchers",
    "speciesCommon": "Acadian Flycatcher"
  },
  {
    "order": "Passeriformes",
    "family": "Tyrannidae",
    "scientific": "Empidonax alnorum",
    "familyCommon": "Tyrant Flycatchers",
    "speciesCommon": "Alder Flycatcher"
  },
  {
    "order": "Passeriformes",
    "family": "Tyrannidae",
    "scientific": "Empidonax traillii",
    "familyCommon": "Tyrant Flycatchers",
    "speciesCommon": "Willow Flycatcher"
  },
  {
    "order": "Passeriformes",
    "family": "Tyrannidae",
    "scientific": "Empidonax minimus",
    "familyCommon": "Tyrant Flycatchers",
    "speciesCommon": "Least Flycatcher"
  },
  {
    "order": "Passeriformes",
    "family": "Tyrannidae",
    "scientific": "Sayornis phoebe",
    "familyCommon": "Tyrant Flycatchers",
    "speciesCommon": "Eastern Phoebe"
  },
  {
    "order": "Passeriformes",
    "family": "Tyrannidae",
    "scientific": "Myiarchus crinitus",
    "familyCommon": "Tyrant Flycatchers",
    "speciesCommon": "Great Crested Flycatcher"
  },
  {
    "order": "Passeriformes",
    "family": "Tyrannidae",
    "scientific": "Tyrannus tyrannus",
    "familyCommon": "Tyrant Flycatchers",
    "speciesCommon": "Eastern Kingbird"
  },
  {
    "order": "Passeriformes",
    "family": "Vireonidae",
    "scientific": "Vireo bellii",
    "familyCommon": "Vireos",
    "speciesCommon": "Bell's Vireo"
  },
  {
    "order": "Passeriformes",
    "family": "Vireonidae",
    "scientific": "Vireo flavifrons",
    "familyCommon": "Vireos",
    "speciesCommon": "Yellow-throated Vireo"
  },
  {
    "order": "Passeriformes",
    "family": "Vireonidae",
    "scientific": "Vireo solitarius",
    "familyCommon": "Vireos",
    "speciesCommon": "Blue-headed Vireo"
  },
  {
    "order": "Passeriformes",
    "family": "Vireonidae",
    "scientific": "Vireo gilvus",
    "familyCommon": "Vireos",
    "speciesCommon": "Warbling Vireo"
  },
  {
    "order": "Passeriformes",
    "family": "Vireonidae",
    "scientific": "Vireo philadelphicus",
    "familyCommon": "Vireos",
    "speciesCommon": "Philadelphia Vireo"
  },
  {
    "order": "Passeriformes",
    "family": "Vireonidae",
    "scientific": "Vireo olivaceus",
    "familyCommon": "Vireos",
    "speciesCommon": "Red-eyed Vireo"
  },
  {
    "order": "Passeriformes",
    "family": "Corvidae",
    "scientific": "Perisoreus canadensis",
    "familyCommon": "Jays/Crows",
    "speciesCommon": "Gray Jay"
  },
  {
    "order": "Passeriformes",
    "family": "Corvidae",
    "scientific": "Cyanocitta cristata",
    "familyCommon": "Jays/Crows",
    "speciesCommon": "Blue Jay"
  },
  {
    "order": "Passeriformes",
    "family": "Corvidae",
    "scientific": "Corvus brachyrhynchos",
    "familyCommon": "Jays/Crows",
    "speciesCommon": "American Crow"
  },
  {
    "order": "Passeriformes",
    "family": "Corvidae",
    "scientific": "Corvus corax",
    "familyCommon": "Jays/Crows",
    "speciesCommon": "Common Raven"
  },
  {
    "order": "Passeriformes",
    "family": "Alaudidae",
    "scientific": "Eremophila alpestris",
    "familyCommon": "Larks",
    "speciesCommon": "Horned Lark"
  },
  {
    "order": "Passeriformes",
    "family": "Hirundinidae",
    "scientific": "Progne subis",
    "familyCommon": "Swallows",
    "speciesCommon": "Purple Martin"
  },
  {
    "order": "Passeriformes",
    "family": "Hirundinidae",
    "scientific": "Tachycineta bicolor",
    "familyCommon": "Swallows",
    "speciesCommon": "Tree Swallow"
  },
  {
    "order": "Passeriformes",
    "family": "Hirundinidae",
    "scientific": "Stelgidopteryx serripennis",
    "familyCommon": "Swallows",
    "speciesCommon": "Northern Rough-winged Swallow"
  },
  {
    "order": "Passeriformes",
    "family": "Hirundinidae",
    "scientific": "Riparia riparia",
    "familyCommon": "Swallows",
    "speciesCommon": "Bank Swallow"
  },
  {
    "order": "Passeriformes",
    "family": "Hirundinidae",
    "scientific": "Hirundo rustica",
    "familyCommon": "Swallows",
    "speciesCommon": "Barn Swallow"
  },
  {
    "order": "Passeriformes",
    "family": "Paridae",
    "scientific": "Poecile atricapillus",
    "familyCommon": "Chickadees/Titmice",
    "speciesCommon": "Black-capped Chickadee"
  },
  {
    "order": "Passeriformes",
    "family": "Paridae",
    "scientific": "Poecile hudsonicus",
    "familyCommon": "Chickadees/Titmice",
    "speciesCommon": "Boreal Chickadee"
  },
  {
    "order": "Passeriformes",
    "family": "Paridae",
    "scientific": "Baeolophus bicolor",
    "familyCommon": "Chickadees/Titmice",
    "speciesCommon": "Tufted Titmouse"
  },
  {
    "order": "Passeriformes",
    "family": "Sittidae",
    "scientific": "Sitta canadensis",
    "familyCommon": "Nuthatches",
    "speciesCommon": "Red-breasted Nuthatch"
  },
  {
    "order": "Passeriformes",
    "family": "Sittidae",
    "scientific": "Sitta carolinensis",
    "familyCommon": "Nuthatches",
    "speciesCommon": "White-breasted Nuthatch"
  },
  {
    "order": "Passeriformes",
    "family": "Certhiidae",
    "scientific": "Certhia americana",
    "familyCommon": "Creepers",
    "speciesCommon": "Brown Creeper"
  },
  {
    "order": "Passeriformes",
    "family": "Troglodytidae",
    "scientific": "Troglodytes aedon",
    "familyCommon": "Wrens",
    "speciesCommon": "House Wren"
  },
  {
    "order": "Passeriformes",
    "family": "Troglodytidae",
    "scientific": "Troglodytes hiemalis",
    "familyCommon": "Wrens",
    "speciesCommon": "Winter Wren"
  },
  {
    "order": "Passeriformes",
    "family": "Troglodytidae",
    "scientific": "Cistothorus stellaris",
    "familyCommon": "Wrens",
    "speciesCommon": "Sedge Wren"
  },
  {
    "order": "Passeriformes",
    "family": "Troglodytidae",
    "scientific": "Cistothorus palustris",
    "familyCommon": "Wrens",
    "speciesCommon": "Marsh Wren"
  },
  {
    "order": "Passeriformes",
    "family": "Regulidae",
    "scientific": "Regulus satrapa",
    "familyCommon": "Kinglets",
    "speciesCommon": "Golden-crowned Kinglet"
  },
  {
    "order": "Passeriformes",
    "family": "Regulidae",
    "scientific": "Corthylio calendula",
    "familyCommon": "Kinglets",
    "speciesCommon": "Ruby-crowned Kinglet"
  },
  {
    "order": "Passeriformes",
    "family": "Sylviidae",
    "scientific": "Polioptila caerulea",
    "familyCommon": "Old World Warblers/Gnatcatchers",
    "speciesCommon": "Blue-gray Gnatcatcher"
  },
  {
    "order": "Passeriformes",
    "family": "Turdidae",
    "scientific": "Sialia sialis",
    "familyCommon": "Thrushes",
    "speciesCommon": "Eastern Bluebird"
  },
  {
    "order": "Passeriformes",
    "family": "Turdidae",
    "scientific": "Catharus fuscescens",
    "familyCommon": "Thrushes",
    "speciesCommon": "Veery"
  },
  {
    "order": "Passeriformes",
    "family": "Turdidae",
    "scientific": "Catharus ustulatus",
    "familyCommon": "Thrushes",
    "speciesCommon": "Swainson's Thrush"
  },
  {
    "order": "Passeriformes",
    "family": "Turdidae",
    "scientific": "Catharus guttatus",
    "familyCommon": "Thrushes",
    "speciesCommon": "Hermit Thrush"
  },
  {
    "order": "Passeriformes",
    "family": "Turdidae",
    "scientific": "Hylocichla mustelina",
    "familyCommon": "Thrushes",
    "speciesCommon": "Wood Thrush"
  },
  {
    "order": "Passeriformes",
    "family": "Turdidae",
    "scientific": "Turdus migratorius",
    "familyCommon": "Thrushes",
    "speciesCommon": "American Robin"
  },
  {
    "order": "Passeriformes",
    "family": "Mimidae",
    "scientific": "Dumetella carolinensis",
    "familyCommon": "Mockingbirds/Thrashers",
    "speciesCommon": "Gray Catbird"
  },
  {
    "order": "Passeriformes",
    "family": "Mimidae",
    "scientific": "Toxostoma rufum",
    "familyCommon": "Mockingbirds/Thrashers",
    "speciesCommon": "Brown Thrasher"
  },
  {
    "order": "Passeriformes",
    "family": "Sturnidae",
    "scientific": "Sturnus vulgaris",
    "familyCommon": "Starlings",
    "speciesCommon": "European Starling"
  },
  {
    "order": "Passeriformes",
    "family": "Bombycillidae",
    "scientific": "Bombycilla cedrorum",
    "familyCommon": "Waxwings",
    "speciesCommon": "Cedar Waxwing"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Vermivora cyanoptera",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Blue-winged Warbler"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Vermivora chrysoptera",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Golden-winged Warbler"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Leiothlypis peregrina",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Tennessee Warbler"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Leiothlypis ruficapilla",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Nashville Warbler"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Setophaga americana",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Northern Parula"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Setophaga petechia",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Yellow Warbler"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Setophaga pensylvanica",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Chestnut-sided Warbler"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Setophaga magnolia",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Magnolia Warbler"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Setophaga tigrina",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Cape May Warbler"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Setophaga caerulescens",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Black-throated Blue Warbler"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Setophaga coronata",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Yellow-rumped Warbler"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Setophaga virens",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Black-throated Green Warbler"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Setophaga fusca",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Blackburnian Warbler"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Setophaga dominica",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Yellow-throated Warbler"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Setophaga pinus",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Pine Warbler"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Setophaga palmarum",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Palm Warbler"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Setophaga castanea",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Bay-breasted Warbler"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Setophaga cerulea",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Cerulean Warbler"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Mniotilta varia",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Black-and-white Warbler"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Setophaga ruticilla",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "American Redstart"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Protonotaria citrea",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Prothonotary Warbler"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Helmitheros vermivorum",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Worm-eating Warbler"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Seiurus aurocapilla",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Ovenbird"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Parkesia noveboracensis",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Northern Waterthrush"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Parkesia motacilla",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Louisiana Waterthrush"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Geothlypis formosa",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Kentucky Warbler"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Oporornis agilis",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Connecticut Warbler"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Geothlypis philadelphia",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Mourning Warbler"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Geothlypis trichas",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Common Yellowthroat"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Setophaga citrina",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Hooded Warbler"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Cardellina pusilla",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Wilson's Warbler"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Icteria virens",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Yellow-breasted Chat"
  },
  {
    "order": "Passeriformes",
    "family": "Parulidae",
    "scientific": "Cardellina canadensis",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Canada Warbler"
  },
  {
    "order": "Passeriformes",
    "family": "Thraupidae",
    "scientific": "Piranga olivacea",
    "familyCommon": "Tanagers",
    "speciesCommon": "Scarlet Tanager"
  },
  {
    "order": "Passeriformes",
    "family": "Emberizidae",
    "scientific": "Pipilo erythrophthalmus",
    "familyCommon": "Emberizids",
    "speciesCommon": "Eastern Towhee"
  },
  {
    "order": "Passeriformes",
    "family": "Emberizidae",
    "scientific": "Spizella passerina",
    "familyCommon": "Emberizids",
    "speciesCommon": "Chipping Sparrow"
  },
  {
    "order": "Passeriformes",
    "family": "Emberizidae",
    "scientific": "Spizella pallida",
    "familyCommon": "Emberizids",
    "speciesCommon": "Clay-colored Sparrow"
  },
  {
    "order": "Passeriformes",
    "family": "Emberizidae",
    "scientific": "Spizella pusilla",
    "familyCommon": "Emberizids",
    "speciesCommon": "Field Sparrow"
  },
  {
    "order": "Passeriformes",
    "family": "Emberizidae",
    "scientific": "Pooecetes gramineus",
    "familyCommon": "Emberizids",
    "speciesCommon": "Vesper Sparrow"
  },
  {
    "order": "Passeriformes",
    "family": "Emberizidae",
    "scientific": "Chondestes grammacus",
    "familyCommon": "Emberizids",
    "speciesCommon": "Lark Sparrow"
  },
  {
    "order": "Passeriformes",
    "family": "Emberizidae",
    "scientific": "Passerculus sandwichensis",
    "familyCommon": "Emberizids",
    "speciesCommon": "Savannah Sparrow"
  },
  {
    "order": "Passeriformes",
    "family": "Emberizidae",
    "scientific": "Ammodramus savannarum",
    "familyCommon": "Emberizids",
    "speciesCommon": "Grasshopper Sparrow"
  },
  {
    "order": "Passeriformes",
    "family": "Emberizidae",
    "scientific": "Centronyx henslowii",
    "familyCommon": "Emberizids",
    "speciesCommon": "Henslow's Sparrow"
  },
  {
    "order": "Passeriformes",
    "family": "Emberizidae",
    "scientific": "Melospiza melodia",
    "familyCommon": "Emberizids",
    "speciesCommon": "Song Sparrow"
  },
  {
    "order": "Passeriformes",
    "family": "Emberizidae",
    "scientific": "Melospiza lincolnii",
    "familyCommon": "Emberizids",
    "speciesCommon": "Lincoln's Sparrow"
  },
  {
    "order": "Passeriformes",
    "family": "Emberizidae",
    "scientific": "Melospiza georgiana",
    "familyCommon": "Emberizids",
    "speciesCommon": "Swamp Sparrow"
  },
  {
    "order": "Passeriformes",
    "family": "Emberizidae",
    "scientific": "Zonotrichia albicollis",
    "familyCommon": "Emberizids",
    "speciesCommon": "White-throated Sparrow"
  },
  {
    "order": "Passeriformes",
    "family": "Emberizidae",
    "scientific": "Junco hyemalis",
    "familyCommon": "Emberizids",
    "speciesCommon": "Dark-eyed Junco"
  },
  {
    "order": "Passeriformes",
    "family": "Cardinalidae",
    "scientific": "Cardinalis cardinalis",
    "familyCommon": "Cardinals/Saltators/Allies",
    "speciesCommon": "Northern Cardinal"
  },
  {
    "order": "Passeriformes",
    "family": "Cardinalidae",
    "scientific": "Pheucticus ludovicianus",
    "familyCommon": "Cardinals/Saltators/Allies",
    "speciesCommon": "Rose-breasted Grosbeak"
  },
  {
    "order": "Passeriformes",
    "family": "Cardinalidae",
    "scientific": "Passerina cyanea",
    "familyCommon": "Cardinals/Saltators/Allies",
    "speciesCommon": "Indigo Bunting"
  },
  {
    "order": "Passeriformes",
    "family": "Cardinalidae",
    "scientific": "Spiza americana",
    "familyCommon": "Cardinals/Saltators/Allies",
    "speciesCommon": "Dickcissel"
  },
  {
    "order": "Passeriformes",
    "family": "Icteridae",
    "scientific": "Dolichonyx oryzivorus",
    "familyCommon": "Blackbirds",
    "speciesCommon": "Bobolink"
  },
  {
    "order": "Passeriformes",
    "family": "Icteridae",
    "scientific": "Agelaius phoeniceus",
    "familyCommon": "Blackbirds",
    "speciesCommon": "Red-winged Blackbird"
  },
  {
    "order": "Passeriformes",
    "family": "Icteridae",
    "scientific": "Sturnella magna",
    "familyCommon": "Blackbirds",
    "speciesCommon": "Eastern Meadowlark"
  },
  {
    "order": "Passeriformes",
    "family": "Icteridae",
    "scientific": "Sturnella neglecta",
    "familyCommon": "Blackbirds",
    "speciesCommon": "Western Meadowlark"
  },
  {
    "order": "Passeriformes",
    "family": "Icteridae",
    "scientific": "Xanthocephalus xanthocephalus",
    "familyCommon": "Blackbirds",
    "speciesCommon": "Yellow-headed Blackbird"
  },
  {
    "order": "Passeriformes",
    "family": "Icteridae",
    "scientific": "Euphagus cyanocephalus",
    "familyCommon": "Blackbirds",
    "speciesCommon": "Brewer's Blackbird"
  },
  {
    "order": "Passeriformes",
    "family": "Icteridae",
    "scientific": "Quiscalus quiscula",
    "familyCommon": "Blackbirds",
    "speciesCommon": "Common Grackle"
  },
  {
    "order": "Passeriformes",
    "family": "Icteridae",
    "scientific": "Molothrus ater",
    "familyCommon": "Blackbirds",
    "speciesCommon": "Brown-headed Cowbird"
  },
  {
    "order": "Passeriformes",
    "family": "Icteridae",
    "scientific": "Euphagus carolinus",
    "familyCommon": "Blackbirds",
    "speciesCommon": "Rusty Blackbird"
  },
  {
    "order": "Passeriformes",
    "family": "Icteridae",
    "scientific": "Icterus spurius",
    "familyCommon": "Blackbirds",
    "speciesCommon": "Orchard Oriole"
  },
  {
    "order": "Passeriformes",
    "family": "Icteridae",
    "scientific": "Icterus galbula",
    "familyCommon": "Blackbirds",
    "speciesCommon": "Baltimore Oriole"
  },
  {
    "order": "Passeriformes",
    "family": "Fringillidae",
    "scientific": "Haemorhous purpureus",
    "familyCommon": "Fringilline/Cardueline Finches",
    "speciesCommon": "Purple Finch"
  },
  {
    "order": "Passeriformes",
    "family": "Fringillidae",
    "scientific": "Haemorhous mexicanus",
    "familyCommon": "Fringilline/Cardueline Finches",
    "speciesCommon": "House Finch"
  },
  {
    "order": "Passeriformes",
    "family": "Fringillidae",
    "scientific": "Loxia leucoptera",
    "familyCommon": "Fringilline/Cardueline Finches",
    "speciesCommon": "White-winged Crossbill"
  },
  {
    "order": "Passeriformes",
    "family": "Fringillidae",
    "scientific": "Spinus pinus",
    "familyCommon": "Fringilline/Cardueline Finches",
    "speciesCommon": "Pine Siskin"
  },
  {
    "order": "Passeriformes",
    "family": "Fringillidae",
    "scientific": "Spinus tristis",
    "familyCommon": "Fringilline/Cardueline Finches",
    "speciesCommon": "American Goldfinch"
  },
  {
    "order": "Passeriformes",
    "family": "Fringillidae",
    "scientific": "Hesperiphona vespertina",
    "familyCommon": "Fringilline/Cardueline Finches",
    "speciesCommon": "Evening Grosbeak"
  },
  {
    "order": "Passeriformes",
    "family": "Passeridae",
    "scientific": "Passer domesticus",
    "familyCommon": "Old World Sparrows",
    "speciesCommon": "House Sparrow"
  }
];

export default birdsWithoutFiles;