// ==========================================
// INCIDENT MANAGEMENT & WAR ROOM MODULE
// Real-time incident tracking and automation
// ============================================

function renderIncidents() {
    return `
        <div class="module-header">
            <h2 class="module-title">Incident War Room</h2>
            <p class="module-description">Real-time incident management, auto-ticketing, and post-mortem automation</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Active Incidents</span>
                    <span class="stat-icon">🚨</span>
                </div>
                <div class="stat-value">2</div>
                <div class="stat-change positive">
                    <span>↓ 5</span>
                    <span>vs yesterday</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">MTTR (Mean Time to Resolve)</span>
                    <span class="stat-icon">⏱️</span>
                </div>
                <div class="stat-value">18m</div>
                <div class="stat-change positive">
                    <span>↓ 22%</span>
                    <span>improved</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Incidents (30d)</span>
                    <span class="stat-icon">📊</span>
                </div>
                <div class="stat-value">47</div>
                <div class="stat-change positive">
                    <span>↓ 35%</span>
                    <span>reduction</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Auto-Resolved</span>
                    <span class="stat-icon">🤖</span>
                </div>
                <div class="stat-value">72%</div>
                <div class="stat-change positive">
                    <span>Automated</span>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Active Incidents</h3>
                <button class="btn btn-danger" onclick="createIncident()">
                    <span>🚨 Create Incident</span>
                </button>
            </div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Severity</th>
                                <th>Service</th>
                                <th>Started</th>
                                <th>Duration</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#INC-2847</td>
                                <td>High latency on Payment API</td>
                                <td><span class="badge badge-warning">P2-High</span></td>
                                <td>Payment Service</td>
                                <td>12 min ago</td>
                                <td>12m</td>
                                <td><span class="badge badge-warning">Investigating</span></td>
                                <td><button class="btn btn-secondary" onclick="showNotification('Incident', 'Opening incident details', 'info')">View</button></td>
                            </tr>
                            <tr>
                                <td>#INC-2846</td>
                                <td>Database connection pool exhaustion</td>
                                <td><span class="badge badge-danger">P1-Critical</span></td>
                                <td>User Service</td>
                                <td>8 min ago</td>
                                <td>8m</td>
                                <td><span class="badge badge-info">Mitigating</span></td>
                                <td><button class="btn btn-secondary" onclick="showNotification('Incident', 'Opening incident details', 'info')">View</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="content-grid mt-3">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Incidents by Severity</h3>
                    <span class="badge badge-info">Last 30 days</span>
                </div>
                <div class="card-body">
                    <div class="chart-container">
                        <canvas id="incident-severity-chart"></canvas>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">MTTR Trend</h3>
                    <span class="badge badge-success">Improving</span>
                </div>
                <div class="card-body">
                    <div class="chart-container">
                        <canvas id="mttr-trend-chart"></canvas>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header">
                <h3 class="card-title">Incident Timeline</h3>
            </div>
            <div class="card-body">
                <div style="display: grid; gap: 1rem;">
                    ${renderTimelineEvent('19:15:34', 'DETECTED', 'Anomaly detected: Payment API latency spike', 'warning')}
                    ${renderTimelineEvent('19:15:42', 'ALERT', 'PagerDuty notification sent to on-call engineer', 'info')}
                    ${renderTimelineEvent('19:15:58', 'ACKNOWLEDGED', 'Incident acknowledged by John Doe', 'info')}
                    ${renderTimelineEvent('19:16:12', 'INVESTIGATING', 'Log analysis initiated - checking deployment history', 'info')}
                    ${renderTimelineEvent('19:16:45', 'ACTION', 'Auto-scaling triggered: +3 instances', 'success')}
                    ${renderTimelineEvent('19:17:23', 'MONITORING', 'Latency returning to normal levels', 'success')}
                </div>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header">
                <h3 class="card-title">ChatOps / Auto-Ticketing</h3>
            </div>
            <div class="card-body">
                <div style="background: var(--bg-tertiary); border-radius: 12px; padding: 1.5rem; font-family: var(--font-mono); font-size: 0.875rem;">
                    <div style="display: grid; gap: 1rem;">
                        <div style="display: flex; gap: 1rem;">
                            <span style="color: var(--text-muted);">19:15:34</span>
                            <span style="color: #ef233c; font-weight: 600;">🤖 ReliabilityBot:</span>
                            <span>🚨 <strong>P1 Incident Detected</strong> - Payment API latency > 2000ms</span>
                        </div>
                        <div style="display: flex; gap: 1rem;">
                            <span style="color: var(--text-muted);">19:15:42</span>
                            <span style="color: #4cc9f0; font-weight: 600;">📬 Slack:</span>
                            <span>Notification sent to #incidents channel</span>
                        </div>
                        <div style="display: flex; gap: 1rem;">
                            <span style="color: var(--text-muted);">19:15:48</span>
                            <span style="color: #ffba08; font-weight: 600;">🎫 Jira:</span>
                            <span>Ticket INC-2846 created automatically</span>
                        </div>
                        <div style="display: flex; gap: 1rem;">
                            <span style="color: var(--text-muted);">19:15:58</span>
                            <span style="color: #06ffa5; font-weight: 600;">👤 @johndoe:</span>
                            <span>/incident acknowledge INC-2846</span>
                        </div>
                        <div style="display: flex; gap: 1rem;">
                            <span style="color: var(--text-muted);">19:16:12</span>
                            <span style="color: #ef233c; font-weight: 600;">🤖 ReliabilityBot:</span>
                            <span>Running diagnostics... Deployment identified: v2.4.1 (10 min ago)</span>
                        </div>
                        <div style="display: flex; gap: 1rem;">
                            <span style="color: var(--text-muted);">19:16:45</span>
                            <span style="color: #ef233c; font-weight: 600;">🤖 ReliabilityBot:</span>
                            <span>✅ Auto-scaling executed: +3 instances deployed</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header">
                <h3 class="card-title">Recent Incidents & Post-Mortems</h3>
                <button class="btn btn-primary" onclick="showNotification('Post-Mortem', 'Generating post-mortem report', 'info')">
                    <span>📝 Generate Post-Mortem</span>
                </button>
            </div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Severity</th>
                                <th>Resolved</th>
                                <th>Duration</th>
                                <th>Root Cause</th>
                                <th>Post-Mortem</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#INC-2845</td>
                                <td>Service mesh circuit breaker triggered</td>
                                <td><span class="badge badge-warning">P2-High</span></td>
                                <td>2 hours ago</td>
                                <td>15m</td>
                                <td>Database replica lag</td>
                                <td><span class="badge badge-success">Complete</span></td>
                            </tr>
                            <tr>
                                <td>#INC-2844</td>
                                <td>Multi-region failover event</td>
                                <td><span class="badge badge-danger">P1-Critical</span></td>
                                <td>8 hours ago</td>
                                <td>3m 24s</td>
                                <td>AWS region degradation</td>
                                <td><span class="badge badge-success">Complete</span></td>
                            </tr>
                            <tr>
                                <td>#INC-2843</td>
                                <td>Cache invalidation storm</td>
                                <td><span class="badge badge-warning">P2-High</span></td>
                                <td>1 day ago</td>
                                <td>28m</td>
                                <td>Code deployment bug</td>
                                <td><span class="badge badge-success">Complete</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function renderTimelineEvent(time, type, message, badge) {
    const icons = {
        'DETECTED': '🔍',
        'ALERT': '🔔',
        'ACKNOWLEDGED': '✋',
        'INVESTIGATING': '🔬',
        'ACTION': '⚡',
        'MONITORING': '📊',
        'RESOLVED': '✅'
    };

    return `
        <div style="display: flex; gap: 1rem; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px; border-left: 3px solid var(--primary);">
            <div style="min-width: 80px; font-family: var(--font-mono); font-size: 0.875rem; color: var(--text-muted);">${time}</div>
            <div style="flex: 1;">
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
                    <span>${icons[type] || '📌'}</span>
                    <span class="badge badge-${badge}">${type}</span>
                </div>
                <div style="color: var(--text-secondary);">${message}</div>
            </div>
        </div>
    `;
}

function initIncidentCharts() {
    // Incident Severity
    createDoughnutChart('incident-severity-chart',
        ['P1-Critical', 'P2-High', 'P3-Medium', 'P4-Low'],
        [8, 15, 18, 6],
        ['#ef233c', '#ffba08', '#4cc9f0', '#06ffa5']
    );

    // MTTR Trend
    createLineChart('mttr-trend-chart',
        'Minutes',
        {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            values: [28, 24, 21, 18]
        },
        ['#00d4ff', '#7b2cbf']
    );
}

function createIncident() {
    showNotification(
        'Incident Created',
        'New incident #INC-2848 created and assigned to on-call engineer',
        'warning'
    );
}
