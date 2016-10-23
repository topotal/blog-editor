import React from 'react';
import Modal from '../common/Modal';
import classNames from 'classnames';
import LoginService from '../../services/LoginService';
import UserModel from '../../models/UserModel';

/**
 * ログイン画面クラス
 */
export default class Login extends React.Component {

  /**
   * コンストラクター
   */
  constructor(props) {
    super(props);

    this._onClickSubmit = this._onClickSubmit.bind(this);
    this._onSuccessLogin = this._onSuccessLogin.bind(this);

    // ログインサービス
    this._loginService = new LoginService();
    this._loginService.addEventListener('success', this._onSuccessLogin);

    // ユーザーモデル
    this._userModel = UserModel.instance;

    this.state = {
      active: this.props.active
    };
  }

  /**
   * propが変更された際のハンドラー
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      active: nextProps.active
    });
  }

  /**
   * 描画します。
   */
  render() {
    // モーダルのクラス郡
    let modalClasses = classNames('login', {
      active: this.state.active
    });

    return (
      <Modal title="ログイン" className={modalClasses} ref="imageModal">
        <img className="logo" src="/images/logo_l.png" alt="topotal" width="100" height="100" />
        <input
          type="text"
          placeholder="username"
          className="textField username mousetrap"
        />
        <input
          type="password"
          placeholder="password"
          className="textField password mousetrap"
        />
        <a className="roundButton submit" onClick={this._onClickSubmit}>
          ログイン
        </a>
      </Modal>
    );
  }

  /**
   * 送信ボタン押下時のハンドラーです。
   */
  _onClickSubmit() {
    // ログイン済みイベント発火
    this._loginService.send({
      name: 'topotan',
      password: 'naripika'
    });
  }

  /**
   * ログイン成功時のハンドラーです。
   */
  _onSuccessLogin(event) {
    console.info(event.data);
    this._userModel.token = event.data.token;
    this.props.onLogged();
  }
}
