import { Task } from "../../common/interfaces";

export const useCalculateAverage = (data: Task[]): Task => {
  const totalObjects = data.length;
  const totalUp = data.reduce((sum, obj) => sum + obj.up, 0);
  const totalDown = data.reduce((sum, obj) => sum + obj.down, 0);
  const totalPulse = data.reduce((sum, obj) => sum + obj.pulse, 0);

  const averageUp = Math.round(totalUp / totalObjects);
  const averageDown = Math.round(totalDown / totalObjects);
  const averagePulse = Math.round(totalPulse / totalObjects);

  const newObject: Task = {
    id: "newId",
    up: averageUp,
    down: averageDown,
    pulse: averagePulse,
    note: "Average values",
  };
  return newObject;
};

export const useFindMaxUp = (data: Task[]): Task | undefined => {
  const maxUp = Math.max(...data.map((obj) => obj.up));
  const objWithMaxUp = data.find((obj) => obj.up === maxUp);
  return objWithMaxUp || undefined;
};

export const useFindMinUp = (data: Task[]): Task | undefined => {
  const minUp = Math.min(...data.map((obj) => obj.up));
  const objWithMinUp = data.find((obj) => obj.up === minUp);
  return objWithMinUp || undefined;
};
