import BaseService from './BaseService';
import ApiParam from '../enum/ApiParam';
import GetImagesResponse from '../models/vo/GetImagesResponse';

/**
 * 画像一覧を取得するサービスクラスです。
 */
export default class GetImagesService extends BaseService {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    this._method = ApiParam.GET;
    this._path = ApiParam.getPath('images');
  }

  /**
   * 正常なレスポンスを受け取った際のハンドラーです。
   */
  _onSuccess(res) {
    let data = new GetImagesResponse(res);
    // 成功イベントを発火
    this.dispatchEvent('success', {data: data});
  }
}
