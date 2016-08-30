import EventDispatcher from '../core/EventDispatcher';
import request from 'superagent';
import ApiParam from '../enum/ApiParam';

/**
 * 記事保存サービスクラスです。
 */
export default class SaveArticleService extends EventDispatcher {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(response) {
    super();

    this._path = ApiParam.getPath() + "article";
    this._onComplete = this._onComplete.bind(this);
  }

  /**
   * ポストします。
   */
  post(data) {
    request
      .post(this._path)
      .send({})
      .end(this._onComplete)
  }

  /**
   * リクエストが完了した際のハンドラーです。
   */
  _onComplete(err, res) {
    console.info(err, res);
  }
}
