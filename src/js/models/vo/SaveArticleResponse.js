import ArticleModel from '../ArticleModel';

/**
 * 記事作成時のレスポンスデータクラスです。
 */
export default class SaveArticleResponse {

  /**
   * 記事データを返します。
   */
  get articleData() {
    return this._articleData;
  }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(response) {
    let article = response.article;
    this._articleData = new ArticleModel(
      article.id,
      article.title,
      article.content,
      article.created_at,
      article.updated_at
    );
  }
}
