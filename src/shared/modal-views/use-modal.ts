import { atom, useAtom } from "jotai";
import { ModalSize } from "rizzui";

type ModalTypes = {
  description?: string; // Allow description to be undefined
  view: React.ReactNode;
  isOpen: boolean;
  customSize?: string;
  size?: ModalSize;
  title?: string;
};

const modalAtom = atom<ModalTypes[]>([]);

export default function useModal() {
  const [modals, setModals] = useAtom(modalAtom);

  const openModal = ({
    view,
    customSize,
    size,
    title,
    description,
  }: {
    view: React.ReactNode;
    customSize?: string;
    size?: ModalSize;
    title?: string;
    description?: string;
  }) => {
    setModals(prev => [
      ...prev,
      { isOpen: true, view, customSize, size, title, description },
    ]);
  };

  const closeModal = () => {
    setModals(prev => prev.slice(0, -1));
  };

  return {
    modals,
    openModal,
    closeModal,
  };
}
