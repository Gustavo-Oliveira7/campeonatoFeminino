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

// eslint-disable-next-line max-lines-per-function
const getByProgress = async (progress: boolean) => {
  const result = await MatchesModel.findAll({
    attributes: [
      'id', 'homeTeamId', 'homeTeamGoals', 'awayTeamId', 'awayTeamGoals', 'in_progress',
    ],
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
    where: { inProgress: progress },
  });
  return result;
};

// const result = await MatchesModel.findAll({
//   attributes: [
//     'id',
//     'homeTeamId',
//     'homeTeamGoals',
//     'awayTeamId',
//     'awayTeamGoals',
//     'in_progress',
//   ],
//   include: [
//     {
//       model: TeamsModel,
//       as: 'homeTeam',
//       attributes: ['teamName'],
//     },
//     {
//       model: TeamsModel,
//       as: 'awayTeam',
//       attributes: ['teamName'],
//     },
//   ],
//   where: {
//     inProgress: true,
//   },
// });
export default { getAll, getByProgress };
