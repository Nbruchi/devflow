import Image from "next/image";
import Link from "next/link";
import ThemeToggler from "./theme-toggler";
import MobileNavigation from "./mobile-navigation";
import { auth } from "@/auth";
import UserAvatar from "@/components/user-avatar";
import GlobalSearch from "@/components/search/global-search";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="flex-between background-light900_dark200 shadow-light-300 fixed z-50 w-full gap-5 p-6 sm:px-12 dark:shadow-none">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/images/site-logo.svg" alt="Logo" width={23} height={23} />
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev
          <span className="text-primary-500">Flow</span>
        </p>
      </Link>

      <GlobalSearch />

      <div className="flex-between gap-5">
        <ThemeToggler />
        {session?.user && (
          <UserAvatar
            id={session.user.id as string}
            name={session.user.name as string}
            imageUrl={session.user.image as string}
          />
        )}
      </div>
      <MobileNavigation />
    </nav>
  );
};

export default Navbar;
