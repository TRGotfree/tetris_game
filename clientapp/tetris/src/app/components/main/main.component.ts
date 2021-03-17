import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { BlocksFactory } from 'src/app/services/blocksFactory';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  @ViewChild('gameArea', { static: true }) gameArea: ElementRef;
  @ViewChild('nextBlockArea', { static: true }) nextBlockArea: ElementRef;

  private readonly gameAreaCells: any[] = [];
  private readonly nextBlocksAreaCells: any[] = [];

  constructor(private readonly renderer: Renderer2, private readonly blocksFactory: BlocksFactory) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.initCellsArrays();
  }

  private initCellsArrays() {
    for (const row of this.gameArea.nativeElement.children) {
      const rowArray = [];
      for (const cell of row.children) {
        rowArray.push(cell);
      }
      this.gameAreaCells.push(rowArray);
    }

    for (const row of this.nextBlockArea.nativeElement.children) {
      const rowArray = [];
      for (const cell of row.children) {
        rowArray.push(cell);
      }
      this.nextBlocksAreaCells.push(rowArray);
    }
  }

}
