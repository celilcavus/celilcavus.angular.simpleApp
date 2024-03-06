import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent implements OnInit {
  data: any;
  formPerson: FormGroup;


  constructor(private formbuilder: FormBuilder, private _data: HttpClient, private route: Router) {

  }


  ngOnInit(): void {
    this.formPerson = this.formbuilder.group({
      name: [""],
      surname: [""],
      email: [""],
      age: [""]
    });

    this.getData();
  }



  onSubmit(data: Person) {
    const values = data;
    this._data.post<Person>("http://localhost:3000/person", values).subscribe((response) => {
     if (response) {
      this.getData();
     }
    });
  }

  getData() {
    return this._data.get("http://localhost:3000/person").subscribe((data) => {
      this.data = data;
    });
  }

  delete(id: Int32Array) {
    this._data.delete("http://localhost:3000/person/" + id).subscribe(() => {
      this.getData();
    });
  }
  get(id: Int32Array) {

    this._data.get<Person>("http://localhost:3000/person/" + id).subscribe((personData) => {
      this.route.navigate(['/person/'+id]);
    })
  }
}


export class Person {

  public name: String;
  public surname: String;
  public email: String;
  public age: Int16Array;
}