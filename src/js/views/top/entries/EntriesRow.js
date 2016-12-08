import React from 'react';
import moment from 'moment';
import PublishStatusData from '../../../models/vo/PublishStatusData';

/**
 * 記事リストのRowクラスです。
 */
export default class EntriesRow extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
  }

  /**
   * 描画します。
   */
  render() {
    let data = this.props.entryData;
    let publishData = PublishStatusData.getDataByType(data.published);
    return (
      <li className="entriesRow" ref="row" onClick={this._onClick}>
        <div className="entriesRow_id">{data.id}</div>
        <div className="entriesRow_title">{data.title || "未タイトル"}</div>
        <div className="entriesRow_updatedAt">{moment(data.updatedAt).format("YYYY/MM/DD HH:mm")}</div>
        <div className={"entriesRow_status " + publishData.color}>{publishData.text}</div>
      </li>
    );
  }

  /**
   * クリック時のハンドラーです。
   */
  _onClick() {
    this.props.onClick(this.props.entryData);
  }
}
