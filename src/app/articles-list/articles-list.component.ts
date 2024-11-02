import { Component } from '@angular/core';
import { Article } from '../models/article';
import { AjoutArticleComponent } from "../ajout-article/ajout-article.component";

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [AjoutArticleComponent],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.css'
})
export class ArticlesListComponent {
  title = "Liste des nouveaux articles :";
   Articles = [
    new Article(1,'intelligence artificielle', 'https://www.xnquebec.co/wp-content/uploads/2024/01/Untitled-design-24-768x432.jpg.webp', '24/10/2023', 'Une intelligence artificielle ou IA, est un programme qui cherche à imiter l’intelligence humaine par le biais d’algorithmes de calcul Sa création permet aux ordinateurs de réaliser des opérations et de penser comme un être humain. Depuis 2010, le développement de l’intelligence artificielle a été accéléré par le big data.',0),
    new Article(2,'Data Science', 'https://cdn.prod.website-files.com/60ec34540d013784844d2ee2/661534510e703464057b8b2d_Data%20Science%20(1).jpg','15/11/2023', 'La data science est une science interdisciplinaire s’appuyant sur des méthodes scientifiques, des algorithmes, des processus et autres systèmes afin d’exploiter de grands ensembles de données. Les data scientists associent ainsi plusieurs compétences, notamment des connaissances en informatique, statistiques et commerce pour analyser des données collectées auprès des clients',0),
    new Article(3,'Machine Learning ', 'https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1718227524/Image_Recognition_Machine_Learning_header/Image_Recognition_Machine_Learning_header-png?_i=AA', '20/08/2022', 'Le Machine Learning peut être défini comme étant une technologie d’intelligence artificielle permettant aux machines d’apprendre sans avoir été au préalablement programmées spécifiquement à cet effet. Le Machine Learning est explicitement lié au Big Data, étant donné que pour apprendre et se développer, les ordinateurs ont besoin de flux de données à analyser, sur lesquelles s’entraîner.',0),
  ];
  action = "";

  changeAction(action : string){
    this.action = action;
  }
  addArticle(Article:Article){
    this.Articles=[...this.Articles,Article];
    this.changeAction("");
  }
  addscore(Article :Article){
  Article.score++;
  }
  removescore(Article :Article){
    if (Article.score > 0) {
      Article.score--; 
  }
}
  TriArticles() {
  return this.Articles.sort((article1,article2) => article2.score - article1.score);
}
 filtrerArticle(titre :string):void{
      this.Articles = this.Articles.filter(b => b.titre.toLowerCase() ==titre.toLowerCase());
    }
}

