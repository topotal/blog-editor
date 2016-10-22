/**
 * API関係のENUMクラスです。
 */
export default class ApiParam {

  /** メソッド */
  static get GET() { return 'GET'; }
  static get POST() { return 'POST'; }
  static get DELETE() { return 'DELETE'; }

  /**
   * APIのパスを取得します。
   */
  static getPath(type) {
    return "http://dev.blog.topotal.com/api/v1/" + type;
  }

  /**
   * 画像パス
   */
  static getImagePath() {
    return "http://dev.blog.topotal.com/";
  }
}
