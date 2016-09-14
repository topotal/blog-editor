import React from 'react';
import ReactDOM from 'react-dom';
import Article from './views/article/Article';
import ArticleList from './views/articleList/ArticleList';
import Aside from './views/aside/Aside';

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

    this._onDrop = this._onDrop.bind(this);
    this._onDragOver = this._onDragOver.bind(this);
    this._onSelectRow = this._onSelectRow.bind(this);
    this._onClickAside = this._onClickAside.bind(this);
    this._onClickBackTop = this._onClickBackTop.bind(this);

    this.state = {
      articleData: null,
      currentPage: 'articles'
    };
  }

  /**
   * 描画します。
   */
  render() {
    let getContent = () => {
      switch (this.state.currentPage) {
        case 'new': return ( <Article articleData={this.state.articleData} /> );
        case 'articles': return ( <ArticleList onSelectRow={this._onSelectRow} /> );
      }
    };

    return (
      <div className="app" onDragOver={this._onDragOver} onDrop={this._onDrop}>
        <div className="header">
          <img className="logo" src="images/logo.png" alt="topotal" width="95" height="28" />
        </div>
        <Aside onClick={this._onClickAside} />
        <div className="content">
          {getContent()}
        </div>
      </div>
    );
  }

  /**
   * 記事を選択した際のハンドラーです。
   */
  _onSelectRow(articleData) {
    this.setState({
      articleData: articleData,
      currentPage: 'new'
    });
  }

  /**
   * 一覧へ戻るボタン押下時のハンドラーです。
   */
  _onClickBackTop() {
    this.setState({
      articleData: null
    });
  }

  /**
   * ドラッグオーバーされた際のハンドラーです。
   */
  _onDragOver(event) {
    event.preventDefault();
  }

  /**
   * ドロップされた際のハンドラーです。
   */
  _onDrop(event) {
    event.preventDefault();
  }

  /**
   * サイドバーのアイテムクリック時のハンドラーです。
   */
  _onClickAside(type) {
    this.setState({
      currentPage: type
    });
  }
}

// メインクラスを描画
ReactDOM.render(
  <App />,
  document.getElementById('main')
);
