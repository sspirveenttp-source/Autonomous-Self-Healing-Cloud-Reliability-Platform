// ============================================
// PROFILE MODULE
// User profile information
// ============================================

function renderProfile() {
    return `
        <div class="module-header">
            <h2 class="module-title">User Profile</h2>
            <p class="module-description">Personal information and account details</p>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Profile Information</h3>
                <button class="btn btn-primary" onclick="showNotification('Profile', 'Profile information saved', 'success')">
                    <span>✏️ Edit Profile</span>
                </button>
            </div>
            <div class="card-body">
                <div style="display: grid; gap: 2rem;">
                    <!-- Profile Header -->
                    <div style="display: flex; align-items: center; gap: 2rem; padding: 2rem; background: var(--bg-tertiary); border-radius: 16px; border: 1px solid var(--border-color);">
                    <div style="width: 120px; height: 120px; border-radius: 50%; border: 3px solid var(--primary); overflow: hidden; box-shadow: 0 8px 24px rgba(0, 212, 255, 0.3);">
                        <img src="assets/profile.png" alt="PIRVEEN S S" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                        <div style="flex: 1;">
                            <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem; background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                PIRVEEN S S
                            </h2>
                            <p style="color: var(--text-secondary); font-size: 1.125rem; margin-bottom: 0.5rem;">
                                Cloud Reliability Engineer
                            </p>
                            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                                <span class="badge badge-success">Active</span>
                                <span class="badge badge-info">Administrator</span>
                            </div>
                        </div>
                    </div>

                    <!-- Profile Details Grid -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                        ${renderProfileField('👤 Full Name', 'PIRVEEN S S')}
                        ${renderProfileField('🎓 Register Number', '711524BCS115')}
                        ${renderProfileField('💼 Project Name', 'RELIABILITY PLATFORM')}
                        ${renderProfileField('🌍 Country', 'INDIA')}
                        ${renderProfileField('📍 State', 'TAMILNADU')}
                        ${renderProfileField('🏙️ City', 'THIRUTHURAIPOONDI')}
                    </div>

                    <!-- Additional Information -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                        ${renderProfileField('📧 Email', 's.s.pirveen.ttp@gmail.com')}
                        ${renderProfileField('🔐 Role', 'Platform Administrator')}
                        ${renderProfileField('📅 Account Created', 'February 7, 2026')}
                        ${renderProfileField('⏰ Last Login', 'Just now')}
                    </div>
                </div>
            </div>
        </div>

        <div class="content-grid mt-3">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Platform Statistics</h3>
                </div>
                <div class="card-body">
                    <div style="display: grid; gap: 1rem;">
                        ${renderStatRow('🚀 Active Projects', '1')}
                        ${renderStatRow('📊 Modules Accessed', '12')}
                        ${renderStatRow('⚡ Total Actions', '847')}
                        ${renderStatRow('🏆 Platform Uptime', '99.99%')}
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Recent Activity</h3>
                </div>
                <div class="card-body">
                    <div style="display: grid; gap: 1rem;">
                        ${renderActivityItem('Logged into platform', '2 minutes ago', 'success')}
                        ${renderActivityItem('Viewed AI Anomaly Detection', '15 minutes ago', 'info')}
                        ${renderActivityItem('Updated security policies', '1 hour ago', 'warning')}
                        ${renderActivityItem('Ran chaos experiment', '2 hours ago', 'info')}
                    </div>
                </div>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header">
                <h3 class="card-title">Account Settings</h3>
            </div>
            <div class="card-body">
                <div style="display: grid; gap: 1rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: var(--bg-tertiary); border-radius: 12px;">
                        <div>
                            <div style="font-weight: 600; margin-bottom: 0.25rem;">Email Notifications</div>
                            <div style="font-size: 0.875rem; color: var(--text-muted);">Receive email alerts for critical incidents</div>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" checked>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: var(--bg-tertiary); border-radius: 12px;">
                        <div>
                            <div style="font-weight: 600; margin-bottom: 0.25rem;">SMS Alerts</div>
                            <div style="font-size: 0.875rem; color: var(--text-muted);">Receive SMS for P1 incidents</div>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" checked>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: var(--bg-tertiary); border-radius: 12px;">
                        <div>
                            <div style="font-weight: 600; margin-bottom: 0.25rem;">Two-Factor Authentication</div>
                            <div style="font-size: 0.875rem; color: var(--text-muted);">Add an extra layer of security</div>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" checked>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderProfileField(label, value) {
    return `
        <div style="padding: 1.5rem; background: var(--bg-tertiary); border-radius: 12px; border: 1px solid var(--border-color);">
            <div style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 0.5rem; font-weight: 500;">
                ${label}
            </div>
            <div style="font-size: 1.125rem; font-weight: 600; color: var(--text-primary);">
                ${value}
            </div>
        </div>
    `;
}

function renderStatRow(label, value) {
    return `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px;">
            <span style="color: var(--text-secondary);">${label}</span>
            <span style="font-weight: 700; font-size: 1.125rem; color: var(--primary);">${value}</span>
        </div>
    `;
}

function renderActivityItem(action, time, type) {
    const colors = {
        success: 'var(--success)',
        info: 'var(--info)',
        warning: 'var(--warning)',
        danger: 'var(--danger)'
    };
    return `
        <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px; border-left: 3px solid ${colors[type]};">
            <div style="flex: 1;">
                <div style="font-weight: 500; margin-bottom: 0.25rem;">${action}</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">${time}</div>
            </div>
        </div>
    `;
}
