export function DifficultyCondition(xpTreshold, difficulty) {
  let easy = xpTreshold.easy;
  let medium = xpTreshold.medium;
  let hard = xpTreshold.hard;
  let deadly = xpTreshold.deadly;
  let adjustedXP = difficulty.xp * difficulty.dm;

  if (adjustedXP < easy) {
    return "Trivial";
  } else if (adjustedXP < medium) {
    return "Easy";
  } else if (adjustedXP < hard) {
    return "Medium";
  } else if (adjustedXP < deadly) {
    return "Hard";
  } else {
    return "Deadly";
  }
}
