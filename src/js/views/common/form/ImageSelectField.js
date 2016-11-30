import React from 'react';
import Field from './Field';
import ApiParam from '../../../enum/ApiParam';
import ImageSelectModal from '../modal/ImageSelectModal';

/**
 * 画像選択フィールドクラス
 */
export default class ImageSelectField extends Field {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
    this._onCancelImage = this._onCancelImage.bind(this);
    this._onDecisionImage = this._onDecisionImage.bind(this);

    this.state = {
      value: this.props.value || null,
      activeImageModal: false
    };
  }

  /**
   * 入力フォームを生成します。
   * @override
   */
  _createInput() {
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
      <div className="field_input imageSelectField">
        {imageModal}
        <img className="valueIcon" src={ApiParam.getImagePath() + this.state.value} onClick={this._onClick}/>
      </div>
    );
  }

  /**
   * ファイル選択ボタン押下時のハンドラーです。
   */
  _onClick() {
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
      activeImageModal: false,
      value: path
    });

    // 値の変更イベントを発火
    this._dispatchChangeEvent(path);
  }
}
