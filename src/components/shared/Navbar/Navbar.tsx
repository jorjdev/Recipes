import * as z from 'zod';
import Logo from './Logo/Logo';
import SearchBox from './SearchBox/SearchBox';

const navbarPropsSchema = z.object({
  className: z.string(),
});

interface NavbarProps extends z.infer<typeof navbarPropsSchema> {}

const Navbar : React.FC<NavbarProps> = ({ className }) => {
  const validateProps = navbarPropsSchema.parse({ className });
  return (
    <div className={validateProps.className}>

      <Logo className="w-20" size={30} />
      <SearchBox
        className="w-1/3 h-12 ml-12 mt-2 pl-6 rounded-xl"
      />
    </div>

  );
};

export default Navbar;
