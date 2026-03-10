// ============================================
// INTELLIGENT AUTO-REMEDIATION MODULE
// Automated rollback and self-healing
// ============================================

function renderAutoRemediation() {
    return `
        <div class="module-header">
            <h2 class="module-title">Intelligent Auto-Remediation</h2>
            <p class="module-description">Self-healing infrastructure with automated rollback, scaling, and configuration management</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Remediations (24h)</span>
                    <span class="stat-icon">🔧</span>
                </div>
                <div class="stat-value">42</div>
                <div class="stat-change positive">
                    <span>100% success</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Auto-Rollbacks</span>
                    <span class="stat-icon">↩️</span>
                </div>
                <div class="stat-value">3</div>
                <div class="stat-change positive">
                    <span>All successful</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Auto-Scaling Events</span>
                    <span class="stat-icon">📈</span>
                </div>
                <div class="stat-value">28</div>
                <div class="stat-change positive">
                    <span>↑ 12%</span>
                    <span>efficiency gain</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Config Adjustments</span>
                    <span class="stat-icon">⚙️</span>
                </div>
                <div class="stat-value">11</div>
                <div class="stat-change positive">
                    <span>Optimized</span>
                </div>
            </div>
        </div>

        <div class="content-grid">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Remediation Success Rate</h3>
                    <span class="badge badge-success">100%</span>
                </div>
                <div class="card-body">
                    <div class="chart-container">
                        <canvas id="remediation-success-chart"></canvas>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Auto-Scaling Efficiency</h3>
                    <span class="badge badge-info">ML-Driven</span>
                </div>
                <div class="card-body">
                    <div class="chart-container">
                        <canvas id="scaling-efficiency-chart"></canvas>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Active Remediation Policies</h3>
                <button class="btn btn-primary" onclick="showNotification('Policy Update', 'Optimizing remediation policies with ML insights', 'info')">
                    <span>🧠 Optimize Policies</span>
                </button>
            </div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Policy Name</th>
                                <th>Trigger Condition</th>
                                <th>Action</th>
                                <th>Priority</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Intelligent Scaling</td>
                                <td>High CPU (> 80%)</td>
                                <td>Scale Container / ASG Out</td>
                                <td><span class="badge badge-danger">Critical</span></td>
                                <td><span class="badge badge-success">Active</span></td>
                            </tr>
                            <tr>
                                <td>Service Recovery</td>
                                <td>Service Crash / 5xx Spike</td>
                                <td>Restart Container</td>
                                <td><span class="badge badge-danger">Critical</span></td>
                                <td><span class="badge badge-success">Active</span></td>
                            </tr>
                            <tr>
                                <td>Database Failover</td>
                                <td>Database Connection Failure</td>
                                <td>Switch to Replica / Failover</td>
                                <td><span class="badge badge-danger">Critical</span></td>
                                <td><span class="badge badge-success">Active</span></td>
                            </tr>
                            <tr>
                                <td>Memory Optimization</td>
                                <td>Memory > 90% (Predictive)</td>
                                <td>Clear cache + Flush Buffers</td>
                                <td><span class="badge badge-warning">High</span></td>
                                <td><span class="badge badge-success">Active</span></td>
                            </tr>
                            <tr>
                                <td>Zonal Failover</td>
                                <td>AZ Latency Spike</td>
                                <td>Migrate Workload / Traffic Shift</td>
                                <td><span class="badge badge-info">Medium</span></td>
                                <td><span class="badge badge-success">Active</span></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header">
                <h3 class="card-title">Recent Remediation History</h3>
            </div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Timestamp</th>
                                <th>Service</th>
                                <th>Issue Detected</th>
                                <th>Action Taken</th>
                                <th>Duration</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>19:15:23</td>
                                <td>Payment API</td>
                                <td>High latency</td>
                                <td>Auto-scaled +3 instances</td>
                                <td>45s</td>
                                <td><span class="badge badge-success">Success</span></td>
                            </tr>
                            <tr>
                                <td>18:52:11</td>
                                <td>User Service</td>
                                <td>Error spike</td>
                                <td>Rollback v2.3.1 → v2.3.0</td>
                                <td>2m 12s</td>
                                <td><span class="badge badge-success">Success</span></td>
                            </tr>
                            <tr>
                                <td>17:30:45</td>
                                <td>Database</td>
                                <td>Connection exhaustion</td>
                                <td>Pool size 100 → 150</td>
                                <td>15s</td>
                                <td><span class="badge badge-success">Success</span></td>
                            </tr>
                            <tr>
                                <td>16:18:33</td>
                                <td>Cache Service</td>
                                <td>Memory pressure</td>
                                <td>Cache eviction + restart</td>
                                <td>1m 05s</td>
                                <td><span class="badge badge-success">Success</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function initAutoRemediationCharts() {
    // Remediation Success Chart
    createBarChart('remediation-success-chart',
        ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        [42, 38, 45, 51, 48, 35, 42],
        '#06ffa5'
    );

    // Scaling Efficiency Chart
    createLineChart('scaling-efficiency-chart',
        'Efficiency Score',
        generateTimeSeriesData(12, 85, 99),
        ['#00d4ff', '#7b2cbf']
    );
}
