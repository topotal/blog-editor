import ArticleModel from '../ArticleModel';

/**
 * 記事更新時のレスポンスデータクラスです。
 */
export default class UpdateEntryResponse {

  /**
   * 記事データを返します。
   */
  get entryData() {
    return this._entryData;
  }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(response) {
    let entry = response.body;
    this._entryData = new ArticleModel(
      entry.id,
      entry.title,
      entry.content,
      entry.eye_catch_image_url,
      entry.published
    );
  }
}
