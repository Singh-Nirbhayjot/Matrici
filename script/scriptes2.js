function campo(){
    let m=[];
    
    for(let i=0;i<8;i++){
        m[i]=[];
        for(let j=0;j<8;j++){
            m[i][j]=Math.round(Math.random());
        }
    }
    let tab="<table border=1>";
    for (let i = 0; i < m.length; i++) {
        tab += "<tr>";
        for (let j = 0; j < m[i].length; j++) {
            tab += "<td>" + m[i][j] + "</td>";
        }
        tab += "</tr>";
    }
    tab += "</table>";
    document.getElementById('risultato').innerHTML = tab;

    let sistema = controllo(m);
    if(sistema==true){
        document.getElementById("risultato").innerHTML +=
          "<br><b>Sistema stabilizzato</b>";
    } else {
        document.getElementById("risultato").innerHTML +=
          "<br><b>Sistema non stabilizzato</b>";
    }
}

function controllo(m){
    let contatore=0;
    for(let i=0;i<m.length;i++){
        if(m[i]==1){
            contatore++;
        }
    }
    let prec=m[0];
    for(let i=0;i<m.length;i++){
        let riga=m[i];
        if(riga!=prec){
            return false;
        }
        prec=riga;
    }
    return true;
}
