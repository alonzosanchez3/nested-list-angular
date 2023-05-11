import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MenuDataService } from '../menu-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  menuData: Menu[];

  constructor(private menuDataService: MenuDataService) {

  }

  ngOnInit(): void {
    this.menuData = this.menuDataService.menu;
  }

}
