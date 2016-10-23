import BaseService from './BaseService';
import ApiParam from '../enum/ApiParam';
import LoginResponse from '../models/vo/LoginResponse';

/**
 * ログインのためのサービスクラスです。
 */
export default class LoginService extends BaseService {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    this._method = ApiParam.POST;
    this._path = ApiParam.getPath("users/login");
  }

  /**
   * 正常なレスポンスを受け取った際のハンドラーです。
   */
  _onSuccess(res) {
    let data = new LoginResponse(res);
    // 成功イベントを発火
    this.dispatchEvent('success', {data: data});
  }
}
