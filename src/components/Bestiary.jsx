import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { MonsterPreviewCard } from "./MonsterPreviewCard";
import { MonsterList } from "./MonsterList";
import { SelectionTab } from "./SelectionTab";

export function Bestiary({
  monsterList,
  selectedPreviewMonster,
  setSelectedPreviewMonster,
  isLoading,
  selectedTab,
  setSelectedMonsters,
  selectedMonsters
}) {
  const [searchedMonster, setSearchedMonster] = useState("");
  const [filter, setFilter] = useState({
    size: "any",
    type: "any",
    alignment: "any",
    img_only: true
  });
  const [GallerySelectedTab, setGallerySelectedTab] = useState("list");
  const [showPreview, setShowPreview] = useState(true);

  return (
    <section
      className={
        "bestiary-section" + (selectedTab === "bestiary" ? "" : " hidden")
      }
    >
      <SearchBar
        setSearchedMonster={setSearchedMonster}
        setFilter={setFilter}
      />
      {selectedPreviewMonster ? (
        showPreview ? (
          <MonsterPreviewCard
            setShowPreview={setShowPreview}
            selectedPreviewMonster={selectedPreviewMonster}
          />
        ) : (
          ""
        )
      ) : (
        ""
      )}
      <SelectionTab
        tabs={["gallery", "list"]}
        default="list"
        selectedTab={GallerySelectedTab}
        setSelectedTab={setGallerySelectedTab}
      />
      {!isLoading ? (
        <MonsterList
          selectedTab={GallerySelectedTab}
          filter={filter}
          searchedMonster={searchedMonster}
          monsterList={monsterList}
          setSelectedPreviewMonster={setSelectedPreviewMonster}
          selectedMonsters={selectedMonsters}
          setSelectedMonsters={setSelectedMonsters}
          setShowPreview={setShowPreview}
        />
      ) : (
        "Loading"
      )}
    </section>
  );
}
