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

    this._onDrop = this._onDrop.bind(this);
    this._onDragOver = this._onDragOver.bind(this);
    this._onSelectRow = this._onSelectRow.bind(this);
    this._onClickBackTop = this._onClickBackTop.bind(this);

    this.state = {
      articleData: null
    };
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <div className="app" onDragOver={this._onDragOver} onDrop={this._onDrop}>
        // ヘッダー
        <div className="header">
          {
            this.state.articleData ?
              <button className="button" onClick={this._onClickBackTop}>
                一覧に戻る
              </button> : null
          }
        </div>

        // コンテンツ
        <div className="content">
          {
            this.state.articleData ?
              <Article articleData={this.state.articleData} /> :
              <ArticleList onSelectRow={this._onSelectRow} />
          }
        </div>
      </div>
    );
  }

  /**
   * 記事を選択した際のハンドラーです。
   */
  _onSelectRow(articleData) {
    this.setState({
      articleData: articleData
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
}

// メインクラスを描画
ReactDOM.render(
  <App />,
  document.getElementById('main')
);
