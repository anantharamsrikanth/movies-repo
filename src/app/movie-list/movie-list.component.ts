import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Movie } from './../model/movie.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public iseditmodal = false;
  public movies: any = '';
  oldata: any = '';
  private currentIndex: number;

  constructor(private dataService: DataService, private router: Router) {


  }

  ngOnInit() {
    // this.dataService.getMovies();
    this.dataService.getMovies().subscribe((res: any) => {
      this.movies = res.Search;
      console.log(this.movies);
    });
    this.dataService.currentMessage.subscribe(movies => this.movies = movies);

    // let data=this.dataService.movies;
    // this.movies= data;
    // this.movies=data
    // .subscribe(res => {
    //   console.log(res);
    //   // let data=res.Search;
    //   this.movies.push(res['Search']);

    //   console.log((res['Search']))
    // })
    //   // .then(res => this.movies = res.Search);

    // this.movies = this.dataService.getAll();
    // console.log()
  }

  editdetails(movieold: Movie, index: number) {
    this.currentIndex = index;
    this.iseditmodal = true;
    this.oldata = movieold;
  }
  updateddata(changedData) {
    // this.movies.forEach(function(e){
    //   if(e.imdbID === updated.id){
    //     return updated.edited;

    //   }

    // })
    this.movies.splice(this.currentIndex, 1, changedData.edited);
  }




  deleteMovie(index: number): void {
    if (confirm('Are you sure to delete this movie ?')) {
      this.movies.splice(index, 1);
    }
  }
}



