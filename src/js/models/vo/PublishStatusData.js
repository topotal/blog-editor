import {_} from 'lodash';

/**
 * 公開設定データクラスです。
 */
export default class PublishStatusData {

  static get DRAFT() { return new PublishStatusData('draft', '下書き', 'yellow'); }
  static get PRIVATE() { return new PublishStatusData('private', '非公開', 'red'); }
  static get PUBLIC() { return new PublishStatusData('public', '公開', 'green'); }

  static get LIST() {
    return [
      PublishStatusData.DRAFT,
      PublishStatusData.PRIVATE,
      PublishStatusData.PUBLIC
    ];
  }

  /**
   * タイプからデータを取得します。
   */
  static getDataByType(type) {
    return _.find(PublishStatusData.LIST, (data) => {
      return data.type == type;
    });
  }

  /** タイプ */
  get type() { return this._type; }
  /** テキスト */
  get text() { return this._text; }
  /** カラー */
  get color() { return this._color; }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(type, text, color) {
    this._type = type;
    this._text = text;
    this._color = color;
  }

}
