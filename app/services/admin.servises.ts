import { getUsersUrl } from '@/config/api.config'
import axios from '../api/interceptop'

export const AdminServises = {
	async getCountUsers() {
		return axios.get<number>(getUsersUrl('/count'))
	},
}
