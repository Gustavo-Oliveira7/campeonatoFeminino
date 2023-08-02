interface TeamData {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
}

export interface IJogos {
  id: number,
  homeTeamId: number,
  homeTeamGoals: number,
  awayTeamId: number,
  awayTeamGoals: number,
  inProgress: boolean,
  homeTeam: {
    teamName: string,
  }
  awayTeam: {
    teamName: string,
  }
}

function initializeTeamData(name: string): TeamData {
  return {
    name,
    totalPoints: 0,
    totalGames: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 0,
    goalsOwn: 0,
    goalsBalance: 0,
    efficiency: 0,
  };
}

function processGameResult(homeTeam: TeamData, homeGoals: number, awayGoals: number): void {
  const home = homeTeam;
  home.totalGames += 1;
  home.goalsFavor += homeGoals;
  home.goalsOwn += awayGoals;
  home.goalsBalance += homeGoals - awayGoals;

  if (homeGoals > awayGoals) {
    home.totalPoints += 3;
    home.totalVictories += 1;
  } else if (homeGoals === awayGoals) {
    home.totalPoints += 1;
    home.totalDraws += 1;
  } else {
    home.totalLosses += 1;
  }
}

function calculateEfficiency(team: TeamData): void {
  if (team.totalGames > 0) {
    const time = team;
    time.efficiency = Number(((team.totalPoints / (team.totalGames * 3)) * 100).toFixed(2));
  }
}

function calcularDadosTimesEmCasa(jogos: IJogos[]): TeamData[] {
  const dadosTimes: { [key: string]: TeamData } = {};

  jogos.forEach((jogo) => {
    if (!jogo.inProgress && 'homeTeamGoals' in jogo && 'awayTeamGoals' in jogo) {
      const homeTeam = jogo.homeTeam.teamName;
      if (!dadosTimes[homeTeam]) {
        dadosTimes[homeTeam] = initializeTeamData(homeTeam);
      }

      const homeGoals = jogo.homeTeamGoals;
      const awayGoals = jogo.awayTeamGoals;
      processGameResult(dadosTimes[homeTeam], homeGoals, awayGoals);
    }
  });

  Object.values(dadosTimes).forEach((team) => {
    calculateEfficiency(team);
  });

  return Object.values(dadosTimes);
}

export function ordenarTimesPorPontuacao(times: TeamData[]): TeamData[] {
  return times.sort((a, b) => {
    if (a.totalPoints !== b.totalPoints) {
      return b.totalPoints - a.totalPoints;
    }
    if (a.totalVictories !== b.totalVictories) {
      return b.totalVictories - a.totalVictories;
    }
    if (a.goalsBalance !== b.goalsBalance) {
      return b.goalsBalance - a.goalsBalance;
    }
    return b.goalsFavor - a.goalsFavor;
  });
}

export default calcularDadosTimesEmCasa;
