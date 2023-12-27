import { FC } from "react";
import ModalContainer, { ModalProps } from "./ModalContainer";
import { AddSchoolForm } from "@/app/schools/AddSchoolForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { DialogHeader } from "./ui/dialog";

interface Props extends ModalProps {
  isOpen: boolean;
  onCancel?(): void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormModal: FC<Props> = ({
  visible,
  onClose,
  onCancel,
  isOpen,
  setIsOpen,
}): JSX.Element => {
  return (
    <>
      {/* <ModalContainer visible={visible} onClose={onClose}>
        <div className="flex flex-col">
          <button
            className="p-2 ml-72 hover:bg-red-400 rounded-xl transition ease-in"
            onClick={onCancel}
          >
            X
          </button>
          <AddSchoolForm />
        </div>
      </ModalContainer> */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger>Add a School</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            {/* <DialogTitle>Are you sure absolutely sure?</DialogTitle> */}
            {/* <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription> */}
            <AddSchoolForm />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FormModal;
