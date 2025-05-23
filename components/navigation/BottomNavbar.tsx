
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { HomeIcon, CartIcon, BookIcon, ChatBubbleIcon } from '../common/Icon';
import { useAppContext } from '../../contexts/AppContext';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  labelKey: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, labelKey }) => {
  const { translate } = useAppContext();
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center justify-center p-2 w-1/4 text-xs transition-colors duration-150 ease-in-out h-full
         ${isActive ? 'text-primary font-semibold border-t-2 border-primary' : 'text-gray-500 hover:text-primary-dark'}`
      }
    >
      {icon}
      <span className="mt-0.5">{translate(labelKey)}</span>
    </NavLink>
  );
};

const BottomNavbar: React.FC = () => {
  const { translate, user } = useAppContext();

  if (!user || !user.isLoggedIn) {
    return null;
  }

  const navItems = [
    { to: ROUTES.HOME, icon: <HomeIcon className="w-5 h-5 sm:w-6 sm:h-6" />, labelKey: 'home' },
    { to: ROUTES.SELL_PRODUCE, icon: <CartIcon className="w-5 h-5 sm:w-6 sm:h-6" />, labelKey: 'sellProduce' },
    { to: ROUTES.SMART_FARMING, icon: <BookIcon className="w-5 h-5 sm:w-6 sm:h-6" />, labelKey: 'learn' },
    { to: ROUTES.CHAT, icon: <ChatBubbleIcon className="w-5 h-5 sm:w-6 sm:h-6" />, labelKey: 'chat' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-top z-30 flex justify-around h-[var(--footer-height)] md:hidden">
      {navItems.map(item => (
        <NavItem key={item.to} {...item} />
      ))}
      {/* Offline indicator could be a small dot or text, but simplicity is key. The prompt wanted text at the bottom.
          It might be better placed in the header or as a toast. For now, keeping it as requested (sort of).
      */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-0.5 px-1.5 py-0.5 bg-gray-200 text-gray-600 text-[10px] rounded-full opacity-75">
        {translate('worksOffline')} (mock)
      </div>
    </nav>
  );
};

export default BottomNavbar;
