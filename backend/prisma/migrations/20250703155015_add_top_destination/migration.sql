-- CreateTable
CREATE TABLE "TopDestination" (
    "id" TEXT NOT NULL,
    "cityId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TopDestination_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TopDestination_cityId_key" ON "TopDestination"("cityId");

-- AddForeignKey
ALTER TABLE "TopDestination" ADD CONSTRAINT "TopDestination_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
