import React from 'react';
import FieldSet from '../../common/form/FieldSet';
import TextField from '../../common/form/TextField';
import TextArea from '../../common/form/TextArea';
import ComboBox from '../../common/form/ComboBox';
import ImageSelectField from '../../common/form/ImageSelectField';
import GetUserService from '../../../services/GetUserService';

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
      name: ''
    };

    this._onChangeField = this._onChangeField.bind(this);
    this._onSuccessGetUser = this._onSuccessGetUser.bind(this);
    this._onClickSaveButton = this._onClickSaveButton.bind(this);

    this._getUserService = new GetUserService();
    this._getUserService.addEventListener('success', this._onSuccessGetUser);

    this._getUserService.send();
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <div className="setting panel">
        <FieldSet legend="Setting" className="settingSet">
          <FieldSet ref="profile" legend="Profile" className="profileSet">
            <ImageSelectField label="Icon" name="iconImageUrl" onChange={this._onChangeField} />
            <TextField label="Name" name="name" onChange={this._onChangeField} />
            <TextArea label="Description" name="description" onChange={this._onChangeField} />
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
    console.info(this.state);
  }

  /**
   * ユーザー情報取得成功時のハンドラーです。
   */
  _onSuccessGetUser(event) {
    console.info(event);
  }

  /**
   * フィールドの値が変更された際のハンドラーです。
   */
  _onChangeField(event) {
    console.info(event);
    let state = this.state;
    state[event.name] = event.value;
    this.setState(state);
  }
}
