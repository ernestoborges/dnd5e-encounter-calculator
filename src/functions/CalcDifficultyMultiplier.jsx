export function CalcDifficultyMultiplier(players, monsters) {
  if (monsters < 2) {
    if (players < 3) {
      return 1.5;
    } else if (players > 5) {
      return 0.5;
    } else {
      return 1;
    }
  } else if (monsters < 3) {
    if (players < 3) {
      return 2;
    } else if (players > 5) {
      return 1;
    } else {
      return 1.5;
    }
  } else if (monsters < 7) {
    if (players < 3) {
      return 2.5;
    } else if (players > 5) {
      return 1.5;
    } else {
      return 2;
    }
  } else if (monsters < 11) {
    if (players < 3) {
      return 3;
    } else if (players > 5) {
      return 2;
    } else {
      return 2.5;
    }
  } else if (monsters < 15) {
    if (players < 3) {
      return 4;
    } else if (players > 5) {
      return 2.5;
    } else {
      return 3;
    }
  } else {
    if (players < 3) {
      return 5;
    } else if (players > 5) {
      return 3;
    } else {
      return 4;
    }
  }
}
