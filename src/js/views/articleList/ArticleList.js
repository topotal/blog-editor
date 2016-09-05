import React from 'react';
import ArticleRow from './ArticleRow';

export default class ArticleList extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this.state = {
      articles: [{}, {}]
    };
  }

  /**
   * 描画します。
   */
  render() {
    var articleRows = this.state.articles.map(function (articleData) {
      return (
        <ArticleRow articleData={articleData} />
      );
    });

    return (
      <ul className="articleList">
        {articleRows}
      </ul>
    );
  }
}
