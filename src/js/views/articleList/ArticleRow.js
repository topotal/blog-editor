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
        <div className="id">{data.id}</div>
        <div className="title">{data.title || "未タイトル"}</div>
        <div className="updatedAt">{data.updatedAt}</div>
        <div className="status"></div>
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
