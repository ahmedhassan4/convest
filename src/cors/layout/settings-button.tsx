"use client";

import { useEffect } from "react";
import { ActionIcon } from "rizzui";
import { useDrawer } from "@/shared/drawer-views/use-drawer";
import { useDirection } from "@/hooks/use-direction";
import cn from "@/utils/class-names";
import DrawerHeader from "./drawer-header";
import SettingsDrawer from "./settings-drawer";
import CogSolidIcon from "@/componnets/icons/cog-solid";



export default function SettingsButton({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { openDrawer, closeDrawer } = useDrawer();
  const { direction } = useDirection();

  // to set html dir attribute on direction change
  useEffect(() => {
    document.documentElement.dir = direction ?? "ltr";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction]);

  return (
    <ActionIcon
      aria-label="Settings"
      variant="text"
      className={cn(
        "relative h-[34px] w-[34px] shadow backdrop-blur-md dark:bg-gray-100 md:h-9 md:w-9",
        className
      )}
      onClick={() =>
        openDrawer({
          view: (
            <>
              <DrawerHeader onClose={closeDrawer} />
              <SettingsDrawer />
            </>
          ),
          placement: "right",
          customSize: "420px",
        })
      }
    >
      {children ? (
        children
      ) : (
        <CogSolidIcon
          strokeWidth={1.8}
          className="h-[22px] w-auto animate-spin-slow"
        />
      )}
    </ActionIcon>
  );
}
