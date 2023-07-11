import { Task } from "../interfaces";
import thermometerFull from "../images/ThermometerFull.gltf";
import thermGreen from "../images/ThermGreen.gltf";
import thermLime from "../images/ThermLime.gltf";
import thermYellow from "../images/ThermYellow.gltf";
import thermOrange from "../images/ThermOrange.gltf";
import thermPapaya from "../images/ThermPapaya.gltf";
import thermRed from "../images/ThermRed.gltf";
import thermViolet from "../images/ThermViolet.gltf";


export const useModelHook = () => {
  return (person: Task): any => {
    let color: any = thermometerFull;
    color =
      person.up >= 190 || person.down >= 130 || person.pulse >= 150
        ? thermViolet
        : person.up >= 170 || person.down >= 120 || person.pulse >= 120
        ? thermRed
        : person.up >= 160 || person.down >= 100 || person.pulse >= 100
        ? thermPapaya
        : person.up >= 150 || person.down >= 95 || person.pulse >= 90
        ? thermOrange
        : person.up >= 140 || person.down >= 89 || person.pulse >= 80
        ? thermYellow
        : person.up >= 130 || person.down >= 82 || person.pulse >= 70
        ? thermLime
        : person.up >= 120 || person.down >= 75 || person.pulse >= 60
        ? thermGreen
        : color;
    return color;
  };
};



