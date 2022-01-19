import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'material-demo';
  // notifications = 0;
  // showSpinner = false;
  // opened = false;
  // slectedValue: string | undefined;
  options: string[] = ['Angular', 'React', 'Vue'];
  objectOptions = [
    {name: 'Angular'},
    { name: 'React'},
    { name: 'Angular Material'},
    { name: 'Vue'},
  ]

  // loadData() {
  //   this.showSpinner = true;
  //   setTimeout(()=> {
  //     this.showSpinner = false;
  //   }, 5000)
  // }

  // log(state: any) {
  //   console.log(state);
  // }

  // logChange(index: any){
  //   console.log(index)
  // }

  displayFn(subject: any) {
    return subject ? subject.name : undefined;
  }
}
