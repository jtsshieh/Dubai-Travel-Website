import { useState } from 'react';
import { TopBar } from './TopBar';
import { DrawerNav } from './DrawerNav';

export function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<>
			<TopBar handleDrawerToggle={handleDrawerToggle} />
			<DrawerNav
				handleDrawerToggle={handleDrawerToggle}
				mobileOpen={mobileOpen}
			/>
		</>
	);
}
