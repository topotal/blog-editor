import ApiParam from '../../enum/ApiParam';

/**
 * 記事保存時のレスポンスデータクラスです。
 */
export default class SaveArticleResponse {

  /**
   * ステータスを返します。
   */
  get status() {
    return this._status;
  }

  /**
   * 記事データを返します。
   */
  get article() {
    return this._article;
  }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(response) {
    this._status = response.status;
    this._article = response.article;
  }
}
