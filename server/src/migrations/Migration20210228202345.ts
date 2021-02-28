import { Migration } from '@mikro-orm/migrations';

export class Migration20210228202345 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "project" ("id" serial primary key, "project_name" text not null, "project_status" text not null);');
  }

}
