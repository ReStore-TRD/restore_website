interface InfoGraphicProps {
  isLeftLayout: boolean;
}

function InfoGraphic({ isLeftLayout }: InfoGraphicProps) {
  return (
    <div className="w-min lg:w-full justify-center">
      <div className="h-[300px] lg:h-[400px] w-min lg:w-auto flex justify-between rounded-full bg-beige-dark lg:mx-40">
        <div
          className={`flex flex-col ${
            !isLeftLayout ? "order-1" : ""
          } text-white items-center gap-2 justify-center bg-restore-pink aspect-square rounded-full`}
        >
          <div>ReStore saves a total of</div>
          <div className="text-[64px] lg:text-[128px] font-bold">275</div>
          <div>tons of CO2 per year!</div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default InfoGraphic;
