import ApiParam from '../../enum/ApiParam';
import ArticleModel from '../ArticleModel';

/**
 * 記事一覧取得時のレスポンスデータクラスです。
 */
export default class GetArticlesResponse {

  /**
   * ステータスを返します。
   */
  get status() {
    return this._status;
  }

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
    this._status = response.status;
    this._articles = [];

    let articles = response.articles || [];
    articles.forEach((article) => {
      this._articles.push(new ArticleModel(
        article.id,
        article.title,
        article.content,
        article.publishStatus,
        article.created_at,
        article.updated_at
      ));
    });
  }
}
