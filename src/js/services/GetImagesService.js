import EventDispatcher from '../core/EventDispatcher';
import ApiParam from '../enum/ApiParam';
import GetImagesResponse from '../models/vo/GetImagesResponse';

/**
 * 画像一覧を取得するサービスクラスです。
 */
export default class GetImagesService extends EventDispatcher {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    this._path = ApiParam.getPath() + "images";
    this._onComplete = this._onComplete.bind(this);
  }

  /**
   * 送信します。
   */
  send(data) {
    data = data || {};
    $.ajax({
      type: 'GET',
      url: this._path,
      data: {
        page: data.id
      },
      success: this._onComplete,
      dataType: 'json',
      crossDomain: true
    });
  }

  /**
   * リクエストが完了した際のハンドラーです。
   */
  _onComplete(response, result) {
    let data = new GetImagesResponse(response);
    // 成功イベントを発火
    this.dispatchEvent('success', {data: data});
  }
}
