import { Component } from '@stencil/core';


@Component({
    tag: 'app-home-menu',
    styleUrl: 'app-home-menu.css',
    shadow: true
})
export class AppHomeMenu {

    render() {
        return (
            <div class="section-title"> <h1>AppHomeMenu</h1></div>
        )
    }

}