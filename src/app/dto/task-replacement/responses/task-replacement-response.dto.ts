import { TaskAction } from '../../../modal/enums/task-action.enum';
import { TaskReplacementStatus } from '../../../modal/enums/task-replacement-status.enum'; 

export interface TaskReplacementResponseDTO {
  id: number;
  taskId: number;
  dateTime: string; 
  oldUserId: number;
  newUserId: number;
  action: TaskAction;
  taskReplacementStatus: TaskReplacementStatus;
  status: string;
  message: string;
}