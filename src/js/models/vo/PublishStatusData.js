/**
 * 公開設定データクラスです。
 */
export default class PublishStatusData {

  static get DRAFT() { return new PublishStatusData('draft', '下書き'); }
  static get PRIVATE() { return new PublishStatusData('private', '非公開'); }
  static get PUBLIC() { return new PublishStatusData('public', '公開'); }

  static get LIST() {
    return [
      PublishStatusData.DRAFT,
      PublishStatusData.PRIVATE,
      PublishStatusData.PUBLIC
    ];
  }

  /** タイプ */
  get type() { return this._type; }
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
