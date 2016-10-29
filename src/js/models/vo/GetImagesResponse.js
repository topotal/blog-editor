import ImageData from './ImageData';

/**
 * 画像取得時のレスポンスデータクラスです。
 */
export default class GetImagesResponse {

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
    this._images = [];

    let images = response.body || [];
    images.forEach((image) => {
      this._images.push(new ImageData(image.id, image.url));
    });
  }
}
