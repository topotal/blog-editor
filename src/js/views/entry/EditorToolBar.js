import React from 'react';
import ApiPath from '../../enum/ApiParam';
import ImageModal from './ImageModal';

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

    this.state = {
      activeImageModal: false
    };
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <div>
        <ImageModal
          active={this.state.activeImageModal}
          onCancel={this._onCancelImage}
          onDecision={this._onDecisionImage}
        />

        <ul className="toolbar">
          <li className="toolButton" onClick={this._onClickAddImage}>
            <i title="画像を追加" className="fa fa-picture-o fa-fw"></i>
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
}
