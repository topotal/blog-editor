import BaseService from './BaseService';
import ApiParam from '../enum/ApiParam';
import UploadImageResponse from '../models/vo/UploadImageResponse';
import ImageUtil from '../core/ImageUtil';

/**
 * 画像アップロードサービスクラスです。
 */
export default class UploadImageService extends BaseService {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    this._onLoadImage = this._onLoadImage.bind(this);

    // ファイルリーダー
    this._reader = new FileReader();
    this._reader.onload = this._onLoadImage;

    this._method = ApiParam.POST;
    this._path = ApiParam.getPath('images');
  }

  /**
   * リクエストを送信します。
   * @override
   */
  send(data) {
    this._reader.readAsDataURL(data.file);
  }

  /**
   * 画像読み込み完了時のハンドラーです。
   */
  _onLoadImage() {
    let file = this._reader.result;
    super.send({
      content: file
    });
  }

  /**
   * 正常なレスポンスを受け取った際のハンドラーです。
   */
  _onSuccess(res) {
    let data = new UploadImageResponse(res);
    // 成功イベントを発火
    this.dispatchEvent('success', {data: data});
  }
}
