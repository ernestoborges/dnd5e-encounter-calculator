import { GoSearch } from "react-icons/go";
import { CiSliderHorizontal } from "react-icons/ci";
import { useState } from "react";
import { SelectOption } from "./SelectOption";

export function SearchBar({ setSearchedMonster, setFilter }) {
  const [isFilterOn, setIsFilterOn] = useState(false);
  return (
    <>
      <div className="search-bar-container">
        <div>
          <GoSearch className="serch-bar-magnifier-icon" />
          <input
            placeholder="Search monster..."
            onChange={(event) => {
              setSearchedMonster(event.target.value);
            }}
          />

          <CiSliderHorizontal
            onClick={() => {
              setIsFilterOn(isFilterOn ? false : true);
            }}
            className={
              isFilterOn
                ? "serch-bar-slider-icon serch-bar-slider-icon-selected"
                : "serch-bar-slider-icon"
            }
          />
        </div>

        <div
          className={"search-filter-container" + (isFilterOn ? "" : " hidden")}
        >
          <div>
            <label>
              <input
                type="checkbox"
                defaultChecked="checked"
                onChange={(event) =>
                  setFilter((prev) => ({
                    ...prev,
                    img_only: event.target.checked
                  }))
                }
              />
              <div className="custom-checkbox"></div>
            </label>
            <span>Only with images</span>
          </div>
          <SelectOption
            filterName="size"
            setFilter={setFilter}
            label="Size"
            isLoyer="false"
            options={[
              "Any",
              "Tiny",
              "Small",
              "Medium",
              "Large",
              "Huge",
              "Gargantuan"
            ]}
          />
          <SelectOption
            filterName="type"
            setFilter={setFilter}
            label="Type"
            isLoyer="true"
            options={[
              "Any",
              "Aberration",
              "Beast",
              "Celestial",
              "Construct",
              "Dragon",
              "Fey",
              "Fiend",
              "Giant",
              "Humanoid",
              "Monstrosity",
              "Ooze",
              "Plant",
              "Undead"
            ]}
          />
          <SelectOption
            filterName="alignment"
            setFilter={setFilter}
            label="Alignment"
            isLoyer="true"
            options={[
              "Any",
              "Lawful Good",
              "Lawful Neutral",
              "Lawful Evil",
              "Neutral Good",
              "Neutral",
              "Neutral Evil",
              "Chaotic Good",
              "Chaotic Neutral",
              "Chaotic Evil"
            ]}
          />
        </div>
      </div>
    </>
  );
}
