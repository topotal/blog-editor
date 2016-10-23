import ApiParam from '../enum/ApiParam';
import BaseService from './BaseService';
import GetArticlesResponse from '../models/vo/GetArticlesResponse';

/**
 * 記事一覧取得サービスクラスです。
 */
export default class GetArticlesService extends BaseService {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    this._method = ApiParam.GET;
    this._path = ApiParam.getPath("entries");
  }

  /**
   * 正常なレスポンスを受け取った際のハンドラーです。
   */
  _onSuccess(res) {
    let data = new GetArticlesResponse(res);
    // 成功イベントを発火
    this.dispatchEvent('success', {data: data});
  };
}
