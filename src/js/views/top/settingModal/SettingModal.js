import React from 'react';
import classNames from 'classnames';
import Modal from '../../common/modal/Modal';

/**
 * 設定モーダルクラスです。
 */
export default class SettingModal extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this.onClickCancel = this.onClickCancel.bind(this);
  }

  /**
   * 描画します。
   */
  render() {
    let classes = classNames('setting', this.props.className);
    return (
      <Modal title="設定" className={classes}>
        <div className="roundButton" onClick={this.onClickCancel}>キャンセル</div>
      </Modal>
    );
  }

  /**
   * キャンセルボタン押下時のハンドラーです。
   */
  onClickCancel() {
    // キャンセルイベント発火
    if(this.props.onCancel) {
      this.props.onCancel();
    }
  }
}
