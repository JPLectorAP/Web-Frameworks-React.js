import { createContext, useState, ReactNode } from "react";
import { createAvatar } from '@dicebear/core';
import { funEmoji } from '@dicebear/collection';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface UserContextType {
  user: User | null;
  login: (name: string, email: string) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType>({ user: null, login: () => {}, logout: () => {} });

export const UserProvider = ({ children } : {children: ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (name: string, email: string) => {

    const avatar = createAvatar(funEmoji, { seed: name }).toDataUri();
    
    const newUser: User = {
      id: `${name}--${Date.now().toString()}`,
      name,
      email,
      avatar,
    };
    setUser(newUser);
  };

  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
