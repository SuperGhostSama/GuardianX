import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router;
  // const cookieService = new CookieService(document, null);
  const jwtToken = sessionStorage.getItem('jwtToken');

  if (jwtToken) {
    return true;
  } else {
    router.navigate(['/login']); 
    return false;
  }
};
