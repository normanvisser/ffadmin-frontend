# Fairfield Admin
This is a CMS for the language school I used to work for, called Fairfield College. It is a combination of bookkeeping and administration. The users are staff members of the school. 

With this app the users can keep track of the students and classes:
- New students and classes can be added
- Current student and class details can be viewed and edited
- Student details contain personal details and school specific information, like attendance and invoices
- Class details contain its teachers and students, schedule and more specifics about the class

The app was created as a portfolio project for Codaisseurs web development bootcamp. Some features aren't finished or weren't implemented at all, due to time limits. I work on it regularly as a practice for CMS creation. 

The frontend is built using JS, React and Redux.
The [backend](https://github.com/normanvisser/ffadmin-backend) is built using NodeJS, PostgreSQL and Sequelize

## Student Overview and Details, Adding a Student
- The student overview page shows the most important details of all students
- Students/classes can be filtered and sorted

<img src="https://github.com/normanvisser/ffadmin-frontend/blob/main/src/images/1.%20Student%20Overview.png" width="800" alt="Student-Overview">

- The "Add Student" button reveals a form, through which a new student can be added
<img src="https://github.com/normanvisser/ffadmin-frontend/blob/main/src/images/2.%20Add%20Student.png" width="800" alt="Add-Student-Form">

- When clicked on a student, their details show up: Personal details, attendance and school specific details
<img src="https://github.com/normanvisser/ffadmin-frontend/blob/main/src/images/3.%20Student%20Details.png" width="800" alt="Add-Student-Form">


## Class Overview and Details, Adding a Class
- The class overview page shows the most important details of all classes
- In the overview page, the "Add Class" button reveals a form, through which a new class can be added
- Classes can be filtered and sorted
<img src="https://github.com/normanvisser/ffadmin-frontend/blob/main/src/images/4.%20Class%20Overview.png" width="800" alt="Add-Student-Form">

- When clicked on a class, the details show up: Teachers, schedule, current students and some other details
<img src="https://github.com/normanvisser/ffadmin-frontend/blob/main/src/images/5.%20Class%20Details.png" width="800" alt="Add-Student-Form">

## Upcoming
I will continue working on the app. Some functionalities need polishing, others aren't implemented at all yet. This is a gross outline of what's coming:
- Stronger validations on the forms
- Enhance workflow to add student attendance
- Add invoice tracking
- Add media queries
- Structurize css
- Add form create new user (admin only)
- Separate access to content per user
