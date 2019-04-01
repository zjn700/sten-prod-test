import { Component, Prop } from "@stencil/core";
// import { MultipleChoice } from "./multiple-choice/multiple-choice";

@Component({
  tag: "app-exercises",
  styleUrl: "app-exercises.css",
  shadow: true
})
export class AppExercises {
  @Prop({ mutable: true }) dimBackground: boolean;
  render() {
    return (
      <div class="section-title">
        {/* <h4>Steps</h4> */}
        <multiple-choice dimBackground={this.dimBackground} />
      </div>
    );
  }
}
