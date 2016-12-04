import React from 'react';
import Mousetrap from 'mousetrap';
import classNames from 'classnames';
import Split from 'split.js';
import Editor from './Editor';
import Preview from './Preview';
import ArticleModel from '../../../models/ArticleModel';
import CreateEntryService from '../../../services/CreateEntryService';
import UpdateEntryService from '../../../services/UpdateEntryService';
import ComboBox from '../../common/form/ComboBox';
import PublishStatusData from '../../../models/vo/PublishStatusData';

/**
 * 記事クラス
 */
export default class Entry extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this.state = {
      entryData: this.props.entryData || new ArticleModel()
    };

    this._onChange = this._onChange.bind(this);
    this._onClickSave = this._onClickSave.bind(this);
    this._onSuccessSave = this._onSuccessSave.bind(this);
    this._onPressCommandS = this._onPressCommandS.bind(this);

    // 記事作成サービス
    this._createService = new CreateEntryService();
    this._createService.addEventListener('success', this._onSuccessSave);

    // 記事保存サービス
    this._updateService = new UpdateEntryService(this.state.entryData.id);
    this._updateService.addEventListener('success', this._onSuccessSave);

    Mousetrap.bind(['ctrl+s', 'command+s'], this._onPressCommandS);
  }

  /**
   * コンポーネントがマウントされた際のハンドラーです。
   */
  componentDidMount() {
    Split(['#editor', '#preview'], {
      sizes: [45, 55],
      minSize: 200,
      gutterSize: 2,
      onDrag: () => {
        // aceエディタの為にresizeイベントを発火
        window.dispatchEvent(new Event('resize'));
      }
    });
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <div className="entry panel">
        <div className="entry_content">
          <Editor ref="editor" entryData={this.state.entryData} onChange={this._onChange} />
          <Preview entryData={this.state.entryData}/>
        </div>
        <div className="entry_footer">
          <ComboBox
            className="published"
            label="公開設定"
            name="published"
            valueField="value"
            displayField="text"
            store={PublishStatusData.LIST}
          />
          <div className="saveButton roundButton" onClick={this._onClickSave}>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>保存
          </div>
        </div>
      </div>
    );
  }

  /**
   * 記事内容変更時のハンドラーです。
   */
  _onChange(entryData) {
    this.setState({ entryData: entryData });
  }

  /**
   * 保存ボタン押下時のハンドラーです。
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
    let entryData = this.state.entryData;
    // 記事IDを持っていればアップデート
    // 無ければ新規作成
    if(entryData.id) {
      this._updateService.send(entryData);
    } else {
      this._createService.send(entryData);
    }
  }

  /**
   * 記事作成成功時のハンドラーです。
   */
  _onSuccessSave(event) {
    let data = event.data;
    this.setState({
      entryData: data.entryData
    });
  }

  /**
   * 記事更新成功時のハンドラーです。
   */
  _onSuccessUpdate(event) {
    let data = event.data;
    this.setState({
      entryData: data.entryData
    });
  }
}
