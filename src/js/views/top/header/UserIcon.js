import React from 'react';
import classNames from 'classnames';
import MessageBox from '../../common/MessageBox';
import UserModel from '../../../models/UserModel';

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
    this.onClickSignOut = this.onClickSignOut.bind(this);

    this.state = {
      activeMessageBox: false
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
        <MessageBox className={classes} onCancel={this.onCancel}>
          <ul>
            <li className="userName">
              <i className="fa fa-user-circle"></i>sawa-zen
            </li>
            <li className="singOutButton" onClick={this.onClickSignOut}>
              <i className="fa fa-sign-out" aria-hidden="true"></i>
              Sing out
            </li>
          </ul>
        </MessageBox>

        <img src="https://avatars2.githubusercontent.com/u/3971271?v=3&s=466" alt="icon" width="32" height="32" onClick={this.onClickIcon} />
      </div>
    );
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
   * サインアウトクリック時のハンドラーです。
   */
  onClickSignOut() {
    // トークンを破棄してログイン画面へ戻る
    UserModel.instance.expireToken();
  }
}
