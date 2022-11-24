import ReactPlayer from 'react-player';

const Video = ({linkVideo}) => {
  return (
    <>
      <ReactPlayer 
        controls={true}
        width={'100%'} 
        height={'100%'} 
        url={linkVideo}
      />
    </>
  )
}

export default Video