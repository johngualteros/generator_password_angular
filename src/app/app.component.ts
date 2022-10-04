import { Component } from '@angular/core';
import { Password } from './password';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'generator_password_angular';

  password: Password = {
    length: 8,
    includeLetters: false,
    includeNumbers: false,
    includeSymbols: false,
  };
  generatedPassword: string = '';
  alphabet: string[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  values: string [] = [...this.alphabet];
  numbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  uppercase: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  symbols: string[] = [
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '+',
    '-',
    '=',
    '{',
    '}',
    '[',
    ']',
    '|',
    ':',
    ';',
    '<',
    '>',
    '?',
    '/',
    '`',
    '~',
  ];
  constructor() {}

  onSubmit() {
    this.password;
    this.generatePassword(this.password);
  }

  generatePassword(password: Password) {
    let generatedPassword: string = '';
    if(password.includeLetters){
      this.values.push(...this.uppercase);
    }
    if(password.includeNumbers){
      this.values.push(...this.numbers);
    }
    if(password.includeSymbols){
      this.values.push(...this.symbols);
    }
    for (let i = 0; i < password.length; i++) {
      const index = Math.floor(Math.random() * this.values.length);
      generatedPassword += this.values[index];
    }
    this.generatedPassword = generatedPassword;
  }
}
