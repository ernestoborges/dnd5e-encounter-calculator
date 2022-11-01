export function MonsterListItem({
  setSelectedPreviewMonster,
  monster,
  monster: { slug, name, type, size, challenge_rating, has_img },
  setSelectedMonsters,
  selectedMonsters,
  setShowPreview
}) {
  function update(monster) {
    setShowPreview(true);
    setSelectedPreviewMonster(monster);
  }
  return (
    <li
      className="monster-list-item"
      onClick={() => {
        update(monster);
      }}
    >
      <img
        className="monster-list-image"
        src={
          has_img
            ? `https://raw.githubusercontent.com/theoperatore/dnd-monster-api/master/src/db/assets/${slug}.jpg`
            : "/images/monster_image_not_found.png"
        }
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = "/images/monster_image_not_found.png";
        }}
        alt=""
      ></img>
      <div>
        <span>{name}</span>
        <span>{`${size}, ${type}, CR ${challenge_rating}`}</span>
      </div>
      <button
        type="button"
        onClick={() =>
          setSelectedMonsters((prev) => ({
            ...prev,
            [slug]: selectedMonsters[slug]
              ? { n: selectedMonsters[slug].n + 1, data: monster }
              : { n: 1, data: monster }
          }))
        }
      >
        Add
      </button>
    </li>
  );
}
