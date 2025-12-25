import Sponsors from "./Sponsors";

const Copyright: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-10 pb-5 max-w-[770px] mx-auto mt-5">
      <Sponsors />
      <div className="w-full text-center flex flex-col gap-5 border-t pt-5 px-2 border-[#8C8D8E]">
        <p className="text-[#8C8D8E] text-xs">
          تمامی حقوق مادی و معنوی متعلق به شرکت آوانو می‌باشد. هر گونه کپی
          برداری از روش و محتواها منجر به پیگرد قانونی خواهد شد.
        </p>
      </div>
    </div>
  );
};

export default Copyright;
