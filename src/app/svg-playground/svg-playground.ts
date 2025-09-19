import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-playground',
  templateUrl: './svg-playground.html',
  styleUrls: ['./svg-playground.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class SvgPlayground {
  nodes = [
    {
      id: 1,
      disabled: false,
      label: 'Node 1',
      htmlContent: '<strong>Node 1</strong><br>Custom HTML',
    },
    {
      id: 2,
      disabled: false,
      label: 'Node 2',
      htmlContent: '<strong>Node 2</strong><br>Custom HTML',
    },
    {
      id: 3,
      disabled: false,
      label: 'Node 3',
      htmlContent: '<strong>Node 3</strong><br>Custom HTML',
    },
    {
      id: 4,
      disabled: false,
      label: 'Node 4',
      htmlContent: '<strong>Node 4</strong><br>Custom HTML',
    },
  ];

  constructor() {
    alert('SvgPlaygroundComponent initialized. Click handlers registered.');
  }

  // Handle node click
  onNodeClick(nodeId: number) {
    const node = this.nodes.find((n) => n.id === nodeId);
    if (node) {
      if (!node.disabled) {
        alert(
          `Clicked on ${node.label} (ID: ${nodeId}) at ${new Date().toLocaleTimeString('en-IN', {
            timeZone: 'Asia/Kolkata',
          })}`
        );
      } else {
        alert(`${node.label} (ID: ${nodeId}) is disabled and cannot be clicked.`);
      }
    } else {
      alert(`Node with ID ${nodeId} not found.`);
    }
  }

  // Toggle node disabled state
  toggleNodeDisable(nodeId: number) {
    const node = this.nodes.find((n) => n.id === nodeId);
    if (node) {
      node.disabled = !node.disabled;
      alert(`${node.label} (ID: ${nodeId}) is now ${node.disabled ? 'disabled' : 'enabled'}`);
    }
  }
}
