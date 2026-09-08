import assert from 'node:assert/strict';
import { test } from 'node:test';
import { heroVideos, heroVideoEmbed } from '../lib/hero-videos.ts';
import { HERO_VIDEO_COUNT } from '../lib/hero-floating.ts';

test('catalog contains real TikTok, Twitch and CNN video sources, not image stand-ins', () => {
  assert.equal(heroVideos.length, HERO_VIDEO_COUNT);
  assert.deepEqual(
    heroVideos.map((video) => video.provider),
    ['tiktok', 'tiktok', 'twitch', 'youtube', 'twitch', 'youtube'],
  );
  for (const video of heroVideos) {
    const url = new URL(heroVideoEmbed(video, 'http://localhost:3000', true));
    assert.equal(url.protocol, 'https:');
    assert(!url.pathname.endsWith('.png'));
    assert(video.url.includes(video.id));
    if (video.provider === 'twitch') {
      assert.equal(url.searchParams.get('parent'), 'localhost');
      assert.equal(url.searchParams.get('muted'), 'true');
      assert(video.width >= 400 && video.height >= 300);
    }
    if (video.provider === 'youtube') {
      assert.equal(url.searchParams.get('mute'), '1');
      assert.equal(url.searchParams.get('origin'), 'http://localhost:3000');
      assert(video.title.startsWith('CNN:'));
    }
    assert(['1', 'true'].includes(url.searchParams.get('autoplay')));
    if (video.provider === 'tiktok') {
      assert.equal(url.searchParams.get('muted'), '1');
      assert(video.width >= 325 && video.height >= 578);
    }
    if (video.provider === 'twitch') assert(video.title.startsWith('CaseOh:'));
  }
});

test('reduced-motion players do not request autoplay', () => {
  for (const video of heroVideos) {
    const url = new URL(heroVideoEmbed(video, 'http://localhost:3000', false));
    assert(['0', 'false'].includes(url.searchParams.get('autoplay')));
  }
});
