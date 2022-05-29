import UserList from '@/components/screens/admin/user/UserList'

import { NextPageAuth } from '@/shared/types/auth.types'

const UserListPage: NextPageAuth = () => {
	return <UserList />
}

UserListPage.isOnlyUser = true

export default UserListPage
