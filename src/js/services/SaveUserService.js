import BaseService from './BaseService';
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

    this._method = ApiParam.POST;
    this._path = ApiParam.getPath('users/' + id);
  }

  /**
   * 通信用にデータを整形します。
   * @override
   */
  _formatData(data) {
    return {
      name: data.name,
      icon_image_url: data.iconImageUrl,
      description: data.description
    };
  }

  /**
   * リクエストを送信します。
   * @override
   */
  send(data) {
    this._onSuccess({});
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
