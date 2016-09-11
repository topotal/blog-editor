import React from 'react';
import classNames from 'classnames';
import Modal from '../common/Modal';

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

    this.state = {
      active: this.props.active
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

    return (
      // 画像選択ウィンドウ
      <Modal title="画像選択" className={classes} ref="imageModal">
        <ul className="panel">
          <li><img src="https://qiita-image-store.s3.amazonaws.com/0/42248/d56376a7-4949-d9d6-5590-9c4968ee5eba.png" alt="" /></li>
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
}
