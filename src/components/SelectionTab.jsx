export function SelectionTab({
  tabs,
  selectedTab,
  setSelectedTab,
  selectedMonsters
}) {
  return (
    <ul className="selection-tab">
      {tabs.map((item, index) => (
        <li
          key={index}
          className={selectedTab === item ? "selected-tab" : ""}
          onClick={(event) => {
            setSelectedTab(item);
          }}
        >
          {item}
          {item === "encounter" ? (
            selectedMonsters ? (
              Object.values(selectedMonsters).reduce((a, b) => a + b.n, 0) >
              0 ? (
                <span className="encounter-monster-counter">
                  {Object.values(selectedMonsters).reduce((a, b) => a + b.n, 0)}
                </span>
              ) : (
                ""
              )
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </li>
      ))}
    </ul>
  );
}
