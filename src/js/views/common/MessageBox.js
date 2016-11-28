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

    this._onClickBack = this._onClickBack.bind(this);
  }

  /**
   * 描画します。
   */
  render() {
    let classes = classNames('messageBox_wrapper', this.props.className);
    return (
      <div className="messageBox">
        <div className="messageBox_back" onClick={this._onClickBack}/>
        <div className={classes}>
          {this.props.children}
        </div>
      </div>
    );
  }

  /**
   * 背景をクリック
   */
  _onClickBack(event) {
    if(this.props.onClickBack) {
      this.props.onClickBack();
    }
  }
}
