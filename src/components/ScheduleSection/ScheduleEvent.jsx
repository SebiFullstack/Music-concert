import React from 'react';
import styles from './ScheduleEvent.module.css';

const ScheduleEvent = ({ event }) => {
  const { content, speaker, status } = event;

  const statusLinks = {
    preview: 'https://youtu.be/KaXkWYaWiZo?feature=shared',
    live: 'https://www.youtube.com/live/WrshMGRm2e0?feature=shared',
  };

  const contentLines = content.split('\n').map((line, index) => (
    <p key={index} className={styles.contentLine}>{line}</p>
  ));

  return (
  <div className={styles.eventRow}>
    <div className={styles.eventCell}>
      {contentLines}
    </div>
    <div className={styles.eventCell}>
      <div className={styles.speakersWrapper}>
        <div className={styles.speakers}>
          {Array.isArray(speaker) ? (
            speaker.map((sp, index) => (
              <div key={index} className={styles.speaker}>
                <div
                  className={styles.speakerAvatar}
                  style={{ backgroundImage: `url(${sp.avatar})` }}
                ></div>
                <div>
                  <p className={styles.speakerName}>{sp.name}</p>
                  <p className={styles.speakerBooth}>
                    Booth:{' '}
                    <span className={styles.boothNumber}>
                      {sp.booth.replace('Booth: ', '')}
                    </span>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.speaker}>
              <div
                className={styles.speakerAvatar}
                style={{ backgroundImage: `url(${speaker.avatar})` }}
              ></div>
              <div>
                <p className={styles.speakerName}>{speaker.name}</p>
                <p className={styles.speakerBooth}>
                  Booth:{' '}
                  <span className={styles.boothNumber}>
                    {speaker.booth.replace('Booth: ', '')}
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
        {status && (
          <div className={styles.statusWrapper}>
            {status === 'preview' && (
              <a
                href={statusLinks.preview}
                className={styles.statusPreview}
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview <span className={styles.previewIcon}></span>
              </a>
            )}
            {status === 'live' && (
              <a
                href={statusLinks.live}
                className={styles.statusLive}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live <span className={styles.liveIcon}></span>
              </a>
            )}
            {status === 'upcoming' && (
              <a
                href={statusLinks.upcoming}
                className={styles.statusUpcoming}
                target="_blank"
                rel="noopener noreferrer"
              >
                Upcoming <span className={styles.upcomingIcon}></span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
);

};

export default ScheduleEvent;