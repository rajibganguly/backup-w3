import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sortings"
})
export class SortingLatestPipe  implements PipeTransform {
  transform(array: any[], field: string) {
    const arrayTrueWala = [];
    const arrayFalseWala = [];
        
    if (!Array.isArray(array)) {
      return;
    } else {
        array.filter((res) => {
            if(res['latest'] === true) {
                arrayTrueWala.push(res);
            } else {
                arrayFalseWala.push(res);
            }
        })
    }
    array = [];
    array = [...arrayTrueWala, ...arrayFalseWala];
    
    // console.log(array);
    return array;

    
  }
}