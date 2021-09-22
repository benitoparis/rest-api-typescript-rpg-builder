import Sequelize from "sequelize";
import sequelizeDatabase from "../utils/database";
import { Table, Column, Model, HasMany, PrimaryKey, CreatedAt, UpdatedAt, DeletedAt, AutoIncrement } from 'sequelize-typescript'
import {DataType} from 'sequelize-typescript';

@Table
class SwitchButton extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  description: string;

  @Column(DataType.STRING)
  reference: string;

  @Column(DataType.INTEGER)
  cropX: number;

  @Column(DataType.INTEGER)
  cropY: number;

  @Column(DataType.INTEGER)
  positionX: number;

  @Column(DataType.INTEGER)
  positionY: number;

  @Column(DataType.INTEGER)
  width: number;

  @Column(DataType.INTEGER)
  height: number;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;

//   @HasMany(() => Hobby)
//   hobbies: Hobby[]
}

export default SwitchButton;
