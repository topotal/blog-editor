import React from 'react';
import Editor from './Editor';
import Preview from './Preview';
import SaveArticleService from '../../services/SaveArticleService';

/**
 * 記事クラス
 */
export default class Article extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this.state = {
      content:  ""
    };

    // 記事保存サービス
    this._service = new SaveArticleService();
    this._service.addEventListener('success', this._onSuccessSave);

    this._onChange = this._onChange.bind(this);
    this._onClickSave = this._onClickSave.bind(this);
    this._onPressCommandS = this._onPressCommandS.bind(this);

    Mousetrap.bind(['ctrl+s', 'command+s'], this._onPressCommandS);
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <div className="article">
        <div className="main">
          <Editor content={this.state.content} onChange={this._onChange} />
          <Preview content={this.state.content}/>
        </div>
        <div className="footer">
          <button className="button" onClick={this._onClickSave}>保存（⌘+S）</button>
        </div>
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

  /**
   * 保存ボタンクリック時のハンドラーです。
   */
  _onClickSave() {
    this._save();
  }

  /**
   * command+sを押した際のハンドラーです。
   */
  _onPressCommandS(e) {
    e.preventDefault();
    this._save();
  }

  /**
   * 記事を保存します。
   */
  _save() {
    this._service.post({});
  }

  /**
   * 記事保存成功時のハンドラーです。
   */
  _onSuccessSave(event) {
    console.info(event.data.article);
  }
}
