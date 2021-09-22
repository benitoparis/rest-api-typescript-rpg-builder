import Sequelize from "sequelize";
import sequelizeDatabase from "../utils/database";
import { Table, Column, Model, HasMany, PrimaryKey, CreatedAt, UpdatedAt, DeletedAt, AutoIncrement } from 'sequelize-typescript'
import {DataType} from 'sequelize-typescript';

@Table
class Stage extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.INTEGER)
  level: number;

  @Column(DataType.STRING)
  name: number;

  @Column(DataType.STRING)
  description: number;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;

//   @HasMany(() => Hobby)
//   hobbies: Hobby[]
}

export default Stage;