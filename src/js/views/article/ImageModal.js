import React from 'react';
import classNames from 'classnames';
import Modal from '../common/Modal';
import ImageBox from './ImageBox';
import GetImagesService from '../../services/GetImagesService';
import UploadImageService from '../../services/UploadImageService';

/**
 * 画像モーダルクラスです。
 */
export default class ImageModal extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onDragOut = this._onDragOut.bind(this);
    this._onClickBox = this._onClickBox.bind(this);
    this._onDragOver = this._onDragOver.bind(this);
    this._onDropImage = this._onDropImage.bind(this);
    this._onClickCancel = this._onClickCancel.bind(this);
    this._onClickDecision = this._onClickDecision.bind(this);
    this._onSuccessGetImage = this._onSuccessGetImage.bind(this);
    this._onSuccessUploadImage = this._onSuccessUploadImage.bind(this);

    // 画像取得サービス
    this._getImagesService = new GetImagesService();
    this._getImagesService.addEventListener('success', this._onSuccessGetImage);
    this._getImagesService.send();

    // 画像アップサービス
    this._uploadImageService = new UploadImageService();
    this._uploadImageService.addEventListener('success', this._onSuccessUploadImage);

    this.state = {
      active: this.props.active,
      dragOver: false,
      images: [],
      selectedData: null
    };
  }

  /**
   * propが変更された際のハンドラー
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      active: nextProps.active,
      selectedData: null
    });
  }

  /**
   * 描画します。
   */
  render() {
    let classes = classNames('imageList', {
      active: this.state.active,
      dragOver: this.state.dragOver
    });
    let imageBoxes = this.state.images.map((imageData, index) => {
      let selected = this.state.selectedData == imageData;
      return (
        <ImageBox data={imageData} selected={selected} key={index} onClick={this._onClickBox} />
      );
    });

    return (
      // 画像選択ウィンドウ
      <Modal title="画像選択" className={classes} ref="imageModal">
        <div className="listWrapper panel" onDragEnter={this._onDragOver} onDrop={this._onDropImage}>
          <ul>
            {imageBoxes}
          </ul>
          <div className="dropCover" onDragLeave={this._onDragOut}>
            <p className="text">画像を追加</p>
          </div>
        </div>
        <div className="imageListFooter">
          <a className="roundButton cancel" onClick={this._onClickCancel}>
            キャンセル
          </a>
          <a className="roundButton" onClick={this._onClickDecision}>
            決定
          </a>
        </div>
      </Modal>
    );
  }

  /**
   * キャンセルボタン押下時のハンドラーです。
   */
  _onClickCancel() {
    this.props.onCancel();
  }

  /**
   * 決定ボタン押下時のハンドラーです。
   */
  _onClickDecision() {
    this.props.onDecision(this.state.selectedData.path);
  }

  /**
   * 画像取得成功時のハンドラーです。
   */
  _onSuccessGetImage(event) {
    this.setState({
      images: event.data.images
    });
  }

  /**
   * 画像アップ成功時の
   */
  _onSuccessUploadImage(event) {
    // リストを更新
    this._getImagesService.send();
  }

  /**
   * 画像をドラッグ時のハンドラーです。
   */
  _onDragOver(event) {
    // ブラウザのドラッグ動作を制御
    event.preventDefault();
    this.setState({
      dragOver: true
    });
  }

  /**
   * 画像をドラッグし終えた際のハンドラーです。
   */
  _onDragOut(event) {
    event.preventDefault();
    this.setState({
      dragOver: false
    });
  }

  /**
   * 画像ドロップ時のハンドラーです。
   */
  _onDropImage(event) {
    event.preventDefault();
    this.setState({
      dragOver: false
    });
    let file = event.dataTransfer.files[0];
    let formData = new FormData();
    formData.append('file', file);
    this._uploadImageService.send(formData);
  }

  /**
   * 画像クリック時のハンドラーです。
   */
  _onClickBox(imageData) {
    this.setState({
      selectedData: imageData
    });
  }
}
