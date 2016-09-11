import EventDispatcher from '../core/EventDispatcher';

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

    this._path = ApiParam.getPath() + "image";
    this._onComplete = this._onComplete.bind(this);
  }

  /**
   * 送信します。
   */
  send(data) {
    data = data || {};
    $.ajax({
      type: 'POST',
      processData: false,
      contentType: false,
      url: this._path,
      data: data,
      success: this._onComplete,
      dataType: 'json',
      crossDomain: true
    });
  }

  /**
   * リクエストが完了した際のハンドラーです。
   */
  _onComplete(response, result) {
    console.info(response);
    // let data = new GetImagesResponse(response);
    // // 成功イベントを発火
    // this.dispatchEvent('success', {data: data});
  }
}
