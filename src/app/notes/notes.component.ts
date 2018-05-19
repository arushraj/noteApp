import { Component, OnInit } from '@angular/core';

import { Note } from '../models/note.model';
import { DataService } from '../Service/app.Service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note[];
  constructor(private service: DataService) {
    this.getNotes();
  }

  ngOnInit() {
  }

  getNotes() {
    this.service.getNotes()
      .subscribe(notes => this.notes = notes);
  }

}
