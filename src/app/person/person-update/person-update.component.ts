import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Person } from '../person.component';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-person-update',
  templateUrl: './person-update.component.html',
  styleUrl: './person-update.component.css'
})
export class PersonUpdateComponent implements OnInit {
  formperson: FormGroup;
  data: any;
  name: String;


  constructor(private formbuilder: FormBuilder, private route: ActivatedRoute, private http: HttpClient,private _route:Router) {

  }

  ngOnInit(): void {
    this.formperson = this.formbuilder.group({
      name: [""],
      surname: [""],
      age: [""],
      email: [""]
    });
    this.getData();
    console.log(this.data);

  }
  id: Int16Array
  getData() {
    this.route.params.subscribe(x => {
      this.id = x["id"];
    });
    return this.http.get("http://localhost:3000/person/" + this.id).subscribe((person) => {
      this.data = person;
    });
  }

  onSubmit(data: Person) {
      this.http.put("http://localhost:3000/person/" + this.id,data).subscribe((pers)=>{
        if(pers)
        {
          this._route.navigate(["/person"]);
        }
      });
  }

}
