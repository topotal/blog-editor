/**
 * ログイン時のレスポンスデータクラスです。
 */
export default class LoginResponse {

  /** トークン */
  get token() { return this._token; }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(response) {
    let body = response.body;
    this._token = body.token;
  }
}
