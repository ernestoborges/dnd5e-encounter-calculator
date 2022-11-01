import { useMemo } from "react";
import { MonsterListItem } from "./MonsterListItem";
import { MonsterGalleryItem } from "./MonsterGalleryItem";

export function MonsterList({
  selectedTab,
  setShowPreview,
  filter,
  searchedMonster,
  monsterList,
  setSelectedPreviewMonster,
  setSelectedMonsters,
  selectedMonsters
}) {
  const filterImage = useMemo(() => {
    return monsterList.filter((monster) => {
      if (filter.img_only === true) {
        return monster.has_img;
      }
      return true;
    });
  }, [filter, monsterList]);
  const filterProperties = useMemo(() => {
    return filterImage.filter((monster) => {
      for (var key in filter) {
        if (key !== "img_only") {
          if (filter[key] !== "any")
            if (monster[key] === undefined || monster[key] !== filter[key])
              return false;
        }
      }
      return true;
    });
  }, [filterImage, filter]);
  const filterName = useMemo(() => {
    return filterProperties.filter((monster) => {
      return monster.slug.toLowerCase().includes(searchedMonster.toLowerCase());
    });
  }, [filterProperties, searchedMonster]);

  return selectedTab === "list" ? (
    <ul className="monster-list">
      {filterName.map((monster, index) => (
        <MonsterListItem
          key={index}
          monster={monster}
          setSelectedPreviewMonster={setSelectedPreviewMonster}
          selectedMonsters={selectedMonsters}
          setSelectedMonsters={setSelectedMonsters}
          setShowPreview={setShowPreview}
        />
      ))}
    </ul>
  ) : (
    <ul className="monster-gallery">
      {filterName.map((monster, index) => (
        <MonsterGalleryItem
          key={index}
          monster={monster}
          setSelectedPreviewMonster={setSelectedPreviewMonster}
          selectedMonsters={selectedMonsters}
          setSelectedMonsters={setSelectedMonsters}
          setShowPreview={setShowPreview}
        />
      ))}
    </ul>
  );
}
