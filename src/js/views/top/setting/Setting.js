import React from 'react';
import FieldSet from '../../common/form/FieldSet';
import TextField from '../../common/form/TextField';
import TextArea from '../../common/form/TextArea';
import ComboBox from '../../common/form/ComboBox';
import ImageSelectField from '../../common/form/ImageSelectField';
import EditorStyleData from '../../../models/vo/EditorStyleData';

/**
 * アカウント編集画面クラス
 */
export default class Setting extends React.Component {

  /**
   * コンストラクター
   */
  constructor(props) {
    super(props);
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
            <TextArea label="Profile" />
          </FieldSet>
          <FieldSet legend="Editor" className="editorSet">
            <ComboBox
              label="Style"
              store={EditorStyleData.LIST}
              displayField="label"
              valueField="value"
              value="Vim"
            />
          </FieldSet>
        </FieldSet>
      </div>
    );
  }
}
