/**
 * 画像データクラス
 */
export default class ImageData {

  /** ID */
  get id() { return this._id; }
  /** 画像パス */
  get url() { return this._url; }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(id, url) {
    this._id = id;
    this._url = url;
  }
}
