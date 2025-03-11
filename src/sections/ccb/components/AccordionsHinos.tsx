import { useCallback, useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Grid2 } from '@mui/material';

import { dataAccordionHinos } from './datasetAccordionHinos';

export function AccordionsHinos() {
  const [expanded, setExpanded] = useState<number | false>(false);
  const [select, setSelect] = useState<any>();
  const [linkVideo, setLinkVideo] = useState('');
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const [playingHino, setPlayingHino] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleChange = (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    return () => {
      if (currentAudio) {
        currentAudio.pause();
      }
    };
  }, [currentAudio]);

  const renderVideo = useCallback(
    (linkVideo: string) => {
      return (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <iframe
              width="560"
              height="315"
              src={linkVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
        </>
      );
    },
    [linkVideo],
  );

  const playHino = (hinoId: number, audioSrc: string) => {
    if (currentAudio && playingHino === hinoId) {
      if (isPlaying) {
        currentAudio.pause();
      } else {
        currentAudio.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }

      const newAudio = new Audio(audioSrc);
      newAudio.play();
      setCurrentAudio(newAudio);
      setPlayingHino(hinoId);
      setIsPlaying(true);

      newAudio.onpause = () => setIsPlaying(false);
      newAudio.onended = () => {
        setIsPlaying(false);
        setPlayingHino(null);
      };
    }

    setSelect(dataAccordionHinos.find((vl) => vl.id === hinoId));
  };

  return (
    <Box>
      <Grid2
        container
        spacing={2}
      >
        <Grid2 size={{ xs: 12 }}>
          {select && (
            <button onClick={() => playHino(select?.id || 0, select.audio!)}>
              {playingHino === select?.id && currentAudio && !currentAudio.paused ? '⏸️ Pausar' : '▶️ Tocar'}{' '}
              {select?.titulo}
            </button>
          )}
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          {dataAccordionHinos?.map((vl, index) => {
            return (
              <>
                <Accordion
                  expanded={expanded === vl.id}
                  onChange={handleChange(vl.id)}
                  onClick={() => {
                    setLinkVideo(vl?.linkYoutube || '');
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index + 1}bh-content`}
                    id={`panel${index + 1}bh-header`}
                  >
                    <Typography
                      component="span"
                      sx={{ width: '80%', flexShrink: 0 }}
                    >
                      {index + 1}. {vl.titulo}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <button onClick={() => playHino(vl.id, vl.audio!)}>
                      {playingHino === vl.id && currentAudio && !currentAudio.paused
                        ? '⏸️ Pausar'
                        : '▶️ Tocar'}{' '}
                      {vl.titulo}
                    </button>
                    {vl?.hino?.map((trecho) => {
                      if (!trecho) {
                        return <br />;
                      }
                      return (
                        <>
                          <Typography>{trecho}</Typography>
                        </>
                      );
                    })}
                  </AccordionDetails>
                </Accordion>
              </>
            );
          })}
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>{renderVideo(linkVideo)}</Grid2>
      </Grid2>
    </Box>
  );
}
