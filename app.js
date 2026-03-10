// ============================================
// CORE APPLICATION LOGIC
// Authentication, Navigation, State Management
// ============================================

class CloudReliabilityApp {
    constructor() {
        this.currentUser = null;
        this.currentModule = 'overview';
        this.init();
    }

    init() {
        // Check if already logged in
        const stored = sessionStorage.getItem('crp_user');
        if (stored) {
            this.currentUser = JSON.parse(stored);
            this.showApp();
        } else {
            this.showLogin();
        }

        this.setupEventListeners();
    }

    setupEventListeners() {
        // Login form
        const loginForm = document.getElementById('login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        }

        // Logout button
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.handleLogout());
        }

        // Navigation items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const module = e.currentTarget.getAttribute('data-module');
                this.loadModule(module);
            });
        });
    }

    handleLogin(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorEl = document.getElementById('login-error');

        // Validate credentials
        if (username === 'PIRVEEN S S' && password === 'SsP@2007') {
            this.currentUser = { username, loginTime: new Date() };
            sessionStorage.setItem('crp_user', JSON.stringify(this.currentUser));

            errorEl.classList.remove('show');
            this.showApp();

            if (typeof showNotification === 'function') {
                showNotification('Welcome!', 'Authentication successful. Access granted.', 'success');
            }
        } else {
            errorEl.textContent = 'Invalid credentials. Please try again.';
            errorEl.classList.add('show');
        }
    }

    handleLogout() {
        this.currentUser = null;
        sessionStorage.removeItem('crp_user');
        this.showLogin();
        showNotification('Logged Out', 'Session ended successfully', 'info');
    }

    showLogin() {
        document.getElementById('login-screen').style.display = 'flex';
        document.getElementById('main-app').style.display = 'none';
    }

    showApp() {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-app').style.display = 'grid';

        // Update user display
        const userEl = document.getElementById('current-user');
        if (userEl && this.currentUser) {
            userEl.textContent = this.currentUser.username;
        }

        // Load default module
        this.loadModule('overview');
    }

    loadModule(moduleName) {
        this.currentModule = moduleName;

        // Update active nav item
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-module') === moduleName) {
                item.classList.add('active');
            }
        });

        // Load module content
        const contentArea = document.getElementById('content-area');

        switch (moduleName) {
            case 'overview':
                contentArea.innerHTML = renderOverview();
                initOverviewCharts();
                break;
            case 'ai-anomaly':
                contentArea.innerHTML = renderAIAnomaly();
                initAIAnomalyCharts();
                break;
            case 'auto-remediation':
                contentArea.innerHTML = renderAutoRemediation();
                initAutoRemediationCharts();
                break;
            case 'chaos-engineering':
                contentArea.innerHTML = renderChaosEngineering();
                initChaosEngineeringCharts();
                break;
            case 'slo-sli':
                contentArea.innerHTML = renderSLOSLI();
                initSLOSLICharts();
                break;
            case 'service-mesh':
                contentArea.innerHTML = renderServiceMesh();
                initServiceMeshCharts();
                break;
            case 'multi-cloud':
                contentArea.innerHTML = renderMultiCloud();
                initMultiCloudCharts();
                break;
            case 'aws-services':
                contentArea.innerHTML = renderAWSServices();
                initAWSCharts();
                break;
            case 'finops':
                contentArea.innerHTML = renderFinOps();
                initFinOpsCharts();
                break;
            case 'security':
                contentArea.innerHTML = renderSecurity();
                initSecurityCharts();
                break;
            case 'compliance':
                contentArea.innerHTML = renderCompliance();
                initComplianceCharts();
                break;
            case 'incidents':
                contentArea.innerHTML = renderIncidents();
                initIncidentCharts();
                break;
            case 'profile':
                contentArea.innerHTML = renderProfile();
                break;
            case 'notifications':
                contentArea.innerHTML = renderNotifications();
                break;
            default:
                contentArea.innerHTML = '<h2>Module not found</h2>';
        }
    }
}

// ============================================
// OVERVIEW MODULE
// ============================================
function renderOverview() {
    return `
        <div class="module-header">
            <h2 class="module-title">Platform Overview</h2>
            <p class="module-description">Real-time monitoring and health status of your autonomous cloud infrastructure</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">System Health</span>
                    <span class="stat-icon">💚</span>
                </div>
                <div class="stat-value">99.99%</div>
                <div class="stat-change positive">
                    <span>↑ 0.02%</span>
                    <span>vs last hour</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Active Services</span>
                    <span class="stat-icon">🚀</span>
                </div>
                <div class="stat-value">127</div>
                <div class="stat-change positive">
                    <span>↑ 12</span>
                    <span>today</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Anomalies Detected</span>
                    <span class="stat-icon">🔍</span>
                </div>
                <div class="stat-value">3</div>
                <div class="stat-change positive">
                    <span>↓ 87%</span>
                    <span>vs yesterday</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Auto-Remediations</span>
                    <span class="stat-icon">🔧</span>
                </div>
                <div class="stat-value">42</div>
                <div class="stat-change positive">
                    <span>All successful</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Cloud Cost (MTD)</span>
                    <span class="stat-icon">💰</span>
                </div>
                <div class="stat-value">$12.4K</div>
                <div class="stat-change positive">
                    <span>↓ 18%</span>
                    <span>savings</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Error Budget</span>
                    <span class="stat-icon">🎯</span>
                </div>
                <div class="stat-value">94.2%</div>
                <div class="stat-change positive">
                    <span>Healthy</span>
                </div>
            </div>
        </div>

        <div class="content-grid">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Response Time Trend</h3>
                    <span class="badge badge-success">Optimal</span>
                </div>
                <div class="card-body">
                    <div class="chart-container">
                        <canvas id="response-time-chart"></canvas>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Multi-Cloud Distribution</h3>
                    <span class="badge badge-info">3 Clouds</span>
                </div>
                <div class="card-body">
                    <div class="chart-container">
                        <canvas id="cloud-distribution-chart"></canvas>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Recent Activity</h3>
            </div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Timestamp</th>
                                <th>Event</th>
                                <th>Service</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>19:15:23</td>
                                <td>Auto-scaling triggered</td>
                                <td>Payment API</td>
                                <td><span class="badge badge-success">Success</span></td>
                            </tr>
                            <tr>
                                <td>19:12:41</td>
                                <td>Anomaly detected & resolved</td>
                                <td>User Service</td>
                                <td><span class="badge badge-success">Resolved</span></td>
                            </tr>
                            <tr>
                                <td>19:08:15</td>
                                <td>Chaos experiment completed</td>
                                <td>Database Cluster</td>
                                <td><span class="badge badge-success">Passed</span></td>
                            </tr>
                            <tr>
                                <td>19:03:52</td>
                                <td>Circuit breaker activated</td>
                                <td>Notification Service</td>
                                <td><span class="badge badge-warning">Active</span></td>
                            </tr>
                            <tr>
                                <td>18:59:30</td>
                                <td>Multi-cloud failover test</td>
                                <td>Global CDN</td>
                                <td><span class="badge badge-success">Success</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function initOverviewCharts() {
    // Response Time Chart
    createLineChart('response-time-chart',
        'Response Time (ms)',
        generateTimeSeriesData(20, 50, 150),
        ['#00d4ff', '#7b2cbf']
    );

    // Cloud Distribution
    createDoughnutChart('cloud-distribution-chart',
        ['AWS', 'GCP', 'Azure'],
        [45, 32, 23],
        ['#FF9900', '#4285F4', '#0089D6']
    );
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new CloudReliabilityApp();
});
