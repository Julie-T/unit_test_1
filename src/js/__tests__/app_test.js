// import '../app';
import indicator, { heroWizard, heroMaster, heroWitch } from '../app';

test('Определение состояния здоровья героя', () => {
  expect(indicator(heroWizard)).toBe('Маг healthy');
  expect(indicator(heroMaster)).toBe('Мастер wounded');
  expect(indicator(heroWitch)).toBe('Колдунья critical');
});
