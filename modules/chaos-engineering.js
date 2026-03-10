// ============================================
// CHAOS ENGINEERING MODULE
// Failure injection and resilience testing
// ============================================

function renderChaosEngineering() {
    return `
        <div class="module-header">
            <h2 class="module-title">Chaos Engineering at Scale</h2>
            <p class="module-description">Automated failure injection, resilience testing, and disaster recovery validation</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Experiments Run (30d)</span>
                    <span class="stat-icon">💥</span>
                </div>
                <div class="stat-value">127</div>
                <div class="stat-change positive">
                    <span>↑ 23%</span>
                    <span>vs last month</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Success Rate</span>
                    <span class="stat-icon">✅</span>
                </div>
                <div class="stat-value">96.8%</div>
                <div class="stat-change positive">
                    <span>Resilient</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Active Experiments</span>
                    <span class="stat-icon">⚡</span>
                </div>
                <div class="stat-value">2</div>
                <div class="stat-change positive">
                    <span>Running now</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">MTTR (Mean Time to Recover)</span>
                    <span class="stat-icon">⏱️</span>
                </div>
                <div class="stat-value">2.4m</div>
                <div class="stat-change positive">
                    <span>↓ 18%</span>
                    <span>improved</span>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Launch Chaos Experiment</h3>
            </div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                    <button class="btn btn-danger" onclick="runChaosExperiment('kill-container')">
                        <span>📦 Kill Container</span>
                    </button>
                    <button class="btn btn-danger" onclick="runChaosExperiment('shut-down-instance')">
                        <span>💻 Shut Down Instance</span>
                    </button>
                    <button class="btn btn-danger" onclick="runChaosExperiment('network-failure')">
                        <span>📶 Network Failure</span>
                    </button>
                    <button class="btn btn-danger" onclick="runChaosExperiment('node-failure')">
                        <span>🖥️ Node Failure</span>
                    </button>
                    <button class="btn btn-danger" onclick="runChaosExperiment('region-outage')">
                        <span>🌍 Region Outage</span>
                    </button>
                    <button class="btn btn-danger" onclick="runChaosExperiment('db-failure')">
                        <span>🗄️ Database Failure</span>
                    </button>
                </div>

            </div>
        </div>

        <div class="content-grid mt-3">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Recovery Time Distribution</h3>
                    <span class="badge badge-info">Last 30 days</span>
                </div>
                <div class="card-body">
                    <div class="chart-container">
                        <canvas id="recovery-time-chart"></canvas>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Experiment Success Trend</h3>
                    <span class="badge badge-success">Trending Up</span>
                </div>
                <div class="card-body">
                    <div class="chart-container">
                        <canvas id="experiment-success-chart"></canvas>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header">
                <h3 class="card-title">Scheduled Chaos Experiments</h3>
                <button class="btn btn-primary" onclick="showNotification('Scheduling', 'New chaos experiment scheduled', 'success')">
                    <span>📅 Schedule Experiment</span>
                </button>
            </div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Target</th>
                                <th>Schedule</th>
                                <th>Last Run</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Weekly Node Failure</td>
                                <td>Node Failure</td>
                                <td>us-east-1 cluster</td>
                                <td>Every Monday 3 AM</td>
                                <td>2 days ago</td>
                                <td><span class="badge badge-success">Passed</span></td>
                            </tr>
                            <tr>
                                <td>DB Replica Failover</td>
                                <td>Database Failure</td>
                                <td>Production DB</td>
                                <td>Every Wednesday 2 AM</td>
                                <td>1 day ago</td>
                                <td><span class="badge badge-success">Passed</span></td>
                            </tr>
                            <tr>
                                <td>Multi-Region Test</td>
                                <td>Region Outage</td>
                                <td>ap-south-1</td>
                                <td>Monthly (1st)</td>
                                <td>28 days ago</td>
                                <td><span class="badge badge-success">Passed</span></td>
                            </tr>
                            <tr>
                                <td>Network Latency Chaos</td>
                                <td>Latency Injection</td>
                                <td>Payment Service</td>
                                <td>Daily 4 AM</td>
                                <td>4 hours ago</td>
                                <td><span class="badge badge-success">Passed</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header">
                <h3 class="card-title">Recent Experiment Results</h3>
            </div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Timestamp</th>
                                <th>Experiment</th>
                                <th>Blast Radius</th>
                                <th>Recovery Time</th>
                                <th>Impact</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>19:08:15</td>
                                <td>Database Cluster Failure</td>
                                <td>2 replicas</td>
                                <td>1m 42s</td>
                                <td>0% user impact</td>
                                <td><span class="badge badge-success">Passed</span></td>
                            </tr>
                            <tr>
                                <td>15:30:22</td>
                                <td>Node Failure (us-east-1b)</td>
                                <td>3 nodes</td>
                                <td>2m 15s</td>
                                <td>0% user impact</td>
                                <td><span class="badge badge-success">Passed</span></td>
                            </tr>
                            <tr>
                                <td>04:00:05</td>
                                <td>Network Latency +500ms</td>
                                <td>1 service</td>
                                <td>3m 08s</td>
                                <td>0.02% timeout</td>
                                <td><span class="badge badge-warning">Partial</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function initChaosEngineeringCharts() {
    // Recovery Time Chart
    createBarChart('recovery-time-chart',
        ['<1m', '1-2m', '2-3m', '3-5m', '>5m'],
        [45, 38, 12, 3, 2],
        '#00d4ff'
    );

    // Experiment Success Chart
    createLineChart('experiment-success-chart',
        'Success Rate (%)',
        generateTimeSeriesData(10, 92, 99),
        ['#06ffa5', '#00d4ff']
    );
}

function runChaosExperiment(type) {
    const experiments = {
        'kill-container': 'Kill Container',
        'shut-down-instance': 'Shut Down Instance',
        'network-failure': 'Network Failure',
        'node-failure': 'Node Failure',
        'region-outage': 'Region Outage',
        'lb-blackout': 'Load Balancer Blackout',
        'db-failure': 'Database Failure',
        'network-partition': 'Network Partition',
        'latency-injection': 'Latency Injection'
    };


    showNotification(
        'Chaos Experiment Started',
        `Running ${experiments[type]} experiment...`,
        'warning'
    );

    setTimeout(() => {
        showNotification(
            'Experiment Complete',
            `${experiments[type]} - System recovered successfully`,
            'success'
        );
    }, 3000);
}
