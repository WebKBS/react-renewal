import Button from "./Button";

interface ProjectData {
  id?: number | undefined;
  name?: string;
  title?: string;
  description?: string;
  dueDate?: string;
}

interface SideBarType {
  onStartAddProject: () => void;
  projects: ProjectData[];
  onSelectProject: (id: number) => void; // id 매개변수 추가
  selectedProjectId?: number | undefined; // number | undefined로 수정
}

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
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
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => {
                  if (project.id) {
                    onSelectProject(project.id);
                  }
                }}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
