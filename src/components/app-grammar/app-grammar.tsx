import { Component } from "@stencil/core";

@Component({
  tag: "app-grammar",
  styleUrl: "app-grammar.css",
  shadow: true
})
export class AppGrammar {
  render() {
    return [
      <div class="section-title" />,
      <div class="section-title">
        {" "}
        <h1>Rules</h1>
      </div>
    ];
  }
}
