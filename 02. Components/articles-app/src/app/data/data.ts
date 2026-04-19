import { data } from "./seed";
import { Article } from "./article";

export class ArticleData {
    getData(): Article[] {
        let articles: Article[] = [];

        for (let item of data) {
            articles.push(new Article(item.title, item.description, item.author, item.imageUrl));
        }

        return articles;
    }
}