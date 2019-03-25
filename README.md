# CastVideos-chrome (reference Chrome sender app)

This Google Cast demo app shows how to cast videos from a Chrome browser using Cast Chrome Sender SDK. It serves to demonstrate how to write a HTML5/Javascript Cast sender app that is fully compliant with the Design Checklist.

**This is a reference sender app to be used as the starting point for your Chrome sender app**

[List of reference apps and tutorials](https://developers.google.com/cast/docs/downloads)

## Setup Instructions
1. Get a Google Cast device and get it set up for development: https://developers.google.com/cast/docs/developers#setup_for_development.
1. [Optional] Register an application on the Developers Console [http://cast.google.com/publish](http://cast.google.com/publish "Google Cast Developer Console").
  The easiest would be to use the Styled Media Receiver option. You will get an App ID when you finish registering your application. This project uses a
  published Application ID that can be used to run the app without using your own ID but if you need to do any console debugging, you would need to have your own ID.
1. Install the latest Chrome browser.
1. Put all files on your own server.
1. Use the default media receiver app or change YOUR_APP_ID to your own in CastVideos.js.
1. Open a browser and point to your page at http://[YOUR_SERVER_LOCATION]/CastVideos-chrome/.

## Documentation
* [Google Cast Chrome Sender Overview](https://developers.google.com/cast/docs/chrome_sender/)
* [Developer Guides](https://developers.google.com/cast/docs/developers)

## References
* [Chrome Sender Reference](http://developers.google.com/cast/docs/reference/chrome)
* [Design Checklist](http://developers.google.com/cast/docs/design_checklist)

## How to report bugs
* [Google Cast SDK Support](https://developers.google.com/cast/support)
* For sample app issues, open an issue on this GitHub repo.

## Contributions
Please read and follow the steps in the [CONTRIBUTING.md](CONTRIBUTING.md).

## License
See [LICENSE](LICENSE).

## Terms
Your use of this sample is subject to, and by using or downloading the sample files you agree to comply with, the [Google APIs Terms of Service](https://developers.google.com/terms/) and the [Google Cast SDK Additional Developer Terms of Service](https://developers.google.com/cast/docs/terms/).
