import { Task } from './interfaces';

const localStorageKey = "pressureList";

export const saveInLocalStorage = (pressureList: Task[]): void =>
  localStorage.setItem(localStorageKey, JSON.stringify(pressureList));

// export const getTasksFromLocalStorage = (): Task[] =>
//   JSON.parse(localStorage.getItem(localStorageKey) || "[]");