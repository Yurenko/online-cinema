import { useQuery } from 'react-query'

import { IOption } from '@/components/ui/select/select.interface'

import { ActorService } from '@/services/actor/actor.service'

import { toastrError } from '@/utils/toastr-error'

export const useAdminActors = () => {
	const queryData = useQuery('list of actor', () => ActorService.getAll(), {
		select: ({ data }) =>
			data.map(
				(actor): IOption => ({
					label: actor.name,
					value: actor._id,
				})
			),
		onError(error) {
			toastrError(error, 'actor list')
		},
	})

	return queryData
}
