import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterByIdService {

  id: number = 0;

  constructor(private http: HttpClient) { }

  returnValues() {
    return this.http.get("https://rickandmortyapi.com/api/character/"+this.id);
  }

}
