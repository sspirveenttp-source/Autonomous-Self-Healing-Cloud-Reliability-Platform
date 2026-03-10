// ============================================
// NOTIFICATIONS MODULE
// System alerts and notifications
// ============================================

function renderNotifications() {
    return `
        <div class="module-header">
            <h2 class="module-title">Notification Center</h2>
            <p class="module-description">System alerts, incidents, and important updates</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Unread Notifications</span>
                    <span class="stat-icon">🔔</span>
                </div>
                <div class="stat-value">8</div>
                <div class="stat-change positive">
                    <span>New alerts</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Critical Alerts</span>
                    <span class="stat-icon">🚨</span>
                </div>
                <div class="stat-value">2</div>
                <div class="stat-change negative">
                    <span>Requires attention</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Warnings</span>
                    <span class="stat-icon">⚠️</span>
                </div>
                <div class="stat-value">5</div>
                <div class="stat-change positive">
                    <span>Review needed</span>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Resolved Today</span>
                    <span class="stat-icon">✅</span>
                </div>
                <div class="stat-value">23</div>
                <div class="stat-change positive">
                    <span>Auto-resolved</span>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Recent Notifications</h3>
                <div style="display: flex; gap: 0.5rem;">
                    <button class="btn btn-secondary" onclick="showNotification('Notifications', 'All notifications marked as read', 'success')">
                        <span>✓ Mark All Read</span>
                    </button>
                    <button class="btn btn-secondary" onclick="showNotification('Notifications', 'All notifications cleared', 'info')">
                        <span>🗑️ Clear All</span>
                    </button>
                </div>
            </div>
            <div class="card-body">
                <div style="display: grid; gap: 1rem;">
                    ${renderNotification(
        '🚨 Critical Alert',
        'Database connection pool exhaustion detected in Production',
        '2 minutes ago',
        'critical',
        true
    )}
                    ${renderNotification(
        '⚠️ Warning',
        'High memory usage on API Server (85% utilization)',
        '15 minutes ago',
        'warning',
        true
    )}
                    ${renderNotification(
        '🔧 Auto-Remediation',
        'Auto-scaling triggered: 3 new instances deployed successfully',
        '28 minutes ago',
        'success',
        false
    )}
                    ${renderNotification(
        '🤖 AI Detection',
        'Anomaly detected: Response time spike on Payment API',
        '45 minutes ago',
        'warning',
        true
    )}
                    ${renderNotification(
        '✅ Resolution',
        'Incident #INC-2845 resolved automatically - circuit breaker restored',
        '1 hour ago',
        'success',
        false
    )}
                    ${renderNotification(
        '💥 Chaos Test',
        'Scheduled chaos experiment completed: Region failover test passed',
        '2 hours ago',
        'info',
        false
    )}
                    ${renderNotification(
        '🔒 Security',
        'Unauthorized access attempt blocked from IP 192.168.1.100',
        '3 hours ago',
        'critical',
        true
    )}
                    ${renderNotification(
        '💰 Cost Alert',
        'Monthly cloud spend is 15% under budget - excellent optimization!',
        '4 hours ago',
        'success',
        false
    )}
                </div>
            </div>
        </div>

        <div class="content-grid mt-3">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Notification Preferences</h3>
                </div>
                <div class="card-body">
                    <div style="display: grid; gap: 1rem;">
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px;">
                            <div>
                                <div style="font-weight: 600;">Critical Incidents</div>
                                <div style="font-size: 0.75rem; color: var(--text-muted);">P1 & P2 severity</div>
                            </div>
                            <span class="badge badge-success">Enabled</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px;">
                            <div>
                                <div style="font-weight: 600;">Security Alerts</div>
                                <div style="font-size: 0.75rem; color: var(--text-muted);">Unauthorized access, policy violations</div>
                            </div>
                            <span class="badge badge-success">Enabled</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px;">
                            <div>
                                <div style="font-weight: 600;">Cost Anomalies</div>
                                <div style="font-size: 0.75rem; color: var(--text-muted);">Budget alerts, spending spikes</div>
                            </div>
                            <span class="badge badge-success">Enabled</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px;">
                            <div>
                                <div style="font-weight: 600;">Auto-Remediation</div>
                                <div style="font-size: 0.75rem; color: var(--text-muted);">Scaling, rollback events</div>
                            </div>
                            <span class="badge badge-info">Optional</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Notification Channels</h3>
                </div>
                <div class="card-body">
                    <div style="display: grid; gap: 1rem;">
                        <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px;">
                            <div style="font-size: 1.5rem;">📧</div>
                            <div style="flex: 1;">
                                <div style="font-weight: 600;">Email</div>
                                <div style="font-size: 0.75rem; color: var(--text-muted);">pirveen.ss@reliability.platform</div>
                            </div>
                            <span class="badge badge-success">Active</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px;">
                            <div style="font-size: 1.5rem;">💬</div>
                            <div style="flex: 1;">
                                <div style="font-weight: 600;">Slack</div>
                                <div style="font-size: 0.75rem; color: var(--text-muted);">#reliability-alerts</div>
                            </div>
                            <span class="badge badge-success">Active</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px;">
                            <div style="font-size: 1.5rem;">📱</div>
                            <div style="flex: 1;">
                                <div style="font-weight: 600;">SMS</div>
                                <div style="font-size: 0.75rem; color: var(--text-muted);">+91 ********** (India)</div>
                            </div>
                            <span class="badge badge-success">Active</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px;">
                            <div style="font-size: 1.5rem;">☎️</div>
                            <div style="flex: 1;">
                                <div style="font-weight: 600;">PagerDuty</div>
                                <div style="font-size: 0.75rem; color: var(--text-muted);">On-call escalation</div>
                            </div>
                            <span class="badge badge-success">Active</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderNotification(title, message, time, severity, unread) {
    const severityColors = {
        critical: { bg: 'rgba(239, 35, 60, 0.15)', border: 'var(--danger)', text: 'var(--danger)' },
        warning: { bg: 'rgba(255, 186, 8, 0.15)', border: 'var(--warning)', text: 'var(--warning)' },
        success: { bg: 'rgba(6, 255, 165, 0.15)', border: 'var(--success)', text: 'var(--success)' },
        info: { bg: 'rgba(76, 201, 240, 0.15)', border: 'var(--info)', text: 'var(--info)' }
    };

    const style = severityColors[severity];
    const unreadDot = unread ? `<div style="width: 10px; height: 10px; background: var(--primary); border-radius: 50%; animation: pulse 2s infinite;"></div>` : '';

    return `
        <div style="display: flex; gap: 1rem; padding: 1.5rem; background: ${style.bg}; border-left: 3px solid ${style.border}; border-radius: 12px; ${unread ? 'box-shadow: 0 0 20px rgba(0, 212, 255, 0.1);' : ''}">
            ${unreadDot}
            <div style="flex: 1;">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
                    <h4 style="font-weight: 600; font-size: 1rem; color: ${style.text};">${title}</h4>
                    <span style="font-size: 0.75rem; color: var(--text-muted); white-space: nowrap; margin-left: 1rem;">${time}</span>
                </div>
                <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.75rem;">${message}</p>
                <div style="display: flex; gap: 0.5rem;">
                    <button class="btn btn-secondary" style="font-size: 0.75rem; padding: 0.25rem 0.75rem;" onclick="showNotification('Notification', 'Notification marked as read', 'success')">
                        Mark Read
                    </button>
                    <button class="btn btn-secondary" style="font-size: 0.75rem; padding: 0.25rem 0.75rem;" onclick="showNotification('Details', 'Opening notification details', 'info')">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    `;
}
