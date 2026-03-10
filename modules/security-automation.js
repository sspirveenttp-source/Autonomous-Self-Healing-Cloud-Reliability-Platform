// ============================================
// SECURITY AUTOMATION MODULE
// IAM, OPA, CIS benchmarks
// ============================================

function renderSecurity() {
    return `
        <div class="module-header">
            <h2 class="module-title">Security Automation</h2>
            <p class="module-description">Policy-driven security, IAM automation, and compliance enforcement</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Security Posture</span>
                    <span class="stat-icon">🔒</span>
                </div>
                <div class="stat-value">92/100</div>
                <div class="stat-change positive">
                    <span>Strong</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Policy Violations</span>
                    <span class="stat-icon">⚠️</span>
                </div>
                <div class="stat-value">3</div>
                <div class="stat-change positive">
                    <span>↓ 12</span>
                    <span>vs yesterday</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Auto-Remediated</span>
                    <span class="stat-icon">🔧</span>
                </div>
                <div class="stat-value">28</div>
                <div class="stat-change positive">
                    <span>Today</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">CIS Compliance</span>
                    <span class="stat-icon">✅</span>
                </div>
                <div class="stat-value">96.4%</div>
                <div class="stat-change positive">
                    <span>Excellent</span>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Security Score Breakdown</h3>
            </div>
            <div class="card-body">
                <div class="chart-container">
                    <canvas id="security-score-chart"></canvas>
                </div>
            </div>
        </div>

        <div class="content-grid mt-3">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">IAM Automation Status</h3>
                    <span class="badge badge-success">Active</span>
                </div>
                <div class="card-body">
                    <div style="display: grid; gap: 1rem;">
                        <div style="display: flex; justify-content: space-between; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px;">
                            <div>
                                <div style="font-weight: 600;">Least Privilege Enforcement</div>
                                <div style="font-size: 0.875rem; color: var(--text-muted);">Automated permission review</div>
                            </div>
                            <span class="badge badge-success">Enabled</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px;">
                            <div>
                                <div style="font-weight: 600;">Role Rotation</div>
                                <div style="font-size: 0.875rem; color: var(--text-muted);">90-day auto rotation</div>
                            </div>
                            <span class="badge badge-success">Enabled</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px;">
                            <div>
                                <div style="font-weight: 600;">MFA Enforcement</div>
                                <div style="font-size: 0.875rem; color: var(--text-muted);">All privileged accounts</div>
                            </div>
                            <span class="badge badge-success">Enabled</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px;">
                            <div>
                                <div style="font-weight: 600;">Access Key Expiry</div>
                                <div style="font-size: 0.875rem; color: var(--text-muted);">Auto-disable after 90 days</div>
                            </div>
                            <span class="badge badge-success">Enabled</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">OPA Policy Enforcement</h3>
                    <span class="badge badge-info">Gatekeeper</span>
                </div>
                <div class="card-body">
                    <div style="display: grid; gap: 1rem;">
                        <div style="display: flex; justify-content: space-between; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px;">
                            <div>
                                <div style="font-weight: 600;">Container Image Policy</div>
                                <div style="font-size: 0.875rem; color: var(--text-muted);">Only trusted registries</div>
                            </div>
                            <span class="badge badge-success">Active</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px;">
                            <div>
                                <div style="font-weight: 600;">Resource Limits</div>
                                <div style="font-size: 0.875rem; color: var(--text-muted);">CPU/Memory required</div>
                            </div>
                            <span class="badge badge-success">Active</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px;">
                            <div>
                                <div style="font-weight: 600;">Network Policies</div>
                                <div style="font-size: 0.875rem; color: var(--text-muted);">Namespace isolation</div>
                            </div>
                            <span class="badge badge-success">Active</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px;">
                            <div>
                                <div style="font-weight: 600;">Pod Security Standards</div>
                                <div style="font-size: 0.875rem; color: var(--text-muted);">No privileged containers</div>
                            </div>
                            <span class="badge badge-success">Active</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header">
                <h3 class="card-title">CIS Benchmark Compliance</h3>
                <button class="btn btn-primary" onclick="showNotification('Security Scan', 'Running CIS benchmark validation', 'info')">
                    <span>🔍 Run Scan</span>
                </button>
            </div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Controls</th>
                                <th>Passed</th>
                                <th>Failed</th>
                                <th>Compliance</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Identity & Access</td>
                                <td>42</td>
                                <td>41</td>
                                <td>1</td>
                                <td>97.6%</td>
                                <td><span class="badge badge-success">Pass</span></td>
                            </tr>
                            <tr>
                                <td>Logging & Monitoring</td>
                                <td>28</td>
                                <td>28</td>
                                <td>0</td>
                                <td>100%</td>
                                <td><span class="badge badge-success">Pass</span></td>
                            </tr>
                            <tr>
                                <td>Network Security</td>
                                <td>35</td>
                                <td>33</td>
                                <td>2</td>
                                <td>94.3%</td>
                                <td><span class="badge badge-success">Pass</span></td>
                            </tr>
                            <tr>
                                <td>Data Protection</td>
                                <td>24</td>
                                <td>24</td>
                                <td>0</td>
                                <td>100%</td>
                                <td><span class="badge badge-success">Pass</span></td>
                            </tr>
                            <tr>
                                <td>Compute Security</td>
                                <td>31</td>
                                <td>29</td>
                                <td>2</td>
                                <td>93.5%</td>
                                <td><span class="badge badge-warning">Warning</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header">
                <h3 class="card-title">Recent Security Events</h3>
            </div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Timestamp</th>
                                <th>Event Type</th>
                                <th>Resource</th>
                                <th>Severity</th>
                                <th>Action Taken</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>19:12:34</td>
                                <td>Unauthorized access attempt</td>
                                <td>API Gateway</td>
                                <td><span class="badge badge-danger">High</span></td>
                                <td>Blocked & logged</td>
                            </tr>
                            <tr>
                                <td>18:45:21</td>
                                <td>Policy violation</td>
                                <td>S3 Bucket</td>
                                <td><span class="badge badge-warning">Medium</span></td>
                                <td>Auto-remediated</td>
                            </tr>
                            <tr>
                                <td>17:30:12</td>
                                <td>Expired access key detected</td>
                                <td>IAM User</td>
                                <td><span class="badge badge-warning">Medium</span></td>
                                <td>Key rotated</td>
                            </tr>
                            <tr>
                                <td>16:15:45</td>
                                <td>Privileged container detected</td>
                                <td>EKS Pod</td>
                                <td><span class="badge badge-danger">High</span></td>
                                <td>Pod terminated</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function initSecurityCharts() {
    // Security Score Radar Chart
    createRadarChart('security-score-chart',
        ['IAM', 'Network', 'Data', 'Compute', 'Logging', 'Compliance'],
        [98, 92, 95, 88, 100, 94],
        '#00d4ff'
    );
}
