import { Component, State, Prop } from '@stencil/core';
import { wordList } from "../../assets/data/vocabulary"
// import { ICON_PATHS } from '../../assets/svg/svg-index'

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  // @Prop() icons: any = ICON_PATHS;
  // @Prop() cancel: any = this.icons.outlneCancel24px
  // @Prop() outline-cancel-icon = ICON_PATHS.outlneCancel24px
  @Prop() vocabulary: any = wordList;
  @State() showMoreIcon: boolean = true;
  @Prop() cancelIcon = "assets/svg/outline-cancel-24px.svg"
  @Prop() moreIcon = "assets/svg/baseline-more_vert-24px.svg"
  @Prop() friends = [{ name: "joe" }, { name: "sam" }, { name: "bob" }, { name: "dave" }]

  async componentWillLoad() {
    console.log(this.vocabulary)
    // console.log("icons ", this.icons, this.cancel)
  }
  toggleIcon(event) {
    console.log("event", event)
    this.showMoreIcon = !this.showMoreIcon
  }

  render() {
    return (
      <div class='app-home'>

        <div class="main-container">

          <button class="hvr-grow " onClick={(event) => this.toggleIcon(event)}>ZOOL</button>
          <div><img src={this.showMoreIcon ? this.moreIcon : this.cancelIcon} alt="more" /></div>
          {this.vocabulary.map((item) =>

            <app-vocabulary item={item}></app-vocabulary>,


            // <div class="card">
            //   <div class="slot-left filter-white"><img src={this.showMoreIcon ? this.moreIcon : this.cancelIcon} alt="more" /></div>

            //   <div class="header">

            //     <div class="h2">{item.word}</div>
            //   </div>

            //   <div class="container">
            //     <h3>{item.meaning}</h3>
            //   </div>
            // </div>

          )}
        </div>
        <div class="left-column">
          <p>
            Welcome to the Stencil App Starter.
            You can use this starter to build entire apps all with
            web components using Stencil!  Zool
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>

          <stencil-route-link url='/profile/stencil'>
            <button>
              Profile page
          </button>
          </stencil-route-link>
        </div>
      </div>
    );
  }
}
