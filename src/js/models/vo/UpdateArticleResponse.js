import ArticleModel from '../ArticleModel';

/**
 * 記事更新時のレスポンスデータクラスです。
 */
export default class UpdateArticleResponse {

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
    console.info(response);
    let article = response.body;
    this._articleData = new ArticleModel(
      article.id,
      article.title,
      article.content,
      article.created_at,
      article.updated_at
    );
  }
}
