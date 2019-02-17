import { Movie } from './../model/movie.model';
import { Router } from '@angular/router';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import uuid from 'uuid';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  movies: Movie[];
  closeaddmodal: boolean;


  constructor(private formBuilder: FormBuilder, private dataService: DataService, private router: Router) { }

  addForm: FormGroup;


  ngOnInit() {

    // this.addForm = new FormGroup({
    //   firstName: new FormControl(''),
    //   lastName: new FormControl(''),
    // });


    this.addForm = new FormGroup({
      imdbID: new FormControl(),
      Title: new FormControl('', Validators.required),
      Year: new FormControl('', Validators.required),
      Director: new FormControl('', Validators.required),
      Genre: new FormControl('', Validators.required),
      Poster: new FormControl('', Validators.required)
    });
  }



  onSubmit() {
    const movie = this.addForm.value as Movie;
    // you need to generate a uuid for every new entry
    //movie.imbdID = uuid.v4();

    this.dataService.add(movie);
    this.closeaddmodal = false;

  }
}
