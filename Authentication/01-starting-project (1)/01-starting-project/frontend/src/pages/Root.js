import { Outlet, useRouteLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { getTockenDuration } from '../util/Auth';

function RootLayout() {
  // const navigation = useNavigation();
  const token = useRouteLoaderData();
  const submit = useSubmit()
  useEffect(()=>{
    if(!token){
      return ;
    }
    if(token ==='EXPIRED'){
      submit(null,{action:'./logout',method:'POST'})
      return 
    }

    const tokenDuration = getTockenDuration()
    console.log(tokenDuration);

    setTimeout(() => {
      submit(null,{action:'./logout',method:'POST'})
    }, tokenDuration );
  },[token,submit])


  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
