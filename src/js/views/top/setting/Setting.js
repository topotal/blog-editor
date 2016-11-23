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

    this._getUserService = new GetUserService();
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <div className="setting panel">
        <FieldSet legend="Setting" className="settingSet">
          <FieldSet legend="Profile" className="profileSet">
            <ImageSelectField label="Icon" />
            <TextField label="Name" />
            <TextArea label="Description" />
          </FieldSet>
        </FieldSet>
        <div className="roundButton">
          <i className="fa fa-floppy-o" aria-hidden="true"></i> 保存
        </div>
      </div>
    );
  }
}
