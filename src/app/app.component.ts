import { Component } from '@angular/core';
import { faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'note-making-app';
  edit = faPenToSquare
  Close = faXmark
  ChangeColor=true
  notesArray:any = [];
  addNotes(item:any){
    if(item){
      this.notesArray.push(item);
    }
    else{
      alert("Please Enter something")
    }
  }
  deleteNotes(id:number){
    this.notesArray.splice(id, 1);
  }
  editNotes(){
    console.log("Note Button is pressed")
  }
}
