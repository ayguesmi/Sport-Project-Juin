import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {
  // ch:string = "azerty" ;
  transform(ch: string): any {

    let Tab = ["a", "e", "i", "o", "y", "u", "A", "E", "I", "O", "Y", "U"];
    let Tab2 = "";
    for (let i = 0; i < ch.length; i++) {
      var t = false;
      for (let j = 0; j < Tab.length; j++) {
        if (ch[i] == Tab[j]) {
          Tab2 = Tab2 + '*'
          var t = true;
          break;
        }
      }
      if (!t) {
        Tab2 = Tab2 + ch[i];
      }
    }
    console.log(Tab2);
  }
}
