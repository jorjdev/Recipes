import React from 'react';

interface AuthWidgetProps {
  className : string,
  isVisible : boolean,
}

const AuthWidget : React.FC<AuthWidgetProps> = ({ className, isVisible }) => (
  isVisible ? (
    <div className={className}>
      <div><span>Sign in</span></div>
      <div><span>Sign up</span></div>
    </div>
  ) : null

);
export default AuthWidget;
