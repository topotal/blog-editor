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

    this.state = {
      content: "初期値でーす"
    };

    this._onChange = this._onChange.bind(this);
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <div className="app">
        <Editor content={this.state.content} onChange={this._onChange} />
        <Preview content={this.state.content}/>
      </div>
    );
  }

  /**
   * 記事内容変更時のハンドラーです。
   */
  _onChange(value) {
    this.setState({
      content: value
    });
  }
}

// メインクラスを描画
ReactDOM.render(
  <App />,
  document.getElementById('main')
);
