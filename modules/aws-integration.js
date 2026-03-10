// ============================================
// AWS SERVICES INTEGRATION MODULE
// EKS, CloudWatch, Lambda, VPC, and more
// ============================================

function renderAWSServices() {
    return `
        <div class="module-header">
            <h2 class="module-title">AWS Services Integration</h2>
            <p class="module-description">Comprehensive AWS cloud services monitoring and management dashboard</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Active AWS Services</span>
                    <span class="stat-icon">🔶</span>
                </div>
                <div class="stat-value">12</div>
                <div class="stat-change positive">
                    <span>All operational</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">EKS Clusters</span>
                    <span class="stat-icon">☸️</span>
                </div>
                <div class="stat-value">4</div>
                <div class="stat-change positive">
                    <span>127 pods running</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Lambda Invocations</span>
                    <span class="stat-icon">λ</span>
                </div>
                <div class="stat-value">2.4M</div>
                <div class="stat-change positive">
                    <span>Today</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">CloudWatch Alarms</span>
                    <span class="stat-icon">🔔</span>
                </div>
                <div class="stat-value">23</div>
                <div class="stat-change positive">
                    <span>2 active</span>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">AWS Service Status</h3>
            </div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                    ${renderAWSServiceCard('EKS', 'Elastic Kubernetes Service', 'Healthy', '4 clusters', 'success')}
                    ${renderAWSServiceCard('CloudWatch', 'Monitoring & Logging', 'Healthy', '23 alarms', 'success')}
                    ${renderAWSServiceCard('Lambda', 'Serverless Functions', 'Healthy', '42 functions', 'success')}
                    ${renderAWSServiceCard('VPC', 'Virtual Private Cloud', 'Healthy', '3 VPCs', 'success')}
                    ${renderAWSServiceCard('ALB', 'Application Load Balancer', 'Warning', '5 targets', 'warning')}
                    ${renderAWSServiceCard('RDS', 'Relational Database', 'Healthy', '6 instances', 'success')}
                    ${renderAWSServiceCard('DynamoDB', 'NoSQL Database', 'Healthy', '12 tables', 'success')}
                    ${renderAWSServiceCard('S3', 'Object Storage', 'Healthy', '28 buckets', 'success')}
                    ${renderAWSServiceCard('CloudFormation', 'Infrastructure as Code', 'Healthy', '15 stacks', 'success')}
                    ${renderAWSServiceCard('IAM', 'Identity & Access', 'Healthy', '87 users', 'success')}
                    ${renderAWSServiceCard('Auto Scaling', 'Compute Scaling', 'Healthy', '8 groups', 'success')}
                    ${renderAWSServiceCard('Route 53', 'DNS Service', 'Healthy', '12 zones', 'success')}
                </div>
            </div>
        </div>

        <div class="content-grid mt-3">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">EKS Cluster Resources</h3>
                    <span class="badge badge-success">Optimal</span>
                </div>
                <div class="card-body">
                    <div class="chart-container">
                        <canvas id="eks-resources-chart"></canvas>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Auto Scaling Activity</h3>
                    <span class="badge badge-warning">Real-time</span>
                </div>
                <div class="card-body">
                    <div class="chart-container">
                        <canvas id="asg-scaling-chart"></canvas>
                    </div>
                </div>
            </div>
        </div>


        <div class="card mt-3">
            <div class="card-header">
                <h3 class="card-title">CloudWatch Metrics</h3>
            </div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Metric</th>
                                <th>Service</th>
                                <th>Current Value</th>
                                <th>Threshold</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>CPUUtilization</td>
                                <td>EKS Cluster</td>
                                <td>42%</td>
                                <td>< 80%</td>
                                <td><span class="badge badge-success">OK</span></td>
                            </tr>
                            <tr>
                                <td>DatabaseConnections</td>
                                <td>RDS</td>
                                <td>145</td>
                                <td>< 200</td>
                                <td><span class="badge badge-success">OK</span></td>
                            </tr>
                            <tr>
                                <td>RequestCount</td>
                                <td>ALB</td>
                                <td>1,245/min</td>
                                <td>< 2,000</td>
                                <td><span class="badge badge-success">OK</span></td>
                            </tr>
                            <tr>
                                <td>TargetResponseTime</td>
                                <td>ALB</td>
                                <td>285ms</td>
                                <td>< 500ms</td>
                                <td><span class="badge badge-warning">Warning</span></td>
                            </tr>
                            <tr>
                                <td>Invocations</td>
                                <td>Lambda</td>
                                <td>42,350/hr</td>
                                <td>< 100,000</td>
                                <td><span class="badge badge-success">OK</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header">
                <h3 class="card-title">Auto Scaling Groups</h3>
                <button class="btn btn-primary" onclick="showNotification('Scaling', 'Adjusting auto-scaling policies', 'info')">
                    <span>⚙️ Configure Scaling</span>
                </button>
            </div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Group Name</th>
                                <th>Desired</th>
                                <th>Current</th>
                                <th>Min/Max</th>
                                <th>Health</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>web-app-asg</td>
                                <td>6</td>
                                <td>6</td>
                                <td>3 / 12</td>
                                <td>100%</td>
                                <td><span class="badge badge-success">Active</span></td>
                            </tr>
                            <tr>
                                <td>api-server-asg</td>
                                <td>4</td>
                                <td>4</td>
                                <td>2 / 10</td>
                                <td>100%</td>
                                <td><span class="badge badge-success">Active</span></td>
                            </tr>
                            <tr>
                                <td>worker-asg</td>
                                <td>8</td>
                                <td>8</td>
                                <td>4 / 20</td>
                                <td>100%</td>
                                <td><span class="badge badge-success">Active</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function renderAWSServiceCard(name, description, status, detail, type) {
    const icons = {
        'EKS': '☸️',
        'CloudWatch': '📊',
        'Lambda': 'λ',
        'VPC': '🔒',
        'ALB': '⚖️',
        'RDS': '🗄️',
        'DynamoDB': '⚡',
        'S3': '🪣',
        'CloudFormation': '📦',
        'IAM': '🔐',
        'Auto Scaling': '📈',
        'Route 53': '🌐'
    };

    return `
        <div style="background: var(--bg-tertiary); border-radius: 12px; padding: 1rem; border: 1px solid var(--border-color);">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                <span style="font-size: 1.5rem;">${icons[name] || '🔶'}</span>
                <div>
                    <div style="font-weight: 600; font-size: 0.875rem;">${name}</div>
                    <div style="font-size: 0.75rem; color: var(--text-muted);">${description}</div>
                </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.75rem; color: var(--text-secondary);">${detail}</span>
                <span class="badge badge-${type}">${status}</span>
            </div>
        </div>
    `;
}

function initAWSCharts() {
    // EKS Resources
    createDoughnutChart('eks-resources-chart',
        ['Running', 'Pending', 'Terminated'],
        [127, 3, 2],
        ['#06ffa5', '#ffba08', '#ef233c']
    );

    // Auto Scaling Chart
    createLineChart('asg-scaling-chart',
        'Instance Count',
        [4, 4, 4, 6, 8, 8, 6, 6, 5, 5, 7, 10],
        ['#FF9900', '#FFCC00']
    );
}

