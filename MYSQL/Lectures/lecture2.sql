=> insert data :- 

insert into user(firstname , lastname, age) values ("keni" , "kakadiya" , 18);
insert into user(firstname , lastname, age) values ("keni" , "kakadiya" , 18),("mahek","italiya",22),("srusti","kathiriya",25),("piyush","suhagiya",28);
insert into user values ("ganga","gami",24);
insert into user(firstname ,age) values ("keni" ,18);




=>read data :- 

select * from user;
select firstname from user;
select firstname,age from user;
select firstname as Fullname ,age from user;
select concat(firstname, "  ",lastname) as Fullname from user