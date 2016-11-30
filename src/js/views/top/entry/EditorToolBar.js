import React from 'react';
import ApiPath from '../../../enum/ApiParam';
import ImageSelectModal from '../../common/modal/ImageSelectModal';

/**
 * ツールバークラス
 */
export default class EditorToolBar extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onClickAddImage = this._onClickAddImage.bind(this);
    this._onCancelImage = this._onCancelImage.bind(this);
    this._onDecisionImage = this._onDecisionImage.bind(this);
    this._onClickTable = this._onClickTable.bind(this);

    this.state = {
      activeImageModal: false
    };
  }

  /**
   * 描画します。
   */
  render() {
    // 画像選択モーダルの表示非表示
    let imageModal = null;
    if(this.state.activeImageModal) {
      imageModal = (
        <ImageSelectModal
          active={this.state.activeImageModal}
          onCancel={this._onCancelImage}
          onDecision={this._onDecisionImage}
        />
      );
    }

    return (
      <div className="editorToolBar">
        {imageModal}
        <ul className="editorToolBar_items">
          <li className="toolButton" onClick={this._onClickAddImage}>
            <i title="画像を追加" className="fa fa-picture-o fa-fw"></i>
          </li>
          <li className="toolButton" onClick={this._onClickTable}>
            <i title="表を追加" className="fa fa-table fa-fw"></i>
          </li>
        </ul>
      </div>
    );
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
    // アウトプットイベント発火
    this.props.onOutput(markDownText);
  }

  /**
   * テーブル追加ボタン押下時のハンドラーです。
   */
  _onClickTable() {
    this.props.onOutput(`
|th1|th2|th3|
|---|---|---|
|td1|td2|td3|
    `);
  }
}
