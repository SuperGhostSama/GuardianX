import { Task } from './task.interface';
import { User } from './user.interface'; 
import { TaskAction } from '../enums/task-action.enum';  
import { TaskReplacementStatus } from '../enums/task-replacement-status.enum'; 

export interface TaskReplacement {
  id?: number;  // '?' indicates it's an optional property
  task: Task;
  dateTime: string;  // Use string or Date based on your preference
  oldUser: User;
  newUser: User;
  action: TaskAction;
  status: TaskReplacementStatus;
}
