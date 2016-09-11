import React from 'react';
import classNames from 'classnames';

/**
 * モーダルクラスです。
 */
export default class Modal extends React.Component {

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
    let classes = classNames('modal', this.props.className);
    return (
      <div className={classes} ref="main">
        <div className="modalWrapper">
          <div className="modalHeader">{this.props.title || モーダルウィンドウ}</div>
          <div className="modalContent">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
