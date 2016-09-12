import EventDispatcher from '../core/EventDispatcher';
import ApiParam from '../enum/ApiParam';

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
      dataType: 'text',
      crossDomain: true
    })
    .done(this._onComplete)
    .fail(function( jqXHR, textStatus, errorThrown ) {
      console.log( 'ERROR', jqXHR, textStatus, errorThrown );
    });
  }

  /**
   * リクエストが完了した際のハンドラーです。
   */
  _onComplete(response, result) {
    // 成功イベントを発火
    this.dispatchEvent('success', {});
  }
}
