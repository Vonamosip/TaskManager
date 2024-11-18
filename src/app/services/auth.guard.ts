import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { userInfo } from '../shared/interfaces/userInfo';

export const authGuard: CanActivateFn = (route, state) => {
return true
};
