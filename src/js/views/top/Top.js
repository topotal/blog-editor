import React from 'react';
import Entry from '../entry/Entry';
import Entries from '../entries/Entries';
import Aside from './Aside';
import UserIcon from './UserIcon';
import Setting from '../setting/Setting';

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
      entryData: null,
      currentPage: 'entries'
    };
  }

  /**
   * 描画します。
   */
  render() {
    // ステートに応じた中身を取得します。
    let getContent = () => {
      switch (this.state.currentPage) {
        case 'editor': return ( <Entry entryData={this.state.entryData} /> );
        case 'entries': return ( <Entries refs="entries" onSelectRow={this._onSelectRow} onClickNew={this._onClickNew}/> );
        case 'account': return ( <Setting /> );
      }
    };

    return (
      <div className="top">
        <div className="header">
          <img className="logo" src="images/logo.png" alt="topotal" width="104" height="28" />
          <UserIcon />
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
  _onSelectRow(entryData) {
    this.setState({
      entryData: entryData,
      currentPage: 'editor'
    });
  }

  /**
   * 新規作成ボタン押下時のハンドラーです。
   */
  _onClickNew() {
    this.setState({
      entryData: null,
      currentPage: 'editor'
    });
  }

  /**
   * 一覧へ戻るボタン押下時のハンドラーです。
   */
  _onClickBackTop() {
    this.setState({
      entryData: null
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
