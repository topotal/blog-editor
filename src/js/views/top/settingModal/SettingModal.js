import React from 'react';
import classNames from 'classnames';
import Modal from '../../common/modal/Modal';
import ProfileFieldSet from './ProfileFieldSet';
import IconFieldSet from './IconFieldSet';
import GetUserService from '../../../services/GetUserService';
import SaveUserService from '../../../services/SaveUserService';
import UserModel from '../../../models/UserModel';

/**
 * 設定モーダルクラスです。
 */
export default class SettingModal extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onClickCancel = this._onClickCancel.bind(this);
    this._onClickSave = this._onClickSave.bind(this);
    this._onChangeIcon = this._onChangeIcon.bind(this);
    this._onSuccessGetUser = this._onSuccessGetUser.bind(this);

    // ユーザー情報取得サービス
    this._getUserService = new GetUserService();
    this._getUserService.addEventListener('success', this._onSuccessGetUser);

    // ユーザー情報更新サービス
    this._saveUserService = new SaveUserService();
    this._saveUserService.addEventListener('success', this._onSuccessSaveUser);

    this.state = {
      userData: new UserModel()
    };
  }

  /**
   * コンポーネントがマウントされた際のハンドラーです。
   */
  componentDidMount() {
    // ユーザーデータ取得を開始
    this._getUserService.send();
  }

  /**
   * 描画します。
   */
  render() {
    let classes = classNames('settingModal', this.props.className);
    return (
      <Modal title="設定" className={classes}>
        <div className="settingModal_form">
          <ProfileFieldSet userData={this.state.userData} />
          <IconFieldSet userData={this.state.userData} onChange={this._onChangeIcon} />
        </div>
        <div className="settingModal_buttons">
          <div className="roundButton" onClick={this._onClickCancel}>キャンセル</div>
          <div className="roundButton" onClick={this._onClickSave}>更新</div>
        </div>
      </Modal>
    );
  }

  /**
   * ユーザー情報取得成功時のハンドラーです。
   */
  _onSuccessGetUser(event) {
    this.setState({
      userData: event.data.userData
    });
  }

  /**
   * ユーザー情報更新成功時のハンドラーです。
   */
  _onSuccessSaveUser(event) {
    console.info(save);
  }

  /**
   * キャンセルボタン押下時のハンドラーです。
   */
  _onClickCancel() {
    // キャンセルイベント発火
    if(this.props.onCancel) {
      this.props.onCancel();
    }
  }

  /**
   * 更新ボタン押下時のハンドラーです。
   */
  _onClickSave() {
    this._saveUserService.send(this.state.userData);
  }

  /**
   * アイコンが変わった際のハンドラーです。
   */
  _onChangeIcon(userData) {
    this.setState({
      userData: userData
    });
  }
}
