import Sequelize from "sequelize";
import sequelizeDatabase from "../utils/database";
import { Table, Column, Model, HasMany, PrimaryKey, CreatedAt, UpdatedAt, DeletedAt, AutoIncrement } from 'sequelize-typescript'
import {DataType} from 'sequelize-typescript';

@Table
class User extends Model {

@PrimaryKey
@AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  nickname: string;

  @Column(DataType.STRING)
  ageRange: string;

  @Column(DataType.STRING)
  password: string;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;

//   @HasMany(() => Hobby)
//   hobbies: Hobby[]
}

export default User;