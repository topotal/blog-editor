import EventDispatcher from '../core/EventDispatcher';
import ApiParam from '../enum/ApiParam';
import CreateArticleResponse from '../models/vo/CreateArticleResponse';

/**
 * 記事保存サービスクラスです。
 */
export default class CreateArticleService extends EventDispatcher {

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
    $.ajax({
      type: 'POST',
      url: this._path,
      data: {
        title: "テスト",
        content: "テスト",
        eye_catching: "hoge.png"
      },
      success: this._onComplete,
      dataType: 'json',
      crossDomain: true
    });
  }

  /**
   * リクエストが完了した際のハンドラーです。
   */
  _onComplete(response, result) {
    let data = new CreateArticleResponse(response);
    // 成功イベントを発火
    this.dispatchEvent('success', {data: data});
  }
}
