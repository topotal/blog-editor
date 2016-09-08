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
    this._onSuccessGetList = this._onSuccessGetList.bind(this);

    this.state = {
      articles: []
    };

    // 一覧取得サービス
    this._service = new GetArticlesService();
    this._service.addEventListener('success', this._onSuccessGetList);

    // 最初の一覧を取得
    this._service.send();
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
      <div className="articleList">
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
   * 記事一覧取得成功時のハンドラーです。
   */
  _onSuccessGetList(event) {
    let data = event.data;
    this.setState({
      articles: data.articles
    });
  }
}
