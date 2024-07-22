import { FaArrowDown } from "react-icons/fa";
import { TaskI } from "../../../types/task";
import TaskCard from "./task-card";

interface FrozenI {
  frozen: TaskI[];
  openEditModal: (value: number) => void;
  openDeleteModal: (value: number) => void;
 openUpdateModal: (value: number) => void;
}
const Frozen: React.FC<FrozenI> = ({
  frozen,
  openDeleteModal,
  openEditModal,
   openUpdateModal,
}) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-sm text-black">Frozen</h3>
        <div className="bg-red-500 w-5 h-5 rounded-full flex flex-col items-center justify-center text-white">
          <FaArrowDown size={10} />
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        {frozen.length < 1 && 'No Frozen Task'}
        {frozen.map((item) => (
          <TaskCard
          item={item}
          openDeleteModal={openDeleteModal}
          openEditModal={openEditModal}
         openUpdateModal={openUpdateModal}
        />
        ))}
      </div>
    </>
  );
};

export default Frozen;
