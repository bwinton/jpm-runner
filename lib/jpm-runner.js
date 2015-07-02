/*eslint no-console:[0]*/
/*global atom:false, console:false*/

'use strict';

var process = require('process');

var toggle = function () {
  // var editor = atom.workspace.getActivePaneItem();
  // editor.insertText('Hello, World!');
  var temp = process.argv;
  process.argv = ['node', 'jpm', 'run'];
  var currentFile = atom.workspace.getActiveTextEditor().getPath() || '';
  var paths = atom.project.getPaths();
  var path;
  paths.forEach(function (value) {
    if (!path && currentFile.startsWith(value)) {
      path = value;
    }
  });
  if (!path) {
    path = paths[0];
  }
  console.log(path);
  process.chdir(path);
    //getPath()
  var jpm = require('jpm/bin/jpm');
  console.log(jpm);
  process.argv = temp;
};

exports.activate = function () {
  atom.commands.add('atom-workspace', 'jpm:run', toggle);
};

exports.deactivate = function () {
};
