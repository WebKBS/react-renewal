import { useRef } from "react";
import Input from "./Input";

interface ProjectData {
  id?: number;
  name?: string;
  title?: string;
  description?: string;
  dueDate?: string;
}

interface ProjectType {
  onAdd: (projectData: ProjectData) => void;
}

export default function NewProject({ onAdd }: ProjectType) {
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const dueDate = useRef<HTMLInputElement>(null);

  function handleSave() {
    const enteredTitle = title.current?.value;
    const enteredDescription = description.current?.value;
    const enteredDueDate = dueDate.current?.value;

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    // [ ]를 붙이면 커스텀이 가능하다.
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
}
