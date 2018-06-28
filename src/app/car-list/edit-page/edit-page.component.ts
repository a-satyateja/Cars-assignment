import { Component, OnInit } from '@angular/core';
import { CarListService } from '../car-list.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  manufacturer_params: string;
  // car: {
  //   manufacturer: '',
  //   model: '',
  //   price: ''
  // };
  carEditForm: FormGroup;
  allCars: any[];
  car: any;
  carIndex: number;
  constructor(private carListService: CarListService, private route: ActivatedRoute) {
    // this.createForm();
   }

  // createForm() {
  //   this.form = this.fb.group(
  //     {
  //       'confirmPassword': ['', Validators.required],
  //       'email': new FormControl('', { updateOn: 'blur' }),
  //       'password': ['', Validators.required],
  //       'firstName': ['', Validators.required],
  //       'lastName': ['', Validators.required],
  //     },
  //     {
  //       validator: PasswordValidation.MatchPassword
  //     }
  //   );
  // }

  ngOnInit() {
    this.manufacturer_params = this.route.snapshot.params['manufacturer'];
    this.allCars = this.carListService.getCarData();
    console.log(this.allCars);
    this.carIndex = this.allCars.findIndex((e) => e.manufacturer === this.manufacturer_params);
    this.car = this.allCars[this.carIndex];
    console.log(this.car);
    this.carEditForm = new FormGroup({
      'car-manufacturer': new FormControl(this.car.manufacturer, Validators.required),
      'car-model': new FormControl(this.car.model, Validators.required),
      'carPrice': new FormControl(this.car.price, Validators.required)
    });
  }

  onSubmit(f) {
    console.log(f.value.carPrice);
    this.carListService.changePrice(this.carIndex, f.value.carPrice);
  }
}
