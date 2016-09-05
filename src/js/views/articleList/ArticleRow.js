import React from 'react';

/**
 * 記事リストのRowクラスです。
 */
export default class ArticleRow extends React.Component {

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
      <li className="articleRow">
        <div className="title">タイトル</div>
      </li>
    );
  }
}
