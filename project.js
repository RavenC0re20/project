let point;
let nusno = [];
let ntuno = [];
let smuno = [];
let nusNotEli = [];
let ntuNotEli = [];
let sitNotEli = [];
let sitCourses = [];
let subjects = [];
let x;
let sort;
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
let new_point

if (rank_point1 > rank_point2){
    point = rank_point1;
}
else{
    point = rank_point2.toFixed(2);
}
//let s = rank_point.toString();
document.getElementById("point").innerHTML = "You have obtained a University Admission Score of <strong>"+ point +"</strong>, here are some courses You might want to consider:"

subjects = [];
subjects[0] = document.getElementById("S1").value;
subjects[1] = document.getElementById("S2").value;
subjects[2] = document.getElementById("S3").value;
subjects[3] = document.getElementById("S4").value;
if (document.getElementById("omath").checked){
    subjects.push("omath");
}
if (document.getElementById("ophysics").checked){
    subjects.push("ophysics");
}
if (document.getElementById("ochemistry").checked){
    subjects.push("ochemistry");
}
if (document.getElementById("obiology").checked){
    subjects.push("obiology");
}
//console.log(subjects);


document.getElementById("print_checkbox").innerHTML = `Include bonus point^: <input type="checkbox" id="bonus" onclick="print_courses()"><p id="rp_with_bonus"></p><p> ^Note: This is for NUS first choice bonus point scheme, read more
<a href="https://www.nus.edu.sg/oam/undergraduate-programmes/1st-Choice" target='_blank' ><strong>here</strong></a></p>`

sort = document.getElementById("sort").value;

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
let sitSubjects1 = ["h2math","h1math","h2physics","h2computing"];
let sitSubjects2 = ["h2biology","h2chemistry","h2physics"];

let nus = [];
nus[0] = {min:85,max:85,name:"Law*",link:"https://law.nus.edu.sg/",bool:true,oneof1:[],oneof2:[]};
nus[1] = {min:85,max:85,name:"Medicine*",link:"https://medicine.nus.edu.sg/",bool:true,compul:"h2chemistry",oneof1:["h2physics","h2biology"],oneof2:[]}; //to test
nus[2] = {min:66.25,max:85,name:"Nursing*",link:"https://medicine.nus.edu.sg/nursing/",bool:true,oneof1:[],oneof2:h2phychem};
nus[3] = {min:85,max:85,name:"Dentistry*",link:"https://www.dentistry.nus.edu.sg/",bool:true,compul:"h2chemistry",oneof1:[],oneof2:[]};
nus[4] = {min:70,max:85,name:"Architecture*",link:"https://www.sde.nus.edu.sg/arch/",bool:true,oneof1:chemmathphy,oneof2:[]};
nus[5] = {min:73.75,max:85,name:"Industrial Design*",link:"https://www.sde.nus.edu.sg/did/",bool:true,oneof1:["h1chemistry","h2chemistry","h1math","h2math","h1physics","h2physics","h2furthermath","h1econs","h2econs","h1art","h2art"],oneof2:[]};
nus[6] = {min:70,max:83.75,name:"Landscape Architecture*",link:"https://www.sde.nus.edu.sg/arch/programmes/bachelor-of-landscape-architecture/",bool:true,oneof1:chemmathphy,oneof2:[]};
nus[7] = {min:85,max:85,name:"Arts & Social Sciences (Philosophy, Politics & Economics)*",link:"",bool:true,oneof1:[],oneof2:[]};
nus[8] = {min:66.25,max:76.25,name:"Real Estate",link:"https://www.sde.nus.edu.sg/rst/",bool:true,oneof1:chemmathphy,oneof2:[]};
nus[9] = {min:75,max:85,name:"Biomedical Engineering",link:"https://www.eng.nus.edu.sg/bme/",bool:true,oneof1:h2math,oneof2:["h2physics","h2biology"]};
nus[10] = {min:76.25,max:85,name:"Chemical Engineering",link:"https://www.eng.nus.edu.sg/chbe/",bool:true,compul:"h2chemistry",oneof1:h2math,oneof2:["h2physics"]};
nus[11] = {min:67.5,max:83.75,name:"Civil Engineering",link:"https://www.eng.nus.edu.sg/cee/",bool:true,oneof1:h2math,oneof2:h2phychem};
nus[12] = {min:73.75,max:85,name:"Electrical Engineering",link:"https://www.eng.nus.edu.sg/ece/",bool:true,oneof1:h2math,oneof2:h2phychem};
nus[13] = {min:73.75,max:85,name:"Engineering Science",link:"https://www.eng.nus.edu.sg/esp/",bool:true,oneof1:h2math,oneof2:["h2physics"]};
nus[14] = {min:72.5,max:85,name:"Environmental Engineering",link:"https://www.eng.nus.edu.sg/cee/undergraduate/beng-environmental/",bool:true,compul:"h2chemistry",oneof1:h2math,oneof2:["h2physics"]};
nus[15] = {min:72.5,max:83.75,name:"Industrial & Systems Engineering",link:"https://www.eng.nus.edu.sg/isem/",bool:true,oneof1:h2math,oneof2:h2phychem};
nus[16] = {min:72.5,max:85,name:"Materials Science & Engineering",link:"https://www.eng.nus.edu.sg/mse/",bool:true,oneof1:h2math,oneof2:h2phychem};
nus[17] = {min:73.75,max:85,name:"Mechanical Engineering",link:"https://www.eng.nus.edu.sg/me/",bool:true,oneof1:h2math,oneof2:h2phychem};
nus[18] = {min:78.75,max:85,name:"Mechanical Engineering (Aeronautical)",link:"https://www.eng.nus.edu.sg/me/",bool:true,oneof1:h2math,oneof2:h2phychem};
nus[19] = {min:85,max:85,name:"Business Analytics",link:"https://www.comp.nus.edu.sg/programmes/ug/ba/",bool:true,oneof1:h2math,oneof2:[]};
nus[20] = {min:85,max:85,name:"Computer Science Courses",link:"https://www.comp.nus.edu.sg/programmes/ug/cs/",bool:true,oneof1:["h2math","h2furthermath","h2computing"],oneof2:[]};
nus[21] = {min:85,max:85,name:"Information Security",link:"https://www.comp.nus.edu.sg/programmes/ug/isc/",bool:true,oneof1:["h2math","h2furthermath","h2computing"],oneof2:[]};
nus[22] = {min:85,max:85,name:"Information Systems",link:"https://www.comp.nus.edu.sg/programmes/ug/is/",bool:true,oneof1:["h2math","h2furthermath","h2computing"],oneof2:[]};
nus[23] = {min:83.75,max:85,name:"Computer Engineering",link:"https://www.comp.nus.edu.sg/programmes/ug/ceg/",bool:true,oneof1:h2math,oneof2:h2phychem};
nus[24] = {min:82.5,max:85,name:"Data Science and Analytics",link:"https://www.stat.nus.edu.sg/prospective-students/undergraduate-programme/data-science-and-analytics/",bool:true,oneof1:h2math,oneof2:["h2biology","h2chemistry","h2physics","h2computing"]};
nus[25] = {min:85,max:85,name:"Pharmaceutical Science",link:"https://pharmacy.nus.edu.sg/study/undergraduate/bachelor-of-science-pharmaceutical-science/",bool:true,oneof1:["h2chemistry"],oneof2:["h2biology","h2physics","h2furthermath","h2math"]};
nus[26] = {min:83.75,max:85,name:"Pharmacy",link:"https://pharmacy.nus.edu.sg/",bool:true,oneof1:["h2chemistry"],oneof2:["h2biology","h2physics","h2furthermath","h2math"]};
nus[27] = {min:82.5,max:85,name:"Science",link:"https://www.science.nus.edu.sg/",bool:true,oneof1:["h2biology","h2chemistry","h2physics","h2computing","h2math","h2furthermath"],oneof2:[]}; //need 2
nus[28] = {min:85,max:85,name:"Science (Food Science & Technology)",link:"https://www.fst.nus.edu.sg/",bool:true,oneof1:["h2biology","h2chemistry","h2physics","h2computing","h2math","h2furthermath"],oneof2:[]}; //need 2
nus[29] = {min:80,max:85,name:"Business Administration",link:"https://bschool.nus.edu.sg/prospective-students/undergraduate/",bool:true,oneof1:h2math,oneof2:[]};
nus[30] = {min:81.25,max:85,name:"Business Administration (Accountancy)",link:"https://bba.nus.edu.sg/academic-programmes/bba-accountancy-programme/introduction/",bool:true,oneof1:h2math,oneof2:[]};
nus[31] = {min:68.75,max:78.75,name:"Project & Facilities Management",link:"https://www.sde.nus.edu.sg/bdg/",bool:true,oneof1:chemmathphy,oneof2:[]};
nus[32] = {min:76.25,max:85,name:"Arts & Social Sciences",link:"https://www.nus.edu.sg/oam/undergraduate-programmes/programmes-introduction/ppe",bool:true,oneof1:[],oneof2:[]};
nus[33] = {min:73.75,max:80,name:"Arts & Social Sciences (MT related)",link:"https://fass.nus.edu.sg/",bool:true,oneof1:[],oneof2:[]};
nus[34] = {min:82.5,max:85,name:"Environmental Studies",link:"https://envstudies.nus.edu.sg/",bool:true,oneof1:["h1math","h2math","h2furthermath"],oneof2:["h2biology","h2chemistry"]};

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

let suss = []; //full time courses only
suss[0] = {name:"Bachelor of Accountancy",lower:"7.7%", higher:"88.7%",
lower2:"Below 5%",higher2:"39.9%",
attributes:`<ul><li>Possess the integrity to do what is right, as befits the accounting profession</li>
<li>Demonstrates resilience and persistence in developing functional competencies</li>
<li>Demonstrate professionalism in personal conduct and communication</li></ul>`,
link:"https://www.suss.edu.sg/programmes/detail/bachelor-of-accountancy-ftacc?utm_source=suss_website&utm_medium=ft_landing&utm_campaign=ft_featured_prog_1&utm_content=ftacc"};
suss[1] = {name:"Bachelor of Science in Finance with Minor",lower:"Below 5%", higher:"56.7%",
lower2:"Below 5%",higher2:"18.2%",
attributes:`<ul><li>A analytical and inquiring mind to make sense of and manage complex financial data</li>
<li>A passion to acquire and share financial and technological knowledge</li>
<li>An appreciation of how finance professionals can foster an inclusive society</li></ul>`,
link:"https://www.suss.edu.sg/programmes/detail/bachelor-of-science-in-finance-with-minor-ftfnce"};
suss[2] = {name:"Bachelor of Science in Marketing with Minor",lower:"Below 5%", higher:"91.6%",
lower2:"Below 5%",higher2:"29.7%",
attributes:`<ul><li>An intellectual curiosity about the world and a creative imagination to solve complex marketing problems</li>
<li>An empathetic understanding of customers’ expectations, constraints, needs and desires</li>
<li>An ability to make evidence-based decisions using company and customer data</li></ul>`,
link:"https://www.suss.edu.sg/programmes/detail/bachelor-of-science-in-marketing-with-minor-ftmktg"};
suss[3] = {name:"Bachelor of Science in Supply Chain Management with Minor",lower:"8.3%", higher:"85.7%",
lower2:"Below 5%",higher2:"65.7%",
attributes:`<ul><li>An agile and adaptable mind to manage challenges in the supply chain and develop innovative logistics solutions</li>
<li>An ability to leverage digital tools to enhance problem solving, decision making and efficiency in supply chains</li>
<li>An ability to identify opportunities and risks in local, regional and global markets and to operate across culturally diverse environments</li></ul>`,
link:"https://www.suss.edu.sg/programmes/detail/bachelor-of-science-in-supply-chain-management-with-minor-ftscm?utm_source=suss_website&utm_medium=ft_landing&utm_campaign=ft_featured_prog_3&utm_content=ftscm"};
suss[4] = {name:"Bachelor of Science in Business Analytics with Minor",lower:"7.9%", higher:"71.4%",
lower2:"6.2%",higher2:"23.6%",
attributes:`<ul><li>An open mind and ability to communicate with business stakeholders and define problems clearly</li>
<li>A willingness to diligently gather, clean and collate massive data from different sources</li>
<li>A passion for data and analytics and the desire to discern underlying patterns and share discoveries</li></ul>`,
link:"https://www.suss.edu.sg/programmes/detail/bachelor-of-science-in-business-analytics-with-minor-ftbsba"};
suss[5] = {name:"Bachelor of Social Work with Minor",lower:"Below 5%", higher:"82.4%",
lower2:"Below 5%",higher2:"30.0%",
attributes:`<ul><li>Reflective learners</li>
<li>Culturally sensitive and team players</li>
<li>Self-management skills</li></ul>`,
link:"https://www.suss.edu.sg/programmes/detail/bachelor-of-social-work-with-minor-ftswk"};
suss[6] = {name:"Bachelor of Early Childhood Education with Minor",lower:"7.0%", higher:"81.0%",
lower2:"Below 5%",higher2:"23.6%",
attributes:`<ul>
<li>Work experience or voluntary experience with young children in group care/education settings</li>
<li>Respectful of others and keen to learn</li>
<li>Self-management skills</li></ul>`,
link:"https://www.suss.edu.sg/programmes/detail/bachelor-of-early-childhood-education-with-minor-ftece?utm_source=suss_website&utm_medium=ft_landing&utm_campaign=ft_featured_prog_2&utm_content=ftece"};
suss[7] = {name:"Bachelor of Human Resource Management with Minor",lower:"Below 5%", higher:"80.7%",
lower2:"Below 5%",higher2:"29.1%",
attributes:`<ul>
<li>Drivers for positive change</li>
<li>Passion for people development</li>
<li>Self-management skills</li></ul>`,
link:"https://www.suss.edu.sg/programmes/detail/bachelor-of-human-resource-management-with-minor-fthrm"};
suss[8] = {name:"Bachelor of Public Safety and Security with Minor",lower:"13.9%", higher:"60.7%",
lower2:"10.8",higher2:"15.5%",
attributes:`<ul>
<li>Responsible individuals with a passion for serving the community</li>
<li>Logical thinkers with a global mindset who can quickly assess situations</li>
<li>Resilient and strategic in addressing disruptions</li></ul>`,
link:"https://www.suss.edu.sg/programmes/detail/bachelor-of-public-safety-and-security-ftpss"};

let sutd = [];
sutd[0] = {name:"Bachelor of Science (Architecture and Sustainable Design)",link:"https://asd.sutd.edu.sg/programme/bachelor-of-science-architecture-and-sustainable-design/"};
sutd[1] = {name:"Design and Artificial Intelligence (DAI)",link:"https://dai.sutd.edu.sg/"};
sutd[2] = {name:"Engineering Product Development",link:"https://epd.sutd.edu.sg/education/undergraduate/curriculum-structure/"};
sutd[3] = {name:"Engineering Systems and Design",link:"https://esd.sutd.edu.sg/academics/undergraduate-programme/"};
sutd[4] = {name:"Information Systems Technology and Design",link:"https://istd.sutd.edu.sg/education/undergraduate/curriculum-overview/"};
sutd[5] = {name:"Special Programmes",link:"https://www.sutd.edu.sg/Admissions/Undergraduate/Programmes/Special-Programmes"};

let sit = [];
sit[0] = {name:"BEng Information and Communications Technology majoring in Information Security",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/infocomm-technology/information-and-communications-technology-information-security",bool:true};
sit[1] = {name:"BEng Information and Communications Technology majoring in Software Engineering",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/infocomm-technology/information-and-communications-technology-software-engineering",bool:true};
sit[2] = {name:"BSc Computing Science <br> [Joint-Degree with University of Glasgow]",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/infocomm-technology/computing-science",bool:true};
sit[3] = {name:"BSc Computer Science in Interactive Media and Game Development <br> [Joint-Degree with DigiPen Institute of Technology Singapore]",oneof1:sitSubjects1,link:"https://www.singaporetech.edu.sg/undergraduate-programmes/infocomm-technology/computer-science-interactive-media-and-game-development",bool:true};
sit[4] = {name:"BSc Computer Science in Real-Time Interactive Simulation <br> [Joint-Degree with DigiPen Institute of Technology Singapore]",oneof1:sitSubjects1,link:"https://www.singaporetech.edu.sg/undergraduate-programmes/infocomm-technology/computer-science-real-time-interactive-simulation",bool:true};
sit[5] = {name:"BSc Dietetics and Nutrition",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/health-and-social-sciences/dietetics-and-nutrition",bool:true};
sit[6] = {name:"BSc Diagnostic Radiography",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/health-and-social-sciences/diagnostic-radiography",bool:true};
sit[7] = {name:"BSc Physiotherapy",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/health-and-social-sciences/physiotherapy",bool:true};
sit[8] = {name:"BSc Occupational Therapy",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/health-and-social-sciences/occupational-therapy",bool:true};
sit[9] = {name:"BSc Speech and Language Therapy",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/health-and-social-sciences/speech-and-language-therapy",bool:true};
sit[10] = {name:"BSc Nursing [Joint-degree with University of Glasgow]",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/health-and-social-sciences/nursing",bool:true};
sit[11] = {name:"BBA Food Business Management (Baking and Pastry Arts)",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/design-and-specialised-businesses/food-business-management-baking-and-pastry-arts",bool:true};
sit[12] = {name:"BBA Food Business Management (Culinary Arts)",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/design-and-specialised-businesses/food-business-management-culinary-arts",bool:true};
sit[13] = {name:"B Accountancy",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/design-and-specialised-businesses/accountancy?gclid=EAIaIQobChMIvd_smv_w7gIVN9WWCh1PbwTgEAAYASAAEgJ0VPD_BwE",bool:true};
sit[14] = {name:"B Hospitality Business",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/design-and-specialised-businesses/hospitality-business",bool:true};
sit[15] = {name:"BSc Air Transport Management",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/design-and-specialised-businesses/air-transport-management",bool:true};
sit[16] = {name:"BEng Pharmaceutical Engineering",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/chemical-engineering-and-food-technology/pharmaceutical-engineering",bool:true};
sit[17] = {name:"B Food Technology [Joint-Degree with Massey University]",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/chemical-engineering-and-food-technology/food-technology",bool:true};
sit[18] = {name:"BEng Chemical Engineering [Joint-Degree with Newcastle University]",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/chemical-engineering-and-food-technology/chemical-engineering-nu",bool:true};
sit[19] = {name:"BEng Chemical Engineering [Joint-Degree with Technical University of Munich]",oneof1:sitSubjects2,oneof2:h2math,link:"https://www.singaporetech.edu.sg/undergraduate-programmes/chemical-engineering-and-food-technology/chemical-engineering-tum",bool:true};
sit[20] = {name:"BEng Sustainable Infrastructure Engineering (Building Services)",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/engineering/sustainable-infrastructure-engineering-building-services",bool:true};
sit[21] = {name:"BEng Civil Engineering [Joint-Degree with University of Glasgow]",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/engineering/civil-engineering",bool:true};
sit[22] = {name:"BEng Aerospace Engineering [Joint-Degree with University of Glasgow]",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/engineering/aerospace-engineering?gclid=EAIaIQobChMI_ePF-v_w7gIV0qqWCh0ppgzaEAAYASAAEgI79_D_BwE",bool:true};
sit[23] = {name:"BEng Aircraft Systems Engineering",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/engineering/aircraft-systems-engineering",bool:true};
sit[24] = {name:"BEng Electrical Power Engineering [Joint-Degree with Newcastle University]",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/engineering/electrical-power-engineering",bool:true};
sit[25] = {name:"BEng Electronics and Data Engineering3 [Joint-Degree with Technical University of Munich]",oneof1:sitSubjects2,oneof2:h2math,link:"https://www.singaporetech.edu.sg/undergraduate-programmes/engineering/electronics-and-data-engineering",bool:true};
sit[26] = {name:"BEng Mechanical Engineering [Joint-Degree with University of Glasgow]",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/engineering/mechanical-engineering",bool:true};
sit[27] = {name:"BEng Mechanical Design and Manufacturing Engineering [Joint-Degree with Newcastle University]",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/engineering/mechanical-design-and-manufacturing-engineering",bool:true};
sit[28] = {name:"BEng Marine Engineering [Joint-Degree with Newcastle University]",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/engineering/marine-engineering",bool:true};
sit[29] = {name:"BEng Naval Architecture [Joint-Degree with Newcastle University]",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/engineering/naval-architecture",bool:true};
sit[30] = {name:"BEng Offshore Engineering [Joint-Degree with Newcastle University]",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/engineering/offshore-engineering?gclid=EAIaIQobChMIx9GQ0oDx7gIVDLaWCh0OjwVQEAAYASAAEgKhyPD_BwE",bool:true};
sit[31] = {name:"BEng Sustainable Infrastructure Engineering (Land)",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/engineering/sustainable-infrastructure-engineering-land",bool:true};
sit[32] = {name:"BEng Computer Engineering",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/engineering-infocomm-technology/computer-engineering",bool:true};
sit[33] = {name:"BEng Mechatronics Systems <br>[Joint-Degree with DigiPen Institute of Technology Singapore]",oneof1:sitSubjects1,link:"https://www.digipen.edu.sg/academics/engineering-degrees/beng-in-mechatronics-systems",bool:true};
sit[34] = {name:"BSc Digital Communications and Integrated Media",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/design-and-specialised-businesses/digital-communications-and-integrated-media",bool:true};
sit[35] = {name:"BFA Digital Art and Animation",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/infocomm-technology/digital-art-and-animation",bool:true};
sit[36] = {name:"BA User Experience and Game Design",link:"https://www.singaporetech.edu.sg/undergraduate-programmes/infocomm-technology/user-experience-and-game-design?gclid=EAIaIQobChMI4NDSnYHx7gIVwqmWCh08iQ_0EAAYASAAEgItbfD_BwE",bool:true};

//for sorting
document.getElementsByTagName('select').onchange = call();


function print_courses(){

    //sort
        if (sort == 1){
            nus.sort((a, b) => (a.name > b.name) ? 1 : -1);
            ntu.sort((a, b) => (a.name > b.name) ? 1 : -1);
            smu.sort((a, b) => (a.name > b.name) ? 1 : -1);
            suss.sort((a, b) => (a.name > b.name) ? 1 : -1);
            sit.sort((a, b) => (a.name > b.name) ? 1 : -1);
            sutd.sort((a, b) => (a.name > b.name) ? 1 : -1);
        }
        else if (sort == 2){
            nus.sort((a, b) => (a.name < b.name) ? 1 : -1);
            ntu.sort((a, b) => (a.name < b.name) ? 1 : -1);
            smu.sort((a, b) => (a.name < b.name) ? 1 : -1);
            suss.sort((a, b) => (a.name < b.name) ? 1 : -1);
            sit.sort((a, b) => (a.name < b.name) ? 1 : -1);
            sutd.sort((a, b) => (a.name < b.name) ? 1 : -1);
        }
        else if (sort == 3){
            nus.sort((a, b) => (Number(a.min) < Number(b.min)) ? 1 : -1);
            ntu.sort((a, b) => (Number(a.min) < Number(b.min)) ? 1 : -1);
            smu.sort((a, b) => (Number(a.min) < Number(b.min)) ? 1 : -1);
        }
        else if (sort == 4){
            nus.sort((a, b) => (Number(a.min) > Number(b.min)) ? 1 : -1);
            ntu.sort((a, b) => (Number(a.min) > Number(b.min)) ? 1 : -1);
            smu.sort((a, b) => (Number(a.min) > Number(b.min)) ? 1 : -1);
        }

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
                    for (let k = 0; k < subjects.length; k++){
                        if(nus[i].oneof1[j] !== subjects[k]){
                            counter2++;
                        }
                        else{
                            break;
                        }
                    }
                    if(counter2 == subjects.length){
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
                    for (let k = 0; k < subjects.length; k++){
                        if(nus[i].oneof2[j] !== subjects[k]){
                            counter2++
                        }
                        else{
                            break;
                        }
                    }
                    if(counter2 == subjects.length){
                        counter1++;
                    }
                }
                if(counter1 == nus[i].oneof2.length){
                    nus[i].bool = false;
                    nusNotEli.push("<a href=" +nus[i]["link"]+" target='_blank'> " + nus[i]["name"] + " (" +nus[i].min+")" + "</a>");
                }
            }
        }

        //checks for bonus point
        new_point = point;
        if (document.getElementById("bonus").checked){
            x = point + 2.5;
            if (x > 90){
                x = 90;
            }
            show_bonus_points();

            let no_bonus = false;
            for (j = 0; j < 8; j++){
                if (nus[i].name === nus[j].name){
                    no_bonus = true;
                    //console.log(nus[i].name +": "+ new_point);
                }
            }
            if (no_bonus){
                new_point = point;
            }
            else{
                new_point = x;
                //console.log(nus[i].name +" add: "+ new_point);
            }
        }
        else{
            new_point = point;
            hide_bonus_points();
        }

        if (nus[i].bool){  //REMEMBER TO RESET AT THE START
            if (new_point > Number(nus[i].max)){
                higher.push(" " + nus[i].name + " (" +nus[i].min+")");
                higherlink.push(nus[i].link);
            }
            if (new_point >= Number(nus[i]["min"]) && new_point <= Number(nus[i]["max"])){
                middle.push(" " + nus[i]["name"] + " (" +nus[i].min+")");
                middlelink.push(nus[i].link);
            }
            if (new_point >= Number(nus[i]["min"]) - 2.5 && new_point < Number(nus[i]["min"])){
                lower.push(" " + nus[i]["name"] + " (" +nus[i].min+")");
                lowerlink.push(nus[i].link);
            }
            if (new_point < Number(nus[i]["min"]) - 2.5){
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

    document.getElementById("nusno0").innerHTML = "Below 10th Percentile by more than one H2 grade <br> (You might want to consider these courses if you are really interested as the 10th Percentile grade is neither an absolute cut-off or a fixed value. <br> You may want to consider ABA admission for some of these courses as well)";
    hide_text1();
    console.log(nusNotEli);
    if (nusNotEli !== undefined && nusNotEli.length > 0){
        document.getElementById("nusNotEli0").innerHTML = `Courses with unmet prerequisites, check prerequisites <strong><a href="http://nus.edu.sg/oam/apply-to-nus/singapore-cambridge-gce-a-level/subject-pre-requisites" target='_blank'>here</a></strong>`;
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
                    for (let k = 0; k < subjects.length; k++){
                        if(ntu[i].oneof1[j] !== subjects[k]){
                            counter2++;
                        }
                        else{
                            break;
                        }
                    }
                    if(counter2 == subjects.length){
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
                    for (let k = 0; k < subjects.length; k++){
                        if(ntu[i].oneof2[j] !== subjects[k]){
                            counter2++
                        }
                        else{
                            break;
                        }
                    }
                    if(counter2 == subjects.length){
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
                    for (let k = 0; k < subjects.length; k++){
                        if(ntu[i].oneof3[j] !== subjects[k]){
                            counter2++
                        }
                        else{
                            break;
                        }
                    }
                    if(counter2 == subjects.length){
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

    document.getElementById("ntuno0").innerHTML = "Below 10th Percentile by more than one H2 grade <br> (You might want to consider these courses if you are really interested as the 10th Percentile grade is neither an absolute cut-off or a fixed value. <br> You may want to consider ABA admission for some of these courses as well)";
    hide_text2();
    if (ntuNotEli !== undefined && ntuNotEli.length > 0){
        document.getElementById("ntuNotEli0").innerHTML = `Courses with unmet prerequisites, check prerequisites <strong><a href="https://www3.ntu.edu.sg/oad2/website_files/alevel/min_subject_requirements.pdf" target='_blank'>here</a></strong>`;
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
            higher.push(" " + smu[i].name + " (" +smu[i].min+")");
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
    document.getElementById("smuno0").innerHTML = "Below 10th Percentile by more than one H2 grade <br> (You might want to consider these courses if you are really interested as the 10th Percentile grade is neither an absolute cut-off or a fixed value. <br> You may want to consider ABA admission for some of these courses as well)";
    hide_text3();

    //suss table
     table = document.getElementById("table4");
     x = table.rows.length;
    for (let i = 0; i < x - 1; i++){
         table.deleteRow(1); //needs to be 1 as row index changes
    }
    for (let i = 0; i < suss.length; i++){
        row = table.insertRow(i + 1);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);
        cell4 = row.insertCell(3);
        cell5 = row.insertCell(4);
        cell6 = row.insertCell(5);
        cell1.innerHTML = "<a href=" +suss[i].link+" target='_blank'>" + suss[i].name +"</a>";
        cell2.innerHTML = suss[i].lower;
        cell3.innerHTML = suss[i].higher;
        cell4.innerHTML = suss[i].lower2;
        cell5.innerHTML = suss[i].higher2;
        cell6.innerHTML = suss[i].attributes;
    }

    //sutd table
     table = document.getElementById("table5");
     x = table.rows.length;
    for (let i = 0; i < x - 1; i++){
         table.deleteRow(1); //needs to be 1 as row index changes
    }
    for (let i = 0; i < sutd.length; i++){
        row = table.insertRow(i + 1);
        cell1 = row.insertCell(0);
        cell1.innerHTML = "<a href=" +sutd[i].link+" target='_blank'>" + sutd[i].name +"</a>";
    }


    //sit table
    //checks eligibility
    for(let i = 0; i < sit.length; i++){
            if(sit[i].oneof1 !== undefined && sit[i].oneof1.length > 0){
                let counter1 = 0;
                for(let j = 0; j < ntu[i].oneof1.length; j++){
                    let counter2 = 0;
                    for (let k = 0; k < subjects.length; k++){
                        if(ntu[i].oneof1[j] !== subjects[k]){
                            counter2++;
                        }
                        else{
                            break;
                        }
                    }
                    if(counter2 == subjects.length){
                        counter1++;
                    }
                }
                if(counter1 == ntu[i].oneof1.length){
                    sit[i].bool = false;
                    sitNotEli.push("<a href=" +sit[i]["link"]+" target='_blank'> " + sit[i]["name"]+"</a>");
                }
            }
        if (sit[i].bool){
            if(sit[i].oneof2 !== undefined && sit[i].oneof2.length > 0){
                let counter1 = 0;
                for(let j = 0; j < sit[i].oneof2.length; j++){
                    let counter2 = 0;
                    for (let k = 0; k < subjects.length; k++){
                        if(sit[i].oneof2[j] !== subjects[k]){
                            counter2++;
                        }
                        else{
                            break;
                        }
                    }
                    if(counter2 == subjects.length){
                        counter1++;
                    }
                }
                if(counter1 == sit[i].oneof2.length){
                    sit[i].bool = false;
                    sitNotEli.push("<a href=" +sit[i]["link"]+" target='_blank'> " + sit[i]["name"] + "</a>");
                }
            }
        }
        if (sit[i].bool){
            sitCourses.push("<a href=" +sit[i]["link"]+" target='_blank'> " + sit[i]["name"] + "</a>");
        }
    }
        table = document.getElementById("table6");
         for (let i = 0; i < sitCourses.length; i++){
            row = table.insertRow(i + 1);
            cell1 = row.insertCell(0);
            cell1.innerHTML = sitCourses[i];
        }
        if (sitNotEli !== undefined && sitNotEli.length > 0){
            document.getElementById("sitNotEli0").innerHTML = "Courses with unmet prerequisites";
            hide_sitNotEli_text();
        }

}

function hide(){
    var x = document.getElementById("table1");
    var y = document.getElementById("table2");
    var z = document.getElementById("table3");
    var a = document.getElementById("table4");
    var b = document.getElementById("table5");
    var c = document.getElementById("table6");
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    document.getElementById("sort_selection").style.visibility = "hidden";
}

function showtable(){
    document.getElementById("nus_header").innerHTML = `<a href="https://nus.edu.sg/" target='_blank'> NUS </a>`;
    document.getElementById("ntu_header").innerHTML = `<a href="https://www.ntu.edu.sg/" target='_blank'> NTU </a>`;
    document.getElementById("smu_header").innerHTML = `<a href="https://www.smu.edu.sg/" target='_blank'> SMU </a>`;
    document.getElementById("suss_header").innerHTML = `<h2><a href="https://www.suss.edu.sg/" target='_blank'> SUSS </a></h2> <p>Listed below are only the full time courses, do take a look at the other programmes offered by SUSS listed <strong>
    <a href="https://www.suss.edu.sg/programme-finder?page=1&area=all&schools=all&t=Programmes&types=deg,dft,law,gdd-mas-phd&sort=date&keyword4ProgrammeCourse=" target='_blank'> here </a></strong> if you are interested as well</p>`;
    document.getElementById("sutd_header").innerHTML = `<h2><a href="https://sutd.edu.sg/" target='_blank'> SUTD </a></h2>
    <p>The abstract below is taken from SUTD's website <strong><a href="https://www.sutd.edu.sg/Admissions/Undergraduate/Application/Admissions-Requirements/Singapore-Cambridge-GCE-A-Level" target='_blank'>here</a></strong></p>
    <p>
    <ul>
    <li>The University accepts applications from both Science and Arts stream students.</li>
    <li>You should possess good passes in at least three H2 content-based subjects, one H1 content-based subject, Project Work and attempted General Paper (GP) or Knowledge & Inquiry (KI). Other acceptable subject combinations include: four H2 content-based subjects, Project Work and GP; or three H2 content-based subjects, Project Work and KI.</li>
    <li>While it is recommended that you have taken Mathematics and a Science subject, i.e. Physics or Chemistry, at H2, we do consider your results in Mathematics and the Science subjects taken at H1, O-level or equivalent as well. You may also be encouraged to take bridging modules before start of term.</li>
    </ul>
    </p>`;
    document.getElementById("sit_header").innerHTML = `<h2><a href="https://www.singaporetech.edu.sg/" target='_blank'> SIT </a></h2>
    <p>% of First-choice applicants in respective A
Level University Admission Score (UAS)
bands who received an offer<br>
≤70: 6.5%<br>
>70 to 80:  44.6%<br>
>80 to 90: 56.2%<br><br>
Do take note that certain courses may have additional requirements that need to be met, see them <strong> <a href="https://www.singaporetech.edu.sg/admissions/undergraduate/requirements/a-levels" target='_blank'>here</a></strong></p>`;

    show_nus_table();
    show_ntu_table();
    show_smu_table();
    show_suss_table();
    show_sit_table();
    show_sutd_table();

    document.getElementById("sort_selection").style.visibility = "initial";


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
function show_sitNotEli_text(){
     document.getElementById("sitNotEli").innerHTML = "<p id='p3' style='color:purple;'>" +sitNotEli+ " <strong onclick='hide_sitNotEli_text()'>(click to hide)</strong></p>";
}
function hide_sitNotEli_text(){
    document.getElementById("sitNotEli").innerHTML = "<p onclick='show_sitNotEli_text()' id='p2'> click to show courses</p>";
}
function hide_nus_table(){
    document.getElementById("nus_table").innerHTML = "<strong onclick='show_nus_table()'>show table</strong>"
     var x = document.getElementById("table1");
     x.style.display = "none";
}
function show_nus_table(){
    document.getElementById("nus_table").innerHTML = "<strong onclick='hide_nus_table()'>hide table</strong>"
    var x = document.getElementById("table1");
    x.style.display = "block";
}
function hide_ntu_table(){
    document.getElementById("ntu_table").innerHTML = "<strong onclick='show_ntu_table()'>show table</strong>"
     var x = document.getElementById("table2");
     x.style.display = "none";
}
function show_ntu_table(){
    document.getElementById("ntu_table").innerHTML = "<strong onclick='hide_ntu_table()'>hide table</strong>"
    var x = document.getElementById("table2");
    x.style.display = "block";
}
function hide_smu_table(){
    document.getElementById("smu_table").innerHTML = "<strong onclick='show_smu_table()'>show table</strong>"
     var x = document.getElementById("table3");
     x.style.display = "none";
}
function show_smu_table(){
    document.getElementById("smu_table").innerHTML = "<strong onclick='hide_smu_table()'>hide table</strong>"
    var x = document.getElementById("table3");
    x.style.display = "block";
}
function hide_suss_table(){
    document.getElementById("suss_table").innerHTML = "<strong onclick='show_suss_table()'>show table</strong>"
     var x = document.getElementById("table4");
     x.style.display = "none";
}
function show_suss_table(){
    document.getElementById("suss_table").innerHTML = "<strong onclick='hide_suss_table()'>hide table</strong>"
    var x = document.getElementById("table4");
    x.style.display = "block";
}
function hide_sutd_table(){
    document.getElementById("sutd_table").innerHTML = "<strong onclick='show_sutd_table()'>show table</strong>"
     var x = document.getElementById("table5");
     x.style.display = "none";
}
function show_sutd_table(){
    document.getElementById("sutd_table").innerHTML = "<strong onclick='hide_sutd_table()'>hide table</strong>"
    var x = document.getElementById("table5");
    x.style.display = "block";
}
function hide_sit_table(){
    document.getElementById("sit_table").innerHTML = "<strong onclick='show_sit_table()'>show table</strong>"
     var x = document.getElementById("table6");
     x.style.display = "none";
}
function show_sit_table(){
    document.getElementById("sit_table").innerHTML = "<strong onclick='hide_sit_table()'>hide table</strong>"
    var x = document.getElementById("table6");
    x.style.display = "block";
}
function hide_bonus_points(){
    document.getElementById("rp_with_bonus").innerHTML = "";
}
function show_bonus_points(){
    x = point + 2.5;
    if (x > 90){
        x = 90;
    }
    document.getElementById("rp_with_bonus").innerHTML = "Rank point with bonus (for first choice only): " + "<strong>"+x+"</strong>";
}

function call(){
    calculate();
    print_courses();
    showtable();
}
