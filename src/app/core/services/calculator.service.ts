import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CalculatorService {
    // api: string = 'https://maps.googleapis.com/maps/api/distancematrix/json?key=AIzaSyCvkL4miOBTPwk2BxTKpampmMIjwQfG6f4';
    // private api: string = 'http://www.distance24.org/route.json?stops='

    constructor(private httpClient: HttpClient) {
    }

    getAirportData() {
        return this.httpClient.get("./assets/json/airports.json");
    }

    calculateDistance(source: any, destination: any): number {
        let R = 6371; // Radius of the earth in km
        let dLat = this.deg2rad(destination.Latitude - source.Latitude);  // deg2rad below
        let dLon = this.deg2rad(destination.Longitude - source.Longitude);
        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(source.Latitude)) * Math.cos(this.deg2rad(destination.Latitude)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = R * c; // Distance in km
        return d;
    }

    /* 
      https://www.omnicalculator.com/ecology/flight-emissions#flight-co2-emission-formula
    
      - Amount of CO₂ emitted per one hour of flight per one passenger. We assume, based on the analysis of www.carbonindependent.org, that it is equal to 90 kg/hour per passenger
      - Seat occupancy: the previous value assumes that the airplane is full. This is rarely the case. Worldwide, on the average, the seat occupancy on a regular passenger flight is around 80%. That's the value we take. You can modify it in the advanced mode.
    */

    calculateFootprintsFromDistance(distanceInKM: number, ticketType: string, tripType: string) {
        let aircraftSpeed = 500;
        let durationOfFlight = distanceInKM / aircraftSpeed;

        return this.calcuateFootprintsFromDuration(durationOfFlight, ticketType, tripType);
    }

    calcuateFootprintsFromDuration(durationOfFlight: number, ticketType: string, tripType: string) {
        let emissionPerHourPerPessenger = 90;
        let radiativeForcing = 2;
        let seatOccupancy = 80;

        let emittedCO2InKgs = (durationOfFlight * emissionPerHourPerPessenger * radiativeForcing / seatOccupancy) * 100;

        if(ticketType === 'premium') {
            emittedCO2InKgs = 2 * emittedCO2InKgs;
        }

        if(tripType === 'return') {
            emittedCO2InKgs = 2 * emittedCO2InKgs;
        }

        return emittedCO2InKgs.toFixed(2);
    }

    getHoursFromString(str: string) {
        let dateArr = str.split(/[d,h,m]/).map(x => Number(x.trim()));
        dateArr.pop();

        let days = 0;
        let hours = 0;
        let minutes = 0;

        if(dateArr.length === 3) {
            days = dateArr[0];
            hours = dateArr[1];
            minutes = dateArr[2];
        } else if(dateArr.length === 2) {
            hours = dateArr[0];
            minutes = dateArr[1];
        } else if(dateArr.length === 1) {
            minutes = dateArr[0];
        }

        const secondsFromString = (days > 0 ? days * 86400 : 0) + (hours > 0 ? hours * 3600 : 0) + (minutes > 0 ? minutes * 60 : 0);
        return secondsFromString / 3600;
    }

    private deg2rad(deg) {
        return deg * (Math.PI / 180)
    }

    // getDistanceBetweenPlaces(source: string, destination: string) {
    //     console.log(`${this.api}&origins=${source}&destinations=${destination}`)
    //     return this.httpClient.get(`${this.api}&origins=${source}&destinations=${destination}`);
    // }

    
  // calculateDistance() {
  //   const { source, destination } = this.calculationParams;
  //   var service = new google.maps.DistanceMatrixService();

  //   service.getDistanceMatrix(
  //     {
  //       origins: [source],
  //       destinations: [destination],
  //       travelMode: google.maps.TravelMode.DRIVING,
  //       unitSystem: google.maps.UnitSystem.IMPERIAL,
  //       avoidHighways: false,
  //       avoidTolls: false
  //     }, (response: any, status) => {
  //       if (status != google.maps.DistanceMatrixStatus.OK) {
  //         //$('#result').html(err);
  //       } else {
  //         if (response.rows[0].elements[0].status === "ZERO_RESULTS") {

  //         } else {
  //           const distance = response.rows[0].elements[0].distance;
  //           this.calculateFootprint(distance.value);
  //         }
  //       }
  //     }
  //   );
  // }
}
