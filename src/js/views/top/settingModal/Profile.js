import React from 'react';
import FieldSet from '../../common/form/FieldSet';
import TextField from '../../common/form/TextField';
import TextArea from '../../common/form/TextArea';
import ComboBox from '../../common/form/ComboBox';
import ImageSelectField from '../../common/form/ImageSelectField';
import GetUserService from '../../../services/GetUserService';
import SaveUserService from '../../../services/SaveUserService';
import UserModel from '../../../models/UserModel';

/**
 * プロフィール編集画面クラス
 */
export default class Profile extends React.Component {

  /**
   * コンストラクター
   */
  constructor(props) {
    super(props);

    this.state = {
      userData: new UserModel()
    };

    this._onChangeField = this._onChangeField.bind(this);
    this._onSuccessGetUser = this._onSuccessGetUser.bind(this);
    this._onSuccessSaveUser = this._onSuccessSaveUser.bind(this);
    this._onClickSaveButton = this._onClickSaveButton.bind(this);
    this._onClickCancel = this._onClickCancel.bind(this);

    // ユーザー情報取得サービス
    this._getUserService = new GetUserService();
    this._getUserService.addEventListener('success', this._onSuccessGetUser);

    // ユーザー情報更新サービス
    this._saveUserService = new SaveUserService();
    this._saveUserService.addEventListener('success', this._onSuccessSaveUser);
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
    let userData = this.state.userData;
    return (
      <div className="profile">
        <FieldSet ref="profile" legend="Profile" className="profile_fieldSet">
          <ImageSelectField
            className="profile_field"
            label="Icon"
            name="iconImageUrl"
            value={userData.iconImageUrl}
            onChange={this._onChangeField}
          />
          <TextField
            className="profile_field"
            label="Name"
            name="name"
            value={userData.name}
            onChange={this._onChangeField}
          />
          <TextArea
            className="profile_field"
            label="Description"
            name="description"
            value={userData.description}
            onChange={this._onChangeField}
          />
        </FieldSet>
        <div className="profile_buttons">
          <div className="roundButton" onClick={this._onClickSaveButton}>
            OK
          </div>
          <div className="roundButton cancel" onClick={this._onClickCancel}>
            キャンセル
          </div>
        </div>
      </div>
    );
  }

  /**
   * 保存ボタン押下時のハンドラーです。
   */
  _onClickSaveButton() {
    this._saveUserService.send();
  }

  /**
   * キャンセル押下時のハンドラーです。
   */
  _onClickCancel() {
    // キャンセル押下イベント発火
    if(this.props.onClickCancel) {
      this.props.onClickCancel();
    }
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
   * ユーザー情報保存成功時のハンドラーです。
   */
  _onSuccessSaveUser(event) {
    console.info('saved', event);
  }

  /**
   * フィールドの値が変更された際のハンドラーです。
   */
  _onChangeField(event) {
    let userData = this.state.userData;
    userData[event.name] = event.value;
    this.setState({
      userData: userData
    });
  }
}
