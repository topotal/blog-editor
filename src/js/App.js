import React from 'react';
import ReactDOM from 'react-dom';
import Top from './views/top/Top';
import Login from './views/login/Login';
import AppModel from './models/AppModel';

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
    this._onExpiredToken = this._onExpiredToken.bind(this);

    // ユーザーモデル
    this._appModel = AppModel.instance;
    this._appModel.addEventListener('expiredToken', this._onExpiredToken);

    this.state = {
      alredyLogged: !!this._appModel.token
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
        return <Login onLogged={this._onLogged}/>
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

  /**
   * トークンが無効化された際のハンドラーです。
   */
  _onExpiredToken() {
    this.setState({
      alredyLogged: false
    });
  }
}

// メインクラスを描画
ReactDOM.render(
  <App />,
  document.getElementById('main')
);
