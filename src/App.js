import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import {
  useLocation, Switch, Route, useHistory,
} from 'react-router-dom';
import {
  PageHeader, Button,
} from 'antd';
import { clearMessage } from './redux/action/message';
import Home from './component/Home';
import NewNft from './component/NewNft';
import useMetaMask from './hooks/metamask';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { connect, shouldDisable } = useMetaMask();
  useEffect(() => {
    dispatch(clearMessage()); // clear message when changing location
  }, [dispatch, location]);

  return (
    <>
      <PageHeader
        className="site-page-header border border-bottom"
        title="Ternoa"
        subTitle="NFT MarketPlace"
        extra={[
          <Button key="3" type="text" onClick={() => { history.push('/'); }}>Explore</Button>,
          <Button key="1" type="text" onClick={() => { history.push('/nft/new'); }}>
            Add New
          </Button>,
          <Button key="2" type="text" onClick={connect} disabled={shouldDisable}>Wallet</Button>,
        ]}
      />
      <Switch>
        <Route exact path={['/', '/home']} component={Home} />
        <Route exact path="/nft" component={Home} />
        <Route exact path="/nft/new" component={NewNft} />
      </Switch>
    </>
  );
}

export default App;
