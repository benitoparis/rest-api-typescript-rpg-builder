import Sequelize from "sequelize";
import sequelizeDatabase from "../utils/database";
import { Table, Column, Model, HasMany, PrimaryKey, CreatedAt, UpdatedAt, DeletedAt, AutoIncrement } from 'sequelize-typescript'
import {DataType} from 'sequelize-typescript';

@Table
class ImageSet extends Model {

@PrimaryKey
@AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  type: string;

  @Column(DataType.STRING)
  reference: string;

  @Column(DataType.STRING)
  filePath: string;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;

//   @HasMany(() => Hobby)
//   hobbies: Hobby[]
}

export default ImageSet;