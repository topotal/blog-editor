import React from 'react';

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
        <div className="fieldGroup">
          <div className="fieldGroupBorder"/>
          <span className="fieldGroupLabel">Profile</span>
          <div className="field">
            <span className="fieldLabel">Name：</span>
            <input type="text" className="textField fieldInput" />
          </div>
        </div>
      </div>
    );
  }
}
