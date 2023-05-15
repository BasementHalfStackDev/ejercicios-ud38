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

  id: number = 0;

  character: any = null;

  constructor(private route: ActivatedRoute, private characterById: CharacterByIdService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.characterById.id = this.id;

      this.characterById.returnValues().subscribe(data => {
        this.character = data;
      })

    });
  }

  goBack() {
    this.router.navigate(['/characters']);
  }


}
