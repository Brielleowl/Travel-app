import { Component, OnInit } from '@angular/core';
export class Traveler {
  public originationAirport: string;
  public destinationAirport: string;
  public travelDate: Date;
  public travelCount: number;
  public travelprice: number;

}

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})

export class TravelComponent implements OnInit{
  constructor(){}
  model = new Traveler();
  ngOnInit(): void{


  }

  onSubmit(form): void{
    this.model.travelprice = this.model.travelCount * 150;
    console.log(form.value);
  }
}


