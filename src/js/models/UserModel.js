/**
 * ユーザーのモデルクラスです。
 */
export default class UserModel {

  /** トークン */
  get token() { return this._token; }
  set token(token) {
    this._token = token;
    // ストレージにtokenをセット
    localStorage.setItem('token', token);
  }

  /** インスタンス */
  static get instance() {
    return UserModel._instance || new UserModel();
  }

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {

    // 既にtokenがストレージにあれば取得する
    this._token = localStorage.getItem('token');

    UserModel._instance = this;
  }
}
