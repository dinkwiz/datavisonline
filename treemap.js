Plotly.d3.csv('data.csv', function(err, rows){
  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]});
}

var data = [{
      type: "treemap",
      ids: unpack(rows, 'ids'),
      labels: unpack(rows, 'labels'),
      parents: unpack(rows, 'parents')
    }];

Plotly.newPlot('myDiv', data);
})
