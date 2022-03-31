import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  array = [1,0,1,1,0,0,1]
  constructor(){
    this.count(this.array)
  }

   count(array) {
     console.log('max', Math.max(array))
    var sum = 0;
    let length = array.length;
    for (var i = 0;  i < length; i++) {
      console.log(i);
      sum += Number(array[i]);
      console.log(sum,'test')
    }
    
  console.log('Zero\'s' ,  array.length - sum);
  console.log('One', sum)
  }
}
