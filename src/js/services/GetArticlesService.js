import ApiParam from '../enum/ApiParam';
import EventDispatcher from '../core/EventDispatcher';
import GetArticlesResponse from '../models/vo/GetArticlesResponse';

/**
 * 記事一覧取得サービスクラスです。
 */
export default class GetArticlesService extends EventDispatcher {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    this._path = ApiParam.getPath() + "articles";
    this._onComplete = this._onComplete.bind(this);
  }

  /**
   * 送信します。
   */
  send(data) {
    $.ajax({
      type: 'GET',
      url: this._path,
      success: this._onComplete,
      dataType: 'json',
      crossDomain: true
    });
  }

  /**
   * リクエストが完了した際のハンドラーです。
   */
  _onComplete(response, result) {
    let data = new GetArticlesResponse(response);
    // 成功イベントを発火
    this.dispatchEvent('success', {data: data});
  }
}
