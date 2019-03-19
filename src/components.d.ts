/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  MatchResults,
} from '@stencil/router';


export namespace Components {

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppProfile {
    'match': MatchResults;
  }
  interface AppProfileAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
  }

  interface AppRoot {
    'homeIcon': string;
    'profileIcon': string;
  }
  interface AppRootAttributes extends StencilHTMLAttributes {
    'homeIcon'?: string;
    'profileIcon'?: string;
  }

  interface AppVocabularyCard {
    'cancelIcon': string;
    'chatIcon': string;
    'commentIcon': string;
    'currentAudio': HTMLAudioElement;
    'hideMenuBars': boolean;
    'index': any;
    'item': any;
    'moreIcon': string;
    'noteIcon': string;
    'playIcon': string;
    'searchIcon': string;
    'shareIcon': string;
  }
  interface AppVocabularyCardAttributes extends StencilHTMLAttributes {
    'cancelIcon'?: string;
    'chatIcon'?: string;
    'commentIcon'?: string;
    'currentAudio'?: HTMLAudioElement;
    'hideMenuBars'?: boolean;
    'index'?: any;
    'item'?: any;
    'moreIcon'?: string;
    'noteIcon'?: string;
    'playIcon'?: string;
    'searchIcon'?: string;
    'shareIcon'?: string;
  }

  interface AppVocabulary {
    'cancelIcon': string;
    'hideMenuBars': boolean;
    'item': any;
    'moreIcon': string;
    'nextLesson': string;
    'prevLesson': string;
    'vocabulary': any;
  }
  interface AppVocabularyAttributes extends StencilHTMLAttributes {
    'cancelIcon'?: string;
    'hideMenuBars'?: boolean;
    'item'?: any;
    'moreIcon'?: string;
    'nextLesson'?: string;
    'prevLesson'?: string;
    'vocabulary'?: any;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppHome': Components.AppHome;
    'AppProfile': Components.AppProfile;
    'AppRoot': Components.AppRoot;
    'AppVocabularyCard': Components.AppVocabularyCard;
    'AppVocabulary': Components.AppVocabulary;
  }

  interface StencilIntrinsicElements {
    'app-home': Components.AppHomeAttributes;
    'app-profile': Components.AppProfileAttributes;
    'app-root': Components.AppRootAttributes;
    'app-vocabulary-card': Components.AppVocabularyCardAttributes;
    'app-vocabulary': Components.AppVocabularyAttributes;
  }


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppVocabularyCardElement extends Components.AppVocabularyCard, HTMLStencilElement {}
  var HTMLAppVocabularyCardElement: {
    prototype: HTMLAppVocabularyCardElement;
    new (): HTMLAppVocabularyCardElement;
  };

  interface HTMLAppVocabularyElement extends Components.AppVocabulary, HTMLStencilElement {}
  var HTMLAppVocabularyElement: {
    prototype: HTMLAppVocabularyElement;
    new (): HTMLAppVocabularyElement;
  };

  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement
    'app-profile': HTMLAppProfileElement
    'app-root': HTMLAppRootElement
    'app-vocabulary-card': HTMLAppVocabularyCardElement
    'app-vocabulary': HTMLAppVocabularyElement
  }

  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'app-vocabulary-card': HTMLAppVocabularyCardElement;
    'app-vocabulary': HTMLAppVocabularyElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}