import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterByIdService } from '../service/character-by-id.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent {

  // Attribute to store id and character
  id: number = 0;
  character: any = null;

  // Constructor with ActivatedRoute, Service, and Router
  constructor(private route: ActivatedRoute, private characterById: CharacterByIdService, private router: Router) { }

  ngOnInit(): void {
    // Get the id from the route parameters
    this.route.params.subscribe(params => {
      this.id = params['id'];

      // Pass id to service
      this.characterById.id = this.id;

      // Get character from service with passed ID
      this.characterById.returnValues().subscribe(data => {
        this.character = data;
      })

    });
  }

  // Function for back button to return to /characters
  goBack() {
    this.router.navigate(['/characters']);
  }


}
