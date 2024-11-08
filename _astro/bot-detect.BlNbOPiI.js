import{c as i,__tla as d}from"./astro-component.DIa0fJKh.js";import{r as y,m as c,u as E,__tla as F}from"./constant.CkjzUQhq.js";import{__tla as u}from"./astro/assets-service.tyfV9CK3.js";let e,l,a,n,o,r,t,B=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return F}catch{}})(),(()=>{try{return u}catch{}})()]).then(async()=>{let s;s=`<h2 id="function-description">Function Description</h2>
<p>The <code dir="auto">bot-detect</code> plugin can be used to identify and block internet crawlers from accessing site resources.</p>
<h2 id="running-properties">Running Properties</h2>
<p>Plugin Execution Phase: <code dir="auto">Authorization Phase</code>
Plugin Execution Priority: <code dir="auto">310</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>








































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>allow</td><td>array of string</td><td>Optional</td><td>-</td><td>Regular expressions to match the User-Agent request header; requests matching will be allowed to access.</td></tr><tr><td>deny</td><td>array of string</td><td>Optional</td><td>-</td><td>Regular expressions to match the User-Agent request header; requests matching will be blocked.</td></tr><tr><td>blocked_code</td><td>number</td><td>Optional</td><td>403</td><td>HTTP status code returned when a request is blocked.</td></tr><tr><td>blocked_message</td><td>string</td><td>Optional</td><td>-</td><td>HTTP response body returned when a request is blocked.</td></tr></tbody></table>
<p>The <code dir="auto">allow</code> and <code dir="auto">deny</code> fields can both be left unconfigured, in which case the default crawler identification logic will be executed. Configuring the <code dir="auto">allow</code> field can allow requests that would otherwise hit the default crawler identification logic. Configuring the <code dir="auto">deny</code> field can add additional crawler identification logic.</p>
<p>The default crawler identification regular expression set is as follows:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Bots General matcher 'name/0.0'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\/</span><span style="--0:#E1E4E8">[A-Za-z0-9</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">]+</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">) {</span><span style="--0:#B392F0">0,5}([A-Za-z0-9</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\-</span><span style="--0:#9ECBFF">_</span><span style="--0:#79B8FF">\\!\\[\\]</span><span style="--0:#9ECBFF">:]{0,50}</span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:[Aa]rchiver</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Ii]ndexer</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Ss]craper</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Bb]ot</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Ss]pider</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Cc]rawl[a-z]{</span><span style="--0:#B392F0">0,50}</span><span style="--0:#E1E4E8">))[/ ](</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)|)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Bots General matcher 'name 0.0'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\/</span><span style="--0:#E1E4E8">[A-Za-z0-9</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">]+</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">) {</span><span style="--0:#B392F0">0,5}([A-Za-z0-9</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\-</span><span style="--0:#9ECBFF">_</span><span style="--0:#79B8FF">\\!\\[\\]</span><span style="--0:#9ECBFF">:]{0,50}</span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:[Aa]rchiver</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Ii]ndexer</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Ss]craper</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Bb]ot</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Ss]pider</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Cc]rawl[a-z]{</span><span style="--0:#B392F0">0,50}</span><span style="--0:#E1E4E8">)) (</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)|)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Bots containing spider|scrape|bot(but not CUBOT)|Crawl</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">((</span><span style="--0:#F97583">?:</span><span style="--0:#E1E4E8">[A</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">z0</span><span style="--0:#F97583">-</span><span style="--0:#79B8FF">9</span><span style="--0:#E1E4E8">]{</span><span style="--0:#79B8FF">1</span><span style="--0:#F97583">,</span><span style="--0:#79B8FF">50</span><span style="--0:#E1E4E8">}</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[A</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">z</span><span style="--0:#79B8FF">\\-</span><span style="--0:#E1E4E8">]{</span><span style="--0:#79B8FF">1</span><span style="--0:#F97583">,</span><span style="--0:#79B8FF">50</span><span style="--0:#E1E4E8">} </span><span style="--0:#F97583">?|</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?:</span><span style="--0:#E1E4E8"> the </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?:</span><span style="--0:#E1E4E8">[Ss][Pp][Ii][Dd][Ee][Rr]</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Ss]crape</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Cc][Rr][Aa][Ww][Ll])[A</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">z0</span><span style="--0:#F97583">-</span><span style="--0:#79B8FF">9</span><span style="--0:#E1E4E8">]{</span><span style="--0:#79B8FF">0</span><span style="--0:#F97583">,</span><span style="--0:#79B8FF">50</span><span style="--0:#E1E4E8">})(</span><span style="--0:#F97583">?:</span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">?:</span><span style="--0:#E1E4E8">[ </span><span style="--0:#F97583">/</span><span style="--0:#E1E4E8">]</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> v)(</span><span style="--0:#79B8FF">\\d</span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#79B8FF">\\d</span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#79B8FF">\\d</span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8"># Bots Pattern '/name-0.0'</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">/((?:Ant-</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">Nutch</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[A-z]+[Bb]ot</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[A-z]+[Ss]pider</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Axtaris</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">fetchurl</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Isara</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">ShopSalad</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Tailsweep</span><span style="--0:#E1E4E8">)[ </span><span style="--0:#79B8FF">\\-</span><span style="--0:#E1E4E8">](</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">))</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">?</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Bots Pattern 'name/0.0'</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">\\b(008</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Altresium</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Argus</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">BaiduMobaider</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">BoardReader</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">DNSGroup</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">DataparkSearch</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">EDI</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Goodzer</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Grub</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">INGRID</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Infohelfer</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">LinkedInBot</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">LOOQ</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Nutch</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">OgScrper</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">PathDefender</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Peew</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">PostPost</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Steeler</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Twitterbot</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">VSE</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">WebCrunch</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">WebZIP</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Y!J-BR[A-Z]</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">YahooSeeker</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">envolk</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">sproose</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">wminer</span><span style="--0:#E1E4E8">)/(</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)(?:\\.(\\d+)|)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># More bots</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">CSimpleSpider</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Cityreview</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Robot</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">CrawlDaddy</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">CrawlFire</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Finderbots</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Index</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">crawler</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Job</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Roboter</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">KiwiStatus</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Spider</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Lijit</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Crawler</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">QuerySeekerSpider</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">ScollSpider</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Trends</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Crawler</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">USyd-NLP-Spider</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">SiteCat</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Webbot</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">BotName\\/\\$BotVersion</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">123metaspider-Bot</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">1470\\.net</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">crawler</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">50\\.nu</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">8bo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Crawler</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Bot</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Aboundex</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Accoona-[A-z]</span><span style="--0:#9ECBFF">{1,30}</span><span style="--0:#B392F0">-Agent</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">AdsBot-Google(?:-[a-z]</span><span style="--0:#9ECBFF">{1,30}</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">altavista</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">AppEngine-Google</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">archive.</span><span style="--0:#9ECBFF">{0,30}</span><span style="--0:#B392F0">\\.org_bot</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">archiver</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Ask</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Jeeves</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Bb]ai[Dd]u[Ss]pider(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:-[A-Za-z]{</span><span style="--0:#B392F0">1,30}</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:-[A-Za-z]{</span><span style="--0:#B392F0">1,30}</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)|bingbot|BingPreview|blitzbot|BlogBridge|Bloglovin|BoardReader Blog Indexer|BoardReader Favicon Fetcher|boitho.com-dc|BotSeer|BUbiNG|\\b\\w{0,30}favicon\\w{0,30}\\b|\\bYeti(?:-[a-z]{1,30}|)|Catchpoint(?: bot|)|[Cc]harlotte|Checklinks|clumboot|Comodo HTTP\\(S\\) Crawler|Comodo-Webinspector-Crawler|ConveraCrawler|CRAWL-E|CrawlConvera|Daumoa(?:-feedfetcher|)|Feed Seeker Bot|Feedbin|findlinks|Flamingo_SearchEngine|FollowSite Bot|furlbot|Genieo|gigabot|GomezAgent|gonzo1|(?:[a-zA-Z]{1,30}-|)Googlebot(?:-[a-zA-Z]{1,30}|)|Google SketchUp|grub-client|gsa-crawler|heritrix|HiddenMarket|holmes|HooWWWer|htdig|ia_archiver|ICC-Crawler|Icarus6j|ichiro(?:/mobile|)|IconSurf|IlTrovatore(?:-Setaccio|)|InfuzApp|Innovazion Crawler|InternetArchive|IP2[a-z]{1,30}Bot|jbot\\b|KaloogaBot|Kraken|Kurzor|larbin|LEIA|LesnikBot|Linguee Bot|LinkAider|LinkedInBot|Lite Bot|Llaut|lycos|Mail\\.RU_Bot|masscan|masidani_bot|Mediapartners-Google|Microsoft .{0,30} Bot|mogimogi|mozDex|MJ12bot|msnbot(?:-media {0,2}|)|msrbot|Mtps Feed Aggregation System|netresearch|Netvibes|NewsGator[^/]{0,30}|^NING|Nutch[^/]{0,30}|Nymesis|ObjectsSearch|OgScrper|Orbiter|OOZBOT|PagePeeker|PagesInventory|PaxleFramework|Peeplo Screenshot Bot|PlantyNet_WebRobot|Pompos|Qwantify|Read%20Later|Reaper|RedCarpet|Retreiver|Riddler|Rival IQ|scooter|Scrapy|Scrubby|searchsight|seekbot|semanticdiscovery|SemrushBot|Simpy|SimplePie|SEOstats|SimpleRSS|SiteCon|Slackbot-LinkExpanding|Slack-ImgProxy|Slurp|snappy|Speedy Spider|Squrl Java|Stringer|TheUsefulbot|ThumbShotsBot|Thumbshots\\.ru|Tiny Tiny RSS|Twitterbot|WhatsApp|URL2PNG|Vagabondo|VoilaBot|^vortex|Votay bot|^voyager|WASALive.Bot|Web-sniffer|WebThumb|WeSEE:[A-z]{1,30}|WhatWeb|WIRE|WordPress|Wotbox|www\\.almaden\\.ibm\\.com|Xenu(?:.s|) Link Sleuth|Xerka [A-z]{1,30}Bot|yacy(?:bot|)|YahooSeeker|Yahoo! Slurp|Yandex\\w{1,30}|YodaoBot(?:-[A-z]{1,30}|)|YottaaMonitor|Yowedo|^Zao|^Zao-Crawler|ZeBot_www\\.ze\\.bz|ZooShot|ZyBorg)(?:[ /]v?(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)|)|)|)</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="(?:\\/[A-Za-z0-9\\.]+|) {0,5}([A-Za-z0-9 \\-_\\!\\[\\]:]{0,50}(?:[Aa]rchiver|[Ii]ndexer|[Ss]craper|[Bb]ot|[Ss]pider|[Cc]rawl[a-z]{0,50}))[/ ](\\d+)(?:\\.(\\d+)(?:\\.(\\d+)|)|)\x7F    (?:\\/[A-Za-z0-9\\.]+|) {0,5}([A-Za-z0-9 \\-_\\!\\[\\]:]{0,50}(?:[Aa]rchiver|[Ii]ndexer|[Ss]craper|[Bb]ot|[Ss]pider|[Cc]rawl[a-z]{0,50})) (\\d+)(?:\\.(\\d+)(?:\\.(\\d+)|)|)\x7F    ((?:[A-z0-9]{1,50}|[A-z\\-]{1,50} ?|)(?: the |)(?:[Ss][Pp][Ii][Dd][Ee][Rr]|[Ss]crape|[Cc][Rr][Aa][Ww][Ll])[A-z0-9]{0,50})(?:(?:[ /]| v)(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)|)\x7F    /((?:Ant-)?Nutch|[A-z]+[Bb]ot|[A-z]+[Ss]pider|Axtaris|fetchurl|Isara|ShopSalad|Tailsweep)[ \\-](\\d+)(?:\\.(\\d+)(?:\\.(\\d+))?)?\x7F    \\b(008|Altresium|Argus|BaiduMobaider|BoardReader|DNSGroup|DataparkSearch|EDI|Goodzer|Grub|INGRID|Infohelfer|LinkedInBot|LOOQ|Nutch|OgScrper|PathDefender|Peew|PostPost|Steeler|Twitterbot|VSE|WebCrunch|WebZIP|Y!J-BR[A-Z]|YahooSeeker|envolk|sproose|wminer)/(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)\x7F    (CSimpleSpider|Cityreview Robot|CrawlDaddy|CrawlFire|Finderbots|Index crawler|Job Roboter|KiwiStatus Spider|Lijit Crawler|QuerySeekerSpider|ScollSpider|Trends Crawler|USyd-NLP-Spider|SiteCat Webbot|BotName\\/\\$BotVersion|123metaspider-Bot|1470\\.net crawler|50\\.nu|8bo Crawler Bot|Aboundex|Accoona-[A-z]{1,30}-Agent|AdsBot-Google(?:-[a-z]{1,30}|)|altavista|AppEngine-Google|archive.{0,30}\\.org_bot|archiver|Ask Jeeves|[Bb]ai[Dd]u[Ss]pider(?:-[A-Za-z]{1,30})(?:-[A-Za-z]{1,30}|)|bingbot|BingPreview|blitzbot|BlogBridge|Bloglovin|BoardReader Blog Indexer|BoardReader Favicon Fetcher|boitho.com-dc|BotSeer|BUbiNG|\\b\\w{0,30}favicon\\w{0,30}\\b|\\bYeti(?:-[a-z]{1,30}|)|Catchpoint(?: bot|)|[Cc]harlotte|Checklinks|clumboot|Comodo HTTP\\(S\\) Crawler|Comodo-Webinspector-Crawler|ConveraCrawler|CRAWL-E|CrawlConvera|Daumoa(?:-feedfetcher|)|Feed Seeker Bot|Feedbin|findlinks|Flamingo_SearchEngine|FollowSite Bot|furlbot|Genieo|gigabot|GomezAgent|gonzo1|(?:[a-zA-Z]{1,30}-|)Googlebot(?:-[a-zA-Z]{1,30}|)|Google SketchUp|grub-client|gsa-crawler|heritrix|HiddenMarket|holmes|HooWWWer|htdig|ia_archiver|ICC-Crawler|Icarus6j|ichiro(?:/mobile|)|IconSurf|IlTrovatore(?:-Setaccio|)|InfuzApp|Innovazion Crawler|InternetArchive|IP2[a-z]{1,30}Bot|jbot\\b|KaloogaBot|Kraken|Kurzor|larbin|LEIA|LesnikBot|Linguee Bot|LinkAider|LinkedInBot|Lite Bot|Llaut|lycos|Mail\\.RU_Bot|masscan|masidani_bot|Mediapartners-Google|Microsoft .{0,30} Bot|mogimogi|mozDex|MJ12bot|msnbot(?:-media {0,2}|)|msrbot|Mtps Feed Aggregation System|netresearch|Netvibes|NewsGator[^/]{0,30}|^NING|Nutch[^/]{0,30}|Nymesis|ObjectsSearch|OgScrper|Orbiter|OOZBOT|PagePeeker|PagesInventory|PaxleFramework|Peeplo Screenshot Bot|PlantyNet_WebRobot|Pompos|Qwantify|Read%20Later|Reaper|RedCarpet|Retreiver|Riddler|Rival IQ|scooter|Scrapy|Scrubby|searchsight|seekbot|semanticdiscovery|SemrushBot|Simpy|SimplePie|SEOstats|SimpleRSS|SiteCon|Slackbot-LinkExpanding|Slack-ImgProxy|Slurp|snappy|Speedy Spider|Squrl Java|Stringer|TheUsefulbot|ThumbShotsBot|Thumbshots\\.ru|Tiny Tiny RSS|Twitterbot|WhatsApp|URL2PNG|Vagabondo|VoilaBot|^vortex|Votay bot|^voyager|WASALive.Bot|Web-sniffer|WebThumb|WeSEE:[A-z]{1,30}|WhatWeb|WIRE|WordPress|Wotbox|www\\.almaden\\.ibm\\.com|Xenu(?:.s|) Link Sleuth|Xerka [A-z]{1,30}Bot|yacy(?:bot|)|YahooSeeker|Yahoo! Slurp|Yandex\\w{1,30}|YodaoBot(?:-[A-z]{1,30}|)|YottaaMonitor|Yowedo|^Zao|^Zao-Crawler|ZeBot_www\\.ze\\.bz|ZooShot|ZyBorg)(?:[ /]v?(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)|)|)|)"><div></div></button></div></figure></div>
<h2 id="configuration-example">Configuration Example</h2>
<h3 id="allowing-requests-that-hit-the-crawler-rules">Allowing Requests That Hit the Crawler Rules</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">".*Go-http-client.*"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow:\x7F- &#x22;.*Go-http-client.*&#x22;"><div></div></button></div></figure></div>
<p>If this configuration is not made, requests from the default Golang network library will be treated as crawlers and blocked.</p>
<h3 id="adding-crawler-identification">Adding Crawler Identification</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">deny</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"spd-tools.*"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="deny:\x7F- &#x22;spd-tools.*&#x22;"><div></div></button></div></figure></div>
<p>With this configuration, the following requests will be blocked:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://example.com</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'User-Agent: spd-tools/1.1'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://exmaple.com</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'User-Agent: spd-tools'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://example.com -H &#x27;User-Agent: spd-tools/1.1&#x27;\x7Fcurl http://exmaple.com -H &#x27;User-Agent: spd-tools&#x27;"><div></div></button></div></figure></div>`,n={title:"Bot Detect",keywords:["higress","bot detect"],description:"Bot detect plugin configuration reference"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/security/bot-detect.md",t=void 0,r=function(){return`## Function Description
The \`bot-detect\` plugin can be used to identify and block internet crawlers from accessing site resources.

## Running Properties
Plugin Execution Phase: \`Authorization Phase\`
Plugin Execution Priority: \`310\`

## Configuration Fields
| Name              | Data Type           | Required      | Default Value | Description                                                |
| ----------------- | ------------------- | --------------| --------------| ---------------------------------------------------------- |
| allow             | array of string     | Optional      | -             | Regular expressions to match the User-Agent request header; requests matching will be allowed to access. |
| deny              | array of string     | Optional      | -             | Regular expressions to match the User-Agent request header; requests matching will be blocked. |
| blocked_code      | number              | Optional      | 403           | HTTP status code returned when a request is blocked.      |
| blocked_message   | string              | Optional      | -             | HTTP response body returned when a request is blocked.    |

The \`allow\` and \`deny\` fields can both be left unconfigured, in which case the default crawler identification logic will be executed. Configuring the \`allow\` field can allow requests that would otherwise hit the default crawler identification logic. Configuring the \`deny\` field can add additional crawler identification logic.

The default crawler identification regular expression set is as follows:

\`\`\`bash
# Bots General matcher 'name/0.0'
    (?:\\/[A-Za-z0-9\\.]+|) {0,5}([A-Za-z0-9 \\-_\\!\\[\\]:]{0,50}(?:[Aa]rchiver|[Ii]ndexer|[Ss]craper|[Bb]ot|[Ss]pider|[Cc]rawl[a-z]{0,50}))[/ ](\\d+)(?:\\.(\\d+)(?:\\.(\\d+)|)|)
# Bots General matcher 'name 0.0'
    (?:\\/[A-Za-z0-9\\.]+|) {0,5}([A-Za-z0-9 \\-_\\!\\[\\]:]{0,50}(?:[Aa]rchiver|[Ii]ndexer|[Ss]craper|[Bb]ot|[Ss]pider|[Cc]rawl[a-z]{0,50})) (\\d+)(?:\\.(\\d+)(?:\\.(\\d+)|)|)
# Bots containing spider|scrape|bot(but not CUBOT)|Crawl
    ((?:[A-z0-9]{1,50}|[A-z\\-]{1,50} ?|)(?: the |)(?:[Ss][Pp][Ii][Dd][Ee][Rr]|[Ss]crape|[Cc][Rr][Aa][Ww][Ll])[A-z0-9]{0,50})(?:(?:[ /]| v)(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)|)
# Bots Pattern '/name-0.0'
    /((?:Ant-)?Nutch|[A-z]+[Bb]ot|[A-z]+[Ss]pider|Axtaris|fetchurl|Isara|ShopSalad|Tailsweep)[ \\-](\\d+)(?:\\.(\\d+)(?:\\.(\\d+))?)?
# Bots Pattern 'name/0.0'
    \\b(008|Altresium|Argus|BaiduMobaider|BoardReader|DNSGroup|DataparkSearch|EDI|Goodzer|Grub|INGRID|Infohelfer|LinkedInBot|LOOQ|Nutch|OgScrper|PathDefender|Peew|PostPost|Steeler|Twitterbot|VSE|WebCrunch|WebZIP|Y!J-BR[A-Z]|YahooSeeker|envolk|sproose|wminer)/(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)
# More bots
    (CSimpleSpider|Cityreview Robot|CrawlDaddy|CrawlFire|Finderbots|Index crawler|Job Roboter|KiwiStatus Spider|Lijit Crawler|QuerySeekerSpider|ScollSpider|Trends Crawler|USyd-NLP-Spider|SiteCat Webbot|BotName\\/\\$BotVersion|123metaspider-Bot|1470\\.net crawler|50\\.nu|8bo Crawler Bot|Aboundex|Accoona-[A-z]{1,30}-Agent|AdsBot-Google(?:-[a-z]{1,30}|)|altavista|AppEngine-Google|archive.{0,30}\\.org_bot|archiver|Ask Jeeves|[Bb]ai[Dd]u[Ss]pider(?:-[A-Za-z]{1,30})(?:-[A-Za-z]{1,30}|)|bingbot|BingPreview|blitzbot|BlogBridge|Bloglovin|BoardReader Blog Indexer|BoardReader Favicon Fetcher|boitho.com-dc|BotSeer|BUbiNG|\\b\\w{0,30}favicon\\w{0,30}\\b|\\bYeti(?:-[a-z]{1,30}|)|Catchpoint(?: bot|)|[Cc]harlotte|Checklinks|clumboot|Comodo HTTP\\(S\\) Crawler|Comodo-Webinspector-Crawler|ConveraCrawler|CRAWL-E|CrawlConvera|Daumoa(?:-feedfetcher|)|Feed Seeker Bot|Feedbin|findlinks|Flamingo_SearchEngine|FollowSite Bot|furlbot|Genieo|gigabot|GomezAgent|gonzo1|(?:[a-zA-Z]{1,30}-|)Googlebot(?:-[a-zA-Z]{1,30}|)|Google SketchUp|grub-client|gsa-crawler|heritrix|HiddenMarket|holmes|HooWWWer|htdig|ia_archiver|ICC-Crawler|Icarus6j|ichiro(?:/mobile|)|IconSurf|IlTrovatore(?:-Setaccio|)|InfuzApp|Innovazion Crawler|InternetArchive|IP2[a-z]{1,30}Bot|jbot\\b|KaloogaBot|Kraken|Kurzor|larbin|LEIA|LesnikBot|Linguee Bot|LinkAider|LinkedInBot|Lite Bot|Llaut|lycos|Mail\\.RU_Bot|masscan|masidani_bot|Mediapartners-Google|Microsoft .{0,30} Bot|mogimogi|mozDex|MJ12bot|msnbot(?:-media {0,2}|)|msrbot|Mtps Feed Aggregation System|netresearch|Netvibes|NewsGator[^/]{0,30}|^NING|Nutch[^/]{0,30}|Nymesis|ObjectsSearch|OgScrper|Orbiter|OOZBOT|PagePeeker|PagesInventory|PaxleFramework|Peeplo Screenshot Bot|PlantyNet_WebRobot|Pompos|Qwantify|Read%20Later|Reaper|RedCarpet|Retreiver|Riddler|Rival IQ|scooter|Scrapy|Scrubby|searchsight|seekbot|semanticdiscovery|SemrushBot|Simpy|SimplePie|SEOstats|SimpleRSS|SiteCon|Slackbot-LinkExpanding|Slack-ImgProxy|Slurp|snappy|Speedy Spider|Squrl Java|Stringer|TheUsefulbot|ThumbShotsBot|Thumbshots\\.ru|Tiny Tiny RSS|Twitterbot|WhatsApp|URL2PNG|Vagabondo|VoilaBot|^vortex|Votay bot|^voyager|WASALive.Bot|Web-sniffer|WebThumb|WeSEE:[A-z]{1,30}|WhatWeb|WIRE|WordPress|Wotbox|www\\.almaden\\.ibm\\.com|Xenu(?:.s|) Link Sleuth|Xerka [A-z]{1,30}Bot|yacy(?:bot|)|YahooSeeker|Yahoo! Slurp|Yandex\\w{1,30}|YodaoBot(?:-[A-z]{1,30}|)|YottaaMonitor|Yowedo|^Zao|^Zao-Crawler|ZeBot_www\\.ze\\.bz|ZooShot|ZyBorg)(?:[ /]v?(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)|)|)|)
\`\`\`

## Configuration Example
### Allowing Requests That Hit the Crawler Rules
\`\`\`yaml
allow:
- ".*Go-http-client.*"
\`\`\`

If this configuration is not made, requests from the default Golang network library will be treated as crawlers and blocked.

### Adding Crawler Identification
\`\`\`yaml
deny:
- "spd-tools.*"
\`\`\`

With this configuration, the following requests will be blocked:
\`\`\`bash
curl http://example.com -H 'User-Agent: spd-tools/1.1'
curl http://exmaple.com -H 'User-Agent: spd-tools'
\`\`\`
`},l=function(){return s},o=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"running-properties",text:"Running Properties"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:2,slug:"configuration-example",text:"Configuration Example"},{depth:3,slug:"allowing-requests-that-hit-the-crawler-rules",text:"Allowing Requests That Hit the Crawler Rules"},{depth:3,slug:"adding-crawler-identification",text:"Adding Crawler Identification"}]},e=i((h,b,g)=>{const{layout:w,...p}=n;return p.file=a,p.url=t,y`${c()}${E(s)}`})});export{e as Content,B as __tla,l as compiledContent,e as default,a as file,n as frontmatter,o as getHeadings,r as rawContent,t as url};
