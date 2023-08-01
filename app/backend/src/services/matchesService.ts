import TeamsModel from '../database/models/TeamsModel';
import MatchesModel from '../database/models/MatchesModel';

const getAll = async () => {
  const result = await MatchesModel.findAll({
    include: [
      {
        model: TeamsModel,
        as: 'homeTeam',
        attributes: ['teamName'],
      },
      {
        model: TeamsModel,
        as: 'awayTeam',
        attributes: ['teamName'],
      },
    ],
  });
  return result;
};

const getByProgress = async (progress: boolean) => {
  const result = await MatchesModel.findAll({
    where: { inProgress: progress },
    include: [
      { model: TeamsModel,
        as: 'homeTeam',
        attributes: ['teamName'],
      },
      {
        model: TeamsModel,
        as: 'awayTeam',
        attributes: ['teamName'],
      },
    ],
  });

  return result;
};

const finishMatch = async (id: number) => {
  await MatchesModel.update(
    { inProgress: false },
    { where: {
      id,
    } },
  );
  return 'Finished';
};

const updateMatch = async (id:number, homeTeamGoals:number, awayTeamGoals:number) => {
  console.log(id, homeTeamGoals, awayTeamGoals);
  await MatchesModel.update(
    { homeTeamGoals, awayTeamGoals },
    { where: {
      id,
    } },
  );
};

const createMatch = async (data: any) => {
  const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = data;
  const create = await MatchesModel.create({
    homeTeamId,
    homeTeamGoals,
    awayTeamId,
    awayTeamGoals,
    inProgress: true,
  });
  return create.dataValues;
};
export default { getAll, getByProgress, finishMatch, updateMatch, createMatch };
