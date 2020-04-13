export default {
  sidearms: [
    {
      name: 'classic',
      cost: 'free',
      image:
        'https://vignette.wikia.nocookie.net/valorant/images/5/57/Classic.png/revision/latest/scale-to-width-down/350?cb=20200404154125',
      stats: {
        magazine: 12,
        wall_penetration: 'low',
        primary: {
          mode: 'Semi-Automatic',
          fire_rate: '6.75 rounds/sec',
        },
        alternate: {
          fire_rate: '2.22 rounds/sec',
        },
        damage: [
          {
            distance: '0-30M',
            head: '78',
            body: '26',
            leg: '22',
          },
          {
            distance: '30-50M',
            head: '66',
            body: '22',
            leg: '18',
          },
        ],
      },
    },
    {
      name: 'shorty',
      cost: '200',
      image:
        'https://vignette.wikia.nocookie.net/valorant/images/7/77/Shorty.png/revision/latest/scale-to-width-down/350?cb=20200404154222',
      stats: {
        magazine: 2,
        wall_penetration: 'low',
        primary: {
          mode: 'Semi-Automatic',
          fire_rate: '3.3 rounds/sec',
        },
        damage: [
          {
            distance: '0-9M',
            head: '36',
            body: '12',
            leg: '10',
          },
          {
            distance: '9-15M',
            head: '24',
            body: '8',
            leg: '6',
          },
        ],
      },
    },
    {
      name: 'frenzy',
      cost: '400',
      image:
        'https://vignette.wikia.nocookie.net/valorant/images/f/f1/Frenzy.png/revision/latest/scale-to-width-down/350?cb=20200404154617',
      stats: {
        magazine: 13,
        wall_penetration: 'low',
        primary: {
          mode: 'Full-automatic',
          fire_rate: '10 rounds/sec',
        },
        damage: [
          {
            distance: '0-20M',
            head: '78',
            body: '26',
            leg: '22',
          },
          {
            distance: '20-50M',
            head: '63',
            body: '21',
            leg: '17',
          },
        ],
      },
    },
    {
      name: 'ghost',
      cost: '500',
      image:
        'https://vignette.wikia.nocookie.net/valorant/images/a/ab/Ghost.png/revision/latest/scale-to-width-down/350?cb=20200404154731',
      stats: {
        magazine: 15,
        wall_penetration: 'low',
        primary: {
          mode: 'Semi-automatic',
          fire_rate: '6.75 rounds/sec',
        },
        damage: [
          {
            distance: '0-30M',
            head: '105',
            body: '30',
            leg: '26',
          },
          {
            distance: '30-50M',
            head: '88',
            body: '25',
            leg: '21',
          },
        ],
      },
    },
    {
      name: 'sheriff',
      cost: '800',
      image:
        'https://vignette.wikia.nocookie.net/valorant/images/3/3e/Sheriff.png/revision/latest/scale-to-width-down/350?cb=20200404154438',
      stats: {
        magazine: 6,
        wall_penetration: 'High',
        primary: {
          mode: 'Semi-automatic',
          fire_rate: '4 rounds/sec',
        },
        damage: [
          {
            distance: '0-30M',
            head: '160',
            body: '55',
            leg: '47',
          },
          {
            distance: '30-50M',
            head: '145',
            body: '50',
            leg: '43',
          },
        ],
      },
    },
  ],
  smgs: [
    {
      name: 'stinger',
      cost: '1000',
      image:
        'https://vignette.wikia.nocookie.net/valorant/images/b/b6/Stinger.png/revision/latest/scale-to-width-down/350?cb=20200404170849',
      stats: {
        magazine: 20,
        wall_penetration: 'low',
        primary: {
          mode: 'Full-automatic',
          fire_rate: '18 rounds/sec',
        },
        alternate: {
          zoom_mode: '1.15x, 4 round burst, spread reduction',
          fire_rate: '4 rounds/sec',
        },
        damage: [
          {
            distance: '0-20M',
            head: '67',
            body: '27',
            leg: '23',
          },
          {
            distance: '20-50M',
            head: '62',
            body: '25',
            leg: '21',
          },
        ],
      },
    },
    {
      name: 'spectre',
      cost: '1600',
      image:
        'https://vignette.wikia.nocookie.net/valorant/images/9/90/Spectre.png/revision/latest/scale-to-width-down/350?cb=20200404170922',
      stats: {
        magazine: 30,
        wall_penetration: 'medium',
        primary: {
          mode: 'Full-automatic',
          fire_rate: '13.33 rounds/sec',
        },
        alternate: {
          zoom_mode: '1.15x, spread reduction',
          fire_rate: '12 rounds/sec',
        },
        damage: [
          {
            distance: '0-20M',
            head: '78',
            body: '26',
            leg: '22',
          },
          {
            distance: '20-50M',
            head: '66',
            body: '22',
            leg: '18',
          },
        ],
      },
    },
  ],
  rifles: [
    {
      name: 'bulldog',
      cost: '2100',
      image:
        'https://vignette.wikia.nocookie.net/valorant/images/0/07/Bulldog.png/revision/latest/scale-to-width-down/350?cb=20200404171103',
      stats: {
        magazine: 24,
        wall_penetration: 'medium',
        primary: {
          mode: 'Full-automatic',
          fire_rate: '9.12 rounds/sec',
        },
        alternate: {
          zoom_mode: '1.25x, 3-Round burst',
          fire_rate: '4 rounds/sec',
        },
        damage: [
          {
            distance: '0-50M',
            head: '116',
            body: '35',
            leg: '30',
          },
        ],
      },
    },
    {
      name: 'guardian',
      cost: '2100',
      image:
        'https://vignette.wikia.nocookie.net/valorant/images/f/fd/Guardian.png/revision/latest/scale-to-width-down/200?cb=20200404171224',
      stats: {
        magazine: 12,
        wall_penetration: 'medium',
        primary: {
          mode: 'Semi-automatic',
          fire_rate: '6.5 rounds/sec',
        },
        alternate: {
          zoom_mode: 'Zoom (1.5x), slight spread reduction',
          fire_rate: '6.5 rounds/sec',
        },
        damage: [
          {
            distance: '0-50M',
            head: '195',
            body: '65',
            leg: '49',
          },
        ],
      },
    },
    {
      name: 'phantom',
      cost: '2900',
      image:
        'https://vignette.wikia.nocookie.net/valorant/images/e/ec/Phantom.png/revision/latest/scale-to-width-down/200?cb=20200404171302',
      stats: {
        magazine: 30,
        wall_penetration: 'medium',
        primary: {
          mode: 'Full-automatic',
          fire_rate: '11 rounds/sec',
        },
        alternate: {
          zoom_mode: 'Zoom (1.25x). Slight spread reduction',
          fire_rate: '9.9 rounds/sec',
        },
        damage: [
          {
            distance: '0-15M',
            head: '165',
            body: '39',
            leg: '33',
          },
          {
            distance: '15-30M',
            head: '140',
            body: '35',
            leg: '30',
          },
          {
            distance: '30-50M',
            head: '124',
            body: '31',
            leg: '26',
          },
        ],
      },
    },
    {
      name: 'vandal',
      cost: '2900',
      image:
        'https://vignette.wikia.nocookie.net/valorant/images/5/56/Vandal.png/revision/latest/scale-to-width-down/200?cb=20200404171348',
      stats: {
        magazine: 25,
        wall_penetration: 'medium',
        primary: {
          mode: 'Full-automatic',
          fire_rate: '9.25 rounds/sec',
        },
        alternate: {
          zoom_mode: 'Zoom (1.25x). Slight spread reduction',
          fire_rate: '8.32 rounds/sec',
        },
        damage: [
          {
            distance: '0-50M',
            head: '156',
            body: '39',
            leg: '33',
          },
        ],
      },
    },
  ],
  shotguns: [
    {
      name: 'bucky',
      cost: '900',
      image:
        'https://vignette.wikia.nocookie.net/valorant/images/e/eb/Bucky.png/revision/latest/scale-to-width-down/200?cb=20200404171832',
      stats: {
        magazine: 5,
        wall_penetration: 'low',
        primary: {
          mode: 'Semi-automatic',
          fire_rate: '1.1 rounds/sec',
        },
        alternate: {
          zoom_mode: 'Semi-Automatic Air Burst (Extended primary fire shot)',
          fire_rate: '1.1 rounds/sec',
        },
        damage: [
          {
            distance: '0-8M',
            head: '44',
            body: '22',
            leg: '19',
          },
          {
            distance: '8-12M',
            head: '34',
            body: '13',
            leg: '14',
          },
          {
            distance: '12-50M',
            head: '18',
            body: '9',
            leg: '8',
          },
        ],
      },
    },
    {
      name: 'judge',
      cost: '1500',
      image:
        'https://vignette.wikia.nocookie.net/valorant/images/8/8a/Judge.png/revision/latest/scale-to-width-down/200?cb=20200404171858',
      stats: {
        magazine: 5,
        wall_penetration: 'medium',
        primary: {
          mode: 'Full-automatic',
          fire_rate: '3.5 rounds/sec',
        },
        damage: [
          {
            distance: '0-10M',
            head: '34',
            body: '17',
            leg: '14',
          },
          {
            distance: '10-15M',
            head: '26',
            body: '13',
            leg: '11',
          },
          {
            distance: '15-50M',
            head: '20',
            body: '10',
            leg: '9',
          },
        ],
      },
    },
  ],
  sniper: [
    {
      name: 'marshal',
      cost: '1100',
      image:
        'https://vignette.wikia.nocookie.net/valorant/images/b/b9/Marshal.png/revision/latest/scale-to-width-down/348?cb=20200404172126',
      stats: {
        magazine: 5,
        wall_penetration: 'medium',
        primary: {
          mode: 'Semi-automatic',
          fire_rate: '1.5 rounds/sec',
        },
        alternate: {
          zoom_mode: 'Dual-Zoom Mode (2.5x), significant spread reduction',
          fire_rate: '1.2 rounds/sec',
        },
        damage: [
          {
            distance: '0-50M',
            head: '202',
            body: '101',
            leg: '85',
          },
        ],
      },
    },
    {
      name: 'operator',
      cost: '4500',
      image:
        'https://vignette.wikia.nocookie.net/valorant/images/b/b9/Marshal.png/revision/latest/scale-to-width-down/348?cb=20200404172126',
      stats: {
        magazine: 5,
        wall_penetration: 'high',
        primary: {
          mode: 'Semi-automatic',
          fire_rate: '0.75 rounds/sec',
        },
        alternate: {
          zoom_mode: 'Dual-Zoom Mode (2.5x or 5x), significant spread reduction',
          fire_rate: '0.75 rounds/sec',
        },
        damage: [
          {
            distance: '0-50M',
            head: '255',
            body: '150',
            leg: '127',
          },
        ],
      },
    },
  ],
  heavies: [
    {
      name: 'ares',
      cost: '1700',
      image:
        'https://vignette.wikia.nocookie.net/valorant/images/0/05/Ares.png/revision/latest/scale-to-width-down/350?cb=20200404171957',
      stats: {
        magazine: 50,
        wall_penetration: 'high',
        primary: {
          mode: 'Full-automatic',
          fire_rate: '10 to 13 rounds/sec (increasing during fire)',
        },
        alternate: {
          zoom_mode: '1.25x, slight spread reduction',
          fire_rate: '10 to 13 rounds/sec (increasing during fire)',
        },
        damage: [
          {
            distance: '0-30M',
            head: '72',
            body: '30',
            leg: '25',
          },
          {
            distance: '30-50M',
            head: '67',
            body: '28',
            leg: '23',
          },
        ],
      },
    },
    {
      name: 'odin',
      cost: '3200',
      image:
        'https://vignette.wikia.nocookie.net/valorant/images/5/58/Odin.png/revision/latest/scale-to-width-down/349?cb=20200404172022',
      stats: {
        magazine: 100,
        wall_penetration: 'high',
        primary: {
          mode: 'Full-automatic',
          fire_rate: '12 to 15.6 rounds/sec (increasing during fire)',
        },
        alternate: {
          zoom_mode: '1.25x, slight spread reduction',
          fire_rate: '15.6 rounds/sec',
        },
        damage: [
          {
            distance: '0-30M',
            head: '95',
            body: '38',
            leg: '32',
          },
          {
            distance: '30-50M',
            head: '71',
            body: '31',
            leg: '26',
          },
        ],
      },
    },
  ],
};
