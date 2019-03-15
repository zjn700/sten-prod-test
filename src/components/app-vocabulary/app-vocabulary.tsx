import { Component, State, Prop } from '@stencil/core';

@Component({
    tag: 'app-vocabulary',
    styleUrl: 'app-vocabulary.css',
    shadow: true
})

export class AppVocabulary {
    @Prop({ mutable: true }) item: any;
    @State() showMoreIcon: boolean = true;
    @Prop() cancelIcon = "assets/svg/outline-cancel-24px.svg"
    @Prop() moreIcon = "assets/svg/baseline-more_vert-24px.svg"

    async toggleMoreMenu(event) {
        console.log("event vocab", event)
        this.showMoreIcon = !this.showMoreIcon
    }

    render() {
        return (

            <div class="card">
                <div class="slot-left filter-white" onClick={(event: UIEvent) => this.toggleMoreMenu(event)}>
                    <img src={this.showMoreIcon ? this.moreIcon : this.cancelIcon} alt="more" /></div>

                <div class="header">
                    <div class="h2">{this.item.word}</div>
                </div>
                <div class="container">
                    <h3>{this.item.meaning}</h3>
                </div>
            </div>



        )
    }

}                                               