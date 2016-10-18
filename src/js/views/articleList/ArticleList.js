import React from 'react';
import ArticleRow from './ArticleRow';
import GetArticlesService from '../../services/GetArticlesService';

/**
 * 記事一覧クラスです。
 */
export default class ArticleList extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onClickRow = this._onClickRow.bind(this);
    this._onClickNew = this._onClickNew.bind(this);
    this._onSuccessGetList = this._onSuccessGetList.bind(this);

    this.state = {
      articles: []
    };

    // 一覧取得サービス
    this._service = new GetArticlesService();
    this._service.addEventListener('success', this._onSuccessGetList);
  }

  /**
   * 描画します。
   */
  render() {
    var articleRows = this.state.articles.map((articleData, index) => {
      return (
        <ArticleRow articleData={articleData} onClick={this._onClickRow} key={index}/>
      );
    });

    return (
      <div className="articleList panel">
        <div className="listToolbar">
          <div className="roundButton" onClick={this._onClickNew}><i className="fa fa-file-text"/>新規作成</div>
        </div>
        <div className="listHeader">
        </div>
        <ul className="list">
          {articleRows}
        </ul>
        <div className="listFooter">
        </div>
      </div>
    );
  }

  /**
   * Rowクリック時のハンドラーです。
   */
  _onClickRow(articleData) {
    this.props.onSelectRow(articleData);
  }

  /**
   * 新規作成ボタン押下時のハンドラーです。
   */
  _onClickNew() {
    this.props.onClickNew();
  }

  /**
   * 記事一覧取得成功時のハンドラーです。
   */
  _onSuccessGetList(event) {
    let data = event.data;
    this.setState({
      articles: data.articles
    });
  }
}
