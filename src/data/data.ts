import CargoDamaged from "@/componnets/icons/cargo-damaged";
import MagnifyingGlassIconColor from "@/componnets/icons/magnifying-glass-color";
import RefundIcon from "@/componnets/icons/refund";
import ShipWithContainer from "@/componnets/icons/ship-with-container";
import TurtleIcon from "@/componnets/icons/turtle";
import { avatarIds } from "@/utils/get-avatar";
import { getRandomArrayElement } from "@/utils/get-random-array-element";
import { BuildingApartment, MapPinArea } from "@phosphor-icons/react";


export const customer = {
  avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
    avatarIds
  )}.png`,
  name: 'Irene Powlowski',
  email: 'johnson.olson@yahoo.com',
  phone: '(440) 701-6597',
  address: '49001 Mossie Row Berkshire',
  branch: 'Main-Branch',
};

export const stats = [
  {
    icon: MapPinArea,
    label: 'City',
    value: "Cairo",
  },
  { icon: BuildingApartment, label: 'Due', value: 2890, isCurrency: true },
  { icon: RefundIcon, label: 'Refund', value: 310, isCurrency: true },
  { icon: ShipWithContainer, label: 'Shipments', value: 120 },
  { icon: CargoDamaged, label: 'Damaged', value: 8 },
  { icon: TurtleIcon, label: 'Late Delivery', value: 34 },
  { icon: MagnifyingGlassIconColor, label: 'Lost Shipment', value: 2 },
];
