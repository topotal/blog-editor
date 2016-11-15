import React from 'react';

/**
 * テキストエリアクラス
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
        <span className="fieldLabel">{this.props.label}：</span>
        <textarea className="fieldInput textarea" rows="7"></textarea>
      </div>
    );
  }
}
