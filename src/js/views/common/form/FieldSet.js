import React from 'react';
import {_} from 'lodash';
import classNames from 'classnames';

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
    let classes = classNames('fieldset', this.props.className);
    return (
      <fieldset className={classes}>
        <legend>{this.props.legend}</legend>
        {this.props.children}
      </fieldset>
    );
  }
}
