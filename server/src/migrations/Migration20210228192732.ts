import { Migration } from '@mikro-orm/migrations';

export class Migration20210228192732 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "skill" ("id" serial primary key, "title" text not null);');
  }

}
