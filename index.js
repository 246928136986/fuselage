        // Create an iframe element
        const iframe = document.createElement('iframe');
        iframe.id = 'fullScreenIframe';

        // Custom HTML content
        const customHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">

    <style>
        * {
            color: rgb(139, 200, 200);
            font-family: "Ubuntu", sans-serif;
            font-style: normal;
        }
        body {
            background-color: rgb(29, 48, 48);
        }
        #main {
            width: 60vw;
            margin-left: 75px;
            margin-top: 50px;
            margin-bottom: 300px;
        }
        #title {
            font-size: 45px;
            margin-bottom: 10px;
        }

    </style>
</head>
<body>
    <div id="main">
        <h1 id="title">riptide<span style="font-size: 16px; font-weight: 400;"> v1.0.0</span></h1>
        a document to share info and resources for curing boredom at school.
        <h2>table of contents</h2>
        <ul style="list-style-type:disc;">
            <li><a href="#annc">announcements</a></li>
            <li><a href="#games">games</a></li>
            <li><a href="#movies">movies/tv</a></li>
            <li><a href="#browsing">web browsing (proxies)</a></li>
            <li><a href="#tools">tools & exploits</a></li>
            <li><a href="#about">about</a></li>

        </ul>
        <h2 id="annc">announcements (9/1/2025)</h2>
        riptide has now been released :)))))))))

        <h2 id="games">games</h2>
        i've played these games before!!1!<br><br>
        a buncha game website links, enjoy<br><br>
        game sites:
        <ul style="list-style-type:disc;">
            <li><a href="https://gn-math.github.io/">gn-math</a></li>
            <li><a href="https://mathwork-geometry.github.io/projects.html">3kh0 lite</a></li>
            <li><a href="https://www.msn.com/en-us/play">msn games</a></li>
            <li><a href="https://about-benito-mussolini.github.io/">about-benito-mussolini</a> (when you go to the site, click on the "© 2024 About Benito Mussolini" at the bottom to open the real site)</li>

            <!--
                        <li><a href="#tools">tools & exploits</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#tools">tools & exploits</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#tools">tools & exploits</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#tools">tools & exploits</a></li>
            <li><a href="#about">about</a></li>
            -->

        </ul>
        
        <h2 id="movies">movies/tv</h2>
        semi-legal movie websites. watch movies, tv, anime, or whatever on your school chromebook for free, with no sign-in or anything.<br><br>
        movie websites:
        <ul style="list-style-type:disc;">
            <li><a href="https://image-cdn.survifi.com/mov.html">riptide movies</a> (made by me, designed specifically for school chromebooks. no ads or anything)</li>


        </ul>
        <h2 id="browsing">web browsing (proxies)</h2>
        sadly, because benrogo's servers are down for a few days, I can't make any proxies for about a week. come back later to get proxies!!
        <h2 id="tools">tools & exploits</h2>
        info lorem ipsuminfo lorem ipsuminfo lorem ipsuminfo lorem ipsuminfo lorem ipsuminfo lorem ipsuminfo lorem ipsuminfo lorem ipsuminfo lorem ipsuminfo lorem ipsuminfo lorem ipsuminfo lorem ipsuminfo lorem ipsuminfo lorem ipsuminfo lorem ipsuminfo lorem ipsuminfo lorem ipsuminfo lorem ipsuminfo lorem ipsuminfo lorem ipsum
        <h2 id="about">about</h2>
        what is riptide?<br><br>
        riptide is a document that i use to share links, resources, and information about curing boredom at school. i update it at least every few days with fresh links and stuff.
        <br><br><br>who made riptide?<br><br>
        why would i tell you that

    </div>
</body>
</html>
        `;

        // Write the custom HTML into the iframe
        iframe.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(customHTML);

        // Append the iframe to the body
        document.body.appendChild(iframe);