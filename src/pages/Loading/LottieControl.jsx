import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../../assets/Morphing_1.mp4.lottie (1).json'

export default class LottieControl extends React.Component {
 
    constructor(props) {
      super(props);
      this.state = {isStopped: false, isPaused: false};
    }
   
    render() {
      const buttonStyle = {
        display: 'block',
        margin: '10px auto'
      };
   
      const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
   
      return <div>
        <Lottie options={defaultOptions}
                height={150}
                width={150}/>
      </div>
    }
  }