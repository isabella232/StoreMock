$(document).ready(function(e){e("#pre_iPhone").click(function(){e("#preview section.iPhone").show(),e("#preview section.iPad").hide(),e("#preview section.mac").hide(),e("#preview section.web").hide()}),e("#pre_iPad").click(function(){e("#preview section.iPhone").hide(),e("#preview section.iPad").show(),e("#preview section.mac").hide(),e("#preview section.web").hide()}),e("#pre_mac").click(function(){e("#preview section.iPhone").hide(),e("#preview section.iPad").hide(),e("#preview section.mac").show(),e("#preview section.web").hide()}),e("#pre_web").click(function(){e("#preview section.iPhone").hide(),e("#preview section.iPad").hide(),e("#preview section.mac").hide(),e("#preview section.web").show()})});