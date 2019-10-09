import { Component, OnInit, Input } from '@angular/core';
import { IProject } from '@app/core/models/IProject';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() project: IProject;
  constructor() { }

  ngOnInit() {
  }

}
