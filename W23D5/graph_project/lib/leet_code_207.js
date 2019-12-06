// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

function canFinish(numCourses, prerequisites) {
  let taken = new Set();
  let courses = [];
  for (let i = 0; i < numCourses; i++) {
    courses.push(i);
  }
  let connections = {};
  prerequisites.forEach(pair => {
    if (connections[pair[0]]) {
      connections[pair[0]].push(pair[1]);
    } else {
      connections[pair[0]] = [pair[1]];
    }
  });
  let canTake = true;

  while (canTake) {
    canTake = false;
    courses.forEach(course => {
      let requirements = connections[course] || [];
      connections[course] = requirements;
      if (requirements.every(requirement => taken.has(requirement))) {
        taken.add(course);
        canTake = true;
      }
    });
    courses = courses.filter(course => !taken.has(course));
  }
  return !courses.length;
}
