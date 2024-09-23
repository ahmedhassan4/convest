import React from "react";
import { Title, Text } from "rizzui";
import cn from "@/utils/class-names";

// function WidgetCard({
//     title,
//     className,
//     children,
//     childrenWrapperClass,
//   }: {
//     title?: string;
//     className?: string;
//     children: React.ReactNode;
//     childrenWrapperClass?: string;
//   }) {
//     return (
//       <div className={className}>
//         <Title
//           as="h3"
//           className="mb-3.5 text-base font-semibold @5xl:mb-5 4xl:text-lg"
//         >
//           {title}
//         </Title>
//         <div
//           className={cn(
//             'rounded-lg border border-muted px-5 @sm:px-7 @5xl:rounded-xl',
//             childrenWrapperClass
//           )}
//         >
//           {children}
//         </div>
//       </div>
//     );
//   }

const WidgetCard = ({
  title,
  className,
  children,
  childrenWrapperClass,
}: {
  title?: string;
  className?: string;
  children: React.ReactNode;
  childrenWrapperClass?: string;
}) => {
  return (
    <div className={className}>
      <Title
        as="h3"
        className="mb-3.5 text-base font-semibold @5xl:mb-5 4xl:text-lg"
      >
        {title}
      </Title>
      <div
        className={cn(
          "rounded-lg border border-muted px-5 @sm:px-7 @5xl:rounded-xl",
          childrenWrapperClass
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default WidgetCard;
