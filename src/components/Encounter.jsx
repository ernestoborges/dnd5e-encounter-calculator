import { useEffect, useState } from "react";
import { PartyTable } from "./PartyTable.jsx";
import { calcXpTreshold } from "../functions/CalcXpTreshold";
import { PartyTreshold } from "./PartyTreshold";
import { EncounterMonsterList } from "./EncounterMonsterList";
import { DifficultyCondition } from "../functions/DifficultyCondition";
import { CharactersToShare } from "../functions/CharactersToShare";
import { DifficultyColor } from "../functions/DifficultyColor";

export function Encounter({
  selectedTab,
  selectedMonsters,
  setSelectedMonsters
}) {
  const [inputs, setInputs] = useState([]);
  const [xpTreshold, setXpTreshold] = useState();
  const [encounterStat, setEncounterStat] = useState({
    xp: 0,
    dm: 0
  });
  function updateData(id, property, value) {
    const newInput = inputs.map((obj) => {
      if (obj.id === id) {
        return { ...obj, [property]: value };
      }
      return obj;
    });
    setInputs(newInput);
  }
  useEffect(() => {
    setXpTreshold(calcXpTreshold(inputs));
  }, [inputs]);
  return (
    <section
      className={
        "encounter-section" + (selectedTab === "encounter" ? "" : " hidden")
      }
    >
      <section className="party-section">
        <div>
          <h3>Party</h3>
          <PartyTable
            inputs={inputs}
            setInputs={setInputs}
            updateData={updateData}
          />
        </div>
        <div>
          <h3>xp treshold</h3>
          <PartyTreshold xpTreshold={xpTreshold} />
        </div>
      </section>
      <section className="monster-section">
        {Object.entries(selectedMonsters).length > 0 ? (
          <>
            <h3>Monster</h3>
            <ul>
              {Object.entries(selectedMonsters).map(([key, value], index) => (
                <EncounterMonsterList
                  key={index}
                  objkey={key}
                  value={value}
                  inputs={inputs}
                  setSelectedMonsters={setSelectedMonsters}
                  selectedMonsters={selectedMonsters}
                  setEncounterStat={setEncounterStat}
                />
              ))}
            </ul>
          </>
        ) : (
          <></>
        )}
      </section>
      <section className="encounter-results">
        <h3>Results</h3>
        <ul>
          <li>
            <span>Encounter Difficulty</span>
            {xpTreshold ? (
              DifficultyColor(DifficultyCondition(xpTreshold, encounterStat))
            ) : (
              <span>-</span>
            )}
          </li>
          <li>
            <span>Monsters</span>
            <span>
              {Object.values(selectedMonsters).reduce((a, b) => a + b.n, 0)}
            </span>
          </li>
          <li>
            <span>Characters</span>
            <span>
              {inputs.map((item) => item.players).reduce((a, b) => a + b, 0)}
            </span>
          </li>
          <li>
            <span>Characters to Share XP</span>
            <span>{CharactersToShare(inputs)}</span>
          </li>
          <li>
            <span>Total XP</span>
            <span>{`${encounterStat.xp} XP`}</span>
          </li>
          <li>
            <span>Shared XP ( XP / Player )</span>
            <span>
              {CharactersToShare(inputs) > 0
                ? `${(encounterStat.xp / CharactersToShare(inputs)).toFixed(
                    0
                  )} XP`
                : `0`}
            </span>
          </li>
          <li>
            <span>Difficulty Multiplier</span>
            <span>{`${encounterStat.dm}x`}</span>
          </li>
          <li>
            <span>Adjusted XP</span>
            <span>{`${encounterStat.xp * encounterStat.dm} XP`}</span>
          </li>
        </ul>
      </section>
    </section>
  );
}
