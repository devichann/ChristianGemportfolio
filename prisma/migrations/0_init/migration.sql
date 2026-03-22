-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE INDEX "Person_firstName_idx" ON "Person"("firstName");

-- CreateIndex
CREATE INDEX "Person_lastName_idx" ON "Person"("lastName");

-- CreateIndex
CREATE INDEX "Person_jobTitle_idx" ON "Person"("jobTitle");

-- CreateIndex
CREATE UNIQUE INDEX "Person_email_key" ON "Person"("email");
