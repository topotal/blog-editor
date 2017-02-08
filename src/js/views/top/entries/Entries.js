import React from 'react';
import EntriesRow from './EntriesRow';
import GetEntriesService from '../../../services/GetEntriesService';
import AppModel from '../../../models/AppModel';

/**
 * 記事一覧クラスです。
 */
export default class Entries extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onClickRow = this._onClickRow.bind(this);
    this._onClickNew = this._onClickNew.bind(this);
    this._onSuccessGetList =  this._onSuccessGetList.bind(this);
    this._onErrorGetList   =  this._onErrorGetList.bind(this);

    this.state = {
      entries: []
    };

    // 一覧取得サービス
    this._service = new GetEntriesService();
    this._service.addEventListener('success', this._onSuccessGetList);
    this._service.addEventListener('error',   this._onErrorGetList);
  }

  /**
   * コンポーネントがマウントされた際のハンドラーです。
   */
  componentDidMount() {
    // 初回の一覧取得
    this._service.send();
  }

  /**
   * 描画します。
   */
  render() {
    var entryRows = this.state.entries.map((entryData, index) => {
      return (
        <EntriesRow entryData={entryData} onClick={this._onClickRow} key={index}/>
      );
    });

    return (
      <div className="entries panel">
        <div className="entries_toolbar">
          <div className="roundButton entries_newButton" onClick={this._onClickNew}><i className="fa fa-file-text"/>新規作成</div>
        </div>
        <ul className="entries_list">
          {entryRows}
        </ul>
        <div className="entries_footer">
        </div>
      </div>
    );
  }

  /**
   * Rowクリック時のハンドラーです。
   */
  _onClickRow(entryData) {
    this.props.onSelectRow(entryData);
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
      entries: data.entries
    });
  }

  /**
   * 記事一覧取得失敗時のハンドラーです。
   */
  _onErrorGetList(event) {
    let res = event.res;
    // トークン切れエラーの場合はtokenを削除する。
    if(res.status == 403 || res.status == 401) {
      AppModel.instance.expireToken();
    }
  }
}
