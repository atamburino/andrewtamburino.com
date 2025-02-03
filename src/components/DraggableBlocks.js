import React, { useState, useEffect } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { Typography, Paper, Box } from '@mui/material';
import { styled } from '@mui/system';
import SpotifyBlock from './SpotifyBlock';
import 'react-grid-layout/css/styles.css';
import './DraggableBlocks.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

const GridItemWrapper = styled(Paper)(({ theme, isDragging }) => ({
  padding: theme.spacing(2),
  height: '100%',
  backgroundColor: '#1a1a1a',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: isDragging 
    ? '0 12px 24px rgba(0, 0, 0, 0.3)' 
    : '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
  },
}));

const BlockTitle = styled(Typography)({
  marginBottom: '1rem',
  fontWeight: 600,
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  paddingBottom: '0.5rem',
});

const BlockContent = styled(Box)({
  height: 'calc(100% - 3rem)', // Account for title
  overflow: 'auto',
});

const blocks = [
  {
    id: 'intro',
    title: 'Andy Tamburino',
    content: 'Full Stack Developer passionate about creating modern web experiences',
  },
  {
    id: 'projects',
    title: 'Latest Projects',
    content: 'Showcase of my recent work and contributions',
  },
  {
    id: 'about',
    title: 'About Me',
    content: 'When I\'m not coding, you\'ll find me out on the disc golf course or diving into the latest MMORPG',
  },
  {
    id: 'spotify',
    title: 'Now Playing',
    content: <SpotifyBlock />,
  },
];

// Define responsive layouts
const layouts = {
  lg: [
    { i: 'intro', x: 0, y: 0, w: 1, h: 2 },
    { i: 'projects', x: 1, y: 0, w: 1, h: 2 },
    { i: 'about', x: 0, y: 2, w: 1, h: 2 },
    { i: 'spotify', x: 1, y: 2, w: 1, h: 2 },
  ],
  md: [
    { i: 'intro', x: 0, y: 0, w: 1, h: 2 },
    { i: 'projects', x: 1, y: 0, w: 1, h: 2 },
    { i: 'about', x: 0, y: 2, w: 1, h: 2 },
    { i: 'spotify', x: 1, y: 2, w: 1, h: 2 },
  ],
  sm: [
    { i: 'intro', x: 0, y: 0, w: 2, h: 2 },
    { i: 'projects', x: 0, y: 2, w: 2, h: 2 },
    { i: 'about', x: 0, y: 4, w: 2, h: 2 },
    { i: 'spotify', x: 0, y: 6, w: 2, h: 2 },
  ],
};

function DraggableBlocks() {
  const [currentLayout, setCurrentLayout] = useState(null);

  const handleLayoutChange = (layout, layouts) => {
    setCurrentLayout(layout);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: 'calc(100vh - 64px)',
        backgroundColor: '#000000',
        padding: '20px',
        overflow: 'auto',
      }}
    >
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768 }}
        cols={{ lg: 2, md: 2, sm: 1 }}
        rowHeight={150}
        margin={[20, 20]}
        isResizable={false}
        compactType={null}
        preventCollision={true}
        onLayoutChange={handleLayoutChange}
        useCSSTransforms={true}
      >
        {blocks.map((block) => (
          <div key={block.id} className="grid-item">
            <GridItemWrapper elevation={3}>
              <BlockTitle variant="h5">
                {block.title}
              </BlockTitle>
              <BlockContent>
                {typeof block.content === 'string' ? (
                  <Typography variant="body1">
                    {block.content}
                  </Typography>
                ) : (
                  block.content
                )}
              </BlockContent>
            </GridItemWrapper>
          </div>
        ))}
      </ResponsiveGridLayout>
    </Box>
  );
}

export default DraggableBlocks; 
