/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/br_search_improvement/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/br_search_improvement/css/app.css","9a7c03c1bee84115f5b884852fc8c8ab"],["/br_search_improvement/css/bot.css","68dbdf19812c8750fb8454c1139b6201"],["/br_search_improvement/css/modals.css","8436b2cbe78fb78afb09699570f17869"],["/br_search_improvement/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/br_search_improvement/css/work-in-progress.css","fa8b7a307d53425ecd2265791df73b5f"],["/br_search_improvement/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_search_improvement/index.html","d1c09ec352c4f9441eb952b89543a0b8"],["/br_search_improvement/js/0.2c4cd85b79e79ead7b09.js","d8b9079dcad29812a4e0b65db3a8c89b"],["/br_search_improvement/js/1.2c4cd85b79e79ead7b09.js","d5b227514040f9243fd1bd65d8f4d25e"],["/br_search_improvement/js/10.2c4cd85b79e79ead7b09.js","751de4c79083a2ec085f5657e7a3be84"],["/br_search_improvement/js/11.2c4cd85b79e79ead7b09.js","b9f3f7bd369081d485c5a505f295c43c"],["/br_search_improvement/js/12.2c4cd85b79e79ead7b09.js","4240972ecd2a9c60f7a861349bda3abc"],["/br_search_improvement/js/13.2c4cd85b79e79ead7b09.js","27c08e553da23f76336673f969868de6"],["/br_search_improvement/js/14.2c4cd85b79e79ead7b09.js","cc88ae1128218b4d7ffb73a9a5edc5af"],["/br_search_improvement/js/15.2c4cd85b79e79ead7b09.js","98f03eb56745ceaf0bd1a093f33e98c2"],["/br_search_improvement/js/16.2c4cd85b79e79ead7b09.js","dfeaa69a837d4f00802b07fcd9cc0abd"],["/br_search_improvement/js/17.2c4cd85b79e79ead7b09.js","9289b22ae19e0d3a0f7046c462a601bd"],["/br_search_improvement/js/18.2c4cd85b79e79ead7b09.js","0a45feb945f313a0e1fa016842c030bb"],["/br_search_improvement/js/19.2c4cd85b79e79ead7b09.js","f8c91b6f5020685476adfcb81387882d"],["/br_search_improvement/js/2.2c4cd85b79e79ead7b09.js","e094c75826ae51075cb79a2d8e515cae"],["/br_search_improvement/js/20.2c4cd85b79e79ead7b09.js","4264b25b2877ac70f0d5a0e024eb09de"],["/br_search_improvement/js/21.2c4cd85b79e79ead7b09.js","8928e4241bdaadc6d199fb47e10c66f5"],["/br_search_improvement/js/22.2c4cd85b79e79ead7b09.js","ef5bdfa6d80889af34286ce2171bd3e1"],["/br_search_improvement/js/23.2c4cd85b79e79ead7b09.js","16a0788f9067ca749b18c5c364faeff8"],["/br_search_improvement/js/24.2c4cd85b79e79ead7b09.js","2e326919939a7c1f6baf7fce4f937a51"],["/br_search_improvement/js/25.2c4cd85b79e79ead7b09.js","b67f3e192d6414c8a0daa7f5e8bdf439"],["/br_search_improvement/js/26.2c4cd85b79e79ead7b09.js","96046d2e1d1747741274b983a190f9e9"],["/br_search_improvement/js/27.2c4cd85b79e79ead7b09.js","f84499093749802ded54d4f2ec41f046"],["/br_search_improvement/js/28.2c4cd85b79e79ead7b09.js","319878cda9e494ab160662c8f50cecdc"],["/br_search_improvement/js/29.2c4cd85b79e79ead7b09.js","78f53983e05c2a95a33577c05176f7d7"],["/br_search_improvement/js/3.2c4cd85b79e79ead7b09.js","684cbdefdffa09869a7426a6ac62db21"],["/br_search_improvement/js/30.2c4cd85b79e79ead7b09.js","83c2dcbafc186b664a6d01d8dd43b029"],["/br_search_improvement/js/31.2c4cd85b79e79ead7b09.js","926140a3f7f662052cb50da0276017b7"],["/br_search_improvement/js/32.2c4cd85b79e79ead7b09.js","03da3fe7fdcadde6e01102bcb1c613c5"],["/br_search_improvement/js/33.2c4cd85b79e79ead7b09.js","998c1ffa642a90b8641b6f55772040e0"],["/br_search_improvement/js/34.2c4cd85b79e79ead7b09.js","c70e0c81cc95f1abb098ab39e711dc34"],["/br_search_improvement/js/35.2c4cd85b79e79ead7b09.js","9fc599df25c8e85f807c1bc24a1b2bc5"],["/br_search_improvement/js/36.2c4cd85b79e79ead7b09.js","102db0aede7c7df83f17907141f50e93"],["/br_search_improvement/js/37.2c4cd85b79e79ead7b09.js","0daa79c8a88d1a8e42d0e989b585f84f"],["/br_search_improvement/js/38.2c4cd85b79e79ead7b09.js","271f10f907394e9a3b42218e279d891f"],["/br_search_improvement/js/39.2c4cd85b79e79ead7b09.js","cc3291623f9565fa3edf2cd29b7584a2"],["/br_search_improvement/js/4.2c4cd85b79e79ead7b09.js","0b3bc2d1d6bad7e4f35e2045032ff355"],["/br_search_improvement/js/40.2c4cd85b79e79ead7b09.js","443d39d07665f7b19e006fffe326d7cd"],["/br_search_improvement/js/404.2c4cd85b79e79ead7b09.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/br_search_improvement/js/41.2c4cd85b79e79ead7b09.js","2c47e3542c94d08cb5a95577599035ea"],["/br_search_improvement/js/42.2c4cd85b79e79ead7b09.js","5f81fa9f1dd6c9f777654777c6defc95"],["/br_search_improvement/js/43.2c4cd85b79e79ead7b09.js","6e5c226e729aa712995c1c22bf49b9f9"],["/br_search_improvement/js/44.2c4cd85b79e79ead7b09.js","5af50d6a09dd5e77a5c202629713727e"],["/br_search_improvement/js/45.2c4cd85b79e79ead7b09.js","0a01cfded9c36b4f72da7664014ce09a"],["/br_search_improvement/js/46.2c4cd85b79e79ead7b09.js","9d9f6fb1066c48e91a5d9ea8ad31f9d7"],["/br_search_improvement/js/47.2c4cd85b79e79ead7b09.js","ac21399928cce977d2fd64c81450493c"],["/br_search_improvement/js/48.2c4cd85b79e79ead7b09.js","fed012001a93f3ab0f2d5a067048b235"],["/br_search_improvement/js/49.2c4cd85b79e79ead7b09.js","1625b2a663b2fe781471c7e83754490b"],["/br_search_improvement/js/5.2c4cd85b79e79ead7b09.js","488e6b8594547e2b3e733cb70dbc0a99"],["/br_search_improvement/js/50.2c4cd85b79e79ead7b09.js","11a4bfe92ad7a6f27cfa12f7a4384441"],["/br_search_improvement/js/51.2c4cd85b79e79ead7b09.js","4b628b10f2d5b405079d00b68b49066f"],["/br_search_improvement/js/52.2c4cd85b79e79ead7b09.js","ea53befbc15fd32a17a123c66e9516be"],["/br_search_improvement/js/53.2c4cd85b79e79ead7b09.js","24915e62a944043f178a28a94939f02f"],["/br_search_improvement/js/54.2c4cd85b79e79ead7b09.js","f9ce82c1eba1b5949f156f15ab27dad2"],["/br_search_improvement/js/55.2c4cd85b79e79ead7b09.js","11bb74750638ce9cfa9be687866ab198"],["/br_search_improvement/js/56.2c4cd85b79e79ead7b09.js","dd6e15302e295e8a162d041d0dd132ae"],["/br_search_improvement/js/57.2c4cd85b79e79ead7b09.js","be49051fc95706d04fd32b84d83ae678"],["/br_search_improvement/js/58.2c4cd85b79e79ead7b09.js","cb429d77b6828c6ab7091cc3eb56d5ce"],["/br_search_improvement/js/59.2c4cd85b79e79ead7b09.js","4f275a0da12e986fa0e90b34713d7e78"],["/br_search_improvement/js/6.2c4cd85b79e79ead7b09.js","8bcdab92cb6767f385f2aecbfe67596f"],["/br_search_improvement/js/60.2c4cd85b79e79ead7b09.js","0faabad8e465298e40927e937adfa32d"],["/br_search_improvement/js/61.2c4cd85b79e79ead7b09.js","8235dfe44363431a4a591d7c63a9e9f8"],["/br_search_improvement/js/62.2c4cd85b79e79ead7b09.js","ffb22e7f3f2136a423d52f8815cc7c29"],["/br_search_improvement/js/63.2c4cd85b79e79ead7b09.js","e88eeddbea7dc182514dfa70e49770b2"],["/br_search_improvement/js/64.2c4cd85b79e79ead7b09.js","3060133f9778cae20cd5a16d87d88e7f"],["/br_search_improvement/js/65.2c4cd85b79e79ead7b09.js","dca94a266c37ab45bc5795a209a1569d"],["/br_search_improvement/js/66.2c4cd85b79e79ead7b09.js","a09b3211a4d1d88e373d708b90106e98"],["/br_search_improvement/js/67.2c4cd85b79e79ead7b09.js","2e1d9d07990fd15e46e61fc5923e80d5"],["/br_search_improvement/js/68.2c4cd85b79e79ead7b09.js","ead2b3320618499ddc75c160130a9ff5"],["/br_search_improvement/js/69.2c4cd85b79e79ead7b09.js","9c5378c25efd5362aa8fa268c4419176"],["/br_search_improvement/js/7.2c4cd85b79e79ead7b09.js","ee4646876d58a5d754e25c67a0a830c2"],["/br_search_improvement/js/70.2c4cd85b79e79ead7b09.js","c1e9bae8923c603e670412f72f974e8c"],["/br_search_improvement/js/71.2c4cd85b79e79ead7b09.js","e53e8a7f0f8803a052035ba3a8e19f62"],["/br_search_improvement/js/8.2c4cd85b79e79ead7b09.js","10670c38175d043949136ed9e0a01222"],["/br_search_improvement/js/9.2c4cd85b79e79ead7b09.js","9a1d4afddfe336fe59dbeb13c706e606"],["/br_search_improvement/js/DenialOfServiceModal.2c4cd85b79e79ead7b09.js","bca386b2f999825539a0f2ed694e34b2"],["/br_search_improvement/js/MarketUnavailableModal.2c4cd85b79e79ead7b09.js","78a067dd7dc79f699d02ca255e49390a"],["/br_search_improvement/js/ServicesErrorModal.2c4cd85b79e79ead7b09.js","cb4569407fe835a6b6950689f92388b0"],["/br_search_improvement/js/UnsupportedContractModal.2c4cd85b79e79ead7b09.js","58ba2eb5480fe0cffb915d9e286cab1f"],["/br_search_improvement/js/account-info.2c4cd85b79e79ead7b09.js","990a5160356fee546b034842aa6edfb5"],["/br_search_improvement/js/bot/1-21994c.bot.js","83916e7074f51bf6a141ec43509bf943"],["/br_search_improvement/js/bot/2-f9f71f.bot.js","9678a3643fdcbb142af7b8130356ac42"],["/br_search_improvement/js/bot/3-e4f4db.bot.js","46409b013b9f36966d6d10ab9cb1c1a0"],["/br_search_improvement/js/bot/4-fa7fe5.bot.js","e0fcd2df713afd98b95992ec6333e740"],["/br_search_improvement/js/bot/5-e52e78.bot.js","c36f272642674edcedccdd33744b9cdc"],["/br_search_improvement/js/bot/6-a64ec8.bot.js","235ae59284f461ac9f0715c612ad50fc"],["/br_search_improvement/js/bot/bot-sprite.svg","ed0fc4f5569aa55bb7977349c5e41634"],["/br_search_improvement/js/bot/bot.css","68dbdf19812c8750fb8454c1139b6201"],["/br_search_improvement/js/bot/media/1x1.gif","4b252c2abb0553eeb61ed061862f7540"],["/br_search_improvement/js/bot/media/arrow.svg","e349301923b796d8dd6b56b6203c5188"],["/br_search_improvement/js/bot/media/arrow_button.svg","af12c5eec2bd1f1e25d072869364cced"],["/br_search_improvement/js/bot/media/click.mp3","f71910b391538a67231e088bba0d47eb"],["/br_search_improvement/js/bot/media/click.ogg","abef65ecb98a4828172f263fd5ff7064"],["/br_search_improvement/js/bot/media/click.wav","39c900d2154fec42201e998bcf305a4f"],["/br_search_improvement/js/bot/media/comment-arrow-down.svg","5574bacda3e4e4ff0d6e8e954102b253"],["/br_search_improvement/js/bot/media/comment-arrow-up.svg","003e1e1c67962afe7ecb9430b959deaf"],["/br_search_improvement/js/bot/media/control_forever.svg","11e7bf044cf13076eb1f9f63309017cc"],["/br_search_improvement/js/bot/media/control_repeat.svg","35db6c180f639644f5bbd79d658eaf64"],["/br_search_improvement/js/bot/media/control_stop.svg","0a513fecbaa8fb54d5d105d529f158c6"],["/br_search_improvement/js/bot/media/control_wait.svg","55c2a2baaf2a4508b7d883a71e6606fe"],["/br_search_improvement/js/bot/media/delete-x.svg","8d3241cf86fcac1cd1656fec47d9a0b6"],["/br_search_improvement/js/bot/media/delete.mp3","611d9f6a9392bb80d2000e143aa64323"],["/br_search_improvement/js/bot/media/delete.ogg","404bc7b7f1119d2eae0532a228814cf3"],["/br_search_improvement/js/bot/media/delete.wav","f079a6272c75b7ddce61f72a98a07731"],["/br_search_improvement/js/bot/media/dropdown-arrow-dark.svg","000650484bd9fc536153dc5d7d064996"],["/br_search_improvement/js/bot/media/dropdown-arrow.svg","be850da552699b8705b5902cb59c6d37"],["/br_search_improvement/js/bot/media/event_broadcast_blue.svg","66d4fdeb552c48adb936dd134f9a7cc3"],["/br_search_improvement/js/bot/media/event_broadcast_coral.svg","1c866d5fc9b809e085f815d4cc528c3d"],["/br_search_improvement/js/bot/media/event_broadcast_green.svg","07fc1baf5962aa6035c259dedfbdf10b"],["/br_search_improvement/js/bot/media/event_broadcast_magenta.svg","4288ba3e3534c6c3bf065f888c74276a"],["/br_search_improvement/js/bot/media/event_broadcast_orange.svg","fe7e38133cf1be78f504777da6864807"],["/br_search_improvement/js/bot/media/event_broadcast_purple.svg","97e3a8d9596074ccb0f02f888e290920"],["/br_search_improvement/js/bot/media/event_when-broadcast-received_blue.svg","a1c3ec8129337cdc6a0e00d51ba75b75"],["/br_search_improvement/js/bot/media/event_when-broadcast-received_coral.svg","5cddf42acdb787c2cf03bdd5c3507e16"],["/br_search_improvement/js/bot/media/event_when-broadcast-received_green.svg","7fdc28bcbc5bae41c0e55e8c1009bf6a"],["/br_search_improvement/js/bot/media/event_when-broadcast-received_magenta.svg","1ada6afd03b601a82d0f7650f72b39b3"],["/br_search_improvement/js/bot/media/event_when-broadcast-received_orange.svg","fcd47384fbb6dc6e136a6961b042bb0e"],["/br_search_improvement/js/bot/media/event_when-broadcast-received_purple.svg","0da127529cc813e1f615b87cdcf87d28"],["/br_search_improvement/js/bot/media/event_whenflagclicked.svg","b93d2d06ce25b6a10a8af6caac0890f3"],["/br_search_improvement/js/bot/media/eyedropper.svg","ad88aac393c2d7d9e88f7229ac5bcdde"],["/br_search_improvement/js/bot/media/green-flag.svg","6a025d288965050155abca89738f6b10"],["/br_search_improvement/js/bot/media/handclosed.cur","6b45ea439228cba3afaa23022f1246a2"],["/br_search_improvement/js/bot/media/handdelete.cur","b0b4b0b44ed0136f7899c8b2957ca68f"],["/br_search_improvement/js/bot/media/handopen.cur","505cbb975d6102c374ec64aa92397051"],["/br_search_improvement/js/bot/media/microbit-block-icon.svg","762e3f99bc602ad35add07a3d34cc177"],["/br_search_improvement/js/bot/media/music-block-icon.svg","9d9e41ee9e7df510bcbb5c65cc927526"],["/br_search_improvement/js/bot/media/pen-block-icon.svg","2d0b6dcc703fcf4cdfd2c9c19c407f9f"],["/br_search_improvement/js/bot/media/remove.svg","c9b4db61d6901dc5326d8af8f00eb770"],["/br_search_improvement/js/bot/media/repeat.svg","faeda723162340d506d259eab15a57fc"],["/br_search_improvement/js/bot/media/rotate-left.svg","09b2fa9a323038e25e0d71f2e204c714"],["/br_search_improvement/js/bot/media/rotate-right.svg","68c6346a929214004666a69407245ce4"],["/br_search_improvement/js/bot/media/set-led_blue.svg","64e271cacd79c04f51e4140976ed69aa"],["/br_search_improvement/js/bot/media/set-led_coral.svg","0f819c06f38eec93562e8a7e0390aa8d"],["/br_search_improvement/js/bot/media/set-led_green.svg","95d552a2bf92aaf29ea7b7850efc1e78"],["/br_search_improvement/js/bot/media/set-led_magenta.svg","bab1714e185b0cce2134c239d7f9dad4"],["/br_search_improvement/js/bot/media/set-led_mystery.svg","7f11f033db1a2764ba822a9492113802"],["/br_search_improvement/js/bot/media/set-led_orange.svg","8b9ac813216487a8c0ab20120d55e22c"],["/br_search_improvement/js/bot/media/set-led_purple.svg","208edc4045ede72b45a4242e9237dde4"],["/br_search_improvement/js/bot/media/set-led_white.svg","a8a2fcc4c60a3c2c4a093081568c2456"],["/br_search_improvement/js/bot/media/set-led_yellow.svg","59a03bf890f2c2223b47faa092451e3c"],["/br_search_improvement/js/bot/media/sprites.png","525a87801f9b33ec2cf606683aefed54"],["/br_search_improvement/js/bot/media/sprites.svg","911d25e52cb1d95f2d942ec5b7670d06"],["/br_search_improvement/js/bot/media/status-not-ready.svg","f78900031c49204a86c16c7bf733b88f"],["/br_search_improvement/js/bot/media/status-ready.svg","48ce534fd447c2be7e4e914640a29f01"],["/br_search_improvement/js/bot/media/wedo2-block-icon.svg","1a0ef9e4545e669d48764fc8af37adf9"],["/br_search_improvement/js/bot/media/wedo_motor-clockwise.svg","4829ed554af2e113d3893e7ddfcacdec"],["/br_search_improvement/js/bot/media/wedo_motor-counterclockwise.svg","ff174bda55c2cbd90fa98409845454eb"],["/br_search_improvement/js/bot/media/wedo_motor-speed_fast.svg","c6ccc23958f6f1f63bf3da24397ce6d0"],["/br_search_improvement/js/bot/media/wedo_motor-speed_med.svg","043ca7700cb3d77feb7c961e20902445"],["/br_search_improvement/js/bot/media/wedo_motor-speed_slow.svg","5d36448f0913922583b23bbda55723f6"],["/br_search_improvement/js/bot/media/wedo_when-distance_close.svg","a0a0a92846810f59ef052cea7335a80e"],["/br_search_improvement/js/bot/media/wedo_when-tilt-backward.svg","9fbb87c4587ecaf99818cf2e32aa121c"],["/br_search_improvement/js/bot/media/wedo_when-tilt-forward.svg","50ad4484043907a264ddd3d8959845c4"],["/br_search_improvement/js/bot/media/wedo_when-tilt-left.svg","e37ddacb2f596649efccf371b6ea14af"],["/br_search_improvement/js/bot/media/wedo_when-tilt-right.svg","1a3d9d81b6d8844a8a1442c4d2601861"],["/br_search_improvement/js/bot/media/wedo_when-tilt.svg","eda90cb35927caf62a93effa8139cf1b"],["/br_search_improvement/js/bot/media/zoom-in.svg","db8254dc60f8e2b5190a2f19440ddf74"],["/br_search_improvement/js/bot/media/zoom-out.svg","6dcc03cf4f57ffe8e5738cc0fc0ca731"],["/br_search_improvement/js/bot/media/zoom-reset.svg","c70243f271cbeec1c06acbff9d525dd5"],["/br_search_improvement/js/bot/xml/main.xml","f4aadc9f189e2d6c76b51c3dc7c36352"],["/br_search_improvement/js/bot/xml/toolbox.xml","1b237c5cad6344b98e1635245b45f36d"],["/br_search_improvement/js/main.2c4cd85b79e79ead7b09.js","808b981c512905b4531a56312257fc81"],["/br_search_improvement/js/modals.2c4cd85b79e79ead7b09.js","193a3957171fb617cb816e1a6fbde777"],["/br_search_improvement/js/push-notification.2c4cd85b79e79ead7b09.js","0b12df6e5ba12101d9d791943e5994ca"],["/br_search_improvement/js/settings-chart.2c4cd85b79e79ead7b09.js","affa35d00136723a3026be5b30c0c299"],["/br_search_improvement/js/settings-language.2c4cd85b79e79ead7b09.js","0c731935668f644467cefdc4e9b95754"],["/br_search_improvement/js/settings-theme.2c4cd85b79e79ead7b09.js","636b375e93c4876f9ef7fb914161c417"],["/br_search_improvement/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/br_search_improvement/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/br_search_improvement/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/br_search_improvement/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/br_search_improvement/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/br_search_improvement/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/br_search_improvement/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/br_search_improvement/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/br_search_improvement/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/br_search_improvement/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/br_search_improvement/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/br_search_improvement/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/br_search_improvement/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/br_search_improvement/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/br_search_improvement/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/br_search_improvement/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/br_search_improvement/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/br_search_improvement/js/toggle-cashier.2c4cd85b79e79ead7b09.js","b85412f0a1df1df3627ec4a528dc3d73"],["/br_search_improvement/js/toggle-menu-drawer.2c4cd85b79e79ead7b09.js","df941bd2e4bfb7c0b0b73dfd23d3fefb"],["/br_search_improvement/js/wallet-information.2c4cd85b79e79ead7b09.js","336d02e07984b18d01a8473503d91f8d"],["/br_search_improvement/js/work-in-progress.2c4cd85b79e79ead7b09.js","3b7eb417d4d773b2f639dcdf34cbb507"],["/br_search_improvement/manifest.json","9e5e06561e21a30a413911113dc1bf37"],["/br_search_improvement/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_search_improvement/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_search_improvement/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_search_improvement/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_search_improvement/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/br_search_improvement/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/br_search_improvement/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/br_search_improvement/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/br_search_improvement/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/br_search_improvement/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/br_search_improvement/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/br_search_improvement/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/br_search_improvement/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/br_search_improvement/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/br_search_improvement/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/br_search_improvement/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/br_search_improvement/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/br_search_improvement/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/br_search_improvement/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_search_improvement/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_search_improvement/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
var cacheName = 'sw-precache-v3-app-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/br_search_improvement/';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







