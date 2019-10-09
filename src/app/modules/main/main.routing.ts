import { Routes, RouterModule } from "@angular/router";
import { ProjectsComponent } from './projects/projects.component';

import { MainLayoutComponent } from '@app/shared/layout/app-layouts/main-layout.component';

export const routes: Routes = [
    {
      path: "",
      component: MainLayoutComponent,
      children: [
        {
          path: "",
          component: ProjectsComponent
        }
      ]
    }
  ];
  
  export const MainRouting = RouterModule.forChild(routes);
