import {_} from 'lodash';

/**
 * イベントクラスです。
 */
export default class EventDispatcher {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    this._listeners = {};
  }

  /**
   * リスナーを追加します。
   * @param type
   * @param listener
   */
  addEventListener(type, listener) {
    if(!this._listeners[type]) {
      this._listeners[type] = [];
    }
    this._listeners[type].push(listener);
  }

  /**
   * リスナーを削除します。
   * @param type
   * @param listener
   */
  removeEventListener(type, listener) {
    let length = this._listeners.length;
    for(let i = 0; i < length; i++) {
      if(this._listeners[i] === listener) {
        this._listeners.splice(i, 1);
      }
    }
  }

  /**
   * 全てのリスナーを削除します。
   */
  removeAllEventListeners() {
    this._listeners = {};
  }

  /**
   * イベントを発火させます。
   * @param type
   * @param param
   */
  fireEvent(type, param = {}) {
    let listeners = this._listeners[type];
    let length = listeners ? listeners.length : 0;
    for(let i=0; i<length; i++) {
      listeners[i](_.extend(param, {
        target: this
      }));
    }
  }

  /**
   * イベントを発火させます。
   */
  dispatchEvent(type, param = {}) {
    this.fireEvent(type, param);
  }
}
