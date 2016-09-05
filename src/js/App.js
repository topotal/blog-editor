import React from 'react';
import ReactDOM from 'react-dom';
import Article from './views/article/Article';
import ArticleList from './views/articleList/ArticleList';

/**
 * メインクラスです。
 */
class App extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(prop) {
    super(prop);

    this.state = {
      articleData: null
    };
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <div className="app">
        <div className="header">
        </div>
        <div className="content">
          { this.state.articleData ? <Article /> : <ArticleList /> }
        </div>
      </div>
    );
  }
}

// メインクラスを描画
ReactDOM.render(
  <App />,
  document.getElementById('main')
);
