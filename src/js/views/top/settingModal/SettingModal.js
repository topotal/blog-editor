import React from 'react';
import classNames from 'classnames';
import Modal from '../../common/modal/Modal';
import Profile from './Profile';

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

    this._onClickCancel = this._onClickCancel.bind(this);
  }

  /**
   * 描画します。
   */
  render() {
    let classes = classNames('settingModal', this.props.className);
    return (
      <Modal title="設定" className={classes}>
        <Profile onClickCancel={this._onClickCancel} />
      </Modal>
    );
  }

  /**
   * キャンセルボタン押下時のハンドラーです。
   */
  _onClickCancel() {
    // キャンセルイベント発火
    if(this.props.onCancel) {
      this.props.onCancel();
    }
  }
}
