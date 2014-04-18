"use strict";

angular.module('MainCtrl', []).controller('MainController', function($scope, $document) {
	var _content = [
		"abcdefghijklmnopqrstuvwxyz",
		"def def def def def def"
	];

	var currentKey = null;

	var editor = document.getElementById('ctrl-editor');

	$scope.content = _content;
	$scope.title = 'To the moon and back!';
	$scope.startEdit = function(key) {
		setKey(key);
		focus();
	};

	function getSelectionPosition () {
		var selection = window.getSelection();
		var letter = selection.focusNode.data[selection.focusOffset];
		console.log('letter', letter)
		return selection.focusOffset;
	}

	function setKey(key) {
		currentKey = key;
		console.log($scope.content[currentKey]);

		var counter=setInterval(timer, 10);
		function timer() {
			updateValue();
			clearInterval(counter);
		}
	}

	function focus() {
		/*var index = getSelectionPosition();
		editor.focus();
		var counter=setInterval(timer, 10);
		function timer() {
			editor.setSelectionRange(index, index);
			clearInterval(counter);
		}
		console.log('index', index)*/
	}

	function updateValue() {
		editor.value = $scope.content[currentKey];
	}

	function createNewRow(value) {
		value = value || "";
		console.log(value)
		currentKey++;
		$scope.content.splice(currentKey, 0, value);
		$scope.$apply();
		setKey(currentKey);
	}

	function removeRow() {
		$scope.content.splice(currentKey, 1);
		$scope.$apply();
		setKey(currentKey-1);
	}

	$document.bind('keydown', function(e) {
		console.log('w', e.which)
		console.log("len:", editor.value.length)
		if (currentKey === null) return;
		if (e.which === 8 && editor.value.length === 0) {
			removeRow();
			return;
		}
		if (e.which === 13) {
			createNewRow();
			return false;
		}
		var max = 40;
		if (editor.value.length > max) {
			//$scope.content[currentKey] = editor.value.substring(0, max);
			$scope.content[currentKey] = $scope.content[currentKey].substring(0, max);
			createNewRow($scope.content[currentKey].substring(max));
			return;
		}
	});

	$document.bind('keyup', function(e) {
		//$scope.content[currentKey] = editor.value;
		//$scope.$apply();
	});

	$scope.editor = "";
});