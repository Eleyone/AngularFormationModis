import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [NgbModal]
})
export class ModalComponent implements OnInit {

  constructor(private modalService: NgbModal) {  }

  ngOnInit() {
  }

  public open(content) {
    this.modalService.open(content);
  }
}
