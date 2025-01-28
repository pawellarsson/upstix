import React, {useState, useEffect} from 'react';
import '../style/app.scss';
import Contact from './Contact';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';
import { ThemeProvider } from '../context/themeProvider';

const App = () => {
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [videos, search] = useVideos('cats');
	let prevSearch = window?.localStorage.getItem('prevSearch');

	useEffect(() => {
		setSelectedVideo(videos[0]);
	}, [videos]);

	window.addEventListener("storage", function () {
		prevSearch = window?.localStorage.getItem('prevSearch');
	});

	return (
		<ThemeProvider>
			<div className='youtube-search-page'>
				<div className='background'></div>
				<SearchBar onFormSubmit={search} />
				<div className='video-content-section'>
					<div className='video-player-container'>
						<VideoDetail video={selectedVideo} />
						Prev search: <a href="#" onClick={() => search(prevSearch)}>{prevSearch}</a>
					</div>
					<div className='video-previews-container'>
						<VideoList
							onVideoSelect={setSelectedVideo}
							videos={videos}
						/>
					</div>
				</div>
				<Contact />
			</div>
		</ThemeProvider>
	);
};

export default App;
