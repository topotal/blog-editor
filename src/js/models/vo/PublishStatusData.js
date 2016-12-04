import {_} from 'lodash';

/**
 * 公開設定データクラスです。
 */
export default class PublishStatusData {

  static get PRIVATE() { return new PublishStatusData(false, '非公開', 'red'); }
  static get PUBLIC() { return new PublishStatusData(true, '公開', 'green'); }

  static get LIST() {
    return [
      PublishStatusData.PRIVATE,
      PublishStatusData.PUBLIC
    ];
  }

  /**
   * タイプからデータを取得します。
   */
  static getDataByType(value) {
    var data = _.find(PublishStatusData.LIST, (data) => {
      return data.value == value;
    });

    if(!data) {
      console.error("PublishStatusData:公開設定データを取得できませんでした。");
      data = PublishStatusData.PRIVATE;
    }

    return data;
  }

  /** タイプ */
  get value() { return this._value; }
  /** テキスト */
  get text() { return this._text; }
  /** カラー */
  get color() { return this._color; }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(value, text, color) {
    this._value = value;
    this._text = text;
    this._color = color;
  }
}
