interface BlockComponentProps {
  isLeftLayout: boolean;
}

function BlockComponent({ isLeftLayout }: BlockComponentProps) {
  return (
    <div className="w-full h-[350px] flex justify-between rounded-full bg-beige-dark">
      <div
        className={`flex flex-col ${
          !isLeftLayout ? "order-1" : ""
        } text-white items-center justify-center bg-restore-pink w-[350px] rounded-full`}
      >
        <div>ReStore saves a total of</div>
        <div className="text-[128px] font-bold">275</div>
        <div>tons of CO2 per year!</div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default BlockComponent;
