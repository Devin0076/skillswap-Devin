const { filterSkillsByCategory } = require('../skillswap-functions');

describe('filterSkillsByCategory', () => {
  const skills = [
    { title: 'Python Tutoring', category: 'Programming', price: 20 },
    { title: 'Guitar Lessons', category: 'Music', price: 15 },
    { title: 'Resume Review', category: 'Career', price: 0 },
    { title: 'Web Development', category: 'Programming', price: 25 }
  ];

  test('filters skills by category', () => {
    expect(filterSkillsByCategory(skills, 'Programming')).toEqual([
      { title: 'Python Tutoring', category: 'Programming', price: 20 },
      { title: 'Web Development', category: 'Programming', price: 25 }
    ]);
  });

  test('returns all skills when category is "All"', () => {
    expect(filterSkillsByCategory(skills, 'All')).toEqual(skills);
  });

  test('returns empty array when no skills match', () => {
    expect(filterSkillsByCategory(skills, 'Cooking')).toEqual([]);
  });
});
















const { calculateTotalCost } = require('../skillswap-functions');

describe('calculateTotalCost', () => {
  test('returns correct values for different hours and rates', () => {
    expect(calculateTotalCost(20, 2)).toBe(40);
  });

  test('handles free sessions (0 rate) and zero hours', () => {
    expect(calculateTotalCost(0, 3)).toBe(0);
    expect(calculateTotalCost(20, 0)).toBe(0);
  });

  test('returns correct value for decimal hours', () => {
    expect(calculateTotalCost(25, 1.5)).toBe(37.5);
  });
});

const { matchSkillsToUser } = require('../skillswap-functions');

describe('matchSkillsToUser', () => {
  const skills = [
    { title: 'Python Tutoring', category: 'Programming', price: 20 },
    { title: 'JavaScript Help', category: 'Programming', price: 25 },
    { title: 'Guitar Lessons', category: 'Music', price: 15 },
    { title: 'Resume Review', category: 'Career', price: 0 }
  ];

  test('matches by category and max price', () => {
    const needs = { category: 'Programming', maxPrice: 30 };
    expect(matchSkillsToUser(needs, skills)).toEqual([
      { title: 'Python Tutoring', category: 'Programming', price: 20 },
      { title: 'JavaScript Help', category: 'Programming', price: 25 }
    ]);
  });

  test('filters by max price', () => {
    const needs = { category: 'Programming', maxPrice: 20 };
    expect(matchSkillsToUser(needs, skills)).toEqual([
      { title: 'Python Tutoring', category: 'Programming', price: 20 }
    ]);
  });

  test('returns empty array when no matches', () => {
    const needs = { category: 'Cooking', maxPrice: 100 };
    expect(matchSkillsToUser(needs, skills)).toEqual([]);
  });

  test('includes free skills when maxPrice is 0', () => {
    const needs = { category: 'Career', maxPrice: 0 };
    expect(matchSkillsToUser(needs, skills)).toEqual([
      { title: 'Resume Review', category: 'Career', price: 0 }
    ]);
  });
});
