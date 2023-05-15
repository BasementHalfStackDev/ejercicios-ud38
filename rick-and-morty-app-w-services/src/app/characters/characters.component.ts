import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  // Create variables to store data
  characters: any = null;
  shuffledCharacters: any = null;

  // Add HttpClient
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Get database
    this.http.get<any>('assets/db/database.json').subscribe(data => {
      // Store in characters variable
      this.characters = data.characters;
      // Store shuffled characters in another variable
      this.shuffledCharacters = this.shuffleArray(this.characters);
    }),
      () => {
        console.log("Something went wrong");
      }
    ;}

  // Function to shuffle array using Fisher-Yates algorithm
  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
