({
  pro: true,
  babel: true,
  plugins: ['jsdom-quokka-plugin'],
  env: {
    params: {
      env: 'BABEL_ENV=test',
    },
  },
});

// @flow
export function calculatePercent(
  unixSecondsStart: number,
  unixSecondsNow: number,
  unixSecondsGoal: number,
): number {
  const totalSeconds = unixSecondsGoal - unixSecondsStart;
  const leftSeconds = unixSecondsNow - unixSecondsStart;
  return leftSeconds / totalSeconds * 100;
}

calculatePercent(1, 2, 3) //?