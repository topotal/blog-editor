import ArticleModel from '../ArticleModel';

/**
 * 記事作成時のレスポンスデータクラスです。
 */
export default class CreateEntryResponse {

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
      entry.created_at,
      entry.updated_at
    );
  }
}
