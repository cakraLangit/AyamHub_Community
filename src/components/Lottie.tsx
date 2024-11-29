// components/LottieAnimation.js
import Lottie  from 'lottie-react';
import animationData from '/public/3d/Animation-1732105096803.json'; // Atau gunakan URL

const LottieAnimation = () => {
  return     <div className='w-1/2'><Lottie animationData={animationData} loop={true} /> </div> 
}; 

export default LottieAnimation;
