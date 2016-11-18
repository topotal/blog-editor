import React from 'react';
import Field from './Field';

/**
 * 画像選択フィールドクラス
 */
export default class ImageSelectField extends Field {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onClickSelectButton = this._onClickSelectButton.bind(this);
  }

  /**
   * 入力フォームを生成します。
   * @override
   */
  _createInput() {
    return (
      <div className="fieldInput imageSelectField">
        <div className="roundButton" onClick={this._onClickSelectButton}>ファイルを選択</div>
      </div>
    );
  }

  /**
   * ファイル選択ボタン押下時のハンドラーです。
   */
  _onClickSelectButton() {
    console.info("asdfasd");
  }
}
