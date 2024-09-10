"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ActionIcon, Modal, Text, Title } from "rizzui";
import useModal from "./use-modal";
import { PiXBold } from "react-icons/pi";

export default function GlobalModal() {
  const { modals, closeModal } = useModal();
  const pathname = usePathname();

  useEffect(() => {
    closeModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      {modals.map((modal, index) => (
        <Modal
          key={index}
          isOpen={modal.isOpen}
          onClose={closeModal}
          customSize={modal.customSize}
          size={modal.size}
          overlayClassName="dark:bg-opacity-40 dark:backdrop-blur-lg"
          containerClassName="dark:bg-gray-100 px-7 py-7"
          className="z-[9998] [&_.pointer-events-none]:overflow-visible"
        >
          <div className="mb-6 flex items-center justify-between">
           <div>
           <Title as="h3" className="text-lg">
              {modal.title}
            </Title>
            <Text as="p" className="text-gray-500">{modal?.description}</Text>
           </div>
            <ActionIcon
              size="sm"
              variant="text"
              onClick={closeModal}
              className="p-0 text-gray-500 hover:!text-gray-900"
            >
              <PiXBold className="h-[18px] w-[18px]" />
            </ActionIcon>
          </div>
          {modal.view}
        </Modal>
      ))}
    </>
  );
}