import React from 'react';

export const iconData = {
  id: "Vault",
  name: "Vault",
  category: "V",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["circle",{"cx":"7.5","cy":"7.5","r":".5","fill":"currentColor"}],["path",{"d":"m7.9 7.9 2.7 2.7"}],["circle",{"cx":"16.5","cy":"7.5","r":".5","fill":"currentColor"}],["path",{"d":"m13.4 10.6 2.7-2.7"}],["circle",{"cx":"7.5","cy":"16.5","r":".5","fill":"currentColor"}],["path",{"d":"m7.9 16.1 2.7-2.7"}],["circle",{"cx":"16.5","cy":"16.5","r":".5","fill":"currentColor"}],["path",{"d":"m13.4 13.4 2.7 2.7"}],["circle",{"cx":"12","cy":"12","r":"2"}]]
};

export const Vault = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
      <path d="m7.9 7.9 2.7 2.7" />
      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
      <path d="m13.4 10.6 2.7-2.7" />
      <circle cx="7.5" cy="16.5" r=".5" fill="currentColor" />
      <path d="m7.9 16.1 2.7-2.7" />
      <circle cx="16.5" cy="16.5" r=".5" fill="currentColor" />
      <path d="m13.4 13.4 2.7 2.7" />
      <circle cx="12" cy="12" r="2" />
      {children}
    </svg>
  );
});

export default Vault;
