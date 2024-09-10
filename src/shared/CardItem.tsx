"use client";
import Link from "next/link";
import Image from "next/image";
import { Title, Text, Progressbar } from "rizzui";
import cn from "@/utils/class-names";
import { useRouter } from "next-nprogress-bar";

export default function CardItem({
  title,
  description,
  location,
  progress,
  className = "",
  imag,
  lastSemester,
  titleIcon,
  isCourse = false,
  published = 0,
  cardActions,
  detailesLink = "",
}: {
  title: string;
  description: string;
  location?: string;
  progress: number | string;
  className?: string;
  imag: string;
  lastSemester?: string;
  titleIcon?: React.ReactNode;
  isCourse?: boolean;
  published?: number;
  cardActions?: React.ReactNode;
  detailesLink: string;
}) {
  const router = useRouter();
  const handleCardActionsClick = (event: React.MouseEvent) => {
    // Prevent the click event from bubbling up to the parent Link
    event.stopPropagation();
  };

  return (
    <button onClick={() => router.push(detailesLink)}>
      <div
        className={cn(
          "border border-spacing-[1px] rounded-lg overflow-hidden",
          className
        )}>
        <div className="relative">
          {cardActions && (
            <div
              className="absolute top-1 right-1 z-50"
              onClick={handleCardActionsClick}>
              {cardActions}
            </div>
          )}
          <div className="relative mx-auto aspect-[6/5.06] w-full overflow-hidden bg-gray-100">
            <Image
              alt={title}
              src={imag}
              width={320}
              height={200}
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="pt-3 flex flex-col gap-1 p-5">
          <div className="flex items-center gap-1">
            {titleIcon && titleIcon}
            <Text as="p" className="text-[10px] text-gray-400 font-normal">
              {location}
            </Text>
          </div>
          <Link href={"/"}>
            <Title
              as="h6"
              className="mb-1 text-start truncate font-semibold transition-colors hover:text-primary">
              {title}
            </Title>
          </Link>

          <Text as="p" className="text-xs font-normal text-start text-gray-600">
            {description}
          </Text>
          <div className="border-t text-start border-spacing-[1px] text-gray-400 mt-4">
            {isCourse ? (
              <Text>
                {published === 0
                  ? "There are no assignments yet"
                  : `You’ve ${published} Assignments due soon`}
              </Text>
            ) : (
              <div className="text-xs font-normal text-gray-600 flex justify-between mt-5">
                <Text>Latest Semester</Text>
                <Text>{lastSemester || "--------"}</Text>
              </div>
            )}
            <div className="text-[10px] font-normal text-gray-500 flex justify-between mt-5 mb-[10px]">
              <Text>Progress</Text>
              <Text>{progress}% Completed</Text>
            </div>
            <Progressbar value={progress as number} className="!gap-0" />
          </div>
        </div>
      </div>
    </button>
  );
}
