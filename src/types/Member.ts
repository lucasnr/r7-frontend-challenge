export default interface IMember {
	__id: string;
	name: string;
	description: string;
	picture: string;
	positive: number;
	order?: number;
}
