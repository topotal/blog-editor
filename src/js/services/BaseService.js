import EventDispatcher from '../core/EventDispatcher';
import request from 'superagent';
import ApiParam from '../enum/ApiParam';
import UserModel from '../models/UserModel';

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
    this._userModel = UserModel.instance;

    this._onComplete = this._onComplete.bind(this);
  }

  /**
   * リクエストを送信します。
   */
  send(data) {
    let formattedData = this._formatData(data);
    // メソッド
    switch(this._method) {
      case ApiParam.GET:    this._get(formattedData); break;
      case ApiParam.POST:   this._post(formattedData); break;
      case ApiParam.DELETE: this._delete(formattedData); break;
    }
  }

  /**
   * データを通信用に整形する。
   */
  _formatData(data) { return data; }

  /**
   * GET通信
   */
  _get(data) {
    request
      .get(this._path)
      .set('Authorization', 'Bearer ' + this._userModel.token)
      .query(data)
      .end(this._onComplete);
  }

  /**
   * POST通信
   */
  _post(data) {
    request
      .post(this._path)
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this._userModel.token)
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
  _onError(err, res) {
    // エラーイベントを発火
    this.dispatchEvent('error', {res: res});
  };
}
