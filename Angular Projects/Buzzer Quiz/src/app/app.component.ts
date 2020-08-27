import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lesson';
  participants = ['James', 'Julia', 'Martha', 'Steve'];
  questions = [
    {
      text: "What is the capital of India",
      options: ["New Delhi", "London", "Paris", "Tokyo"],
      answer: 1
    },
    {
      text: "What is the capital of France",
      options: ["New Delhi", "New York", "Paris", "Rome"],
      answer: 3
    },
    {
      text: "What is the currency of UK",
      options: ["Dollar", "Mark", "Yen", "Pound"],
      answer: 4
    }, {
      text: "What is the height of Mount Everest",
      options: ["9231 m", "8848 m", "8027 m", "8912 m"],
      answer: 2
    },
    {
      text: "What is the capital of Japan",
      options: ["Beijing", "Osaka", "Kyoto", "Tokyo"],
      answer: 4
    },
    {
      text: "What is the capital of Egypt",
      options: ["Cairo", "Teheran", "Baghdad", "Dubai"],
      answer: 1
    }
  ];
  scoreArr = [0, 0, 0, 0]
  qno = 0;
  msg = '';
  j = null;
  bg(i) {
    if (i == this.j)
      return 'bg-success';
    else
      return 'bg-warning';
  }

  buzzer(i) {
    this.j = i;

  }
  check(i) {
    let ans = this.questions[this.qno].answer;
    if (this.j != null) {
      if (ans - 1 == i) {
        this.scoreArr[this.j] += 3;
        alert('Correct Answer.You get 3 points');
        this.j = null;
        this.qno += 1;
      } else {
        this.scoreArr[this.j] -= 1;
        this.j = null;
        alert('Wrong Answer.You loose 1 point');
        this.qno += 1;
      }
      if (this.qno == this.questions.length) {
        let max = this.scoreArr.reduce((acc, curr) => (acc > curr ? acc : curr), 0);
        let winners = this.scoreArr.map(function (n1, index) { if (n1 == max) return index; });
        winners = winners.filter(n1 => n1 != undefined);

        if (winners.length == 1) {
          this.msg = 'The winner is ' + this.participants[winners[0]];
        } else {
          let str = winners.map(n1 => this.participants[n1]).join(",");
          this.msg = 'There is a tie. The winners are ' + str;
        }
      }
    }
  }
}


