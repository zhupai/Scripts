/*
PicsArt app unlocks pro

Surge4.0:
http-response https:\/\/api\.(picsart|meiease)\.c(n|om)\/users\/show\/me\.json requires-body=1,max-size=0,script-path=https://github.com/zhupai/Scripts/raw/master/PicsArt.js
QX1.0.0
^https:\/\/api\.(picsart|meiease)\.c(n|om)\/users\/show\/me\.json url script-response-body https://github.com/zhupai/Scripts/raw/master/PicsArt.js

Surge & QX Mitm = api.picsart.c*, api.meiease.c*
*/

let obj = JSON.parse($response.body);
obj.subscription.granted = "true";
$done({body: JSON.stringify(obj)});
