import React from 'react';
import ReactDOM from 'react-dom';
import Top from './views/top/Top';
import Login from './views/login/Login';
import UserModel from './models/UserModel';

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
    this._onLogged = this._onLogged.bind(this);

    this.state = {
      alredyLogged: !!UserModel.instance.token
    };
  }

  /**
   * 描画します。
   */
  render() {
    // ステートに応じた中身を取得します。
    let getContent = () => {
      if(this.state.alredyLogged) {
        return <Top />
      } else {
        return <Login active={true} onLogged={this._onLogged}/>
      }
    };

    return (
      <div className="app" onDragOver={this._onDragOver} onDrop={this._onDrop}>
        {getContent()}
      </div>
    );
  }

  /**
   * ログイン時のハンドラーです。
   */
  _onLogged() {
    this.setState({
      alredyLogged: true
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
