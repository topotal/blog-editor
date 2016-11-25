/**
 * ユーザーモデルクラスです。
 */
export default class UserModel {

  /** 名前 */
  get name() { return this._name || ''; }
  set name(text) { this._name = text; }
  /** 自己紹介 */
  get description() { return this._description; }
  set description(text) { this._description = text; }
  /** アイコンURL */
  get iconImageUrl() { return this._iconImageUrl; }
  set iconImageUrl(url) { this._iconImageUrl = url; }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(name, description, iconImageUrl) {
    this._name = name;
    this._description = description;
    this._iconImageUrl = iconImageUrl;
  }
}
