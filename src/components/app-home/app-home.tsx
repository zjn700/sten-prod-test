import { Component, State, Prop, Listen, Element } from '@stencil/core';
// import { elementInViewport2 } from "../../global/utilities"
// import { wordList } from "../../assets/data/vocabulary"
@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  @Element() el: HTMLElement

  @Prop() vocabularyId = "vocabulary"
  @Prop() phrasesId = "phrases"
  @Prop() grammarId = "grammar"
  @Prop() exercisesId = "exercises"

  @State() activeTab = "exercises"

  @State() showMoreIcon: boolean = true;
  @State() hideMenuBars: boolean = false;
  @State() scrollY: any;
  @Listen('window:scroll')
  async handleScroll() {
    if (this.scrollY) {
      this.hideMenuBars = this.scrollY > window.scrollY
      if (window.scrollY == 0) {
        this.hideMenuBars = false
      }
    }
    this.scrollY = window.scrollY;
  }

  handleHomeTab(section) {
    // console.log("event", event)
    this.activeTab = section
  }

  render() {
    return (
      <div class='app-home'>
        <div id="showScroll" class="main-container">

          <app-home-page hidden={(this.activeTab == "home-page" ? false : true)}></app-home-page>

          <app-home-menu hidden={(this.activeTab == "home-menu" ? false : true)}></app-home-menu>

          <app-vocabulary
            hidden={(this.activeTab == "vocabulary" ? false : true)}
            hideMenuBars={this.hideMenuBars}
          >
          </app-vocabulary>

          <app-phrases hidden={(this.activeTab == "phrases" ? false : true)}></app-phrases>

          <app-grammar hidden={(this.activeTab == "grammar" ? false : true)}></app-grammar>

          <app-exercises hidden={(this.activeTab == "exercises" ? false : true)}></app-exercises>

          <div class="white-out">white out</div>
          <div class="footer-home" hidden={this.hideMenuBars ? true : false}>
            {/* <div class={this.hideMenuBars ? "hidden" : "footer-home"}> */}
            <div id="vocabulary" class={this.activeTab == "vocabulary" ? "active" : "tab"}
              onClick={() => this.handleHomeTab(this.vocabularyId)}>
              Words</div>
            <div id="phrases" class={this.activeTab == "phrases" ? "active" : "tab"}
              onClick={() => this.handleHomeTab(this.phrasesId)}>
              Phrases</div>
            <div id="grammar" class={this.activeTab == "grammar" ? "active" : "tab"}
              onClick={() => this.handleHomeTab(this.grammarId)}>
              Grammar</div>
            <div id="exercises" class={this.activeTab == "exercises" ? "active" : "tab"}
              onClick={() => this.handleHomeTab(this.exercisesId)}>
              Exercises</div>
          </div>
        </div>
      </div >
    );
  }
}




/// SAVE:
{/* <div class="left-column">
          <p>
            Welcome to the Stencil App Starter.
            You can use this starter to build entire apps all with
            web components using Stencil!  Zool
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p> */}

{/* <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link> */}