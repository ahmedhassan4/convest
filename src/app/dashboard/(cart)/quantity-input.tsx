'use client';

import { PiMinusBold, PiPlusBold } from 'react-icons/pi';
import { ActionIcon } from 'rizzui';


export default function QuantityInput({ product }: { product: any }) {

  return (
    <div className="inline-flex items-center rounded-lg border border-muted px-1.5 hover:border-gray-1000">
      <ActionIcon
        title="Decrement"
        size="sm"
        variant="flat"
        className="h-auto px-1 py-[5px]"
        onClick={() => {}}
      >
        <PiMinusBold className="h-4 w-4" />
      </ActionIcon>
      <input
        type="number"
        className="h-full w-12 border-none text-center outline-none focus:ring-0 sm:w-20 dark:bg-gray-50"
        value={product.quantity}
        readOnly
      />
      <ActionIcon
        title="Increment"
        size="sm"
        variant="flat"
        className="h-auto px-1 py-1.5"
        onClick={() => {}}
      >
        <PiPlusBold className="h-3.5 w-3.5" />
      </ActionIcon>
    </div>
  );
}
