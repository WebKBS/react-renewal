import Button from "./Button";

interface ProjectData {
  id?: number;
  name?: string;
  title?: string;
  description?: string;
  dueDate?: string;
}

interface SideBarType {
  onStartAddProject: () => void;
  projects: ProjectData[]; // Project 타입의 배열로 변경
}

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
}: SideBarType) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Project
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
