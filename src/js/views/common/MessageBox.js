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

    this.onClickBack = this.onClickBack.bind(this);
  }

  /**
   * 描画します。
   */
  render() {
    let classes = classNames('messageBox', this.props.className);
    return (
      <div className={classes}>
        <div className="messageBoxBack" onClick={this.onClickBack}/>
        <div className="messageBoxWrapper">
          {this.props.children}
        </div>
      </div>
    );
  }

  /**
   * 背景をクリック
   */
  onClickBack(event) {
    this.props.onCancel();
  }
}
