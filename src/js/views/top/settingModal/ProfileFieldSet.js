import React from 'react';
import FieldSet from '../../common/form/FieldSet';
import TextField from '../../common/form/TextField';
import TextArea from '../../common/form/TextArea';
import SaveUserService from '../../../services/SaveUserService';
import ApiParam from '../../../enum/ApiParam';

/**
 * プロフィールフィールドセットクラス
 */
export default class ProfileFieldSet extends React.Component {

  /**
   * コンストラクター
   */
  constructor(props) {
    super(props);

    this.state = {
      userData: this.props.userData
    };

    this._onChangeField = this._onChangeField.bind(this);
  }

  /**
   * propが変更された際のハンドラー
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      userData: nextProps.userData
    });
  }

  /**
   * 描画します。
   */
  render() {
    let userData = this.state.userData;
    return (
      <FieldSet legend="Profile" className="profileFieldSet">
        <TextField
          className="profileFieldSet_field"
          label="Name"
          name="name"
          value={userData.name}
          onChange={this._onChangeField}
        />
        <TextArea
          className="profileFieldSet_field"
          label="Description"
          name="description"
          value={userData.description}
          onChange={this._onChangeField}
        />
      </FieldSet>
    );
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
