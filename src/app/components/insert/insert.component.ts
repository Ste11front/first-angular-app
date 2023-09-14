import { Component } from '@angular/core';
import { Student } from 'src/app/model/student';
import { DataService } from 'src/app/services/data.service';
import { RedditService } from 'src/app/services/reddit.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent {

  newStudent: Student = {
    id: -1,
    name: '',
    surname: '',
    age: -1,
    imageUrl: '',
  }

  constructor(private dataServ: DataService, private reddit: RedditService){

    reddit.getPosts().then(posts => console.log(posts));
  }

  saveStudent(){
    this.dataServ.addStudent({...this.newStudent});
    this.newStudent = {
      id: -1,
      name: '',
      surname: '',
      age: -1,
      imageUrl: '',
    }
  }
}
