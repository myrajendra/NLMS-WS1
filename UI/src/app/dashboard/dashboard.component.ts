import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  dashboard_data = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }


}

export interface Dashboard{
  main_title:string,
  _view: SubView[] 
}

export interface SubView{
  title:string,
  total_title:string,
  total_count:number,
  day_count:string,
  month_count:string,
  year_count:string
}

const ELEMENT_DATA: Dashboard[] = [
  {
    main_title:"Financial Year :  2018-2019",
    _view:[
      {
        title:"Total",
        total_title:"No.of Registrations",
        total_count:640216,
        day_count:"Day : 251",
        month_count: "Month : 1",
        year_count: "Year : 1"
      },
      {
        title:"Sunandini",
        total_title:"No.of Applications",
        total_count:11709,
        day_count:"Day : 0",
        month_count: "Month : 0",
        year_count: "Year : 0"
      },
      {
        title:"Sunandini",
        total_title:"Sanctioned Beneficiaries",
        total_count:348,
        day_count:"Day : 0",
        month_count: "Month : 0",
        year_count: "Year : 0"
      },
      {
        title:"Sheep",
        total_title:"No. of Applications",
        total_count:373550,
        day_count:"Day : 11",
        month_count: "Month : 518",
        year_count: "Year : 3010"
      },
      {
        title:"Sheep",
        total_title:"No.of Beneficiary Contribution",
        total_count:291900,
        day_count:"Day : 140",
        month_count: "Month : 9650",
        year_count: "Year : 52495"
      },
      {
        title:"Sheep",
        total_title:"No.of Sanctioned Beneficiaries",
        total_count:284557,
        day_count:"Day : 20",
        month_count: "Month : 2412",
        year_count: "Year : 11586"
      },
      {
        title:"Fisheries",
        total_title:"No.of Societies",
        total_count:4245,
        day_count:"Day : 0",
        month_count: "Month : 150",
        year_count: "Year : 268"
      },
      {
        title:"Fisheries",
        total_title:"No.of Water bodies",
        total_count:25499,
        day_count:"Day :",
        month_count: "Month :",
        year_count: "Year :"
      },
      {
        title:"Fisheries",
        total_title:"Seed Stocked Water bodies",
        total_count:11074,
        day_count:"Day : 0",
        month_count: "Month : 1",
        year_count: "Year : 1"
      }
    ]
  },
  {
    main_title:"Fisheries Registration/Components : 109744/195945 Registrations",
    _view:[
      {
        title:"Individual",
        total_title:"No.of Registrations",
        total_count:108804,
        day_count:"Day : 108",
        month_count: "Month : 64539",
        year_count: "Year : 108804"
      },
      {
        title:"Group",
        total_title:"No.of Registrations",
        total_count:528,
        day_count:"Day : 1",
        month_count: "Month : 356",
        year_count: "Year : 528"
      },
      {
        title:"Society",
        total_title:"No.of Registrations",
        total_count:1203,
        day_count:"Day : 2",
        month_count: "Month : 713",
        year_count: "Year : 1203"
      },
      {
        title:"DFCS",
        total_title:"No.of Registrations",
        total_count:8,
        day_count:"Day : 0",
        month_count: "Month : 5",
        year_count: "Year : 8"
      }
    ]
  },
  {
    main_title:"Components",
    _view:[
      {
        title:"Individual",
        total_title:"No.of Components",
        total_count:193994,
        day_count:"Day : 228",
        month_count: "Month : 123877",
        year_count: "Year : 193994"
      },
      {
        title:"Group",
        total_title:"No.of Components",
        total_count:528,
        day_count:"Day : 3",
        month_count: "Month : 474",
        year_count: "Year : 528"
      },
      {
        title:"Society",
        total_title:"No.of Components",
        total_count:1401,
        day_count:"Day : 4",
        month_count: "Month : 1064",
        year_count: "Year : 1401"
      },
      {
        title:"DFCS",
        total_title:"No.of Components",
        total_count:24,
        day_count:"Day : 0",
        month_count: "Month : 18",
        year_count: "Year : 24"
      }
    ]
  },
  {
    main_title:"Dairy Farmers Registered For Milk Incentive Scheme : 194028",
    _view:[
      {
        title:"TSDDCF Ltd",
        total_title:"No.of Registrations",
        total_count:69496,
        day_count:"Day : 84",
        month_count: "Month : 1098",
        year_count: "Year : 8699"
      },
      {
        title:"NARMUL Dairy",
        total_title:"No.of Registrations",
        total_count:43189,
        day_count:"Day : 11",
        month_count: "Month : 143",
        year_count: "Year : 704"
      },
      {
        title:"Karimnagar Dairy",
        total_title:"No.of Registrations",
        total_count:61797,
        day_count:"Day : 31",
        month_count: "Month : 794",
        year_count: "Year : 9092"
      },
      {
        title:"Mulkanoor WCD",
        total_title:"No.of Registrations",
        total_count:19546,
        day_count:"Day : 1",
        month_count: "Month : 24",
        year_count: "Year : 228"
      }
    ]
  }
];
