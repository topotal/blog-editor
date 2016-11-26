/**
 * サイドバーアイテムデータクラスです。
 */
export default class AsideItemData {

  /** 各アイテム */
  static get ENTRIES() {  return new AsideItemData('entries', 'fa-list', '記事一覧') }

  /** アイテムリスト */
  static get LIST() {
    return [
      AsideItemData.ENTRIES
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
