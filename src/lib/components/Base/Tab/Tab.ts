import type { ComponentType } from "svelte";

export interface TabView {
	index: number;
	title: string;
	view?: ComponentType;
	props?: any;
}

export interface Tab {
	index: number;
	title: string;
	icon?: ComponentType;
	iconProps?: any;
}

