import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import EditorToolBar from './EditorToolBar';
import 'brace/mode/markdown';
import 'brace/theme/Terminal';

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
    this._onLoadAceEditor = this._onLoadAceEditor.bind(this);
    this._onToolBarOutput = this._onToolBarOutput.bind(this);

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

        <EditorToolBar onOutput={this._onToolBarOutput}/>

        <AceEditor
          mode="markdown"
          theme="terminal"
          onChange={this._onChangeEditor}
          name="ace"
          width="auto"
          height="auto"
          value={this.state.entryData.content}
          showPrintMargin={false}
          userWrapMode={true}
          editorProps={{$blockScrolling: true}}
          onLoad={this._onLoadAceEditor}
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
  _onToolBarOutput(text) {
    this._editor.insert(text);
  }
}
