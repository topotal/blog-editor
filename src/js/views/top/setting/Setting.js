import React from 'react';
import FieldSet from '../../common/form/FieldSet';
import TextField from '../../common/form/TextField';
import TextArea from '../../common/form/TextArea';

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
        <FieldSet legend="Profile" className="profileSet">
          <TextField label="Icon" />
          <TextField label="Name" />
          <TextArea label="Profile" />
        </FieldSet>
        <FieldSet legend="Editor" className="editorSet">
          <TextField label="Style" />
          <TextField label="Theme" />
        </FieldSet>
      </div>
    );
  }
}
