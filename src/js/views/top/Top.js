import React from 'react';
import Header from './header/Header';
import Aside from './aside/Aside';
import Entry from './entry/Entry';
import Entries from './entries/Entries';
import GetUserService from '../../services/GetUserService';
import AppModel from '../../models/AppModel';

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
    this._onErrorGetUserData = this._onErrorGetUserData.bind(this);
    this._onSuccessGetUserData = this._onSuccessGetUserData.bind(this);

    // ユーザー取得サービスクラス
    this._getUserService = new GetUserService();
    this._getUserService.addEventListener('success', this._onSuccessGetUserData);
    this._getUserService.addEventListener('error', this._onErrorGetUserData);

    this.state = {
      gotUserData: false,
      entryData: null,
      currentPage: 'entries'
    };
  }

  /**
   * コンポーネントがマウントされた際のハンドラーです。
   */
  componentDidMount() {
    this._getUserService.send();
  }

  /**
   * 描画します。
   */
  render() {
    if(!this.state.gotUserData) {
      return (<div></div>);
    }

    // ステートに応じた中身を取得します。
    let getContent = () => {
      switch (this.state.currentPage) {
        case 'editor': return ( <Entry entryData={this.state.entryData} /> );
        case 'entries': return ( <Entries refs="entries" onSelectRow={this._onSelectRow} onClickNew={this._onClickNew}/> );
      }
    };

    return (
      <div className="top">
        <Header />
        <Aside current={this.state.currentPage} onClick={this._onClickAside} />
        <div className="top_content">
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

  /**
   * ユーザーデータ取得完了時のハンドラーです。
   */
  _onSuccessGetUserData(event) {
    // ユーザーデータを保存
    AppModel.instance.userData = event.data.userData;

    this.setState({
      gotUserData: true
    });
  }

  /**
   * 記事一覧取得失敗時のハンドラーです。
   */
  _onErrorGetUserData(event) {
    let res = event.res;
    // トークン切れエラーの場合はtokenを削除する。
    if(res.status == 403 || res.status == 401) {
      AppModel.instance.expireToken();
    }
  }
}
