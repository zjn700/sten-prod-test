import { Component } from '@stencil/core';


@Component({
    tag: 'app-phrases',
    styleUrl: 'app-phrases.css',
    shadow: true
})
export class AppPhrases {

    render() {
        return (
            <div class="section-title"> <h1>AppPhrases</h1></div>
        )
    }

}