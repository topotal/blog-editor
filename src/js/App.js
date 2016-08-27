import React from 'react';
import ReactDOM from 'react-dom';
import Article from './views/article/Article';

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
      content: ""
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
        <Article />
      </div>
    );
  }
}

// メインクラスを描画
ReactDOM.render(
  <App />,
  document.getElementById('main')
);
