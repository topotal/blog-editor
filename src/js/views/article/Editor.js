import React from 'react';
import ApiPath from '../../enum/ApiParam';

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

    this.state = {
      articleData: this.props.articleData
    };
  }

  /**
   * コンポーネントがマウントされた際のハンドラーです。
   */
  componentDidMount() {
    this._editor = ace.edit("ace");
    this._editor.$blockScrolling = Infinity;
    this._editor.setTheme("ace/theme/monokai");
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
   * propが変更された際のハンドラー
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      articleData: nextProps.articleData
    });
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <div className="editor">
        <div className="title">
          <input
            type="text"
            placeholder="タイトル"
            name="title"
            className="mousetrap"
            value={this.state.articleData.title || ""}
            onChange={this._onChangeTitle}
          />
        </div>
        <div id="ace">
        </div>
      </div>
    );
  }

  /**
   * タイトル変更時のハンドラーです。
   */
  _onChangeTitle(event) {
    let articleData = this.state.articleData;
    articleData.title = event.target.value;
    this.setState({
      articleData: articleData
    });
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

  /**
   * 画像を挿入
   */
  insertImage(path) {
    let imagePath = ApiPath.getImagePath() + path;
    let markDownText = "![](" + imagePath + ")";
    this._editor.insert(markDownText);
  }
}
