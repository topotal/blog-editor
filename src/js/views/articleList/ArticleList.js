import React from 'react';
import ArticleRow from './ArticleRow';

export default class ArticleList extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onClickRow = this._onClickRow.bind(this);

    this.state = {
      articles: [{}, {}]
    };
  }

  /**
   * 描画します。
   */
  render() {
    var articleRows = this.state.articles.map((articleData, index) => {
      return (
        <ArticleRow articleData={articleData} onClick={this._onClickRow} key={index}/>
      );
    });

    return (
      <ul className="articleList">
        {articleRows}
      </ul>
    );
  }

  /**
   * Rowクリック時のハンドラーです。
   */
  _onClickRow() {
    console.info("click");
  }
}
