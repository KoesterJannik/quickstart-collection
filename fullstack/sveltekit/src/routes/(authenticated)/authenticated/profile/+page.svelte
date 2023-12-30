<script lang="ts">
	import ProfilePage from '../../../../components/ProfilePage.svelte';
	export let data: any;
</script>

<ProfilePage user={data?.user} />
