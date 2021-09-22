import Sequelize from "sequelize";
import sequelizeDatabase from "../utils/database";
import { Table, Column, Model, HasMany, PrimaryKey, CreatedAt, UpdatedAt, DeletedAt, AutoIncrement } from 'sequelize-typescript'
import {DataType} from 'sequelize-typescript';


@Table
class GameConfig extends Model {

@PrimaryKey
@AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.INTEGER)
  userId: number;

  @Column(DataType.STRING)
  jsonConfig: string;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;

//   @HasMany(() => Hobby)
//   hobbies: Hobby[]
}

export default GameConfig;