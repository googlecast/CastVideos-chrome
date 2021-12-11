// Copyright 2021 Google LLC. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

/**
 * Samnple break clips json objects
 *
 * For Vast ads, the CAF receiver SDK generates a new BreakClip object after
 * parsing the specified adTagUrl.
 */
let breakClipsJSON = [{
  id: 'bc0',
  vastAdsRequest: {
    adTagUrl: 'https://pubads.g.doubleclick.net/gampad/ads?slotname=/124319096/external/ad_rule_samples&sz=640x480&ciu_szs=300x250&unviewed_position_start=1&output=xml_vast3&impl=s&env=vp&gdfp_req=1&ad_rule=0&vad_type=linear&vpos=preroll&pod=1&ppos=1&lip=true&min_ad_duration=0&max_ad_duration=30000&vrid=6376&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpostpod&url=https://developers.google.com/interactive-media-ads/docs/sdks/html5/tags&video_doc_id=short_onecue&cmsid=496&kfa=0&tfcd=0&correlator=' + Math.floor(Math.random() * 10000)
  }
}, {
  id: 'bc1',
  whenSkippable: 4,
  contentUrl: 'https://storage.googleapis.com/cpe-sample-media/content/ads/for_bigger_blazes/for_bigger_blazes_m4s_master.mpd',
  contentType: 'application/dash+xml',
  clickThroughUrl: 'https://store.google.com/us/product/chromecast',
  title: 'For Bigger Blazes - Skippable'
}, {
  id: 'bc2',
  vastAdsRequest: {
    adTagUrl: 'https://pubads.g.doubleclick.net/gampad/ads?slotname=/124319096/external/ad_rule_samples&sz=640x480&ciu_szs=300x250&unviewed_position_start=1&output=xml_vast3&impl=s&env=vp&gdfp_req=1&ad_rule=0&cue=15000&vad_type=linear&vpos=midroll&pod=2&mridx=1&ppos=1&min_ad_duration=0&max_ad_duration=30000&vrid=6376&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpostpod&url=https://developers.google.com/interactive-media-ads/docs/sdks/html5/tags&video_doc_id=short_onecue&cmsid=496&kfa=0&tfcd=0&correlator=' + Math.floor(Math.random() * 10000)
  }
}, {
  id: 'bc3',
  vastAdsRequest: {
    adTagUrl: 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator=' + Math.floor(Math.random() * 10000)
  }
}, {
  id: 'bc4',
  contentUrl: 'https://storage.googleapis.com/cpe-sample-media/content/ads/for_bigger_escapes/for_bigger_escapes_m4s_master.mpd',
  contentType: 'application/dash+xml',
  clickThroughUrl: 'https://store.google.com/us/product/chromecast',
  title: 'For Bigger Escape'
}, {
  id: 'bc5',
  whenSkippable: 7,
  contentUrl: 'https://storage.googleapis.com/cpe-sample-media/content/ads/for_bigger_meltdowns/for_bigger_meltdowns_m4s_master.mpd',
  contentType: 'application/dash+xml',
  clickThroughUrl: 'https://store.google.com/us/product/chromecast',
  title: 'For Bigger Meltdowns - Skippable'
}, {
  id: 'bc6',
  whenSkippable: 3,
  contentUrl: 'https://storage.googleapis.com/cpe-sample-media/content/ads/for_bigger_joyrides/for_bigger_joyrides_m4s_master.mpd',
  contentType: 'application/dash+xml',
  clickThroughUrl: 'https://store.google.com/us/product/chromecast',
  title: 'For Bigger Joyrides - Skippable'
}];

/**
 * Sample breaks json objects
 */
let breaksJSON = [{
  id: 'b0',
  breakClipIds: ['bc0'],
  position: 0, // preroll
}, {
  id: 'b1',
  breakClipIds: ['bc1'],
  position: 10,
}, {
  id: 'b2',
  breakClipIds: ['bc2', 'bc5'],
  position: 30,
}, {
  id: 'b3',
  breakClipIds: ['bc3'],
  position: 50,
}, {
  id: 'b4',
  breakClipIds: ['bc4'],
  position: 120,
}, {
  id: 'b5',
  breakClipIds: ['bc6'],
  position: -1, // post roll
}];

export {
  breakClipsJSON,
  breaksJSON
}
