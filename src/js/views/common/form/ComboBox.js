import React from 'react';

/**
 * コンボボックスクラスです。
 */
export default class ComboBox extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <div className="field">
        <span className="fieldLabel">{this.props.label}：</span>
        <select className="fieldInput combobox mousetrap">
        </select>
      </div>
    );
  }
}
