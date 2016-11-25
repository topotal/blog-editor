import React from 'react';
import Modal from '../common/modal/Modal';
import classNames from 'classnames';
import LoginService from '../../services/LoginService';
import AppModel from '../../models/AppModel';
import Mousetrap from 'mousetrap';

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

    // エンターを押したらサブミット
    Mousetrap.bind('enter', this._onClickSubmit);

    // ユーザーモデル
    this._userModel = AppModel.instance;

    this.state = {
      active: this.props.active
    };
  }

  /**
   * マウントされた際のハンドラーです。
   */
  componentDidMount() {
    // nameのフォームにフォーカスを当てる
    this.refs.name.focus();
  }

  /**
   * アンマウントされた際のハンドラーです。
   */
  componentWillUnmount() {
    this._loginService.removeEventListener('success', this._onSuccessLogin);
    Mousetrap.unbind('enter');
  }

  /**
   * propが変更された際のハンドラーです。
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
        <img className="logo" src="images/logo_l.png" alt="topotal" width="100" height="100" />
        <input
          type="text"
          ref="name"
          placeholder="name"
          className="textField username mousetrap"
        />
        <input
          type="password"
          ref="password"
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
      name: this.refs.name.value,
      password: this.refs.password.value
    });
  }

  /**
   * ログイン成功時のハンドラーです。
   */
  _onSuccessLogin(event) {
    this._userModel.token = event.data.token;
    this.props.onLogged();
  }
}
