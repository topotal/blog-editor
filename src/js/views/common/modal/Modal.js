import React from 'react';
import classNames from 'classnames';

/**
 * モーダルのベースクラスです。
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
    let classes = classNames('modal_wrapper', this.props.className);
    return (
      <div className="modal" ref="main">
        <div className={classes}>
          <div className="modal_header">{this.props.title || モーダルウィンドウ}</div>
          <div className="modal_content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
