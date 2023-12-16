import { FC } from "react";
import ModalContainer, { ModalProps } from "./ModalContainer";
import { AddSchoolForm } from "@/app/schools/AddSchoolForm";

interface Props extends ModalProps {
  // visible?: boolean;
  onCancel?(): void;
}

const FormModal: FC<Props> = ({ visible, onClose, onCancel }): JSX.Element => {
  return (
    <>
      <ModalContainer visible={visible} onClose={onClose}>
        <div className="flex flex-col">
          <button
            className="p-2 ml-72 hover:bg-red-400 rounded-xl transition ease-in"
            onClick={onCancel}
          >
            X
          </button>
          <AddSchoolForm />
        </div>
      </ModalContainer>
    </>
  );
};

export default FormModal;
