function clock() {var hr = new Date ()
var hora = hr.getHours()
var minutos = hr.getMinutes()
var segundos = hr.getSeconds()
window.setInterval('clock()', 1000)
    var dh = document.getElementById('dh')
    var uh = document.getElementById('uh')
    var dm = document.getElementById('dm')
    var um = document.getElementById('um')
    var ds = document.getElementById('ds')
    var us = document.getElementById('us')
   


/*horas*/ {
if (hora == "00") { 
     dh.src='zero.png'
     uh.src='zero.png'}
else if (hora == "01") {
     dh.src='zero.png'
     uh.src='um.png' }
 else if (hora == "02")  {
    dh.src='zero.png'
    uh.src='dois.png' }
else if (hora == "03")  {
    dh.src='zero.png'
    uh.src='tres.png' }
else if (hora == "04")  {
    dh.src='zero.png'
    uh.src='quatro.png' }
else if (hora == "05")  {
    dh.src='zero.png'
    uh.src='cinco.png' }
else if (hora == "06")  {
    dh.src='zero.png'
    uh.src='seis.png' }
else if (hora == "07")  {
    dh.src='zero.png'
    uh.src='sete.png' }
else if (hora == "08") {
    dh.src='zero.png'
    uh.src='oito.png' }
else if (hora == "09") {
    dh.src='zero.png'
    uh.src='nove.png' }
else if (hora == "10") {
    dh.src='um.png'
    uh.src='zero.png' }
else if (hora == "11") {
    dh.src='um.png'
    uh.src='um.png' }
else if (hora == "12") {
    dh.src='um.png'
    uh.src='dois.png' }
else if (hora == "13") {
    dh.src='um.png'
    uh.src='tres.png' }
else if (hora == "14") {
    dh.src='um.png'
    uh.src='quatro.png' }
else if (hora == "15") {
    dh.src='um.png'
    uh.src='cinco.png' }
else if (hora == "16") {
    dh.src='um.png'
    uh.src='seis.png' }
else if (hora == "17") {
    dh.src='um.png'
    uh.src='sete.png' }
else if (hora == "18") {
    dh.src='um.png'
    uh.src='oito.png' }
else if (hora == "19") {
    dh.src='um.png'
    uh.src='nove.png' }
else if (hora == "20") {
    dh.src='dois.png'
    uh.src='zero.png' }
else if (hora == "21") {
    dh.src='dois.png'
    uh.src='um.png' }
else if (hora == "22") {
    dh.src='dois.png'
    uh.src='dois.png' }
else if (hora == "23") {
    dh.src='dois.png'
    uh.src='tres.png' }
}//fim das horas

/*minutos*/{
    if (minutos == "00") { 
    dm.src='zero.png'
    um.src='zero.png'}
else if (minutos == "01") {
    dm.src='zero.png'
    um.src='um.png'}
else if (minutos == "02")  {
   dm.src='zero.png'
   um.src='dois.png'}
else if (minutos == "03")  {
   dm.src='zero.png'
   um.src='tres.png'}
else if (minutos == "04")  {
   dm.src='zero.png'
   um.src='quatro.png'}
else if (minutos == "05")  {
   dm.src='zero.png'
   um.src='cinco.png'}
else if (minutos == "06")  {
   dm.src='zero.png'
   um.src='seis.png'}
else if (minutos == "07")  {
   dm.src='zero.png'
   um.src='sete.png'}
else if (minutos == "08") {
   dm.src='zero.png'
   um.src='oito.png'}
else if (minutos == "09") {
   dm.src='zero.png'
   um.src='nove.png'}
else if (minutos == "10") {
   dm.src='um.png'
   um.src='zero.png'}
else if (minutos == "11") {
   dm.src='um.png'
   um.src='um.png'}
else if (minutos == "12") {
   dm.src='um.png'
   um.src='dois.png'}
else if (minutos == "13") {
   dm.src='um.png'
   um.src='tres.png'}
else if (minutos == "14") {
   dm.src='um.png'
   um.src='quatro.png'}
else if (minutos == "15") {
   dm.src='um.png'
   um.src='cinco.png'}
else if (minutos == "16") {
   dm.src='um.png'
   um.src='seis.png'}
else if (minutos == "17") {
   dm.src='um.png'
   um.src='sete.png'}
else if (minutos == "18") {
   dm.src='um.png'
   um.src='oito.png'}
else if (minutos == "19") {
   dm.src='um.png'
   um.src='nove.png'}
else if (minutos == "20") {
   dm.src='dois.png'
   um.src='zero.png'}
else if (minutos == "21") {
   dm.src='dois.png'
   um.src='um.png'}
else if (minutos == "22") {
   dm.src='dois.png'
   um.src='dois.png'}
else if (minutos == "23") {
   dm.src='dois.png'
   um.src='tres.png'}
else if (minutos == "24") {
   dm.src='dois.png'
   um.src='quatro.png'}
else if (minutos == "25") {
   dm.src='dois.png'
   um.src='cinco.png'}
else if (minutos == "26") {
   dm.src='dois.png'
   um.src='seis.png'}
else if (minutos == "27") {
   dm.src='dois.png'
   um.src='sete.png' }
else if (minutos == "28") {
   dm.src='dois.png'
   um.src='oito.png'}
else if (minutos == "29") {
   dm.src='dois.png'
   um.src='nove.png'}
else if (minutos == "30") {
   dm.src='tres.png'
   um.src='zero.png'}
else if (minutos == "31") {
   dm.src='tres.png'
   um.src='um.png'}
else if (minutos == "32") {
   dm.src='tres.png'
   um.src='dois.png'}   
else if (minutos == "33") {
   dm.src='tres.png'
   um.src='tres.png'}
else if (minutos == "34") {
   dm.src='tres.png'
   um.src='quatro.png'}
else if (minutos == "35") {
   dm.src='tres.png'
   um.src='cinco.png'}   
else if (minutos == "36") {
   dm.src='tres.png'
   um.src='seis.png'}
else if (minutos == "37") {
   dm.src='tres.png'
   um.src='sete.png'}
else if (minutos == "38") {
   dm.src='tres.png'
   um.src='oito.png'}   
else if (minutos == "39") {
   dm.src='tres.png'
   um.src='nove.png'}   
else if (minutos == "40") {
   dm.src='quatro.png'
   um.src='zero.png'}
else if (minutos == "41") {
   dm.src='quatro.png'
   um.src='um.png'}
else if (minutos == "42") {
   dm.src='quatro.png'
   um.src='dois.png'}
else if (minutos == "43") {
   dm.src='quatro.png'
   um.src='tres.png'}
else if (minutos == "44") {
   dm.src='quatro.png'
   um.src='quatro.png'}
else if (minutos == "45") {
   dm.src='quatro.png'
   um.src='cinco.png'}
else if (minutos == "46") {
   dm.src='quatro.png'
   um.src='seis.png'}
else if (minutos == "47") {
   dm.src='quatro.png'
   um.src='sete.png'}
   else if (minutos == "48") {
   dm.src='quatro.png'
   um.src='oito.png'}
else if (minutos == "49") {
   dm.src='quatro.png'
   um.src='nove.png'}
else if (minutos == "50") {
   dm.src='cinco.png'
   um.src='zero.png'}
else if (minutos == "51") {
   dm.src='cinco.png'
   um.src='um.png'}
else if (minutos == "52") {
   dm.src='cinco.png'
   um.src='dois.png'}
else if (minutos == "53") {
   dm.src='cinco.png'
   um.src='tres.png'}
else if (minutos == "54") {
   dm.src='cinco.png'
   um.src='quatro.png'}
else if (minutos == "55") {
   dm.src='cinco.png'
   um.src='cinco.png'}
else if (minutos == "56") {
   dm.src='cinco.png'
   um.src='seis.png'}
else if (minutos == "57") {
   dm.src='cinco.png'
   um.src='sete.png'}
else if (minutos == "58") {
   dm.src='cinco.png'
   um.src='oito.png'}
else if (minutos == "59") {
   dm.src='cinco.png'
   um.src='nove.png'}

}//fim dos minutos

/*segundos*/ {
    if (segundos == "00") { 
    ds.src='zero.png'
    us.src='zero.png'}
else if (segundos == "01") {
    ds.src='zero.png'
    us.src='um.png' }
else if (segundos == "02")  {
   ds.src='zero.png'
   us.src='dois.png' }
else if (segundos == "03")  {
   ds.src='zero.png'
   us.src='tres.png' }
else if (segundos == "04")  {
   ds.src='zero.png'
   us.src='quatro.png' }
else if (segundos == "05")  {
   ds.src='zero.png'
   us.src='cinco.png' }
else if (segundos == "06")  {
   ds.src='zero.png'
   us.src='seis.png' }
else if (segundos == "07")  {
   ds.src='zero.png'
   us.src='sete.png' }
else if (segundos == "08") {
   ds.src='zero.png'
   us.src='oito.png' }
else if (segundos == "09") {
   ds.src='zero.png'
   us.src='nove.png' }
else if (segundos == "10") {
   ds.src='um.png'
   us.src='zero.png' }
else if (segundos == "11") {
   ds.src='um.png'
   us.src='um.png' }
else if (segundos == "12") {
   ds.src='um.png'
   us.src='dois.png' }
else if (segundos == "13") {
   ds.src='um.png'
   us.src='tres.png' }
else if (segundos == "14") {
   ds.src='um.png'
   us.src='quatro.png' }
else if (segundos == "15") {
   ds.src='um.png'
   us.src='cinco.png' }
else if (segundos == "16") {
   ds.src='um.png'
   us.src='seis.png' }
else if (segundos == "17") {
   ds.src='um.png'
   us.src='sete.png' }
else if (segundos == "18") {
   ds.src='um.png'
   us.src='oito.png' }
else if (segundos == "19") {
   ds.src='um.png'
   us.src='nove.png' }
else if (segundos == "20") {
   ds.src='dois.png'
   us.src='zero.png' }
else if (segundos == "21") {
   ds.src='dois.png'
   us.src='um.png' }
else if (segundos == "22") {
   ds.src='dois.png'
   us.src='dois.png' }
else if (segundos == "23") {
   ds.src='dois.png'
   us.src='tres.png' }
else if (segundos == "24") {
   ds.src='dois.png'
   us.src='quatro.png'}
else if (segundos == "25") {
   ds.src='dois.png'
   us.src='cinco.png'}
else if (segundos == "26") {
   ds.src='dois.png'
   us.src='seis.png'}
else if (segundos == "27") {
   ds.src='dois.png'
   us.src='sete.png' }
else if (segundos == "28") {
   ds.src='dois.png'
   us.src='oito.png'}
else if (segundos == "29") {
   ds.src='dois.png'
   us.src='nove.png'}
else if (segundos == "30") {
   ds.src='tres.png'
   us.src='zero.png'}
else if (segundos == "31") {
   ds.src='tres.png'
   us.src='um.png'}
else if (segundos == "32") {
   ds.src='tres.png'
   us.src='dois.png'}   
else if (segundos == "33") {
   ds.src='tres.png'
   us.src='tres.png'}
else if (segundos == "34") {
   ds.src='tres.png'
   us.src='quatro.png'}
else if (segundos == "35") {
   ds.src='tres.png'
   us.src='cinco.png'}   
else if (segundos == "36") {
   ds.src='tres.png'
   us.src='seis.png'}
else if (segundos == "37") {
   ds.src='tres.png'
   us.src='sete.png'}
else if (segundos == "38") {
   ds.src='tres.png'
   us.src='oito.png'}   
else if (segundos == "39") {
   ds.src='tres.png'
   us.src='nove.png'}   
else if (segundos == "40") {
   ds.src='quatro.png'
   us.src='zero.png'}
else if (segundos == "41") {
   ds.src='quatro.png'
   us.src='um.png'}
else if (segundos == "42") {
   ds.src='quatro.png'
   us.src='dois.png'}
else if (segundos == "43") {
   ds.src='quatro.png'
   us.src='tres.png'}
else if (segundos == "44") {
   ds.src='quatro.png'
   us.src='quatro.png'}
else if (segundos == "45") {
   ds.src='quatro.png'
   us.src='cinco.png'}
else if (segundos == "46") {
   ds.src='quatro.png'
   us.src='seis.png'}
else if (segundos == "47") {
   ds.src='quatro.png'
   us.src='sete.png'}
else if (segundos == "48") {
   ds.src='quatro.png'
   us.src='oito.png'}
else if (segundos == "49") {
   ds.src='quatro.png'
   us.src='nove.png'}
else if (segundos == "50") {
   ds.src='cinco.png'
   us.src='zero.png'}
else if (segundos == "51") {
   ds.src='cinco.png'
   us.src='um.png'}
else if (segundos == "52") {
   ds.src='cinco.png'
   us.src='dois.png'}
else if (segundos == "53") {
   ds.src='cinco.png'
   us.src='tres.png'}
else if (segundos == "54") {
   ds.src='cinco.png'
   us.src='quatro.png'}
else if (segundos == "55") {
   ds.src='cinco.png'
   us.src='cinco.png'}
else if (segundos == "56") {
   ds.src='cinco.png'
   us.src='seis.png'}
else if (segundos == "57") {
   ds.src='cinco.png'
   us.src='sete.png'}
else if (segundos == "58") {
   ds.src='cinco.png'
   us.src='oito.png'}
else if (segundos == "59") {
   ds.src='cinco.png'
   us.src='nove.png'}

}//fim dos minutos 


}//fim da função relogio
