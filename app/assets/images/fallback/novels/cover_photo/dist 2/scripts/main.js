"use strict";$(document).ready(function(){$.get("images/svg-defs.svg",function(a){var b=$('<div class="icons"></div>').html((new XMLSerializer).serializeToString(a.documentElement));$("body").prepend(b)});new Quill("#editor",{modules:{toolbar:{container:"#toolbar"},"link-tooltip":!0},theme:"snow"})});