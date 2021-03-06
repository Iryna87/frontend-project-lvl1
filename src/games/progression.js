import runGame from '../index.js';
import getRundomNumber from '../utils.js';

const generateProgression = (progressionStart, progressionStep) => {
  const progression = [];
  const stepsCount = 10;
  for (let i = 0; i < stepsCount; i += 1) {
    progression.push(progressionStart + (i * progressionStep));
  }
  return progression;
};

const buildGame = () => {
  const progressionStep = getRundomNumber(1, 11);
  const progressionStart = getRundomNumber(1, 90);
  const hiddenNumberIndex = getRundomNumber(0, 10);
  const progression = generateProgression(progressionStart, progressionStep);
  const result = progression[hiddenNumberIndex];
  progression.splice(hiddenNumberIndex, 1, '..');
  const question = progression.join(' ');
  return [String(result), question];
};

const description = 'What number is missing in the progression?';

const playBrainProgression = () => {
  runGame(buildGame, description);
};
export default playBrainProgression;
