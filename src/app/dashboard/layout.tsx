import HydrogenLayout from "@/cors/layout/hydrogen/layout";
import 'swiper/css';
import 'swiper/css/navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <HydrogenLayout>{children}</HydrogenLayout>;
};
export default Layout;
