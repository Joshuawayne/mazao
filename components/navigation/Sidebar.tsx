
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';
import { ROUTES } from '../../constants';
import Logo from '../common/Logo';
import { HomeIcon, CartIcon, BookIcon, ChatBubbleIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon, MenuIcon } from '../common/Icon';

interface SidebarNavItemProps {
  to: string;
  icon: React.ReactNode;
  labelKey: string;
  isCollapsed: boolean;
}

const SidebarNavItem: React.FC<SidebarNavItemProps> = ({ to, icon, labelKey, isCollapsed }) => {
  const { translate } = useAppContext();
  const location = useLocation();
  const isActive = location.pathname === to || (to === ROUTES.HOME && location.pathname === ROUTES.SPLASH);


  return (
    <NavLink
      to={to}
      className={`flex items-center py-3 transition-colors duration-150 ease-in-out rounded-lg group
                  ${isCollapsed ? 'px-3 justify-center' : 'px-4'}
                  ${isActive 
                    ? 'bg-primary-light text-primary-dark font-semibold' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
      title={isCollapsed ? translate(labelKey) : undefined}
      aria-current={isActive ? "page" : undefined}
    >
      <span className={`transition-transform duration-200 group-hover:scale-110 ${isActive ? 'text-primary-dark' : 'text-gray-500 group-hover:text-gray-700'}`}>{icon}</span>
      {!isCollapsed && <span className="ml-3 text-sm font-medium">{translate(labelKey)}</span>}
    </NavLink>
  );
};

const Sidebar: React.FC = () => {
  const { user, translate, isSidebarCollapsed, toggleSidebar } = useAppContext();

  if (!user || !user.isLoggedIn) {
    return null;
  }

  const navItems = [
    { to: ROUTES.HOME, icon: <HomeIcon className="w-5 h-5" />, labelKey: 'home' },
    { to: ROUTES.SELL_PRODUCE, icon: <CartIcon className="w-5 h-5" />, labelKey: 'sellProduce' },
    { to: ROUTES.SMART_FARMING, icon: <BookIcon className="w-5 h-5" />, labelKey: 'learn' },
    { to: ROUTES.CHAT, icon: <ChatBubbleIcon className="w-5 h-5" />, labelKey: 'chat' },
  ];

  return (
    <aside 
      className={`hidden md:flex flex-col bg-white border-r border-gray-200 shadow-lg
                  fixed left-0 top-0 h-full z-30 transition-all duration-300 ease-in-out pt-[var(--header-height)]
                  ${isSidebarCollapsed ? 'w-20' : 'w-64'}`}
    >
      <div className={`flex items-center border-b border-gray-200 ${isSidebarCollapsed ? 'justify-center py-3.5 px-2' : 'justify-between p-4'}`}>
        {!isSidebarCollapsed && (
          <div className="shrink-0 -ml-1">
            <Logo size="text-lg" textColor="text-primary-dark"/>
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className="p-2 text-gray-500 hover:text-primary-dark hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label={translate('toggleNavigation')}
          title={translate('toggleNavigation')}
        >
          {isSidebarCollapsed ? <MenuIcon className="w-5 h-5" /> : <ChevronDoubleLeftIcon className="w-5 h-5" />}
        </button>
      </div>
      
      <nav className="flex-grow p-2 space-y-1 overflow-y-auto scrollbar-thin">
        {navItems.map(item => (
          <SidebarNavItem 
            key={item.to} 
            to={item.to} 
            icon={item.icon} 
            labelKey={item.labelKey} 
            isCollapsed={isSidebarCollapsed} 
          />
        ))}
      </nav>

      {!isSidebarCollapsed && (
          <div className="p-4 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500">{translate('worksOffline')} (mock)</p>
          </div>
      )}
    </aside>
  );
};

export default Sidebar;
