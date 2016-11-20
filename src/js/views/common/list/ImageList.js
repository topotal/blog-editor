import React from 'react';
import classNames from 'classnames';
import ImageListCell from './ImageListCell';
import GetImagesService from '../../../services/GetImagesService';
import UploadImageService from '../../../services/UploadImageService';

/**
 * 画像一覧
 */
export default class ImageList extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onClickBox = this._onClickBox.bind(this);
    this._onDragOut = this._onDragOut.bind(this);
    this._onDragOver = this._onDragOver.bind(this);
    this._onDropImage = this._onDropImage.bind(this);
    this._onSuccessGetImage = this._onSuccessGetImage.bind(this);
    this._onSuccessUploadImage = this._onSuccessUploadImage.bind(this);

    // 画像取得サービス
    this._getImagesService = new GetImagesService();
    this._getImagesService.addEventListener('success', this._onSuccessGetImage);

    // 画像アップサービス
    this._uploadImageService = new UploadImageService();
    this._uploadImageService.addEventListener('success', this._onSuccessUploadImage);

    // アクティブになったら画像リストを取得する
    this._getImagesService.send();

    this.state = {
      images: [],
      dragOver: false,
      selectedData: null
    };
  }

  /**
   * 描画します。
   */
  render() {
    // モーダルのクラス郡
    let classes = classNames('listWrapper panel', this.props.className, {
      dragOver: this.state.dragOver
    });

    // 画像ボックスリスト
    let imageBoxes = this.state.images.map((imageData, index) => {
      let selected = this.state.selectedData == imageData;
      return (
        <ImageListCell data={imageData} selected={selected} key={index} onClick={this._onClickBox} />
      );
    });

    return (
      <div className={classes} onDragEnter={this._onDragOver} onDrop={this._onDropImage}>
        <ul>
          {imageBoxes}
        </ul>
        <div className="dropCover" onDragLeave={this._onDragOut}>
          <p className="text">画像を追加</p>
        </div>
      </div>
    );
  }

  /**
   * 画像クリック時のハンドラーです。
   */
  _onClickBox(imageData) {
    this.setState({
      selectedData: imageData
    });

    if(this.props.onChange) {
      this.props.onChange(imageData);
    }
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
    this._uploadImageService.send({file: file});
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
}
