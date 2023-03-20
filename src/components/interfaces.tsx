export interface Task {
    id: string;
    up: number;
    down: number;
    pulse: number;
    note?: string;
  }

  export interface TaskListState {
    pressureList: Task[];
    isTaskHide: boolean;
    isLoading: boolean;
  }
  