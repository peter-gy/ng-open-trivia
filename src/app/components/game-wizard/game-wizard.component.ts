import { Component, OnInit, ViewChild } from '@angular/core';
import { ClrWizard } from "@clr/angular";

@Component({
  selector: 'app-game-wizard',
  templateUrl: './game-wizard.component.html',
  styleUrls: ['./game-wizard.component.scss']
})
export class GameWizardComponent implements OnInit {

  @ViewChild("wizard") wizard: ClrWizard;

  open: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
