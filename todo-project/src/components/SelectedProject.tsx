import { ProjectDataType } from "../Types";

export default function SelectedProject({
  project,
  onDelete,
}: {
  project: ProjectDataType | undefined;
  onDelete: () => void;
}) {
  if (!project) {
    // project가 undefined일 경우의 처리
    return <div>프로젝트가 선택되지 않았습니다.</div>;
  }

  const formattedDate = project.dueDate
    ? new Date(project.dueDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "No due date";

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      TASKs
    </div>
  );
}
