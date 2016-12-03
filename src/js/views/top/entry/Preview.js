import React from 'react';
import {_} from 'lodash';
import marked from 'marked';
import hljs from 'highlight.js';
import ReactHtmlParser from 'react-html-parser';
import ImageSelectModal from '../../common/modal/ImageSelectModal';
import ApiParam from '../../../enum/ApiParam';

/**
 * プレビュークラスです。
 */
export default class Preview extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onClickAddEyeCatch = this._onClickAddEyeCatch.bind(this);
    this._onCancelEyeCatch = this._onCancelEyeCatch.bind(this);
    this._onDecisionEyeCatch = this._onDecisionEyeCatch.bind(this);

    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    });

    this.state = {
      activeEyeCatchModal: false,
      entryData: props.entryData
    };
  }

  /**
   * コンポーネントがマウントされた際のハンドラーです。
   */
  componentDidMount() {
    // アイキャッチが設定されていれば反映
    if(this.props.entryData.eyeCatchImageUrl) {
      this._setEyeCatch(this.props.entryData.eyeCatchImageUrl);
    }

    // 記事内容の初回セット
    this._onChangeContent();
  }

  /**
   * propが変更された際のハンドラー
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      entryData: nextProps.entryData
    }, this._onChangeContent);
  }

  /**
   * 記事内容が書き換わった際のハンドラーです。
   */
  _onChangeContent() {
    let dom = this.refs.entryContent;
    dom.innerHTML = marked(this.state.entryData.content);
    let codeItems = dom.querySelectorAll('pre code');
    _.each(codeItems, (item) => {
      hljs.highlightBlock(item);
    });
  }

  /**
   * 描画します。
   */
  render() {
    // 画像選択モーダルの表示非表示
    let imageModal = null;
    if(this.state.activeEyeCatchModal) {
      imageModal = (
        <ImageSelectModal
          active={this.state.activeEyeCatchModal}
          onCancel={this._onCancelEyeCatch}
          onDecision={this._onDecisionEyeCatch}
        />
      );
    }

    return (
      <div id="preview" className="preview" ref="preview">
        <link rel="stylesheet" href={ApiParam.getHost() + "/assets/css/markdown.css"} />
        {imageModal}
        <div className="preview_eyeCatch" onClick={this._onClickAddEyeCatch}>
          <p className="addText" ref="addText">
            <i title="アイキャッチを追加" className="fa fa-eye fa-fw"></i> アイキャッチを追加
          </p>
          <img src="" className="eyeCatchImage" ref="eyeCatchImage" alt="" />
        </div>
        <div className="entryContent" ref="entryContent"></div>
      </div>
    );
  }

  /**
   * アイキャッチ追加ボタン押下時のハンドラーです。
   */
  _onClickAddEyeCatch() {
    this.setState({
      activeEyeCatchModal: true
    });
  }

  /**
   * アイキャッチモーダルのキャンセルボタン押下時の
   * ハンドラーです。
   */
  _onCancelEyeCatch() {
    this.setState({
      activeEyeCatchModal: false
    });
  }

  /**
   * アイキャッチモーダルの決定ボタン押下時の
   * ハンドラーです。
   */
  _onDecisionEyeCatch(path) {
    // 記事データを更新
    let entryData = this.state.entryData;
    entryData.eyeCatchImageUrl = path;

    // アイキャッチエリアに画像をセット
    this._setEyeCatch(path);

    this.setState({
      activeEyeCatchModal: false,
      entryData: entryData
    });
  }

  /**
   * アイキャッチエリアに画像を設定します。
   */
  _setEyeCatch(path) {
    let imagePath = ApiParam.getImagePath() + path;
    this.refs.eyeCatchImage.setAttribute('src', imagePath);
    this.refs.eyeCatchImage.style.display = 'block';
    this.refs.addText.style.display = 'none';
  }
}
