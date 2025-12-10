let m1 = [
  ["M/P", "A", "B"],
  [1, 220, 310],
  [2, 230, 280],
];

function precampagna() {
  let tab = "<table border=1>";

  for (let i = 0; i < m1.length; i++) {
    tab += "<tr>";
    for (let j = 0; j < m1[i].length; j++) {
      tab += "<td>" + m1[i][j] + "</td>";
    }
    tab += "</tr>";
  }

  tab += "</table>";
  document.getElementById("iniziale").innerHTML = tab;
   campagna(m1);
}

function campagna(m){
  let m2 = [
    [m[0][0], m[0][1], m[0][2]],
    [m[1][0], m[1][1], m[1][2]],
    [m[2][0], m[2][1], m[2][2]]
  ];

  m2[1][1] = Math.round(m2[1][1] * 1.20);
  m2[1][2] = Math.round(m2[1][2] * 1.20);

  m2[2][1] = Math.round(m2[2][1] * 1.05);
  m2[2][2] = Math.round(m2[2][2] * 1.05);
   
  let tab = "<table border=1>";

  for (let i = 0; i < m2.length; i++) {
    tab += "<tr>";
    for (let j = 0; j < m2[i].length; j++) {
      tab += "<td>" + m2[i][j] + "</td>";
    }
    tab += "</tr>";
  }

  tab += "</table>";
  document.getElementById('finale').innerHTML=tab;
}


