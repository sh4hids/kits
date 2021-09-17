import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  Todo.init(
    {
      task: DataTypes.STRING,
      isCompleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Todo',
    }
  );
  return Todo;
};
