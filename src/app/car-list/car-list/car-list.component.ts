import { Component, OnInit } from '@angular/core';
import { CarListService } from '../car-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  carIndex: any;

  constructor(
    private carListService: CarListService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  carlist: any[];
  ngOnInit() {
    this.carlist = this.carListService.getCarData();
  }
  onEdit(manufacturer) {
    this.router.navigate([manufacturer], {relativeTo: this.route});
  }
  deleteCar(manufacturer) {
    this.carIndex = this.carlist.findIndex((e) => e.manufacturer === manufacturer);
    this.carListService.deleteCar(this.carIndex);
    this.carlist = this.carListService.getCarData();
    console.log(this.carlist);
  }
}
