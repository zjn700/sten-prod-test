import { Component, Prop, State, Event, EventEmitter } from "@stencil/core";
import { wordList } from "../../../assets/data/vocabulary";
import { shuffle } from "../../../global/utilities";

@Component({
  tag: "multiple-choice",
  styleUrl: "mulitple-choice.css",
  shadow: true
})
export class MultipleChoice {
  @Event() toggleFab: EventEmitter<any>;
  @Prop() vocabulary = wordList;
  @State() currentWord = 0;
  @Prop({ mutable: true }) questions: any[];
  @Prop({ mutable: true }) answers: any[];
  @Prop({ mutable: true }) dimBackground: boolean;
  @Prop() chef = "assets/images/chef.svg";

  @State() answerBox: any;

  componentWillLoad() {
    console.log("in componentWillLoad");
    console.log("isMobileDevice", this.isMobileDevice());
    this.getNextQuestion();
  }

  componentDidUpdate() {
    console.log("Component did update");
    console.log("isMobileDevice", this.isMobileDevice());

    // this.resetHiddenClasses();
  }

  getNextQuestion() {
    console.log("in getNextQuestion");
    let qs = [];
    let allAnswers = [];
    for (let index = this.currentWord; index < this.currentWord + 1; index++) {
      let correct = this.vocabulary[index];
      let correctObj = {
        correct: "right",
        details: this.vocabulary[index]
      };
      allAnswers.push(correctObj);
      let wrongAnswers = [];
      for (let wrong = index + 1; wrong < index + 4; wrong++) {
        let wrongObj = {
          correct: "wrong",
          details: this.vocabulary[wrong]
        };
        wrongAnswers.push(this.vocabulary[wrong]);
        allAnswers.push(wrongObj);
      }
      qs.push({ correct: correct });
      this.questions = qs;
      this.answers = allAnswers;
    }
    allAnswers = shuffle(allAnswers);
    this.currentWord += 1;
    this.toggleFab.emit(false);
  }

  handleWrongAnswer(event) {
    console.log("in handleWrongAnswer");

    let thisElement = event.srcElement;
    this.answerBox = event.srcElement.parentElement;

    let wrongList = this.answerBox.getElementsByClassName("wrong");
    for (let index = 0; index < wrongList.length; index++) {
      wrongList[index].classList.remove("answered-incorrectly-shake");
    }
    thisElement.classList.add("answered-incorrectly-shake");

    setTimeout(() => {
      thisElement.classList.remove("answered-incorrectly-shake");
    }, 1000);
  }

  isMobileDevice() {
    console.log("in is mob", typeof window.orientation);
    console.log("nav use age", navigator.userAgent.indexOf("IEMobile"));
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    );
  }

  async handleRightAnswer(event) {
    console.log("in handleRightAnswer", event);
    this.toggleFab.emit(true);

    let thisElement = event.srcElement;
    this.answerBox = event.srcElement.parentElement;

    thisElement.classList.add("right-choice-is-hidden");
    let noClick = this.answerBox.getElementsByClassName("no-click")[0];
    noClick.classList.remove("no-click-is-hidden");

    let wrongList = this.answerBox.getElementsByClassName("wrong");
    console.log("wrongList", wrongList);
    for (let index = 0; index < wrongList.length; index++) {
      console.log("index", index, wrongList[index]);
      wrongList[index].classList.add("wrong-answer-is-hidden");
      console.log("index 2", index, wrongList[index]);
    }
    console.log("wrongList", wrongList);

    await setTimeout(() => {
      this.resetHiddenClasses();
      noClick.classList.add("no-click-is-hidden");
      thisElement.classList.remove("right-choice-is-hidden");
      this.getNextQuestion();
    }, 3000);
  }

  resetHiddenClasses() {
    console.log("in resetHiddenClasses", this.answerBox);
    if (this.answerBox) {
      // let answers = this.answerBox.getElementsByClassName("wrong");
      let answers = this.answerBox.getElementsByClassName("answer");
      for (let index = 0; index < answers.length; index++) {
        answers[index].classList.remove("wrong-answer-is-hidden");
      }
    }
  }

  noClick(event) {
    console.log("in no click", event);
    event.stopImmediatePropagation();
  }

  render() {
    console.log("in render");
    return [
      <div class="section-title" />,
      <div class={this.dimBackground ? "cover-dimmed" : "cover"} />,
      <div class={this.dimBackground ? "mc-container-dimmed" : "mc-container"}>
        {this.questions.map(item => (
          <div class="question-card">
            <div class="target-box">
              <div class={this.dimBackground ? "target-dimmed" : "target"}>
                {item.correct.meaning}
                {/* <img class="filter-white chef" src={this.chef} /> */}
              </div>
            </div>
            <div class="answer-box">
              {this.answers.map(answer => (
                <div
                  class={
                    answer.correct == "right"
                      ? "answer answered-correctly no-click-is-hidden no-click"
                      : "always-hidden"
                  }
                >
                  {answer.correct == "right" ? answer.details.word : ""}
                </div>
              ))}
              {this.answers.map(answer => (
                <div
                  class={
                    this.dimBackground
                      ? "answer-dimmed"
                      : "answer " + answer.correct
                  }
                  onClick={
                    this.dimBackground
                      ? (event: UIEvent) => this.noClick(event)
                      : answer.correct == "wrong"
                      ? (event: UIEvent) => this.handleWrongAnswer(event)
                      : (event: UIEvent) => this.handleRightAnswer(event)
                  }
                >
                  {answer.details.word}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    ];
  }
}
