/* @flow */
import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Landing from './../../system/components/Landing'
import IOSDownload from './../../system/components/IOSDownload'
import ParallaxComponent from './../../system/components/Parallax'
// import ParallaxComponent from 'react-parallax-component';

type Props = {
  
};

const random = (min, max) => Math.random() * (max - min) + min;

class LandingParallex extends React.Component<void, Props, void> {
  static propTypes = {
    message1: PropTypes.string,
    message2: PropTypes.string,
    src: PropTypes.string,
    ifSearch: PropTypes.bool,
  };

  render () {
    const wrap = {
      height: window.innerHeight * 5,
    };
    // var word = 'awesome react';
    // var images = ['http://images.indianexpress.com/2015/12/iphone-5s-big1.jpg'];
    var components = [{
      name: 'Landing',
      top: '0%',
      speed: 1,
      type: 1,
      bgColor: 'white',
    }, {
      name: 'Landing',
      top: '90%',
      speed: 1,
      bgColor: 'black',
      src: 'https://assets.lushapp.co/assets/bg/drinks-ecf1498f6426a36780e1e609feb02d0719c8957b576e058a4ff5fef0a81d9d50.png'
    }, {
      name: 'Landing',
      top: '190%',
      speed: 1,
      bgColor: '#286F9E',
      src: 'https://assets.lushapp.co/assets/bg/design-9958cfac5ec8e205d2becff2132f9ef92f97dd1db61f7bdab9dac1bd4d7842e5.png'
    }, {
      name: 'Landing',
      top: '290%',
      speed: 1,
      bgColor: '#58498F',
      src: 'https://assets.lushapp.co/assets/bg/shortlists-8035fd2295adaed642005eb52b7ae938d926f33089e0f9f56e3826ace394d2e4.png'
    }, {
      name: 'Landing',
      top: '390%',
      speed: 1,
      type: 2,
      bgColor: '#B03333',
      src: 'https://assets.lushapp.co/assets/bg/ingredients-75267e6a2fc10bbfcc916c9015c21e1db6d0327d6340beab3a3c91967326c43b.png'
    }]
    return (<div
      style={wrap}
    >
      {components.reverse().map((d, index) => {
        return <ParallaxComponent
          speed={d.speed}
          top={d.top}
          left={d.left}
          key={index}
        >
        {d.name === 'Landing' && <Landing {...d}/>}
        </ParallaxComponent>
      }
      )}
    </div>)
  }
}

const mapStateToProps = (state) => ({

})
export default connect((mapStateToProps), {

})(LandingParallex)