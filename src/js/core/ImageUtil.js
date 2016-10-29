/**
 * 画像系処理クラス
 */
export default class ImageUtil {

  /**
   * 指定した幅に合わせて
   * サイズにリサイズします。
   * @param image Imageオブジェクト
   * @param width 合わせたい幅
   * @return blob
   */
  static resizeByWidth(image, width) {
    return image;
  }

  /**
   * Imageオブジェクトをbase64に変換します。
   * @param image
   * @return base64
   */
  static toBase64(image) {
    var canvas = document.createElement('canvas');
    canvas.width  = image.width;
    canvas.height = image.height;
    // canvasに一度描画
    var ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0);
    // base64に変換
    return canvas.toDataURL(image.type);
  }

}
