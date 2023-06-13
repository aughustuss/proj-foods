import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core'
import { AuthService } from '../services/auth/auth.service';

export function authGuard(): CanActivateFn {
  return () => {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);
    if (authService.isLoggedIn()) {
      return true;
    } else {
      router.navigate(['/login'])
      return false;
    }
  }
};
