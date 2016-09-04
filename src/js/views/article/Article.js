import React from 'react';
import Editor from './Editor';
import Preview from './Preview';
import ArticleModel from '../../models/ArticleModel';
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

    let articleData = new ArticleModel();
    articleData.content = "テスト・テスト";
    this.state = {
      articleData: articleData
    };

    // 記事作成サービス
    this._saveService = new SaveArticleService();

    this._onChange = this._onChange.bind(this);
    this._onClickSave = this._onClickSave.bind(this);
    this._onPressCommandS = this._onPressCommandS.bind(this);
    this._onSuccessSave = this._onSuccessSave.bind(this);

    this._saveService.addEventListener('success', this._onSuccessSave);
    Mousetrap.bind(['ctrl+s', 'command+s'], this._onPressCommandS);
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <div className="article">
        <div className="main">
          <Editor articleData={this.state.articleData} onChange={this._onChange} />
          <Preview articleData={this.state.articleData}/>
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
  _onChange(articleData) {
    this.setState({ articleData: articleData });
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
    let articleData = this.state.articleData;
    this._saveService.send(this.state.articleData);
  }

  /**
   * 記事作成成功時のハンドラーです。
   */
  _onSuccessSave(event) {
    let data = event.data;
    this.setState({
      articleData: data.articleData
    });
  }

  /**
   * 記事更新成功時のハンドラーです。
   */
  _onSuccessUpdate(event) {
    let data = event.data;
    this.setState({
      articleData: data.articleData
    });
  }
}
