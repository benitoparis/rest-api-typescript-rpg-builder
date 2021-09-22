import Sequelize from "sequelize";
import sequelizeDatabase from "../utils/database";
import { Table, Column, Model, HasMany, PrimaryKey, CreatedAt, UpdatedAt, DeletedAt, AutoIncrement } from 'sequelize-typescript'
import {DataType} from 'sequelize-typescript';

@Table
class SecretPassage extends Model {

@PrimaryKey
@AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.INTEGER)
  positionX: number;

  @Column(DataType.INTEGER)
  positionY: number;

  @Column(DataType.INTEGER)
  width: number;

  @Column(DataType.INTEGER)
  height: number;

  @Column(DataType.STRING)
  description: string;

  @Column(DataType.STRING)
  reference: string;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;

//   @HasMany(() => Hobby)
//   hobbies: Hobby[]
}

export default SecretPassage;