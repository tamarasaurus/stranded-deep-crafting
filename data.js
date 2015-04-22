// Types
// weapon
// tool
// cooking
// construction

var items = [{
  id: "crudeknife",
  name: "Crude Knife",
  type: "weapon",
  materials: [{
    id: "stick",
    amount: 1
  }, {
    id: "rockshard",
    amount: 1
  }, {
    id: "lashing",
    amount: 1
  }, ]
}, {
  id: "rockshard",
  name: "Rock Shard",
  notes: [
    "To get a rock shard, crouch and hit a rock with an axe or hammer"
  ]
}, {
  id: "lashing",
  name: "Lashing",
  notes: [
    "A lashing can be aquired by cutting down a yucca plant"
  ]
}, {
  id: "rock",
  name: "Rock"
}, {
  id: "crudeaxe",
  name: "Crude Axe",
  type: "weapon",
  materials: [{
    id: "stick",
    amount: 1
  }, {
    id: "rock",
    amount: 1,
  }, {
    id: "lashing",
    amount: 1
  }]
}, {
  id: "stick",
  name: "Stick",
}, {
  id: "crudehammer",
  name: "Crude Hammer",
  type: "Tool",
  materials: [{
    id: "lashing",
    amount: 1
  }, {
    id: "stick",
    amount: 1
  }, {
    id: "rock",
    amount: 2
  }]
}, {
  id: "crudespear",
  name: "Crude Spear",
  type: "Weapon",
  materials: [{
    id: "lashing",
    amount: 1
  }, {
    id: "stick",
    amount: 2
  }, {
    id: "rockshard",
    amount: 1
  }]
}, {
  id: "campfire",
  name: "Campfire",
  type: "cooking",
  materials: [{
    id: "stick",
    amount: 5
  }]
}, {
  id: "firepit",
  name: "Fire Pit",
  type: "cooking",
  materials: [{
    id: "campfire",
    amount: 1
  }, {
    id: "rock",
    amount: 6
  }]
}, {
  id: "firespit",
  name: "Fire Spit",
  type: "cooking",
  materials: [{
    id: "firepit",
    amount: 1
  }, {
    id: "stick",
    amount: 3
  }, {
    id: "lashing",
    amount: 1
  }]
}, {
  id: "raft",
  name: "Raft",
  type: "construction",
  materials: [{
    id: "stick",
    amount: 8
  }],
  notes: ["The materials should be placed on the surface of water",
    ""
  ]
}, {
  id: "foundation",
  name: "Foundation",
  type: "construction",
  materials: [{
    id: "stick",
    amount: 8
  }]
}, {
  id: "supports",
  name: "Supports",
  type: "construction",
  materials: [{
    id: "stick",
    amount: 1
  }, {
    id: "foundation",
    amount: 1
  }],
  notes: [
    "Supports should be placed at each corner of a Foundation"
  ]
}, {
  id: "wall",
  name: "Wall",
  type: "construction",
  materials: [{
    id: "foundation",
    amount: 1
  }, {
    id: "stick",
    amount: 4
  }, {
    id: "palmfrond",
    amount: 2
  }],
  notes: [
    "Walls are placed between two supports"
  ]
}, {
  id: "palmfrond",
  name: "Palm Frond",
  notes: [
    "This item can be obtained by chopping up the top of a palm tree"
  ]
}, {
  id: "roof",
  name: "Roof",
  type: "construction",
  materials: [{
    id: "foundation",
    amount: 1
  }, {
    id: "stick",
    amount: 4
  }, {
    id: "palmfrond",
    amount: 4
  }],
  notes: [
    "A roof can be placed on top of 4 supports"
  ]
}, {
  id: "steps",
  name: "Steps",
  type: "construction",
  materials: [{
    id: "foundation",
    amount: 1
  }, {
    id: "stick",
    amount: 5
  }, {
    id: "lashing",
    amount: 6
  }],
  notes: [
    "Steps can be placed at the side of a foundation that isn't used"
  ]
}, {
  id: "bed",
  name: "Bed",
  type: "construction",
  materials: [{
    id: "stick",
    amount: 6
  }, {
    id: "palmfrond",
    amount: 4
  }, {
    id: "lashing",
    amount: 4
  }],
  notes: [
    "Steps can be placed at the side of a foundation that isn't used"
  ]
}, {
  id: "boatmotor",
  name: "Boat motor",
  type: "vehicle",
  materials: [{
    id: "fueltank",
    amount: 1
  }, {
    id: "carburetor",
    amount: 1
  }, {
    id: "engine",
    amount: 4
  }, {
    id: "propeller",
    amount: 1
  }, {
    id: "stick",
    amount: 1
  }, {
    id: "ducttape",
    amount: 1
  }],
  notes: [
    "A Boat motor can be attached to a wooden raft. You can attach up to three."
  ]
}, {
  id: "fueltank",
  name: "Fuel Tank",
  notes: [
    "This item can be found inside console cabinets inside shipwrecks or plane wrecks"
  ]
}, {
  id: "carburetor",
  name: "Carburetor",
  notes: [
    "This item can be found in lockers within shipwrecks"
  ]
}, {
  id: "engine",
  name: "Engine",
  notes: [
    "This item can be found in console cabinets in shipwrecks or plane wrecks"
  ]
}, {
  id: "propeller",
  name: "Propeller",
  notes: [
    "This item can be found inside console cabinets or lockers"
  ]
}, {
  id: "ducttape",
  name: "Duct Tape",
}, {
  id: "door",
  name: "Door",
  type: "construction",
  materials: [{
    id: "stick",
    amount: 4
  }, {
    id: "palmfrond",
    amount: 2
  }, {
    id: "lashing",
    amount: 2
  }],
  notes: [
    "This is placed between two supports"
  ]
}, {
  id: "crudebandage",
  name: "Crude Bandage",
  type: "medical",
  materials: [{
    id: "ducttape",
    amount: 1
  }, {
    id: "cloth",
    amount: 1
  }]
}, {
  id: "cloth",
  name: "Cloth"
}, {
  id: "fishtrap",
  name: "Fish Trap",
  type: "cooking",
  materials: [{
    id: "stick",
    amount: 4
  }, {
    id: "lashing",
    amount: 2
  }, {
    id: "rock",
    amount: 2
  }]
}];
