/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// import { increment, doubleAsync } from '../../redux/modules/counter'
// import DuckImage from './Duck.jpg'
import classes from './../../system/styles/HomeView.scss'
import Landing from './../../system/components/Landing'
import Mainpanel1 from './../../system/components/Mainpanel1'
import Mainpanel2 from './../../system/components/Mainpanel2'

// We can use Flow (http://flowtype.org/) to type our component's props
// and state. For convenience we've included both regular propTypes and
// Flow types, but if you want to try just using Flow you'll want to
// disable the eslint rule `react/prop-types`.
// NOTE: You can run `npm run flow:check` to check for any errors in your
// code, or `npm i -g flow-bin` to have access to the binary globally.
// Sorry Windows users :(.
type Props = {
  // counter: number,
  // doubleAsync: Function,
  // increment: Function
};

// We avoid using the `@connect` decorator on the class definition so
// that we can export the undecorated component for testing.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
class HomeView extends React.Component<void, Props, void> {
  static propTypes = {
    // counter: PropTypes.number.isRequired,
    // doubleAsync: PropTypes.func.isRequired,
    // increment: PropTypes.func.isRequired
  };

  render () {
    return (
      <div>
        <Landing ifSearch={true}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  // counter: state.counter
})
export default connect((mapStateToProps), {
  // increment: () => increment(1),
  // doubleAsync
})(HomeView)
