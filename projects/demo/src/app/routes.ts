import { Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { ExampleComponent } from './example/example.component';

export const routes: Routes = [
  { path: 'demo', component: DemoComponent },
  { path: 'example', component: ExampleComponent },
  {
    path: 'documentation',
    loadChildren: () =>
      import('./documentation/documentation.module').then(d => d.DocumentationModule),
  },
  { path: '**', redirectTo: 'demo' },
];
