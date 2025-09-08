const birds =  [
  {
    "audio": require("../audio/LOON__COMMON.MP3"),
    "order": "Gaviiformes",
    "family": "Gaviidae",
    // "scientific": "Gavia immer",
    "familyCommon": "Loons",
    "speciesCommon": "Common Loon"
  }, {
    "audio": require("../audio/GREBE__PIED_BILLED.mp3"),
    "order": "Podicipediformes",
    "family": "Podicipedidae",
    // "scientific": "Podilymbus podiceps",
    "familyCommon": "Grebes",
    "speciesCommon": "Pied-billed Grebe"
  }, {
    "audio": require("../audio/BITTERN__AMERICAN.mp3"),
    "order": "Ciconiiformes",
    "family": "Ardeidae",
    // "scientific": "Botaurus lentiginosus",
    "familyCommon": "Herons/Bitterns/Allies",
    "speciesCommon": "American Bittern"
  }, {
    "audio": require("../audio/BITTERN__LEAST.mp3"),
    "order": "Ciconiiformes",
    "family": "Ardeidae",
    "familyCommon": "Herons/Bitterns/Allies",
    "speciesCommon": "Least Bittern"
  }, {
    "audio": require("../audio/HERON__BLACK_CROWNED_NIGHT.mp3"),
    "order": "Ciconiiformes",
    "family": "Ardeidae",
    "familyCommon": "Herons/Bitterns/Allies",
    "speciesCommon": "Black-crowned Night-Heron"
  }, {
    "audio": require("../audio/GOOSE__CANADA.mp3"),
    "order": "Anseriformes",
    "family": "Anatidae",
    "familyCommon": "Ducks/Geese/Swans",
    "speciesCommon": "Canada Goose"
  }, {
    "audio": require("../audio/DUCK__WOOD.mp3"),
    "order": "Anseriformes",
    "family": "Anatidae",
    "familyCommon": "Ducks/Geese/Swans",
    "speciesCommon": "Wood Duck"
  }, {
    "audio": require("../audio/MALLARD.mp3"),
    "order": "Anseriformes",
    "family": "Anatidae",
    "familyCommon": "Ducks/Geese/Swans",
    "speciesCommon": "Mallard"
  }, {
    "audio": require("../audio/GOSHAWK__NORTHERN.mp3"),
    "order": "Falconiformes",
    "family": "Accipitridae",
    "familyCommon": "Hawks/Kites/Eagles/Allies",
    "speciesCommon": "Northern Goshawk"
  }, {
    "audio": require("../audio/HAWK__RED_SHOULDERED.mp3"),
    "order": "Falconiformes",
    "family": "Accipitridae",
    "familyCommon": "Hawks/Kites/Eagles/Allies",
    "speciesCommon": "Red-shouldered Hawk"
  }, {
    "audio": require("../audio/HAWK__BROAD_WINGED.mp3"),
    "order": "Falconiformes",
    "family": "Accipitridae",
    "familyCommon": "Hawks/Kites/Eagles/Allies",
    "speciesCommon": "Broad-winged Hawk"
  }, {
    "audio": require("../audio/HAWK__RED_TAILED.mp3"),
    "order": "Falconiformes",
    "family": "Accipitridae",
    "familyCommon": "Hawks/Kites/Eagles/Allies",
    "speciesCommon": "Red-tailed Hawk"
  }, {
    "audio": require("../audio/KESTREL__AMERICAN.mp3"),
    "order": "Falconiformes",
    "family": "Falconidae",
    "familyCommon": "Caracaras/Falcons",
    "speciesCommon": "American Kestrel"
  }, {
    "audio": require("../audio/MERLIN.MP3"),
    "order": "Falconiformes",
    "family": "Falconidae",
    "familyCommon": "Caracaras/Falcons",
    "speciesCommon": "Merlin"
  }, {
    "audio": require("../audio/PHEASANT__RING_NECKED.MP3"),
    "order": "Galliformes",
    "family": "Phasianidae",
    "familyCommon": "Partridges/Grouse/Turkeys/Quail",
    "speciesCommon": "Ring-necked Pheasant"
  }, {
    "audio": require("../audio/GROUSE__RUFFED.MP3"),
    "order": "Galliformes",
    "family": "Phasianidae",
    "familyCommon": "Partridges/Grouse/Turkeys/Quail",
    "speciesCommon": "Ruffed Grouse"
  }, {
    "audio": require("../audio/CHICKEN__GREATER_PRAIRE.MP3"),
    "order": "Galliformes",
    "family": "Phasianidae",
    "familyCommon": "Partridges/Grouse/Turkeys/Quail",
    "speciesCommon": "Greater Prairie-Chicken"
  }, {
    "audio": require("../audio/TURKEY__WILD.MP3"),
    "order": "Galliformes",
    "family": "Phasianidae",
    "familyCommon": "Partridges/Grouse/Turkeys/Quail",
    "speciesCommon": "Wild Turkey"
  }, {
    "audio": require("../audio/RAIL__YELLOW.MP3"),
    "order": "Gruiformes",
    "family": "Rallidae",
    "familyCommon": "Rails/Gallinules/Coots",
    "speciesCommon": "Yellow Rail"
  }, {
    "audio": require("../audio/RAIL__VIRGINIA.MP3"),
    "order": "Gruiformes",
    "family": "Rallidae",
    "familyCommon": "Rails/Gallinules/Coots",
    "speciesCommon": "Virginia Rail"
  }, {
    "audio": require("../audio/RAIL__SORA.MP3"),
    "order": "Gruiformes",
    "family": "Rallidae",
    "familyCommon": "Rails/Gallinules/Coots",
    "speciesCommon": "Sora"
  }, {
    "audio": require("../audio/MOORHEN__COMMON.MP3"),
    "order": "Gruiformes",
    "family": "Rallidae",
    "familyCommon": "Rails/Gallinules/Coots",
    "speciesCommon": "Common Moorhen"
  }, {
    "audio": require("../audio/COOT__AMERICAN.MP3"),
    "order": "Gruiformes",
    "family": "Rallidae",
    "familyCommon": "Rails/Gallinules/Coots",
    "speciesCommon": "American Coot"
  }, {
    "audio": require("../audio/CRANE__SANDHILL.MP3"),
    "order": "Gruiformes",
    "family": "Gruidae",
    "familyCommon": "Cranes",
    "speciesCommon": "Sandhill Crane"
  }, {
    "audio": require("../audio/KILLDEER.MP3"),
    "order": "Charadriiformes",
    "family": "Charadriidae",
    "familyCommon": "Lapwings/Plovers",
    "speciesCommon": "Killdeer"
  }, {
    "audio": require("../audio/SANDPIPER__SPOTTED.MP3"),
    "order": "Charadriiformes",
    "family": "Scolopacidae",
    "familyCommon": "Sandpipers/Phalaropes/Allies",
    "speciesCommon": "Spotted Sandpiper"
  }, {
    "audio": require("../audio/SANDPIPER__UPLAND.MP3"),
    "order": "Charadriiformes",
    "family": "Scolopacidae",
    "familyCommon": "Sandpipers/Phalaropes/Allies",
    "speciesCommon": "Upland Sandpiper"
  }, {
    "audio": require("../audio/SNIPE__COMMON.MP3"),
    "order": "Charadriiformes",
    "family": "Scolopacidae",
    "familyCommon": "Sandpipers/Phalaropes/Allies",
    "speciesCommon": "Common Snipe"
  }, {
    "audio": require("../audio/WOODCOCK__AMERICAN.MP3"),
    "order": "Charadriiformes",
    "family": "Scolopacidae",
    "familyCommon": "Sandpipers/Phalaropes/Allies",
    "speciesCommon": "American Woodcock"
  }, {
    "audio": require("../audio/GULL__RING_BILLED.MP3"),
    "order": "Charadriiformes",
    "family": "Laridae",
    "familyCommon": "Skuas/Gulls/Terns/Skimmers",
    "speciesCommon": "Ring-billed Gull"
  }, {
    "audio": require("../audio/TERN__CASPIAN.MP3"),
    "order": "Charadriiformes",
    "family": "Laridae",
    "familyCommon": "Skuas/Gulls/Terns/Skimmers",
    "speciesCommon": "Caspian Tern"
  }, {
    "audio": require("../audio/TERN__FORSTER_S.MP3"),
    "order": "Charadriiformes",
    "family": "Laridae",
    "familyCommon": "Skuas/Gulls/Terns/Skimmers",
    "speciesCommon": "Forster's Tern"
  }, {
    "audio": require("../audio/TERN__BLACK.MP3"),
    "order": "Charadriiformes",
    "family": "Laridae",
    "familyCommon": "Skuas/Gulls/Terns/Skimmers",
    "speciesCommon": "Black Tern"
  }, {
    "audio": require("../audio/DOVE__ROCK.MP3"),
    "order": "Columbiformes",
    "family": "Columbidae",
    "familyCommon": "Pigeons/Doves",
    "speciesCommon": "Rock Pigeon"
  }, {
    "audio": require("../audio/DOVE__MOURNING.mp3"),
    "order": "Columbiformes",
    "family": "Columbidae",
    "familyCommon": "Pigeons/Doves",
    "speciesCommon": "Mourning Dove"
  }, {
    "audio": require("../audio/CUCKOO__BLACK_BILLED.MP3"),
    "order": "Cuculiformes",
    "family": "Cuculidae",
    "familyCommon": "Cuckoos/Roadrunners/Anis",
    "speciesCommon": "Black-billed Cuckoo"
  }, {
    "audio": require("../audio/OWL__EASTERN_SCREECH.MP3"),
    "order": "Strigiformes",
    "family": "Strigidae",
    "familyCommon": "Typical Owls",
    "speciesCommon": "Eastern Screech Owl"
  }, {
    "audio": require("../audio/OWL__GREAT_HORNED.MP3"),
    "order": "Strigiformes",
    "family": "Strigidae",
    "familyCommon": "Typical Owls",
    "speciesCommon": "Great Horned Owl"
  }, {
    "audio": require("../audio/OWL__BARRED.MP3"),
    "order": "Strigiformes",
    "family": "Strigidae",
    "familyCommon": "Typical Owls",
    "speciesCommon": "Barred Owl"
  }, {
    "audio": require("../audio/OWL__NORTHERN_SAW_WHET.MP3"),
    "order": "Strigiformes",
    "family": "Strigidae",
    "familyCommon": "Typical Owls",
    "speciesCommon": "Northern Saw-whet Owl"
  }, {
    "audio": require("../audio/WHIP_POOR_WILL.MP3"),
    "order": "Caprimulgiformes",
    "family": "Caprimulgidae",
    "familyCommon": "Goatsuckers",
    "speciesCommon": "Whip-poor-will"
  }, {
    "audio": require("../audio/SWIFT__CHIMNEY.MP3"),
    "order": "Apodiformes",
    "family": "Apodidae",
    "familyCommon": "Swifts",
    "speciesCommon": "Chimney Swift"
  }, {
    "audio": require("../audio/HUMMINGBIRD__RUBY_THROATED.MP3"),
    "order": "Apodiformes",
    "family": "Trochilidae",
    "familyCommon": "Hummingbirds",
    "speciesCommon": "Ruby-throated Hummingbird"
  }, {
    "audio": require("../audio/KINGFISHER__BELTED.MP3"),
    "order": "Coraciiformes",
    "family": "Alcedinidae",
    "familyCommon": "Kingfishers",
    "speciesCommon": "Belted Kingfisher"
  }, {
    "audio": require("../audio/WOODPECKER__RED_HEADED.MP3"),
    "order": "Piciformes",
    "family": "Picidae",
    "familyCommon": "Woodpeckers/Allies",
    "speciesCommon": "Red-headed Woodpecker"
  }, {
    "audio": require("../audio/WOODPECKER__RED_BELLIED.MP3"),
    "order": "Piciformes",
    "family": "Picidae",
    "familyCommon": "Woodpeckers/Allies",
    "speciesCommon": "Red-bellied Woodpecker"
  }, {
    "audio": require("../audio/SAPSUCKER__YELLOW_BELLIED.MP3"),
    "order": "Piciformes",
    "family": "Picidae",
    "familyCommon": "Woodpeckers/Allies",
    "speciesCommon": "Yellow-bellied Sapsucker"
  }, {
    "audio": require("../audio/WOODPECKER__DOWNY.MP3"),
    "order": "Piciformes",
    "family": "Picidae",
    "familyCommon": "Woodpeckers/Allies",
    "speciesCommon": "Downy Woodpecker"
  }, {
    "audio": require("../audio/WOODPECKER__HAIRY.MP3"),
    "order": "Piciformes",
    "family": "Picidae",
    "familyCommon": "Woodpeckers/Allies",
    "speciesCommon": "Hairy Woodpecker"
  }, {
    "audio": require("../audio/FLICKER__YELLOW_SHAFTED.MP3"),
    "order": "Piciformes",
    "family": "Picidae",
    "familyCommon": "Woodpeckers/Allies",
    "speciesCommon": "Northern Flicker"
  }, {
    "audio": require("../audio/WOODPECKER__PILEATED.MP3"),
    "order": "Piciformes",
    "family": "Picidae",
    "familyCommon": "Woodpeckers/Allies",
    "speciesCommon": "Pileated Woodpecker"
  }, {
    "audio": require("../audio/FLYCATCHER__OLIVE_SIDED.MP3"),
    "order": "Passeriformes",
    "family": "Tyrannidae",
    "familyCommon": "Tyrant Flycatchers",
    "speciesCommon": "Olive-sided Flycatcher"
  }, {
    "audio": require("../audio/PEWEE__EASTERN_WOOD.MP3"),
    "order": "Passeriformes",
    "family": "Tyrannidae",
    "familyCommon": "Tyrant Flycatchers",
    "speciesCommon": "Eastern Wood-Pewee"
  }, {
    "audio": require("../audio/FLYCATCHER__YELLOW_BELLIED.MP3"),
    "order": "Passeriformes",
    "family": "Tyrannidae",
    "familyCommon": "Tyrant Flycatchers",
    "speciesCommon": "Yellow-bellied Flycatcher"
  }, {
    "audio": require("../audio/FLYCATCHER__ACADIAN.MP3"),
    "order": "Passeriformes",
    "family": "Tyrannidae",
    "familyCommon": "Tyrant Flycatchers",
    "speciesCommon": "Acadian Flycatcher"
  }, {
    "audio": require("../audio/FLYCATCHER__ALDER.MP3"),
    "order": "Passeriformes",
    "family": "Tyrannidae",
    "familyCommon": "Tyrant Flycatchers",
    "speciesCommon": "Alder Flycatcher"
  }, {
    "audio": require("../audio/FLYCATCHER__WILLOW.MP3"),
    "order": "Passeriformes",
    "family": "Tyrannidae",
    "familyCommon": "Tyrant Flycatchers",
    "speciesCommon": "Willow Flycatcher"
  }, {
    "audio": require("../audio/FLYCATCHER__LEAST.MP3"),
    "order": "Passeriformes",
    "family": "Tyrannidae",
    "familyCommon": "Tyrant Flycatchers",
    "speciesCommon": "Least Flycatcher"
  }, {
    "audio": require("../audio/PHOEBE__EASTERN.MP3"),
    "order": "Passeriformes",
    "family": "Tyrannidae",
    "familyCommon": "Tyrant Flycatchers",
    "speciesCommon": "Eastern Phoebe"
  }, {
    "audio": require("../audio/FLYCATCHER__GREAT_CRESTED.MP3"),
    "order": "Passeriformes",
    "family": "Tyrannidae",
    "familyCommon": "Tyrant Flycatchers",
    "speciesCommon": "Great Crested Flycatcher"
  }, {
    "audio": require("../audio/KINGBIRD__EASTERN.MP3"),
    "order": "Passeriformes",
    "family": "Tyrannidae",
    "familyCommon": "Tyrant Flycatchers",
    "speciesCommon": "Eastern Kingbird"
  }, {
    "audio": require("../audio/VIREO__BELL_S.MP3"),
    "order": "Passeriformes",
    "family": "Vireonidae",
    "familyCommon": "Vireos",
    "speciesCommon": "Bell's Vireo"
  }, {
    "audio": require("../audio/VIREO__YELLOW_THROATED.MP3"),
    "order": "Passeriformes",
    "family": "Vireonidae",
    "familyCommon": "Vireos",
    "speciesCommon": "Yellow-throated Vireo"
  }, {
    "audio": require("../audio/VIREO__BLUE_HEADED.MP3"),
    "order": "Passeriformes",
    "family": "Vireonidae",
    "familyCommon": "Vireos",
    "speciesCommon": "Blue-headed Vireo"
  }, {
    "audio": require("../audio/VIREO__WARBLING.MP3"),
    "order": "Passeriformes",
    "family": "Vireonidae",
    "familyCommon": "Vireos",
    "speciesCommon": "Warbling Vireo"
  }, {
    "audio": require("../audio/VIREO__PHILADELPHIA.MP3"),
    "order": "Passeriformes",
    "family": "Vireonidae",
    "familyCommon": "Vireos",
    "speciesCommon": "Philadelphia Vireo"
  }, {
    "audio": require("../audio/VIREO__RED_EYED.MP3"),
    "order": "Passeriformes",
    "family": "Vireonidae",
    "familyCommon": "Vireos",
    "speciesCommon": "Red-eyed Vireo"
  }, {
    "audio": require("../audio/JAY__GREY.MP3"),
    "order": "Passeriformes",
    "family": "Corvidae",
    "familyCommon": "Jays/Crows",
    "speciesCommon": "Gray Jay"
  }, {
    "audio": require("../audio/JAY__BLUE.MP3"),
    "order": "Passeriformes",
    "family": "Corvidae",
    "familyCommon": "Jays/Crows",
    "speciesCommon": "Blue Jay"
  }, {
    "audio": require("../audio/CROW__AMERICAN.MP3"),
    "order": "Passeriformes",
    "family": "Corvidae",
    "familyCommon": "Jays/Crows",
    "speciesCommon": "American Crow"
  }, {
    "audio": require("../audio/RAVEN__COMMON.MP3"),
    "order": "Passeriformes",
    "family": "Corvidae",
    "familyCommon": "Jays/Crows",
    "speciesCommon": "Common Raven"
  }, {
    "audio": require("../audio/LARK__HORNED.MP3"),
    "order": "Passeriformes",
    "family": "Alaudidae",
    "familyCommon": "Larks",
    "speciesCommon": "Horned Lark"
  }, {
    "audio": require("../audio/MARTIN__PURPLE.MP3"),
    "order": "Passeriformes",
    "family": "Hirundinidae",
    "familyCommon": "Swallows",
    "speciesCommon": "Purple Martin"
  }, {
    "audio": require("../audio/SWALLOW__TREE.MP3"),
    "order": "Passeriformes",
    "family": "Hirundinidae",
    "familyCommon": "Swallows",
    "speciesCommon": "Tree Swallow"
  }, {
    "audio": require("../audio/SWALLOW__NORTHERN_ROUGH_WIN.MP3"),
    "order": "Passeriformes",
    "family": "Hirundinidae",
    "familyCommon": "Swallows",
    "speciesCommon": "Northern Rough-winged Swallow"
  }, {
    "audio": require("../audio/SWALLOW__BANK.MP3"),
    "order": "Passeriformes",
    "family": "Hirundinidae",
    "familyCommon": "Swallows",
    "speciesCommon": "Bank Swallow"
  }, {
    "audio": require("../audio/SWALLOW__BARN.MP3"),
    "order": "Passeriformes",
    "family": "Hirundinidae",
    "familyCommon": "Swallows",
    "speciesCommon": "Barn Swallow"
  }, {
    "audio": require("../audio/CHICKADEE__BLACK_CAPPED.MP3"),
    "order": "Passeriformes",
    "family": "Paridae",
    "familyCommon": "Chickadees/Titmice",
    "speciesCommon": "Black-capped Chickadee"
  }, {
    "audio": require("../audio/CHICKADEE__BOREAL.MP3"),
    "order": "Passeriformes",
    "family": "Paridae",
    "familyCommon": "Chickadees/Titmice",
    "speciesCommon": "Boreal Chickadee"
  }, {
    "audio": require("../audio/TITMOUSE__TUFTED.MP3"),
    "order": "Passeriformes",
    "family": "Paridae",
    "familyCommon": "Chickadees/Titmice",
    "speciesCommon": "Tufted Titmouse"
  }, {
    "audio": require("../audio/NUTHATCH__RED_BREASTED.MP3"),
    "order": "Passeriformes",
    "family": "Sittidae",
    "familyCommon": "Nuthatches",
    "speciesCommon": "Red-breasted Nuthatch"
  }, {
    "audio": require("../audio/NUTHATCH__WHITE_BREASTED.MP3"),
    "order": "Passeriformes",
    "family": "Sittidae",
    "familyCommon": "Nuthatches",
    "speciesCommon": "White-breasted Nuthatch"
  }, {
    "audio": require("../audio/CREEPER__BROWN.MP3"),
    "order": "Passeriformes",
    "family": "Certhiidae",
    "familyCommon": "Creepers",
    "speciesCommon": "Brown Creeper"
  }, {
    "audio": require("../audio/WREN__HOUSE.MP3"),
    "order": "Passeriformes",
    "family": "Troglodytidae",
    "familyCommon": "Wrens",
    "speciesCommon": "House Wren"
  }, {
    "audio": require("../audio/WREN__WINTER.MP3"),
    "order": "Passeriformes",
    "family": "Troglodytidae",
    "familyCommon": "Wrens",
    "speciesCommon": "Winter Wren"
  }, {
    "audio": require("../audio/WREN__SEDGE.MP3"),
    "order": "Passeriformes",
    "family": "Troglodytidae",
    "familyCommon": "Wrens",
    "speciesCommon": "Sedge Wren"
  }, {
    "audio": require("../audio/WREN__MARSH.MP3"),
    "order": "Passeriformes",
    "family": "Troglodytidae",
    "familyCommon": "Wrens",
    "speciesCommon": "Marsh Wren"
  }, {
    "audio": require("../audio/KINGLET__GOLDEN_CROWNED.MP3"),
    "order": "Passeriformes",
    "family": "Regulidae",
    "familyCommon": "Kinglets",
    "speciesCommon": "Golden-crowned Kinglet"
  }, {
    "audio": require("../audio/KINGLET__RUBY_CROWNED.MP3"),
    "order": "Passeriformes",
    "family": "Regulidae",
    "familyCommon": "Kinglets",
    "speciesCommon": "Ruby-crowned Kinglet"
  }, {
    "audio": require("../audio/GNATCATCHER__BLUE_GREY.MP3"),
    "order": "Passeriformes",
    "family": "Sylviidae",
    "familyCommon": "Old World Warblers/Gnatcatchers",
    "speciesCommon": "Blue-gray Gnatcatcher"
  }, {
    "audio": require("../audio/BLUEBIRD__EASTERN.MP3"),
    "order": "Passeriformes",
    "family": "Turdidae",
    "familyCommon": "Thrushes",
    "speciesCommon": "Eastern Bluebird"
  }, {
    "audio": require("../audio/VEERY.MP3"),
    "order": "Passeriformes",
    "family": "Turdidae",
    "familyCommon": "Thrushes",
    "speciesCommon": "Veery"
  }, {
    "audio": require("../audio/THRUSH__SWAINSON_S.MP3"),
    "order": "Passeriformes",
    "family": "Turdidae",
    "familyCommon": "Thrushes",
    "speciesCommon": "Swainson's Thrush"
  }, {
    "audio": require("../audio/THRUSH__HERMIT.MP3"),
    "order": "Passeriformes",
    "family": "Turdidae",
    "familyCommon": "Thrushes",
    "speciesCommon": "Hermit Thrush"
  }, {
    "audio": require("../audio/THRUSH__WOOD.MP3"),
    "order": "Passeriformes",
    "family": "Turdidae",
    "familyCommon": "Thrushes",
    "speciesCommon": "Wood Thrush"
  }, {
    "audio": require("../audio/ROBIN__AMERICAN.MP3"),
    "order": "Passeriformes",
    "family": "Turdidae",
    "familyCommon": "Thrushes",
    "speciesCommon": "American Robin"
  }, {
    "audio": require("../audio/CATBIRD__GREY.MP3"),
    "order": "Passeriformes",
    "family": "Mimidae",
    "familyCommon": "Mockingbirds/Thrashers",
    "speciesCommon": "Gray Catbird"
  }, {
    "audio": require("../audio/THRASHER__BROWN.MP3"),
    "order": "Passeriformes",
    "family": "Mimidae",
    "familyCommon": "Mockingbirds/Thrashers",
    "speciesCommon": "Brown Thrasher"
  }, {
    "audio": require("../audio/STARLING__EUROPEAN.MP3"),
    "order": "Passeriformes",
    "family": "Sturnidae",
    "familyCommon": "Starlings",
    "speciesCommon": "European Starling"
  }, {
    "audio": require("../audio/WAXWING__CEDAR.MP3"),
    "order": "Passeriformes",
    "family": "Bombycillidae",
    "familyCommon": "Waxwings",
    "speciesCommon": "Cedar Waxwing"
  }, {
    "audio": require("../audio/WARBLER__BLUE_WINGED.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Blue-winged Warbler"
  }, {
    "audio": require("../audio/WARBLER__GOLDEN_WINGED.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Golden-winged Warbler"
  }, {
    "audio": require("../audio/WARBLER__TENNESSEE.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Tennessee Warbler"
  }, {
    "audio": require("../audio/WARBLER__NASHVILLE.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Nashville Warbler"
  }, {
    "audio": require("../audio/WARBLER__PARULA.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Northern Parula"
  }, {
    "audio": require("../audio/WARBER__YELLOW.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Yellow Warbler"
  }, {
    "audio": require("../audio/WARBLER__CHESTNUT_SIDED.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Chestnut-sided Warbler"
  }, {
    "audio": require("../audio/WARBLER__MAGNOLIA.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Magnolia Warbler"
  }, {
    "audio": require("../audio/WARBLER__CAPE_MAY.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Cape May Warbler"
  }, {
    "audio": require("../audio/WARBLER__BLACK_THROATED_BLU.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Black-throated Blue Warbler"
  }, {
    "audio": require("../audio/WARBLER__YELLOW_RUMPED.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Yellow-rumped Warbler"
  }, {
    "audio": require("../audio/WARBLER__BLACK_THROATED_GRE.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Black-throated Green Warbler"
  }, {
    "audio": require("../audio/WARBLER__BLACKBURNIAN.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Blackburnian Warbler"
  }, {
    "audio": require("../audio/WARBLER__YELLOW_THROATED.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Yellow-throated Warbler"
  }, {
    "audio": require("../audio/WARBLER__PINE.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Pine Warbler"
  }, {
    "audio": require("../audio/WARBLER__PALM.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Palm Warbler"
  }, {
    "audio": require("../audio/WARBLER__BAY_BREASTED.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Bay-breasted Warbler"
  }, {
    "audio": require("../audio/WARBLER__CERULEAN.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Cerulean Warbler"
  }, {
    "audio": require("../audio/WARBLER__BLACK_AND_WHITE.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Black-and-white Warbler"
  }, {
    "audio": require("../audio/REDSTART__AMERICAN.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "American Redstart"
  }, {
    "audio": require("../audio/WARBLER__PROTHONOTARY.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Prothonotary Warbler"
  }, {
    "audio": require("../audio/WARBLER__WORM_EATING.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Worm-eating Warbler"
  }, {
    "audio": require("../audio/OVENBIRD.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Ovenbird"
  }, {
    "audio": require("../audio/WATERTHRUSH__NORTHERN.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Northern Waterthrush"
  }, {
    "audio": require("../audio/WATERTHRUSH__LOUISIANA.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Louisiana Waterthrush"
  }, {
    "audio": require("../audio/WARBLER__KENTUCKY.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Kentucky Warbler"
  }, {
    "audio": require("../audio/WARBLER__CONNECTICUT.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Connecticut Warbler"
  }, {
    "audio": require("../audio/WARBLER__MOURNING.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Mourning Warbler"
  }, {
    "audio": require("../audio/YELLOWTHROAT__COMMON.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Common Yellowthroat"
  }, {
    "audio": require("../audio/WARBLER__HOODED.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Hooded Warbler"
  }, {
    "audio": require("../audio/WARBLER__WILSON_S.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Wilson's Warbler"
  }, {
    "audio": require("../audio/CHAT__YELLOW_BREASTED.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Yellow-breasted Chat"
  }, {
    "audio": require("../audio/WARBLER__CANADA.MP3"),
    "order": "Passeriformes",
    "family": "Parulidae",
    "familyCommon": "Wood-Warblers",
    "speciesCommon": "Canada Warbler"
  }, {
    "audio": require("../audio/TANAGER__SCARLET.MP3"),
    "order": "Passeriformes",
    "family": "Thraupidae",
    "familyCommon": "Tanagers",
    "speciesCommon": "Scarlet Tanager"
  }, {
    "audio": require("../audio/TOWHEE__EASTERN.MP3"),
    "order": "Passeriformes",
    "family": "Emberizidae",
    "familyCommon": "Emberizids",
    "speciesCommon": "Eastern Towhee"
  }, {
    "audio": require("../audio/SPARROW__CHIPPING.MP3"),
    "order": "Passeriformes",
    "family": "Emberizidae",
    "familyCommon": "Emberizids",
    "speciesCommon": "Chipping Sparrow"
  },
  // { ToDo: Find audio for Clay-colored Sparrow
  //   "audio": require("../audio/SPARROW__CLAY_COLORED.MP3"),
  //   "order": "Passeriformes",
  //   "family": "Emberizidae",
  //   "familyCommon": "Emberizids",
  //   "speciesCommon": "Clay-colored Sparrow"
  // },
  {
    "audio": require("../audio/SPARROW__FIELD.MP3"),
    "order": "Passeriformes",
    "family": "Emberizidae",
    "familyCommon": "Emberizids",
    "speciesCommon": "Field Sparrow"
  }, {
    "audio": require("../audio/SPARROW__VESPER.MP3"),
    "order": "Passeriformes",
    "family": "Emberizidae",
    "familyCommon": "Emberizids",
    "speciesCommon": "Vesper Sparrow"
  }, {
    "audio": require("../audio/SPARROW__LARK.MP3"),
    "order": "Passeriformes",
    "family": "Emberizidae",
    "familyCommon": "Emberizids",
    "speciesCommon": "Lark Sparrow"
  }, {
    "audio": require("../audio/SPARROW__SAVANNAH.MP3"),
    "order": "Passeriformes",
    "family": "Emberizidae",
    "familyCommon": "Emberizids",
    "speciesCommon": "Savannah Sparrow"
  }, {
    "audio": require("../audio/SPARROW__GRASSHOPPER.MP3"),
    "order": "Passeriformes",
    "family": "Emberizidae",
    "familyCommon": "Emberizids",
    "speciesCommon": "Grasshopper Sparrow"
  }, {
    "audio": require("../audio/SPARROW__HENSLOW_S.MP3"),
    "order": "Passeriformes",
    "family": "Emberizidae",
    "familyCommon": "Emberizids",
    "speciesCommon": "Henslow's Sparrow"
  }, {
    "audio": require("../audio/SPARROW__SONG.MP3"),
    "order": "Passeriformes",
    "family": "Emberizidae",
    "familyCommon": "Emberizids",
    "speciesCommon": "Song Sparrow"
  }, {
    "audio": require("../audio/SPARROW__LINCOLN.MP3"),
    "order": "Passeriformes",
    "family": "Emberizidae",
    "familyCommon": "Emberizids",
    "speciesCommon": "Lincoln's Sparrow"
  }, {
    "audio": require("../audio/SPARROW__SWAMP.MP3"),
    "order": "Passeriformes",
    "family": "Emberizidae",
    "familyCommon": "Emberizids",
    "speciesCommon": "Swamp Sparrow"
  }, {
    "audio": require("../audio/SPARROW__WHITE_THROATED.MP3"),
    "order": "Passeriformes",
    "family": "Emberizidae",
    "familyCommon": "Emberizids",
    "speciesCommon": "White-throated Sparrow"
  }, {
    "audio": require("../audio/JUNCO__DARK_EYED.MP3"),
    "order": "Passeriformes",
    "family": "Emberizidae",
    "familyCommon": "Emberizids",
    "speciesCommon": "Dark-eyed Junco"
  }, {
    "audio": require("../audio/CARDINAL__NORTHERN.MP3"),
    "order": "Passeriformes",
    "family": "Cardinalidae",
    "familyCommon": "Cardinals/Saltators/Allies",
    "speciesCommon": "Northern Cardinal"
  }, {
    "audio": require("../audio/GROSBEAK__ROSE_BREASTED.MP3"),
    "order": "Passeriformes",
    "family": "Cardinalidae",
    "familyCommon": "Cardinals/Saltators/Allies",
    "speciesCommon": "Rose-breasted Grosbeak"
  }, {
    "audio": require("../audio/BUNTING__INDIGO.MP3"),
    "order": "Passeriformes",
    "family": "Cardinalidae",
    "familyCommon": "Cardinals/Saltators/Allies",
    "speciesCommon": "Indigo Bunting"
  }, {
    "audio": require("../audio/DICKCISSEL.MP3"),
    "order": "Passeriformes",
    "family": "Cardinalidae",
    "familyCommon": "Cardinals/Saltators/Allies",
    "speciesCommon": "Dickcissel"
  }, {
    "audio": require("../audio/BOBOLINK.MP3"),
    "order": "Passeriformes",
    "family": "Icteridae",
    "familyCommon": "Blackbirds",
    "speciesCommon": "Bobolink"
  }, {
    "audio": require("../audio/BLACKBIRD__RED_WINGED.MP3"),
    "order": "Passeriformes",
    "family": "Icteridae",
    "familyCommon": "Blackbirds",
    "speciesCommon": "Red-winged Blackbird"
  }, {
    "audio": require("../audio/MEADOWLARK__EASTERN.MP3"),
    "order": "Passeriformes",
    "family": "Icteridae",
    "familyCommon": "Blackbirds",
    "speciesCommon": "Eastern Meadowlark"
  }, {
    "audio": require("../audio/MEADOWLARK__WESTERN.MP3"),
    "order": "Passeriformes",
    "family": "Icteridae",
    "familyCommon": "Blackbirds",
    "speciesCommon": "Western Meadowlark"
  }, {
    "audio": require("../audio/BLACKBIRD__YELLOW_HEADED.MP3"),
    "order": "Passeriformes",
    "family": "Icteridae",
    "familyCommon": "Blackbirds",
    "speciesCommon": "Yellow-headed Blackbird"
  }, {
    "audio": require("../audio/BLACKBIRD__BREWER_S.MP3"),
    "order": "Passeriformes",
    "family": "Icteridae",
    "familyCommon": "Blackbirds",
    "speciesCommon": "Brewer's Blackbird"
  }, {
    "audio": require("../audio/GRACKLE__COMMON.MP3"),
    "order": "Passeriformes",
    "family": "Icteridae",
    "familyCommon": "Blackbirds",
    "speciesCommon": "Common Grackle"
  }, {
    "audio": require("../audio/COWBIRD__BROWN_HEADED.MP3"),
    "order": "Passeriformes",
    "family": "Icteridae",
    "familyCommon": "Blackbirds",
    "speciesCommon": "Brown-headed Cowbird"
  }, {
    "audio": require("../audio/BLACKBIRD__RUSTY.MP3"),
    "order": "Passeriformes",
    "family": "Icteridae",
    "familyCommon": "Blackbirds",
    "speciesCommon": "Rusty Blackbird"
  }, {
    "audio": require("../audio/ORIOLE__ORCHARD.MP3"),
    "order": "Passeriformes",
    "family": "Icteridae",
    "familyCommon": "Blackbirds",
    "speciesCommon": "Orchard Oriole"
  }, {
    "audio": require("../audio/ORIOLE__BALTIMORE.MP3"),
    "order": "Passeriformes",
    "family": "Icteridae",
    "familyCommon": "Blackbirds",
    "speciesCommon": "Baltimore Oriole"
  }, {
    "audio": require("../audio/FINCH__PURPLE.MP3"),
    "order": "Passeriformes",
    "family": "Fringillidae",
    "familyCommon": "Fringilline/Cardueline Finches",
    "speciesCommon": "Purple Finch"
  }, {
    "audio": require("../audio/FINCH__HOUSE.MP3"),
    "order": "Passeriformes",
    "family": "Fringillidae",
    "familyCommon": "Fringilline/Cardueline Finches",
    "speciesCommon": "House Finch"
  }, {
    "audio": require("../audio/CROSSBILL__WHITE_WINGED.MP3"),
    "order": "Passeriformes",
    "family": "Fringillidae",
    "familyCommon": "Fringilline/Cardueline Finches",
    "speciesCommon": "White-winged Crossbill"
  }, {
    "audio": require("../audio/SISKIN__PINE.MP3"),
    "order": "Passeriformes",
    "family": "Fringillidae",
    "familyCommon": "Fringilline/Cardueline Finches",
    "speciesCommon": "Pine Siskin"
  }, {
    "audio": require("../audio/GOLDFINCH__AMERICAN.MP3"),
    "order": "Passeriformes",
    "family": "Fringillidae",
    "familyCommon": "Fringilline/Cardueline Finches",
    "speciesCommon": "American Goldfinch"
  }, {
    "audio": require("../audio/GROSBEAK__EVENING.MP3"),
    "order": "Passeriformes",
    "family": "Fringillidae",
    "familyCommon": "Fringilline/Cardueline Finches",
    "speciesCommon": "Evening Grosbeak"
  }, {
    "audio": require("../audio/SPARROW__HOUSE.MP3"),
    "order": "Passeriformes",
    "family": "Passeridae",
    "familyCommon": "Old World Sparrows",
    "speciesCommon": "House Sparrow"
  }
];

export default birds;