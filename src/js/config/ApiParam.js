/**
 * API関係のENUMクラスです。
 */
export default class ApiParam {

  /** メソッド */
  static get GET() { return 'GET'; }
  static get POST() { return 'POST'; }
  static get PATCH() { return 'PATCH'; }
  static get DELETE() { return 'DELETE'; }

  /**
   * ホストを取得します。
   */
  static getHost() {
    if(process.env.NODE_ENV == 'development') {
      return "https://staging.blog.topotal.com";
    }

    return "https://blog.topotal.com";
  }

  /**
   * APIのパスを取得します。
   */
  static getPath(type) {
    return ApiParam.getHost() + '/api/v1/' + type;
  }

  /**
   * 画像パス
   */
  static getImagePath() {
    return ApiParam.getHost();
  }
}
