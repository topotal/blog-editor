import React from 'react';

/**
 * モーダルクラスです。
 */
export default class Modal extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);
  }

  /**
   * マウントされた際のハンドラーです。
   */
  componentDidMount() {
    let main = this.refs.main;
    main.classList.add(this.props.className);
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <div className="modal" ref="main">
        <div className="modalWrapper">
          <div className="modalHeader">{this.props.title || モーダルウィンドウ}</div>
          <div className="modalContent">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
