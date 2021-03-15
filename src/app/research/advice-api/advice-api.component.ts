import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { W3esearviceMainService } from 'src/app/services/w3esearvice-main.service';

@Component({
  selector: 'app-advice-api',
  templateUrl: './advice-api.component.html',
  styleUrls: ['./advice-api.component.scss']
})
export class AdviceAPIComponent implements OnInit {

  randomNumber: number = 59;
  queryString: string = 'dream';
  obj;
  loader = false;
  ingredeints;
  alertMsg = false;

  listsOfIngred = [
    {name: 'Carbohydrates', value: 'minCarbs=10&maxCarbs=100', active: true},
    {name: 'Calories', value: 'minCalories=10&maxCalories=100', active: false},
    {name: 'Protein', value: 'minProtein=10&maxProtein=100', active: false},
    {name: 'Alcohol', value: 'minAlcohol=10&maxAlcohol=100', active: false},
    {name: 'Caffeine', value: 'minCaffeine=10&maxCaffeine=100', active: false},
    {name: 'Copper', value: 'minCopper=10&maxCopper=100', active: false},
    {name: 'Cholesterol', value: 'minCholesterol=10&maxCholesterol=100', active: false},
    {name: 'SaturatedFat', value: 'minSaturatedFat=10&maxSaturatedFat=100', active: false},
    {name: 'VitaminA', value: 'minVitaminA=10&maxVitaminA=100', active: false},
    {name: 'VitaminC', value: 'minVitaminC=10&maxVitaminC=100', active: false},
    {name: 'Fiber', value: 'minFiber=10&maxFiber=100', active: false},
    {name: 'FolicAcid', value: 'minFolicAcid=10&maxFolicAcid=100', active: false},
    {name: 'Fluoride', value: 'minFluoride=10&maxFluoride=100', active: false},
    {name: 'SaturatedFat', value: 'minSaturatedFat=10&maxSaturatedFat=100', active: false},
    {name: 'VitaminD', value: 'minVitaminD=10&maxVitaminD=100', active: false},
    {name: 'VitaminE', value: 'minVitaminE=10&maxVitaminE=100', active: false},
    {name: 'VitaminK', value: 'minVitaminK=10&maxVitaminK=100', active: false},
    {name: 'Iodine', value: 'minIodine=10&maxIodine=100', active: false},
    {name: 'Iron', value: 'minIron=10&maxIron=100', active: false},
    {name: 'Magnesium', value: 'minMagnesium=10&maxMagnesium=100', active: false},
    {name: 'Manganese', value: 'minManganese=10&maxManganese=100', active: false},
    {name: 'Phosphorus', value: 'minPhosphorus=10&maxPhosphorus=100', active: false},
    {name: 'Potassium', value: 'minPotassium=10&maxPotassium=100', active: false},
    {name: 'Selenium', value: 'minSelenium=10&maxSelenium=100', active: false},
    {name: 'Sodium', value: 'minSodium=10&maxSodium=100', active: false},
    {name: 'Sugar', value: 'minSugar=10&maxSugar=100', active: false},
    {name: 'Zinc', value: 'minZinc=10&maxZinc=100', active: false},
    {name: 'Folate', value: 'minFolate=10&maxFolate=100', active: false},
    {name: 'VitaminB1', value: 'minVitaminB1=10&maxVitaminB1=100', active: false},
    {name: 'VitaminB2', value: 'minVitaminB2=10&maxVitaminB2=100', active: false},
    {name: 'VitaminB5', value: 'minVitaminB5=10&maxVitaminB5=100', active: false},
    {name: 'VitaminB6', value: 'minVitaminB6=10&maxVitaminB6=100', active: false},
    {name: 'VitaminB12', value: 'minVitaminB12=10&maxVitaminB12=100', active: false}
  ]

  constructor(
    private service: W3esearviceMainService
    ) { }

  ngOnInit() {
  }

  public getValue(element) {
    this.listsOfIngred.forEach((x) => {
      return x.active = false;
    })
    this.alertMsg = false;
    this.ingredeints = element.value;
    element.active = true;
  }

  // Get all Ingredients
  public generateNutriValue() {
    this.ingredeints = 'minCarbs=10&maxCarbs=100';
    if(this.ingredeints == "undefined") {
      this.loader = false;
      this.alertMsg = true;
    } else {
      this.alertMsg = false;
      this.loader = true;
      this.service.allRecepie(this.ingredeints).subscribe((obs) => {
        this.obj = obs;
        this.loader = false;
      })
    }
  }

  

}
