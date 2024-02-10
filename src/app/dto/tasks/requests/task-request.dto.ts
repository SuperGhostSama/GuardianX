export interface TaskRequestDTO {
    title: string;
    description: string;
    startDate: string; // Adjust based on how you want to handle dates in Angular
    deadline: string;  // Adjust based on how you want to handle dates in Angular
    tagIds: number[];
    createdById: number;
  }