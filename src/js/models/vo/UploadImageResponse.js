/**
 * 画像アップロード時のレスポンスデータクラスです。
 */
export default class UploadImageService {

  /** ID */
  get id() { return this._id; }
  /** URL */
  get url() { return this._url; }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(response) {
    let body = response.body;

    this._id = body.id;
    this._url = body.url;
  }

}
