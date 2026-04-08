import React, { useState } from 'react';
import { Card, CardBody, CardFooter } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Search, MapPin, Clock, CalendarDays } from 'lucide-react';
import './Catalog.css';

const WORKSHOPS = [
  {
    id: 1,
    title: 'Introduction to Python Data Analysis',
    instructor: 'Dr. Sarah Connor',
    date: 'Oct 15, 2026',
    duration: '2 Days',
    location: 'Virtual',
    category: 'Data Science',
    spots: 45,
    totalSpots: 50,
  },
  {
    id: 2,
    title: 'Advanced React Design Patterns',
    instructor: 'John Doe',
    date: 'Nov 02, 2026',
    duration: '1 Day',
    location: 'IIT Bombay',
    category: 'Web Dev',
    spots: 12,
    totalSpots: 30,
  },
  {
    id: 3,
    title: 'Machine Learning for IoT',
    instructor: 'Prof. Alan Smith',
    date: 'Nov 18, 2026',
    duration: '3 Days',
    location: 'Virtual',
    category: 'AI/ML',
    spots: 0,
    totalSpots: 40,
  }
];

export function Catalog() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = WORKSHOPS.filter(w => 
    w.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    w.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="catalog">
      <div className="catalog__header">
        <div>
          <h2>Available Workshops</h2>
          <p className="text-muted">Browse and book upcoming FOSSEE workshops.</p>
        </div>
        <div className="catalog__search">
          <Search size={20} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search workshops..." 
            className="search-input"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="workshop-grid">
        {filtered.map(workshop => (
          <Card key={workshop.id} className="workshop-card">
            <CardBody className="workshop-card__content">
              <div className="workshop-card__top">
                <Badge variant={workshop.spots === 0 ? 'danger' : 'primary'}>
                  {workshop.category}
                </Badge>
                <div className="workshop-card__spots">
                  {workshop.spots > 0 ? `${workshop.totalSpots - workshop.spots} spots left` : 'Fully Booked'}
                </div>
              </div>
              <h3 className="workshop-card__title">{workshop.title}</h3>
              <p className="workshop-card__instructor">by {workshop.instructor}</p>
              
              <div className="workshop-card__details">
                <div className="detail-item">
                  <CalendarDays size={16} /> <span>{workshop.date}</span>
                </div>
                <div className="detail-item">
                  <Clock size={16} /> <span>{workshop.duration}</span>
                </div>
                <div className="detail-item">
                  <MapPin size={16} /> <span>{workshop.location}</span>
                </div>
              </div>
            </CardBody>
            <CardFooter className="workshop-card__footer">
              <Button 
                fullWidth 
                variant={workshop.spots === 0 ? 'secondary' : 'primary'}
                disabled={workshop.spots === 0}
              >
                {workshop.spots === 0 ? 'Waitlist' : 'Book Now'}
              </Button>
            </CardFooter>
          </Card>
        ))}
        {filtered.length === 0 && (
          <div className="no-results text-muted">
            No workshops found matching "{searchTerm}".
          </div>
        )}
      </div>
    </div>
  );
}
