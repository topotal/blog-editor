import React from 'react';
import Entry from '../entry/Entry';
import Entries from '../entries/Entries';
import Aside from '../aside/Aside';

/**
 * トップページクラスです。
 */
export default class Top extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onClickNew = this._onClickNew.bind(this);
    this._onSelectRow = this._onSelectRow.bind(this);
    this._onClickAside = this._onClickAside.bind(this);
    this._onClickBackTop = this._onClickBackTop.bind(this);

    this.state = {
      articleData: null,
      currentPage: 'articles'
    };
  }

  /**
   * 描画します。
   */
  render() {
    // ステートに応じた中身を取得します。
    let getContent = () => {
      switch (this.state.currentPage) {
        case 'editor': return ( <Entry articleData={this.state.articleData} /> );
        case 'articles': return ( <Entries refs="articles" onSelectRow={this._onSelectRow} onClickNew={this._onClickNew}/> );
      }
    };

    return (
      <div className="top">
        <div className="header">
          <img className="logo" src="images/logo.png" alt="topotal" width="104" height="28" />
        </div>
        <Aside onClick={this._onClickAside} />
        <div className="content">
          {getContent()}
        </div>
      </div>
    );
  }

  /**
   * 記事を選択した際のハンドラーです。
   */
  _onSelectRow(articleData) {
    this.setState({
      articleData: articleData,
      currentPage: 'editor'
    });
  }

  /**
   * 新規作成ボタン押下時のハンドラーです。
   */
  _onClickNew() {
    this.setState({
      articleData: null,
      currentPage: 'editor'
    });
  }

  /**
   * 一覧へ戻るボタン押下時のハンドラーです。
   */
  _onClickBackTop() {
    this.setState({
      articleData: null
    });
  }

  /**
   * サイドバーのアイテムクリック時のハンドラーです。
   */
  _onClickAside(type) {
    this.setState({
      currentPage: type
    });
  }
}
