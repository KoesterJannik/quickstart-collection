<script>
	import { onMount } from 'svelte';
	import { showToast } from '../../../../stores/toastStore';

	onMount(() => {
		showToast('Success', 'Password changed successfully');
	});
</script>
