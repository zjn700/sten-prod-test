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
  @Prop() chef = "assets/images/chef.svg";

  componentWillLoad() {
    console.log("will load");
    // for (let index = 0; index < this.vocabulary.length; index++) {
    let qs = [];
    for (let index = 2; index < 3; index++) {
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

  handleWrongAnswer(event) {
    console.log("in wrong answer", event.path[0] as HTMLElement);
    let wrongList = event.path[1].getElementsByClassName("wrong");
    for (let index = 0; index < wrongList.length; index++) {
      // let incorrect = wrongList[wrong] as HTMLElement;
      // console.log("v", wrongList[index]);
      // console.log("v", wrongList, wrong, "zzzzz", incorrect);
      // let element = wrongList[index];
      wrongList[index].classList.remove("mystyle");
      // }
      // let element = event.path[0];
      // reset the transition by...
      // element.addEventListener(
      //   "click",
      //   function(e) {
      //     e.preventDefault;
      //     element.classList.remove("mystyle");
      //     void element.offsetWidth;
      //     element.classList.add("mystyle");
      //   },
      //   false
      // );
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
        duration: 700,
        iterations: 1,
        easing: "cubic-bezier(0.36, 0.07, 0.19, 0.97)",
        fill: "both"
      }
    );

    // event.path[0].style.animationPlayState = "paused";
    // event.path[0].style.animationPlayState = "running";

    setTimeout(() => {
      event.path[0].classList.remove("mystyle");
    }, 1000);
    // event.path[0].style.webkitTransform = `animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;`;

    // event.path[0].classList.remove("mystyle");
  }
  handleWrongAnswer2(event) {
    console.log("in wrong answer", event.path[0] as HTMLElement);
    event.path[0].classList.remove("mystyle");

    // event.path[0].classList.remove("mystyle");
  }

  handleRightgAnswer() {
    console.log("in right answer");
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
                {/* {item.correct.meaning} */}
                <img class="filter-white chef" src={this.chef} />
              </div>
            </div>
            <div class="answer-box">
              <div
                class={this.dimBackground ? "answer-dimmed" : "answer right"}
              >
                {item.correct.word}
              </div>
              {item.wrong.map((wrong, index) => (
                <div
                  id={"wrong-" + index}
                  class={this.dimBackground ? "answer-dimmed" : "answer wrong"}
                  // onMouseEnter={(event: UIEvent) =>
                  //   this.handleWrongAnswer2(event)
                  // }
                  onClick={(event: UIEvent) => this.handleWrongAnswer(event)}
                >
                  {wrong.word}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    ];
  }
}
