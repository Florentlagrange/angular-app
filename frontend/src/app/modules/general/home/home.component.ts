import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { SeoService } from '../../../services/seo/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  items = [
    {
      vignette: "./assets/params/images/logo/Estampille_Rose_02.png",
      name: "Accueil",
      description: "Css linear-gradient",
      link:'/landing-page'
    },
    {

      vignette: "./assets/params/images/logo/P022 -machine_ecriture_01_002.png",
      name: "Projets",
      description: "Cascade Cards",
      link:'/cards'
    },
    {
      vignette: "./assets/params/images/logo/P010-MASTER_Isotype_Book_06-71.png",
      name: "Code",
      description: "UI and components",
      link:'/bootstrap'
    },
    {
      vignette: "./assets/params/images/logo/P011-MASTER_Isotype_Book_06-07.png",
      name: "Actualités",
      description: "Trailers and youtube",
      link:'/news'
    },
    {
     vignette: "./assets/params/images/logo/P011-MASTER_Isotype_Book_06-31.png",
      name: "Tutoriel",
      description: "Movies boxoffice",
      link:'/boxoffice'
    },
    {
      vignette: "./assets/params/images/logo/P011-MASTER_Isotype_Book_06-33.png",
      name: "CRUD",
      description: "Create Read Update",
      link:'/crud'
    },
    {
      vignette: "./assets/params/images/logo/P011-MASTER_Isotype_Book_06-34.png",
      name: "Services",
      description: "angular Services",
      link:'/services'
    },
    {
      vignette: "./assets/params/images/logo/P011-MASTER_Isotype_Book_06-35.png",
      name: "Components",
      description: "Angular components",
      link:'/components'
    },
    {
     vignette: "./assets/params/images/logo/P011-MASTER_Isotype_Book_06-72.png",
      name: "HttpClient",
      description: "Httpclient library",
      link:'/httpclient'
    },
    {
     vignette: "./assets/params/images/logo/P011-MASTER_Isotype_Book_06-72.png",
      name: "forms",
      description: "Reactive & Template",
      link:'/forms'
    },
    {
      vignette: "./assets/params/images/logo/P011-MASTER_Isotype_Book_06-72.png",
      name: "Modal",
      description: "Modal with bootstrap",
      link:'/modal'
    },
    {
      vignette: "./assets/params/images/logo/P011-MASTER_Isotype_Book_06-72.png",
      name: "Prism",
      description: "Syntax highlighter,",
      link:'/prism'
    },
  ]

  constructor(private seoService: SeoService) {




    const content =
      'This application was developed with ' + this.angular + ' and ' + this.bootstrap +
      ' It applies Routing, Lazy loading and Progressive Web App (PWA)';

    const title = 'angular-starter Title : Home Page';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);


  }

}
