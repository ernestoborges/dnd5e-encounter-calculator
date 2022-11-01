export function PartyTreshold({ xpTreshold }) {
  return (
    <ul>
      <li>
        <span>Easy</span>
        <span>{xpTreshold ? `${xpTreshold.easy} XP` : "-"}</span>
      </li>
      <li>
        <span>Medium</span>
        <span>{xpTreshold ? `${xpTreshold.medium} XP` : "-"}</span>
      </li>
      <li>
        <span>Hard</span>
        <span>{xpTreshold ? `${xpTreshold.hard} XP` : "-"}</span>
      </li>
      <li>
        <span>Deadly</span>
        <span>{xpTreshold ? `${xpTreshold.deadly} XP` : "-"}</span>
      </li>
    </ul>
  );
}
