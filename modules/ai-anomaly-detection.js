// ============================================
// AI-DRIVEN ANOMALY DETECTION MODULE
// ML-based monitoring and predictive analytics
// ============================================

function renderAIAnomaly() {
    return `
        <div class="module-header">
            <h2 class="module-title">AI-Driven Anomaly Detection</h2>
            <p class="module-description">Machine learning powered monitoring with predictive analytics and intelligent alerting</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Anomalies Detected (24h)</span>
                    <span class="stat-icon">🔍</span>
                </div>
                <div class="stat-value">3</div>
                <div class="stat-change positive">
                    <span>↓ 87%</span>
                    <span>vs previous day</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Prediction Accuracy</span>
                    <span class="stat-icon">🎯</span>
                </div>
                <div class="stat-value">98.7%</div>
                <div class="stat-change positive">
                    <span>↑ 2.1%</span>
                    <span>this week</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Active ML Models</span>
                    <span class="stat-icon">🤖</span>
                </div>
                <div class="stat-value">7</div>
                <div class="stat-change positive">
                    <span>All healthy</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">False Positive Rate</span>
                    <span class="stat-icon">📊</span>
                </div>
                <div class="stat-value">0.3%</div>
                <div class="stat-change positive">
                    <span>↓ 0.5%</span>
                    <span>improved</span>
                </div>
            </div>
        </div>

        <div class="content-grid">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">CPU Spike Prediction</h3>
                    <span class="badge badge-danger">ML Forecast</span>
                </div>
                <div class="card-body">
                    <div class="chart-container">
                        <canvas id="cpu-spike-prediction-chart"></canvas>
                    </div>
                    <div class="mt-2 text-sm text-muted">
                        AI predicts a 85% probability of a CPU spike in the next 15 minutes for the <code>payment-api</code> cluster.
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Memory Leak Detection</h3>
                    <span class="badge badge-warning">Pattern Analysis</span>
                </div>
                <div class="card-body">
                    <div class="chart-container">
                        <canvas id="memory-leak-detection-chart"></canvas>
                    </div>
                    <div class="mt-2 text-sm text-muted">
                        Steady heap growth detected in <code>auth-service</code>. Estimated crash time: 2.5 hours.
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Latency Spike Prediction</h3>
                    <span class="badge badge-success">Lookout for Metrics</span>
                </div>
                <div class="card-body">
                    <div class="chart-container">
                        <canvas id="latency-prediction-chart"></canvas>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Response Time Degradation</h3>
                    <span class="badge badge-warning">Monitoring</span>
                </div>
                <div class="card-body">
                    <div class="chart-container">
                        <canvas id="response-degradation-chart"></canvas>
                    </div>
                </div>
            </div>
        </div>


        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Active Anomaly Detection Models</h3>
                <button class="btn btn-primary" onclick="showNotification('Model Training', 'Initiating new model training cycle', 'success')">
                    <span>🔄 Retrain Models</span>
                </button>
            </div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Model Name</th>
                                <th>Type</th>
                                <th>Accuracy</th>
                                <th>Last Updated</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Latency Predictor</td>
                                <td>LSTM Neural Network</td>
                                <td>99.2%</td>
                                <td>2 hours ago</td>
                                <td><span class="badge badge-success">Active</span></td>
                            </tr>
                            <tr>
                                <td>Error Rate Detector</td>
                                <td>Random Forest</td>
                                <td>97.8%</td>
                                <td>4 hours ago</td>
                                <td><span class="badge badge-success">Active</span></td>
                            </tr>
                            <tr>
                                <td>Traffic Pattern Analyzer</td>
                                <td>Isolation Forest</td>
                                <td>98.5%</td>
                                <td>1 hour ago</td>
                                <td><span class="badge badge-success">Active</span></td>
                            </tr>
                            <tr>
                                <td>Resource Consumption</td>
                                <td>Auto-Encoder</td>
                                <td>96.3%</td>
                                <td>30 min ago</td>
                                <td><span class="badge badge-success">Active</span></td>
                            </tr>
                            <tr>
                                <td>Database Query Performance</td>
                                <td>Gradient Boosting</td>
                                <td>98.9%</td>
                                <td>15 min ago</td>
                                <td><span class="badge badge-success">Active</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header">
                <h3 class="card-title">Recent Anomalies</h3>
            </div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Timestamp</th>
                                <th>Service</th>
                                <th>Anomaly Type</th>
                                <th>Severity</th>
                                <th>Action Taken</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>18:45:22</td>
                                <td>Payment API</td>
                                <td>Response time spike</td>
                                <td><span class="badge badge-warning">Medium</span></td>
                                <td>Auto-scaled</td>
                            </tr>
                            <tr>
                                <td>17:32:15</td>
                                <td>User Service</td>
                                <td>Error rate increase</td>
                                <td><span class="badge badge-danger">High</span></td>
                                <td>Rollback initiated</td>
                            </tr>
                            <tr>
                                <td>16:20:08</td>
                                <td>Database</td>
                                <td>Query performance</td>
                                <td><span class="badge badge-info">Low</span></td>
                                <td>Index optimized</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function initAIAnomalyCharts() {
    // CPU Spike Prediction Chart
    createLineChart('cpu-spike-prediction-chart',
        'CPU Utilization (%)',
        generateTimeSeriesData(15, 40, 95),
        ['#ef233c', '#d90429']
    );

    // Memory Leak Detection Chart
    createLineChart('memory-leak-detection-chart',
        'Memory Usage (GB)',
        generateTimeSeriesData(15, 2, 8),
        ['#ffba08', '#faa307']
    );

    // Latency Prediction Chart
    createLineChart('latency-prediction-chart',
        'Predicted Latency (ms)',
        generateTimeSeriesData(15, 80, 200),
        ['#00d4ff', '#7b2cbf']
    );

    // Response Degradation Chart
    createLineChart('response-degradation-chart',
        'Response Time Trend',
        generateTimeSeriesData(15, 100, 250),
        ['#ffba08', '#ef233c']
    );
}

