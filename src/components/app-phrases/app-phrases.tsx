import { Component, Prop, State, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "app-phrases",
  styleUrl: "app-phrases.css",
  shadow: true
})
export class AppPhrases {
  @Event() fabMenuItemSelected: EventEmitter;

  @Prop() vocabularyId = "vocabulary";
  @Prop() phrasesId = "phrases";
  @Prop() grammarId = "grammar";
  @Prop() exercisesId = "exercises";

  @State() activeTab = "phrases";

  // @State() showMoreIcon: boolean = true;
  @State() hideMenuBars: boolean = false;

  handleHomeTab(section) {
    this.activeTab = section;
  }
  handleFabMenu(section) {
    console.log("here in fabmenu");
    this.fabMenuItemSelected.emit(section);

    // this.activeTab = section;
  }

  render() {
    return [
      <div class="section-title">
        {" "}
        <h1>Phrases</h1>
      </div>,

      <hr />,

      <div class="footer-phrases">
        <div
          id="phrases"
          class={this.activeTab == "phrases" ? "active" : "tab"}
          onClick={() => this.handleHomeTab(this.phrasesId)}
        >
          List
        </div>
        <div
          id="exercises"
          class={this.activeTab == "exercises" ? "active" : "tab"}
          onClick={() => this.handleHomeTab(this.exercisesId)}
        >
          Review
        </div>
      </div>

      //   <div class="footer-home" hidden={this.hideMenuBars ? true : false}>
      //     {/* <div class={this.hideMenuBars ? "hidden" : "footer-home"}> */}

      //     <div
      //       id="vocabulary"
      //       class={this.activeTab == "vocabulary" ? "active" : "tab"}
      //       onClick={() => this.handleHomeTab(this.vocabularyId)}
      //     >
      //       Words
      //     </div>

      //     <div
      //       id="phrases"
      //       class={this.activeTab == "phrases" ? "active" : "tab"}
      //       onClick={() => this.handleHomeTab(this.phrasesId)}
      //     >
      //       Phrases
      //     </div>

      //     <div
      //       id="grammar"
      //       class={this.activeTab == "grammar" ? "active" : "tab"}
      //       onClick={() => this.handleHomeTab(this.grammarId)}
      //     >
      //       Grammar
      //     </div>

      //     <div
      //       id="exercises"
      //       class={this.activeTab == "exercises" ? "active" : "tab"}
      //       onClick={() => this.handleHomeTab(this.exercisesId)}
      //     >
      //       Exercises
      //     </div>
      //   </div>

      //   <div class="fab">
      //     <span class="fab-action-button">
      //       <i class="fab-action-button__icon" />
      //     </span>
      //     <ul class="fab-buttons" id="vocabulary">
      //       <li
      //         class="fab-buttons__item"
      //         onClick={() => this.handleFabMenu(this.vocabularyId)}
      //       >
      //         <a href="#" class="fab-buttons__link" data-tooltip="Facebook">
      //           <i class="icon-material icon-material_fb" />
      //         </a>
      //       </li>
      //       <li class="fab-buttons__item">
      //         <a href="#" class="fab-buttons__link" data-tooltip="Twitter">
      //           <i class="icon-material icon-material_tw" />
      //         </a>
      //       </li>
      //       <li class="fab-buttons__item">
      //         <a href="#" class="fab-buttons__link" data-tooltip="Linkedin">
      //           <i class="icon-material icon-material_li" />
      //         </a>
      //       </li>
      //       <li class="fab-buttons__item">
      //         <a href="#" class="fab-buttons__link" data-tooltip="Google+">
      //           <i class="icon-material icon-material_gp" />
      //         </a>
      //       </li>
      //     </ul>
      //   </div>
    ];
  }
}
