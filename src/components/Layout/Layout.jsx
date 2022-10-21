import { Box } from 'constants/Box';
import NavBar from 'components/NavBar/NavBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <Box>
      <Box
        as="header"
        // mb={3}
        backgroundColor="muted"
        boxShadow="0px 5px 5px 0px rgba(0,0,0,0.2)"
      >
        <NavBar />
      </Box>
      <Box as="section" backgroundColor="white" p="15px">
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
}
