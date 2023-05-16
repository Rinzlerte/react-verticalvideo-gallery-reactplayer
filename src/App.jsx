import VideoGallery from "./components/videoGallery/VideoGallery";

const App = () => {
  return (
    <>
      <div className="site--container">
        <h2>Vertical Video Gallery</h2>
      </div>
      <br />
      <br />
      <div className="site--container">
        <VideoGallery />
      </div>
    </>
  );
};

export default App;
