import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
 searchText:any;
 

details=[
  
  {id:22,orderNumber:1,orderplacedby:"jeeva",numberofproduct:"3",productdetail:"phone",color:'#CD853F'},
  {id:23,orderNumber:2,orderplacedby:"samyu",numberofproduct:"5",productdetail:"pant",color:'#CD5C5C'},
  {id:24,orderNumber:3,orderplacedby:"aakash",numberofproduct:"1",productdetail:"shirt",color:'#FF0000'},
  {id:25,orderNumber:4,orderplacedby:"ram",numberofproduct:"7",productdetail:"watch",color:'#FF1493'},
  {id:26,orderNumber:5,orderplacedby:"sameer",numberofproduct:"3",productdetail:"belt",color:'#00FA9A'},
  {id:2,orderNumber:6,orderplacedby:"nisanth",numberofproduct:"9",productdetail:"belt",color:'#A52A2A'},
  {id:12,orderNumber:7,orderplacedby:"hari",numberofproduct:"11",productdetail:"phone",color:'#9ACD32'},
  {id:21,orderNumber:8,orderplacedby:"muthu pandi",numberofproduct:"12",productdetail:"bag",color:'#FFA500'},
  {id:14,orderNumber:9,orderplacedby:"samyu",numberofproduct:"90",productdetail:"pen",color:'#B8860B'},
  {id:16,orderNumber:10,orderplacedby:"gowtham",numberofproduct:"45",productdetail:"keychain",color:'#FF00FF'},
  {id:18,orderNumber:11,orderplacedby:"gokul",numberofproduct:"2",productdetail:"chain",color:'#D3D3D3'},
  {id:1,orderNumber:12,orderplacedby:"mani",numberofproduct:"6",productdetail:"shoe",color:'#708090'},
  {id:4,orderNumber:13,orderplacedby:"jai",numberofproduct:"21",productdetail:"slippers",color:'#483D8B'},
  {id:8,orderNumber:14,orderplacedby:"dhina",numberofproduct:"3",productdetail:"juice",color:'#FFFFFF'},
  {id:10,orderNumber:15,orderplacedby:"vicky",numberofproduct:"2",productdetail:"biskets",color:'#ADFF2F'},

]

  constructor() { }

  ngOnInit(): void {
  }

}
