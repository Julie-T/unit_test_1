,
// TODO: write your code here

let healthIndicator = '';
export const heroWizard = {
  name: 'Маг',
  health: 90,
};
export const heroMaster = {
  name: 'Мастер',
  health: 40,
};
export const heroWitch = {
  name: 'Колдунья',
  health: 10,
};

export default function indicator(hero) {
  if (hero.health > 50) {
    healthIndicator = ' healthy';
  } else if ((hero.health <= 50) && (hero.health >= 15)) {
    healthIndicator = ' wounded';
  } else {
    healthIndicator = ' critical';
  }
  return hero.name + healthIndicator;
}

indicator(heroWizard);
