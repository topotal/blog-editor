import React from 'react';
import Field from './Field';

/**
 * テキストエディタークラス
 */
export default class TextField extends Field {

  /**
   * 入力フォームを生成します。
   */
  _createInput() {
    return (
      <input type="text" className="textfield fieldInput" onChange={this._onChange} />
    );
  }
}
