import { Component, Prop } from "@stencil/core";
import { wordList } from "../../../assets/data/vocabulary";

@Component({
  tag: "multiple-choice",
  styleUrl: "mulitple-choice.css",
  shadow: true
})
export class MultipleChoice {
  @Prop() vocabulary = wordList;
  @Prop({ mutable: true }) questions: any[];
  @Prop({ mutable: true }) dimBackground: boolean;

  componentWillLoad() {
    console.log("will load");
    // for (let index = 0; index < this.vocabulary.length; index++) {
    let qs = [];
    for (let index = 0; index < 1; index++) {
      let correct = this.vocabulary[index];
      // qs.push(this.vocabulary[index]);

      let wrongAnswers = [];
      for (let wrong = index + 1; wrong < index + 4; wrong++) {
        wrongAnswers.push(this.vocabulary[wrong]);
      }
      qs.push({ correct: correct, wrong: wrongAnswers });
      this.questions = qs;
      // qs.push(wrongAnswers);
    }
    console.log(qs);
  }

  render() {
    return [
      <div class="section-title">
        {/* <h3 class="h1">Exercises Multiple Choice</h3> */}
      </div>,
      <div class="main-container">
        {this.questions.map(item => (
          <div class="question-card">
            {/* <div class="target"> */}
            <div class={this.dimBackground ? "target-dimmed" : "target"}>
              {item.correct.meaning}
            </div>
            <div class={this.dimBackground ? "answer-dimmed" : "answer"}>
              {item.correct.word}
            </div>
            {item.wrong.map(wrong => (
              <div class={this.dimBackground ? "answer-dimmed" : "answer"}>
                {wrong.word}
              </div>
            ))}
          </div>
        ))}
      </div>
    ];
  }
}
