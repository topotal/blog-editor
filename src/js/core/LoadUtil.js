import EventDispatcher from './EventDispatcher';
import NProgress from 'nprogress';

/**
 * ロード系のユーティルクラスです。
 */
export default class LoadUtil extends EventDispatcher {

  /** インスタンス */
  static get instance() {
    return LoadUtil._instance || new LoadUtil();
  }

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    LoadUtil._instance = this;
  }

  /**
   * ロードを開始します。
   */
  start() {
    NProgress.start();
  }

  /**
   * ロードを終了します。
   */
  done() {
    NProgress.done();
  }
}
