export interface TaskUpdateRequestDTO {
    title: string;
    description: string;
    startDate: string; 
    deadline: string; 
    tagIds: number[];
    createdById: number;
    assignedToId: number | null;
  }