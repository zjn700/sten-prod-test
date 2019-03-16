import { Component, State, Prop } from '@stencil/core';

@Component({
    tag: 'app-vocabulary-card',
    styleUrl: 'app-vocabulary-card.css',
    shadow: true
})

export class AppVocabularyCard {
    @Prop({ mutable: true }) item: any;
    @State() showMoreIcon: boolean = true;
    @Prop() cancelIcon = "assets/svg/outline-cancel-24px.svg"
    @Prop() moreIcon = "assets/svg/baseline-more_vert-24px.svg"
    @Prop() playIcon = "assets/svg/baseline-volume_up-24px.svg"
    @Prop() commentIcon = "assets/svg/baseline-add_comment-24px.svg"
    @Prop() shareIcon = "assets/svg/baseline-share-24px.svg"
    @Prop() chatIcon = "assets/svg/baseline-chat_bubble_outline-24px.svg"
    @Prop() searchIcon = "assets/svg/baseline-search-24px.svg"
    @Prop() noteIcon = "assets/svg/baseline-note_add-24px.svg"

    async toggleMoreMenu(event) {
        console.log("event vocab", event)
        this.showMoreIcon = !this.showMoreIcon
    }

    render() {
        return (

            <div class="card" >
                <div class="slot-left filter-white" onClick={(event: UIEvent) => this.toggleMoreMenu(event)}>
                    <img src={this.showMoreIcon ? this.moreIcon : this.cancelIcon} alt="more" /></div>

                <div class="header">
                    <div class="h2">{this.item.word}</div>

                    <div class="app-option-bar">
                        <div class="tab filter-white" onClick={(event: UIEvent) => this.toggleMoreMenu(event)}>
                            <img src={this.showMoreIcon ? this.playIcon : this.cancelIcon} alt="play" />
                        </div>
                        <div class="tab filter-white" onClick={(event: UIEvent) => this.toggleMoreMenu(event)}>
                            <img src={this.showMoreIcon ? this.noteIcon : this.cancelIcon} alt="note" />
                        </div>
                        <div class="tab filter-white" onClick={(event: UIEvent) => this.toggleMoreMenu(event)}>
                            <img src={this.showMoreIcon ? this.shareIcon : this.cancelIcon} alt="share" />
                        </div>
                        <div class="tab filter-white" onClick={(event: UIEvent) => this.toggleMoreMenu(event)}>
                            <img src={this.showMoreIcon ? this.searchIcon : this.cancelIcon} alt="search" />
                        </div>





                    </div>

                </div>
                <div class="container">
                    <h3>{this.item.meaning}</h3>
                </div>
            </div>



        )
    }

}                                               