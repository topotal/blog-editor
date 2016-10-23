/**
 * ユーザーのモデルクラスです。
 */
export default class UserModel {

  /** トークン */
  get token() { return this._token; }
  set token(token) { this._token = token; }

  /** インスタンス */
  static get instance() {
    return UserModel._instance || new UserModel();
  }

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    UserModel._instance = this;
  }
}
