import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

constructor(private http: HttpClient) { }



public getAPIContent(userid: string){
  // tslint:disable-next-line: prefer-const
  let head = new HttpHeaders();
  head.append('Access-Control-Allow-Methods', 'GET, POST');
  head.append('Access-Control-Allow-Origin', '*');
  head.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  head.append('Content-Type', 'application/json');
  console.log('USER:' + userid);
  // head['Access-Control-Allow-Methods'] = 'GET, POST';
  // head['Access-Control-Allow-Origin'] = '*';
  // return this.http.post('https://www.google.de/', null, {headers: head}); // this.http.get('https://www.google.de');
  return this.http.get('https://swapi.co/api/people/' + userid.toString() + '/', {headers: head});
}

}
