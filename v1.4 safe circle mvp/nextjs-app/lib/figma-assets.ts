/**
 * Figma asset mappings for Next.js
 * Maps Figma asset hashes to actual image files in /public/assets/
 */

// Map Figma asset hashes directly to asset files
export const figmaAssetMap: Record<string, string> = {
  '85986970382cf0787f06862b543e8b8721cd944f': '/assets/85986970382cf0787f06862b543e8b8721cd944f.png',
  '54848f75f286af6996dc757a152776243a12d2f0': '/assets/54848f75f286af6996dc757a152776243a12d2f0.png',
  '3667e12d220b43d714201c3bab28d2ace16828f5': '/assets/3667e12d220b43d714201c3bab28d2ace16828f5.png',
  '897b4259652ab58e6acffb492924a70bda70573e': '/assets/897b4259652ab58e6acffb492924a70bda70573e.png',
  '9bcaf7ccf62709a41ffdb3efb123425f2fc74f39': '/assets/9bcaf7ccf62709a41ffdb3efb123425f2fc74f39.png',
  'a7058f87af341d4e5aecb300235b4c28cb85f148': '/assets/a7058f87af341d4e5aecb300235b4c28cb85f148.png',
  'd206d20adfb93c264907a931b238b66fef58c166': '/assets/d206d20adfb93c264907a931b238b66fef58c166.png',
  'ece298d0ec2c16f10310d45724b276a6035cb503': '/assets/ece298d0ec2c16f10310d45724b276a6035cb503.png',
  'f100685f2e801659d2e2c586a55e2117b513f336': '/assets/f100685f2e801659d2e2c586a55e2117b513f336.png',
  '03f6484f46f1ee259183c9c7e19d83e5f39fa4f7': '/assets/03f6484f46f1ee259183c9c7e19d83e5f39fa4f7.png',
  '1d64fc319aba564a05f8493b1fb09dc58aef8724': '/assets/1d64fc319aba564a05f8493b1fb09dc58aef8724.png',
  '4c71468f0e29aa1a294dedba837e800064e75011': '/assets/4c71468f0e29aa1a294dedba837e800064e75011.png',
  '5281bbf7203d7edc283b0480d1a623279c50ec88': '/assets/5281bbf7203d7edc283b0480d1a623279c50ec88.png',
  '605fb072405170ad155bf7a6e072cd3618d22317': '/assets/605fb072405170ad155bf7a6e072cd3618d22317.png',
};

export function getFigmaAsset(hash: string): string {
  return figmaAssetMap[hash] || `/assets/${hash}.png`;
}
