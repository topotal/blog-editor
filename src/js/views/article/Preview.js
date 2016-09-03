import React from 'react';
import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';

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

    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });

    this.state = {
      articleData: props.articleData
    };
  }

  /**
   * propが変更された際のハンドラー
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      articleData: nextProps.articleData
    }, this._onChangeContent);
  }

  /**
   * 記事内容が書き換わった際のハンドラーです。
   */
  _onChangeContent() {
    let dom = document.getElementById('preview');
    dom.innerHTML = marked(this.state.articleData.content);
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <div className="preview" id="preview">
      </div>
    );
  }
}
