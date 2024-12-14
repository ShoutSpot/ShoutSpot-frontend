
import { Player, BigPlayButton, ControlBar } from 'video-react';
export const VideoFrame: React.FC<{source : string}> = ({source}) => {
    return (
        <>
            <div className='pt-4'>
                <Player
                    autoPlay
                    playsInline
                    poster="/assets/poster.png"
                    src={source}
                >
                    <BigPlayButton position="center" />
                    <ControlBar autoHide={true} />
                </Player>
            </div>
        </>
    )
}