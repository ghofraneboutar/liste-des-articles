import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-ajout-article',
  standalone: true,
  imports: [],
  templateUrl: './ajout-article.component.html',
  styleUrl: './ajout-article.component.css'
})
export class AjoutArticleComponent {
  @Input() lastId = 0;
  @Output() articleCreated =new EventEmitter<Article>();
  addArticle(titre:string,photo:string,date :string ,description:string,score:number){
   const newArticle =new Article(
    this.lastId + 1,
    titre,
    photo,
    date,
    description,
    score , 
   );
   this.articleCreated.emit(newArticle);
  console.log(newArticle)
  } 

  
}
