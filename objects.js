var playlist = { Cher : 'Believe'};

function updatePlaylist(obj, artist, title){
  obj[artist] = title
  return obj;
}

function removeFromPlaylist(obj, artist){
  delete obj[artist]
  return obj;
}