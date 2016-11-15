import React from 'react';
import FieldSet from '../common/form/FieldSet';
import TextField from '../common/form/TextField';
import TextArea from '../common/form/TextArea';

/**
 * アカウント編集画面クラス
 */
export default class Account extends React.Component {

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
      <div className="account panel">
        <FieldSet legend="Acount" className="accountGroup">
          <FieldSet legend="Profile">
            <TextField label="Icon" />
            <TextField label="Name" />
            <TextArea label="Profile" />
          </FieldSet>
        </FieldSet>
      </div>
    );
  }
}
