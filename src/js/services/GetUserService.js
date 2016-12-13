import BaseService from './BaseService';
import ApiParam from '../enum/ApiParam';
import GetUserResponse from '../models/vo/GetUserResponse';

/**
 * ユーザーを取得するサービスクラスです。
 */
export default class GetUserService extends BaseService {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    this._method = ApiParam.GET;
    this._path = ApiParam.getPath('user_profiles');
  }

  /**
   * 正常なレスポンスを受け取った際のハンドラーです。
   * @override
   */
  _onSuccess(res) {
    let data = new GetUserResponse(res);
    // 成功イベントを発火
    this.dispatchEvent('success', {data: data});
  }
}
