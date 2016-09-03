import React from 'react';

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

    this.state = {
      articleData: this.props.articleData
    };
  }

  /**
   * コンポーネントがマウントされた際のハンドラーです。
   */
  componentDidMount() {
    this._editor = ace.edit("ace");
    this._editor.setTheme("ace/theme/monokai");
    this._onChangeEditor = this._onChangeEditor.bind(this);
    this._editor.getSession().setMode("ace/mode/markdown");
    this._editor.getSession().setUseWrapMode(true);
    this._editor.getSession().on("change", this._onChangeEditor);
    if(this.state.articleData.content) {
      this._editor.setValue(this.state.articleData.content);
    }

    // クラスを追加
    $('#ace textarea').addClass("mousetrap");
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <div className="editor">
        <div className="title">
          <input type="text" name="title" placeholder="タイトル"/>
        </div>
        <div id="ace">
        </div>
      </div>
    );
  }

  /**
   * エディター編集時のハンドラーです。
   */
  _onChangeEditor() {
    let content = this._editor.getValue();
    let articleData = this.state.articleData;
    articleData.content = content;
    this.setState({
      articleData: articleData
    });
    this.props.onChange(articleData);
  }
}
