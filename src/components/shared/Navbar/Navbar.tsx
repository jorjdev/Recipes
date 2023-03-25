import * as z from 'zod';
import Logo from './Logo/Logo';
import ActionGroup from './ActionGroup/actiongroup/ActionGroup';

const navbarPropsSchema = z.object({
  className: z.string(),
});

interface NavbarProps extends z.infer<typeof navbarPropsSchema> {}

const Navbar : React.FC<NavbarProps> = ({ className }) => {
  const validateProps = navbarPropsSchema.parse({ className });
  return (
    <div className={validateProps.className}>

      <Logo className="w-12 mt-1" size={20} />
      {/* <SearchBox
        className="w-1/3 sm:w-8/12 bg-search-bg-color text-search-text
         placeholder-navi-blue h-12 ml-12 mt-2 pl-6 rounded-xl"
      /> */}

      <ActionGroup className="flex flex-row justify-between mt-1" />

    </div>

  );
};

export default Navbar;
