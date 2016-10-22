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

  /**
   * GET通信
   */
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
   * DELETE通信
   */
  _delete(data) {
  }

  /**
   * レスポンス取得時のハンドラーです。
   */
  _onComplete(err, res) {
    // エラーの場合
    if(err) {
      this._onError(err, res);
      return;
    }

    // 成功時
    this._onSuccess(res);
  }

  /**
   * 正常なレスポンスを受け取った際のハンドラーです。
   */
  _onSuccess(res) {};

  /**
   * エラーを受け取った際のハンドラーです。
   */
  _onError(err, res) {};
}
