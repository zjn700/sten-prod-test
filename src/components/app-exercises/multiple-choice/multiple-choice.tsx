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
  // @Prop({ mutable: true }) waiting: boolean = false;
  @Prop() chef = "assets/images/chef.svg";
  @State() answerBox: any;

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
    console.log("answer-box", document);
    // alert("test");
    console.log("ansss", document.querySelectorAll("body"));
    this.resetHiddenClasses();
  }
  componentWillUpdate() {
    console.log("Component will update and re-render");
    // this.getNextQuestion();
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

    console.log("all answers", allAnswers);
    allAnswers = shuffle(allAnswers);
    this.currentWord += 1;
  }

  handleMouseEnter(event) {
    console.log("in mou ent", event);
    // this.hovered = true;
    // event.path[0].style.color = "gold";

    if (this.isMobileDevice()) {
      // event.path[0].style.fontSize = "3rem";
      // event.path[0].style.color = "darkcyan";
    }
  }
  handleWrongAnswer(event) {
    // console.log("is mob", this.isMobileDevice());
    this.answerBox = event.path[1];

    let wrongList = event.path[1].getElementsByClassName("wrong");
    for (let index = 0; index < wrongList.length; index++) {
      wrongList[index].classList.remove("answered-incorrectly");
    }

    event.path[0].classList.add("answered-incorrectly");
    // event.path[0].classList.add("hoverable");
    console.log(event.path[0].classList.value);
    // event.path[0].innerHTML = event.path[0].classList.value;

    // event.path[0].style.WebkitTransform = "translateX('300px')";
    // event.path[0].style.msTransform = "translateX(2rem)";
    // event.path[0].style.transform = "translateX(500px)";
    // event.path[0].style.color = "green";
    // event.path[0].style.fontSize = "3rem";

    event.path[0].animate(
      [
        // keyframes
        {
          transform: "translate3d(-2px, 0, 0)"
        },
        {
          transform: "translate3d(4px, 0, 0)"
        },
        {
          transform: "translate3d(-4px, 0, 0)"
        },
        {
          transform: "translate3d(4px, 0, 0)"
        },
        {
          transform: "translate3d(-4px, 0, 0)"
        },
        {
          transform: "translate3d(4px, 0, 0)"
        },
        {
          transform: "translate3d(-4px, 0, 0)"
        },
        {
          transform: "translate3d(2px, 0, 0)"
        }
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
      event.path[0].classList.remove("answered-incorrectly");
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
    // if (this.waiting) {
    //   return;
    // }
    // console.log("is mob", this.isMobileDevice());
    // if (this.isMobileDevice()) {
    // }

    console.log("in right answer", event);

    // this.waiting = true;
    this.answerBox = event.path[1];
    event.path[0].classList.add("answered-correctly");
    // event.path[0].classList.add("hoverable");

    let wrongList = event.path[1].getElementsByClassName("wrong");
    console.log("wro lis len", wrongList.length);
    for (let index = 0; index < wrongList.length; index++) {
      console.log("wro lis", wrongList[index]);
      wrongList[index].classList.add("is-hidden");
      console.log("wro lis 2", wrongList[index]);
    }
    let hidden = event.path[1].getElementsByClassName("is-hidden");
    for (let index = 0; index < hidden.length; index++) {
      console.log("is-hidden item", hidden[index]);
    }

    await setTimeout(() => {
      console.log("in tim out");
      this.resetHiddenClasses();

      event.path[0].classList.remove("answered-correctly");
      this.getNextQuestion();
      // this.waiting = false;
    }, 3000);
  }

  resetHiddenClasses() {
    console.log("reset hid cla");
    if (this.answerBox) {
      console.log(
        "ans box",
        this.answerBox,
        this.answerBox.getElementsByClassName("is-hidden")
      );
      // let answers = this.answerBox.getElementsByClassName("answer");
      let answers = this.answerBox.getElementsByClassName("is-hidden");
      console.log("ans", answers);
      for (let index = 0; index < answers.length; index++) {
        answers[index].classList.remove("is-hidden");
        console.log("ans, ans ind", answers, answers[index]);
      }
    }
  }

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
              {/* {this.answers.map(answer => ()} */}
              {/* {this.answers.map(answer => (
                <div
                  class={
                    answer.correct == "right"
                      ? "answer answered-correctly is-hidden no-click"
                      : "is-hidden}"
                  }
                >
                  {answer.correct == "right" ? answer.details.word : ""}
                </div>
              ))} */}
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
                  // onMouseEnter={(event: UIEvent) =>
                  //   this.handleMouseEnter(event)
                  // }
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
