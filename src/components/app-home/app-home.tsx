import { Component, State, Listen, Element } from '@stencil/core';
// import { elementInViewport2 } from "../../global/utilities"
// import { wordList } from "../../assets/data/vocabulary"
@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  @Element() el: HTMLElement

  @State() showMoreIcon: boolean = true;

  @State() hideMenuBars: boolean = false;
  @State() scrollY: any;
  @Listen('window:scroll')
  async handleScroll() {
    // this.hideCardTabs = true;
    if (this.scrollY) {
      this.hideMenuBars = this.scrollY > window.scrollY
      if (window.scrollY == 0) {
        this.hideMenuBars = false
      }
    }
    this.scrollY = window.scrollY;
  }
  render() {
    return (
      <div class='app-home'>
        <div id="showScroll" class="main-container">
          <app-vocabulary
            class="vocab"
            hideMenuBars={this.hideMenuBars}
          // hideCardTabs={this.hideCardTabs}
          ></app-vocabulary>
          <div class="white-out">white out</div>
        </div>
      </div>
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