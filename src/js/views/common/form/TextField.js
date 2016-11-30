import React from 'react';
import Field from './Field';

/**
 * テキストエディタークラス
 */
export default class TextField extends Field {

  /**
   * 入力フォームを生成します。
   * @override
   */
  _createInput() {
    return (
      <input type="text" className="textfield field_input" value={this.state.value || ''} onChange={this._onChange} />
    );
  }
}
