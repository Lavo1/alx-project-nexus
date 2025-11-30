// Mocked API for demo purposes — in a real project you'd call a remote backend
export async function fetchJobs(){
  // Simulate network latency
  await new Promise(r => setTimeout(r, 350))

  return [
    { id: '1', title: 'Junior Frontend Developer', company: 'Acme UI', location: 'Remote', category: 'Engineering', level: 'Entry-Level', description: 'Work with React and Tailwind to build UI components.' },
    { id: '2', title: 'Product Designer', company: 'DesignCo', location: 'London', category: 'Design', level: 'Mid-Level', description: 'Design product experiences and prototypes.' },
    { id: '3', title: 'Senior Backend Engineer', company: 'DataLink', location: 'New York', category: 'Engineering', level: 'Senior', description: 'Build and scale APIs and data pipelines.' },
    { id: '4', title: 'DevOps Engineer', company: 'CloudOps', location: 'Remote', category: 'Operations', level: 'Mid-Level', description: 'Manage CI/CD and infrastructure.' },
    { id: '5', title: 'Technical Writer', company: 'DocWorks', location: 'Berlin', category: 'Writing', level: 'Entry-Level', description: 'Create clear API docs and tutorials.' }
  ]
}
