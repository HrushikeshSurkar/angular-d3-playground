import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/svg-playground', pathMatch: 'full' },
  {
    path: 'svg-playground',
    loadComponent: () =>
      import('./svg-playground/svg-playground').then((component) => component.SvgPlayground),
  },
];
