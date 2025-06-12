import EditTask from "../page";

export default function EditTaskPage({ params }) {
  const { taskId } = params;

  return <EditTask taskId={taskId} />;
}
