import React from 'react';
import ApiPath from '../../enum/ApiParam';
import ImageModal from './ImageModal';

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
      articleData: this.props.articleData,
      activeImageModal: false
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

        <ImageModal
          active={this.state.activeImageModal}
          onCancel={this._onCancelImage}
          onDecision={this._onDecisionImage}
        />

        <div className="title">
          <input
            type="text"
            placeholder="タイトル"
            className="textField mousetrap"
            value={this.state.articleData.title || ""}
            onChange={this._onChangeTitle}
          />
        </div>

        <ul className="toolbar">
          <li className="toolButton" onClick={this._onClickAddImage}><i title="画像を追加" className="fa fa-picture-o fa-fw"></i></li>
        </ul>

        <div id="ace"></div>
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
