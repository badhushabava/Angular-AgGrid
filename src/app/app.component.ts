import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular, ICellRendererAngularComp } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, ICellRendererParams } from 'ag-grid-community';
import { MyCellComponent } from './my-cell/my-cell.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {

  }
  title = 'Angular-AgGrid';
  isTrue=true;
  columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'Name', cellRenderer:MyCellComponent  },
    { field: 'Age' ,cellRenderer:(params:ICellRendererParams)=>{
    if(params.value>=25)
    {
      return `<div style="color:green">${params.value} years </div>`;
    }
    else
    {
      return `<div style="color:red">${params.value} years </div>`;
    }
  }},
    { field: 'Email'},
    { field: 'Location'}
];

defaultColDef={filter: true ,sortable:true,resizable: true,floatingFilter: true};
gridOptions = {pagination: true,paginationPageSize: 14};
rowData =[
  {
    id: 1,
    Email: "john.doe@example.com",
    Age: 27,
    Name: "John Doe",
    Location: "New York City"
  },
  {
    id: 2,
    Email: "jane.smith@example.com",
    Age: 33,
    Name: "Jane Smith",
    Location: "Los Angeles"
  },
  {
    id: 3,
    Email: "mike.johnson@example.com",
    Age: 22,
    Name: "Mike Johnson",
    Location: "Chicago"
  },
  {
    id: 4,
    Email: "sarah.lee@example.com",
    Age: 29,
    Name: "Sarah Lee",
    Location: "Houston"
  },
  {
    id: 5,
    Email: "tommy.nguyen@example.com",
    Age: 25,
    Name: "Tommy Nguyen",
    Location: "Miami"
  },
  {
    id: 6,
    Email: "megan.kim@example.com",
    Age: 31,
    Name: "Megan Kim",
    Location: "San Francisco"
  },
  {
    id: 7,
    Email: "jake.lee@example.com",
    Age: 28,
    Name: "Jake Lee",
    Location: "Boston"
  },
  {
    id: 8,
    Email: "emily.chen@example.com",
    Age: 24,
    Name: "Emily Chen",
    Location: "Seattle"
  },
  {
    id: 9,
    Email: "ashley.brown@example.com",
    Age: 30,
    Name: "Ashley Brown",
    Location: "Denver"
  },
  {
    id: 10,
    Email: "alex.wilson@example.com",
    Age: 32,
    Name: "Alex Wilson",
    Location: "Atlanta"
  },
  {
    id: 11,
    Email: "olivia.jones@example.com",
    Age: 23,
    Name: "Olivia Jones",
    Location: "Austin"
  },
  {
    id: 12,
    Email: "ethan.baker@example.com",
    Age: 27,
    Name: "Ethan Baker",
    Location: "San Diego"
  },
  {
    id: 13,
    Email: "chloe.wang@example.com",
    Age: 29,
    Name: "Chloe Wang",
    Location: "Portland"
  },
  {
    id: 14,
    Email: "kevin.kim@example.com",
    Age: 24,
    Name: "Kevin Kim",
    Location: "Nashville"
  },
  {
    id: 15,
    Email: "laura.lee@example.com",
    Age: 28,
    Name: "Laura Lee",
    Location: "Memphis"
  },
  {
    id: 16,
    Email: "ryan.chen@example.com",
    Age: 26,
    Name: "Ryan Chen",
    Location: "Dallas"
  },
  {
    id: 17,
    Email: "sophia.davis@example.com",
    Age: 31,
    Name: "Sophia Davis",
    Location: "Phoenix"
  },
  {
    id: 18,
    Email: "tyler.brown@example.com",
    Age: 33,
    Name: "Tyler Brown",
    Location: "Washington DC"
  },
  {
    id: 19,
    Email: "emma.wilson@example.com",
    Age: 30,
    Name: "Emma Wilson",
    Location: "Las Vegas"
  },
  {
    id: 20,
    Email: "dylan.jones@example.com",
    Age: 25,
    Name: "Dylan Jones",
    Location: "San Antonio"
  },
  {
    id: 21,
    Email: "lily.baker@example.com",
    Age: 27,
    Name: "Lily Baker",
    Location: "Charlotte"
  },
  {
    id: 22,
    Email: "brandon.wang@example.com",
    Age: 24,
    Name: "Brandon Wang",
    Location: "San Jose"
  },
  {
    id: 23,
    Email: "hannah.kim@example.com",
    Age: 26,
    Name: "Hannah Kim",
    Location: "Indianapolis"
  },
  {
    id: 24,
    Email: "tyler.lee@example.com",
    Age: 29,
    Name: "Tyler Lee",
    Location: "Columbus"
  },
  {
    id: 25,
    Email: "emily.chen@example.com",
    Age: 32,
    Name: "Emily Chen",
    Location: "Milwaukee"
  },
  {
    id: 26,
    Email: "michael.davis@example.com",
    Age: 23,
    Name: "Michael Davis",
    Location: "Baltimore"
  },
  {
    id: 27,
    Email: "ashley.brown@example.com",
    Age: 31,
    Name: "Ashley Brown",
    Location: "Fort Worth"
  },
  {
    id: 28,
    Email: "alex.wilson@example.com",
    Age: 27,
    Name: "Alex Wilson",
    Location: "Charlotte"
  },
  {
    id: 29,
    Email: "olivia.jones@example.com",
    Age: 30,
    Name: "Olivia Jones",
    Location: "El Paso"
  },
  {
    id: 30,
    Email: "ethan.baker@example.com",
    Age: 28,
    Name: "Ethan Baker",
    Location: "New Orleans"
  },
  {
    id: 31,
    Email: "chloe.wang@example.com",
    Age: 38,
    Name: "Chloe Wang",
    Location: "Belgium"
  },
  {
    id: 32,
    Email: "michael.davis@example.com",
    Age: 26,
    Name: "Michael Davis",
    Location: "Philadelphia"
  }
];

name:any;
age:any;
email:any;
location:any;

onCellClicked(event:CellClickedEvent)
{
  this.isTrue=false;
  this.name=event.data.Name;
  this.age=event.data.Age;
  this.email=event.data.Email;
  this.location=event.data.Location;
}

@ViewChild(AgGridAngular) agGrid!: AgGridAngular;

onClear()
{
  this.agGrid.api.deselectAll();
  this.isTrue=true;
}

}
