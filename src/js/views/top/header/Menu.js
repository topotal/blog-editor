import React from 'react';
import classNames from 'classnames';
import MessageBox from '../../common/MessageBox';
import AppModel from '../../../models/AppModel';
import SettingModal from '../settingModal/SettingModal';

/**
 * メニュークラスです。
 */
export default class Menu extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onClickBack = this._onClickBack.bind(this);
    this._onClickSetting = this._onClickSetting.bind(this);
    this._onClickSignOut = this._onClickSignOut.bind(this);
    this._onCancelSetting = this._onCancelSetting.bind(this);

    this.state = {
      activeSettingModal: false
    };
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <MessageBox className="menu" onClickBack={this._onClickBack}>
        {this.getSettingModal()}
        <ul className="menu_items">
          <li className="menu_item name">
            <i className="fa fa-user-circle"></i>sawa-zen
          </li>
          <li className="menu_item settingButton" onClick={this._onClickSetting}>
            <i className="fa fa-cog" aria-hidden="true"></i>
            Setting
          </li>
          <li className="menu_item singOutButton" onClick={this._onClickSignOut}>
            <i className="fa fa-sign-out" aria-hidden="true"></i>
            Sing out
          </li>
        </ul>
      </MessageBox>
    );
  }

  /**
   * 設定モーダルを返します。
   */
  getSettingModal() {
    if(this.state.activeSettingModal) {
      return (<SettingModal onCancel={this._onCancelSetting}/>);
    }
    return;
  }

  /**
   * バッククリック時のハンドラーです。
   */
  _onClickBack() {
    if(this.props.onCancel) {
      this.props.onCancel();
    }
  }

  /**
   * 設定ボタン押下時のハンドラーです。
   */
  _onClickSetting() {
    this.setState({ activeSettingModal: true });
  }

  /**
   * サインアウトクリック時のハンドラーです。
   */
  _onClickSignOut() {
    // トークンを破棄してログイン画面へ戻る
    AppModel.instance.expireToken();
  }

  /**
   * 設定モーダルキャンセル時のハンドラーです。
   */
  _onCancelSetting() {
    this.setState({ activeSettingModal: false });
  }
}
