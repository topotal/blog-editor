import React from 'react';

/**
 * フィールドセットクラス
 */
export default class FieldSet extends React.Component {

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
      <fieldset className="fieldset">
        <legend>{this.props.legend}</legend>
        {this.props.children}
      </fieldset>
    );
  }
}
