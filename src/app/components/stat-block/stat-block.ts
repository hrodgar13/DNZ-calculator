import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {AbsPipe} from '../../abs-pipe';

@Component({
  selector: 'app-stat-block',
  standalone: true,
  imports: [
    AbsPipe
  ],
  templateUrl: './stat-block.html',
  styleUrl: './stat-block.scss',
})
export class StatBlock implements OnInit {
  @Input() statName: string = '';
  @Input() minimumValue: number = -2;
  @Input() maximumValue: number = 4;
  @Input() value = 1;

  @Input() customPrefix: string | null = null;
  @Input() customPostfix: string | null = null;
  @Input() applyConcatenationSymbol: boolean = true;
  @Input() step: number = 1;

  @Input() costMap: {[key: number]: number} = {};

  @Output() costChange = new EventEmitter<number>();

  ngOnInit() {
    this.emitCost();
  }

  increaseValue() {
    this.value = this.value + this.step;
    this.emitCost();
  }

  decreaseValue() {
    this.value = this.value - this.step;
    this.emitCost();
  }

  private emitCost() {
    this.costChange.emit(this.costMap[this.value] || 0);
  }
}
