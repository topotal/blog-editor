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
  constructor(token) {
    this._token = token;
  }
}
