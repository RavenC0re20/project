let point;
let nusno = [];
let ntuno = [];
function calculate(){
let first_H2_grade = Number(document.getElementById("H21").value);
let second_H2_grade = Number(document.getElementById("H22").value);
let third_H2_grade = Number(document.getElementById("H23").value);
let H1_grade = Number(document.getElementById("H1").value);
let PW_grade = Number(document.getElementById("PW").value);
let GP_grade = Number(document.getElementById("GP").value);
let MT_grade = Number(document.getElementById("MT").value);
let rank_point1 = first_H2_grade + second_H2_grade + third_H2_grade + H1_grade + PW_grade + GP_grade;
let rank_point2 = (rank_point1 + MT_grade) / 100 * 90;

if (rank_point1 > rank_point2){
    point = rank_point1;
}
else{
    point = rank_point2.toFixed(2);
}
//let s = rank_point.toString();
document.getElementById("point").innerHTML = "You have obtained a University Admission Score of : <strong>"+ point +"</strong> based on your results, here are our recommendations"

}
let lower = [];
let middle = [];
//let higherSorted = [nus8585,nus8385,nus8185,nus8085,nus7885,nus7685,nus7585,nus7385,nus7285,nus7085,nus6685,nus7283,nus7083,nus6783,nus6878,nus7377,nus6676];


let nus1 = {min:85,max:85,name:"Law*",link:"https://law.nus.edu.sg/"};
let nus2 = {min:85,max:85,name:"Medicine*",link:"https://medicine.nus.edu.sg/"};
let nus3 = {min:66.25,max:85,name:"Nursing*",link:"https://medicine.nus.edu.sg/nursing/"};
let nus4 = {min:85,max:85,name:"Dentistry*",link:"https://www.dentistry.nus.edu.sg/"};
let nus5 = {min:70,max:85,name:"Architecture*",link:"https://www.sde.nus.edu.sg/arch/"};
let nus6 = {min:73.75,max:85,name:"Industrial Design*",link:"https://www.sde.nus.edu.sg/did/"};
let nus7 = {min:70,max:83.75,name:"Landscape Architecture*",link:"https://www.sde.nus.edu.sg/arch/programmes/bachelor-of-landscape-architecture/"};
let nus8 = {min:68.75,max:78.75,name:"Project & Facilities Management",link:"https://www.nus.edu.sg/nusbulletin/school-of-design-and-environment/undergraduate-education/degree-requirements/b-sc-project-facilities-management-hons-programme/"};
let nus9 = {min:66.25,max:76.25,name:"Real Estate",link:"https://www.sde.nus.edu.sg/rst/"};
let nus10 = {min:75,max:85,name:"Biomedical Engineering",link:"https://www.eng.nus.edu.sg/bme/"};
let nus11 = {min:76.25,max:85,name:"Chemical Engineering",link:"https://www.eng.nus.edu.sg/chbe/"};
let nus12 = {min:67.5,max:83.75,name:"Civil Engineering",link:"https://www.eng.nus.edu.sg/cee/"};
let nus13 = {min:73.75,max:85,name:"Electrical Engineering",link:"https://www.eng.nus.edu.sg/ece/"};
let nus14 = {min:73.75,max:85,name:"Engineering Science",link:"https://www.eng.nus.edu.sg/esp/"};
let nus15 = {min:72.5,max:85,name:"Environmental Engineering",link:"https://www.eng.nus.edu.sg/cee/undergraduate/beng-environmental/"};
let nus16 = {min:72.5,max:83.75,name:"Industrial & Systems Engineering",link:"https://www.eng.nus.edu.sg/isem/"};
let nus17 = {min:72.5,max:85,name:"Materials Science & Engineering",link:"https://www.eng.nus.edu.sg/mse/"};
let nus18 = {min:73.75,max:85,name:"Mechanical Engineering",link:"https://www.eng.nus.edu.sg/me/"};
let nus19 = {min:78.75,max:85,name:"Mechanical Engineering (Aeronautical)",link:"https://www.eng.nus.edu.sg/me/"};
let nus20 = {min:85,max:85,name:"Business Analytics",link:"https://www.comp.nus.edu.sg/programmes/ug/ba/"};
let nus21 = {min:85,max:85,name:"Computer Science Courses",link:"https://www.comp.nus.edu.sg/programmes/ug/cs/"};
let nus22 = {min:85,max:85,name:"Information Security",link:"https://www.comp.nus.edu.sg/programmes/ug/isc/"};
let nus23 = {min:85,max:85,name:"Information Systems",link:"https://www.comp.nus.edu.sg/programmes/ug/is/"};
let nus24 = {min:83.75,max:85,name:"Computer Engineering",link:"https://www.comp.nus.edu.sg/programmes/ug/ceg/"};
let nus25 = {min:82.5,max:85,name:"Data Science and Analytics",link:"https://www.stat.nus.edu.sg/prospective-students/undergraduate-programme/data-science-and-analytics/"};
let nus26 = {min:85,max:85,name:"Pharmaceutical Science",link:""};
let nus27 = {min:83.75,max:85,name:"Pharmacy",link:"https://pharmacy.nus.edu.sg/study/undergraduate/bachelor-of-science-pharmaceutical-science/"};
let nus28 = {min:82.5,max:85,name:"Science",link:"https://www.science.nus.edu.sg/"};
let nus29 = {min:85,max:85,name:"Science (Food Science & Technology)",link:""};
let nus30 = {min:80,max:85,name:"Business Administration",link:"https://www.fst.nus.edu.sg/"};
let nus31 = {min:81.25,max:85,name:"Business Administration (Accountancy)",link:"https://bba.nus.edu.sg/academic-programmes/bba-accountancy-programme/introduction/"};
let nus32 = {min:85,max:85,name:"Arts & Social Sciences (Philosophy, Politics & Economics)*",link:""};
let nus33 = {min:76.25,max:85,name:"Arts & Social Sciences",link:"https://www.nus.edu.sg/oam/undergraduate-programmes/programmes-introduction/ppe"};
let nus34 = {min:73.75,max:80,name:"Arts & Social Sciences (MT related)",link:"https://fass.nus.edu.sg/"};
let nus35 = {min:82.5,max:85,name:"Environmental Studies",link:"https://envstudies.nus.edu.sg/"};
let nus = [nus1,nus2,nus3,nus4,nus5,nus6,nus7,nus8,nus9,nus10,nus11,nus12,nus13,nus14,nus15,nus16,nus17,nus18,nus19,
nus20,nus21,nus22,nus23,nus24,nus25,nus26,nus27,nus28,nus29,
nus30,nus31,nus32,nus33,nus34,nus35];

let ntu = [];
ntu[0] = {min:85,max:85,name:"Medicine*",link:"https://law.nus.edu.sg/"};
ntu[1] = {min:85,max:85,name:"Renaissance Engineering*",link:"https://law.nus.edu.sg/"};
ntu[2] = {min:85,max:85,name:"Data Science & Artificial Intelligence",link:"https://law.nus.edu.sg/"};
ntu[3] = {min:85,max:85,name:"Environmental Earth Systems Science*",link:"https://law.nus.edu.sg/"};
ntu[4] = {min:82.5,max:85,name:"Science Double Major Programmes*",link:"https://law.nus.edu.sg/"};
ntu[5] = {min:82.5,max:85,name:"Biological Sciences*",link:"https://law.nus.edu.sg/"};
ntu[6] = {min:82.5,max:85,name:"HASS Double Major Programme*",link:"https://law.nus.edu.sg/"};
ntu[7] = {min:81.25,max:85,name:"Computer Science",link:"https://law.nus.edu.sg/"};
ntu[8] = {min:80,max:85,name:"Aerospace Engineering",link:"https://law.nus.edu.sg/"};
ntu[9] = {min:80,max:85,name:"Communication Studies*",link:"https://law.nus.edu.sg/"};
ntu[10] = {min:78.75,max:85,name:"Computer Engineering",link:"https://law.nus.edu.sg/"};
ntu[11] = {min:78.75,max:85,name:"Science (Education)",link:"https://law.nus.edu.sg/"};
ntu[12] = {min:77.5,max:85,name:"Psychology",link:"https://law.nus.edu.sg/"};
ntu[13] = {min:76.25,max:85,name:"Arts (Education)	",link:"https://law.nus.edu.sg/"};
ntu[14] = {min:75,max:85,name:"Public Policy & Global Affairs	",link:"https://law.nus.edu.sg/"};
ntu[15] = {min:73.75,max:85,name:"Chemical & Biomolecular Engineering	",link:"https://law.nus.edu.sg/"};
ntu[16] = {min:73.75,max:85,name:"Chemical & Biological Chemistry	",link:"https://law.nus.edu.sg/"};
ntu[17] = {min:72.5,max:85,name:"Accountancy*",link:"https://law.nus.edu.sg/"};
ntu[18] = {min:72.5,max:85,name:"Sociology",link:"https://law.nus.edu.sg/"};
ntu[19] = {min:71.25,max:85,name:"Bioengineering",link:"https://law.nus.edu.sg/"};
ntu[20] = {min:71.25,max:85,name:"Mathematical Sciences",link:"https://law.nus.edu.sg/"};
ntu[21] = {min:71.25,max:85,name:"Business*",link:"https://law.nus.edu.sg/"};
ntu[22] = {min:71.25,max:85,name:"Economics",link:"https://law.nus.edu.sg/"};
ntu[23] = {min:71.25,max:85,name:"Linguistics & Multilingual Studies*",link:"https://law.nus.edu.sg/"};
ntu[24] = {min:70,max:85,name:"Sport Science & Management",link:"https://law.nus.edu.sg/"};
ntu[25] = {min:68.75,max:83.75,name:"Information Engineering & Media",link:"https://law.nus.edu.sg/"};
ntu[26] = {min:68.75,max:85,name:"Physics/ Applied Physics",link:"https://law.nus.edu.sg/"};
ntu[27] = {min:68.75,max:85,name:"English*",link:"https://law.nus.edu.sg/"};
ntu[28] = {min:68.75,max:81.25,name:"Philosophy*",link:"https://law.nus.edu.sg/"};
ntu[29] = {min:67.5,max:85,name:"Environmental Engineering",link:"https://law.nus.edu.sg/"};
ntu[30] = {min:67.5,max:85,name:"Art, Design & Media*^",link:"https://law.nus.edu.sg/"};
ntu[31] = {min:67.5,max:83.75,name:"Chinese",link:"https://law.nus.edu.sg/"};
ntu[32] = {min:67.5,max:85,name:"History*",link:"https://law.nus.edu.sg/"};
ntu[33] = {min:66.25,max:85,name:"Mechanical Engineering",link:"https://law.nus.edu.sg/"};
ntu[34] = {min:65,max:78.75,name:"Maritime Studies",link:"https://law.nus.edu.sg/"};
ntu[35] = {min:65,max:85,name:"Materials Engineering",link:"https://law.nus.edu.sg/"};
ntu[36] = {min:63.75,max:76.25,name:"Engineering",link:"https://law.nus.edu.sg/"};
ntu[37] = {min:62.5,max:83.75,name:"Civil Engineering",link:"https://law.nus.edu.sg/"};
ntu[38] = {min:62.5,max:85,name:"Electrical & Electronic Engineering",link:"https://law.nus.edu.sg/"};






function print_courses(){
    //document.getElementById("higher").innerHTML = nus1;
    let table = document.getElementById("table1");

    //deletes all rows except header
    let x = 0;
    x = table.rows.length;
    for (let i = 0; i < x - 1; i++){
         table.deleteRow(1); //needs to be 1 as row index changes
    }

    let row;
    let cell1;
    let cell2;
    let cell3;

    let higher = [];
    let higherlink = [];
    middle = [];
    let middlelink = [];
    lower = [];
    let lowerlink = [];

    for (let i = 0; i < nus.length; i++){
        //console.log("My object: ",nus[i].max);
        if (point > Number(nus[i].max)){
            higher.push(" " + nus[i].name + " (" +nus[i].min+")");
            higherlink.push(nus[i].link);
        }
        if (point >= Number(nus[i]["min"]) && point <= Number(nus[i]["max"])){
            middle.push(" " + nus[i]["name"] + " (" +nus[i].min+")");
            middlelink.push(nus[i].link);
        }
        if (point >= Number(nus[i]["min"]) - 2.5 && point < Number(nus[i]["min"])){
            lower.push(" " + nus[i]["name"] + " (" +nus[i].min+")");
            lowerlink.push(nus[i].link);
        }
    }

    let compare = higher.length;
    if (compare < middle.length){
        compare = middle.length
    }
    if (compare < lower.length){
        compare = lower.length
    }

    for (let i = 0; i < compare; i++){
        row = table.insertRow(i + 1);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);
        if (higher.length > i){
            cell1.innerHTML = "<a href=" +higherlink[i]+" target='_blank'>" + higher[i] +"</a>";
        }
        else{
            cell1.innerHTML = " ";
        }
        if (middle.length > i){
            cell2.innerHTML = "<a href=" +middlelink[i]+" target='_blank'>" + middle[i] +"</a>";
        }
        else{
            cell2.innerHTML = " ";
        }
        if (lower.length > i){
            cell3.innerHTML = "<a href=" +lowerlink[i]+" target='_blank'>" + lower[i] +"</a>";
        }
        else{
            cell3.innerHTML = " ";
        }
    }

    nusno = [];
    for (let i = 0; i < nus.length; i++){
        if (point < Number(nus[i]["min"]) - 2.5){
            nusno.push("<a href=" +nus[i]["link"]+" target='_blank'> " + nus[i]["name"] + " (" +nus[i].min+")" + "</a>");
        }
    }
    document.getElementById("nusno0").innerHTML = "Below 10th Percentile by more than one H2 grade";
    hide_text1();

    //table for ntu
    higher = [];
    higherlink = [];
    middle = [];
    middlelink = [];
    lower = [];
    lowerlink = [];
    for (let i = 0; i < ntu.length; i++){
        //console.log("My object: ",nus[i].max);
        if (point > Number(ntu[i].max)){
            higher.push(" " + ntu[i].name + " (" +ntu[i].min+")");
            higherlink.push(ntu[i].link);
        }
        if (point >= Number(ntu[i]["min"]) && point <= Number(ntu[i]["max"])){
            middle.push(" " + ntu[i]["name"] + " (" +ntu[i].min+")");
            middlelink.push(ntu[i].link);
        }
        if (point >= Number(ntu[i]["min"]) - 2.5 && point < Number(ntu[i]["min"])){
            lower.push(" " + ntu[i]["name"] + " (" +ntu[i].min+")");
            lowerlink.push(ntu[i].link);
        }
    }
    compare = higher.length;
    if (compare < middle.length){
        compare = middle.length
    }
    if (compare < lower.length){
        compare = lower.length
    }
    table = document.getElementById("table2");
    x = table.rows.length;
    for (let i = 0; i < x - 1; i++){
         table.deleteRow(1); //needs to be 1 as row index changes
    }
    for (let i = 0; i < compare; i++){
        row = table.insertRow(i + 1);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);
        if (higher.length > i){
            cell1.innerHTML = "<a href=" +higherlink[i]+" target='_blank'>" + higher[i] +"</a>";
        }
        else{
            cell1.innerHTML = " ";
        }
        if (middle.length > i){
            cell2.innerHTML = "<a href=" +middlelink[i]+" target='_blank'>" + middle[i] +"</a>";
        }
        else{
            cell2.innerHTML = " ";
        }
        if (lower.length > i){
            cell3.innerHTML = "<a href=" +lowerlink[i]+"target='_blank'>" + lower[i] +"</a>";
        }
        else{
            cell3.innerHTML = " ";
        }
    }
    ntuno = [];
    for (let i = 0; i < ntu.length; i++){
        if (point < Number(ntu[i]["min"]) - 2.5){
            ntuno.push("<a href=" +ntu[i]["link"]+" target='_blank'> " + ntu[i]["name"] + " (" +ntu[i].min+")" + "</a>");
        }
    }
    document.getElementById("ntuno0").innerHTML = "Below 10th Percentile by more than one H2 grade";
    hide_text2();

}

function hide(){
    var x = document.getElementById("table1");
    var y = document.getElementById("table2");
    x.style.display = "none";
    y.style.display = "none";
}

function showtable(){
    var x = document.getElementById("table1");
    var y = document.getElementById("table2");
    x.style.display = "block";
    y.style.display = "block";
}

function show_text1(){
    document.getElementById("nusno").innerHTML = "<p id='p1' style='color:purple;'>" +nusno+ " <strong onclick='hide_text1()'>(click to hide)</strong></p>";

}
function hide_text1(){
    document.getElementById("nusno").innerHTML = "<p onclick='show_text1()' id='p1'> click to show courses</p>";
}
function show_text2(){
    document.getElementById("ntuno").innerHTML = "<p id='p2' style='color:purple;'>" +ntuno+ " <strong onclick='hide_text2()'>(click to hide)</strong></p>";

}
function hide_text2(){
    document.getElementById("ntuno").innerHTML = "<p onclick='show_text2()' id='p2'> click to show courses</p>";
}

function call(){
    calculate();
    print_courses();
    showtable();
}
