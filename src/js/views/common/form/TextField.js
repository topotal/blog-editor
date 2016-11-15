import React from 'react';

/**
 * テキストエディタークラス
 */
export default class TextField extends React.Component {

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
        <span className="fieldLabel">{this.props.label}:</span>
        <input type="text" className="textField fieldInput" />
      </div>
    );
  }
}
