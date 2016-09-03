/**
 * 記事モデルクラスです。
 */
export default class ArticleModel {

  /** id */
  get id() { return this._id; }
  set id(id) { this._id = id; }
  /** タイトル */
  get title() { return this._title; }
  set title(title) { this._title = title; }
  /** 内容 */
  get content() { return this._content; }
  set content(content) { this._content = content; }
  /** 作成日 */
  get createdAt() { return this._createdAt; }
  set createdAt(date) { this._createdAt = date; }
  /** 更新日 */
  get updatedAt() { return this._updatedAt; }
  set updatedAt(date) { this._updatedAt = date; }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(id, title, content, createdAt, updatedAt) {
    this._id = id;
    this._title = title;
    this._content = content;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }
}
