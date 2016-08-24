import React from 'react';

/**
 * ボタンクラスです。
 */
export default class Button extends React.Component {

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
      <button className="button">
        {this.props.text}
      </button>
    );
  }

}
