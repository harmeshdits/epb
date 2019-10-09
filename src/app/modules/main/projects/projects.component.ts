import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { IProject } from '@app/core/models/IProject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  projects: IProject[] = [];
  
  constructor(private apiService: ApiService ) { }

  ngOnInit() {
    this.projects = this.apiService.getProjectsList();
  }

}
