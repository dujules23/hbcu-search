import Link from "next/link";
import { FC, useState } from "react";
import { APP_NAME } from "../AppHead";
import { HiLightBulb } from "react-icons/hi";
import { AddSchoolForm } from "../../../app/schools/AddSchoolForm";
import FormModal from "@/components/FormModal";
import { Form } from "react-hook-form";
import { ModalProps } from "@/components/ModalContainer";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { DialogHeader } from "@/components/ui/dialog";

interface Props {}

const Navbar: FC<Props> = (): JSX.Element => {
  const [isClicked, setIsClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => {
    if (!isClicked) {
      setIsClicked(false);
    }
    setIsClicked(true);
  };

  return (
    <>
      <div className="flex items-center justify-between p-6">
        {/* Title */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <span>{APP_NAME}</span>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          {/* Add a School Button*/}
          <div className="border p-3 rounded hover:text-black hover:bg-white transition ease-in-out">
            <button onClick={() => setIsOpen(true)}>Add a School</button>
          </div>
          <></>

          {isOpen && (
            <FormModal
              visible={isOpen}
              onClose={() => setIsOpen(false)}
              onCancel={() => setIsOpen(false)}
            />
          )}

          {/* Dark Mode Button */}
          <div className="flex items-center space-x-5 hover:text-yellow-400 transition ease-in-out">
            <button>
              <HiLightBulb size={34} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
