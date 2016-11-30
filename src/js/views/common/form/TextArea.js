import React from 'react';
import Field from './Field';

/**
 * テキストエリアクラス
 */
export default class TextField extends Field {

  /**
   * 入力フォームを生成します。
   */
  _createInput() {
    return (
      <textarea className="field_input textarea" rows="7" onChange={this._onChange} value={this.state.value}>
      </textarea>
    );
  }
}
