import TeamsModel from '../database/models/TeamsModel';

const getAll = async () => {
  const result = await TeamsModel.findAll();
  return result;
};

const getById = async (id: number) => {
  const result = await TeamsModel.findByPk(id);
  if (result === null) throw new Error(`Send a valid id, not find a team with id = ${id}`);
  return result;
};

export default { getAll, getById };
