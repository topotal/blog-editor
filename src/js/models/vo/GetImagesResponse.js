import ImageData from './ImageData';

/**
 * 画像取得時のレスポンスデータクラスです。
 */
export default class GetImagesResponse {

  /**
   * ステータスを返します。
   */
  get status() {
    return this._status;
  }

  /**
   * 画像一覧データを返します。
   */
  get images() {
    return this._images;
  }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(response) {
    this._status = response.status;
    this._images = [];

    let images = response.images || [];
    images.forEach((image) => {
      this._images.push(new ImageData(image.id, image.url));
    });
  }
}
