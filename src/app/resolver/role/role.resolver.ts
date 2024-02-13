import { ResolveFn } from '@angular/router';

export const roleResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
