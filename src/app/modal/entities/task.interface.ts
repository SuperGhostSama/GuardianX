import { User } from './user.interface';
import { Tags } from './tags.interface';  
import { TaskStatus } from '../enums/task-status.enum';  

export interface Task {
  id?: number;  // '?' indicates it's an optional property
  title: string;
  description: string;
  creationDate?: string;  // Use string or Date based on your preference
  startDate?: string;    // Use string or Date based on your preference
  deadline?: string;     // Use string or Date based on your preference
  status: TaskStatus;
  createdBy?: User;
  assignedTo?: User;
  tags?: Tags[];
}