'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Avatar, Title, Text, Button } from 'rizzui';
import { usePathname, useRouter } from "next/navigation";
import { routes } from "@/config/routes";

import {
  PiArrowLeftBold,
  PiArrowLineRight,
  PiDribbbleLogo,
  PiFacebookLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiTwitterLogo,
} from "react-icons/pi";
import cn from "@/utils/class-names";
import ArrowShape from "@/componnets/shape/arrow";
import BgImage from "@/images/Greeny.png";

export default function AuthWrapperTwo({
  children,
  title,
}: {
  children: React.ReactNode;
  title: React.ReactNode;
}) {
  return (
    <div className="min-h-screen items-center justify-center xl:flex xl:bg-gray-50 xl:px-5 xl:py-16 2xl:px-8 2xl:py-28">
      <div className="mx-auto w-full py-2 xl:py-14 2xl:w-[1720px]">
        <div className="rounded-xl bg-white xl:flex dark:bg-transparent dark:xl:bg-gray-100/50 xl:shadow-md relative">
          <div className="absolute top-10 right-10 hidden xl:flex  ">
            <Text className="font-serif cursor-pointer">العربية</Text>
          </div>
          <AuthNavBar />
          <IntroBannerBlock />
          <div className="flex w-full items-center px-4 xl:px-0 ">
            <div className="mx-auto w-[85%] max-w-sm shrink-0 py-16 md:max-w-md xl:px-8 xl:py-10 2xl:max-w-xl 2xl:py-14 3xl:py-20">
              <Title
                as="h2"
                className="mb-6 text-center text-[26px] font-bold leading-snug md:!leading-normal xl:mb-8 xl:text-start xl:text-3xl xl:text-[28px] 2xl:-mt-1 2xl:text-[28px]"
              >
                {title}
                <span style={{ color: "#2B90EC", fontSize: "1.2em" }}>.</span>
              </Title>

              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AuthNavLink({
  href,
  children,
}: React.PropsWithChildren<{
  href: string;
}>) {
  const pathname = usePathname();
  function isActive(href: string) {
    if (pathname === href) {
      return true;
    }
    return false;
  }

  return (
    <Link
      href={href}
      className={cn(
        "before:bg-primary-light relative flex items-center gap-x-1.5 text-[15px] font-medium text-gray-700 transition-colors duration-200 before:absolute before:bottom-0 before:start-0 before:h-0.5 before:content-[''] hover:text-gray-900 xl:gap-x-2.5 xl:px-6 xl:py-0.5 xl:text-base xl:before:top-0 xl:before:h-full 2xl:px-9 [&>svg]:w-[22px] [&>svg]:shrink-0 xl:[&>svg]:w-6",
        isActive(href) ? "before:w-full xl:before:w-1" : " "
      )}
    >
      {children}
    </Link>
  );
}

function AuthNavBar() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex shrink-0 justify-between rounded-bl-xl rounded-tl-xl bg-white px-4 py-4 xl:sticky xl:top-0 xl:w-36 xl:flex-col xl:items-center xl:justify-start xl:px-0 xl:py-14 2xl:w-[184px] dark:bg-transparent">
      <Link href="/" className="mb-1 inline-block max-w-[64px]">
        <Image
          src={"/Vector.svg"}
          alt="Isomorphic"
          width={64}
          height={64}
          className="dark:invert w-10 h-10 lg:w-20 lg:h-20"
        />
      </Link>

      <div className="flex items-center  space-x-6 xl:w-full xl:flex-col xl:space-x-0 xl:space-y-6 xl:pt-9 2xl:space-y-7 2xl:pt-12 3xl:pt-14">
        <Button variant="text" className="font-serif xl:hidden pt-3">
          العربية
        </Button>

        <div className="h-6 w-[1px] bg-gray-400 xl:hidden"></div>

        <AuthNavLink href={routes.auth.login}>
          <PiArrowLineRight className="h-[22px] w-[22px] hidden xl:flex" />
          Login
        </AuthNavLink>
      </div>

      <Button
        variant="text"
        onClick={handleGoBack}
        className="relative hidden items-center gap-x-1.5 text-[15px] font-medium text-gray-700 transition-colors duration-200 hover:text-gray-1000 xl:mt-auto xl:flex xl:gap-x-1.5 xl:py-0.5 xl:pe-6 xl:ps-3 xl:text-base xl:text-gray-500 xl:before:top-0 xl:before:h-full xl:hover:text-gray-700 2xl:pe-9 2xl:ps-7 [&>svg]:w-[22px] [&>svg]:shrink-0 xl:[&>svg]:w-6"
      >
        <PiArrowLeftBold />
        Back
      </Button>
    </div>
  );
}

function IntroBannerBlock() {
  return (
    <div className="relative hidden w-[calc(50%-50px)] shrink-0 rounded-lg xl:-my-9 xl:block xl:w-[calc(50%-20px)] 2xl:-my-12 3xl:-my-14">
      <div className="absolute mx-auto h-full w-full overflow-hidden rounded-lg">
        <Image
          fill
          priority
          src={BgImage}
          alt="Sign Up Thumbnail"
          sizes="(max-width: 768px) 100vw"
          className="bg-primary object-cover"
        />
      </div>
      <div className="relative z-20 flex h-full flex-col justify-between px-10 py-24 xl:px-16 xl:py-28 2xl:px-24">
        <div className="text-white">
          <div className="inline-flex max-w-[120px]">
            <Image src={'/auth/star.svg'} alt="Star" width={120} height={120} />
          </div>
          <Title
            as="h2"
            className="mb-5 pt-3.5 text-[26px] font-semibold leading-snug text-white md:text-3xl md:!leading-normal xl:mb-7 xl:text-4xl xl:text-[28px] xl:leading-snug 2xl:text-5xl 2xl:leading-snug"
          >
            Recent Logins .
          </Title>
          <Text className="mb-5 text-base leading-loose xl:mb-7 2xl:pe-20">
            Click on a picture or add an account.
          </Text>

          <JoinedMember />
        </div>

        <SocialLinks />
      </div>
    </div>
  );
}

const socialLinks = [
  {
    title: 'Facebook',
    link: 'https://www.facebook.com/redqinc',
    icon: <PiFacebookLogo className="h-auto w-4" />,
  },
  {
    title: 'Twitter',
    link: 'https://twitter.com/RedqTeam',
    icon: <PiTwitterLogo className="h-auto w-4" />,
  },
  {
    title: 'Instagram',
    link: 'https://www.instagram.com/redqteam/',
    icon: <PiInstagramLogo className="h-auto w-4" />,
  },
  {
    title: 'Linkedin',
    link: 'https://www.linkedin.com/company/redqinc/',
    icon: <PiLinkedinLogo className="h-auto w-4" />,
  },
  {
    title: 'Dribbble',
    link: 'https://dribbble.com/redqinc',
    icon: <PiDribbbleLogo className="h-auto w-4" />,
  },
];
function SocialLinks() {
  return (
    <div className="-mx-2 flex items-center pt-24 text-white xl:-mx-2.5 2xl:pb-5 2xl:pt-40 [&>a>svg]:w-5 xl:[&>a>svg]:w-6">
      {socialLinks.map((item) => (
        <a
          key={item.title}
          href={item.link}
          title={item.title}
          target="_blank"
          className="mx-2 transition-opacity hover:opacity-80 xl:mx-2.5"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}

const members = [
  'https://randomuser.me/api/portraits/women/40.jpg',
  'https://randomuser.me/api/portraits/women/41.jpg',
  'https://randomuser.me/api/portraits/women/42.jpg',
  'https://randomuser.me/api/portraits/women/43.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
];
function JoinedMember() {
  return (
    <div className="flex items-center">
      <div className="mx-0.5">
        {members.map((member) => (
          <Avatar
            key={member}
            src={member}
            name="avatar"
            className="relative -mx-0.5 inline-flex object-cover ring-2 ring-gray-0"
          />
        ))}
      </div>
      <div className="relative inline-flex items-center justify-center px-3 text-xs font-semibold">
        Join 30,000+ users
      </div>
      <ArrowShape className="h-11 w-10 text-white" />
    </div>
  );
}
