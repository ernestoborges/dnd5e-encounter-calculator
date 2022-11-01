import {
  GiWalkingBoot,
  GiFluffyWing,
  GiMountainClimbing,
  GiMeditation
} from "react-icons/gi";
import { TbSwimming, TbShovel } from "react-icons/tb";
import { IoBowlingBallSharp } from "react-icons/io5";

export function SpeedIconPicker(speed) {
  switch (speed) {
    case "walk":
      return <GiWalkingBoot />;
    case "fly":
      return <GiFluffyWing />;
    case "climb":
      return <GiMountainClimbing />;
    case "hover":
      return <GiMeditation />;
    case "swim":
      return <TbSwimming />;
    case "burrow":
      return <TbShovel />;
    case "roll":
      return <IoBowlingBallSharp />;
    default:
      return <GiWalkingBoot />;
  }
}
