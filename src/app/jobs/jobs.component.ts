import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {

  jobs = [
    {title: 'Frontend Lead Tech', company: 'Brainbase / MyMediaBox', period: 'SEP 2022 – JUN 2024'},
    {title: 'IT Technical Manager', company: 'Klx / Caceis'},
    {title: 'Software Developer', company: 'ST Microelectronics'}
  ]
}
