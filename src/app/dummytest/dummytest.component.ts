import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { from } from 'rxjs';
import { MatSnackBar, MatDialog } from '@angular/material';
import { CustomSnackBarComponent } from '../components/custom-snack-bar/custom-snack-bar.component';
import { CustomDialogComponent } from '../components/custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-dummytest',
  templateUrl: './dummytest.component.html',
  styleUrls: ['./dummytest.component.scss']
})
export class DummytestComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  notification: string = '1';
  showSpinner = false;
  selectedValue: string;
  options: string[] = ['Angular', 'React', 'Python'];
  optionsObject = [{ name: 'Angular' }, { name: 'React' }, { name: 'Python' }];
  formsControl = new FormControl();
  filteredOptions: Observable<string[]>;
  minDate = new Date();
  maxDate = new Date(2019, 3, 20);
  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {}

  ngOnInit() {
    this.filteredOptions = this.formsControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLocaleLowerCase();
    return this.options.filter(option =>
      option.toLocaleLowerCase().includes(filterValue)
    );
  }
  loadData() {
    this.showSpinner = true;

    setTimeout(() => {
      this.showSpinner = false;
    }, 3000);
  }
  logChange(index) {
    console.log(index);
  }

  displayFn(subject) {
    return subject ? subject.name : undefined;
  }
  dateFilter = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  openSnackBar(message, action) {
    const snackBarRef = this.snackBar.open(message, action, { duration: 2000 });
    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snack bar was dismissed');
    });
    snackBarRef.onAction().subscribe(() => {
      console.log('the snackbar action was triggered');
    });
  }
  openCustomSnackBar() {
    this.snackBar.openFromComponent(CustomSnackBarComponent, {
      duration: 2000
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      data: { name: 'Bruce Wayne' }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog Result :${result}`);
    });
  }
}
