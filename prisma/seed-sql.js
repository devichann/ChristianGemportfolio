const { exec } = require("child_process");
const fs = require("fs");

// SQL commands to insert data
const sqlCommands = `
DELETE FROM "Person";

INSERT INTO "Person" ("firstName", "lastName", "email", "jobTitle", "department", "avatarUrl", "createdAt", "updatedAt") VALUES
('James', 'Smith', 'james.smith@company.com', 'Software Engineer', 'Engineering', 'https://api.dicebear.com/7.x/avataaars/svg?seed=JamesSmith', NOW(), NOW()),
('Mary', 'Johnson', 'mary.johnson@company.com', 'Product Manager', 'Product', 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaryJohnson', NOW(), NOW()),
('Robert', 'Williams', 'robert.williams@company.com', 'Data Analyst', 'Engineering', 'https://api.dicebear.com/7.x/avataaars/svg?seed=RobertWilliams', NOW(), NOW()),
('Patricia', 'Brown', 'patricia.brown@company.com', 'UX Designer', 'Design', 'https://api.dicebear.com/7.x/avataaars/svg?seed=PatriciaBrown', NOW(), NOW()),
('Michael', 'Jones', 'michael.jones@company.com', 'DevOps Engineer', 'Engineering', 'https://api.dicebear.com/7.x/avataaars/svg?seed=MichaelJones', NOW(), NOW()),
('Jennifer', 'Garcia', 'jennifer.garcia@company.com', 'Frontend Developer', 'Engineering', 'https://api.dicebear.com/7.x/avataaars/svg?seed=JenniferGarcia', NOW(), NOW()),
('William', 'Miller', 'william.miller@company.com', 'Backend Developer', 'Engineering', 'https://api.dicebear.com/7.x/avataaars/svg?seed=WilliamMiller', NOW(), NOW()),
('Linda', 'Davis', 'linda.davis@company.com', 'Fullstack Developer', 'Engineering', 'https://api.dicebear.com/7.x/avataaars/svg?seed=LindaDavis', NOW(), NOW()),
('David', 'Rodriguez', 'david.rodriguez@company.com', 'QA Engineer', 'Operations', 'https://api.dicebear.com/7.x/avataaars/svg?seed=DavidRodriguez', NOW(), NOW()),
('Barbara', 'Martinez', 'barbara.martinez@company.com', 'Business Analyst', 'Product', 'https://api.dicebear.com/7.x/avataaars/svg?seed=BarbaraMartinez', NOW(), NOW()),
('Richard', 'Hernandez', 'richard.hernandez@company.com', 'Project Manager', 'Operations', 'https://api.dicebear.com/7.x/avataaars/svg?seed=RichardHernandez', NOW(), NOW()),
('Karen', 'Lopez', 'karen.lopez@company.com', 'Marketing Manager', 'Marketing', 'https://api.dicebear.com/7.x/avataaars/svg?seed=KarenLopez', NOW(), NOW()),
('Joseph', 'Gonzalez', 'joseph.gonzalez@company.com', 'Sales Executive', 'Sales', 'https://api.dicebear.com/7.x/avataaars/svg?seed=JosephGonzalez', NOW(), NOW()),
('Lisa', 'Wilson', 'lisa.wilson@company.com', 'HR Manager', 'HR', 'https://api.dicebear.com/7.x/avataaars/svg?seed=LisaWilson', NOW(), NOW()),
('Thomas', 'Anderson', 'thomas.anderson@company.com', 'Finance Manager', 'Finance', 'https://api.dicebear.com/7.x/avataaars/svg?seed=ThomasAnderson', NOW(), NOW()),
('Nancy', 'Thomas', 'nancy.thomas@company.com', 'Software Engineer', 'Engineering', 'https://api.dicebear.com/7.x/avataaars/svg?seed=NancyThomas', NOW(), NOW()),
('Charles', 'Taylor', 'charles.taylor@company.com', 'Product Manager', 'Product', 'https://api.dicebear.com/7.x/avataaars/svg?seed=CharlesTaylor', NOW(), NOW()),
('Betty', 'Moore', 'betty.moore@company.com', 'Data Analyst', 'Engineering', 'https://api.dicebear.com/7.x/avataaars/svg?seed=BettyMoore', NOW(), NOW()),
('Daniel', 'Jackson', 'daniel.jackson@company.com', 'UX Designer', 'Design', 'https://api.dicebear.com/7.x/avataaars/svg?seed=DanielJackson', NOW(), NOW()),
('Sandra', 'Martin', 'sandra.martin@company.com', 'DevOps Engineer', 'Engineering', 'https://api.dicebear.com/7.x/avataaars/svg?seed=SandraMartin', NOW(), NOW());
`;

// Write SQL to a temporary file
const tempSqlFile = "prisma/seed_temp.sql";
fs.writeFileSync(tempSqlFile, sqlCommands);

// Execute psql command
const psqlCmd = `psql "${process.env.DATABASE_URL}" -f ${tempSqlFile}`;

exec(psqlCmd, (error, stdout, stderr) => {
  // Clean up temp file
  fs.unlinkSync(tempSqlFile);

  if (error) {
    console.error("❌ Seeding failed:", error.message);
    process.exit(1);
  }

  console.log("✅ Successfully seeded 20 person records!");
  process.exit(0);
});
