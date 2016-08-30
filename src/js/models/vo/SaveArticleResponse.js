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
   * コンストラクター
   * @constructor
   */
  constructor(response) {
    this._status = response.status;
  }
}
