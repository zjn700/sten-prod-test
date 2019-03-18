import { Component, Prop } from '@stencil/core';
import { wordList } from "../../assets/data/vocabulary"

@Component({
    tag: 'app-vocabulary',
    styleUrl: 'app-vocabulary.css',
    shadow: true
})

export class AppVocabulary {

    @Prop() vocabulary: any = wordList;

    @Prop({ mutable: true }) item: any;
    @Prop({ mutable: true }) hideMenuBars: boolean = false;

    @Prop() cancelIcon = "assets/svg/outline-cancel-24px.svg"
    @Prop() moreIcon = "assets/svg/baseline-more_vert-24px.svg"
    @Prop() nextLesson = "assets/svg/baseline-chevron_right-24px.svg"
    @Prop() prevLesson = "assets/svg/baseline-chevron_left-24px.svg"

    async toggleMoreMenu(event) {
        console.log("event vocab", event)
    }

    render() {
        return ([

            <div class={this.hideMenuBars ? "hidden" : "sub-header-menu"}>
                <button class="slot-left filter-white" onClick={(event: UIEvent) => this.toggleMoreMenu(event)}>
                    <img src={this.prevLesson} alt="Previous Lesson" /></button>

                <button class="slot-right filter-white" onClick={(event: UIEvent) => this.toggleMoreMenu(event)}>
                    <img src={this.nextLesson} alt="Next Lesson" /></button>

                <div class="lesson-title">Lesson 1</div>
            </div>,

            <div class="main-container" >
                {this.vocabulary.map((item, index) =>
                    <app-vocabulary-card
                        item={item}
                        index={index}
                        hideMenuBars={this.hideMenuBars}>
                    </app-vocabulary-card>,
                )}
            </div>,

            <div class={this.hideMenuBars ? "hidden" : "footer-vocabulary"}>
                <div class="tab active" >Words</div>
                <div class="tab">Phrases</div>
                <div class="tab">Grammar</div>
                <div class="tab">Exercises</div>
            </div>
        ]

            // <div class="card">
            //     <div class="slot-left filter-white" onClick={(event: UIEvent) => this.toggleMoreMenu(event)}>
            //         <img src={this.showMoreIcon ? this.moreIcon : this.cancelIcon} alt="more" /></div>

            //     <div class="header">
            //         <div class="h2">{this.item.word}</div>
            //     </div>
            //     <div class="container">
            //         <h3>{this.item.meaning}</h3>
            //     </div>
            // </div>



        )
    }

}                                               