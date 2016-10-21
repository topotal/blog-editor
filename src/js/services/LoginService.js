import EventDispatcher from '../core/EventDispatcher';
import ApiParam from '../enum/ApiParam';
import LoginResponse from '../models/vo/LoginResponse';

/**
 * ログインのためのサービスクラスです。
 */
export default class LoginService extends EventDispatcher {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    this._path = ApiParam.getPath() + "users/login";
    this._onComplete = this._onComplete.bind(this);
  }

  /**
   * 送信します。
   */
  send(data) {
    data = data || {};
    $.ajax({
      type: 'POST',
      url: this._path,
      data: JSON.stringify({
        name: data.username,
        password: data.password
      }),
      success: this._onComplete,
      dataType: 'json',
      crossDomain: true
    });
  }

  /**
   * リクエストが完了した際のハンドラーです。
   */
  _onComplete(response, result) {
    let data = new LoginResponse(response);
    // 成功イベントを発火
    this.dispatchEvent('success', {data: data});
  }
}
