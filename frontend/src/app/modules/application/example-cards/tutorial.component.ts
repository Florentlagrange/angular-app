import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';

import { SeoService } from '../../../services/seo/seo.service';
import { Feature } from './feature';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  features: Array<Feature>;

  constructor(
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: object) {

    this.features =
      [
        {
          type: 'CRUD',
          description: 'CRUD , API Rest, Components, Pages, Extends',
          image: 'vignettes_carnets-de-recherche_02.png',
          link: 'crud'
        },
        {
          type: 'Services',
          description: 'Use services to view a playlist and a youtube player',
          image: 'vignettes_carnets-de-recherche_03.png',
          link: 'services'
        },
        {
          type: 'Components',
          description: 'Channel Component with Input, Output and Event Emitter',
          image: 'vignettes_carnets-de-recherche_04.png',
          link: 'components'
        },
        {
          type: 'HttpClient',
          description: 'Use an external API with the HttpClient module',
          image: 'vignettes_carnets-de-recherche_05.png',
          link: 'httpclient'
        },
        {
          type: 'Reactive Form',
          description: 'A model-driven approach to handling form inputs',
          image: 'vignettes_carnets-de-recherche_06.png',
          link: 'forms'
        },
        {
          type: 'Template Driven Forms',
          description: 'Forms are the mainstay of business applications',
          image: 'Vignettes_textes_11.png',
          link: 'forms'
        },
        {
          type: 'Modal',
          description: 'How to implement modal windows with Angular and Bootstrap',
          image: 'Vignettes_prototypes_04.png',
          link: 'modal'
        },
        {
          type: 'Prism',
          description: 'Use a lightweight, extensible syntax highlighter',
          image: 'Vignettes_prototypes_02.png',
          link: 'prism'
        },
      ];

  }

  ngOnInit(): void {

    const content =
      'Cette application a été développée avec Angular version 15.1.1 et bootstrap 5.2.3' +
      ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)';

    const title = 'angular-starter Title : Angular Page';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

  }

  loadScript(name: string): void {

    if (isPlatformBrowser(this.platformId)) {
      const src = document.createElement('script');
      src.type = 'text/javascript';
      src.src = name;
      src.async = false;
      document.getElementsByTagName('head')[0].appendChild(src);
    }
  }

}

