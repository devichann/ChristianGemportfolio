import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const seedData = [
  { firstName: "James", lastName: "Smith", email: "james.smith@company.com", jobTitle: "Software Engineer", department: "Engineering", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=JamesSmith" },
  { firstName: "Mary", lastName: "Johnson", email: "mary.johnson@company.com", jobTitle: "Product Manager", department: "Product", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=MaryJohnson" },
  { firstName: "Robert", lastName: "Williams", email: "robert.williams@company.com", jobTitle: "Data Analyst", department: "Engineering", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=RobertWilliams" },
  { firstName: "Patricia", lastName: "Brown", email: "patricia.brown@company.com", jobTitle: "UX Designer", department: "Design", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=PatriciaBrown" },
  { firstName: "Michael", lastName: "Jones", email: "michael.jones@company.com", jobTitle: "DevOps Engineer", department: "Engineering", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=MichaelJones" },
  { firstName: "Jennifer", lastName: "Garcia", email: "jennifer.garcia@company.com", jobTitle: "Frontend Developer", department: "Engineering", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=JenniferGarcia" },
  { firstName: "William", lastName: "Miller", email: "william.miller@company.com", jobTitle: "Backend Developer", department: "Engineering", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=WilliamMiller" },
  { firstName: "Linda", lastName: "Davis", email: "linda.davis@company.com", jobTitle: "Fullstack Developer", department: "Engineering", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=LindaDavis" },
  { firstName: "David", lastName: "Rodriguez", email: "david.rodriguez@company.com", jobTitle: "QA Engineer", department: "Operations", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=DavidRodriguez" },
  { firstName: "Barbara", lastName: "Martinez", email: "barbara.martinez@company.com", jobTitle: "Business Analyst", department: "Product", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=BarbaraMartinez" },
  { firstName: "Richard", lastName: "Hernandez", email: "richard.hernandez@company.com", jobTitle: "Project Manager", department: "Operations", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=RichardHernandez" },
  { firstName: "Karen", lastName: "Lopez", email: "karen.lopez@company.com", jobTitle: "Marketing Manager", department: "Marketing", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=KarenLopez" },
  { firstName: "Joseph", lastName: "Gonzalez", email: "joseph.gonzalez@company.com", jobTitle: "Sales Executive", department: "Sales", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=JosephGonzalez" },
  { firstName: "Lisa", lastName: "Wilson", email: "lisa.wilson@company.com", jobTitle: "HR Manager", department: "HR", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=LisaWilson" },
  { firstName: "Thomas", lastName: "Anderson", email: "thomas.anderson@company.com", jobTitle: "Finance Manager", department: "Finance", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=ThomasAnderson" },
  { firstName: "Nancy", lastName: "Thomas", email: "nancy.thomas@company.com", jobTitle: "Software Engineer", department: "Engineering", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=NancyThomas" },
  { firstName: "Charles", lastName: "Taylor", email: "charles.taylor@company.com", jobTitle: "Product Manager", department: "Product", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=CharlesTaylor" },
  { firstName: "Betty", lastName: "Moore", email: "betty.moore@company.com", jobTitle: "Data Analyst", department: "Engineering", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=BettyMoore" },
  { firstName: "Daniel", lastName: "Jackson", email: "daniel.jackson@company.com", jobTitle: "UX Designer", department: "Design", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=DanielJackson" },
  { firstName: "Sandra", lastName: "Martin", email: "sandra.martin@company.com", jobTitle: "DevOps Engineer", department: "Engineering", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=SandraMartin" },
];

async function main() {
  console.log("🌱 Seeding database with 20 person records...");

  // Clear existing data
  await prisma.person.deleteMany({});

  for (const person of seedData) {
    await prisma.person.create({
      data: person,
    });
  }

  console.log(`✅ Successfully seeded ${seedData.length} person records!`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
    process.exit(0);
  })
  .catch(async (e) => {
    console.error("❌ Seeding failed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
