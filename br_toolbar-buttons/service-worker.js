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

var precacheConfig = [["/br_toolbar-buttons/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/br_toolbar-buttons/css/1.css","9cba39e50b8f8bdb0f14fba6baf68fe5"],["/br_toolbar-buttons/css/2.css","57ca8e05038f432d3a6a833d651ffd49"],["/br_toolbar-buttons/css/4.css","4cf7a6dcc3616a74c0d0d749d28cca5e"],["/br_toolbar-buttons/css/AccountSignupModal.css","67dc7a551cb47af9b7bcc3c65b95c231"],["/br_toolbar-buttons/css/app.css","e7b360d5173ec728a7428a367af0e0d0"],["/br_toolbar-buttons/css/bot.css","f47a39eba650e1f076c1b561bafd1f24"],["/br_toolbar-buttons/css/modals.css","bf017399c7fce4879b7ef44cd5d7afc2"],["/br_toolbar-buttons/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/br_toolbar-buttons/css/work-in-progress.css","2ef239dd9b16ce9761c7c8827c2479bd"],["/br_toolbar-buttons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/br_toolbar-buttons/index.html","bd6ce4edb7e6bce8921544ccb00a5b93"],["/br_toolbar-buttons/js/0.0531f23f665c52056170.js","38393108c7fcbb5ac2e9951a7099bec0"],["/br_toolbar-buttons/js/1.0531f23f665c52056170.js","4fc01ec98b8e032a0d7d784f1af786b5"],["/br_toolbar-buttons/js/10.0531f23f665c52056170.js","ea5b00e45d1ef04bbc0177885c694567"],["/br_toolbar-buttons/js/11.0531f23f665c52056170.js","984e200ea0730e8de5210e96d35f5362"],["/br_toolbar-buttons/js/12.0531f23f665c52056170.js","ddd56a3dbd2f20174fb89abf07224eab"],["/br_toolbar-buttons/js/13.0531f23f665c52056170.js","4e979a8afbbf9087c82acde7739aadd1"],["/br_toolbar-buttons/js/14.0531f23f665c52056170.js","f91d154e0bcaa5c1fed85569193d5a8f"],["/br_toolbar-buttons/js/15.0531f23f665c52056170.js","5a2ff6865fe86dac350f9612b516c7a0"],["/br_toolbar-buttons/js/16.0531f23f665c52056170.js","09cbc313ee4258f852f1730898b169f2"],["/br_toolbar-buttons/js/17.0531f23f665c52056170.js","8680158852b57a9605af2457ca67e94b"],["/br_toolbar-buttons/js/18.0531f23f665c52056170.js","1f89cf5b860edea38d8f8e92eaa1b205"],["/br_toolbar-buttons/js/19.0531f23f665c52056170.js","a1dfd3eb8d558006f5df35100adce6b7"],["/br_toolbar-buttons/js/2.0531f23f665c52056170.js","7a82ad2050288e84698a104101695e11"],["/br_toolbar-buttons/js/20.0531f23f665c52056170.js","1aa76fedbbc4620824b96b79c673c1c4"],["/br_toolbar-buttons/js/21.0531f23f665c52056170.js","ff3388d1ed04b0432acd823b8bcdf3d6"],["/br_toolbar-buttons/js/22.0531f23f665c52056170.js","b5c8370657f3a8a001e17794ec3e0697"],["/br_toolbar-buttons/js/23.0531f23f665c52056170.js","8a72f89ac64092b5121bfb0464160d37"],["/br_toolbar-buttons/js/24.0531f23f665c52056170.js","7946dae6d1dfcd61a30719b60d1f0d1f"],["/br_toolbar-buttons/js/25.0531f23f665c52056170.js","89896e2554ed15e2c486a6065ad49764"],["/br_toolbar-buttons/js/26.0531f23f665c52056170.js","b8793369ea7385de5ba24e5dacec6ae3"],["/br_toolbar-buttons/js/27.0531f23f665c52056170.js","bec48de9672084e031a109312ea3747d"],["/br_toolbar-buttons/js/28.0531f23f665c52056170.js","226fb589b7e49a5452345e9d543e5756"],["/br_toolbar-buttons/js/29.0531f23f665c52056170.js","7ef28c540323ab67fded0762ed7ac8ea"],["/br_toolbar-buttons/js/3.0531f23f665c52056170.js","32c508f8b95a0047f266de397cb41740"],["/br_toolbar-buttons/js/30.0531f23f665c52056170.js","e8e9d33a24c3d3cb00455f468f792802"],["/br_toolbar-buttons/js/31.0531f23f665c52056170.js","f2f923b183c3c85d1f5c120d18483a69"],["/br_toolbar-buttons/js/32.0531f23f665c52056170.js","ed59fa022b910e7e4e9d62d65b84f3a7"],["/br_toolbar-buttons/js/33.0531f23f665c52056170.js","e00dfa3c1936f710cfc5cfc2ba6bc3f0"],["/br_toolbar-buttons/js/34.0531f23f665c52056170.js","3fd2bb604a9dec8c58d26ccd216f401b"],["/br_toolbar-buttons/js/35.0531f23f665c52056170.js","8e15430b07080617256736eaae875fac"],["/br_toolbar-buttons/js/36.0531f23f665c52056170.js","2c677c3a90bb17b754a365e837a89e28"],["/br_toolbar-buttons/js/37.0531f23f665c52056170.js","9a9d5d2fb67f65db0b5edfc2696f270d"],["/br_toolbar-buttons/js/38.0531f23f665c52056170.js","7da1c7af17d91b00795ed40cbc73b2ae"],["/br_toolbar-buttons/js/39.0531f23f665c52056170.js","958e8f97fd8dc5766a8456cf680d20f8"],["/br_toolbar-buttons/js/4.0531f23f665c52056170.js","288988226f8c7cceebd0ee7d7a03ebf3"],["/br_toolbar-buttons/js/40.0531f23f665c52056170.js","c86fe46092401bb288d1d057764a82cb"],["/br_toolbar-buttons/js/404.0531f23f665c52056170.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/br_toolbar-buttons/js/41.0531f23f665c52056170.js","19e294b7dd39e20c35f336af10151564"],["/br_toolbar-buttons/js/42.0531f23f665c52056170.js","bc54fb1f7bd31caaace783f2ae30a309"],["/br_toolbar-buttons/js/43.0531f23f665c52056170.js","139fbae23efc9d8a5f4a3ec6aa4843fe"],["/br_toolbar-buttons/js/44.0531f23f665c52056170.js","ab7340c14ad2d315fe3e55f13a5a2022"],["/br_toolbar-buttons/js/45.0531f23f665c52056170.js","5e56e8315c2ee75c83e383ce99097cdc"],["/br_toolbar-buttons/js/46.0531f23f665c52056170.js","686283c22d892d35f8229ce9a3b1d605"],["/br_toolbar-buttons/js/47.0531f23f665c52056170.js","6fa76a22248b8e375b47736a1b6b52b9"],["/br_toolbar-buttons/js/48.0531f23f665c52056170.js","71519e6fd21654643c8efc3520bff3b7"],["/br_toolbar-buttons/js/49.0531f23f665c52056170.js","2022bad1fc8c5787b7a9e1d6b67e9e4f"],["/br_toolbar-buttons/js/5.0531f23f665c52056170.js","54aa50d3c1e460e9decf7a2cdbc2b916"],["/br_toolbar-buttons/js/50.0531f23f665c52056170.js","7b6163cd0cb7995d0e4e53a8405c0f07"],["/br_toolbar-buttons/js/51.0531f23f665c52056170.js","fad063836ffb2dab2579ff6f7fcffa35"],["/br_toolbar-buttons/js/52.0531f23f665c52056170.js","fa3cfdc69dca4105d653fe051842b22e"],["/br_toolbar-buttons/js/53.0531f23f665c52056170.js","797bde8d3bf3882f6f062289cf78cb67"],["/br_toolbar-buttons/js/54.0531f23f665c52056170.js","b13b101fc28a7a94c860e69356518323"],["/br_toolbar-buttons/js/55.0531f23f665c52056170.js","c8d1c9a88eee730ac22596b9a4962637"],["/br_toolbar-buttons/js/56.0531f23f665c52056170.js","6faa21a60aa3946d52e20dddffc7cd62"],["/br_toolbar-buttons/js/57.0531f23f665c52056170.js","9e4232851ee344ebc04b0d19beb61c4c"],["/br_toolbar-buttons/js/58.0531f23f665c52056170.js","167872383aef97c1efcb26301d6aed5b"],["/br_toolbar-buttons/js/59.0531f23f665c52056170.js","492a7daafe10dbe9c0acefa6f1bfcd84"],["/br_toolbar-buttons/js/6.0531f23f665c52056170.js","49783e965992ba09ed8dc2a6734e63aa"],["/br_toolbar-buttons/js/60.0531f23f665c52056170.js","d7fad90fa7854d906c6f4973abcd52e8"],["/br_toolbar-buttons/js/61.0531f23f665c52056170.js","e8552e1c71195a14bd9416a3a53836b3"],["/br_toolbar-buttons/js/62.0531f23f665c52056170.js","0d628da521fc978a534b69dc87b83d8a"],["/br_toolbar-buttons/js/63.0531f23f665c52056170.js","5a939c0c3c0326220d5ae35b1eb7efe3"],["/br_toolbar-buttons/js/64.0531f23f665c52056170.js","67b238fcdc683defb61d197ebf120251"],["/br_toolbar-buttons/js/65.0531f23f665c52056170.js","611d4a419362448fb99e0e2ac9e55538"],["/br_toolbar-buttons/js/66.0531f23f665c52056170.js","b8db98454e3c3f73121307afbc3e1dde"],["/br_toolbar-buttons/js/67.0531f23f665c52056170.js","584e764dcc6fcd5d4892f0c8b1d4ec5d"],["/br_toolbar-buttons/js/68.0531f23f665c52056170.js","e9b8c25b21fe7f09c6048b3ca80ad6a6"],["/br_toolbar-buttons/js/69.0531f23f665c52056170.js","6374691a6e4bae68affad0ad515e297a"],["/br_toolbar-buttons/js/7.0531f23f665c52056170.js","1c730a5cac1343dc1e01e0906224159b"],["/br_toolbar-buttons/js/70.0531f23f665c52056170.js","743fe34f40c191d1c64d708a6206c7f4"],["/br_toolbar-buttons/js/71.0531f23f665c52056170.js","c0eb78bb5edf6a1580720ed7da1e908e"],["/br_toolbar-buttons/js/72.0531f23f665c52056170.js","ea2108045af3a07caf950b4b9cb66076"],["/br_toolbar-buttons/js/73.0531f23f665c52056170.js","a21c204b00da39ade09775d495d9b955"],["/br_toolbar-buttons/js/74.0531f23f665c52056170.js","b9ff3b76f9708af740015cbe525c5074"],["/br_toolbar-buttons/js/75.0531f23f665c52056170.js","fd359e4b21cfaf92d1167117432e3c03"],["/br_toolbar-buttons/js/76.0531f23f665c52056170.js","f13b97b3afb7d2468d655f5fb7c362c1"],["/br_toolbar-buttons/js/77.0531f23f665c52056170.js","ff2425d244e457e90e6ebcbdab86a971"],["/br_toolbar-buttons/js/78.0531f23f665c52056170.js","acc0f36bd9deaa35ab3edf5f30564345"],["/br_toolbar-buttons/js/79.0531f23f665c52056170.js","912fb3745516f2eb5677bced39e5204f"],["/br_toolbar-buttons/js/8.0531f23f665c52056170.js","96fd5131cc1a1bfe7930b3632323cab0"],["/br_toolbar-buttons/js/80.0531f23f665c52056170.js","5c283aab1cdf0d90ae64deed3cc491f2"],["/br_toolbar-buttons/js/81.0531f23f665c52056170.js","a7d8227dc904d13a59878b4a939711f7"],["/br_toolbar-buttons/js/82.0531f23f665c52056170.js","b4beb2316056e655784d83e0a50c0df4"],["/br_toolbar-buttons/js/83.0531f23f665c52056170.js","bf285872371c565882ae9f4cee47b217"],["/br_toolbar-buttons/js/84.0531f23f665c52056170.js","64492f4d3b0e7cbf76985441ccc2dc46"],["/br_toolbar-buttons/js/85.0531f23f665c52056170.js","cb0025b3e8d6ba2ca8829eefc508b757"],["/br_toolbar-buttons/js/86.0531f23f665c52056170.js","98e91ea6c0674a452955cacd84a6eaf8"],["/br_toolbar-buttons/js/87.0531f23f665c52056170.js","a79bd94d22bc7eeb339ef092754d5666"],["/br_toolbar-buttons/js/88.0531f23f665c52056170.js","b033a7729314ea2cfa83648cf43e79ce"],["/br_toolbar-buttons/js/89.0531f23f665c52056170.js","4c3ac5463da3739906c686e84d052892"],["/br_toolbar-buttons/js/9.0531f23f665c52056170.js","5ca48841c7356e5d5f6598ea5a968be6"],["/br_toolbar-buttons/js/90.0531f23f665c52056170.js","495cbf6fd15cb56829ecb4d581131d92"],["/br_toolbar-buttons/js/91.0531f23f665c52056170.js","30aa98cf83a1cf6a022a3ad875c1f799"],["/br_toolbar-buttons/js/AccountSignupModal.0531f23f665c52056170.js","df26197b441ac8d2ce028582b5416fac"],["/br_toolbar-buttons/js/account-info.0531f23f665c52056170.js","97cc82b12bd0ddafdf15baab2a5f3459"],["/br_toolbar-buttons/js/bot/0-c0e194.bot.js","54f3a75011082ea987b2375e4e3589e1"],["/br_toolbar-buttons/js/bot/1-db8aed.bot.js","2da290df4e43725f4334705f05db069a"],["/br_toolbar-buttons/js/bot/2-e98bdc.bot.js","b8bc53e62215e93a38d5fdfaf622a308"],["/br_toolbar-buttons/js/bot/3-e74ec5.bot.js","1094480225fe0cf1957574a6b1df6965"],["/br_toolbar-buttons/js/bot/4-a87a39.bot.js","1e6d1f1aa15768f9179bd01534c2e398"],["/br_toolbar-buttons/js/bot/5-eccb1b.bot.js","b5632e38b5615fc313db2492b4a6ae47"],["/br_toolbar-buttons/js/bot/bot-sprite.svg","d74e67d2d35192d3bd86659b8e34ec1d"],["/br_toolbar-buttons/js/bot/bot.css","f47a39eba650e1f076c1b561bafd1f24"],["/br_toolbar-buttons/js/bot/media/1x1.gif","4b252c2abb0553eeb61ed061862f7540"],["/br_toolbar-buttons/js/bot/media/arrow.svg","e349301923b796d8dd6b56b6203c5188"],["/br_toolbar-buttons/js/bot/media/arrow_button.svg","af12c5eec2bd1f1e25d072869364cced"],["/br_toolbar-buttons/js/bot/media/click.mp3","f71910b391538a67231e088bba0d47eb"],["/br_toolbar-buttons/js/bot/media/click.ogg","abef65ecb98a4828172f263fd5ff7064"],["/br_toolbar-buttons/js/bot/media/click.wav","39c900d2154fec42201e998bcf305a4f"],["/br_toolbar-buttons/js/bot/media/comment-arrow-down.svg","5574bacda3e4e4ff0d6e8e954102b253"],["/br_toolbar-buttons/js/bot/media/comment-arrow-up.svg","003e1e1c67962afe7ecb9430b959deaf"],["/br_toolbar-buttons/js/bot/media/control_forever.svg","11e7bf044cf13076eb1f9f63309017cc"],["/br_toolbar-buttons/js/bot/media/control_repeat.svg","35db6c180f639644f5bbd79d658eaf64"],["/br_toolbar-buttons/js/bot/media/control_stop.svg","0a513fecbaa8fb54d5d105d529f158c6"],["/br_toolbar-buttons/js/bot/media/control_wait.svg","55c2a2baaf2a4508b7d883a71e6606fe"],["/br_toolbar-buttons/js/bot/media/delete-x.svg","8d3241cf86fcac1cd1656fec47d9a0b6"],["/br_toolbar-buttons/js/bot/media/delete.mp3","611d9f6a9392bb80d2000e143aa64323"],["/br_toolbar-buttons/js/bot/media/delete.ogg","404bc7b7f1119d2eae0532a228814cf3"],["/br_toolbar-buttons/js/bot/media/delete.wav","f079a6272c75b7ddce61f72a98a07731"],["/br_toolbar-buttons/js/bot/media/dropdown-arrow-dark.svg","000650484bd9fc536153dc5d7d064996"],["/br_toolbar-buttons/js/bot/media/dropdown-arrow.svg","be850da552699b8705b5902cb59c6d37"],["/br_toolbar-buttons/js/bot/media/event_broadcast_blue.svg","66d4fdeb552c48adb936dd134f9a7cc3"],["/br_toolbar-buttons/js/bot/media/event_broadcast_coral.svg","1c866d5fc9b809e085f815d4cc528c3d"],["/br_toolbar-buttons/js/bot/media/event_broadcast_green.svg","07fc1baf5962aa6035c259dedfbdf10b"],["/br_toolbar-buttons/js/bot/media/event_broadcast_magenta.svg","4288ba3e3534c6c3bf065f888c74276a"],["/br_toolbar-buttons/js/bot/media/event_broadcast_orange.svg","fe7e38133cf1be78f504777da6864807"],["/br_toolbar-buttons/js/bot/media/event_broadcast_purple.svg","97e3a8d9596074ccb0f02f888e290920"],["/br_toolbar-buttons/js/bot/media/event_when-broadcast-received_blue.svg","a1c3ec8129337cdc6a0e00d51ba75b75"],["/br_toolbar-buttons/js/bot/media/event_when-broadcast-received_coral.svg","5cddf42acdb787c2cf03bdd5c3507e16"],["/br_toolbar-buttons/js/bot/media/event_when-broadcast-received_green.svg","7fdc28bcbc5bae41c0e55e8c1009bf6a"],["/br_toolbar-buttons/js/bot/media/event_when-broadcast-received_magenta.svg","1ada6afd03b601a82d0f7650f72b39b3"],["/br_toolbar-buttons/js/bot/media/event_when-broadcast-received_orange.svg","fcd47384fbb6dc6e136a6961b042bb0e"],["/br_toolbar-buttons/js/bot/media/event_when-broadcast-received_purple.svg","0da127529cc813e1f615b87cdcf87d28"],["/br_toolbar-buttons/js/bot/media/event_whenflagclicked.svg","b93d2d06ce25b6a10a8af6caac0890f3"],["/br_toolbar-buttons/js/bot/media/eyedropper.svg","ad88aac393c2d7d9e88f7229ac5bcdde"],["/br_toolbar-buttons/js/bot/media/green-flag.svg","6a025d288965050155abca89738f6b10"],["/br_toolbar-buttons/js/bot/media/handclosed.cur","6b45ea439228cba3afaa23022f1246a2"],["/br_toolbar-buttons/js/bot/media/handdelete.cur","b0b4b0b44ed0136f7899c8b2957ca68f"],["/br_toolbar-buttons/js/bot/media/handopen.cur","505cbb975d6102c374ec64aa92397051"],["/br_toolbar-buttons/js/bot/media/microbit-block-icon.svg","762e3f99bc602ad35add07a3d34cc177"],["/br_toolbar-buttons/js/bot/media/music-block-icon.svg","9d9e41ee9e7df510bcbb5c65cc927526"],["/br_toolbar-buttons/js/bot/media/pen-block-icon.svg","2d0b6dcc703fcf4cdfd2c9c19c407f9f"],["/br_toolbar-buttons/js/bot/media/remove.svg","c9b4db61d6901dc5326d8af8f00eb770"],["/br_toolbar-buttons/js/bot/media/repeat.svg","faeda723162340d506d259eab15a57fc"],["/br_toolbar-buttons/js/bot/media/rotate-left.svg","09b2fa9a323038e25e0d71f2e204c714"],["/br_toolbar-buttons/js/bot/media/rotate-right.svg","68c6346a929214004666a69407245ce4"],["/br_toolbar-buttons/js/bot/media/set-led_blue.svg","64e271cacd79c04f51e4140976ed69aa"],["/br_toolbar-buttons/js/bot/media/set-led_coral.svg","0f819c06f38eec93562e8a7e0390aa8d"],["/br_toolbar-buttons/js/bot/media/set-led_green.svg","95d552a2bf92aaf29ea7b7850efc1e78"],["/br_toolbar-buttons/js/bot/media/set-led_magenta.svg","bab1714e185b0cce2134c239d7f9dad4"],["/br_toolbar-buttons/js/bot/media/set-led_mystery.svg","7f11f033db1a2764ba822a9492113802"],["/br_toolbar-buttons/js/bot/media/set-led_orange.svg","8b9ac813216487a8c0ab20120d55e22c"],["/br_toolbar-buttons/js/bot/media/set-led_purple.svg","208edc4045ede72b45a4242e9237dde4"],["/br_toolbar-buttons/js/bot/media/set-led_white.svg","a8a2fcc4c60a3c2c4a093081568c2456"],["/br_toolbar-buttons/js/bot/media/set-led_yellow.svg","59a03bf890f2c2223b47faa092451e3c"],["/br_toolbar-buttons/js/bot/media/sprites.png","525a87801f9b33ec2cf606683aefed54"],["/br_toolbar-buttons/js/bot/media/sprites.svg","911d25e52cb1d95f2d942ec5b7670d06"],["/br_toolbar-buttons/js/bot/media/status-not-ready.svg","f78900031c49204a86c16c7bf733b88f"],["/br_toolbar-buttons/js/bot/media/status-ready.svg","48ce534fd447c2be7e4e914640a29f01"],["/br_toolbar-buttons/js/bot/media/wedo2-block-icon.svg","1a0ef9e4545e669d48764fc8af37adf9"],["/br_toolbar-buttons/js/bot/media/wedo_motor-clockwise.svg","4829ed554af2e113d3893e7ddfcacdec"],["/br_toolbar-buttons/js/bot/media/wedo_motor-counterclockwise.svg","ff174bda55c2cbd90fa98409845454eb"],["/br_toolbar-buttons/js/bot/media/wedo_motor-speed_fast.svg","c6ccc23958f6f1f63bf3da24397ce6d0"],["/br_toolbar-buttons/js/bot/media/wedo_motor-speed_med.svg","043ca7700cb3d77feb7c961e20902445"],["/br_toolbar-buttons/js/bot/media/wedo_motor-speed_slow.svg","5d36448f0913922583b23bbda55723f6"],["/br_toolbar-buttons/js/bot/media/wedo_when-distance_close.svg","a0a0a92846810f59ef052cea7335a80e"],["/br_toolbar-buttons/js/bot/media/wedo_when-tilt-backward.svg","9fbb87c4587ecaf99818cf2e32aa121c"],["/br_toolbar-buttons/js/bot/media/wedo_when-tilt-forward.svg","50ad4484043907a264ddd3d8959845c4"],["/br_toolbar-buttons/js/bot/media/wedo_when-tilt-left.svg","e37ddacb2f596649efccf371b6ea14af"],["/br_toolbar-buttons/js/bot/media/wedo_when-tilt-right.svg","1a3d9d81b6d8844a8a1442c4d2601861"],["/br_toolbar-buttons/js/bot/media/wedo_when-tilt.svg","eda90cb35927caf62a93effa8139cf1b"],["/br_toolbar-buttons/js/bot/media/zoom-in.svg","db8254dc60f8e2b5190a2f19440ddf74"],["/br_toolbar-buttons/js/bot/media/zoom-out.svg","6dcc03cf4f57ffe8e5738cc0fc0ca731"],["/br_toolbar-buttons/js/bot/media/zoom-reset.svg","c70243f271cbeec1c06acbff9d525dd5"],["/br_toolbar-buttons/js/bot/scratch.min.js","0e908ed1f31bda40d5d085cca8bc37d8"],["/br_toolbar-buttons/js/bot/xml/main.xml","19b79110d2a4b890e28c8ddda00e08a0"],["/br_toolbar-buttons/js/bot/xml/toolbox.xml","1b237c5cad6344b98e1635245b45f36d"],["/br_toolbar-buttons/js/main.0531f23f665c52056170.js","bdb010aac37bae703cc4bb9a2f004b8a"],["/br_toolbar-buttons/js/modals.0531f23f665c52056170.js","ec22ab46c6409b51edf24465d9192066"],["/br_toolbar-buttons/js/push-notification.0531f23f665c52056170.js","0b12df6e5ba12101d9d791943e5994ca"],["/br_toolbar-buttons/js/settings-language.0531f23f665c52056170.js","07acdadb84ebc179dcbc8eb8585b0a8e"],["/br_toolbar-buttons/js/settings-theme.0531f23f665c52056170.js","6eaaf71400718836d70fd48a5888ed6e"],["/br_toolbar-buttons/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/br_toolbar-buttons/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/br_toolbar-buttons/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/br_toolbar-buttons/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/br_toolbar-buttons/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/br_toolbar-buttons/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/br_toolbar-buttons/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/br_toolbar-buttons/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/br_toolbar-buttons/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/br_toolbar-buttons/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/br_toolbar-buttons/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/br_toolbar-buttons/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/br_toolbar-buttons/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/br_toolbar-buttons/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/br_toolbar-buttons/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/br_toolbar-buttons/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/br_toolbar-buttons/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/br_toolbar-buttons/js/toggle-menu-drawer.0531f23f665c52056170.js","df941bd2e4bfb7c0b0b73dfd23d3fefb"],["/br_toolbar-buttons/js/vendors~account-info~~e180cbd1.0531f23f665c52056170.js","2800e04e2b8a216e0b28c02643d1378d"],["/br_toolbar-buttons/js/work-in-progress.0531f23f665c52056170.js","e4206c2e258b35597fec2b01850ef48e"],["/br_toolbar-buttons/manifest.json","978505d91f2bf14985c6520dc11af9dd"],["/br_toolbar-buttons/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_toolbar-buttons/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_toolbar-buttons/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_toolbar-buttons/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_toolbar-buttons/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/br_toolbar-buttons/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/br_toolbar-buttons/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/br_toolbar-buttons/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/br_toolbar-buttons/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/br_toolbar-buttons/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/br_toolbar-buttons/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/br_toolbar-buttons/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/br_toolbar-buttons/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/br_toolbar-buttons/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/br_toolbar-buttons/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/br_toolbar-buttons/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/br_toolbar-buttons/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/br_toolbar-buttons/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/br_toolbar-buttons/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/br_toolbar-buttons/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_toolbar-buttons/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/br_toolbar-buttons/';
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







