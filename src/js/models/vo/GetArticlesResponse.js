import ApiParam from '../../enum/ApiParam';
import ArticleModel from '../ArticleModel';

/**
 * 記事一覧取得時のレスポンスデータクラスです。
 */
export default class GetArticlesResponse {

  /**
   * 記事一覧データを返します。
   */
  get articles() {
    return this._articles;
  }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(response) {
    this._articles = [];

    let articles = response.body || [];
    articles.forEach((article) => {
      this._articles.push(new ArticleModel(
        article.id,
        article.title,
        article.content,
        article.eye_catch_image_url,
        article.publish_status
      ));
    });
  }
}
