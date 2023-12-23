interface InfoGraphicProps {
  isLeftLayout: boolean;
}

function InfoGraphic({ isLeftLayout }: InfoGraphicProps) {
  return (
    <div className="w-full">
      <div className=" h-[600px] w-min lg:w-auto flex justify-between rounded-full bg-beige-dark mx-40">
        <div
          className={`flex flex-col ${
            !isLeftLayout ? "order-1" : ""
          } text-white items-center justify-center bg-restore-pink w-[600px] rounded-full`}
        >
          <div>ReStore saves a total of</div>
          <div className="text-[128px] font-bold">275</div>
          <div>tons of CO2 per year!</div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default InfoGraphic;
