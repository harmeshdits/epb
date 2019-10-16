import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProject } from '../models/IProject';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string;

  constructor(private httpClient: HttpClient) {
  }
  

  getProjectsList(): IProject[] {
    let projects: IProject[] = [{
        "Price": 7.50,
        "Location": "kariba redd+- zimbabwe",
        "Title": "Reduced Emissions from deforestation",
        "Area": 957842,
        "Content": "Protects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor. "
      }, {
        "Price": null,
        "Location": "Arcata Sunnybrae Tract - USA",
        "Title": "Improved Forest Management",
        "Area": 710093,
        "Content": "Preservation of large tract of coastal Redwood and Dauglas fir that were slated for harvesting by the timber company."
      }, {
        "Price": null,
        "Location": "Wolf Creek Landfill - USA",
        "Title": "Landfill Methane Gas Capture",
        "Area": 2005214,
        "Content": "Landfill methane gas-to-energy facility that provides significant environmental benefits to the surrounding area."
      }, {
        "Price": null,
        "Location": "Terrapass Mixed Portfolio - Mixed",
        "Title": "Mixed",
        "Area": 241967,
        "Content": "Greenhouse gas reductions made at a variety of projects, including: reforestation, methane capture, and renewable energy."
      }, {
        "Price": null,
        "Location": "Gaston County Landfill - USA",
        "Title": "Landfill Methane Gas Capture",
        "Area": 721663,
        "Content": "Voluntary collection and destruction of landfill methane in two open flares and three internal combustion engine generators."
      }, {
        "Price": 7.50,
        "Location": "Myamyn Conservation - Australia",
        "Title": "Reforestation & Hyrdopower",
        "Area": 995908,
        "Content": "Supporting biodiversity and reforestration in Victoria, Australia; along with carbon reduction from a hyrdopower plant in Vietnam."
      }, {
        "Price": null,
        "Location": "Natural Pact Land ART - Costa Rica",
        "Title": "Reforestation through Land Art",
        "Area": 327,
        "Content": "Unique 'land art' reforestation and conservation of forests that extend an important biological corridor for many endangered species."
      }, {
        "Price": 22.50,
        "Location": "Nature Lab Urban Forestry - Canada",
        "Title": "Urban Reforestation",
        "Area": 13033,
        "Content": "Rehabilitating degraded urban and sub-urban areas through reforestation, adding significant greenery and restoring biodiversity."
      }];

    return projects;
  }
}
