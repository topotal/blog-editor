import ApiParam from '../../enum/ApiParam';
import UserModel from '../../models/UserModel';

/**
 * ユーザーデータ取得時のレスポンスデータクラスです。
 */
export default class GetUserResponse {

  /**
   * ユーザーデータを返します。
   */
  get userData() {
    return this._userData;
  }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(response) {
    let body = response.body;
    this._userData = new UserModel(
      body.name,
      body.description,
      body.icon_image_url
    );
  };
}
