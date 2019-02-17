import { Router } from '@angular/router';
import { Movie } from './../model/movie.model';
import { DataService } from './../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { first } from "rxjs/operators";

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnChanges {
  @Input() editmovie: any;
  @Input() ismodaledit: boolean;

  @Output() emitchanges = new EventEmitter();
  // ismodaledit
  constructor(private formBuilder: FormBuilder, private dataService: DataService, private router: Router) {


    this.editForm = this.formBuilder.group({
      // imdbID: [],
      Title: ['', Validators.required],
      Year: ['', Validators.required],
      Director: ['', Validators.required],
      imdbID: ['', Validators.required],
      Poster: ['', Validators.required],
      Type: ['', Validators.required]
    });

  }

  editForm: FormGroup;
  movies: Movie[];


  ngOnChanges() {
    // this.editForm.setValue({
    //   Title :this.editmovie.Title,
    //   Year : this.editmovie.Year,
    //   Director : this.editmovie.Director,
    //   Runtime : this.editmovie.Runtime,
    // })


    this.editForm.patchValue(this.editmovie);

  }
  update(id, edited) {
    this.emitchanges.emit({ id, edited });
    this.ismodaledit = false;
  }

  onSubmit() {
    // if(this.editForm!.valid){
    // this.editForm.reset();
    this.ismodaledit = false;
    // }
    // this.dataService.updateMovie(this.editForm.value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.router.navigate(['movie-list']);
    //     },
    //     error => {
    //       alert(error);
    //     });
  }
}
