import React from 'react';
import ReactDOM from 'react-dom';

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
      <div id="editor">
      </div>
    );
  }
}

// メインクラスを描画
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
