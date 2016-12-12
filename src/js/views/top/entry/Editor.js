import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import EditorToolbar from './EditorToolbar';
import 'brace/mode/markdown';
import 'brace/theme/Terminal';

/**
 * エディタークラスです。
 */
export default class Editor extends React.Component {

  static get SELECT_TITLE() { return 'editor_select_title'; }
  static get SELECT_ACE() { return 'editor_select_ace'; }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onChangeTitle = this._onChangeTitle.bind(this);
    this._onChangeEditor = this._onChangeEditor.bind(this);
    this._onLoadAceEditor = this._onLoadAceEditor.bind(this);
    this._onToolbarOutput = this._onToolbarOutput.bind(this);
    this._onFocusTitle = this._onFocusTitle.bind(this);
    this._onFocusAce = this._onFocusAce.bind(this);

    // フォーカスがあったているフォーム
    this._currentSelect = null;

    this.state = {
      entryData: this.props.entryData
    };
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
      <div id="editor" className="editor">

        <div className="editor_title">
          <input
            ref="title"
            type="text"
            placeholder="タイトル"
            className="textField mousetrap"
            value={this.state.entryData.title || ""}
            onChange={this._onChangeTitle}
            onFocus={this._onFocusTitle}
          />
        </div>

        <EditorToolbar onOutput={this._onToolbarOutput}/>

        <AceEditor
          className="editor_ace"
          mode="markdown"
          theme="terminal"
          name="ace"
          width="auto"
          height="auto"
          value={this.state.entryData.content}
          showPrintMargin={false}
          userWrapMode={true}
          editorProps={{$blockScrolling: true}}
          onChange={this._onChangeEditor}
          onFocus={this._onFocusAce}
          onLoad={this._onLoadAceEditor}
        />
      </div>
    );
  }

  /**
   * エディターにフォーカスを当てます。
   */
  focus() {
    switch(this._currentSelect) {
      case Editor.SELECT_TITLE:
        this.refs.title.focus();
        break;
      case Editor.SELECT_ACE:
        this._editor.focus();
        break;
    }
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
    let entryData = this.state.entryData;
    entryData.content = newValue;
    this.setState({
      entryData: entryData
    });
    this.props.onChange(entryData);
  }

  /**
   * AceEditorが読み込み終わった際のハンドラーです。
   */
  _onLoadAceEditor(editor) {
    this._editor = editor;
    this._editor.focus();
    this._editor.getSession().setUseWrapMode(true);
    // ⌘+sを押せるようにクラスを追加
    let textarea = document.getElementsByClassName('ace_text-input')[0];
    textarea.classList.add('mousetrap');
  }

  /**
   * ツールバーからアウトプットされた際のハンドラーです。
   */
  _onToolbarOutput(text) {
    this._editor.insert(text);
  }

  /**
   * タイトルにフォーカスが当たった際のハンドラーです。
   */
  _onFocusTitle() {
    this._currentSelect = Editor.SELECT_TITLE;
  }

  /**
   * AceEditorにフォーカスが当たった際のハンドラーです。
   */
  _onFocusAce() {
    this._currentSelect = Editor.SELECT_ACE;
  }
}
