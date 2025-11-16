import { Component } from '@angular/core';
import {StatBlock} from '../stat-block/stat-block';

@Component({
  selector: 'app-main-container',
  imports: [StatBlock],
  templateUrl: './main-container.html',
  styleUrl: './main-container.scss',
})
export class MainContainer {
  strCost = 0;
  dexCost = 0;
  conCost = 0;
  speedCost = 0;
  bloodCost = 0;
  hitDiceCost = 0;
  rationsCost = 0;

  // Cost maps - ALL body types = 32 points, ALL progressions are strictly linear
  strCostMap = { '-2': 0, '-1': 2, '0': 4, '1': 8, '2': 9, '3': 12, '4': 15 };
  dexCostMap = { '-2': 0, '-1': 2, '0': 5, '1': 8, '2': 9, '3': 16, '4': 20 };
  conCostMap = { '-2': 0, '-1': 2, '0': 4, '1': 7, '2': 9, '3': 12, '4': 15 };
  speedCostMap = { '15': 0, '20': 2, '25': 4, '30': 5 };
  bloodCostMap = { '8': 0, '10': 2, '12': 4 };
  hitDiceCostMap = { '8': 0, '10': 2, '12': 4 };
  rationsCostMap = { '1': 6, '2': 3, '3': 0 };  // Inverted: fewer rations = higher cost

  get usedPoints(): number {
    return this.strCost + this.dexCost + this.conCost +
      this.speedCost + this.bloodCost + this.hitDiceCost + this.rationsCost;
  }

  get availablePoints(): number {
    // All body types are balanced to 32 points
    return 32;
  }

  updateStrCost(cost: number) { this.strCost = cost; }
  updateDexCost(cost: number) { this.dexCost = cost; }
  updateConCost(cost: number) { this.conCost = cost; }
  updateSpeedCost(cost: number) { this.speedCost = cost; }
  updateBloodCost(cost: number) { this.bloodCost = cost; }
  updateHitDiceCost(cost: number) { this.hitDiceCost = cost; }
  updateRationsCost(cost: number) { this.rationsCost = cost; }
}
