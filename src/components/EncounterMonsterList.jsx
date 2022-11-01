import { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { CalcDifficultyMultiplier } from "../functions/CalcDifficultyMultiplier";
export function EncounterMonsterList({
  inputs,
  selectedMonsters,
  setSelectedMonsters,
  setEncounterStat,
  objkey,
  value: { n, data }
}) {
  useEffect(() => {
    let totalXP = Object.values(selectedMonsters)
      .map((item) => item.n * item.data.xp)
      .reduce((a, b) => a + b, 0);
    let totalMonsters = Object.values(selectedMonsters).reduce(
      (a, b) => a + b.n,
      0
    );
    let totalPlayers = inputs
      .map((item) => item.players)
      .reduce((a, b) => a + b, 0);
    let dm = CalcDifficultyMultiplier(totalPlayers, totalMonsters);
    setEncounterStat({
      dm: dm,
      xp: totalXP
    });
  }, [selectedMonsters, inputs]);
  return (
    <li className="encounter-monster-item">
      <div>
        <img
          className="monster-list-image static"
          src={
            data.has_img
              ? `https://raw.githubusercontent.com/theoperatore/dnd-monster-api/master/src/db/assets/${data.slug}.jpg`
              : "/images/monster_image_not_found.png"
          }
          //src={`https://raw.githubusercontent.com/theoperatore/dnd-monster-api/master/src/db/assets/${data.slug}.jpg`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "/images/monster_image_not_found.png";
          }}
          alt=""
        ></img>
      </div>
      <div>
        <div>
          <span>{data.name}</span>
          <span>{`XP: ${data.xp}`}</span>
          <span>{`CR: ${data.challenge_rating}`}</span>
        </div>
        <div className="input-number">
          <button
            onClick={(e) => {
              setSelectedMonsters((prev) => ({
                ...prev,
                [objkey]: { n: Number(n) + 1, data: data }
              }));
            }}
          >
            <AiOutlinePlus />
          </button>
          <input
            type="number"
            name="players"
            min="1"
            value={n}
            onChange={(e) => {
              if (e.target.value >= 1 && !e.target.value.includes("e")) {
                setSelectedMonsters((prev) => ({
                  ...prev,
                  [objkey]: { n: Number(e.target.value), data: data }
                }));
              } else {
                setSelectedMonsters((prev) => ({
                  ...prev,
                  [objkey]: { n: 1, data: data }
                }));
              }
            }}
          />
          <button
            onClick={(e) => {
              if (n > 1) {
                setSelectedMonsters((prev) => ({
                  ...prev,
                  [objkey]: { n: Number(n) - 1, data: data }
                }));
              } else {
                setSelectedMonsters((current) => {
                  const copy = { ...current };
                  delete copy[objkey];
                  return copy;
                });
              }
            }}
          >
            <AiOutlineMinus />
          </button>
        </div>
      </div>
    </li>
  );
}
