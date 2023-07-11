import { Task } from "../interfaces";


export const useAnnotationHook = () => {
    return (person: Task): any => {
      let annotation: any = "Your average 7-day pressure is beyond optimal, you are more than in a perfect shape!"; // gut
      annotation =
        person.up >= 190 || person.down >= 130 || person.pulse >= 150
          ? "Your average 7-day pressure is above any limits, you need immediately contact to the doctor or hospital !"
          : person.up >= 170 || person.down >= 120 || person.pulse >= 120
          ? "Your average 7-day pressure is dangerously high! immediately contact the doctor to implement treatment!"
          : person.up >= 160 || person.down >= 100 || person.pulse >= 100
          ? "Your average 7-day pressure is really high, better contact the doctor to implement treatment!" //gut
          : person.up >= 150 || person.down >= 95 || person.pulse >= 90
          ? "Your average 7-day pressure is high, better contact the doctor to implement treatment!" // gut
          : person.up >= 140 || person.down >= 89 || person.pulse >= 80
          ? "Your average 7-day pressure is higher than normal, you must change your lifestyle!" // gut
          : person.up >= 130 || person.down >= 82 || person.pulse >= 70
          ? "Your average 7-day pressure is normal, but be aware and watch at it!" // gut
          : person.up >= 120 || person.down >= 75 || person.pulse >= 60
          ? "Your average 7-day pressure is optimal, you are in a perfect shape!" //gut
          : annotation;
      return annotation;
    };
  };
