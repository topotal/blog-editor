import EventDispatcher from '../core/EventDispatcher';
import ApiParam from '../enum/ApiParam';
import UploadImageResponse from '../models/vo/UploadImageResponse';

/**
 * 画像アップロードサービスクラスです。
 */
export default class UploadImageService extends EventDispatcher {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    this._method = ApiParam.POST;
    this._path = ApiParam.getPath('images');
  }

  /**
   * 通信用にデータを整形します。
   * @override
   */
  _formatData(data) {
    return {
      content: ''
    };
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
