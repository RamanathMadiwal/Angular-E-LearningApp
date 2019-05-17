import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { from } from 'rxjs';

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
  constructor() {}

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
}
