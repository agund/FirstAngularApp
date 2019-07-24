import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { APIService } from './../API.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public header = 'Test Conent';
  public counter = 0;
  public googleCode = '';
  @Input()
  public userid = '1';

  constructor(private apiService: APIService) { }

  ngOnInit() {
  }

  onEnter(value: string) {
    this.userid = value.toString();
    this.getGoogle();
  }


  public counterNext(): void {
    // alert("test");
    this.counter = this.counter + 1;
  }

    public getGoogle(): void {
      // this.userid = ('#uid').val();
      this.apiService.getAPIContent(this.userid).subscribe((data: string) => this.googleCode = data
      , error => console.log(error)
      ,() => {
        console.log('finished');
      });
    }


}
