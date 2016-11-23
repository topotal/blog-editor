/**
 * ユーザーモデルクラスです。
 */
export default class UserModel {

  /** 名前 */
  get name() { return this._name; }
  /** 自己紹介 */
  get description() { return this._description; }
  /** アイコンURL */
  get iconImageUrl() { return this._iconImageUrl; }

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
