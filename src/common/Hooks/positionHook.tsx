
import { Task } from "../interfaces";


export const useHotpointHook = () => {
    return (person: Task): any => {
      let position: any = "0.04388671956896403m 1.548502198510652m 0.10592409502714872m"; // gut
      position =
        person.up >= 190 || person.down >= 130 || person.pulse >= 150
          ? "0.04388671956896403m 0.7345198057700061m 0.10592409502714908m"
          : person.up >= 170 || person.down >= 120 || person.pulse >= 120
          ? "0.04388671956896403m 0.8506051793422907m 0.10592409502714872m"
          : person.up >= 160 || person.down >= 100 || person.pulse >= 100
          ? "0.04388671956896403m 0.9678513176455348m 0.10592409502714872m" //gut
          : person.up >= 150 || person.down >= 95 || person.pulse >= 90
          ? "0.04388671956896403m 1.0868169416155107m 0.10592409502714872m" // gut
          : person.up >= 140 || person.down >= 89 || person.pulse >= 80
          ? "0.04388671956896403m 1.1986936838639217m 0.10592409502714872m" // gut
          : person.up >= 130 || person.down >= 82 || person.pulse >= 70
          ? "0.04388671956896403m 1.3152965379714765m 0.10592409502714872m" // gut
          : person.up >= 120 || person.down >= 75 || person.pulse >= 60
          ? "0.04388671956896403m 1.4330808008467661m 0.10592409502714908m" //gut
          : position;
      return position;
    };
  };
