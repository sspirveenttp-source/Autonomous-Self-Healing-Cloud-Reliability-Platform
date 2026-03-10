// ============================================
// FINOPS MODULE
// Cost-aware autoscaling and optimization
// ============================================

function renderFinOps() {
    return `
        <div class="module-header">
            <h2 class="module-title">FinOps - Cost Optimization</h2>
            <p class="module-description">Cost-aware autoscaling, predictive savings, and budget management</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Monthly Cloud Cost</span>
                    <span class="stat-icon">💰</span>
                </div>
                <div class="stat-value">$12,400</div>
                <div class="stat-change positive">
                    <span>↓ 18%</span>
                    <span>vs last month</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Cost Savings (MTD)</span>
                    <span class="stat-icon">💵</span>
                </div>
                <div class="stat-value">$2,780</div>
                <div class="stat-change positive">
                    <span>Optimized</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Budget Utilization</span>
                    <span class="stat-icon">📊</span>
                </div>
                <div class="stat-value">62%</div>
                <div class="stat-change positive">
                    <span>On track</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Waste Eliminated</span>
                    <span class="stat-icon">♻️</span>
                </div>
                <div class="stat-value">$4.2K</div>
                <div class="stat-change positive">
                    <span>This month</span>
                </div>
            </div>
        </div>

        <div class="content-grid">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Cost Trend Analysis</h3>
                    <span class="badge badge-success">Decreasing</span>
                </div>
                <div class="card-body">
                    <div class="chart-container">
                        <canvas id="cost-trend-chart"></canvas>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Cost by Service</h3>
                    <span class="badge badge-info">Breakdown</span>
                </div>
                <div class="card-body">
                    <div class="chart-container">
                        <canvas id="cost-breakdown-chart"></canvas>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header">
                <h3 class="card-title">Cost Optimization Recommendations</h3>
                <button class="btn btn-success" onclick="showNotification('Optimization', 'Applying cost optimization recommendations', 'success')">
                    <span>✅ Apply All</span>
                </button>
            </div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Recommendation</th>
                                <th>Service</th>
                                <th>Current Cost</th>
                                <th>Estimated Savings</th>
                                <th>Impact</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Right-size EC2 instances</td>
                                <td>Compute</td>
                                <td>$3,200/mo</td>
                                <td>$920/mo</td>
                                <td><span class="badge badge-success">Low</span></td>
                                <td><button class="btn btn-secondary" onclick="showNotification('Optimization', 'Resizing EC2 instances', 'info')">Apply</button></td>
                            </tr>
                            <tr>
                                <td>Use Reserved Instances</td>
                                <td>RDS</td>
                                <td>$1,850/mo</td>
                                <td>$655/mo</td>
                                <td><span class="badge badge-success">Low</span></td>
                                <td><button class="btn btn-secondary" onclick="showNotification('Optimization', 'Purchasing reserved instances', 'info')">Apply</button></td>
                            </tr>
                            <tr>
                                <td>Delete unused EBS volumes</td>
                                <td>Storage</td>
                                <td>$420/mo</td>
                                <td>$340/mo</td>
                                <td><span class="badge badge-success">None</span></td>
                                <td><button class="btn btn-secondary" onclick="showNotification('Optimization', 'Removing unused storage', 'info')">Apply</button></td>
                            </tr>
                            <tr>
                                <td>Optimize S3 storage class</td>
                                <td>S3</td>
                                <td>$780/mo</td>
                                <td>$285/mo</td>
                                <td><span class="badge badge-success">Low</span></td>
                                <td><button class="btn btn-secondary" onclick="showNotification('Optimization', 'Updating S3 storage classes', 'info')">Apply</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header">
                <h3 class="card-title">Budget Alerts</h3>
            </div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Budget Name</th>
                                <th>Budget</th>
                                <th>Actual</th>
                                <th>Forecasted</th>
                                <th>Utilization</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Production Environment</td>
                                <td>$20,000</td>
                                <td>$12,400</td>
                                <td>$18,200</td>
                                <td>62%</td>
                                <td><span class="badge badge-success">On Track</span></td>
                            </tr>
                            <tr>
                                <td>Development Environment</td>
                                <td>$5,000</td>
                                <td>$3,100</td>
                                <td>$4,650</td>
                                <td>62%</td>
                                <td><span class="badge badge-success">On Track</span></td>
                            </tr>
                            <tr>
                                <td>Data Processing</td>
                                <td>$8,000</td>
                                <td>$6,800</td>
                                <td>$9,200</td>
                                <td>85%</td>
                                <td><span class="badge badge-warning">At Risk</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header">
                <h3 class="card-title">Cost-Aware Scaling Policies</h3>
            </div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Scaling Policy</th>
                                <th>Cost Impact</th>
                                <th>Performance Impact</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>API Servers</td>
                                <td>Scale during peak hours only</td>
                                <td>-15% cost</td>
                                <td>Minimal</td>
                                <td><span class="badge badge-success">Active</span></td>
                            </tr>
                            <tr>
                                <td>Worker Nodes</td>
                                <td>Use spot instances</td>
                                <td>-60% cost</td>
                                <td>None</td>
                                <td><span class="badge badge-success">Active</span></td>
                            </tr>
                            <tr>
                                <td>Database Reads</td>
                                <td>Read replicas on demand</td>
                                <td>-25% cost</td>
                                <td>None</td>
                                <td><span class="badge badge-success">Active</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function initFinOpsCharts() {
    // Cost Trend
    createLineChart('cost-trend-chart',
        'Cost ($)',
        {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            values: [15200, 14800, 14200, 13800, 13200, 12800, 12400]
        },
        ['#00d4ff', '#7b2cbf']
    );

    // Cost Breakdown
    createDoughnutChart('cost-breakdown-chart',
        ['Compute', 'Storage', 'Database', 'Network', 'Other'],
        [42, 23, 18, 12, 5],
        ['#00d4ff', '#7b2cbf', '#06ffa5', '#ffba08', '#ef233c']
    );
}
