import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { ConditionalExpr } from '@angular/compiler';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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
  // minDate = new Date();
  // maxDate = new Date(2022, 1, 22);

  // dateFilter = (date: any) => {
  //   const day = date.getDay();
  //   return day !== 0 && day !== 6;
  // };

  displayedColumns: string[] = ['position', 'name', 'symbol', 'weight'];
  displayedColumnsData: string[] = ['position', 'name', 'symbol'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA)

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {}

  logData(row: any) {
    console.log(row)
  };

  // openDialog() {
  //   let dialogRef = this.dialog.open(DialogExampleComponent, {data: {name:'Bob'}});

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log(`Dialog result: ${result}`)
  //   });
  // }

  // openSnackBar(message: any, action: any) {
  //   let snackBarRef = this.snackBar.open(message, action, { duration: 2000 });

  //   snackBarRef.afterDismissed().subscribe(() => {
  //     console.log('The snackbar was dismissed');
  //   });

  //   snackBarRef.onAction().subscribe(() => {
  //     console.log('The snackbar action was triggered!');
  //   });
  // }

  // openCustomSnackBar() {
  //   this.snackBar.openFromComponent(CustomSnackBarComponent, { duration:2000 });
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

@Component({
  selector: 'custom-snackbar',
  template: `<span style="color: orange">Custom SnackBar</span>`,
})
export class CustomSnackBarComponent {}
