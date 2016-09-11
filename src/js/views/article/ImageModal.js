import React from 'react';
import classNames from 'classnames';
import Modal from '../common/Modal';
import ImageBox from './ImageBox';
import GetImagesService from '../../services/GetImagesService';

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

    this._onClickCancel = this._onClickCancel.bind(this);
    this._onClickDecision = this._onClickDecision.bind(this);
    this._onSuccessGetImage = this._onSuccessGetImage.bind(this);

    // 画像取得サービス
    this._getImagesService = new GetImagesService();
    this._getImagesService.addEventListener('success', this._onSuccessGetImage);
    this._getImagesService.send();

    this.state = {
      active: this.props.active,
      images: []
    };
  }

  /**
   * propが変更された際のハンドラー
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      active: nextProps.active
    });
  }

  /**
   * 描画します。
   */
  render() {
    let classes = classNames('imageList', {'active': this.state.active});
    let imageBoxes = this.state.images.map((imageData, index) => {
      return (
        <ImageBox data={imageData} key={index} />
      );
    });

    return (
      // 画像選択ウィンドウ
      <Modal title="画像選択" className={classes} ref="imageModal">
        <ul className="panel">
          {imageBoxes}
        </ul>
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
    this.props.onDecision();
  }

  /**
   * 画像取得成功時のサービスクラスです。
   */
  _onSuccessGetImage(event) {
    console.info(event.data.images)
    this.setState({
      images: event.data.images
    });
  }
}
