
import React from 'react';

// Define specific icon components here or import them if they get too numerous

export const MicrophoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-6"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"  strokeWidth={1.5} >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15c-1.126 0-2.092-.442-2.844-1.156a4.475 4.475 0 01-1.156-2.844V7.875c0-1.563 1.262-2.832 2.813-2.874A2.85 2.85 0 0112 4.875V15z" />
  </svg>
);

export const TrendUpIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-5 h-5"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
);


export const TrendDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-5 h-5"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.306-4.307a11.95 11.95 0 015.814 5.519l2.74 1.22m0 0l-5.94 2.28m5.94-2.28l-2.28-5.941" />
  </svg>
);

export const LockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-5 h-5"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

export const HomeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5"></path></svg>
);

export const CartIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg>
);

export const BookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg>
);

export const ChatBubbleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.722.465c-.834.105-1.63.554-2.229 1.217l-2.444 2.888a.75.75 0 01-1.29-.549V18.593c0-.72-.439-1.356-1.153-1.639l-.753-.289c-.937-.36-1.597-1.26-1.597-2.283V8.511c0-.97.66-1.813 1.597-2.097l.753-.289c.714-.282 1.153-.92 1.153-1.638V4.25a.75.75 0 011.29.549l2.444 2.888c.599.663 1.395 1.112 2.229 1.217l3.722.465z"></path></svg>
);

export const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

export const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"></path></svg>
);

export const AlertTriangleIcon: React.FC<{ className?: string }> = ({ className }) => (
 <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path></svg>
);

export const VideoCameraIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0013.5 5.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z"></path></svg>
);

export const ArrowLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
    </svg>
);

export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
    </svg>
);

export const ChevronDoubleLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"></path>
    </svg>
);

export const ChevronDoubleRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 4.5l7.5 7.5-7.5 7.5m6-15l7.5 7.5-7.5 7.5"></path>
    </svg>
);

export const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
    </svg>
);
