import React from 'react';

/**
 * サイドバークラスです。
 */
export default class Aside extends React.Component {

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
      <ul className="aside panel">
        <li></li>
      </ul>
    );
  }
}
