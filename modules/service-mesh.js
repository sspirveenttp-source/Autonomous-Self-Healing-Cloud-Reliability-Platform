// ============================================
// SERVICE MESH MODULE
// Circuit breakers, traffic management, resilience
// ============================================

function renderServiceMesh() {
    return `
        <div class="module-header">
            <h2 class="module-title">Service Mesh Resilience</h2>
            <p class="module-description">Circuit breakers, intelligent routing, traffic splitting, and inter-service observability</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Services in Mesh</span>
                    <span class="stat-icon">🕸️</span>
                </div>
                <div class="stat-value">24</div>
                <div class="stat-change positive">
                    <span>All connected</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Active Circuit Breakers</span>
                    <span class="stat-icon">⚡</span>
                </div>
                <div class="stat-value">18</div>
                <div class="stat-change positive">
                    <span>3 triggered today</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Traffic Split Tests</span>
                    <span class="stat-icon">🔀</span>
                </div>
                <div class="stat-value">5</div>
                <div class="stat-change positive">
                    <span>Active A/B tests</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Retry Success Rate</span>
                    <span class="stat-icon">🔄</span>
                </div>
                <div class="stat-value">94.3%</div>
                <div class="stat-change positive">
                    <span>Optimized</span>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Service Mesh Architecture</h3>
                <span class="badge badge-info">AWS App Mesh / Istio</span>
            </div>
            <div class="card-body">
                <p class="text-secondary mb-3">Visual representation of inter-service communication and resilience patterns</p>
                <div style="background: var(--bg-tertiary); border-radius: 12px; padding: 2rem; text-align: center;">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1.5rem;">
                        <div style="padding: 1rem; background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border-color);">
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">🌐</div>
                            <div style="font-weight: 600;">API Gateway</div>
                            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">Entry Point</div>
                        </div>
                        <div style="padding: 1rem; background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border-color);">
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">👤</div>
                            <div style="font-weight: 600;">User Service</div>
                            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">Circuit Breaker</div>
                        </div>
                        <div style="padding: 1rem; background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border-color);">
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">💳</div>
                            <div style="font-weight: 600;">Payment Service</div>
                            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">Retry Policy</div>
                        </div>
                        <div style="padding: 1rem; background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border-color);">
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">🗄️</div>
                            <div style="font-weight: 600;">Database</div>
                            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">Connection Pool</div>
                        </div>
                        <div style="padding: 1rem; background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border-color);">
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">📧</div>
                            <div style="font-weight: 600;">Notification</div>
                            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">Timeout 5s</div>
                        </div>
                        <div style="padding: 1rem; background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border-color);">
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">📊</div>
                            <div style="font-weight: 600;">Analytics</div>
                            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">Traffic Split</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="content-grid mt-3">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Circuit Breaker Activity</h3>
                    <span class="badge badge-success">3 Active</span>
                </div>
                <div class="card-body">
                    <div class="chart-container">
                        <canvas id="circuit-breaker-chart"></canvas>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Request Success Rate</h3>
                    <span class="badge badge-success">99.6%</span>
                </div>
                <div class="card-body">
                    <div class="chart-container">
                        <canvas id="request-success-chart"></canvas>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header">
                <h3 class="card-title">Traffic Splitting Configuration</h3>
                <button class="btn btn-primary" onclick="showNotification('Traffic Split', 'Deploying canary release with 10% traffic', 'info')">
                    <span>🚀 Deploy Canary</span>
                </button>
            </div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Version A</th>
                                <th>Version B</th>
                                <th>Split Ratio</th>
                                <th>Duration</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Payment API</td>
                                <td>v2.3.0</td>
                                <td>v2.4.0</td>
                                <td>90% / 10%</td>
                                <td>2 hours</td>
                                <td><span class="badge badge-info">Active</span></td>
                            </tr>
                            <tr>
                                <td>User Service</td>
                                <td>v1.8.2</td>
                                <td>v1.9.0</td>
                                <td>50% / 50%</td>
                                <td>6 hours</td>
                                <td><span class="badge badge-info">Active</span></td>
                            </tr>
                            <tr>
                                <td>Analytics</td>
                                <td>v3.1.0</td>
                                <td>v3.2.0-beta</td>
                                <td>95% / 5%</td>
                                <td>1 hour</td>
                                <td><span class="badge badge-info">Active</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header">
                <h3 class="card-title">Resilience Policies</h3>
            </div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Retry Policy</th>
                                <th>Timeout</th>
                                <th>Circuit Breaker</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Payment API</td>
                                <td>3 retries, exponential</td>
                                <td>3s</td>
                                <td>5 failures in 30s</td>
                                <td><span class="badge badge-success">Active</span></td>
                            </tr>
                            <tr>
                                <td>User Service</td>
                                <td>2 retries, linear</td>
                                <td>5s</td>
                                <td>10 failures in 1m</td>
                                <td><span class="badge badge-success">Active</span></td>
                            </tr>
                            <tr>
                                <td>Notification</td>
                                <td>5 retries, exponential</td>
                                <td>10s</td>
                                <td>15 failures in 2m</td>
                                <td><span class="badge badge-warning">Triggered</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function initServiceMeshCharts() {
    // Circuit Breaker Activity
    createBarChart('circuit-breaker-chart',
        ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        [5, 3, 7, 2, 4, 1, 3],
        '#ffba08'
    );

    // Request Success Rate
    createLineChart('request-success-chart',
        'Success Rate %',
        generateTimeSeriesData(15, 98, 100),
        ['#06ffa5', '#00d4ff']
    );
}
