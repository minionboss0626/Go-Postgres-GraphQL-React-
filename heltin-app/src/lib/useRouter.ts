/**
 *
 * router
 *
 */

import { useContext, useEffect } from 'react';
import { __RouterContext, RouteComponentProps } from 'react-router';
import { useForceUpdate } from '@domonda/ui/hooks';

export function useRouter<
  Params extends { [K in keyof Params]?: string } = {}
>(): RouteComponentProps<Params> {
  const forceUpdate = useForceUpdate();
  const router = useContext<RouteComponentProps<Params>>(__RouterContext as any);

  useEffect(() => {
    const unlisten = router.history.listen(forceUpdate);
    return () => unlisten();
  }, [router]);

  return router;
}
