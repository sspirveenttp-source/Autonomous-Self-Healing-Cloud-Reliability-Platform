// ============================================
// SLO/SLI FRAMEWORK MODULE
// Service Level Objectives & Indicators
// ============================================

function renderSLOSLI() {
    return `
        <div class="module-header">
            <h2 class="module-title">SLO/SLI Framework</h2>
            <p class="module-description">Service level objectives, indicators, and error budget management for reliability contracts</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Active SLOs</span>
                    <span class="stat-icon">🎯</span>
                </div>
                <div class="stat-value">12</div>
                <div class="stat-change positive">
                    <span>All tracked</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Error Budget Remaining</span>
                    <span class="stat-icon">📊</span>
                </div>
                <div class="stat-value">94.2%</div>
                <div class="stat-change positive">
                    <span>Healthy margin</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">SLOs Met (30d)</span>
                    <span class="stat-icon">✅</span>
                </div>
                <div class="stat-value">11/12</div>
                <div class="stat-change positive">
                    <span>91.7% compliance</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Deployment Gates</span>
                    <span class="stat-icon">🚦</span>
                </div>
                <div class="stat-value">3</div>
                <div class="stat-change positive">
                    <span>Active</span>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Service Level Objectives</h3>
                <button class="btn btn-primary" onclick="showNotification('SLO Configuration', 'Updating SLO targets based on performance data', 'info')">
                    <span>⚙️ Configure SLO</span>
                </button>
            </div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>SLI Metric</th>
                                <th>Target</th>
                                <th>Current</th>
                                <th>Error Budget</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>API Gateway</td>
                                <td>Availability</td>
                                <td>99.95%</td>
                                <td>99.98%</td>
                                <td>96.2%</td>
                                <td><span class="badge badge-success">Met</span></td>
                            </tr>
                            <tr>
                                <td>Payment Service</td>
                                <td>Latency (p99)</td>
                                <td>&lt;200ms</td>
                                <td>142ms</td>
                                <td>98.1%</td>
                                <td><span class="badge badge-success">Met</span></td>
                            </tr>
                            <tr>
                                <td>User Service</td>
                                <td>Success Rate</td>
                                <td>99.9%</td>
                                <td>99.95%</td>
                                <td>94.3%</td>
                                <td><span class="badge badge-success">Met</span></td>
                            </tr>
                            <tr>
                                <td>Database</td>
                                <td>Query Time (p95)</td>
                                <td>&lt;50ms</td>
                                <td>38ms</td>
                                <td>97.8%</td>
                                <td><span class="badge badge-success">Met</span></td>
                            </tr>
                            <tr>
                                <td>Notification Service</td>
                                <td>Delivery Rate</td>
                                <td>99.5%</td>
                                <td>99.3%</td>
                                <td>62.5%</td>
                                <td><span class="badge badge-warning">At Risk</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="content-grid mt-3">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Error Budget Burn Rate</h3>
                    <span class="badge badge-success">Healthy</span>
                </div>
                <div class="card-body">
                    <div class="chart-container">
                        <canvas id="error-budget-chart"></canvas>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">SLO Compliance Trend</h3>
                    <span class="badge badge-info">Last 7 days</span>
                </div>
                <div class="card-body">
                    <div class="chart-container">
                        <canvas id="slo-compliance-chart"></canvas>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header">
                <h3 class="card-title">Deployment Gates</h3>
            </div>
            <div class="card-body">
                <p class="text-secondary mb-2">Automated deployment control based on error budget consumption</p>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Gate Policy</th>
                                <th>Error Budget</th>
                                <th>Deployments (7d)</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Payment Service</td>
                                <td>Budget > 80%</td>
                                <td>98.1%</td>
                                <td>12 allowed</td>
                                <td><span class="badge badge-success">Open</span></td>
                            </tr>
                            <tr>
                                <td>User Service</td>
                                <td>Budget > 80%</td>
                                <td>94.3%</td>
                                <td>8 allowed</td>
                                <td><span class="badge badge-success">Open</span></td>
                            </tr>
                            <tr>
                                <td>Notification Service</td>
                                <td>Budget > 80%</td>
                                <td>62.5%</td>
                                <td>2 blocked</td>
                                <td><span class="badge badge-danger">Blocked</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function initSLOSLICharts() {
    // Error Budget Chart
    createLineChart('error-budget-chart',
        'Error Budget %',
        generateTimeSeriesData(14, 88, 98),
        ['#06ffa5', '#00d4ff']
    );

    // SLO Compliance Chart
    createLineChart('slo-compliance-chart',
        'Compliance %',
        generateTimeSeriesData(7, 95, 100),
        ['#00d4ff', '#7b2cbf']
    );
}
