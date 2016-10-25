import ArticleModel from '../ArticleModel';

/**
 * 記事更新時のレスポンスデータクラスです。
 */
export default class UpdateEntryResponse {

  /**
   * 記事データを返します。
   */
  get entryDataData() {
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
      entry.created_at,
      entry.updated_at
    );
  }
}
