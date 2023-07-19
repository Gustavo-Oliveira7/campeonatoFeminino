import TeamsModel from '../database/models/TeamsModel';

const getAll = async () => {
  const result = await TeamsModel.findAll();
  return result;
};

const getById = async (id: number) => {
  const result = await TeamsModel.findByPk(id);
  return result;
};

export default { getAll, getById };
