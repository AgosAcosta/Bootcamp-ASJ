import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primos',
})
export class PrimePipe implements PipeTransform {
  transform(numbers: number[]): number[] {
    return numbers.filter((value) => this.primo(value));
  }

  private primo(num: number): boolean {
    for (let i = 2; i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }
}
