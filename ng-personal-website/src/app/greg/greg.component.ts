import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greg',
  templateUrl: './greg.component.html',
  styleUrls: ['./greg.component.css']
})
export class GregComponent implements OnInit {

	GregCv = {
		Name: 'Greg Doud',
		Role: 'Instructor',
		Technology: 'DotNet'
	};

	constructor() { }

	ngOnInit() {
	}

}
