-- CreateTable
CREATE TABLE "Mapel" (
    "id" SERIAL NOT NULL,
    "namapel" TEXT,
    "nik" TEXT,
    "namaguru" TEXT,
    "status" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mapel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mapel_namapel_key" ON "Mapel"("namapel");

-- CreateIndex
CREATE UNIQUE INDEX "Mapel_nik_key" ON "Mapel"("nik");
