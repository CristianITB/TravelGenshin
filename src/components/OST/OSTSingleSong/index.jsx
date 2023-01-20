import { SongDisplayer, PreviewSong, PreviewSongDisplayer, TitleImageDiv, SongName, SongArtist, SongImg } from './styles'
const OSTSingleSong = ({ allSongs }) => {
  return (
    <SongDisplayer name={allSongs.album.name}>
      <TitleImageDiv>
        <div>
          <SongArtist href={allSongs.external_urls.spotify}>Artist: {allSongs.artists[0].name}</SongArtist>
          <SongName>{allSongs.name}</SongName>
        </div>
        <SongImg alt='Album' src={allSongs.album.images[0].url} />
      </TitleImageDiv>
      <PreviewSongDisplayer>
        <PreviewSong>Preview Song: </PreviewSong>
        <audio controls src={allSongs.preview_url} />
      </PreviewSongDisplayer>
    </SongDisplayer>
  )
}

export default OSTSingleSong
