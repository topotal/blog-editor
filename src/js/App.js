import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './Editor';
import Preview from './Preview';

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
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <div className="app">
        <Editor />
        <Preview />
      </div>
    );
  }
}

// メインクラスを描画
ReactDOM.render(
  <App />,
  document.getElementById('main')
);
