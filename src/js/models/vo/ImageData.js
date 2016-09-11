/**
 * 画像データクラス
 */
export default class ImageData {

  /** ID */
  get id() { return this._id; }
  /** 画像パス */
  get path() { return this._path; }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(id, path) {
    this._id = id;
    this._path = path;
  }
}
