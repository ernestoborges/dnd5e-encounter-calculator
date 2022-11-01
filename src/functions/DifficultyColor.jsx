export function DifficultyColor(difficulty) {
  switch (difficulty) {
    case "Trivial":
      return <span className="blue">{difficulty}</span>;
    case "Easy":
      return <span className="green">{difficulty}</span>;
    case "Medium":
      return <span className="yellow">{difficulty}</span>;
    case "Hard":
      return <span className="orange">{difficulty}</span>;
    case "Deadly":
      return <span className="red">{difficulty}</span>;
    default:
      return <span>{difficulty}</span>;
  }
}
