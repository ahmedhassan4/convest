import { PiCheckBold } from "react-icons/pi";
import WidgetCard from "./WidgetCard";
import cn from "@/utils/class-names";
import { GoInfo } from "react-icons/go";
import OrderStatusInfo from "./OrderStatusInfo";
import { useModal } from "@/shared/modal-views/use-modal";

const OrderStatus = () => {
  const { openModal } = useModal();
  const orderStatus = [
    { id: 1, label: "Order Created", info: true },
    {
      id: 2,
      label: "1st Instalment (450 EGP)",
      description: "23rd March 2024",
      info: true,
    },
    {
      id: 3,
      label: "2nd Instalment (450 EGP)",
      description: "23rd March 2024",
    },
    {
      id: 4,
      label: "3rd Instalment (450 EGP)",
      description: "23rd March 2024",
    },
    {
      id: 5,
      label: "5th Instalment (450 EGP)",
      description: "23rd March 2024",
      info: true,
    },
    {
      id: 6,
      label: "6th Instalment (450 EGP)",
      description: "23rd April 2024",
    },
    { id: 7, label: "Out For Delivery", description: "23rd May 2024" },
    { id: 8, label: "Delivered", description: "2 Item(s)", info: true },
    {
      id: 9,
      label: "7th Instalment (220 EGP)",
      description: "2 Item(s)",
    },
    {
      id: 10,
      label: "8th Instalment (220 EGP)",
      description: "23rd June 2024",
    },
    {
      id: 11,
      label: "9th Instalment (220 EGP)",
      description: "23rd June 2024",
    },
    {
      id: 12,
      label: "Out For Delivery",
      description: "1 Item(s)",
    },
    { id: 13, label: "Delivered" },
  ];

  const currentOrderStatus = 3;

  const handleInfoClick = () => {
    openModal({
      view: <OrderStatusInfo />,
      customSize: "550px",
      size: "sm",
    });
  };

  return (
    <WidgetCard
      title="Order Status"
      childrenWrapperClass="py-5 @5xl:py-8 flex"
      className="my-10"
    >
      <div className="ms-2 w-full space-y-7 border-s-2 border-gray-100">
        {orderStatus.map((item) => (
          <div
            key={item.id}
            className={cn(
              "relative ps-6 text-sm font-medium before:absolute before:-start-[9px] before:top-px before:h-5 before:w-5 before:-translate-x-px before:rounded-full before:bg-gray-100 before:content-[''] after:absolute after:-start-px after:top-5  after:h-10 after:w-0.5  after:content-[''] last:after:hidden",
              currentOrderStatus > item.id
                ? "before:bg-primary after:bg-primary"
                : "after:hidden",
              currentOrderStatus === item.id && "before:bg-primary",
              { "after:h-14": Boolean(item.description) },
              { "after:h-10": !Boolean(item.description) }
            )}
          >
            {currentOrderStatus >= item.id ? (
              <span className="absolute -start-1.5 top-1 text-white">
                <PiCheckBold className="h-auto w-3" />
              </span>
            ) : null}

            <span className="flex items-center">
              {item.label}

              {item.info && (
                <GoInfo
                  size={16}
                  className="ml-1 text-[#2B90EC] cursor-pointer"
                  onClick={handleInfoClick}
                />
              )}
            </span>

            {item.description && (
              <span className="block text-[13px] text-[#666666] font-normal">
                {item.description}
              </span>
            )}
          </div>
        ))}
      </div>
    </WidgetCard>
  );
};

export default OrderStatus;
