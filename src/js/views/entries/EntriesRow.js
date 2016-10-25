import React from 'react';
import moment from 'moment';
import PublishStatusData from '../../models/vo/PublishStatusData';

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
   * マウントされた際のハンドラーです。
   */
  componentDidMount() {
    let li = this.refs.row;
    li.addEventListener('click', this._onClick);
  }

  /**
   * 描画します。
   */
  render() {
    let data = this.props.entryData;
    let publishData = PublishStatusData.getDataByType(data.publishStatus);
    return (
      <li className="articleRow" ref="row">
        <div className="id">{data.id}</div>
        <div className="title">{data.title || "未タイトル"}</div>
        <div className="updatedAt">{moment(data.updatedAt).format("YYYY/MM/DD HH:mm")}</div>
        <div className={"status " + publishData.color}>{publishData.text}</div>
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
