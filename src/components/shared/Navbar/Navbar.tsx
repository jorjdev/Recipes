import Logo from './Logo/Logo';
import ActionGroup from './ActionGroup/actiongroup/ActionGroup';
import SearchBox from './SearchBox/SearchBox';
import useSearchBar from '@/hooks/useSearchBar';

interface NavbarProps {
  className: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { isSearchBarOpen } = useSearchBar();

  return (
    <div className={className}>
      {isSearchBarOpen ? (
        <SearchBox
          className="relative top-1 sm:mr-5"
        />
      ) : (
        <>
          <Logo className="w-12 mt-1" size={20} />
          <ActionGroup
            className="flex flex-row  mt-1"
          />
        </>
      )}
    </div>
  );
};

export default Navbar;
