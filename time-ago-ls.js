!function e(t){var a={prefix:"",suffix:" ago",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years"},r=function(e,t){return a[e]&&a[e].replace(/%d/i,Math.abs(Math.round(t)))},n=function(e){if(e){e=(e=(e=(e=e.replace(/\.\d+/,"")).replace(/-/,"/").replace(/-/,"/")).replace(/T/," ").replace(/Z/," UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),e=new Date(1e3*e||e);var t=.001*((new Date).getTime()-e)>>0,n=t/60,o=n/60,u=o/24,s=u/365;return a.prefix+(t<45&&r("seconds",t)||t<90&&r("minute",1)||n<45&&r("minutes",n)||n<90&&r("hour",1)||o<24&&r("hours",o)||o<42&&r("day",1)||u<30&&r("days",u)||u<45&&r("month",1)||u<365&&r("months",u/30)||s<1.5&&r("year",1)||r("years",s))+a.suffix}},o=document.getElementsByClassName("timeago");for(var u in o){var s=o[u];"object"==typeof s&&(s.innerHTML=n(s.getAttribute("title")||s.getAttribute("datetime")))}setTimeout(e,6e4)}();
