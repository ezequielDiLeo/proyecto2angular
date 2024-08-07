import { Component, HostBinding, OnInit, signal, ViewChild } from '@angular/core';
import { ProductList, productsList } from '../mock/products.mock';
import { IgxGridComponent } from 'igniteui-angular';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit{
  @ViewChild('grid1', { read: IgxGridComponent, static: true })
  public grid1!: IgxGridComponent;

  data = signal<ProductList[]>([])

  public size = 'large';
  public sizes! : any [];

  constructor() {
  }
  public ngOnInit(): void {
      this.data.set(productsList);
      this.sizes = [
          {
              label: 'small',
              selected: this.size === 'small',
              togglable: true
          },
          {
              label: 'medium',
              selected: this.size === 'medium',
              togglable: true
          },
          {
              label: 'large',
              selected: this.size === 'large',
              togglable: true
          }
      ];
  }

  @HostBinding('style.--ig-size')
  protected get sizeStyle() {
      return `var(--ig-size-${this.size})`;
  }

  public get dataArray(): ProductList[] {
    return this.data();
  }

  public selectSize(event: any) {
      this.size = this.sizes[event.index].label;
      this.grid1.reflow();
  }

  public formatDate(val: any) {
      if (val !== 'Select All') {
          return new Intl.DateTimeFormat('en-US').format(val);
      } else {
          return val;
      }
  }

  public formatCurrency(val: string) {
      return parseInt(val, 10).toFixed(2);
  }
}
