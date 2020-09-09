// Copyright 2019 Google LLC. All Rights Reserved.
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
 * Hardcoded media json objects
 */
let mediaJSON = {
  'categories': [{
    'name': 'Movies',
    'videos': [{
        'subtitle': "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/BigBuckBunny.mp4'],
        'thumb': 'images/BigBuckBunny.jpg',
        'title': 'Big Buck Bunny',
        'duration': 596
      },
      {
        'subtitle': 'The first Blender Open Movie from 2006',
        'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/ElephantsDream.mp4'],
        'thumb': 'images/ElephantsDream.jpg',
        'title': 'Elephant Dream',
        'duration': 653
      },
      {
        'subtitle': 'HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.',
        'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/ForBiggerBlazes.mp4'],
        'thumb': 'images/ForBiggerBlazes.jpg',
        'title': 'For Bigger Blazes',
        'duration': 15
      },
      {
        'subtitle': "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
        'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/ForBiggerEscapes.mp4'],
        'thumb': 'images/ForBiggerEscapes.jpg',
        'title': 'For Bigger Escape',
        'duration': 15
      },
      {
        'subtitle': 'Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.',
        'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/ForBiggerFun.mp4'],
        'thumb': 'images/ForBiggerFun.jpg',
        'title': 'For Bigger Fun',
        'duration': 60
      },
      {
        'subtitle': 'Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
        'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/ForBiggerJoyrides.mp4'],
        'thumb': 'images/ForBiggerJoyrides.jpg',
        'title': 'For Bigger Joyrides',
        'duration': 15
      },
      {
        'subtitle': "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.",
        'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/ForBiggerMeltdowns.mp4'],
        'thumb': 'images/ForBiggerMeltdowns.jpg',
        'title': 'For Bigger Meltdowns',
        'duration': 15
      },
      {
        'subtitle': 'Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org',
        'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/Sintel.mp4'],
        'thumb': 'images/Sintel.jpg',
        'title': 'Sintel',
        'duration': 887
      },
      {
        'subtitle': 'Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.',
        'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/SubaruOutbackOnStreetAndDirt.mp4'],
        'thumb': 'images/SubaruOutbackOnStreetAndDirt.jpg',
        'title': 'Subaru Outback On Street And Dirt',
        'duration': 594
      },
      {
        'subtitle': 'Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - http://www.tearsofsteel.org',
        'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/TearsOfSteel.mp4'],
        'thumb': 'images/TearsOfSteel.jpg',
        'title': 'Tears of Steel',
        'duration': 743
      },
      {
        'subtitle': "The Smoking Tire heads out to Adams Motorsports Park in Riverside, CA to test the most requested car of 2010, the Volkswagen GTI. Will it beat the Mazdaspeed3's standard-setting lap time? Watch and see...",
        'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/VolkswagenGTIReview.mp4'],
        'thumb': 'images/VolkswagenGTIReview.jpg',
        'title': 'Volkswagen GTI Review',
        'duration': 596
      },
      {
        'subtitle': 'The Smoking Tire is going on the 2010 Bullrun Live Rally in a 2011 Shelby GT500, and posting a video from the road every single day! The only place to watch them is by subscribing to The Smoking Tire or watching at BlackMagicShine.com',
        'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/WeAreGoingOnBullrun.mp4'],
        'thumb': 'images/WeAreGoingOnBullrun.jpg',
        'title': 'We Are Going On Bullrun',
        'duration': 596
      },
      {
        'subtitle': 'The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car. The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.',
        'sources': ['https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/WhatCarCanYouGetForAGrand.mp4'],
        'thumb': 'images/WhatCarCanYouGetForAGrand.jpg',
        'title': 'What care can you get for a grand?',
        'duration': 596
      }
    ]
  }]
};

export {
  mediaJSON
}
