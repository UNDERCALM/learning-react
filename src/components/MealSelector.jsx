import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMealParticipants } from '../redux/mealSlice';
import ActionButton from './ActionButton';

const MealSelector = () => {
  const meals = useSelector(state => state.meals.meals);
  const dispatch = useDispatch();

  return (
    <div style={{ minWidth: 220, background: '#23272f', borderRadius: 8, boxShadow: '0 2px 8px #111a', padding: 24, color: '#f3f4f6' }}>
      <h2 style={{ color: '#f3f4f6' }}>Meals</h2>
      <div style={{ marginBottom: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
        <label htmlFor="meal-attendees" style={{ color: '#cbd5e1', fontWeight: 500 }}>Number of Attendees:</label>
        
        <input
          id="meal-attendees"
          type="number"
          min={0}
          value={meals[0]?.participants || 0}
          onChange={e => {
            const value = Number(e.target.value);
            meals.forEach(meal => dispatch(setMealParticipants({ id: meal.id, participants: value })));
          }}
          style={{ width: 70, padding: 4, borderRadius: 4, border: '1px solid #374151', textAlign: 'center', background: '#1e2228', color: '#f3f4f6' }}
        />
       
      </div>
      {meals.map(meal => (
        <div key={meal.id} style={{ marginBottom: 12, padding: 12, borderRadius: 8, background: '#2c2f33', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: 18, color: '#f3f4f6' }}>{meal.name}</h3>
            <p style={{ margin: 4, fontSize: 14, color: '#aab8c2' }}>{meal.description}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 16, color: '#f3f4f6' }}>{meal.participants} {meal.participants === 1 ? 'person' : 'people'}</span>
            <ActionButton label="-" onClick={() => {
              const value = Math.max(0, meal.participants - 1);
              dispatch(setMealParticipants({ id: meal.id, participants: value }));
            }} />
            <input
              type="number"
              min={0}
              value={meal.participants}
              onChange={e => {
                const value = Number(e.target.value);
                dispatch(setMealParticipants({ id: meal.id, participants: value }));
              }}
              style={{ width: 60, padding: 4, borderRadius: 4, border: '1px solid #374151', textAlign: 'center', background: '#1e2228', color: '#f3f4f6' }}
            />
            <ActionButton label="+" onClick={() => {
              const value = meal.participants + 1;
              dispatch(setMealParticipants({ id: meal.id, participants: value }));
            }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealSelector;
