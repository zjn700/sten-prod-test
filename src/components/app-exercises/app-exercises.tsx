import { Component } from "@stencil/core";

@Component({
  tag: "app-exercises",
  styleUrl: "app-exercises.css",
  shadow: true
})
export class AppExercises {
  render() {
    return (
      <div class="section-title">
        {" "}
        <h1>Lessons</h1>
      </div>
    );
  }
}
