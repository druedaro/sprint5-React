import type { FeatureCard, Browser, FaqItem } from '../types';

export const features: FeatureCard[] = [
  {
    id: '1',
    image: '/images/illustration-features-tab-1.svg',
    title: 'Bookmark in one click',
    description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
  },
  {
    id: '2',
    image: '/images/illustration-features-tab-2.svg',
    title: 'Intelligent search',
    description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
  },
  {
    id: '3',
    image: '/images/illustration-features-tab-3.svg',
    title: 'Share your bookmarks',
    description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
  }
];

export const browsers: Browser[] = [
  { name: 'Chrome', version: '62', image: '/images/logo-chrome.svg' },
  { name: 'Firefox', version: '55', image: '/images/logo-firefox.svg' },
  { name: 'Opera', version: '46', image: '/images/logo-opera.svg' }
];

export const faqs: FaqItem[] = [
  {
    q: 'What is Bookmark?',
    a: 'Bookmark is a browser extension which allows you to easily manage your bookmarks. The extension provides simple utilities including but not limited to: searching through your bookmarks, categorizing them into collections, sharing bookmarks and much more.',
  },
  {
    q: 'How can I request a new browser?',
    a: "We conduct frequent polls through our newsletter if you wish to voice your opinion on which browsers should be prioritized. We will almost always choose to work on the browsers that have the most demand.",
  },
  {
    q: 'Is there a mobile app?',
    a: "Currently there are no plans for developing a mobile app. However, if there is enough demand for it, we're definitely willing to develop one for you!",
  },
  {
    q: 'What about other Chromium browsers?',
    a: "We're hard at work in developing compatible extensions for other chromium browsers such as Microsoft Edge and Brave.",
  },
];