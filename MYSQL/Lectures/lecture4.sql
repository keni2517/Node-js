create database users;
create table students(firstname varchar(30) ,lastname varchar(30) ,age int, city varchar(15) ,Maths int ,English int ,Gujarati int);


insert into students values ("keni","kakadiya",15,"surat",45,78,49),
("mahek","italiya",18,"vapi",74,48,45),
("srusti","kathiriya",22,"surat",58,89,45),
("shubham","kakadiya",15,"surat",42,87,49),
("harmi","sutariya",25,"ahamdavad",75,41,45),
("piyush","sughagiya",27,"navsari",45,75,78),
("pooja","parmar",23,"vadodra",47,85,46),
("nikhil","kalsariya",24,"mumbai",45,78,96),
("mansi","vaghasiya",22,"pune",45,75,78),
("trupti","gajera",25,"pune",42,48,75);


select * from students;
select * from students where maths>30 AND city="surat";
select * from students where maths>90 OR city="pune";
select * from students where maths BETWEEN 50 and 90;
select * from students where city IN ("vapi");
select * from students where city NOT IN ("vapi" , "surat");
select * from students limit 3;
select * from students limit 1;