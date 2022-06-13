import { FC } from "react";
import "./task.css";

export type TaskPropsType = {
  task: {
    id: string;
    title: string;
    state: "TASK_INBOX" | "TASK_PINNED" | "TASK_ARCHIVED";
    updatedAt: Date;
  };
};

export const Task: FC<TaskPropsType> = ({
  task: { id, title, state, updatedAt },
}) => {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
};
