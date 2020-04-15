import data from '../data/weapons';

export default (weaponName) => {
  const weaponsData = {};

  // eslint-disable-next-line array-callback-return
  Object.keys(data).map((el) => {
    const weapon = data[el].find((wep) => wep.name === weaponName);
    if (weapon) {
      weaponsData.weapons = data[el];
      weaponsData.weapon = weapon;
    }
  });
  return weaponsData;
};
