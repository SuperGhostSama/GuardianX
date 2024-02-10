import { Task } from './task.interface';
import { Tags } from './tags.interface';

export interface TasksToTags {
  id?: number;  // '?' indicates it's an optional property
  task: Task;
  tag: Tags;
}
