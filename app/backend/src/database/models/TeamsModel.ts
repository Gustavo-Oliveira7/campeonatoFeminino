import { DataTypes, Model, InferAttributes, InferCreationAttributes,
  CreationOptional } from 'sequelize';
import db from '.';

class TeamsModel extends Model<InferAttributes<TeamsModel>,
InferCreationAttributes<TeamsModel>> {
  declare id: CreationOptional<number>;
  declare teamName: string;
}

TeamsModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  tableName: 'teams',
  sequelize: db,
  timestamps: false,
});

export default TeamsModel;
