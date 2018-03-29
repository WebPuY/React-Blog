import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import PureRenderMixiin from 'react-addons-pure-render-mixin'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
// import { Detail } from './detail'
// import { Home } from './home'
import NotFound from "../components/notFound/NotFound";
import { Loading } from "../components/loading/Loading"
import { notification } from 'antd';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../reducers'
// import Admin from "./admin/Admin";
import Front from './front/Front'

const { clear_msg, user_auth } = actions;

class AppIndex extends Component {

  constructor(props) {
    super(props);
    this.openNotification = this.openNotification.bind(this);
    this.shouldComponentUpdate = PureRenderMixiin.shouldComponentUpdate.bind(this);
  }

  componentDidMount() {
    this.props.user_auth();
  }

  openNotification(type, message) {
    let that = this;
    notification[type]({
      message: message,
      onClose: () => {
        that.props.clear_msg();
      }
    });
    that.props.clear_msg();
  };

  renderFunc() {
    // eslint-disable-next-line no-unused-expressions
    this.props.notification && this.props.notification.content ?
      (this.props.notification.type === 1 ?
        this.openNotification('success', this.props.notification.content) :
        this.openNotification('error', this.props.notification.content)) :
      null
  }
  
  render() {
    let { isFetching } = this.props;
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/404' component={NotFound} />
            {/* <Route path='/admin' component={Admin} /> */}
            <Route component={Front} />
          </Switch>
          {isFetching && <Loading />}
          {
            this.renderFunc()
          }
        </div>
      </Router>
    )
  }

}

function mapStateToProps(state) {
  return {
    notification: state.globalState.msg,
    isFetching: state.globalState.isFetching,
    userInfo: state.globalState.userInfo,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clear_msg: bindActionCreators(clear_msg, dispatch),
    user_auth: bindActionCreators(user_auth, dispatch)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppIndex)