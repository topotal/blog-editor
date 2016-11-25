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
 * アカウント編集画面クラス
 */
export default class Setting extends React.Component {

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

    this._getUserService = new GetUserService();
    this._getUserService.addEventListener('success', this._onSuccessGetUser);

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
      <div className="setting panel">
        <FieldSet legend="Setting" className="settingSet">
          <FieldSet ref="profile" legend="Profile" className="profileSet">
            <ImageSelectField
              label="Icon"
              name="iconImageUrl"
              value={userData.iconImageUrl}
              onChange={this._onChangeField}
            />
            <TextField
              label="Name"
              name="name"
              value={userData.name}
              onChange={this._onChangeField}
            />
            <TextArea
              label="Description"
              name="description"
              value={userData.description}
              onChange={this._onChangeField}
            />
          </FieldSet>
        </FieldSet>
        <div className="roundButton" onClick={this._onClickSaveButton}>
          <i className="fa fa-floppy-o" aria-hidden="true"></i> 保存
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
