import EventDispatcher from '../core/EventDispatcher';
import ApiParam from '../enum/ApiParam';
import UpdateArticleResponse from '../models/vo/UpdateArticleResponse';

/**
 * 記事更新サービスクラスです。
 */
export default class UpdateArticleService extends EventDispatcher {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(response) {
    super();

    this._path = ApiParam.getPath() + "article";
    this._onComplete = this._onComplete.bind(this);
  }

  /**
   * 送信します。
   */
  send(data) {
    $.ajax({
      type: 'PUT',
      url: this._path,
      data: {
        id: "3",
        title: "テスト２",
        content: "テスト２",
        eye_catching: "hoge.png"
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
    let data = new UpdateArticleResponse(response);
    // 成功イベントを発火
    this.dispatchEvent('success', {data: data});
  }
}
