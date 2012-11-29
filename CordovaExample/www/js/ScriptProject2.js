////////////////////////////////////////////////////////////////////////////////
// ScriptProject2.Program
var $ScriptProject2_$Program = function() {
};
$ScriptProject2_$Program.$main = function() {
	//note: quicklight makes phonegap apis available to c#
	$(function() {
		$('#main h2').click(function(evt) {
			$('#main p').fadeToggle();
		});
	});
};
Type.registerClass(null, 'ScriptProject2.$Program', $ScriptProject2_$Program, Object);
$ScriptProject2_$Program.$main();
