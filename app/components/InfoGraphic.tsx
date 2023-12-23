interface InfoGraphicProps {
  isLeftLayout: boolean;
}

function InfoGraphic({ isLeftLayout }: InfoGraphicProps) {
  return (
    <div className=" h-[400px] flex justify-between rounded-full bg-beige-dark mx-20">
      <div
        className={`flex flex-col ${
          !isLeftLayout ? "order-1" : ""
        } text-white items-center justify-center bg-restore-pink w-[400px] rounded-full`}
      >
        <div>ReStore saves a total of</div>
        <div className="text-[128px] font-bold">275</div>
        <div>tons of CO2 per year!</div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default InfoGraphic;
