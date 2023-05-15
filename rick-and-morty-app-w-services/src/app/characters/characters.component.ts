import { Component, OnInit } from '@angular/core';
import { CharactersListService } from '../service/characters-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  // Create variables to store data
  characters: any = null;
  shuffledCharacters: any = null;

  // Add service
  constructor(private charactersService: CharactersListService, private router: Router) { }

  ngOnInit(): void {
    // Get database
    this.charactersService.returnValues().subscribe(data => {
      // Store in characters variable
      this.characters = data;
      // Store shuffled characters in another variable
      this.shuffledCharacters = this.shuffleArray(this.characters.results);
      console.log(this.shuffledCharacters);
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

  readMore(id: number){
    this.router.navigate(['/characters', id]);
  }

}
