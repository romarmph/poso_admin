<script lang="ts">
	import EnabledStatus from "$lib/components/Base/EnabledStatus.svelte";
	import type { SupabaseClient } from "@supabase/supabase-js";

	export let info;
	export let supabase: SupabaseClient;
	const data = info.info as Types.Violation;

	async function fetchUser(id: string): Promise<Types.User> {
		const { data, error } = await supabase
			.from("employees")
			.select()
			.eq("id", id);
		if (error) {
			throw "Error fetching user";
		}
		return data[0] as Types.User;
	}
</script>

<div class="w-[500px]">
	<div class="mb-3">
		<label for="" class="p-1 text-gray-500 text-xl">Name</label>
		<div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
			{data.name}
		</div>
	</div>
	<hr class="my-2" />
	<div class="mb-3">
		<label for="" class="p-1 text-gray-500 text-xl">Fine</label>
		<p class="text-red-500 mt-4">Big Vehicles</p>
		<ul>
			{#each Object.values(data.fine.big) as fine, i}
				<li class="my-2">
					<div
						class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50 flex justify-between"
					>
						<span class="text-gray-500">
							{i === 0 ? "1st" : i === 1 ? "2nd" : "3rd"} Offense
						</span>
						<span class="font-bold text-red-600">
							{fine}
						</span>
					</div>
				</li>
			{/each}
		</ul>
		<p class=" text-blue-500">Small Vehicles</p>
		<ul>
			{#each Object.values(data.fine.small) as fine, i}
				<li class="my-2">
					<div
						class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50 flex justify-between"
					>
						<span class="text-gray-500">
							{i === 0 ? "1st" : i === 1 ? "2nd" : "3rd"} Offense
						</span>
						<span class="font-bold text-blue-600">
							{fine}
						</span>
					</div>
				</li>
			{/each}
		</ul>
	</div>
	<hr class="my-2" />
	<div class="mb-3">
		<label for="" class="p-1 text-gray-500 text-xl">Status</label>
		<div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
			<EnabledStatus enabled={data.enabled} />
		</div>
	</div>
	<hr class="my-2" />
	<div class="mb-3">
		<label for="" class="p-1 text-gray-500 text-xl">History</label>
		<div
			class="p-2 my-2 rounded-lg text-gray-800 text-lg bg-gray-50 flex justify-between"
		>
			<span class="text-gray-500">Created at</span>
			{new Date(data.created_at).toLocaleString("en-PH", {
				timeZone: "UTC",
			})}
		</div>
		{#await fetchUser(data.created_by)}
			<p>Loading...</p>
		{:then value}
			<div
				class="p-2 my-2 rounded-lg text-gray-800 text-lg bg-gray-50 flex justify-between"
			>
				<span class="text-gray-500">Created by</span>
				{`${value.first_name} ${value.last_name}`}
			</div>
		{/await}

		<div
			class="p-2 my-2 rounded-lg text-gray-800 text-lg bg-gray-50 flex justify-between"
		>
			<span class="text-gray-500">Updated at</span>
			{new Date(data.updated_at).toLocaleString("en-PH", {
				timeZone: "UTC",
			})}
		</div>
		{#await fetchUser(data.updated_by)}
			<p>Loading...</p>
		{:then value}
			<div
				class="p-2 my-2 rounded-lg text-gray-800 text-lg bg-gray-50 flex justify-between"
			>
				<span class="text-gray-500">Updated by</span>
				{`${value.first_name} ${value.last_name}`}
			</div>
		{/await}
	</div>
</div>
