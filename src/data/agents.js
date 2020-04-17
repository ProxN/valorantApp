export default [
  {
    image: 'https://i.imgur.com/OINKl4E.png',
    name: 'breach',
    type: 'Initiator',
    abilities: [
      {
        name: 'Aftershock',
        image: 'https://i.imgur.com/D8VZ46z.png',
        description:
          'EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.',
        cost: '100',
      },
      {
        name: 'Flashpoint',
        image: 'https://i.imgur.com/uvN7T8E.png',
        description:
          'EQUIP a blind charge. FIRE the charge to set a fast-acting burst through the wall. The charge detonates to blind all players looking at it.',
        cost: '200',
      },
      {
        name: 'Fault Line',
        image: 'https://i.imgur.com/yv6EaXK.png',
        description:
          'EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, dazing all players in its zone and in a line up to the zone.',
        cost: '35s cooldown',
      },
      {
        name: 'Aftershock',
        image: 'https://i.imgur.com/zzAhRAu.png',
        description:
          'EQUIP a Seismic Charge. FIRE to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.',
        cost: '••••••• 7 Points',
      },
    ],
  },
  {
    image: 'https://i.imgur.com/qL4vQep.png',
    name: 'brimstone',
    type: 'Controller',
    abilities: [
      {
        name: 'stim Beacon',
        image: 'https://i.imgur.com/SDPhWhk.png',
        description:
          'EQUIP a stim beacon. FIRE to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire.',
        cost: '100',
      },
      {
        name: 'incendiary',
        image: 'https://i.imgur.com/T6UTHEN.png',
        description:
          'EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.',
        cost: '200',
      },
      {
        name: 'Sky Smoke',
        image: 'https://i.imgur.com/EP89WG1.png',
        description: `EQUIP a tactical map. FIRE to set locations where Brimstone's smoke clouds will land. ALTERNATE FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.`,
        cost: '100',
      },
      {
        name: 'Orbital Strike',
        image: 'https://i.imgur.com/anZzJmA.png',
        description:
          'EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area.',
        cost: '•••••• 6 Points',
      },
    ],
  },
  {
    image: 'https://i.imgur.com/kfA2GuG.png',
    name: 'cypher',
    type: 'Sentinel',
    abilities: [
      {
        name: 'Trapwire',
        image: 'https://i.imgur.com/jcUp69Q.png',
        description:
          'EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location, creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED.',
        cost: '200',
      },
      {
        name: 'Cyber Cage',
        image: 'https://i.imgur.com/XJ8P10v.png',
        description:
          'INSTANTLY toss the cyber cage in front of Cypher. ACTIVATE to create a zone that blocks vision and slows enemies who pass through it.',
        cost: '100',
      },
      {
        name: 'Spycam',
        image: 'https://i.imgur.com/oiXQ0wo.png',
        description: `EQUIP a spycam. FIRE to place the spycam at the targeted location. RE-USE this ability to take control of the camera's view. While in control of the camera, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.`,
        cost: 'Reusable',
      },
      {
        name: 'Neural Theft',
        image: 'https://i.imgur.com/W2VqyhU.png',
        description:
          'INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.',
        cost: '••••••• 7 Points',
      },
    ],
  },
  {
    image: 'https://i.imgur.com/gW7bA32.png',
    name: 'jett',
    type: 'Duelist',
    abilities: [
      {
        name: 'Cloudburst',
        image: 'https://i.imgur.com/78bTzss.png',
        description:
          'INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.',
        cost: '100',
      },
      {
        name: 'Updraft',
        image: 'https://i.imgur.com/Ifzny5Q.png',
        description: 'INSTANTLY propel Jett high into the air.',
        cost: '200',
      },
      {
        name: 'Tailwind',
        image: 'https://i.imgur.com/GImaLcD.png',
        description:
          'INSTANTLY propel Jett in the direction she is moving. If Jett is standing still, she will propel forward.',
        cost: '2 Kills',
      },
      {
        name: 'Blade Storm',
        image: 'https://i.imgur.com/32mrrj6.png',
        description:
          'EQUIP a set of highly accurate throwing knives that recharge on killing an opponent. FIRE to throw a single knife at your target. ALTERNATE FIRE to throw all remaining daggers at your target.',
        cost: '••••••• 7 Points',
      },
    ],
  },
  {
    image: 'https://i.imgur.com/5eGAzMt.png',
    name: 'omen',
    type: 'Controller',
    abilities: [
      {
        name: 'Shrouded Step',
        image: 'https://i.imgur.com/zR2FKkj.png',
        description:
          'EQUIP a shadow walk ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location.',
        cost: '100',
      },
      {
        name: 'Paranoia',
        image: 'https://i.imgur.com/GPnbtUD.png',
        description:
          'INSTANTLY fire a shadow projectile forward, briefly reducing the vision range of all players it touches. This projectile can pass straight through walls.',
        cost: '200',
      },
      {
        name: 'Dark Cover',
        image: 'https://i.imgur.com/iyAE5J2.png',
        description:
          'EQUIP a shadow orb and see its range indicator. FIRE to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. HOLD ALTERNATE FIRE while targeting to move the marker further away. HOLD the ability key while targeting to move the marker closer.',
        cost: '30s Cooldown',
      },
      {
        name: 'From the Shadows',
        image: 'https://i.imgur.com/JFoMees.png',
        description:
          'EQUIP a tactical map. FIRE to begin teleporting to the selected location. While teleporting, Omen will apppear as a Shade that can be destroyed by an enemy to cancel his teleport.',
        cost: '••••••• 7 Points',
      },
    ],
  },
  {
    image: 'https://i.imgur.com/oK4ynZr.png',
    name: 'phoenix',
    type: 'Duelist',
    abilities: [
      {
        name: 'Blaze',
        image: 'https://i.imgur.com/ClTdkBc.png',
        description:
          'EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.',
        cost: '100',
      },
      {
        name: 'Curveball',
        image: 'https://i.imgur.com/FhEB510.png',
        description:
          'EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right.',
        cost: '200',
      },
      {
        name: 'Hot Hands',
        image: 'https://i.imgur.com/EIExDKx.png',
        description:
          'EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.',
        cost: '2 Kills',
      },
      {
        name: 'Run it Back',
        image: 'https://i.imgur.com/1aFOvJC.png',
        description: `INSTANTLY place a marker at Phoenix's location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.`,
        cost: '•••••• 6 Points',
      },
    ],
  },
  {
    image: 'https://i.imgur.com/FK8J3ES.png',
    name: 'raze',
    type: 'Duelist',
    abilities: [
      {
        name: 'Boom Bot',
        image: 'https://i.imgur.com/PCR195g.png',
        description:
          'EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.',
        cost: '100',
      },
      {
        name: 'Blast Pack',
        image: 'https://i.imgur.com/OnPHISj.png',
        description:
          'INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit.',
        cost: '200',
      },
      {
        name: 'Paint Shells',
        image: 'https://i.imgur.com/F2xRWZq.png',
        description:
          'EQUIP a cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range.',
        cost: '100',
      },
      {
        name: 'Showstopper',
        image: 'https://i.imgur.com/ATxMjOe.png',
        description:
          'EQUIP a rocket launcher. FIRE shoots a rocket that does massive area damage on contact with anything.',
        cost: '•••••• 6 Points',
      },
    ],
  },
  {
    image: 'https://i.imgur.com/rbPZGHr.png',
    name: 'sage',
    type: 'Sentinel',
    abilities: [
      {
        name: 'Barrier Orb',
        image: 'https://i.imgur.com/Z2KUTiS.png',
        description:
          'EQUIP a barrier orb. FIRE places a solid wall. ALT FIRE rotates the targeter.',
        cost: '300',
      },
      {
        name: 'Slow Orb',
        image: 'https://i.imgur.com/O13mJXq.png',
        description:
          'EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.',
        cost: '100',
      },
      {
        name: 'Healing Orb',
        image: 'https://i.imgur.com/l6xEp37.png',
        description:
          'EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Sage is damaged to activate a self heal-over-time.',
        cost: '35s Cooldown',
      },
      {
        name: 'Resurrection',
        image: 'https://i.imgur.com/ayr4iee.png',
        description:
          'EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.',
        cost: '••••••• 7 Points',
      },
    ],
  },
  {
    image: 'https://i.imgur.com/4uPgmFt.png',
    name: 'sova',
    type: 'Initiator',
    abilities: [
      {
        name: 'Shock Bolt',
        image: 'https://i.imgur.com/chMMqEn.png',
        description:
          'EQUIP a bow with a shock bolt. FIRE to send the explosive bolt forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.',
        cost: '300',
      },
      {
        name: 'Owl Drone',
        image: 'https://i.imgur.com/QR6pgdb.png',
        description:
          'EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.',
        cost: '100',
      },
      {
        name: 'Recon Bolt',
        image: 'https://i.imgur.com/z5y3K0Y.png',
        description:
          'EQUIP a bow with recon bolt. FIRE to send the recon bolt forward, activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt. Enemies can destroy this bolt. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.',
        cost: '35s Cooldown',
      },
      {
        name: 'Hunter’s Fury',
        image: 'https://i.imgur.com/QQrPiO2.png',
        description:
          'EQUIP a bow with three long-range, wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.',
        cost: '•••••• 6 Points',
      },
    ],
  },
  {
    image: 'https://i.imgur.com/KrvbvTK.png',
    name: 'viper',
    type: 'Controller',
    abilities: [
      {
        name: 'Snake Bite',
        image: 'https://i.imgur.com/0aOAIfr.png',
        description:
          'EQUIP a chemical launcher. FIRE to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and slows enemies.',
        cost: '100',
      },
      {
        name: 'Poison Cloud',
        image: 'https://i.imgur.com/lW1e6sG.png',
        description:
          'EQUIP a gas emitter. FIRE to throw the emitter that perpetually remains throughout the round. RE-USE the ability to create a toxic gas cloud at the cost of fuel. This ability can be RE-USED more than once and can be picked up to be REDEPLOYED.',
        cost: '200',
      },
      {
        name: 'Toxic Screen',
        image: 'https://i.imgur.com/nDHZOF7.png',
        description:
          'EQUIP a gas emitter launcher. FIRE to deploy a long line of gas emitters. RE-USE the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be RE-USED more than once.',
        cost: 'Reusable',
      },
      {
        name: 'Viper’s Pit',
        image: 'https://i.imgur.com/ZBLPfAy.png',
        description:
          'EQUIP a chemical sprayer. FIRE to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range and maximum health of players inside of it.',
        cost: '••••••• 7 Points',
      },
    ],
  },
];
