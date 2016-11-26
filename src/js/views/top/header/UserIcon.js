import React from 'react';
import classNames from 'classnames';
import MessageBox from '../../common/MessageBox';
import AppModel from '../../../models/AppModel';
import SettingModal from '../settingModal/SettingModal';

/**
 * ユーザーアイコンクラス
 */
export default class UserIcon extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this.onCancel = this.onCancel.bind(this);
    this.onClickIcon = this.onClickIcon.bind(this);
    this.onClickSetting = this.onClickSetting.bind(this);
    this.onClickSignOut = this.onClickSignOut.bind(this);
    this.onCancelSetting = this.onCancelSetting.bind(this);

    this.state = {
      activeMessageBox: false,
      activeSettingModal: false
    };
  }

  /**
   * 描画します。
   */
  render() {
    let classes = classNames({
      active: this.state.activeMessageBox
    });
    return (
      <div className="userIcon">
        {this.getSettingModal()}
        <MessageBox className={classes} onCancel={this.onCancel}>
          <ul>
            <li className="userName">
              <i className="fa fa-user-circle"></i>sawa-zen
            </li>
            <li className="settingButton" onClick={this.onClickSetting}>
              <i className="fa fa-cog" aria-hidden="true"></i>
              Setting
            </li>
            <li className="singOutButton" onClick={this.onClickSignOut}>
              <i className="fa fa-sign-out" aria-hidden="true"></i>
              Sing out
            </li>
          </ul>
        </MessageBox>

        <img className="userIconImage" src="https://avatars2.githubusercontent.com/u/3971271?v=3&s=466" alt="icon" width="32" height="32" onClick={this.onClickIcon} />
      </div>
    );
  }

  /**
   * 設定モーダルを返します。
   */
  getSettingModal() {
    if(this.state.activeSettingModal) {
      return (<SettingModal onCancel={this.onCancelSetting}/>);
    }
    return;
  }

  /**
   * キャンセルされた際のハンドラーです。
   */
  onCancel() {
    this.setState({
      activeMessageBox: false
    });
  }

  /**
   * アイコンクリック時のハンドラーです。
   */
  onClickIcon() {
    this.setState({
      activeMessageBox: true
    });
  }

  /**
   * 設定ボタン押下時のハンドラーです。
   */
  onClickSetting() {
    this.setState({
      activeMessageBox: false,
      activeSettingModal: true
    });
  }

  /**
   * 設定モーダルキャンセル時のハンドラーです。
   */
  onCancelSetting() {
    this.setState({ activeSettingModal: false });
  }

  /**
   * サインアウトクリック時のハンドラーです。
   */
  onClickSignOut() {
    // トークンを破棄してログイン画面へ戻る
    AppModel.instance.expireToken();
  }
}
