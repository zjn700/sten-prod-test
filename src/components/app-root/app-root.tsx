import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
    @Prop() homeIcon = "assets/svg/baseline-home-24px.svg"
    @Prop() profileIcon = "assets/svg/baseline-person_outline-24px.svg"

    async toggleMoreMenu(event) {
      console.log("event", event)
    }
  

  render() {
    return (
      <div>
        <header>
          <div class="h1">Hiligaynon</div>
           <div class="slot-left filter-white" onClick={(event: UIEvent) => this.toggleMoreMenu(event)}>
                    <img src={this.homeIcon} alt="Home" /></div>
           <div class="slot-right filter-white" onClick={(event: UIEvent) => this.toggleMoreMenu(event)}>
                    <img src={this.profileIcon} alt="Profile" /></div>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
