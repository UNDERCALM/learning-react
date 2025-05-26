import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMealParticipants } from '../redux/mealSlice';

const MealSelector = () => {
  const meals = useSelector(state => state.meals.meals);
  const dispatch = useDispatch();

  return (
    <div style={{ minWidth: 220, background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #e5e7eb', padding: 24 }}>
      <h2>Meals</h2>
      {meals.map(meal => (
        <div key={meal.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '12px 0' }}>
          <div>
            <div style={{ fontWeight: 600 }}>{meal.name}</div>
            <div style={{ fontSize: 14, color: '#6b7280' }}>${meal.price} per person</div>
          </div>
          <input
            type="number"
            min={0}
            value={meal.participants}
            onChange={e => dispatch(setMealParticipants({ id: meal.id, participants: Number(e.target.value) }))}
            style={{ width: 60, padding: 4, borderRadius: 4, border: '1px solid #d1d5db', textAlign: 'center' }}
          />
        </div>
      ))}
    </div>
  );
};

export default MealSelector;
