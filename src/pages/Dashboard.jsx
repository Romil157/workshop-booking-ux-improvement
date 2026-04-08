import React from 'react';
import { Card, CardBody, CardHeader } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Calendar, Users, TrendingUp, Clock } from 'lucide-react';
import './Dashboard.css';

export function Dashboard() {
  const stats = [
    { label: 'Upcoming Workshops', value: '12', icon: Calendar, color: 'primary' },
    { label: 'Total Participants', value: '1,248', icon: Users, color: 'success' },
    { label: 'Proposals Pending', value: '5', icon: Clock, color: 'warning' },
    { label: 'Approval Rate', value: '94%', icon: TrendingUp, color: 'primary' },
  ];

  const recentActivity = [
    { id: 1, title: 'Python for Data Science', status: 'Approved', date: '2 hours ago' },
    { id: 2, title: 'React Performance Tuning', status: 'Pending', date: '5 hours ago' },
    { id: 3, title: 'Advanced GraphQL', status: 'Rejected', date: '1 day ago' },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <div>
          <h2>Welcome back, Instructor!</h2>
          <p className="text-muted">Here's what's happening with your workshops today.</p>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, i) => (
          <Card key={i} className="stat-card">
            <CardBody className="stat-card__body">
              <div className="stat-card__content">
                <p className="stat-card__label">{stat.label}</p>
                <h3 className="stat-card__value">{stat.value}</h3>
              </div>
              <div className={`stat-card__icon text-${stat.color}`}>
                <stat.icon size={24} />
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="dashboard__grid">
        <Card className="activity-card">
          <CardHeader>
            <h3 className="card-title">Recent Proposals</h3>
          </CardHeader>
          <CardBody>
            <ul className="activity-list">
              {recentActivity.map((activity) => (
                <li key={activity.id} className="activity-item">
                  <div className="activity-item__info">
                    <h4>{activity.title}</h4>
                    <span className="activity-item__date">{activity.date}</span>
                  </div>
                  <Badge variant={
                    activity.status === 'Approved' ? 'success' : 
                    activity.status === 'Pending' ? 'warning' : 'danger'
                  }>
                    {activity.status}
                  </Badge>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>

        <Card className="schedule-card">
          <CardHeader>
            <h3 className="card-title">Your Schedule</h3>
          </CardHeader>
          <CardBody className="schedule-empty">
            <Calendar size={48} className="text-muted" style={{ opacity: 0.5, marginBottom: '1rem' }} />
            <p className="text-muted">No workshops scheduled for today.</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
