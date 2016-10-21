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
    this._token = response.token;
  }
}
