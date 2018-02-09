import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
// PARA EL MAP
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";

@Injectable()
export class SpotifyService {
  
  artists: any[] = [];
  tracks: any[] = [];

  urlSpotify: string = "https://api.spotify.com/v1/";
  token: string = "BQAhWYH6kCK2gTuNbI68GmsWt-NBlUXq8ANN1wTDiuBJlmZJbccVuQYVDLMY__pHeaEAOK_apctcMvaAPxk";
  constructor(public http: HttpClient) {
    console.log("spoti service ready");
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      authorization: "Bearer " + this.token
    });

    return headers;
  }

  getArtist(id: string) {
    let url = `${this.urlSpotify}artist/${id}`;

    let headers = this.getHeaders();

    //  {headers} es la info que mandamo en el header (headers:headers)
    return this.http.get(url, { headers })
    .map((resp: any) => {
      this.artists = resp.artist.items;
      return this.artists;
    });
  }

  getArtists(termino: string) {
    let url = `${this.urlSpotify}search?query=${termino}&type=artist&market=ES&offset=0&limit=20`;

    let headers = this.getHeaders();

    //  {headers} es la info que mandamo en el header (headers:headers)
    return this.http.get(url, { headers })
    .map((resp: any) => {
      this.artists = resp.artists.items;
      return this.artists;
    });
    
  }

  getTop(id:string){
    let url =  `${this.urlSpotify}artists/${id}/top-tracks`;

    let headers = this.getHeaders();

    return this.http.get(url, { headers })
    .map((resp: any) => {
      this.artists = resp.artists.items;
      return this.artists;
    });
    }




  }
