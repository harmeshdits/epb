import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '@app/core/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  airportsList: any = [];
  sourceSearchList: any = [];
  destinationSearchList: any = [];
  footPrint: any;

  calculationParams: any = {
    source: null,
    destination: null,
    ticketType: 'economy',
    tripType: 'oneway'
  };


  constructor(
    private calculatorService: CalculatorService
  ) { }

  ngOnInit() {
    this.calculatorService.getAirportData().subscribe(response => {
      this.airportsList = response;
    });
  }

  onSourceChangeSearch(val: string) {
    this.sourceSearchList = this.filterAirportList(val);
  }

  onDestinationChangeSearch(val: string) {
    this.destinationSearchList = this.filterAirportList(val);
  }

  filterAirportList(val: string) {
    let lowerCaseValue = val.toLowerCase();
    return this.airportsList.filter(x => {
      return (x.IATA && x.IATA.toLowerCase().indexOf(lowerCaseValue) !== -1) ||
        (x.Name && x.Name.toLowerCase().indexOf(lowerCaseValue) !== -1) ||
        (x.City && x.City.toLowerCase().indexOf(lowerCaseValue) !== -1) ||
        (x.Country && x.Country.toLowerCase().indexOf(lowerCaseValue) !== -1);
    }).slice(0, 20);
  }

  selectedSource(e) {
    this.calculationParams.source = e;
    this.calculate();
  }

  selectedDestination(e) {
    this.calculationParams.destination = e;
    this.calculate();
  }

  clearSource() {
    this.calculationParams.source = null;
    this.calculate();
  }

  clearDestination() {
    this.calculationParams.destination = null;
    this.calculate();
  }

  calculate() {
    const { source, destination, ticketType, tripType } = this.calculationParams;
    debugger;

    if (source && destination) {
      const distance = this.calculatorService.calculateDistance(source, destination);

      this.footPrint = this.calculatorService.calculateFootprintsFromDistance(distance, ticketType, tripType);
    } else {
      this.footPrint = null;
    }
  }

  scrapValuesFromXpedia() {
    let title = "Return Flight"; //this.getElementFromSelector('#trip-summary > div.product-summary > div > a').innerText;

    let tripType = null;
    if (title.toLowerCase().indexOf('return') !== -1) {
      tripType = 'return';
    }

    // let filghtTimeInHours = 0;
    // document.querySelectorAll('#flight-details .flight-leg-information').forEach((element) => {
    //   let duration = (element.querySelector(".duration") as HTMLInputElement).innerText;
    //   filghtTimeInHours += this.calculatorService.getHoursFromString(duration.replace(/,\s*$/, ""))
    // }); 

    let duration = "42h 25m,"; //this.getElementFromSelector('#flight-details div.duration-stop-information > span.duration').innerText;
    let filghtTimeInHours = this.calculatorService.getHoursFromString(duration.replace(/,\s*$/, ""));

    debugger;
    this.footPrint = this.calculatorService.calcuateFootprintsFromDuration(filghtTimeInHours, null, tripType);
  }

  getElementFromSelector(selector: string): HTMLInputElement {
    return document.querySelector(selector) as HTMLInputElement;
  }
}
