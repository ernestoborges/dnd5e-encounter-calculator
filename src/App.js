import "./styles.css";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { SelectionTab } from "./components/SelectionTab";
import { Bestiary } from "./components/Bestiary";
import { Encounter } from "./components/Encounter";
import { CrToXp } from "./functions/CrToXp";
import { hasImageList } from "./functions/hasImageList";
export default function App() {
  const [monsterList, setMonsterList] = useState([]);
  const [selectedMonsters, setSelectedMonsters] = useState({});
  const [selectedPreviewMonster, setSelectedPreviewMonster] = useState();
  const [selectedTab, setSelectedTab] = useState("bestiary");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let list = [];
    fetch("https://api.open5e.com/monsters/?format=json&limit=1469")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        list = data.results;
        list.forEach((item, index) => {
          item.xp = CrToXp(item.challenge_rating);
          if (hasImageList.includes(item.slug)) {
            item.has_img = true;
          } else {
            item.has_img = false;
          }
        });
        return list;
      })
      .then((list) => {
        setMonsterList(list);
      })
      .then(() => setIsLoading(false))
      .catch((error) => {
        console.error("Error fetching monsters data", error);
      });
  }, []);

  return (
    <div className="App">
      <div className="grid-container">
        <Header />
        <SelectionTab
          tabs={["encounter", "bestiary"]}
          default="bestiary"
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          selectedMonsters={selectedMonsters}
        />
        <main>
          {isLoading ? (
            <div className="loading-page">
              <img src="/images/book-pages.gif" alt="loading" />
              <p>Reading Monsters...</p>
              <p>Please, wait!</p>
            </div>
          ) : (
            <>
              <Encounter
                monsterList={monsterList}
                selectedTab={selectedTab}
                selectedMonsters={selectedMonsters}
                setSelectedMonsters={setSelectedMonsters}
              />
              <Bestiary
                selectedTab={selectedTab}
                isLoading={isLoading}
                monsterList={monsterList}
                selectedPreviewMonster={selectedPreviewMonster}
                setSelectedPreviewMonster={setSelectedPreviewMonster}
                selectedMonsters={selectedMonsters}
                setSelectedMonsters={setSelectedMonsters}
              />
            </>
          )}
        </main>
      </div>
    </div>
  );
}
