import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
  standalone: false,
})
export class CustomButtonComponent {
  @Input() label: string = 'Button';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() color: 'primary' | 'accent' | 'warn' | 'custom-warn' | '' = 'primary';
  @Input() disabled: boolean = false;
  @Input() icon: string | null = null;

  getCustomColorClass(): string {
    const predefinedColors = ['primary', 'accent', 'warn'];
    return predefinedColors.includes(this.color) ? this.color : `custom-${this.color}`;
  }
}
