import React, {
  useState, useEffect, useMemo, useCallback,
} from 'react';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../component/connectors';

export const MetaMaskContext = React.createContext(null);

export const MetaMaskProvider = ({ children }) => {
  const {
    activate, account, active, deactivate,
  } = useWeb3React();

  const [isActive, setIsActive] = useState(false);
  const [shouldDisable, setShouldDisable] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Init Loading
  useEffect(() => {
    connect().then((val) => {
      setIsLoading(false);
    });
  }, []);

  // Check when App is Connected or Disconnected to MetaMask
  const handleIsActive = useCallback(() => {
    setIsActive(active);
  }, [active]);

  useEffect(() => {
    handleIsActive();
  }, [handleIsActive]);

  // Connect to MetaMask wallet
  const connect = async () => {
    setShouldDisable(true);
    try {
      await activate(injected).then(() => {
        setShouldDisable(false);
      });
    } catch (error) {
    }
  };

  // Disconnect from Metamask wallet
  const disconnect = async () => {
    try {
      await deactivate();
    } catch (error) {
    }
  };

  const values = useMemo(
    () => ({
      isActive,
      account,
      isLoading,
      connect,
      disconnect,
      shouldDisable,
    }),
    [isActive, isLoading, shouldDisable, account],
  );

  return <MetaMaskContext.Provider value={values}>{children}</MetaMaskContext.Provider>;
};

export default function useMetaMask() {
  const context = React.useContext(MetaMaskContext);

  if (context === undefined) {
    throw new Error('useMetaMask hook must be used with a MetaMaskProvider component');
  }

  return context;
}
