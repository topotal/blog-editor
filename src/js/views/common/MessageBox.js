import React from 'react';
import classNames from 'classnames';

/**
 * 吹き出しクラス。
 */
export default class MessageBox extends React.Component {

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
    let classes = classNames('messageBox', this.props.className);
    return (
      <div className={classes}>
        {this.props}
      </div>
    );
  }

}
