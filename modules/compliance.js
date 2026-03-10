// ============================================
// COMPLIANCE MODULE
// ISO, GDPR, SOC 2 compliance tracking
// ============================================

function renderCompliance() {
    return `
        <div class="module-header">
            <h2 class="module-title">Compliance Dashboard</h2>
            <p class="module-description">Automated compliance tracking, audit preparation, and regulatory readiness</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">ISO 27001</span>
                    <span class="stat-icon">🏆</span>
                </div>
                <div class="stat-value">94.2%</div>
                <div class="stat-change positive">
                    <span>Ready</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">GDPR Compliance</span>
                    <span class="stat-icon">🇪🇺</span>
                </div>
                <div class="stat-value">97.8%</div>
                <div class="stat-change positive">
                    <span>Compliant</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">SOC 2 Type II</span>
                    <span class="stat-icon">✅</span>
                </div>
                <div class="stat-value">92.5%</div>
                <div class="stat-change positive">
                    <span>On track</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Audit Readiness</span>
                    <span class="stat-icon">📋</span>
                </div>
                <div class="stat-value">96%</div>
                <div class="stat-change positive">
                    <span>Excellent</span>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Compliance Framework Scores</h3>
            </div>
            <div class="card-body">
                <div class="chart-container">
                    <canvas id="compliance-scores-chart"></canvas>
                </div>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header">
                <h3 class="card-title">ISO 27001 Control Status</h3>
                <button class="btn btn-primary" onclick="showNotification('Audit Export', 'Generating ISO 27001 compliance report', 'info')">
                    <span>📄 Export Report</span>
                </button>
            </div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Control Domain</th>
                                <th>Total Controls</th>
                                <th>Implemented</th>
                                <th>In Progress</th>
                                <th>Compliance</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Information Security Policies</td>
                                <td>12</td>
                                <td>12</td>
                                <td>0</td>
                                <td>100%</td>
                                <td><span class="badge badge-success">Complete</span></td>
                            </tr>
                            <tr>
                                <td>Access Control</td>
                                <td>24</td>
                                <td>23</td>
                                <td>1</td>
                                <td>95.8%</td>
                                <td><span class="badge badge-success">On Track</span></td>
                            </tr>
                            <tr>
                                <td>Cryptography</td>
                                <td>8</td>
                                <td>8</td>
                                <td>0</td>
                                <td>100%</td>
                                <td><span class="badge badge-success">Complete</span></td>
                            </tr>
                            <tr>
                                <td>Physical Security</td>
                                <td>15</td>
                                <td>14</td>
                                <td>1</td>
                                <td>93.3%</td>
                                <td><span class="badge badge-success">On Track</span></td>
                            </tr>
                            <tr>
                                <td>Operations Security</td>
                                <td>18</td>
                                <td>16</td>
                                <td>2</td>
                                <td>88.9%</td>
                                <td><span class="badge badge-warning">In Progress</span></td>
                            </tr>
                            <tr>
                                <td>Communications Security</td>
                                <td>10</td>
                                <td>10</td>
                                <td>0</td>
                                <td>100%</td>
                                <td><span class="badge badge-success">Complete</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header">
                <h3 class="card-title">GDPR Data Protection</h3>
            </div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
                    <div style="padding: 1.5rem; background: var(--bg-tertiary); border-radius: 12px; border: 1px solid var(--border-color);">
                        <h4 style="margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📝</span> Data Processing Records
                        </h4>
                        <div style="font-size: 2rem; font-weight: 700; color: var(--primary); margin-bottom: 0.5rem;">127</div>
                        <div style="font-size: 0.875rem; color: var(--text-muted);">Documented processing activities</div>
                        <div style="margin-top: 1rem;">
                            <span class="badge badge-success">100% Documented</span>
                        </div>
                    </div>

                    <div style="padding: 1.5rem; background: var(--bg-tertiary); border-radius: 12px; border: 1px solid var(--border-color);">
                        <h4 style="margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                            <span>👤</span> Data Subject Rights
                        </h4>
                        <div style="font-size: 2rem; font-weight: 700; color: var(--primary); margin-bottom: 0.5rem;">< 24h</div>
                        <div style="font-size: 0.875rem; color: var(--text-muted);">Average response time</div>
                        <div style="margin-top: 1rem;">
                            <span class="badge badge-success">Compliant</span>
                        </div>
                    </div>

                    <div style="padding: 1.5rem; background: var(--bg-tertiary); border-radius: 12px; border: 1px solid var(--border-color);">
                        <h4 style="margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                            <span>🔒</span> Data Encryption
                        </h4>
                        <div style="font-size: 2rem; font-weight: 700; color: var(--primary); margin-bottom: 0.5rem;">100%</div>
                        <div style="font-size: 0.875rem; color: var(--text-muted);">PII encrypted at rest & in transit</div>
                        <div style="margin-top: 1rem;">
                            <span class="badge badge-success">Secured</span>
                        </div>
                    </div>

                    <div style="padding: 1.5rem; background: var(--bg-tertiary); border-radius: 12px; border: 1px solid var(--border-color);">
                        <h4 style="margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                            <span>🚨</span> Breach Notification
                        </h4>
                        <div style="font-size: 2rem; font-weight: 700; color: var(--primary); margin-bottom: 0.5rem;">Ready</div>
                        <div style="font-size: 0.875rem; color: var(--text-muted);">72-hour notification process</div>
                        <div style="margin-top: 1rem;">
                            <span class="badge badge-success">Automated</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header">
                <h3 class="card-title">SOC 2 Trust Service Criteria</h3>
            </div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Criteria</th>
                                <th>Controls</th>
                                <th>Evidence Collected</th>
                                <th>Compliance</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Security</td>
                                <td>42</td>
                                <td>38</td>
                                <td>90.5%</td>
                                <td><span class="badge badge-success">On Track</span></td>
                            </tr>
                            <tr>
                                <td>Availability</td>
                                <td>28</td>
                                <td>27</td>
                                <td>96.4%</td>
                                <td><span class="badge badge-success">On Track</span></td>
                            </tr>
                            <tr>
                                <td>Processing Integrity</td>
                                <td>18</td>
                                <td>17</td>
                                <td>94.4%</td>
                                <td><span class="badge badge-success">On Track</span></td>
                            </tr>
                            <tr>
                                <td>Confidentiality</td>
                                <td>24</td>
                                <td>22</td>
                                <td>91.7%</td>
                                <td><span class="badge badge-success">On Track</span></td>
                            </tr>
                            <tr>
                                <td>Privacy</td>
                                <td>32</td>
                                <td>29</td>
                                <td>90.6%</td>
                                <td><span class="badge badge-success">On Track</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header">
                <h3 class="card-title">Audit Trail & Evidence</h3>
            </div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Timestamp</th>
                                <th>Event Type</th>
                                <th>Framework</th>
                                <th>Evidence Type</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>19:15:22</td>
                                <td>Access control review</td>
                                <td>ISO 27001</td>
                                <td>System logs</td>
                                <td><span class="badge badge-success">Captured</span></td>
                            </tr>
                            <tr>
                                <td>18:45:10</td>
                                <td>Data retention policy execution</td>
                                <td>GDPR</td>
                                <td>Deletion records</td>
                                <td><span class="badge badge-success">Captured</span></td>
                            </tr>
                            <tr>
                                <td>17:30:05</td>
                                <td>Security incident response</td>
                                <td>SOC 2</td>
                                <td>Incident report</td>
                                <td><span class="badge badge-success">Captured</span></td>
                            </tr>
                            <tr>
                                <td>16:20:44</td>
                                <td>Backup validation</td>
                                <td>ISO 27001</td>
                                <td>Test results</td>
                                <td><span class="badge badge-success">Captured</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function initComplianceCharts() {
    // Compliance Scores Radar
    createRadarChart('compliance-scores-chart',
        ['ISO 27001', 'GDPR', 'SOC 2', 'HIPAA', 'PCI DSS', 'NIST'],
        [94, 98, 93, 86, 91, 89],
        '#06ffa5'
    );
}
