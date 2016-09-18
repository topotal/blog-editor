/**
 * 公開設定データクラスです。
 */
export default class PublishStatus {

  /** タイプ */
  get type() { return this._return; }
  /** テキスト */
  get text() { return this._text; }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(type, text) {
    this._type = type;
    this._text = text;
  }

}
