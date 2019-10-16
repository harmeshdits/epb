import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { MainRouting } from './main.routing';

import { MainComponent } from './main.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [MainComponent, ProjectsComponent, ProjectComponent, CalculatorComponent],
  imports: [
    SharedModule,
    MainRouting
  ]
})
export class MainModule { }
