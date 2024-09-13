-- CreateTable
CREATE TABLE "participants" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "phone" TEXT,
    "score" INTEGER,
    "seconds" INTEGER,

    CONSTRAINT "participants_pkey" PRIMARY KEY ("id")
);
