import React from 'react';
import brace from 'brace';
import ApiPath from '../../enum/ApiParam';
import ImageModal from './ImageModal';
import AceEditor from 'react-ace';
import 'brace/mode/markdown';
import 'brace/theme/monokai';

/**
 * エディタークラスです。
 */
export default class Editor extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onChangeTitle = this._onChangeTitle.bind(this);
    this._onChangeEditor = this._onChangeEditor.bind(this);
    this._onClickAddImage = this._onClickAddImage.bind(this);
    this._onCancelImage = this._onCancelImage.bind(this);
    this._onDecisionImage = this._onDecisionImage.bind(this);

    this.state = {
      entryData: this.props.entryData,
      activeImageModal: false,
      activeEyeCatchModal: false
    };
  }

  /**
   * コンポーネントがマウントされた際のハンドラーです。
   */
  componentDidMount() {
    // this._editor = ace.edit("ace");
    // this._editor.$blockScrolling = Infinity;
    // this._editor.setTheme("ace/theme/monokai");
    // this._editor.getSession().setMode("ace/mode/markdown");
    // this._editor.getSession().setUseWrapMode(true);
    // this._editor.getSession().on("change", this._onChangeEditor);
    // if(this.state.entryData.content) {
    //   this._editor.setValue(this.state.entryData.content);
    // }

    // ⌘+sを押せるようにクラスを追加
    let textarea = document.getElementsByClassName('ace_text-input')[0];
    textarea.classList.add('mousetrap');
  }

  /**
   * propが変更された際のハンドラー
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      entryData: nextProps.entryData
    });
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <div className="editor">

        <ImageModal
          active={this.state.activeImageModal}
          onCancel={this._onCancelImage}
          onDecision={this._onDecisionImage}
        />

        <div className="titleBar">
          <div className="title">
            <input
              type="text"
              placeholder="タイトル"
              className="textField mousetrap"
              value={this.state.entryData.title || ""}
              onChange={this._onChangeTitle}
            />
          </div>
        </div>

        <ul className="toolbar">
          <li className="toolButton" onClick={this._onClickAddImage}><i title="画像を追加" className="fa fa-picture-o fa-fw"></i></li>
        </ul>

        <AceEditor
          mode="markdown"
          theme="monokai"
          onChange={this._onChangeEditor}
          name="ace"
          width="auto"
          height="auto"
          value={this.state.entryData.content}
          showPrintMargin={false}
          userWrapMode={true}
          editorProps={{$blockScrolling: true}}
          onLoad={(editor) => {
            editor.focus();
            editor.getSession().setUseWrapMode(true);
          }}
        />
      </div>
    );
  }

  /**
   * タイトル変更時のハンドラーです。
   */
  _onChangeTitle(event) {
    let entryData = this.state.entryData;
    entryData.title = event.target.value;
    this.setState({
      entryData: entryData
    });
  }

  /**
   * エディター編集時のハンドラーです。
   */
  _onChangeEditor(newValue) {
    console.info('asdfas');
    let entryData = this.state.entryData;
    entryData.content = newValue;
    this.setState({
      entryData: entryData
    });
    this.props.onChange(entryData);
  }

  /**
   * 画像追加ボタン押下時のハンドラーです。
   */
  _onClickAddImage() {
    this.setState({
      activeImageModal: true
    });
  }

  /**
   * 画像モーダルのキャンセルボタン押下時の
   * ハンドラーです。
   */
  _onCancelImage() {
    this.setState({
      activeImageModal: false
    });
  }

  /**
   * 画像モーダルの決定ボタン押下時の
   * ハンドラーです。
   */
  _onDecisionImage(path) {
    this.setState({
      activeImageModal: false
    });
    let imagePath = ApiPath.getImagePath() + path;
    let markDownText = "![](" + imagePath + ")";
    this._editor.insert(markDownText);
  }
}
