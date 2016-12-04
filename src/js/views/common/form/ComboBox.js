import React from 'react';
import Field from './Field';

/**
 * コンボボックスクラスです。
 */
export default class ComboBox extends Field {

  /**
   * 入力フォームを生成します。
   * @override
   */
  _createInput() {
    let options = this.props.store.map((data, index) => {
      console.info(data[this.props.valueField]);
      return (
        <option value={data[this.props.valueField]} key={index}>
          {data[this.props.displayField]}
        </option>
      );
    });

    return (
      <select className="fieldInput combobox mousetrap" onChange={this._onChange} value={this.state.value}>
        {options}
      </select>
    );
  }
}
