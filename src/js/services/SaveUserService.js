import BaseService from './BaseService';
import ApiParam from '../enum/ApiParam';
import SaveUserResponse from '../models/vo/SaveUserResponse';

/**
 * ユーザー情報保存サービスクラスです。
 */
export default class SaveUserService extends BaseService {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(id) {
    super();

    this._method = ApiParam.PATCH;
    this._path = ApiParam.getPath('user_profiles');
  }

  /**
   * 通信用にデータを整形します。
   * @override
   */
  _formatData(data) {
    return {
      screen_name: data.name,
      description: data.description,
      content: data.content
    };
  }

  /**
   * 正常なレスポンスを受け取った際のハンドラーです。
   * @override
   */
  _onSuccess(res) {
    let data = new SaveUserResponse(res);
    // 成功イベントを発火
    this.dispatchEvent('success', {data: data});
  }
}
