import { FaFistRaised } from "react-icons/fa";
import { FiCrosshair } from "react-icons/fi";
import { RiHeartPulseLine } from "react-icons/ri";
import { GiBookmarklet } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GiDualityMask } from "react-icons/gi";
import { CapitalizeFirstLetter } from "../functions/CapitalizeFirstLetter";
import { SpeedIconPicker } from "../functions/SpeedIconPicker";
import { AiOutlineClose } from "react-icons/ai";
export function MonsterPreviewCard({
  setShowPreview,
  selectedPreviewMonster: {
    slug,
    name,
    size,
    type,
    armor_class,
    hit_points,
    challenge_rating,
    xp,
    speed,
    alignment,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    has_img
  }
}) {
  return (
    <article className="monster-preview-card">
      <button
        className="close-button"
        type="button"
        onClick={() => {
          setShowPreview(false);
        }}
      >
        <AiOutlineClose />
      </button>
      <img
        className="monster-preview-img"
        src={
          has_img
            ? `https://raw.githubusercontent.com/theoperatore/dnd-monster-api/master/src/db/assets/${slug}.jpg`
            : "/images/monster_image_not_found.png"
        }
        //src={`https://raw.githubusercontent.com/theoperatore/dnd-monster-api/master/src/db/assets/${slug}.jpg`}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = "/images/monster_image_not_found.png";
        }}
        alt=""
      />
      <div className="monster-preview-detail">
        <h2>{name}</h2>
        <div>
          <ul>
            <li>
              <span>Size</span>
              <span>{size}</span>
            </li>
            <li>
              <span>Type</span>
              <span>{CapitalizeFirstLetter(type)}</span>
            </li>
            <li>
              <span>CA</span>
              <span>{armor_class}</span>
            </li>
            <li>
              <span>HP</span>
              <span>{hit_points}</span>
            </li>
          </ul>
          <ul>
            <li>
              <span>CR</span>
              <span>{challenge_rating}</span>
            </li>
            <li>
              <span>XP</span>
              <span>{xp}</span>
            </li>
          </ul>
        </div>
        <ul>
          <li>
            <span>Alignmnet</span>
            <span>
              {[
                "lawful good",
                "lawful neutral",
                "lawful evil",
                "neutral good",
                "neutral",
                "neutral evil",
                "chaotic good",
                "chaotic neutral",
                "chaotic evil",
                "unaligned",
                "any alignment"
              ].includes(alignment)
                ? CapitalizeFirstLetter(alignment)
                : "Undefined"}
            </span>
          </li>
        </ul>
        <hr />
        <div className="speed-container">
          <ul>
            {Object.entries(speed).map(([key, value], index) =>
              key === "hover" ? (
                <li key={index}>
                  {SpeedIconPicker(key)}
                  <div>
                    <span>{CapitalizeFirstLetter(key)}</span>
                    <span>{value === true ? "Yes" : "No"}</span>
                  </div>
                </li>
              ) : (
                <li key={index}>
                  {SpeedIconPicker(key)}
                  <div>
                    <span>{CapitalizeFirstLetter(key)}</span>
                    <span>{`${value} ft.`}</span>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="abilities-container">
          <ul>
            <li>
              <FaFistRaised />
              <div>
                <span>STR</span>
                <span>{strength}</span>
              </div>
            </li>
            <li>
              <FiCrosshair />
              <div>
                <span>DEX</span>
                <span>{dexterity}</span>
              </div>
            </li>
            <li>
              <RiHeartPulseLine />
              <div>
                <span>CON</span>
                <span>{constitution}</span>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <GiBookmarklet />
              <div>
                <span>INT</span>
                <span>{intelligence}</span>
              </div>
            </li>
            <li>
              <HiOutlineLightBulb />
              <div>
                <span>WIS</span>
                <span>{wisdom}</span>
              </div>
            </li>
            <li>
              <GiDualityMask />
              <div>
                <span>CHA</span>
                <span>{charisma}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
