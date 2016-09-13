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

    this._onClick = this._onClick.bind(this);
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <ul className="aside panel" onClick={this._onClick}>
        <li className="toolButton"><i title="新規作成" className="fa fa-pencil-square-o fa-fw" ></i></li>
        <li className="toolButton"><i title="記事一覧" className="fa fa-list fa-fw" ></i></li>
      </ul>
    );
  }

  /**
   * クリック時のハンドラーです。
   */
  _onClick(event) {
    console.info(event);
  }
}
