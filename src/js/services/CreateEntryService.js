import BaseService from './BaseService';
import ApiParam from '../enum/ApiParam';
import CreateEntryResponse from '../models/vo/CreateEntryResponse';

/**
 * 記事作成サービスクラスです。
 */
export default class CreateEntryService extends BaseService {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(id) {
    super();

    this._method = ApiParam.POST;
    this._path = ApiParam.getPath('entries');
  }

  /**
   * 通信用にデータを整形します。
   * @override
   */
  _formatData(data) {
    return {
      title: data.title || "未タイトル",
      eye_catch_image_url: data.eyeCatchImageUrl || "dummy.png",
      content: data.content || "ダミーテキスト",
      publish_date: "2012-07-26T01:00:00+09:00"
    };
  }

  /**
   * 正常なレスポンスを受け取った際のハンドラーです。
   */
  _onSuccess(res) {
    let data = new CreateEntryResponse(res);
    // 成功イベントを発火
    this.dispatchEvent('success', {data: data});
  }
}
