import { RouteWithChildren } from '../../components/RouteConstants';
import { BurjKhalifaRoute } from './BurjKhalifa';

export const DowntownDubaiRoute: RouteWithChildren = {
	name: 'Downtown Dubai',
	path: '/downtown-dubai',
	children: [BurjKhalifaRoute],
};
