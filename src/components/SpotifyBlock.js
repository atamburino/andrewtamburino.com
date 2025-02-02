import React, { useState, useEffect } from 'react';
import { Typography, Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';

const SpotifyContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

const AlbumArt = styled('img')({
  width: '100px',
  height: '100px',
  borderRadius: '4px',
  marginBottom: '0.5rem',
});

const TrackInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
});

function SpotifyBlock() {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // TODO: Replace with your actual Spotify API endpoint
    const fetchRecentTrack = async () => {
      try {
        setLoading(true);
        // Mock data for now - you'll need to implement the actual Spotify API call
        const mockTrack = {
          name: "Your Latest Track",
          artist: "Artist Name",
          album: "Album Name",
          albumArt: "https://via.placeholder.com/100",
          playedAt: new Date().toLocaleString(),
        };
        setTrack(mockTrack);
      } catch (err) {
        setError("Couldn't load track data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentTrack();
    const interval = setInterval(fetchRecentTrack, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <SpotifyContainer>
      {track && (
        <>
          <AlbumArt src={track.albumArt} alt={`${track.album} cover`} />
          <TrackInfo>
            <Typography variant="subtitle1" fontWeight="bold">
              {track.name}
            </Typography>
            <Typography variant="body2">
              {track.artist}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {track.album}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              Played at: {track.playedAt}
            </Typography>
          </TrackInfo>
        </>
      )}
    </SpotifyContainer>
  );
}

export default SpotifyBlock; 