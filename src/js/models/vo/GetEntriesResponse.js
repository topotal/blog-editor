import ApiParam from '../../config/ApiParam';
import ArticleModel from '../ArticleModel';

/**
 * 記事一覧取得時のレスポンスデータクラスです。
 */
export default class GetEntriesResponse {

  /**
   * 記事一覧データを返します。
   */
  get entries() {
    return this._entries;
  }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(response) {
    this._entries = [];

    let entries = response.body || [];
    entries.forEach((entry) => {
      this._entries.push(new ArticleModel(
        entry.id,
        entry.title,
        entry.content,
        entry.eye_catch_image_url,
        entry.published
      ));
    });
  }
}
