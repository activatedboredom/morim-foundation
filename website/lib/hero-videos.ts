export const heroVideos = [
  {
    provider: 'tiktok',
    id: '6768504823336815877',
    label: 'TikTok · Zach King',
    title: 'Zach King’s broomstick illusion',
    url: 'https://www.tiktok.com/@zachking/video/6768504823336815877',
    width: 325,
    height: 578,
  },
  {
    provider: 'tiktok',
    id: '6745555903166041349',
    label: 'TikTok · Zach King',
    title: 'Zach King: Caution wet paint',
    url: 'https://www.tiktok.com/@zachking/video/6745555903166041349',
    width: 325,
    height: 578,
  },
  {
    provider: 'twitch',
    id: 'BlitheAcceptableOrangeGingerPower-DVLGiMB2Ow6qNreU',
    label: 'Twitch · CaseOh',
    title: 'CaseOh: Perfect timing — The Cooking Class',
    url: 'https://clips.twitch.tv/BlitheAcceptableOrangeGingerPower-DVLGiMB2Ow6qNreU',
    width: 400,
    height: 300,
  },
  {
    provider: 'youtube',
    id: 'DfiLbQsVB_I',
    label: 'YouTube · CNN',
    title: 'CNN: Retired generals break down Iran war strategy after week 4',
    url: 'https://www.youtube.com/watch?v=DfiLbQsVB_I',
    width: 480,
    height: 270,
  },
  {
    provider: 'twitch',
    id: 'AuspiciousTolerantMosquitoCorgiDerp-QPcBWazBm8FAGSoL',
    label: 'Twitch · CaseOh',
    title: 'CaseOh: Steals and swims — Waterpark Simulator',
    url: 'https://clips.twitch.tv/AuspiciousTolerantMosquitoCorgiDerp-QPcBWazBm8FAGSoL',
    width: 400,
    height: 300,
  },
  {
    provider: 'youtube',
    id: 'Lv4bCKjXNQk',
    label: 'YouTube · CNN',
    title: 'CNN: Retired generals break down Iran war strategy after week 5',
    url: 'https://www.youtube.com/watch?v=Lv4bCKjXNQk',
    width: 480,
    height: 270,
  },
] as const;

export type HeroVideo = (typeof heroVideos)[number];

export function heroVideoEmbed(
  video: HeroVideo,
  origin: string,
  autoplay: boolean,
) {
  if (video.provider === 'tiktok') {
    // Autoplay initializes TikTok's lazy video element; mute is also sent on ready.
    return `https://www.tiktok.com/player/v1/${video.id}?autoplay=${autoplay ? '1' : '0'}&muted=1&loop=1&controls=1&description=0&music_info=0&rel=0`;
  }
  if (video.provider === 'twitch') {
    const query = new URLSearchParams({
      clip: video.id,
      parent: new URL(origin).hostname,
      autoplay: String(autoplay),
      muted: 'true',
    });
    return `https://clips.twitch.tv/embed?${query}`;
  }
  const query = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    mute: '1',
    controls: '1',
    playsinline: '1',
    loop: '1',
    playlist: video.id,
    rel: '0',
    enablejsapi: '1',
    origin,
  });
  return `https://www.youtube.com/embed/${video.id}?${query}`;
}
