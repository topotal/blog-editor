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

    this._onClick = this._onClick.bind(this);
  }

  /**
   * マウントされた際のハンドラーです。
   */
  componentDidMount() {
    let li = this.refs.row;
    li.addEventListener('click', this._onClick);
  }

  /**
   * 描画します。
   */
  render() {
    let data = this.props.articleData;
    return (
      <li className="articleRow" ref="row">
        <div className="title">{data.title}</div>
        <div className="createdAt">作成日：{data.createdAt}</div>
        <div className="updatedAt">更新日：{data.createdAt}</div>
      </li>
    );
  }

  /**
   * クリック時のハンドラーです。
   */
  _onClick() {
    this.props.onClick(this.props.articleData);
  }
}
