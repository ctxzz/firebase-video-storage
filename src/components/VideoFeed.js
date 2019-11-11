import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import 'firebase/firestore';
import VideoPlayer from './VideoPlayer';

class VideoFeed  extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = { videos: [] }
    // }

    // async componentWillMount() {
    //     const datas = [];
    //     const collection = await firebase.firestore().collection('videos').limit(50);
    //     const querySnapshot = await collection.get();
    //     await querySnapshot.forEach(doc => {
    //         datas.push(doc.data());
    //     });

    //     this.setState({ videos: datas });
    // }

    componentDidMount() {
        this.props.fetchVideos();
    }

    renderVideoPlayers(videos) {
        if(videos){
            return videos.map(video => {
                return ( 
                    <Grid key={video.name} item xs={6} >
                        <VideoPlayer key={video.name} video={video} />
                    </Grid>
                );
            });    
        }
    }

    render() {
        // const { classes } = this.props;
        const { videos } = this.props;

        
        return (
            // <Grid container className={classes.root} spacing={40} direction="row" justify="flex-start" alignItems="center">
            //     {this.renderVideoPlayers(this.state.videos)}
            // </Grid>
            <div>
                {this.renderVideoPlayers(videos)}
            </div>
        );
    }
}

VideoFeed.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(VideoFeed);
export default VideoFeed;