import React from 'react';
import classNames from 'classnames';
import Menu from './Menu';

/**
 * ヘッダークラスです。
 */
export default class Header extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onCancel = this._onCancel.bind(this);
    this._onClickIcon = this._onClickIcon.bind(this);

    this.state = {
      activeMenu: false
    };
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <div className="header">
        {this._getMenu()}
        <img className="header_logo" src="images/logo.png" alt="topotal" width="104" height="28" />
        <img className="header_icon" src="https://avatars2.githubusercontent.com/u/3971271?v=3&s=466" alt="icon" width="32" height="32" onClick={this._onClickIcon} />
      </div>
    );
  }

  /**
   * メニューを取得します。
   */
  _getMenu() {
    if(this.state.activeMenu) {
      return (<Menu onCancel={this._onCancel}/>);
    }
  }

  /**
   * アイコンクリック時のハンドラーです。
   */
  _onClickIcon() {
    this.setState({
      activeMenu: true
    });
  }

  /**
   * キャンセルされた際のハンドラーです。
   */
  _onCancel() {
    this.setState({
      activeMenu: false
    });
  }
}
