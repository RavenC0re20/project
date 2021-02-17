let point;
let nusno = [];
let ntuno = [];
let smuno = [];
let nusNotEli = [];
let ntuNotEli = [];
let subjects = [];
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

let s1 = document.getElementById("S1").value;
let s2 = document.getElementById("S2").value;
let s3 = document.getElementById("S3").value;
let s4 = document.getElementById("S4").value;
subjects = [s1,s2,s3,s4];


}
let higher = [];
let higherlink = [];
let lower = [];
let lowerlink = [];
let middle = [];
let middlelink = [];

let chemmathphy = ["h1chemistry","h2chemistry","h1math","h2math","h1physics","h2physics","h2furthermath"];
let h2math = ["h2math","h2furthermath"];
let h2phychem = ["h2physics","h2chemistry"];
let h1math = ["h2math","h2furthermath", "h1math"];
let omath = ["h2math","h1math","h2furthermath","omath"]
let h2pcbc = ["h2physics","h2chemistry","h2biology","h2computing"];
let physics = ["h1physics","h2physics","ophysics"];

let nus1 = {min:85,max:85,name:"Law*",link:"https://law.nus.edu.sg/",bool:true,oneof1:[],oneof2:[]};
let nus2 = {min:85,max:85,name:"Medicine*",link:"https://medicine.nus.edu.sg/",bool:true,compul:"h2chemistry",oneof1:["h2physics","h2biology"],oneof2:[]}; //to test
let nus3 = {min:66.25,max:85,name:"Nursing*",link:"https://medicine.nus.edu.sg/nursing/",bool:true,oneof1:[],oneof2:h2phychem};
let nus4 = {min:85,max:85,name:"Dentistry*",link:"https://www.dentistry.nus.edu.sg/",bool:true,compul:"h2chemistry",oneof1:[],oneof2:[]};
let nus5 = {min:70,max:85,name:"Architecture*",link:"https://www.sde.nus.edu.sg/arch/",bool:true,oneof1:chemmathphy,oneof2:[]};
let nus6 = {min:73.75,max:85,name:"Industrial Design*",link:"https://www.sde.nus.edu.sg/did/",bool:true,oneof1:["h1chemistry","h2chemistry","h1math","h2math","h1physics","h2physics","h2furthermath","h1econs","h2econs","h1art","h2art"],oneof2:[]};
let nus7 = {min:70,max:83.75,name:"Landscape Architecture*",link:"https://www.sde.nus.edu.sg/arch/programmes/bachelor-of-landscape-architecture/",bool:true,oneof1:chemmathphy,oneof2:[]};
let nus8 = {min:68.75,max:78.75,name:"Project & Facilities Management",link:"https://www.sde.nus.edu.sg/bdg/",bool:true,oneof1:chemmathphy,oneof2:[]};
let nus9 = {min:66.25,max:76.25,name:"Real Estate",link:"https://www.sde.nus.edu.sg/rst/",bool:true,oneof1:chemmathphy,oneof2:[]};
let nus10 = {min:75,max:85,name:"Biomedical Engineering",link:"https://www.eng.nus.edu.sg/bme/",bool:true,oneof1:h2math,oneof2:["h2physics","h2biology"]};
let nus11 = {min:76.25,max:85,name:"Chemical Engineering",link:"https://www.eng.nus.edu.sg/chbe/",bool:true,compul:"h2chemistry",oneof1:h2math,oneof2:["h2physics"]};
let nus12 = {min:67.5,max:83.75,name:"Civil Engineering",link:"https://www.eng.nus.edu.sg/cee/",bool:true,oneof1:h2math,oneof2:h2phychem};
let nus13 = {min:73.75,max:85,name:"Electrical Engineering",link:"https://www.eng.nus.edu.sg/ece/",bool:true,oneof1:h2math,oneof2:h2phychem};
let nus14 = {min:73.75,max:85,name:"Engineering Science",link:"https://www.eng.nus.edu.sg/esp/",bool:true,oneof1:h2math,oneof2:["h2physics"]};
let nus15 = {min:72.5,max:85,name:"Environmental Engineering",link:"https://www.eng.nus.edu.sg/cee/undergraduate/beng-environmental/",bool:true,compul:"h2chemistry",oneof1:h2math,oneof2:["h2physics"]};
let nus16 = {min:72.5,max:83.75,name:"Industrial & Systems Engineering",link:"https://www.eng.nus.edu.sg/isem/",bool:true,oneof1:h2math,oneof2:h2phychem};
let nus17 = {min:72.5,max:85,name:"Materials Science & Engineering",link:"https://www.eng.nus.edu.sg/mse/",bool:true,oneof1:h2math,oneof2:h2phychem};
let nus18 = {min:73.75,max:85,name:"Mechanical Engineering",link:"https://www.eng.nus.edu.sg/me/",bool:true,oneof1:h2math,oneof2:h2phychem};
let nus19 = {min:78.75,max:85,name:"Mechanical Engineering (Aeronautical)",link:"https://www.eng.nus.edu.sg/me/",bool:true,oneof1:h2math,oneof2:h2phychem};
let nus20 = {min:85,max:85,name:"Business Analytics",link:"https://www.comp.nus.edu.sg/programmes/ug/ba/",bool:true,oneof1:h2math,oneof2:[]};
let nus21 = {min:85,max:85,name:"Computer Science Courses",link:"https://www.comp.nus.edu.sg/programmes/ug/cs/",bool:true,oneof1:["h2math","h2furthermath","h2computing"],oneof2:[]};
let nus22 = {min:85,max:85,name:"Information Security",link:"https://www.comp.nus.edu.sg/programmes/ug/isc/",bool:true,oneof1:["h2math","h2furthermath","h2computing"],oneof2:[]};
let nus23 = {min:85,max:85,name:"Information Systems",link:"https://www.comp.nus.edu.sg/programmes/ug/is/",bool:true,oneof1:["h2math","h2furthermath","h2computing"],oneof2:[]};
let nus24 = {min:83.75,max:85,name:"Computer Engineering",link:"https://www.comp.nus.edu.sg/programmes/ug/ceg/",bool:true,oneof1:h2math,oneof2:h2phychem};
let nus25 = {min:82.5,max:85,name:"Data Science and Analytics",link:"https://www.stat.nus.edu.sg/prospective-students/undergraduate-programme/data-science-and-analytics/",bool:true,oneof1:h2math,oneof2:["h2biology","h2chemistry","h2physics","h2computing"]};
let nus26 = {min:85,max:85,name:"Pharmaceutical Science",link:"https://pharmacy.nus.edu.sg/study/undergraduate/bachelor-of-science-pharmaceutical-science/",bool:true,oneof1:["h2chemistry"],oneof2:["h2biology","h2physics","h2furthermath","h2math"]};
let nus27 = {min:83.75,max:85,name:"Pharmacy",link:"https://pharmacy.nus.edu.sg/",bool:true,oneof1:["h2chemistry"],oneof2:["h2biology","h2physics","h2furthermath","h2math"]};
let nus28 = {min:82.5,max:85,name:"Science",link:"https://www.science.nus.edu.sg/",bool:true,oneof1:["h2biology","h2chemistry","h2physics","h2computing","h2math","h2furthermath"],oneof2:[]}; //need 2
let nus29 = {min:85,max:85,name:"Science (Food Science & Technology)",link:"https://www.fst.nus.edu.sg/",bool:true,oneof1:["h2biology","h2chemistry","h2physics","h2computing","h2math","h2furthermath"],oneof2:[]}; //need 2
let nus30 = {min:80,max:85,name:"Business Administration",link:"https://bschool.nus.edu.sg/prospective-students/undergraduate/",bool:true,oneof1:h2math,oneof2:[]};
let nus31 = {min:81.25,max:85,name:"Business Administration (Accountancy)",link:"https://bba.nus.edu.sg/academic-programmes/bba-accountancy-programme/introduction/",bool:true,oneof1:h2math,oneof2:[]};
let nus32 = {min:85,max:85,name:"Arts & Social Sciences (Philosophy, Politics & Economics)*",link:"",bool:true,oneof1:[],oneof2:[]};
let nus33 = {min:76.25,max:85,name:"Arts & Social Sciences",link:"https://www.nus.edu.sg/oam/undergraduate-programmes/programmes-introduction/ppe",bool:true,oneof1:[],oneof2:[]};
let nus34 = {min:73.75,max:80,name:"Arts & Social Sciences (MT related)",link:"https://fass.nus.edu.sg/",bool:true,oneof1:[],oneof2:[]};
let nus35 = {min:82.5,max:85,name:"Environmental Studies",link:"https://envstudies.nus.edu.sg/",bool:true,oneof1:["h1math","h2math","h2furthermath"],oneof2:["h2biology","h2chemistry"]};
let nus = [nus1,nus2,nus3,nus4,nus5,nus6,nus7,nus8,nus9,nus10,nus11,nus12,nus13,nus14,nus15,nus16,nus17,nus18,nus19,
nus20,nus21,nus22,nus23,nus24,nus25,nus26,nus27,nus28,nus29,
nus30,nus31,nus32,nus33,nus34,nus35];

let ntu = [];
ntu[0] = {min:85,max:85,name:"Medicine*",link:"http://www.lkcmedicine.ntu.edu.sg/Pages/Home.aspx",bool:true,oneof1:["h2physics","h2biology"],oneof2:["h2chemistry"]};
ntu[1] = {min:85,max:85,name:"Renaissance Engineering*",link:"https://www.ntu.edu.sg/rep/Pages/default.aspx",bool:true,oneof1:h2math,oneof2:h2pcbc,oneof3:physics};
ntu[2] = {min:85,max:85,name:"Data Science & Artificial Intelligence",link:"https://scse.ntu.edu.sg/Programmes/CurrentStudents/Undergraduate/Pages/DSAI.aspx",bool:true,oneof1:h2pcbc,oneof2:h2math};
ntu[3] = {min:85,max:85,name:"Environmental Earth Systems Science*",link:"http://ase.ntu.edu.sg/Programmes/Undergraduate/Pages/Bachelor-of-Science-(BSc)-in-Environmental-Earth-Systems-Science.aspx",bool:true,oneof1:h1math,oneof2:["h2physics","h2chemistry","h2biology","h2computing","h2econs"]};
ntu[4] = {min:82.5,max:85,name:"Science Double Major Programmes*",link:"https://cos.ntu.edu.sg/Programmes/Undergraduate-Programmes/Pages/Undergraduate-Programmes.aspx",bool:true,oneof1:h2math,oneof2:[]}; //depends on major
ntu[5] = {min:82.5,max:85,name:"Biological Sciences*",link:"http://sbs.ntu.edu.sg/Pages/home.aspx",bool:true,oneof1:h1math,oneof2:["h2physics","h2biology","h2chemistry"]};
ntu[6] = {min:82.5,max:85,name:"HASS Double Major Programme*",link:"https://cohass.ntu.edu.sg/Programmes/Undergraduate/Double%20Major/Pages/Home.aspx#:~:text=The%20Double%20Major%20Programme%20will,careers%20in%20the%20rapidly%20changing",bool:true,oneof1:[],oneof2:[]}; //depends on major
ntu[7] = {min:81.25,max:85,name:"Computer Science",link:"http://scse.ntu.edu.sg/Programmes/CurrentStudents/Undergraduate/Pages/CS.aspx",bool:true,oneof1:h2math,oneof2:h2pcbc};
ntu[8] = {min:80,max:85,name:"Aerospace Engineering",link:"http://www.mae.ntu.edu.sg/Programmes/CurrentStudents/UG%28Full-Time%29/AE/Pages/default.aspx",bool:true,oneof1:h2math,oneof2:h2pcbc,oneof3:physics};
ntu[9] = {min:80,max:85,name:"Communication Studies*",link:"http://www.wkwsci.ntu.edu.sg/programmes/CurrentStudents/Undergraduate/Pages/Undergraduate.aspx",bool:true,oneof1:omath,oneof2:[]};
ntu[10] = {min:78.75,max:85,name:"Computer Engineering",link:"https://sce.ntu.edu.sg/Programmes/CurrentStudents/Undergraduate/Pages/CE.aspx",bool:true,oneof1:h2math,oneof2:h2pcbc,oneof:physics};
ntu[11] = {min:78.75,max:85,name:"Science (Education)",link:"https://www.nie.edu.sg/our-people/academic-groups/natural-sciences-and-science-education/programmes/bsc-education",bool:true,oneof1:omath,oneof2:[]};
ntu[12] = {min:77.5,max:85,name:"Psychology",link:"http://www.sss.ntu.edu.sg/Programmes/psychology/undergraduate/Pages/Home.aspx",bool:true,oneof1:h1math,oneof2:[]};
ntu[13] = {min:76.25,max:85,name:"Arts (Education)",link:"https://www.nie.edu.sg/teacher-education/undergraduate-programmes",bool:true,oneof1:omath,oneof2:[]};
ntu[14] = {min:75,max:85,name:"Public Policy & Global Affairs",link:"http://www.sss.ntu.edu.sg/Programmes/ppga/undergraduate/Pages/Bachelor-of-Arts-%28Hons%29-in-Public-Policy-and-Global-Affairs.aspx",bool:true,oneof1:[],oneof2:[]};
ntu[15] = {min:73.75,max:85,name:"Chemical & Biomolecular Engineering",link:"http://www.scbe.ntu.edu.sg/Programmes/ProspectiveStudents/Bachelor%20Of%20Chemical%20and%20Biomolecular%20Engineering/Pages/CBE_Programme.aspx",bool:true,oneof1:h2math,oneof2:h2pcbc};
ntu[16] = {min:73.75,max:85,name:"Chemical & Biological Chemistry",link:"https://spms.ntu.edu.sg/ChemistryandBiologicalChemistry/Pages/Home.aspx",bool:true,oneof1:["h2chemistry"],oneof2:["h2math","h2furthermath","h2physics"]};
ntu[17] = {min:72.5,max:85,name:"Accountancy*",link:"https://nbs.ntu.edu.sg/Programmes/Undergraduate/BachelorofAccountancy/Pages/Home.aspx",bool:true,oneof1:omath,oneof2:[]};
ntu[18] = {min:72.5,max:85,name:"Sociology",link:"http://www.sss.ntu.edu.sg/Programmes/sociology/Pages/Home.aspx",bool:true,oneof1:[],oneof2:[]};
ntu[19] = {min:71.25,max:85,name:"Bioengineering",link:"http://www.scbe.ntu.edu.sg/Programmes/ProspectiveStudents/Bachelor%20of%20Bioengineering/Pages/BIE%20Programme.aspx",bool:true,oneof1:h2math,oneof2:h2pcbc};
ntu[20] = {min:71.25,max:85,name:"Mathematical Sciences",link:"https://spms.ntu.edu.sg/MathematicalSciences/Pages/Home.aspx",bool:true,oneof1:h2math,oneof2:[]};
ntu[21] = {min:71.25,max:85,name:"Business*",link:"https://nbs.ntu.edu.sg/Programmes/Undergraduate/BachelorofBusiness/Pages/Home.aspx",bool:true,oneof1:omath,oneof2:[]};
ntu[22] = {min:71.25,max:85,name:"Economics",link:"http://www.sss.ntu.edu.sg/Programmes/econ/Pages/Home.aspx",bool:true,oneof1:h1math,oneof2:[]};
ntu[23] = {min:71.25,max:85,name:"Linguistics & Multilingual Studies*",link:"http://www.soh.ntu.edu.sg/Programmes/linguistics/Pages/Home.aspx",bool:true,oneof1:[],oneof2:[]};
ntu[24] = {min:70,max:85,name:"Sport Science & Management",link:"https://www.nie.edu.sg/our-people/academic-groups/physical-education-and-sports-science/programmes/sport-science-management-ssm",bool:true,oneof1:omath,oneof2:[]};
ntu[25] = {min:68.75,max:83.75,name:"Information Engineering & Media",link:"http://www.eee.ntu.edu.sg/programmes/ProspectiveStudents/UG/IEM/Pages/Home.aspx",bool:true,oneof1:h2math,oneof2:h2pcbc,oneof3:physics};
ntu[26] = {min:68.75,max:85,name:"Physics/ Applied Physics",link:"https://spms.ntu.edu.sg/PhysicsandAppliedPhysics/Pages/Home.aspx",bool:true,oneof1:["h2physics"],oneof2:h2math};
ntu[27] = {min:68.75,max:85,name:"English*",link:"http://www.soh.ntu.edu.sg/Programmes/english/Pages/Home.aspx",bool:true,oneof1:[],oneof2:[]};
ntu[28] = {min:68.75,max:81.25,name:"Philosophy*",link:"http://www.soh.ntu.edu.sg/Programmes/philosophy/Pages/Home.aspx",bool:true,oneof1:[],oneof2:[]};
ntu[29] = {min:67.5,max:85,name:"Environmental Engineering",link:"http://www.cee.ntu.edu.sg/Programmes/undergraduate/ENE/Pages/Home.aspx",bool:true,oneof1:h2math,oneof2:h2pcbc,oneof3:physics};
ntu[30] = {min:67.5,max:85,name:"Art, Design & Media*^",link:"http://www.adm.ntu.edu.sg/Pages/index.aspx",bool:true,oneof1:omath,oneof2:[]}
ntu[31] = {min:67.5,max:83.75,name:"Chinese",link:"http://www.soh.ntu.edu.sg/Programmes/chinese/en/Pages/Home.aspx",bool:true,oneof1:[],oneof2:[]}
ntu[32] = {min:67.5,max:85,name:"History*",link:"http://www.soh.ntu.edu.sg/Programmes/history/Pages/Home.aspx",bool:true,oneof1:[],oneof2:[]}
ntu[33] = {min:66.25,max:85,name:"Mechanical Engineering",link:"http://www.mae.ntu.edu.sg/Programmes/CurrentStudents/UG%28Full-Time%29/ME/Pages/default.aspx",bool:true,oneof1:h2math,oneof2:h2pcbc,oneof3:physics};
ntu[34] = {min:65,max:78.75,name:"Maritime Studies",link:"http://www.cee.ntu.edu.sg/Programmes/undergraduate/MS/Pages/Home.aspx",bool:true,oneof1:omath,oneof2:["h2physics","h2chemistry","h2biology","h1biology","h1chemistry","h1physics","ophysics","obiology","ochemistry"]};
ntu[35] = {min:65,max:85,name:"Materials Engineering",link:"http://www.mse.ntu.edu.sg/Pages/Home.aspx",bool:true,oneof1:h2math,oneof2:h2pcbc,oneof3:physics};
ntu[36] = {min:63.75,max:76.25,name:"Engineering",link:"https://coe.ntu.edu.sg/Pages/Home.aspx",bool:true,oneof1:h2math,oneof2:h2pcbc,oneof3:physics};
ntu[37] = {min:62.5,max:83.75,name:"Civil Engineering",link:"http://www.cee.ntu.edu.sg/Pages/Home.aspx",bool:true,oneof1:h2math,oneof2:h2pcbc,oneof3:physics};
ntu[38] = {min:62.5,max:85,name:"Electrical & Electronic Engineering",link:"http://www.eee.ntu.edu.sg/Pages/default.aspx",bool:true,oneof1:h2math,oneof2:h2pcbc,oneof3:physics};

let smu = [];
smu[0] = {min:85,max:85,name:"Law",link:"https://law.smu.edu.sg/"};
smu[1] = {min:80,max:85,name:"Computer Science",link:"https://scis.smu.edu.sg/bsc-computer-science"};
smu[2] = {min:80,max:85,name:"Computing & Law",link:"https://scis.smu.edu.sg/bsc-computing-law"};
smu[3] = {min:75,max:85,name:"Business Management",link:"https://admissions.smu.edu.sg/programmes/lee-kong-chian-school-business/bachelor-business-management"};
smu[4] = {min:73.75,max:85,name:"Information Systems Management",link:"https://scis.smu.edu.sg/"};
smu[5] = {min:73.75,max:85,name:"Social Sciences",link:"https://socsc.smu.edu.sg/"};
smu[6] = {min:72.5,max:85,name:"Accountancy",link:"https://accountancy.smu.edu.sg/"};
smu[7] = {min:70,max:85,name:"Economics",link:"https://economics.smu.edu.sg/"};



function print_courses(){

    //resets bool of all ntu nus
    for (let i = 0; i < nus.length; i++){
        nus[i].bool = true;
    }
    for (let i = 0; i < ntu.length; i++){
        ntu[i].bool = true;
    }



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

    nusNotEli = [];
    ntuNotEli = [];
    higher = [];
    higherlink = [];
    middle = [];
    middlelink = [];
    lower = [];
    lowerlink = [];
    nusno = [];
    for (let i = 0; i < nus.length; i++){
        //console.log("My object: ",nus[i].max);

        //checks eligibility for science course(edge case)
        if(i == 27 || i == 28){
            console.log(nus[i].name);
            let subjectHolder;
            if(nus[i].oneof1 !== undefined && nus[i].oneof1.length > 0){
                let counter1 = 0;
                for(let j = 0; j < nus[i].oneof1.length; j++){
                    let counter2 = 0;
                    for (let k = 0; k < 4; k++){
                        if(nus[i].oneof1[j] !== subjects[k]){
                            counter2++;
                        }
                        else{
                            subjectHolder = nus[i].oneof1[j]; //this is a match
                            break;
                        }
                    }
                    if(counter2 == 4){
                        counter1++;
                    }
                }
                console.log(subjectHolder);
                counter1 = 0;
                for(let j = 0; j < nus[i].oneof1.length; j++){
                    let counter2 = 0;
                    for (let k = 0; k < 4; k++){
                        if (subjectHolder === "h2math" || subjectHolder === "h2furthermath"){
                            if(nus[i].oneof1[j] !== subjects[k] || nus[i].oneof1[j] === "h2math" || nus[i].oneof1[j] === "h2furthermath"){
                                counter2++;
                            }
                            else{
                                break;
                            }
                        }
                        else{
                            if(nus[i].oneof1[j] !== subjects[k] || nus[i].oneof1[j] === subjectHolder){
                                counter2++;
                            }
                            else{
                                break;
                            }
                        }
                    }
                    if(counter2 == 4){
                        counter1++;
                    }
                }
                if(counter1 == nus[i].oneof1.length){
                    nus[i].bool = false;
                    nusNotEli.push("<a href=" +nus[i]["link"]+" target='_blank'> " + nus[i]["name"] + " (" +nus[i].min+")" + "</a>");
                }
            }
        }

        //checks eligibility
        if (nus[i].hasOwnProperty("compul")){
            let counter1 = 0;
            for(let j = 0; j < 4; j++){
                if(nus[i].compul !== subjects[j]){
                    counter1++;
                }
                else{
                    break;
                }
            }
            if(counter1 == 4){
                nus[i].bool = false;
                nusNotEli.push("<a href=" +nus[i]["link"]+" target='_blank'> " + nus[i]["name"] + " (" +nus[i].min+")" + "</a>");
            }
            console.log(nus[i].name);
            console.log(nus[i].bool);
        }
        if (nus[i].bool){
            if(nus[i].oneof1 !== undefined && nus[i].oneof1.length > 0){
                let counter1 = 0;
                for(let j = 0; j < nus[i].oneof1.length; j++){
                    let counter2 = 0;
                    for (let k = 0; k < 4; k++){
                        if(nus[i].oneof1[j] !== subjects[k]){
                            counter2++;
                        }
                        else{
                            break;
                        }
                    }
                    if(counter2 == 4){
                        counter1++;
                    }
                }
                if(counter1 == nus[i].oneof1.length){
                    nus[i].bool = false;
                    nusNotEli.push("<a href=" +nus[i]["link"]+" target='_blank'> " + nus[i]["name"] + " (" +nus[i].min+")" + "</a>");
                }
            }
        }
        if (nus[i].bool){
            if(nus[i].oneof2 !== undefined && nus[i].oneof2.length > 0){
                let counter1 = 0;
                for(let j = 0; j < nus[i].oneof2.length; j++){
                    let counter2 = 0;
                    for (let k = 0; k < 4; k++){
                        if(nus[i].oneof2[j] !== subjects[k]){
                            counter2++
                        }
                        else{
                            break;
                        }
                    }
                    if(counter2 == 4){
                        counter1++;
                    }
                }
                if(counter1 == nus[i].oneof2.length){
                    nus[i].bool = false;
                    nusNotEli.push("<a href=" +nus[i]["link"]+" target='_blank'> " + nus[i]["name"] + " (" +nus[i].min+")" + "</a>");
                }
            }
        }

        if (nus[i].bool){  //REMEMBER TO RESET AT THE START
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
            if (point < Number(nus[i]["min"]) - 2.5){
                nusno.push("<a href=" +nus[i]["link"]+" target='_blank'> " + nus[i]["name"] + " (" +nus[i].min+")" + "</a>");
            }
        }
    }

    let compare = higher.length;
    if (compare < middle.length){
        compare = middle.length;
    }
    if (compare < lower.length){
        compare = lower.length;
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
            cell3.innerHTML = "<a href=" +lowerlink[i]+" target='_blank'>" + lower[i] +"</a>"; //must have space between " target!!
        }
        else{
            cell3.innerHTML = " ";
        }
    }

    document.getElementById("nusno0").innerHTML = "Below 10th Percentile by more than one H2 grade";
    hide_text1();
    console.log(nusNotEli);
    if (nusNotEli !== undefined && nusNotEli.length > 0){
        document.getElementById("nusNotEli0").innerHTML = "Courses with unmet prerequisites";
        hide_nusNotEli_text();
    }

    //table for ntu
    higher = [];
    higherlink = [];
    middle = [];
    middlelink = [];
    lower = [];
    lowerlink = [];
    ntuno = [];
    for (let i = 0; i < ntu.length; i++){
        //console.log("My object: ",nus[i].max);

        //checks eligibility
            if(ntu[i].oneof1 !== undefined && ntu[i].oneof1.length > 0){
                let counter1 = 0;
                for(let j = 0; j < ntu[i].oneof1.length; j++){
                    let counter2 = 0;
                    for (let k = 0; k < 4; k++){
                        if(ntu[i].oneof1[j] !== subjects[k]){
                            counter2++;
                        }
                        else{
                            break;
                        }
                    }
                    if(counter2 == 4){
                        counter1++;
                    }
                }
                if(counter1 == ntu[i].oneof1.length){
                    ntu[i].bool = false;
                    ntuNotEli.push("<a href=" +ntu[i]["link"]+" target='_blank'> " + ntu[i]["name"] + " (" +ntu[i].min+")" + "</a>");
                }
            }
        if (ntu[i].bool){
            if(ntu[i].oneof2 !== undefined && ntu[i].oneof2.length > 0){
                let counter1 = 0;
                for(let j = 0; j < ntu[i].oneof2.length; j++){
                    let counter2 = 0;
                    for (let k = 0; k < 4; k++){
                        if(ntu[i].oneof2[j] !== subjects[k]){
                            counter2++
                        }
                        else{
                            break;
                        }
                    }
                    if(counter2 == 4){
                        counter1++;
                    }
                }
                if(counter1 == ntu[i].oneof2.length){
                    ntu[i].bool = false;
                    ntuNotEli.push("<a href=" +ntu[i]["link"]+" target='_blank'> " + ntu[i]["name"] + " (" +ntu[i].min+")" + "</a>");
                }
            }
        }
        if (ntu[i].bool){
            if(ntu[i].oneof3 !== undefined && ntu[i].oneof3.length > 0){
                let counter1 = 0;
                for(let j = 0; j < ntu[i].oneof3.length; j++){
                    let counter2 = 0;
                    for (let k = 0; k < 4; k++){
                        if(ntu[i].oneof3[j] !== subjects[k]){
                            counter2++
                        }
                        else{
                            break;
                        }
                    }
                    if(counter2 == 4){
                        counter1++;
                    }
                }
                if(counter1 == ntu[i].oneof3.length){
                    ntu[i].bool = false;
                    ntuNotEli.push("<a href=" +ntu[i]["link"]+" target='_blank'> " + ntu[i]["name"] + " (" +ntu[i].min+")" + "</a>");
                }
            }
        }

        if(ntu[i].bool){
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
            if (point < Number(ntu[i]["min"]) - 2.5){
                ntuno.push("<a href=" +ntu[i]["link"]+" target='_blank'> " + ntu[i]["name"] + " (" +ntu[i].min+")" + "</a>");
            }
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
            cell3.innerHTML = "<a href=" +lowerlink[i]+" target='_blank'>" + lower[i] +"</a>";
        }
        else{
            cell3.innerHTML = " ";
        }
    }

    document.getElementById("ntuno0").innerHTML = "Below 10th Percentile by more than one H2 grade";
    hide_text2();
    if (ntuNotEli !== undefined && ntuNotEli.length > 0){
        document.getElementById("ntuNotEli0").innerHTML = "Courses with unmet prerequisites";
        hide_ntuNotEli_text();
    }

    //table for smu
    higher = [];
    higherlink = [];
    middle = [];
    middlelink = [];
    lower = [];
    lowerlink = [];
    for (let i = 0; i < smu.length; i++){
        //console.log("My object: ",nus[i].max);
        if (point > Number(smu[i].max)){
            higher.push(" " + smu[i].max[i].name + " (" +smu[i].max[i].min+")");
            higherlink.push(smu[i].link);
        }
        if (point >= Number(smu[i]["min"]) && point <= Number(smu[i]["max"])){
            middle.push(" " + smu[i]["name"] + " (" +smu[i].min+")");
            middlelink.push(smu[i].link);
        }
        if (point >= Number(smu[i]["min"]) - 2.5 && point < Number(smu[i]["min"])){
            lower.push(" " + smu[i]["name"] + " (" +smu[i].min+")");
            lowerlink.push(smu[i].link);
        }
    }
    compare = higher.length;
    if (compare < middle.length){
        compare = middle.length
    }
    if (compare < lower.length){
        compare = lower.length
    }
    table = document.getElementById("table3");
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
            cell3.innerHTML = "<a href=" +lowerlink[i]+" target='_blank'>" + lower[i] +"</a>";
        }
        else{
            cell3.innerHTML = " ";
        }
    }
    smuno = [];
    for (let i = 0; i < smu.length; i++){
        if (point < Number(smu[i]["min"]) - 2.5){
            smuno.push("<a href=" +smu[i]["link"]+" target='_blank'> " + smu[i]["name"] + " (" +smu[i].min+")" + "</a>");
        }
    }
    document.getElementById("smuno0").innerHTML = "Below 10th Percentile by more than one H2 grade";
    hide_text3();

}

function hide(){
    var x = document.getElementById("table1");
    var y = document.getElementById("table2");
    var z = document.getElementById("table3");
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";
}

function showtable(){
    var x = document.getElementById("table1");
    var y = document.getElementById("table2");
    var z = document.getElementById("table3");
    x.style.display = "block";
    y.style.display = "block";
    z.style.display = "block";
    document.getElementById("nus_header").innerHTML = "NUS";
    document.getElementById("ntu_header").innerHTML = "NTU";
    document.getElementById("smu_header").innerHTML = "SMU";
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
function show_text3(){
    document.getElementById("smuno").innerHTML = "<p id='p3' style='color:purple;'>" +smuno+ " <strong onclick='hide_text3()'>(click to hide)</strong></p>";

}
function hide_text3(){
    document.getElementById("smuno").innerHTML = "<p onclick='show_text3()' id='p2'> click to show courses</p>";
}
function show_nusNotEli_text(){
    document.getElementById("nusNotEli").innerHTML = "<p id='p3' style='color:purple;'>" +nusNotEli+ " <strong onclick='hide_nusNotEli_text()'>(click to hide)</strong></p>";
}
function hide_nusNotEli_text(){
    document.getElementById("nusNotEli").innerHTML = "<p onclick='show_nusNotEli_text()' id='p2'> click to show courses</p>";
}
function show_ntuNotEli_text(){
    document.getElementById("ntuNotEli").innerHTML = "<p id='p3' style='color:purple;'>" +ntuNotEli+ " <strong onclick='hide_ntuNotEli_text()'>(click to hide)</strong></p>";
}
function hide_ntuNotEli_text(){
    document.getElementById("ntuNotEli").innerHTML = "<p onclick='show_ntuNotEli_text()' id='p2'> click to show courses</p>";
}

function call(){
    calculate();
    print_courses();
    showtable();
}
