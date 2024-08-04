import { DataTypes } from 'sequelize';
import sequelize from '../utils/firebase';

const InventoryItem = sequelize.define('InventoryItem', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default InventoryItem;
