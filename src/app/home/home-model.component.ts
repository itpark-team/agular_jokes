import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  templateUrl: './home-model.component.html'
})

export class HomeModalComponent {
  @Input() description: string;
  @Input() title: string;
  @Input() isAuth: boolean;

  constructor(public activeModal: NgbActiveModal, private router: Router) {
  }

  closeModal(): void {
    if (this.isAuth === true) {
      this.router.navigateByUrl('/jokes');
    }
  }
}
