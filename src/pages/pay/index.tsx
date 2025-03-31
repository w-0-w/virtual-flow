import { definePageConfig } from 'ice';

export default function Pay() {
  const Padding = 16;
  const linkX = `imtokenv2://navigate/DappView?url='+encodeURIComponent(${window.location.href})`;
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
          href={linkX}
          style={{
            color: '#fff',
          }}
        >
          Open in imToken
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
