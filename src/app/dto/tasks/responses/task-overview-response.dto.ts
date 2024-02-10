import { User } from '../../../modal/entities/user.interface';
import { Tags } from '../../../modal/entities/tags.interface';
import { TaskStatus } from '../../../modal/enums/task-status.enum';

export interface TaskOverviewResponseDTO {
  id: number;
  title: string;
  description: string;
  creationDate: string;
  startDate: string;
  deadline: string;
  status: TaskStatus;
  createdBy: User;
  assignedTo: User;
  tags: Tags[];
}