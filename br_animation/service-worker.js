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

var precacheConfig = [["/br_animation/404.html","d30827c9a8ace12d042be3b8f95b34ff"],["/br_animation/css/1.css","117cf3c9fb3d04d9e6f468f229305568"],["/br_animation/css/2.css","a03985d175f285f07c4d6b3d6c2b9f01"],["/br_animation/css/4.css","4cf7a6dcc3616a74c0d0d749d28cca5e"],["/br_animation/css/AccountSignupModal.css","f7bbbfbb8f9e4b09b29225a4815c8b22"],["/br_animation/css/app.css","d21ea2b29757b8fbc6477e08d6564f89"],["/br_animation/css/bot.css","3e0ebb422ff93b8b1215f596f917e696"],["/br_animation/css/modals.css","490bb67f82c9b0fecc3f2cb320b77597"],["/br_animation/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/br_animation/css/work-in-progress.css","2ef239dd9b16ce9761c7c8827c2479bd"],["/br_animation/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/br_animation/index.html","f2b7ea6293e78e76dc3e8911c1f9f5de"],["/br_animation/js/0.b79d6bf62df83718ce8d.js","38393108c7fcbb5ac2e9951a7099bec0"],["/br_animation/js/1.b79d6bf62df83718ce8d.js","60a98e9c10cfa55775793c36c82ce93b"],["/br_animation/js/10.b79d6bf62df83718ce8d.js","ea5b00e45d1ef04bbc0177885c694567"],["/br_animation/js/11.b79d6bf62df83718ce8d.js","984e200ea0730e8de5210e96d35f5362"],["/br_animation/js/12.b79d6bf62df83718ce8d.js","ddd56a3dbd2f20174fb89abf07224eab"],["/br_animation/js/13.b79d6bf62df83718ce8d.js","4e979a8afbbf9087c82acde7739aadd1"],["/br_animation/js/14.b79d6bf62df83718ce8d.js","f91d154e0bcaa5c1fed85569193d5a8f"],["/br_animation/js/15.b79d6bf62df83718ce8d.js","5a2ff6865fe86dac350f9612b516c7a0"],["/br_animation/js/16.b79d6bf62df83718ce8d.js","09cbc313ee4258f852f1730898b169f2"],["/br_animation/js/17.b79d6bf62df83718ce8d.js","8680158852b57a9605af2457ca67e94b"],["/br_animation/js/18.b79d6bf62df83718ce8d.js","1f89cf5b860edea38d8f8e92eaa1b205"],["/br_animation/js/19.b79d6bf62df83718ce8d.js","a1dfd3eb8d558006f5df35100adce6b7"],["/br_animation/js/2.b79d6bf62df83718ce8d.js","da1c8a1e77e88adfe6bbd6e3e1f11b48"],["/br_animation/js/20.b79d6bf62df83718ce8d.js","1aa76fedbbc4620824b96b79c673c1c4"],["/br_animation/js/21.b79d6bf62df83718ce8d.js","ff3388d1ed04b0432acd823b8bcdf3d6"],["/br_animation/js/22.b79d6bf62df83718ce8d.js","b5c8370657f3a8a001e17794ec3e0697"],["/br_animation/js/23.b79d6bf62df83718ce8d.js","8a72f89ac64092b5121bfb0464160d37"],["/br_animation/js/24.b79d6bf62df83718ce8d.js","7946dae6d1dfcd61a30719b60d1f0d1f"],["/br_animation/js/25.b79d6bf62df83718ce8d.js","89896e2554ed15e2c486a6065ad49764"],["/br_animation/js/26.b79d6bf62df83718ce8d.js","b8793369ea7385de5ba24e5dacec6ae3"],["/br_animation/js/27.b79d6bf62df83718ce8d.js","bec48de9672084e031a109312ea3747d"],["/br_animation/js/28.b79d6bf62df83718ce8d.js","226fb589b7e49a5452345e9d543e5756"],["/br_animation/js/29.b79d6bf62df83718ce8d.js","7ef28c540323ab67fded0762ed7ac8ea"],["/br_animation/js/3.b79d6bf62df83718ce8d.js","32c508f8b95a0047f266de397cb41740"],["/br_animation/js/30.b79d6bf62df83718ce8d.js","e8e9d33a24c3d3cb00455f468f792802"],["/br_animation/js/31.b79d6bf62df83718ce8d.js","f2f923b183c3c85d1f5c120d18483a69"],["/br_animation/js/32.b79d6bf62df83718ce8d.js","ed59fa022b910e7e4e9d62d65b84f3a7"],["/br_animation/js/33.b79d6bf62df83718ce8d.js","e00dfa3c1936f710cfc5cfc2ba6bc3f0"],["/br_animation/js/34.b79d6bf62df83718ce8d.js","3fd2bb604a9dec8c58d26ccd216f401b"],["/br_animation/js/35.b79d6bf62df83718ce8d.js","8e15430b07080617256736eaae875fac"],["/br_animation/js/36.b79d6bf62df83718ce8d.js","2c677c3a90bb17b754a365e837a89e28"],["/br_animation/js/37.b79d6bf62df83718ce8d.js","9a9d5d2fb67f65db0b5edfc2696f270d"],["/br_animation/js/38.b79d6bf62df83718ce8d.js","7da1c7af17d91b00795ed40cbc73b2ae"],["/br_animation/js/39.b79d6bf62df83718ce8d.js","958e8f97fd8dc5766a8456cf680d20f8"],["/br_animation/js/4.b79d6bf62df83718ce8d.js","00708543c2bb093fce737408b98dc36d"],["/br_animation/js/40.b79d6bf62df83718ce8d.js","c86fe46092401bb288d1d057764a82cb"],["/br_animation/js/404.b79d6bf62df83718ce8d.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/br_animation/js/41.b79d6bf62df83718ce8d.js","19e294b7dd39e20c35f336af10151564"],["/br_animation/js/42.b79d6bf62df83718ce8d.js","bc54fb1f7bd31caaace783f2ae30a309"],["/br_animation/js/43.b79d6bf62df83718ce8d.js","139fbae23efc9d8a5f4a3ec6aa4843fe"],["/br_animation/js/44.b79d6bf62df83718ce8d.js","ab7340c14ad2d315fe3e55f13a5a2022"],["/br_animation/js/45.b79d6bf62df83718ce8d.js","5e56e8315c2ee75c83e383ce99097cdc"],["/br_animation/js/46.b79d6bf62df83718ce8d.js","686283c22d892d35f8229ce9a3b1d605"],["/br_animation/js/47.b79d6bf62df83718ce8d.js","6fa76a22248b8e375b47736a1b6b52b9"],["/br_animation/js/48.b79d6bf62df83718ce8d.js","71519e6fd21654643c8efc3520bff3b7"],["/br_animation/js/49.b79d6bf62df83718ce8d.js","2022bad1fc8c5787b7a9e1d6b67e9e4f"],["/br_animation/js/5.b79d6bf62df83718ce8d.js","54aa50d3c1e460e9decf7a2cdbc2b916"],["/br_animation/js/50.b79d6bf62df83718ce8d.js","7b6163cd0cb7995d0e4e53a8405c0f07"],["/br_animation/js/51.b79d6bf62df83718ce8d.js","fad063836ffb2dab2579ff6f7fcffa35"],["/br_animation/js/52.b79d6bf62df83718ce8d.js","fa3cfdc69dca4105d653fe051842b22e"],["/br_animation/js/53.b79d6bf62df83718ce8d.js","797bde8d3bf3882f6f062289cf78cb67"],["/br_animation/js/54.b79d6bf62df83718ce8d.js","b13b101fc28a7a94c860e69356518323"],["/br_animation/js/55.b79d6bf62df83718ce8d.js","c8d1c9a88eee730ac22596b9a4962637"],["/br_animation/js/56.b79d6bf62df83718ce8d.js","6faa21a60aa3946d52e20dddffc7cd62"],["/br_animation/js/57.b79d6bf62df83718ce8d.js","9e4232851ee344ebc04b0d19beb61c4c"],["/br_animation/js/58.b79d6bf62df83718ce8d.js","167872383aef97c1efcb26301d6aed5b"],["/br_animation/js/59.b79d6bf62df83718ce8d.js","492a7daafe10dbe9c0acefa6f1bfcd84"],["/br_animation/js/6.b79d6bf62df83718ce8d.js","49783e965992ba09ed8dc2a6734e63aa"],["/br_animation/js/60.b79d6bf62df83718ce8d.js","d7fad90fa7854d906c6f4973abcd52e8"],["/br_animation/js/61.b79d6bf62df83718ce8d.js","e8552e1c71195a14bd9416a3a53836b3"],["/br_animation/js/62.b79d6bf62df83718ce8d.js","0d628da521fc978a534b69dc87b83d8a"],["/br_animation/js/63.b79d6bf62df83718ce8d.js","5a939c0c3c0326220d5ae35b1eb7efe3"],["/br_animation/js/64.b79d6bf62df83718ce8d.js","67b238fcdc683defb61d197ebf120251"],["/br_animation/js/65.b79d6bf62df83718ce8d.js","611d4a419362448fb99e0e2ac9e55538"],["/br_animation/js/66.b79d6bf62df83718ce8d.js","b8db98454e3c3f73121307afbc3e1dde"],["/br_animation/js/67.b79d6bf62df83718ce8d.js","584e764dcc6fcd5d4892f0c8b1d4ec5d"],["/br_animation/js/68.b79d6bf62df83718ce8d.js","e9b8c25b21fe7f09c6048b3ca80ad6a6"],["/br_animation/js/69.b79d6bf62df83718ce8d.js","6374691a6e4bae68affad0ad515e297a"],["/br_animation/js/7.b79d6bf62df83718ce8d.js","1c730a5cac1343dc1e01e0906224159b"],["/br_animation/js/70.b79d6bf62df83718ce8d.js","743fe34f40c191d1c64d708a6206c7f4"],["/br_animation/js/71.b79d6bf62df83718ce8d.js","c0eb78bb5edf6a1580720ed7da1e908e"],["/br_animation/js/72.b79d6bf62df83718ce8d.js","ea2108045af3a07caf950b4b9cb66076"],["/br_animation/js/73.b79d6bf62df83718ce8d.js","a21c204b00da39ade09775d495d9b955"],["/br_animation/js/74.b79d6bf62df83718ce8d.js","b9ff3b76f9708af740015cbe525c5074"],["/br_animation/js/75.b79d6bf62df83718ce8d.js","fd359e4b21cfaf92d1167117432e3c03"],["/br_animation/js/76.b79d6bf62df83718ce8d.js","f13b97b3afb7d2468d655f5fb7c362c1"],["/br_animation/js/77.b79d6bf62df83718ce8d.js","ff2425d244e457e90e6ebcbdab86a971"],["/br_animation/js/78.b79d6bf62df83718ce8d.js","acc0f36bd9deaa35ab3edf5f30564345"],["/br_animation/js/79.b79d6bf62df83718ce8d.js","912fb3745516f2eb5677bced39e5204f"],["/br_animation/js/8.b79d6bf62df83718ce8d.js","96fd5131cc1a1bfe7930b3632323cab0"],["/br_animation/js/80.b79d6bf62df83718ce8d.js","5c283aab1cdf0d90ae64deed3cc491f2"],["/br_animation/js/81.b79d6bf62df83718ce8d.js","a7d8227dc904d13a59878b4a939711f7"],["/br_animation/js/82.b79d6bf62df83718ce8d.js","b4beb2316056e655784d83e0a50c0df4"],["/br_animation/js/83.b79d6bf62df83718ce8d.js","bf285872371c565882ae9f4cee47b217"],["/br_animation/js/84.b79d6bf62df83718ce8d.js","64492f4d3b0e7cbf76985441ccc2dc46"],["/br_animation/js/85.b79d6bf62df83718ce8d.js","cb0025b3e8d6ba2ca8829eefc508b757"],["/br_animation/js/86.b79d6bf62df83718ce8d.js","98e91ea6c0674a452955cacd84a6eaf8"],["/br_animation/js/87.b79d6bf62df83718ce8d.js","a79bd94d22bc7eeb339ef092754d5666"],["/br_animation/js/88.b79d6bf62df83718ce8d.js","b033a7729314ea2cfa83648cf43e79ce"],["/br_animation/js/89.b79d6bf62df83718ce8d.js","4c3ac5463da3739906c686e84d052892"],["/br_animation/js/9.b79d6bf62df83718ce8d.js","5ca48841c7356e5d5f6598ea5a968be6"],["/br_animation/js/90.b79d6bf62df83718ce8d.js","495cbf6fd15cb56829ecb4d581131d92"],["/br_animation/js/91.b79d6bf62df83718ce8d.js","30aa98cf83a1cf6a022a3ad875c1f799"],["/br_animation/js/AccountSignupModal.b79d6bf62df83718ce8d.js","6f2a45326620707a179171780a8ef27d"],["/br_animation/js/account-info.b79d6bf62df83718ce8d.js","97cc82b12bd0ddafdf15baab2a5f3459"],["/br_animation/js/bot/0-d114d6.bot.js","efd269618db37c3e7a4c91f770b888c3"],["/br_animation/js/bot/1-b55572.bot.js","98cded9b73e542313eab2ec3d822b2e2"],["/br_animation/js/bot/10-9293ce.bot.js","ea6fc8bb53a0ad99de5a838b10e0888e"],["/br_animation/js/bot/11-864799.bot.js","8f1a71bb61e899e5a0c1b9d3b0278128"],["/br_animation/js/bot/12-27f1e6.bot.js","9c3d1aa9715a4d2a52d3c9f6b8f0f793"],["/br_animation/js/bot/13-573e29.bot.js","dea0c8a15994f74ebe43096bf03bc5ba"],["/br_animation/js/bot/14-14084d.bot.js","d1b6c168f5c0b5a36128b5a214077dbd"],["/br_animation/js/bot/15-2f40a5.bot.js","34fc25f5be771b97d9284060ee45500d"],["/br_animation/js/bot/16-6e3307.bot.js","4defd829c9b0f683e41671a16305f4ff"],["/br_animation/js/bot/17-f510b4.bot.js","7796329c1f86d627dfb8a2ff6484502e"],["/br_animation/js/bot/18-5aa5db.bot.js","10fcf024a296cc330c433309d692c535"],["/br_animation/js/bot/19-f1291b.bot.js","d95ce58a79f4643da06deba5db8f9662"],["/br_animation/js/bot/2-9d96ed.bot.js","555c08116353080c6f6c6357f2173b4c"],["/br_animation/js/bot/20-5214fc.bot.js","70ed3bc1629c34a4d860dea9dc4c29ee"],["/br_animation/js/bot/21-bd5bd4.bot.js","015e0432b0916f0a1825147bd885f43c"],["/br_animation/js/bot/22-15c243.bot.js","7a442fa74fcaab5d1ea8510e5a7f5e2d"],["/br_animation/js/bot/23-aa386d.bot.js","72c37846acb61d28f2a0bf5262191f68"],["/br_animation/js/bot/24-e28d5f.bot.js","42595fa53289a5ad0be75d1a4f27cff6"],["/br_animation/js/bot/25-396dbf.bot.js","0659ffc54f27f13a4e48f2081d156d09"],["/br_animation/js/bot/26-016647.bot.js","2e55a954cba30e14440808734e28a451"],["/br_animation/js/bot/27-e13672.bot.js","1e9aa417651a4fa2a88167c14151a62c"],["/br_animation/js/bot/28-5a1a58.bot.js","1a37f63d1692788374f50210db94272c"],["/br_animation/js/bot/29-d21bea.bot.js","f8c25ad3eafd13c5f372aa8ec7bd7036"],["/br_animation/js/bot/3-dbe695.bot.js","5ae3b25ead7822e8b637b7469eceddf6"],["/br_animation/js/bot/30-046459.bot.js","c5072180d2e6990f143a578b0fdb0bbb"],["/br_animation/js/bot/31-c46e72.bot.js","9279e6f622fa002a1be156762af0d23b"],["/br_animation/js/bot/32-c0abf5.bot.js","a453e25425b39e9a482199aff62a0348"],["/br_animation/js/bot/33-7c97df.bot.js","1f7ce31b770760d309a20c2e4c2bdfe9"],["/br_animation/js/bot/34-2c7ad5.bot.js","61d810f5e83a13a0813d36d021fcef55"],["/br_animation/js/bot/35-dfebf7.bot.js","34ca6e7dd9b498d85a16470088ca09fc"],["/br_animation/js/bot/36-bcb458.bot.js","a3f51e6406b13a08fb2d9afc5cc68ec7"],["/br_animation/js/bot/37-2693c4.bot.js","2b3885ecdecdc38e5dde417c1650e0f5"],["/br_animation/js/bot/38-34ec99.bot.js","fdb69f5ebe252a02df77b4d92f1a5f1c"],["/br_animation/js/bot/4-3d464f.bot.js","4bbfcfdbbf49ff75f4d0d1370ac090cd"],["/br_animation/js/bot/5-7fa808.bot.js","80bc3200ae0e74deaea896ab651a1d1d"],["/br_animation/js/bot/6-bfa410.bot.js","8055ef03007c22a5dfb4d69f057666fd"],["/br_animation/js/bot/7-031729.bot.js","b405ed96864c6141120ed4eefea8776e"],["/br_animation/js/bot/8-bbfd8d.bot.js","3745302afd5c6024f674afe7467b8865"],["/br_animation/js/bot/9-2f983d.bot.js","9df9189c42768f0c01d2cb5b4b59b2fc"],["/br_animation/js/bot/bot-sprite.svg","9f528949087aba08d7f7c006215f0cbf"],["/br_animation/js/bot/bot.css","3e0ebb422ff93b8b1215f596f917e696"],["/br_animation/js/bot/media/1x1.gif","4b252c2abb0553eeb61ed061862f7540"],["/br_animation/js/bot/media/arrow.svg","e349301923b796d8dd6b56b6203c5188"],["/br_animation/js/bot/media/arrow_button.svg","af12c5eec2bd1f1e25d072869364cced"],["/br_animation/js/bot/media/break_out.png","389292b608291d05870de4e1ac97372b"],["/br_animation/js/bot/media/candle_list.png","f43494bc7e430218d2a14c7e6501e0bf"],["/br_animation/js/bot/media/candle_list_1.png","024749ea807d25be83ad510e90f6dd97"],["/br_animation/js/bot/media/check_result.png","23806d8bb4f54193205537b19e32de68"],["/br_animation/js/bot/media/click.mp3","f71910b391538a67231e088bba0d47eb"],["/br_animation/js/bot/media/click.ogg","abef65ecb98a4828172f263fd5ff7064"],["/br_animation/js/bot/media/click.wav","39c900d2154fec42201e998bcf305a4f"],["/br_animation/js/bot/media/comment-arrow-down.svg","5574bacda3e4e4ff0d6e8e954102b253"],["/br_animation/js/bot/media/comment-arrow-up.svg","003e1e1c67962afe7ecb9430b959deaf"],["/br_animation/js/bot/media/compare_logic.png","fe2dcee8f26f119960429de18c00c97b"],["/br_animation/js/bot/media/constrain.png","1ae50a795be1452098d6da18970363df"],["/br_animation/js/bot/media/continue.png","69b7ac5d0c65e9440292358e28b4c12c"],["/br_animation/js/bot/media/control_forever.svg","11e7bf044cf13076eb1f9f63309017cc"],["/br_animation/js/bot/media/control_repeat.svg","35db6c180f639644f5bbd79d658eaf64"],["/br_animation/js/bot/media/control_stop.svg","0a513fecbaa8fb54d5d105d529f158c6"],["/br_animation/js/bot/media/control_wait.svg","55c2a2baaf2a4508b7d883a71e6606fe"],["/br_animation/js/bot/media/controls_for.png","12fc68f3dad2deffcb156364f92c7e69"],["/br_animation/js/bot/media/controls_forEach.png","58733f070a0788209eee78bedcfb9ded"],["/br_animation/js/bot/media/controls_if.png","bec72ea49d083e68cee719ea0f647923"],["/br_animation/js/bot/media/delete-x.svg","8d3241cf86fcac1cd1656fec47d9a0b6"],["/br_animation/js/bot/media/delete.mp3","611d9f6a9392bb80d2000e143aa64323"],["/br_animation/js/bot/media/delete.ogg","404bc7b7f1119d2eae0532a228814cf3"],["/br_animation/js/bot/media/delete.wav","f079a6272c75b7ddce61f72a98a07731"],["/br_animation/js/bot/media/dropdown-arrow-dark.svg","000650484bd9fc536153dc5d7d064996"],["/br_animation/js/bot/media/dropdown-arrow.svg","be850da552699b8705b5902cb59c6d37"],["/br_animation/js/bot/media/epoch.png","5aad262f4afe0fc29f3feb3d62ea962a"],["/br_animation/js/bot/media/event_broadcast_blue.svg","66d4fdeb552c48adb936dd134f9a7cc3"],["/br_animation/js/bot/media/event_broadcast_coral.svg","1c866d5fc9b809e085f815d4cc528c3d"],["/br_animation/js/bot/media/event_broadcast_green.svg","07fc1baf5962aa6035c259dedfbdf10b"],["/br_animation/js/bot/media/event_broadcast_magenta.svg","4288ba3e3534c6c3bf065f888c74276a"],["/br_animation/js/bot/media/event_broadcast_orange.svg","fe7e38133cf1be78f504777da6864807"],["/br_animation/js/bot/media/event_broadcast_purple.svg","97e3a8d9596074ccb0f02f888e290920"],["/br_animation/js/bot/media/event_when-broadcast-received_blue.svg","a1c3ec8129337cdc6a0e00d51ba75b75"],["/br_animation/js/bot/media/event_when-broadcast-received_coral.svg","5cddf42acdb787c2cf03bdd5c3507e16"],["/br_animation/js/bot/media/event_when-broadcast-received_green.svg","7fdc28bcbc5bae41c0e55e8c1009bf6a"],["/br_animation/js/bot/media/event_when-broadcast-received_magenta.svg","1ada6afd03b601a82d0f7650f72b39b3"],["/br_animation/js/bot/media/event_when-broadcast-received_orange.svg","fcd47384fbb6dc6e136a6961b042bb0e"],["/br_animation/js/bot/media/event_when-broadcast-received_purple.svg","0da127529cc813e1f615b87cdcf87d28"],["/br_animation/js/bot/media/event_whenflagclicked.svg","b93d2d06ce25b6a10a8af6caac0890f3"],["/br_animation/js/bot/media/eyedropper.svg","ad88aac393c2d7d9e88f7229ac5bcdde"],["/br_animation/js/bot/media/get_candle.png","b0ade6ef41382e091226788a8896bed2"],["/br_animation/js/bot/media/green-flag.svg","6a025d288965050155abca89738f6b10"],["/br_animation/js/bot/media/handclosed.cur","6b45ea439228cba3afaa23022f1246a2"],["/br_animation/js/bot/media/handdelete.cur","b0b4b0b44ed0136f7899c8b2957ca68f"],["/br_animation/js/bot/media/handopen.cur","505cbb975d6102c374ec64aa92397051"],["/br_animation/js/bot/media/if-return.png","bb611be28a973077bb6f6b11b4caeded"],["/br_animation/js/bot/media/in_candle_list_read.png","bf78c9849331b6577136e4a61979fb95"],["/br_animation/js/bot/media/is_candle_black.jpeg","51be3a2c0fbef85906ae894c5f9675f7"],["/br_animation/js/bot/media/is_candle_black_1.jpeg","d72d98eff294937daeec896afd174776"],["/br_animation/js/bot/media/logic.png","ce964ddad66e93551850d06021bb04f4"],["/br_animation/js/bot/media/microbit-block-icon.svg","762e3f99bc602ad35add07a3d34cc177"],["/br_animation/js/bot/media/music-block-icon.svg","9d9e41ee9e7df510bcbb5c65cc927526"],["/br_animation/js/bot/media/notify_telegram.png","e6707af81bf665fed6e4e72007090771"],["/br_animation/js/bot/media/pen-block-icon.svg","2d0b6dcc703fcf4cdfd2c9c19c407f9f"],["/br_animation/js/bot/media/read_candle_value.png","357ae750a0dae068a18949de40a37354"],["/br_animation/js/bot/media/remove.svg","c9b4db61d6901dc5326d8af8f00eb770"],["/br_animation/js/bot/media/repeat.svg","faeda723162340d506d259eab15a57fc"],["/br_animation/js/bot/media/repeat_until.png","257c8e4cdb56c67430fc05107ded3bd1"],["/br_animation/js/bot/media/repeat_while.png","f950108af6350a3ed0c5d01f7ff75bd0"],["/br_animation/js/bot/media/rotate-left.svg","09b2fa9a323038e25e0d71f2e204c714"],["/br_animation/js/bot/media/rotate-right.svg","68c6346a929214004666a69407245ce4"],["/br_animation/js/bot/media/sell_available.png","0f0b9892163c95fa32bdccb29a0c880e"],["/br_animation/js/bot/media/sell_pl.png","8d9e6b733be449ca305fe295d7b783fc"],["/br_animation/js/bot/media/set-led_blue.svg","64e271cacd79c04f51e4140976ed69aa"],["/br_animation/js/bot/media/set-led_coral.svg","0f819c06f38eec93562e8a7e0390aa8d"],["/br_animation/js/bot/media/set-led_green.svg","95d552a2bf92aaf29ea7b7850efc1e78"],["/br_animation/js/bot/media/set-led_magenta.svg","bab1714e185b0cce2134c239d7f9dad4"],["/br_animation/js/bot/media/set-led_mystery.svg","7f11f033db1a2764ba822a9492113802"],["/br_animation/js/bot/media/set-led_orange.svg","8b9ac813216487a8c0ab20120d55e22c"],["/br_animation/js/bot/media/set-led_purple.svg","208edc4045ede72b45a4242e9237dde4"],["/br_animation/js/bot/media/set-led_white.svg","a8a2fcc4c60a3c2c4a093081568c2456"],["/br_animation/js/bot/media/set-led_yellow.svg","59a03bf890f2c2223b47faa092451e3c"],["/br_animation/js/bot/media/sma_array.png","5d47121a70ca20944ed2fc018987339f"],["/br_animation/js/bot/media/sma_array_explanation.jpeg","79c52881f915825a5e9ed0e54b56fdc1"],["/br_animation/js/bot/media/sma_block.jpeg","809aad7cf886d7e41edc3d9eff605dc2"],["/br_animation/js/bot/media/sma_block_example.png","6dfece091e3ce56929df1f3c4bd7f1c0"],["/br_animation/js/bot/media/sma_block_example_1.png","bda6a7ef636af1eee27d6c899851cd93"],["/br_animation/js/bot/media/sma_chart_1.png","3a31f9b46813ac814bc3fb312e7361ad"],["/br_animation/js/bot/media/sma_chart_2.png","7a7e8de40b21134a0be32ca8687ef689"],["/br_animation/js/bot/media/sma_formula.png","15c459793534844fda8711db850b728d"],["/br_animation/js/bot/media/sprites.png","525a87801f9b33ec2cf606683aefed54"],["/br_animation/js/bot/media/sprites.svg","911d25e52cb1d95f2d942ec5b7670d06"],["/br_animation/js/bot/media/status-not-ready.svg","f78900031c49204a86c16c7bf733b88f"],["/br_animation/js/bot/media/status-ready.svg","48ce534fd447c2be7e4e914640a29f01"],["/br_animation/js/bot/media/todatetime.png","dcc439ff765277b4c3675582f8e50faa"],["/br_animation/js/bot/media/totimestamp.png","a0e16856157f4f6a07e73ada8ca0f16b"],["/br_animation/js/bot/media/trade_again.png","27a3794f1db90dad12246ceda6cc2696"],["/br_animation/js/bot/media/wedo2-block-icon.svg","1a0ef9e4545e669d48764fc8af37adf9"],["/br_animation/js/bot/media/wedo_motor-clockwise.svg","4829ed554af2e113d3893e7ddfcacdec"],["/br_animation/js/bot/media/wedo_motor-counterclockwise.svg","ff174bda55c2cbd90fa98409845454eb"],["/br_animation/js/bot/media/wedo_motor-speed_fast.svg","c6ccc23958f6f1f63bf3da24397ce6d0"],["/br_animation/js/bot/media/wedo_motor-speed_med.svg","043ca7700cb3d77feb7c961e20902445"],["/br_animation/js/bot/media/wedo_motor-speed_slow.svg","5d36448f0913922583b23bbda55723f6"],["/br_animation/js/bot/media/wedo_when-distance_close.svg","a0a0a92846810f59ef052cea7335a80e"],["/br_animation/js/bot/media/wedo_when-tilt-backward.svg","9fbb87c4587ecaf99818cf2e32aa121c"],["/br_animation/js/bot/media/wedo_when-tilt-forward.svg","50ad4484043907a264ddd3d8959845c4"],["/br_animation/js/bot/media/wedo_when-tilt-left.svg","e37ddacb2f596649efccf371b6ea14af"],["/br_animation/js/bot/media/wedo_when-tilt-right.svg","1a3d9d81b6d8844a8a1442c4d2601861"],["/br_animation/js/bot/media/wedo_when-tilt.svg","eda90cb35927caf62a93effa8139cf1b"],["/br_animation/js/bot/media/zoom-in.svg","db8254dc60f8e2b5190a2f19440ddf74"],["/br_animation/js/bot/media/zoom-out.svg","6dcc03cf4f57ffe8e5738cc0fc0ca731"],["/br_animation/js/bot/media/zoom-reset.svg","c70243f271cbeec1c06acbff9d525dd5"],["/br_animation/js/bot/scratch.min.js","0e908ed1f31bda40d5d085cca8bc37d8"],["/br_animation/js/bot/xml/main.xml","10c873091b3f704f87bf9b7d9987062f"],["/br_animation/js/bot/xml/toolbox.xml","d6f55e4d0ac4c5d8d14859da71b5904d"],["/br_animation/js/main.b79d6bf62df83718ce8d.js","9acc9758a717abd51f48d5aa386dc24b"],["/br_animation/js/modals.b79d6bf62df83718ce8d.js","521e25de3d137c0091ab4cbb513beef9"],["/br_animation/js/push-notification.b79d6bf62df83718ce8d.js","0b12df6e5ba12101d9d791943e5994ca"],["/br_animation/js/settings-language.b79d6bf62df83718ce8d.js","07acdadb84ebc179dcbc8eb8585b0a8e"],["/br_animation/js/settings-theme.b79d6bf62df83718ce8d.js","6eaaf71400718836d70fd48a5888ed6e"],["/br_animation/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/br_animation/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/br_animation/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/br_animation/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/br_animation/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/br_animation/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/br_animation/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/br_animation/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/br_animation/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/br_animation/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/br_animation/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/br_animation/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/br_animation/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/br_animation/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/br_animation/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/br_animation/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/br_animation/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/br_animation/js/toggle-menu-drawer.b79d6bf62df83718ce8d.js","df941bd2e4bfb7c0b0b73dfd23d3fefb"],["/br_animation/js/vendors~account-info~~e180cbd1.b79d6bf62df83718ce8d.js","2800e04e2b8a216e0b28c02643d1378d"],["/br_animation/js/work-in-progress.b79d6bf62df83718ce8d.js","e4206c2e258b35597fec2b01850ef48e"],["/br_animation/manifest.json","8198d068b6c09f046e74065c4dae39c6"],["/br_animation/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_animation/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_animation/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_animation/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_animation/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/br_animation/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/br_animation/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/br_animation/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/br_animation/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/br_animation/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/br_animation/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/br_animation/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/br_animation/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/br_animation/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/br_animation/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/br_animation/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/br_animation/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/br_animation/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/br_animation/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/br_animation/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_animation/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/br_animation/';
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







