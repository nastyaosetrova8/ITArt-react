import { MutatingDots } from 'react-loader-spinner';

export default function Loader() {
  return (
    <>
      <MutatingDots
        height="100"
        width="100"
        color="#ebd2eeb9"
        secondaryColor="#813a81b8"
        radius="15"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100vh',
          background: `transparent`,
        }}
        wrapperClass=""
        visible={true}
      />
    </>
  );
}
