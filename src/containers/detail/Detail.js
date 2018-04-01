import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
// import remark from 'remark'
import { connect } from 'react-redux'
import { actions } from "../../reducers/frontReducer"
// import reactRenderer from 'remark-react'
import './style.css'

const { get_article_detail } = actions;

class Detail extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    const { title, author, viewCount, commentCount, time } = this.props;
    return (
      <div className="container">
        <h2>{title}</h2>
        <div className="articleInfo">
          <span >
            <img className="authorImg" src={require('./author.png')} alt="author" /> {author}
          </span>
          <span>
            <img src={require('./calendar.png')} alt="calendar" /> {time}
          </span>
          <span>
            <img src={require('./comments.png')} alt="comments" /> {commentCount}
          </span>
          <span>
            <img src={require('./views.png')} alt="views" /> {viewCount}
          </span>
        </div>
        {/* <div id='preview' className={style.content}>
                    {remark().use(reactRenderer).processSync(articleContent).contents}
                </div> */}
      </div>
    )
  }

  componentDidMount() {
    this.props.get_article_detail(this.props.location.state.id);
  }
}

function mapStateToProps(state) {
  const { content, title, author, viewCount, commentCount, time } = state.front.articleDetail;
  return {
    articleContent: content,
    title,
    author,
    viewCount,
    commentCount,
    time
  }
}

function mapDispatchToProps(dispatch) {
  return {
    get_article_detail: bindActionCreators(get_article_detail, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);