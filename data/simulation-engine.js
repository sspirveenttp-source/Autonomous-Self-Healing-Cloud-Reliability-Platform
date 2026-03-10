// ============================================
// SIMULATION ENGINE
// Real-time data generation
// ============================================

// Generate time series data
function generateTimeSeriesData(points, min, max) {
    const now = new Date();
    const labels = [];
    const values = [];

    for (let i = points - 1; i >= 0; i--) {
        const time = new Date(now - i * 60000); // 1 minute intervals
        labels.push(time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
        values.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    return { labels, values };
}

// Generate random metric value
function randomMetric(min, max, decimals = 0) {
    const value = Math.random() * (max - min) + min;
    return decimals > 0 ? value.toFixed(decimals) : Math.floor(value);
}

// Generate percentage
function randomPercentage(min = 0, max = 100) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

// Simulate real-time updates
class MetricSimulator {
    constructor(callback, interval = 5000) {
        this.callback = callback;
        this.interval = interval;
        this.running = false;
        this.timer = null;
    }

    start() {
        if (this.running) return;
        this.running = true;
        this.tick();
    }

    stop() {
        this.running = false;
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    tick() {
        if (!this.running) return;

        this.callback();
        this.timer = setTimeout(() => this.tick(), this.interval);
    }
}

// Generate cloud provider names
function getCloudProviders() {
    return ['AWS', 'GCP', 'Azure'];
}

// Generate service names
function getServiceNames() {
    return [
        'User Service',
        'Payment API',
        'Notification Service',
        'Analytics Engine',
        'Authentication',
        'Database Cluster',
        'Cache Layer',
        'API Gateway',
        'Message Queue',
        'Search Service'
    ];
}

// Generate region names
function getRegionNames() {
    return [
        'us-east-1',
        'us-west-2',
        'eu-west-1',
        'ap-south-1',
        'ap-southeast-1'
    ];
}

// Generate incident severity
function getIncidentSeverity() {
    const severities = ['Critical', 'High', 'Medium', 'Low'];
    const weights = [0.1, 0.2, 0.4, 0.3];

    const random = Math.random();
    let cumulative = 0;

    for (let i = 0; i < severities.length; i++) {
        cumulative += weights[i];
        if (random <= cumulative) {
            return severities[i];
        }
    }

    return 'Low';
}

// Format bytes to human readable
function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

// Format currency
function formatCurrency(amount) {
    return '$' + amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Generate timestamp
function generateTimestamp() {
    return new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}
