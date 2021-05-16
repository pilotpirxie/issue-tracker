CREATE TABLE "boards" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "key" varchar(255) NOT NULL,
  "create_at" timestamp NOT NULL,
  "updated_at" timestamp NOT NULL
);

CREATE TABLE "issues" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "board_id" int NOT NULL,
  "title" varchar(255),
  "description" text,
  "status" int NOT NULL,
  "create_at" timestamp NOT NULL,
  "updated_at" timestamp NOT NULL
);

CREATE TABLE "statuses" (
  "id" int PRIMARY KEY NOT NULL,
  "description" varchar(16) NOT NULL
);

INSERT INTO "statuses" ("id", "description") VALUES
	(0, 'todo'),
	(1, 'pending'),
	(2, 'done');

ALTER TABLE "issues" ADD FOREIGN KEY ("board_id") REFERENCES "boards" ("id");

ALTER TABLE "issues" ADD FOREIGN KEY ("status") REFERENCES "statuses" ("id");
