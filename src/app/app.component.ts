import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  // title = 'material-demo';
  // notifications = 0;
  // showSpinner = false;
  // opened = false;
  // slectedValue: string | undefined;
  // options: string[] = ['Angular', 'React', 'Vue'];
  // objectOptions = [
  //   { name: 'Angular' },
  //   { name: 'React' },
  //   { name: 'Angular Material' },
  //   { name: 'Vue' },
  // ];
  // myControl = new FormControl();
  // filteredOptions: Observable<string[]> | undefined;
  // radioValue: string | undefined;
  minDate = new Date();
  maxDate = new Date(2022,1,22);

  dateFilter = (date:any) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: any) {
    this.snackBar.open(message)
  }

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

  ngOnInit(): void {
      // this.filteredOptions = this.myControl.valueChanges.pipe(
      //   startWith(''),
      //   map(value => this._filter(value)),
      // )
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //   return this.options.filter(option => {
  //     option.toLowerCase().includes(filterValue)
  //   })
  // }

  // displayFn(subject: any) {
  //   return subject ? subject.name : undefined;
  // }
}
