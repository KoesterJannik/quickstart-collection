import { writable } from 'svelte/store';
export const toastMessage = writable({
	title: '',
	message: ''
});
export function showToast(title: string, message: string) {
	const toastLiveExample = document.getElementById('liveToast');
	toastMessage.set({ title, message });
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	const toast = new bootstrap.Toast(toastLiveExample);

	toast.show();
}
