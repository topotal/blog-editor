import React from 'react';

/**
 * エディタークラスです。
 */
export default class Editor extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(prop) {
    super(prop);
  }

  /**
   * コンポーネントがマウントされた際のハンドラーです。
   */
  componentDidMount() {
    this._editor = ace.edit("ace");
    this._editor.setTheme("ace/theme/monokai");
    this._onChangeEditor = this._onChangeEditor.bind(this);
    this._editor.getSession().on("change", this._onChangeEditor);
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <div className="editor" id="ace">
      </div>
    );
  }

  /**
   * エディター編集時のハンドラーです。
   */
  _onChangeEditor() {
    let value = this._editor.getValue();
    console.info(value);
  }
}
