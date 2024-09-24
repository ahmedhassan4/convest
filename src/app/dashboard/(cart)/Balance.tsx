import { Title } from "rizzui";

const Balance = () => {
  return (
    <div className="">
      <div className="mb-3.5 @5xl:mb-5">
        <Title as="h3" className="text-base font-semibold @7xl:text-lg">
          Balance
        </Title>
      </div>
      <div className="space-y-6 rounded-xl border border-muted px-5 py-6 @5xl:space-y-7 @5xl:p-7">
        <div className="flex justify-between font-medium">
          Total Amount <span>$5275.00</span>
        </div>
        <div className="flex justify-between font-medium">
          Amount Paid <span>$350.00</span>
        </div>
        <div className="flex justify-between font-medium">
          Amount Outstanding <span>$3000.00</span>
        </div>
        <div className="flex justify-between font-medium">
          Next Instalments Due <span>$350.00</span>
        </div>
      </div>
    </div>
  );
};

export default Balance;
