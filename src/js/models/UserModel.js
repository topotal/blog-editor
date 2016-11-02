import EventDispatcher from '../core/EventDispatcher';

/**
 * ユーザーのモデルクラスです。
 */
export default class UserModel extends EventDispatcher {

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
    super();

    // 既にtokenがストレージにあれば取得する
    this._token = localStorage.getItem('token');

    UserModel._instance = this;
  }

  /**
   * トークンを無効にします。
   */
  expireToken() {
    this.token = null;
    // 無効済みイベントを発火
    this.dispatchEvent('expiredToken');
  }
}
