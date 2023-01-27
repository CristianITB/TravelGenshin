import { SongDisplayer, PreviewSong, PreviewSongDisplayer, TitleImageDiv, SongName, SongArtist, SongImg, SongAudio } from './styles'
const OSTSingleSong = ({ allSongs }) => {
  return (
    <SongDisplayer name={allSongs.album.name}>
      <TitleImageDiv>
        <div>
          <SongArtist href={allSongs.external_urls.spotify} target='_blank'>Artist: {allSongs.artists[0].name}</SongArtist>
          <SongName>{allSongs.name}</SongName>
        </div>
        <SongImg alt='Album' src={allSongs.album.images[0].url} />
      </TitleImageDiv>
      <PreviewSongDisplayer>
        <PreviewSong>Preview Song: </PreviewSong>
        <div align='center'>
          <SongAudio controls src={allSongs.preview_url} />
        </div>
      </PreviewSongDisplayer>
    </SongDisplayer>
  )
}

export default OSTSingleSong
