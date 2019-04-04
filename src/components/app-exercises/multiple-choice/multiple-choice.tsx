import { Component, Prop, State } from "@stencil/core";
import { wordList } from "../../../assets/data/vocabulary";
import { shuffle } from "../../../global/utilities";

@Component({
  tag: "multiple-choice",
  styleUrl: "mulitple-choice.css",
  shadow: true
})
export class MultipleChoice {
  @Prop() vocabulary = wordList;
  @State() currentWord = 0;
  @Prop({ mutable: true }) questions: any[];
  @Prop({ mutable: true }) answers: any[];
  @Prop({ mutable: true }) dimBackground: boolean;
  @Prop() chef = "assets/images/chef.svg";

  componentWillLoad() {
    this.getNextQuestion();
    console.log("will load");
    // let qs = [];
    // let allAnswers = [];
    // for (let index = 2; index < 3; index++) {
    //   let correct = this.vocabulary[index];
    //   let correctObj = { correct: "right", details: this.vocabulary[index] };
    //   allAnswers.push(correctObj);
    //   console.log("correctobj", correctObj);
    //   let wrongAnswers = [];
    //   for (let wrong = index + 1; wrong < index + 4; wrong++) {
    //     let wrongObj = { correct: "wrong", details: this.vocabulary[wrong] };
    //     console.log("wrongobg", wrongObj);
    //     wrongAnswers.push(this.vocabulary[wrong]);
    //     allAnswers.push(wrongObj);
    //   }
    //   qs.push({ correct: correct });
    //   this.questions = qs;
    //   this.answers = allAnswers;
    // }

    // // console.log(qs);
    // console.log(allAnswers);
    // allAnswers = shuffle(allAnswers);
  }

  componentDidUpdate() {
    console.log("Component did update");
  }
  componentWillUpdate() {
    console.log("Component will update and re-render");
  }
  componentDidUnload() {
    console.log("Component removed from the DOM");
  }

  getNextQuestion() {
    console.log("in next q");
    let qs = [];
    let allAnswers = [];
    for (let index = this.currentWord; index < this.currentWord + 1; index++) {
      let correct = this.vocabulary[index];
      let correctObj = {
        correct: "right",
        details: this.vocabulary[index]
      };
      allAnswers.push(correctObj);
      console.log("correctobj", correctObj);
      let wrongAnswers = [];
      for (let wrong = index + 1; wrong < index + 4; wrong++) {
        let wrongObj = {
          correct: "wrong",
          details: this.vocabulary[wrong]
        };
        console.log("wrongobj", wrongObj);
        wrongAnswers.push(this.vocabulary[wrong]);
        allAnswers.push(wrongObj);
      }
      qs.push({ correct: correct });
      this.questions = qs;
      this.answers = allAnswers;
    }

    console.log(allAnswers);
    allAnswers = shuffle(allAnswers);
    this.currentWord += 1;
  }

  handleWrongAnswer(event) {
    let wrongList = event.path[1].getElementsByClassName("wrong");
    for (let index = 0; index < wrongList.length; index++) {
      wrongList[index].classList.remove("mystyle");
    }
    event.path[0].classList.add("mystyle");
    event.path[0].animate(
      [
        // keyframes
        { transform: "translate3d(-2px, 0, 0)" },
        { transform: "translate3d(4px, 0, 0)" },
        { transform: "translate3d(-4px, 0, 0)" },
        { transform: "translate3d(4px, 0, 0)" },
        { transform: "translate3d(-4px, 0, 0)" },
        { transform: "translate3d(4px, 0, 0)" },
        { transform: "translate3d(-4px, 0, 0)" },
        { transform: "translate3d(2px, 0, 0)" }
        // { transform: "translateY(0px)" },
        // { transform: "translateY(-300px)" }
      ],
      {
        // timing options
        // offset: [0.4, 0.6],
        duration: 1200,
        iterations: 1,
        easing: "cubic-bezier(0.36, 0.07, 0.19, 0.97)",
        fill: "both"
      }
    );
    setTimeout(() => {
      event.path[0].classList.remove("mystyle");
    }, 1000);
  }

  handleRightAnswer(event) {
    console.log("in right answer", event);
    event.path[0].classList.add("answered-correctly");

    let wrongList = event.path[1].getElementsByClassName("wrong");
    for (let index = 0; index < wrongList.length; index++) {
      wrongList[index].classList.add("hidden");

      // event.path[0].cla  ssList.add("mystyle");
    }
    setTimeout(() => {
      for (let index = 0; index < wrongList.length; index++) {
        wrongList[index].classList.remove("hidden");
      }
      event.path[0].classList.remove("answered-correctly");
      this.getNextQuestion();
    }, 3000);
  }

  clearClasses() {}

  render() {
    return [
      <div class="section-title" />,
      // <div class="submit">enter</div>,
      <div class={this.dimBackground ? "cover-dimmed" : "cover"} />,
      <div
        class={this.dimBackground ? "main-container-dimmed" : "main-container"}
      >
        {this.questions.map(item => (
          <div class="question-card">
            <div class="target-box">
              <div class={this.dimBackground ? "target-dimmed" : "target"}>
                {item.correct.meaning}
                {/* <img class="filter-white chef" src={this.chef} /> */}
              </div>
            </div>
            <div class="answer-box">
              {/* {item.wrong.map((wrong, index) => () */}

              {this.answers.map(answer => (
                <div
                  class={
                    this.dimBackground
                      ? "answer-dimmed"
                      : "answer " + answer.correct
                  }
                  onClick={
                    answer.correct == "wrong"
                      ? (event: UIEvent) => this.handleWrongAnswer(event)
                      : (event: UIEvent) => this.handleRightAnswer(event)
                  }
                >
                  {answer.details.word}
                </div>
              ))}

              {/* <div
                class={this.dimBackground ? "answer-dimmed" : "answer right"}
              >
                {item.correct.word}
              </div>
              {item.wrong.map((wrong, index) => (
                <div
                  id={"wrong-" + index}
                  class={this.dimBackground ? "answer-dimmed" : "answer wrong"}
                  onClick={(event: UIEvent) => this.handleWrongAnswer(event)}
                >
                  {wrong.word}
                </div>
              ))} */}
            </div>
          </div>
        ))}
      </div>
    ];
  }
}
