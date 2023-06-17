import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  // if this was a real project that was going to be released for public use then obviously this would handle a bunch more cases
  // that doesn't seem like a good use of my time for now though so I'm leaving this to show off that I know how pipes work and how to make them
  transform(rawNum: string): string {
    rawNum = rawNum.replace(" ", "")
    if (rawNum.length === 11 && rawNum[0] === "0" && rawNum[1] === "7") 
      return `${rawNum.substring(0, 5)} ${rawNum.substring(5, 8)} ${rawNum.substring(8)}`
    return rawNum
  }

}
