import indicator, { heroWizard, heroMaster, heroWitch } from '../app';

test('Определение состояния здоровья героя', () => {
  expect(indicator(heroWizard)).toBe('Маг healthy');
});

test('Определение состояния здоровья героя', () => {
  expect(indicator(heroMaster)).toBe('Мастер wounded');
});

test('Определение состояния здоровья героя', () => {
  expect(indicator(heroWitch)).toBe('Колдунья critical');
});
