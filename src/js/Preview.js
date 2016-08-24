import React from 'react';

/**
 * プレビュークラスです。
 */
export default class Preview extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this.state = {
      content: this.props.content
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      content: nextProps.content
    });
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <div className="preview">
        {this.state.content}
      </div>
    );
  }
}
