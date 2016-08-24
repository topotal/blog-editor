import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './views/Editor';
import Preview from './views/Preview';
import Header from './views/Header';
import Footer from './views/Footer';

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

    this._onChange = this._onChange.bind(this);
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <div className="app">
        <Header />
        <div className="middle">
          <Editor content={this.state.content} onChange={this._onChange} />
          <Preview content={this.state.content}/>
        </div>
        <Footer />
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
