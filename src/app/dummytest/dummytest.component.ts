import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit() {}

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
