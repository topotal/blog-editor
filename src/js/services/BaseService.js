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
    // メソッド
    switch(this._method) {
      case ApiParam.GET:    this._get(data); break;
      case ApiParam.POST:   this._post(data); break;
      case ApiParam.DELETE: this._delete(data); break;
    }
  }

  _get(data) {
    request
      .get(this._path)
      .query(data)
      .end(this._onComplete);
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
