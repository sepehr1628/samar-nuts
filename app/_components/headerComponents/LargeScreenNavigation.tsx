import Logo from "../UI/Logo";
import LargeScreenMenu from "./LargeScreenMenu";

const LargeScreenNavigation: React.FC = () => {
  return (
    <div className="hidden xlg:flex items-center justify-between py-5 h-19.25 max-w-[1960] mx-auto">
      <Logo />
      <LargeScreenMenu />
      <div className="px-16"></div>
    </div>
  );
};

export default LargeScreenNavigation;
