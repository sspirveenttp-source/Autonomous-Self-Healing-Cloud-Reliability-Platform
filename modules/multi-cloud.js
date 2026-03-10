// ============================================
// MULTI-CLOUD DEPLOYMENT MODULE
// AWS, GCP, Azure orchestration
// ============================================

function renderMultiCloud() {
    return `
        <div class="module-header">
            <h2 class="module-title">Multi-Cloud Deployment</h2>
            <p class="module-description">Cross-cloud orchestration, auto-failover, and global infrastructure management</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Active Cloud Providers</span>
                    <span class="stat-icon">☁️</span>
                </div>
                <div class="stat-value">3</div>
                <div class="stat-change positive">
                    <span>AWS, GCP, Azure</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Global Regions</span>
                    <span class="stat-icon">🌍</span>
                </div>
                <div class="stat-value">12</div>
                <div class="stat-change positive">
                    <span>All operational</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Failover Tests (30d)</span>
                    <span class="stat-icon">🔄</span>
                </div>
                <div class="stat-value">15</div>
                <div class="stat-change positive">
                    <span>100% success</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Data Replication Lag</span>
                    <span class="stat-icon">⚡</span>
                </div>
                <div class="stat-value">42ms</div>
                <div class="stat-change positive">
                    <span>Excellent</span>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Cloud Provider Distribution</h3>
            </div>
            <div class="card-body">
                <div class="content-grid">
                    <div style="background: var(--bg-tertiary); border-radius: 12px; padding: 1.5rem; text-align: center; border: 2px solid #FF9900;">
                        <div style="font-size: 3rem; margin-bottom: 0.5rem;">🔶</div>
                        <h4 style="margin-bottom: 0.5rem;">Amazon Web Services</h4>
                        <div style="font-size: 2rem; font-weight: 700; color: #FF9900; margin: 1rem 0;">45%</div>
                        <div style="display: grid; gap: 0.5rem; text-align: left; margin-top: 1rem;">
                            <div style="display: flex; justify-content: space-between; font-size: 0.875rem;">
                                <span>Regions:</span>
                                <span style="color: var(--text-primary); font-weight: 600;">5</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; font-size: 0.875rem;">
                                <span>Instances:</span>
                                <span style="color: var(--text-primary); font-weight: 600;">127</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; font-size: 0.875rem;">
                                <span>Cost/mo:</span>
                                <span style="color: var(--text-primary); font-weight: 600;">$5,580</span>
                            </div>
                        </div>
                    </div>

                    <div style="background: var(--bg-tertiary); border-radius: 12px; padding: 1.5rem; text-align: center; border: 2px solid #4285F4;">
                        <div style="font-size: 3rem; margin-bottom: 0.5rem;">☁️</div>
                        <h4 style="margin-bottom: 0.5rem;">Google Cloud Platform</h4>
                        <div style="font-size: 2rem; font-weight: 700; color: #4285F4; margin: 1rem 0;">32%</div>
                        <div style="display: grid; gap: 0.5rem; text-align: left; margin-top: 1rem;">
                            <div style="display: flex; justify-content: space-between; font-size: 0.875rem;">
                                <span>Regions:</span>
                                <span style="color: var(--text-primary); font-weight: 600;">4</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; font-size: 0.875rem;">
                                <span>Instances:</span>
                                <span style="color: var(--text-primary); font-weight: 600;">91</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; font-size: 0.875rem;">
                                <span>Cost/mo:</span>
                                <span style="color: var(--text-primary); font-weight: 600;">$3,968</span>
                            </div>
                        </div>
                    </div>

                    <div style="background: var(--bg-tertiary); border-radius: 12px; padding: 1.5rem; text-align: center; border: 2px solid #0089D6;">
                        <div style="font-size: 3rem; margin-bottom: 0.5rem;">🪟</div>
                        <h4 style="margin-bottom: 0.5rem;">Microsoft Azure</h4>
                        <div style="font-size: 2rem; font-weight: 700; color: #0089D6; margin: 1rem 0;">23%</div>
                        <div style="display: grid; gap: 0.5rem; text-align: left; margin-top: 1rem;">
                            <div style="display: flex; justify-content: space-between; font-size: 0.875rem;">
                                <span>Regions:</span>
                                <span style="color: var(--text-primary); font-weight: 600;">3</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; font-size: 0.875rem;">
                                <span>Instances:</span>
                                <span style="color: var(--text-primary); font-weight: 600;">65</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; font-size: 0.875rem;">
                                <span>Cost/mo:</span>
                                <span style="color: var(--text-primary); font-weight: 600;">$2,852</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="content-grid mt-3">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Cross-Cloud Traffic</h3>
                    <span class="badge badge-info">Real-time</span>
                </div>
                <div class="card-body">
                    <div class="chart-container">
                        <canvas id="cross-cloud-traffic-chart"></canvas>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Failover Response Time</h3>
                    <span class="badge badge-success">< 3s avg</span>
                </div>
                <div class="card-body">
                    <div class="chart-container">
                        <canvas id="failover-time-chart"></canvas>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header">
                <h3 class="card-title">Regional Deployments</h3>
                <button class="btn btn-primary" onclick="showNotification('Deployment', 'Initiating multi-cloud deployment across all regions', 'info')">
                    <span>🚀 Deploy Globally</span>
                </button>
            </div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Region</th>
                                <th>Cloud Provider</th>
                                <th>Status</th>
                                <th>Instances</th>
                                <th>Traffic %</th>
                                <th>Health</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>us-east-1</td>
                                <td>AWS</td>
                                <td><span class="badge badge-success">Active</span></td>
                                <td>42</td>
                                <td>28%</td>
                                <td><span class="badge badge-success">Healthy</span></td>
                            </tr>
                            <tr>
                                <td>us-west-2</td>
                                <td>AWS</td>
                                <td><span class="badge badge-success">Active</span></td>
                                <td>38</td>
                                <td>22%</td>
                                <td><span class="badge badge-success">Healthy</span></td>
                            </tr>
                            <tr>
                                <td>europe-west1</td>
                                <td>GCP</td>
                                <td><span class="badge badge-success">Active</span></td>
                                <td>35</td>
                                <td>18%</td>
                                <td><span class="badge badge-success">Healthy</span></td>
                            </tr>
                            <tr>
                                <td>asia-south1</td>
                                <td>GCP</td>
                                <td><span class="badge badge-success">Active</span></td>
                                <td>31</td>
                                <td>15%</td>
                                <td><span class="badge badge-success">Healthy</span></td>
                            </tr>
                            <tr>
                                <td>westeurope</td>
                                <td>Azure</td>
                                <td><span class="badge badge-success">Active</span></td>
                                <td>28</td>
                                <td>12%</td>
                                <td><span class="badge badge-success">Healthy</span></td>
                            </tr>
                            <tr>
                                <td>centralindia</td>
                                <td>Azure</td>
                                <td><span class="badge badge-success">Active</span></td>
                                <td>9</td>
                                <td>5%</td>
                                <td><span class="badge badge-success">Healthy</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function initMultiCloudCharts() {
    // Cross-Cloud Traffic
    createLineChart('cross-cloud-traffic-chart',
        'Requests/sec',
        generateTimeSeriesData(15, 800, 1500),
        ['#00d4ff', '#7b2cbf']
    );

    // Failover Time
    createBarChart('failover-time-chart',
        ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5'],
        [2.1, 2.8, 1.9, 2.4, 2.6],
        '#06ffa5'
    );
}
