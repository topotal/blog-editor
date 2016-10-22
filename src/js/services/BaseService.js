import EventDispatcher from '../core/EventDispatcher';
import request from 'superagent';
import ApiParam from '../enum/ApiParam';

/**
 * サービスのベースクラスです。
 */
export default class BaseService extends EventDispatcher {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    this._method = ApiParam.GET;
    this._path = '';

    this._onComplete = this._onComplete.bind(this);
  }

  /**
   * リクエストを送信します。
   */
  send(data) {
    console.info(request);
    console.info(this._method);

    switch(this._method) {
      case ApiParam.POST: this._post(data); break;
    }
  }

  /**
   * POST通信
   */
  _post(data) {
    request
      .post(this._path)
      .send(JSON.stringify(data))
      .end(this._onComplete);
  }


  /**
   * レスポンス取得時のハンドラーです。
   */
  _onComplete(err, res) {

  }
}
