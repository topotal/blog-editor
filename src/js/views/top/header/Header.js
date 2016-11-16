import React from 'react';
import UserIcon from './UserIcon';

/**
 * ヘッダークラスです。
 */
export default class Header extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <div className="header">
        <img className="logo" src="images/logo.png" alt="topotal" width="104" height="28" />
        <UserIcon />
      </div>
    );
  }
}
