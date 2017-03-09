import { Component, OnInit, Input } from '@angular/core'
import { ProgressService } from '../../services/progress.service'

@Component({
  selector: 'user-progress-bar',
  templateUrl: './user-progress-bar.component.html',
})
export class UserProgressBarComponent implements OnInit {
  public progress: number

  @Input()
  module: string

  constructor(
    private progressService: ProgressService,
  ) {}

  ngOnInit() {
    this.progressService.activeUserProgress.subscribe((data) => {
      const moduleData = (data && data.modules) ? data.modules : {}
      this.progress = 50
    })
  }
}
