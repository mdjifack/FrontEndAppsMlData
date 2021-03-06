import { Component,OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  export class AppComponent implements OnInit {
    title = 'MLData';

    constructor ( private translate: TranslateService){
      this.translate.addLangs(['en', 'fr', 'de']);
      this.translate.setDefaultLang('en');
     }
  
     useLanguage(language:string){
       this.translate.use(language);
     }
  
    ngOnInit(): void {
    }
  
  }