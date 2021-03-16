import { useState } from 'react';
import { TopBar } from './TopBar';
import { DrawerNav } from './DrawerNav';

export function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);

	const toggleDrawer = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<>
			<TopBar toggleDrawer={toggleDrawer} />
			<DrawerNav toggleDrawer={toggleDrawer} mobileOpen={mobileOpen} />
		</>
	);
}
