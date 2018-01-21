var playlist = { Cher : 'Believe'};

function updatePlaylist(obj, artist, title){
  obj[artist] = title
  return obj;
}

function removeFromPlaylist(artist, title){
  delete artist.title
  return
}