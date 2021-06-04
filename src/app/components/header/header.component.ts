import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchText="";
  @ViewChild("focusTrg") el:ElementRef;

  constructor(private router:Router) { }
  
  ngOnInit(): void {
  }

  submit(text:string){
    this.router.navigate(['/movies'],{queryParams:{q:text}});
    this.el.nativeElement.blur();
  }
}
