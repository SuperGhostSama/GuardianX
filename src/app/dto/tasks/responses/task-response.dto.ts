import { TaskStatus } from '../../../modal/enums/task-status.enum';

export interface TaskResponseDTO {
  id: number;
  title: string;
  description: string;
  startDate: string; 
  deadline: string;  
  taskStatus: TaskStatus;
  status: string;
  message: string;
}