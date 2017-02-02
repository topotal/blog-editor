import EventDispatcher from '../core/EventDispatcher';

/**
 * アプリのモデルクラスです。
 */
export default class AppModel extends EventDispatcher {

  /** トークン */
  get token() { return this._token; }
  set token(token) {
    this._token = token;
    // ストレージにtokenをセット
    localStorage.setItem('token', token);
  }

  /** インスタンス */
  static get instance() {
    return AppModel._instance || new AppModel();
  }

  /** ユーザーデータ */
  get userData() { return this._userData; }
  set userData(data) { this._userData = data; }

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    // 既にtokenがストレージにあれば取得する
    this._token = localStorage.getItem('token');

    AppModel._instance = this;
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
