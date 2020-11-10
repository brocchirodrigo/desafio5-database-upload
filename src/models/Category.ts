import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('categories')
class Category {
  findOne(arg0: { where: { title: string; }; }) {
    throw new Error('Method not implemented.');
  }
  create(arg0: { title: string; }): any {
    throw new Error('Method not implemented.');
  }
  save(transactionCategory: any) {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Category;
