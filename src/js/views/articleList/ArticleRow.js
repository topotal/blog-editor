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
   * マウントされた際のハンドラーです。
   */
  componentDidMount() {
    let li = this.refs.row;
    li.addEventListener('click', this.props.onClick);
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <li className="articleRow" ref="row">
        <div className="title">タイトル</div>
      </li>
    );
  }
}
