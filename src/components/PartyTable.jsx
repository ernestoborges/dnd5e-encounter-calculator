import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

export function PartyTable({ inputs, setInputs, updateData }) {
  return (
    <>
      <div className="party-table">
        {inputs.length > 0 ? (
          <>
            <label className="label-align">Players</label>
            <label className="label-align">Level</label>
            <label>XP</label>
            <label>DEL</label>
          </>
        ) : (
          <></>
        )}

        {inputs.map((row, rowIndex) => (
          <div className="party-table-item" key={rowIndex}>
            <div className="input-number">
              <button
                onClick={(e) => {
                  updateData(row.id, "players", Number(row.players) + 1);
                }}
              >
                <AiOutlinePlus />
              </button>
              <input
                type="number"
                name="players"
                min="1"
                value={row.players.toString()}
                onChange={(e) => {
                  if (e.target.value >= 1 && !e.target.value.includes("e")) {
                    updateData(row.id, e.target.name, Number(e.target.value));
                  } else {
                    updateData(row.id, e.target.name, 1);
                  }
                }}
              />
              <button
                onClick={(e) => {
                  if (row.players > 1) {
                    updateData(row.id, "players", Number(row.players) - 1);
                  }
                }}
              >
                <AiOutlineMinus />
              </button>
            </div>

            <div className="input-number">
              <button
                onClick={(e) => {
                  if (row.level < 20) {
                    updateData(row.id, "level", Number(row.level) + 1);
                  }
                }}
              >
                <AiOutlinePlus />
              </button>
              <input
                type="number"
                name="level"
                min="1"
                max="20"
                value={row.level.toString()}
                onChange={(e) => {
                  if (e.target.value >= 1 && !e.target.value.includes("e")) {
                    if (e.target.value <= 20) {
                      updateData(row.id, e.target.name, Number(e.target.value));
                    } else {
                      updateData(row.id, e.target.name, Number(20));
                    }
                  } else {
                    updateData(row.id, e.target.name, 1);
                  }
                }}
              />
              <button
                onClick={(e) => {
                  if (row.level > 1) {
                    updateData(row.id, "level", Number(row.level) - 1);
                  }
                }}
              >
                <AiOutlineMinus />
              </button>
            </div>

            <label>
              <input
                type="checkbox"
                defaultChecked="checked"
                name="xp"
                onChange={(e) => {
                  updateData(row.id, e.target.name, e.target.checked);
                }}
              />
              <div className="custom-checkbox"></div>
            </label>

            <button
              className="del-button"
              type="button"
              onClick={(e) => {
                setInputs(inputs.filter((input) => input.id !== row.id));
              }}
            >
              <BsTrash />
            </button>
          </div>
        ))}
      </div>
      <button
        className="add-group-button"
        type="button"
        onClick={() => {
          setInputs((prev) => [
            ...prev,
            {
              id:
                inputs.length > 0
                  ? inputs[inputs.length - 1].id + 1
                  : inputs.length,
              players: 1,
              level: 1,
              xp: true
            }
          ]);
        }}
      >
        add group
      </button>
    </>
  );
}
