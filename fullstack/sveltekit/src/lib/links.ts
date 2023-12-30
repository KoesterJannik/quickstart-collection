import HomeIcon from '../components/icons/HomeIcon.svelte';

type NavLink = {
	name: string;
	href: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	icon: any;
};
export const NAVLINKS: ReadonlyArray<NavLink> = [
	{
		name: 'Dashboard',
		href: '/authenticated/dashboard',
		icon: HomeIcon
	},
	{
		name: 'Products',
		href: '/authenticated/products',
		icon: HomeIcon
	}
];

export const PROFILE_LINKS: ReadonlyArray<NavLink> = [
	{
		name: 'Profile',
		href: '/authenticated/profile',
		icon: HomeIcon
	},

	{
		name: 'Logout',
		href: '/authenticated/logout',
		icon: HomeIcon
	}
];
