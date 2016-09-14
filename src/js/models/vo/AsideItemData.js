/**
 * サイドバーアイテムデータクラスです。
 */
export default class AsideItemData {

  /** 各アイテム */
  static get NEW()      {  return new AsideItemData('new',       'fa-pencil-square-o', '新規作成') }
  static get ARTICLES() {  return new AsideItemData('articles',  'fa-list',            '記事一覧') }

  /** アイテムリスト */
  static get LIST() {
    return [
      AsideItemData.NEW,
      AsideItemData.ARTICLES
    ];
  }

  /** タイプ */
  get type() { return this._type }
  /** アイコン */
  get icon() { return this._icon }
  /** タイトル */
  get title() { return this._title }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(type, icon, title) {
    this._type = type;
    this._icon = icon;
    this._title = title;
  }

}
