import React from 'react';
import classNames from 'classnames';
import Editor from './Editor';
import Preview from './Preview';
import ArticleModel from '../../models/ArticleModel';
import SaveArticleService from '../../services/SaveArticleService';
import PublishStatusData from '../../models/vo/PublishStatusData';

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
    this._onSuccessSave = this._onSuccessSave.bind(this);
    this._onChangePublic = this._onChangePublic.bind(this);
    this._onPressCommandS = this._onPressCommandS.bind(this);

    this._saveService.addEventListener('success', this._onSuccessSave);
    Mousetrap.bind(['ctrl+s', 'command+s'], this._onPressCommandS);
  }

  /**
   * 描画します。
   */
  render() {
    let options = PublishStatusData.LIST.map((data, index) => {
      return (
        <option value={data.type} key={index}>{data.text}</option>
      );
    });

    return (
      <div className="article panel">
        <div className="articleFooter">
          <lebel className="public">
            公開設定：
            <select onChange={this._onChangePublic}>
              {options}
            </select>
          </lebel>
        </div>
        <div className="main">
          <Editor ref="editor" articleData={this.state.articleData} onChange={this._onChange} />
          <Preview articleData={this.state.articleData}/>
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

  /**
   * 公開設定を変更した際のハンドラーです。
   */
  _onChangePublic(event) {
    let publishStatus = event.target.value;
    let articleData = this.state.articleData;
    articleData.publishStatus = publishStatus;
    this.setState({
      articleData: articleData
    });
  }
 }
