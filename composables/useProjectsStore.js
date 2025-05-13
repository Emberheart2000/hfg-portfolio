// Define available projects
const projectList = [
  {
    id: 'invention',
    name: 'FOCAL',
    url: '/projects/invention',
    next: 'iks'
  },
  {
    id: 'iks',
    name: 'NERVOUS SYSTEM',
    url: '/projects/iks',
    next: null // Last project
  }
];

// Store for tracking project visits
export const useProjectsStore = () => {
  const visitedProjects = useState('visitedProjects', () => ({}));
  
  // Mark a project as visited
  const markVisited = (projectId) => {
    visitedProjects.value[projectId] = true;
  };
  
  // Check if a project has been visited
  const hasVisited = (projectId) => {
    return !!visitedProjects.value[projectId];
  };
  
  // Check if all projects have been visited
  const hasVisitedAll = () => {
    return projectList.every(project => hasVisited(project.id));
  };
  
  // Get the next project (if any)
  const getNextProject = (currentProjectId) => {
    const currentProject = projectList.find(p => p.id === currentProjectId);
    if (!currentProject || !currentProject.next) return null;
    
    return projectList.find(p => p.id === currentProject.next);
  };
  
  // Get the previous project (if any)
  const getPreviousProject = (currentProjectId) => {
    const currentIndex = projectList.findIndex(p => p.id === currentProjectId);
    if (currentIndex <= 0) return null;
    
    return projectList[currentIndex - 1];
  };
  
  return {
    projectList,
    visitedProjects: readonly(visitedProjects),
    markVisited,
    hasVisited,
    hasVisitedAll,
    getNextProject,
    getPreviousProject
  };
};