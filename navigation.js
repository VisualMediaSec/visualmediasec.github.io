
/** This is a really hacky way to load the navigation bar to the main html pages **/

var navbar = 
// First, draw the logo image and the title
['<div id="head">',
'<div id="logo">',
'<a href="home.html"></a>',
'</div>',
'<div id="title">',
'<h1>Welcome to Ye Yao\'s Homepage</h1>',
//'<h4>School of Cyberspace, Hangzhou Dianzi University</h4>',
'</div>',
'</div>',

// Begin navigation list
'<ul id="list-nav">',

'<li><a href="index.html">Home</a></li>',
'<li><a href="publications.html">Publications</a></li>',
'<li><a href="projects.html">Projects</a></li>',
//'<li><a href="service.html">Services</a></li>',
'<li><a href="students.html">Students</a></li>',
'<li><a href="courses.html">Courses</a></li>',
'<li><a href="contact.html">Contact</a></li>',
'</ul>'].join('');

document.write(navbar);
