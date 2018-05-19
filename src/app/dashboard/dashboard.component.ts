import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note.model';
import { DataService } from '../Service/app.Service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  notes: Note[];

  constructor(private service: DataService) {
    this.getNotes();
  }

  ngOnInit() {
  }

  getNotes(): void {
    this.service.getNotes()
      .subscribe(notes => this.notes = notes.slice(1, 5));
  }
}
