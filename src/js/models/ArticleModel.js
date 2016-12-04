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
  /** アイキャッチ画像URL */
  get eyeCatchImageUrl() { return this._eyeCatchImageUrl; }
  set eyeCatchImageUrl(url) { this._eyeCatchImageUrl = url; }
  /** 公開設定 */
  get published() { return this._published; }
  set published(published) { this._published = published; }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(id, title, content, eyeCatchImageUrl, published) {
    this._id = id;
    this._title = title || '';
    this._content = content || '';
    this._eyeCatchImageUrl = eyeCatchImageUrl;
    this._published = published;
  }
}
