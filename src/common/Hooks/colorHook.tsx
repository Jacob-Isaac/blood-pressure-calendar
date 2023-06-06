import { Task } from "../interfaces";

export const useColorHook = () => {
  return (person: Task): string => {
    let imgClass: string = "List-img";
    imgClass =
      person.up >= 190 || person.down >= 130 || person.pulse >= 150
        ? "List-img-violet"
        : person.up >= 170 || person.down >= 120 || person.pulse >= 120
        ? "List-img-red"
        : person.up >= 160 || person.down >= 100 || person.pulse >= 100
        ? "List-img-orange"
        : person.up >= 150 || person.down >= 95 || person.pulse >= 90
        ? "List-img-papaya"
        : person.up >= 140 || person.down >= 89 || person.pulse >= 80
        ? "List-img-yellow"
        : person.up >= 130 || person.down >= 82 || person.pulse >= 70
        ? "List-img-green"
        : imgClass;
    return imgClass;
  };
};
