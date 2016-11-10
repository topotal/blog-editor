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
  get publishStatus() { return this._publishStatus; }
  set publishStatus(status) { this._publishStatus = status; }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(id, title, content, eyeCatchImageUrl, publishStatus) {
    this._id = id;
    this._title = title || '';
    this._content = content || '';
    this._eyeCatchImageUrl = eyeCatchImageUrl;
    this._publishStatus = publishStatus || 'draft';
  }
}
