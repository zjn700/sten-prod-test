import { Component, State, Prop, Listen, Element } from "@stencil/core";
// import { elementInViewport2 } from "../../global/utilities"
// import { wordList } from "../../assets/data/vocabulary"
@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
  shadow: true
})
export class AppHome {
  @Element() el: HTMLElement;

  @Prop() vocabularyId = "vocabulary";
  @Prop() phrasesId = "phrases";
  @Prop() grammarId = "grammar";
  @Prop() exercisesId = "exercises";

  @State() activeTab = "vocabulary";
  @State() dimBackground = false;
  @State() lessonNumber = "16";

  @Listen("fabMenuItemSelected")
  handleFabMenu(event: CustomEvent) {
    console.log("Received the custom todoCompleted event: ", event.detail);
    this.activeTab = event.detail;
  }
  // @State() showMoreIcon: boolean = true;
  @State() hideMenuBars: boolean = false;
  @State() scrollY: any;
  @Listen("window:scroll")
  async handleScroll() {
    if (this.scrollY) {
      this.hideMenuBars = this.scrollY > window.scrollY;
      if (window.scrollY == 0) {
        this.hideMenuBars = false;
      }
    }
    this.scrollY = window.scrollY;
  }

  handleHomeTab(section) {
    console.log("sect", section);
    this.activeTab = section;
  }
  toggleDimBackround() {
    console.log("dimming", this.dimBackground);
    this.dimBackground = !this.dimBackground;
    console.log("dimming2", this.dimBackground);
  }

  render() {
    return [
      <div class="app-home">
        <div id="showScroll" class="main-container">
          <app-home-page
            hidden={this.activeTab == "home-page" ? false : true}
          />

          <app-home-menu
            hidden={this.activeTab == "home-menu" ? false : true}
          />

          <app-vocabulary
            hidden={this.activeTab == "vocabulary" ? false : true}
            hideMenuBars={this.hideMenuBars}
            dimBackground={this.dimBackground}
          />

          <app-phrases hidden={this.activeTab == "phrases" ? false : true} />

          <app-grammar hidden={this.activeTab == "grammar" ? false : true} />

          <app-exercises
            hidden={this.activeTab == "exercises" ? false : true}
          />

          <div class="white-out">white out</div>
          <div class="footer-home" hidden={this.hideMenuBars ? true : false}>
            {/* <div class={this.hideMenuBars ? "hidden" : "footer-home"}> */}

            <div
              id="vocabulary"
              class={this.activeTab == "vocabulary" ? "active" : "tab"}
              onClick={() => this.handleHomeTab(this.vocabularyId)}
            >
              Words
            </div>

            <div
              id="phrases"
              class={this.activeTab == "phrases" ? "active" : "tab"}
              onClick={() => this.handleHomeTab(this.phrasesId)}
            >
              Phrases
            </div>

            <div
              id="grammar"
              class={this.activeTab == "grammar" ? "active" : "tab"}
              onClick={() => this.handleHomeTab(this.grammarId)}
            >
              Grammar
            </div>

            <div
              id="exercises"
              class={this.activeTab == "exercises" ? "active" : "tab"}
              onClick={() => this.handleHomeTab(this.exercisesId)}
            >
              Exercises
            </div>
          </div>
        </div>
      </div>,

      <div
        onMouseEnter={() => this.toggleDimBackround()}
        onMouseLeave={() => this.toggleDimBackround()}
        // onClick={() => this.toggleDimBackround()}
        class="fab"
        hidden={this.hideMenuBars ? true : false}
      >
        <span class="fab-action-button">
          {/* <i class="fab-action-button__icon filter-white" /> */}
          <div class="fab-action-button-text">{this.lessonNumber}</div>
        </span>
        <ul class="fab-buttons" id="vocabulary">
          <li
            class="fab-buttons__item"
            onClick={() => this.handleHomeTab(this.vocabularyId)}
          >
            <a href="#" class="fab-buttons__link" data-tooltip="Words">
              <i class="icon-material icon-material_fb" />
            </a>
          </li>
          <li
            class="fab-buttons__item"
            onClick={() => this.handleHomeTab(this.phrasesId)}
          >
            <a href="#" class="fab-buttons__link" data-tooltip="Phrases">
              <i class="icon-material icon-material_tw" />
            </a>
          </li>
          <li
            class="fab-buttons__item"
            onClick={() => this.handleHomeTab(this.grammarId)}
          >
            <a href="#" class="fab-buttons__link" data-tooltip="Rules">
              <i class="icon-material icon-material_li" />
            </a>
          </li>
          <li
            class="fab-buttons__item"
            onClick={() => this.handleHomeTab(this.exercisesId)}
          >
            <a href="#" class="fab-buttons__link" data-tooltip="Lessons">
              <i class="icon-material icon-material_gp" />
            </a>
          </li>
        </ul>
      </div>
    ];
  }
}

/// SAVE:
{
  /* <div class="left-column">
          <p>
            Welcome to the Stencil App Starter.
            You can use this starter to build entire apps all with
            web components using Stencil!  Zool
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p> */
}

{
  /* <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link> */
}
