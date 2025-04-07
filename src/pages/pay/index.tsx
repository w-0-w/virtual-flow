// import { useEffect } from 'react';
import { definePageConfig } from 'ice';

// import { queryStringify } from '@/utils';

export default function Pay() {
  const Padding = 16;

  const imToken__url = encodeURIComponent(window.location.href);
  const imToken__link = `imtokenv2://navigate/DappView?url=${imToken__url}`;

  const tronLink_str = JSON.stringify({
    url: window.location.href,
    action: 'open',
    protocol: 'tronlink',
    version: '1.0',
  });
  const tronLink__param = encodeURIComponent(tronLink_str);
  const tronLink__link = `tronlinkoutside://pull.activity?param=${tronLink__param}`;

  // async function getTronWeb() {
  //   const res = await tronLink.request({ method: 'tron_requestAccounts' });
  //     alert(`xxx: ${JSON.stringify(res)}`);
  //     if (res.code === 200) {
  //       tronWeb = tronLink.tronWeb;
  //     }
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     getTronWeb();
  //   }, 5_000);
  // }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        padding: `${Padding}px`,
        overflow: 'auto',
      }}
    >
      <h2>订单</h2>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: `calc((100% - ${Padding * 2}px) / 2)`,
          height: '5vh',
          backgroundColor: '#0792bf',
          borderRadius: '6px',
        }}
      >
        <a
          href={imToken__link}
          style={{
            color: '#fff',
          }}
        >
          Open in imToken - no
        </a>
      </div>
      <br />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: `calc((100% - ${Padding * 2}px) / 2)`,
          height: '5vh',
          backgroundColor: '#0792bf',
          borderRadius: '6px',
        }}
      >
        <a
          href={tronLink__link}
          style={{
            color: '#fff',
          }}
        >
          Open in tronLink
        </a>
      </div>
    </div>
  );
}

export const pageConfig = definePageConfig(() => {
  return {
    auth: ['admin', 'user'],
    title: '支付',
  };
});
