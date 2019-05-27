
let qv01 = document.getElementById('QV01');
let qv02 = document.getElementById('QV02');

console.log(document.readyState);

// have to wait some time to do anything with the dom, innertext returns an empty string until the document has loaded
// might not need to be 10 seconds.. but lots of things impact the qlik objects from rendering on the page

hideDiv = () => {
setTimeout(function closeDiv(){
document.getElementById("infodiv").style.display=" none";
}, 10000);
};

hideDiv();

addKPIsHeader = () => {
setTimeout(function(){
let KPIsHeader = document.createElement('div');
document.body.appendChild(KPIsHeader);
KPIsHeader.innerText = "Answer";
KPIsHeader.setAttribute("class", "text-center col-xs-12 col-sm-12 col-md-12 col-lg-12 kpiheader");
}, 10000)
};

addKPIsHeader();

addKPIs = () => {
  setTimeout(function(){ 
  console.log(document.readyState);
  qv01 = Number(qv01.innerText);
  qv02 = Number(qv02.innerText);
  // add to page
  let addKPIs = document.createElement('div');
  // calculate the answer
  addKPIs.innerText = qv01 + qv02;
  document.body.appendChild(addKPIs);
  // give it an ID or class so you can style it
  addKPIs.setAttribute("ID","answer");
  addKPIs.setAttribute("class", "text-center col-xs-12 col-sm-12 col-md-12 col-lg-12 kpiheader");
  }, 10000);
 };
 
addKPIs();