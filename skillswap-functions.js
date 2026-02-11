function filterSkillsByCategory(skills, category) {
  if (!Array.isArray(skills)) return [];

  if (category === 'All') {
    return skills;
  }

  return skills.filter((skill) => skill.category === category);
}


function calculateTotalCost(hourlyRate, hours) {
  return hourlyRate * hours;
}


function matchSkillsToUser(userNeeds, skills) {
  if (!userNeeds || !Array.isArray(skills)) return [];

  return skills.filter((skill) => {
    return (
      skill.category === userNeeds.category &&
      skill.price <= userNeeds.maxPrice
    );
  });
}



module.exports = { filterSkillsByCategory, calculateTotalCost, matchSkillsToUser };


