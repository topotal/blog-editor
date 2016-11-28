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
    let classes = classNames('messageBox', this.props.className);
    return (
      <div className={classes}>
        <div className="messageBoxBack" onClick={this._onClickBack}/>
        <div className="messageBoxWrapper">
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
