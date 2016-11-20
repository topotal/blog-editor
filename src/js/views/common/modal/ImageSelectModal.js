import React from 'react';
import classNames from 'classnames';
import Modal from './Modal';
import ImageList from '../list/ImageList';

/**
 * 画像モーダルクラスです。
 */
export default class ImageSelectModal extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onClickCancel = this._onClickCancel.bind(this);
    this._onClickDecision = this._onClickDecision.bind(this);
    this._onChangeSelect = this._onChangeSelect.bind(this);

    this.state = {
      active: this.props.active,
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

    // 非アクティブになったら一覧をクリア
    if(!nextProps.active) {
      this.setState({
        images: []
      });
    }
  }

  /**
   * 描画します。
   */
  render() {
    // モーダルのクラス郡
    let modalClasses = classNames('imageList', this.props.className, {
      active: this.state.active,
      dragOver: this.state.dragOver
    });

    // 決定ボタンクラス郡
    let devisionClasses = classNames('roundButton', {
      clickDisable: !this.state.selectedData
    });

    return (
      // 画像選択ウィンドウ
      <Modal title="画像選択" className={modalClasses} ref="imageModal">
        <ImageList onChange={this._onChangeSelect}/>
        <div className="imageListFooter">
          <a className="roundButton cancel" onClick={this._onClickCancel}>
            キャンセル
          </a>
          <a className={devisionClasses} onClick={this._onClickDecision}>
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
    this.props.onDecision(this.state.selectedData.url);
  }

  /**
   * 選択画像が変更された際のハンドラーです。
   */
  _onChangeSelect(selectedData) {
    this.setState({
      selectedData: selectedData
    });
  }
}
