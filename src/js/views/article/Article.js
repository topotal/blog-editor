import React from 'react';
import Editor from './Editor';
import Preview from './Preview';
import Modal from '../common/Modal';
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

    this.state = {
      articleData: this.props.articleData || new ArticleModel()
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
        // 画像選択ウィンドウ
        <Modal title="画像選択" className="imageList">
          <ul className="panel">
            <li><img src="https://qiita-image-store.s3.amazonaws.com/0/42248/d56376a7-4949-d9d6-5590-9c4968ee5eba.png" alt="" /></li>
            <li><img src="https://qiita-image-store.s3.amazonaws.com/0/42248/d56376a7-4949-d9d6-5590-9c4968ee5eba.png" alt="" /></li>
            <li><img src="https://qiita-image-store.s3.amazonaws.com/0/42248/d56376a7-4949-d9d6-5590-9c4968ee5eba.png" alt="" /></li>
            <li><img src="https://qiita-image-store.s3.amazonaws.com/0/42248/d56376a7-4949-d9d6-5590-9c4968ee5eba.png" alt="" /></li>
            <li><img src="https://qiita-image-store.s3.amazonaws.com/0/42248/d56376a7-4949-d9d6-5590-9c4968ee5eba.png" alt="" /></li>
            <li><img src="https://qiita-image-store.s3.amazonaws.com/0/42248/d56376a7-4949-d9d6-5590-9c4968ee5eba.png" alt="" /></li>
            <li><img src="https://qiita-image-store.s3.amazonaws.com/0/42248/d56376a7-4949-d9d6-5590-9c4968ee5eba.png" alt="" /></li>
            <li><img src="https://qiita-image-store.s3.amazonaws.com/0/42248/d56376a7-4949-d9d6-5590-9c4968ee5eba.png" alt="" /></li>
            <li><img src="https://qiita-image-store.s3.amazonaws.com/0/42248/d56376a7-4949-d9d6-5590-9c4968ee5eba.png" alt="" /></li>
            <li><img src="https://qiita-image-store.s3.amazonaws.com/0/42248/d56376a7-4949-d9d6-5590-9c4968ee5eba.png" alt="" /></li>
            <li><img src="https://qiita-image-store.s3.amazonaws.com/0/42248/d56376a7-4949-d9d6-5590-9c4968ee5eba.png" alt="" /></li>
          </ul>
          <div className="imageListFooter">
            <a className="roundButton cancel">キャンセル</a>
            <a className="roundButton">決定</a>
          </div>
        </Modal>

        // ツールバー
        <ul className="toolbar panel">
          <li><i title="画像を追加" className="fa fa-picture-o fa-fw"></i></li>
        </ul>

        // エディターメインパネル
        <div className="main panel">
          <Editor articleData={this.state.articleData} onChange={this._onChange} />
          <Preview articleData={this.state.articleData}/>
        </div>

        // フッターパネル
        <div className="footer panel">
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
