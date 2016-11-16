/**
 * エディタースタイルデータクラスです。
 */
export default class EditorStyleData {

  static get NORMAL() { return new EditorStyleData('Normal', 'Ace'); }
  static get VIM() { return new EditorStyleData('Vim', 'Vim'); }

  static get LIST() {
    return [
      EditorStyleData.NORMAL,
      EditorStyleData.VIM
    ];
  }

  /** ラベル */
  get label() { return this._label; }
  /** 値 */
  get value() { return this._value; }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(label, value) {
    this._label = label;
    this._value = value;
  }
}
