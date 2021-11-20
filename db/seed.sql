use employees;
INSERT INTO department
(name)
VALUES
("Sales"),
("Engineering"),
("Finance"),
("Legal");
INSERT INTO role
(title, salary, department_id)
VALUES
("Sales Lead", 100000, 1),
("Lead Engineer", 150000, 2),
("Software Engineer", 120000, 2),
("Lawyer", 200000, 4,
("Account Manager", 120000, 3),
 INSERT INTO employee
 (first_name, last_name, role_id, manager_id)
 VALUES
 ("Ernesto", "Garcia", 1, NUll),
 ("Parth", "Bhatt", 2, NUll),
 ("Maxwell", "Walin", 3, 2),
 ("Daniel", "Stark", 5, NUll),
 ("Jesus", "Perea", 3, 2);