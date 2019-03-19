import { Component } from '@stencil/core';


@Component({
    tag: 'app-home-page',
    styleUrl: 'app-home.css',
    shadow: true
})
export class AppHomePage {

    render() {
        return (
            <div class="section-title"> <h1>AppHomePage</h1></div>
        )
    }

}