import { Component, State, Prop, Element, Listen } from "@stencil/core";
import { elementInViewport2, isMobileDevice } from "../../../global/utilities";

@Component({
  tag: "app-vocabulary-card",
  styleUrl: "app-vocabulary-card.css",
  shadow: true
})
export class AppVocabularyCard {
  @State() scrollY: any;
  @Listen("window:scroll")
  async handleScroll() {
    let goingUp;
    if (this.scrollY) {
      if (this.index < 2) {
        console.log("card down ", this.index, this.scrollY > window.scrollY);
        console.log("card up ", this.index, this.scrollY < window.scrollY);
      }
      goingUp = this.scrollY < window.scrollY;
    }
    this.scrollY = window.scrollY;

    let elem = this.el.shadowRoot.getElementById("card-" + this.index);
    let elRec = elem.getBoundingClientRect();
    if (this.index < 2) {
      console.log(
        "elRec",
        this.index,
        window.innerHeight,
        window.outerHeight,
        elRec
      );
    }
    if (elem) {
      if (elementInViewport2(elem) && goingUp) {
        console.log("card going up and in view", this.index);
        if (
          elRec.bottom > window.innerHeight &&
          elRec.top < window.innerHeight / 1.1
        ) {
          console.log("header", elem.getElementsByClassName("header")[0]);
          // let header = elem.getElementsByClassName("header")[0] as HTMLElement
          // header.style.backgroundColor = "#2196f3"

          // elem.scrollIntoView({ block: "end", behavior: "auto" });
          // elem.scrollIntoView(false);
          // alignToTop
        }
      }
      if (elementInViewport2(elem) && !goingUp) {
        console.log("card going down and in view", this.index);
      }
    }
  }

  componentDidLoad() {
    console.log("mob", isMobileDevice());
  }

  @Element() el: HTMLElement;

  @Prop({ mutable: true }) currentAudio: HTMLAudioElement;
  @Prop({ mutable: true }) item: any;
  @Prop({ mutable: true }) index: any;
  @Prop({ mutable: true }) hideMenuBars: boolean = true;
  @Prop({ mutable: true }) dimBackground: boolean = false;

  @State() showAudioControls: boolean = false;
  @State() stopAudio: boolean = false;
  @State() showMoreIcon: boolean = true;
  @Prop() cancelIcon = "assets/svg/outline-cancel-24px.svg";
  @Prop() moreIcon = "assets/svg/baseline-more_vert-24px.svg";
  @Prop() playIcon = "assets/svg/baseline-volume_up-24px.svg";
  @Prop() commentIcon = "assets/svg/baseline-add_comment-24px.svg";
  @Prop() shareIcon = "assets/svg/baseline-share-24px.svg";
  @Prop() chatIcon = "assets/svg/baseline-chat_bubble_outline-24px.svg";
  @Prop() searchIcon = "assets/svg/baseline-search-24px.svg";
  @Prop() noteIcon = "assets/svg/baseline-note_add-24px.svg";

  async handleTabClick(event) {
    console.log(
      "this index",
      this.index,
      this.item.word,
      this.item.meaning,
      event
    );
    let audio = this.el.shadowRoot.getElementById("sound1") as HTMLAudioElement;
    console.log("audio", this.el, audio);
    // audio.play()
  }

  async playAudio() {
    if (this.currentAudio) {
      // this.currentAudio.muted = true;
      this.currentAudio.pause();
      console.log("paused", this.currentAudio.paused);

      // console.log("muted?", this.currentAudio.muted)
    }

    console.log("play  audio");
    this.currentAudio = (await this.el.shadowRoot.getElementById(
      "sound1"
    )) as HTMLAudioElement;
    console.log(this.currentAudio.duration);
    this.showAudioControls = true;
    this.hideMenuBars = false;
    // this.currentAudio.muted = this.currentAudio.muted ? false : false
    // console.log("muted 2?", this.currentAudio.muted)

    this.currentAudio.play();
    setTimeout(() => {
      this.showAudioControls = false;
    }, this.currentAudio.duration * 1000 + 500);
  }

  render() {
    return (
      <div class="card" id={"card-" + this.index}>
        <div class={this.dimBackground ? "header-dimmed" : "header"}>
          <div id="test" class="h2">
            {this.item.word}
          </div>
          <div
            class={
              this.showAudioControls && !this.hideMenuBars
                ? "audio-container"
                : "audio-container-hidden"
            }
          >
            {/* <div class="audio-container"> */}
            <audio
              id="sound1"
              src="assets/audio/busog.m4a"
              controls
              preload="auto"
            />
          </div>

          <div class={this.hideMenuBars ? "hidden" : "app-option-bar"}>
            <div
              class={
                this.dimBackground
                  ? "tab-dimmed filter-white"
                  : "tab filter-white"
              }
              onClick={() => this.playAudio()}
            >
              <img
                src={this.showMoreIcon ? this.playIcon : this.cancelIcon}
                alt="play"
              />
            </div>
            <div
              class={
                this.dimBackground
                  ? "tab-dimmed filter-white"
                  : "tab filter-white"
              }
              onClick={(event: UIEvent) => this.handleTabClick(event)}
            >
              <img
                src={this.showMoreIcon ? this.searchIcon : this.cancelIcon}
                alt="search"
              />
            </div>

            <div
              class={
                this.dimBackground
                  ? "tab-dimmed filter-white"
                  : "tab filter-white"
              }
              onClick={(event: UIEvent) => this.handleTabClick(event)}
            >
              <img
                src={this.showMoreIcon ? this.shareIcon : this.cancelIcon}
                alt="share"
              />
            </div>

            <div
              class={
                this.dimBackground
                  ? "tab-dimmed filter-white"
                  : "tab filter-white"
              }
              onClick={(event: UIEvent) => this.handleTabClick(event)}
            >
              <img
                src={this.showMoreIcon ? this.noteIcon : this.cancelIcon}
                alt="note"
              />
            </div>
          </div>
        </div>
        <div class="container">
          <div class={this.dimBackground ? "h3-white-out" : "h3"}>
            {this.item.meaning}
          </div>
        </div>
      </div>
    );
  }
}

// console.log("event togglex", event, event.path[4] as HTMLElement)
// console.log("cast", event.path[4] as HTMLElement)
// let idd = event.path[4] as HTMLElement
// console.log("idd", idd.id)
// let test1 = this.el.shadowRoot.getElementById(idd.id).getElementsByClassName('h2')[0].innerHTML
// console.log("test1", test1)

// let test2 = this.el.shadowRoot.getElementById(idd.id).getElementsByClassName('white-out')[0].innerHTML
// console.log("test", test2)
// var elem = this.el.shadowRoot.getElementById("card-0");
// // element.scrollIntoView({ block: "nearest" });

// console.log(this.el, elem)
// this.showMoreIcon = !this.showMoreIcon    }
