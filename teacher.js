const gameFilterElement = document.getElementById('gameFilter');
const clearDashboardButton = document.getElementById('clearDashboardButton');
const totalPlaysValue = document.getElementById('totalPlaysValue');
const highestScoreValue = document.getElementById('highestScoreValue');
const averageScoreValue = document.getElementById('averageScoreValue');
const averageTimeValue = document.getElementById('averageTimeValue');
const resultsTableBody = document.getElementById('resultsTableBody');
const emptyDashboardState = document.getElementById('emptyDashboardState');
const dashboardStatusText = document.getElementById('dashboardStatusText');
const groupedResultsGrid = document.getElementById('groupedResultsGrid');
const emptyGroupedState = document.getElementById('emptyGroupedState');

let allResults = [];
let unsubscribeResults = null;

function formatTimeSpent(seconds) {
  const safeSeconds = Math.max(0, Math.round(Number(seconds) || 0));
  const minutes = Math.floor(safeSeconds / 60);
  const remainder = safeSeconds % 60;

  if (minutes === 0) {
    return `${remainder}s`;
  }

  return `${minutes}m ${remainder}s`;
}

function formatPlayedAt(playedAt) {
  const date = new Date(playedAt);

  if (Number.isNaN(date.getTime())) {
    return 'Unknown';
  }

  return date.toLocaleString();
}

function renderFilterOptions(results) {
  const currentValue = gameFilterElement.value || 'All Games';
  const uniqueGames = [...new Set(results.map((result) => result.gameName).filter(Boolean))].sort();
  const options = ['All Games', ...uniqueGames];

  gameFilterElement.innerHTML = options
    .map((gameName) => `<option value="${gameName}">${gameName}</option>`)
    .join('');

  gameFilterElement.value = options.includes(currentValue) ? currentValue : 'All Games';
}

function renderSummary(results) {
  const totalPlays = results.length;
  const highestScore = totalPlays > 0 ? Math.max(...results.map((result) => Number(result.score) || 0)) : 0;
  const averageScore = totalPlays > 0
    ? results.reduce((sum, result) => sum + (Number(result.score) || 0), 0) / totalPlays
    : 0;
  const averageTimeSpent = totalPlays > 0
    ? results.reduce((sum, result) => sum + (Number(result.timeSpentSeconds) || 0), 0) / totalPlays
    : 0;

  totalPlaysValue.textContent = String(totalPlays);
  highestScoreValue.textContent = String(highestScore);
  averageScoreValue.textContent = averageScore.toFixed(1);
  averageTimeValue.textContent = formatTimeSpent(averageTimeSpent);
}

function renderGroupedResults(results) {
  const groupedMap = new Map();

  for (const result of results) {
    const gameName = result.gameName || 'Unknown Game';
    const group = groupedMap.get(gameName) || [];
    group.push(result);
    groupedMap.set(gameName, group);
  }

  const groups = [...groupedMap.entries()].sort((a, b) => a[0].localeCompare(b[0]));

  groupedResultsGrid.innerHTML = groups
    .map(([gameName, groupResults]) => {
      const highestScore = Math.max(...groupResults.map((result) => Number(result.score) || 0));
      const averageScore = groupResults.reduce((sum, result) => sum + (Number(result.score) || 0), 0) / groupResults.length;

      return `
        <div class="group-card">
          <h3>${gameName}</h3>
          <span>Total plays: ${groupResults.length}</span>
          <span>Highest score: ${highestScore}</span>
          <span>Average score: ${averageScore.toFixed(1)}</span>
        </div>
      `;
    })
    .join('');

  emptyGroupedState.hidden = groups.length > 0;
}

function renderTable(results) {
  const activeFilter = gameFilterElement.value;
  const filteredResults = activeFilter === 'All Games'
    ? results
    : results.filter((result) => result.gameName === activeFilter);

  resultsTableBody.innerHTML = filteredResults
    .map((result) => `
      <tr>
        <td>${result.gameName || ''}</td>
        <td>${result.studentName || ''}</td>
        <td>${Number(result.score) || 0}</td>
        <td>${Number(result.correctClicks) || 0}</td>
        <td>${Number(result.missedClicks) || 0}</td>
        <td>${Number(result.totalAttempts) || 0}</td>
        <td>${formatTimeSpent(result.timeSpentSeconds)}</td>
        <td>${formatPlayedAt(result.playedAt)}</td>
      </tr>
    `)
    .join('');

  emptyDashboardState.hidden = filteredResults.length > 0;
}

function renderDashboard() {
  renderFilterOptions(allResults);
  renderSummary(allResults);
  renderGroupedResults(allResults);
  renderTable(allResults);
}

async function clearDashboardData() {
  if (!window.confirm('Clear all saved dashboard data for this classroom dashboard?')) {
    return;
  }

  if (!window.gameResultsStore) {
    return;
  }

  await window.gameResultsStore.clearResults();
}

function startDashboardSubscription() {
  if (!window.gameResultsStore) {
    dashboardStatusText.textContent = 'Shared results store is unavailable.';
    return;
  }

  dashboardStatusText.textContent = window.gameResultsStore.getSetupMessage();

  unsubscribeResults = window.gameResultsStore.subscribe((results) => {
    allResults = results;
    renderDashboard();
  });
}

gameFilterElement.addEventListener('change', renderDashboard);
clearDashboardButton.addEventListener('click', () => {
  void clearDashboardData();
});
window.addEventListener('beforeunload', () => {
  if (typeof unsubscribeResults === 'function') {
    unsubscribeResults();
  }
});

// The teacher dashboard starts listening as soon as the page loads.
startDashboardSubscription();
