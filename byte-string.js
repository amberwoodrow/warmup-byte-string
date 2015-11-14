var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

function byteString(num) {
  for (var i = 0; num >= 1024 && i < 8; i++) {
    num/=1024;
  }
  return num.toFixed(2) + ' ' + units[i];
}

module.exports = byteString;