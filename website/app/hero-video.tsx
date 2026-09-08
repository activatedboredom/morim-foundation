'use client';

import { useEffect, useRef, useState } from 'react';
import { heroVideoEmbed, type HeroVideo } from '@/lib/hero-videos';
import { startHeroVideoAutoplay } from '@/lib/hero-video-autoplay';

export function HeroVideoPlayer({
  video,
  playing,
  reduced,
  active,
}: {
  video: HeroVideo;
  playing: boolean;
  reduced: boolean;
  active: boolean;
}) {
  const frame = useRef<HTMLIFrameElement>(null);
  const shell = useRef<HTMLSpanElement>(null);
  const [origin, setOrigin] = useState('');
  const [scale, setScale] = useState(1);
  const [failed, setFailed] = useState(false);
  // Unmount remote players as soon as the page is hidden or scrolled away.
  const mounted = Boolean(origin) && active;
  useEffect(() => {
    setOrigin(window.location.origin);
    const resize = () => {
      if (shell.current) setScale(shell.current.clientWidth / video.width);
    };
    resize();
    const observer = new ResizeObserver(resize);
    if (shell.current) observer.observe(shell.current);
    return () => observer.disconnect();
  }, [video.width]);

  useEffect(() => {
    setFailed(false);
    if (!mounted || !frame.current) return;
    return startHeroVideoAutoplay(
      frame.current,
      video.provider,
      playing && !reduced,
      () => setFailed(true),
    );
  }, [mounted, playing, reduced, video.id]);

  return (
    <span
      ref={shell}
      className="hero-video-player"
      style={{ aspectRatio: `${video.width} / ${video.height}` }}
    >
      {mounted && !failed ? (
        <iframe
          ref={frame}
          title={video.title}
          src={heroVideoEmbed(video, origin, playing && !reduced)}
          width={video.width}
          height={video.height}
          style={{ transform: `scale(${scale})` }}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="hero-video-status">
          {failed ? 'Video unavailable' : null}
        </span>
      )}
    </span>
  );
}
