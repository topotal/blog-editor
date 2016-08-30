import EventDispatcher from '../core/EventDispatcher';
import request from 'superagent';

/**
 * サービスのベースクラスです。
 */
export default class BaseService extends EventDispatcher {

  /**
   * コンストラクター
   * @constructor
   * @param url
   */
  constructor(url, method) {
    super();
    this._url = url;
    this._method = method;
  }

  /**
   * 通信開始
   * @param param
   */
  load() {
    // var client = Ti.Network.createHTTPClient({
    //   // レスポンスを受け取れた時
    //   onload: () => {
    //     var response = JSON.parse(client.responseText);
    //     this.onLoad(response);
    //   },
    //   // 通信エラーの場合
    //   onerror: () => {
    //     this.onError();
    //   },
    //   // タイムアウトを15秒に設定
    //   timeout: 15000
    // });
    //
    // // Prepare the connection.
    // client.open(this._method, this._url);
    // // Send the request.
    // client.send();
  }

  /**
   * レスポンスを受け取れた時のハンドラーです。
   * overrideして使用してください。
   */
  _onLoad() {}

  /**
   * レスポンスを受け取れなかった時のハンドラーです。
   * overrideして使用してください。
   */
  _onError() {}
}
